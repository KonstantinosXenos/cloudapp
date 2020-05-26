// Original work by stephan281094 @ https://github.com/stephan281094/vue-drag-select

<template>
  <div class="vue-drag-select" @mousedown.self="onMouseDown">
    <slot :selectedItems="selectedItems" />
    <div v-if="mouseDown && endPoint" class="vue-drag-select-box" :style="selectionBoxStyling"></div>
  </div>
</template>

<script>
// Takes an array and returns a copy of the array without duplicates
// function uniqueArray (array) {
//   const newArray = array.concat()
//   for (let i = 0; i < newArray.length; ++i) {
//     for (let j = i + 1; j < newArray.length; ++j) {
//       if (newArray[i] === newArray[j]) {
//         newArray.splice(j--, 1)
//       }
//     }
//   }
//   return newArray
// }
import _ from 'lodash';  
function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
export default {
  name: "vue-drag-select",
  props: {
    store: {
      type: String,
      required: true
    },
    selectorClass: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: "rgba(0, 162, 255, .4)"
    }
  },
  data() {
    return {
      mouseDown: false,
      concat: false,
      startPoint: null,
      endPoint: null,
      selectedItems: [],
      scrollatstart: null
    };
  },
  computed: {
    selectionBox() {
      // Only set styling when necessary

      if (!this.mouseDown || !this.startPoint || !this.endPoint) return {};
      const clientRect = this.$el.getBoundingClientRect();
      const scroll = this.getScroll();
      // Calculate position and dimensions of the selection box
      const left =
        Math.min(this.startPoint.x, this.endPoint.x) -
        clientRect.left +
        scroll.x;

      var top = 0;
      var height = 0;
      var scrollDifferenceSinceClick = scroll.y - this.scrollatstart.y;
      if (this.startPoint.y - scrollDifferenceSinceClick <= this.endPoint.y) {
        top =
          this.startPoint.y +
          scroll.y -
          scrollDifferenceSinceClick -
          clientRect.top;
        height = Math.abs(
          this.startPoint.y - this.endPoint.y - scrollDifferenceSinceClick
        );
      } else {
        top = this.endPoint.y + scroll.y - clientRect.top;

        height = Math.abs(
          this.endPoint.y - this.startPoint.y + scrollDifferenceSinceClick
        );
      }
      const width = Math.abs(this.startPoint.x - this.endPoint.x);

      // Return the styles to be applied
      return {
        left,
        top,
        width,
        height
      };
    },
    selectionBoxStyling() {
      // Only set styling when necessary

      const { left, top, width, height } = this.selectionBox;
      // Return the styles to be applied
      return {
        left: `${left}px`,
        top: `${top}px`,
        width: `${width}px`,
        height: `${height}px`
      };
    }
  },
  watch: {
    selectedItems(val) {
      let items = val.map(it => it.item.pk);
      var pklist_a = this.$store.getters[this.store + "get_selected_icons"]


        if(!_.isEqual(_.sortBy(pklist_a), _.sortBy(items))){
        this.$store.commit(this.store + "select_icons", items);}
      
    }
  },
  methods: {
    getScroll() {
      // If we're on the server, default to 0,0
      if (typeof document === "undefined") {
        return {
          x: 0,
          y: 0
        };
      }
      return {
        x:
          this.$el.scrollLeft ||
          document.body.scrollLeft ||
          document.documentElement.scrollLeft,
        y: this.$el.scrollTop - document.documentElement.scrollTop
      };
    },
    onMouseDown(event) {
      // Ignore right clicks
      if (event.button === 2) return;
      // Check if shift is down
      this.concat = event.shiftKey;
      // Register begin point
      this.mouseDown = true;
      this.startPoint = {
        x: event.pageX,
        y: event.pageY
      };
      this.scrollatstart = this.getScroll();
      // Start listening for mouse move and up events
      window.addEventListener("mousemove", this.onMouseMove);
      window.addEventListener("scroll", this.onMouseMove);
      window.addEventListener("mouseup", this.onMouseUp);
    },
    onMouseMove(event) {
      if (this.mouseDown) {
        this.endPoint = {
          x: event.pageX,
          y: event.pageY
        };
        this.searchforselection();
      }
    },
    searchforselection: debounce(
      function() {
        if (this.mouseDown) {
          const children = this.$children.length
            ? this.$children
            : this.$el.children;
          if (children) {
            const selected = Array.from(children).filter(item => {
              return this.isItemSelected(item.$el || item);
            });
            // If shift was held during mousedown the new selection is added to the current. Otherwise the new selection
            // will be selected
            // this.selectedItems = this.concat ? uniqueArray(this.selectedItems.concat(selected)) : selected
            this.selectedItems = selected.length ? selected : [];
          }
        }
      },
      1,
      true
    ),
    onMouseUp() {
      // Clean up event listeners
      window.removeEventListener("mousemove", this.onMouseMove);
      window.removeEventListener("scroll", this.onMouseMove);
      window.removeEventListener("mouseup", this.onMouseUp);
      // Reset state
      this.mouseDown = false;
      this.concat = false;
      this.startPoint = null;
      this.endPoint = null;
    },
    isItemSelected(el) {
      if (el.classList && el.classList.contains(this.selectorClass)) {
        const boxA = this.selectionBox;
        const boxB = {
          top: el.offsetTop,
          left: el.offsetLeft,
          width: el.clientWidth,
          height: el.clientHeight
        };
        return !!(
          boxA.left <= boxB.left + boxB.width &&
          boxA.left + boxA.width >= boxB.left &&
          boxA.top <= boxB.top + boxB.height &&
          boxA.top + boxA.height >= boxB.top
        );
      }
      return false;
    }
  },
  mounted() {
    this.$children.forEach(child => {
      child.$on("click", () => {
        const included = this.selectedItems.find(item => {
          return child.$el === item.$el;
        });
        if (included) {
          this.selectedItems = this.selectedItems.filter(item => {
            return child.$el !== item.$el;
          });
        } else {
          this.selectedItems.push(child);
        }
      });
    });
  },
  beforeDestroy() {
    // Remove event listeners
    window.removeEventListener("mousemove", this.onMouseMove);
    window.removeEventListener("mouseup", this.onMouseUp);
    this.$children.forEach(child => {
      child.$off("click");
    });
  }
};
</script>

<style>
.vue-drag-select {
  position: relative;
  user-select: none;
}
.vue-drag-select-box {
  position: absolute;
  z-index: 99;
  border-style: solid;
  background: rgba(54, 54, 54, 0.24);
  border-color: rgb(0, 0, 0);
}
</style>
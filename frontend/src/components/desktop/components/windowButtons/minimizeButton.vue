<script>
import baseButton from './mixins/baseButton.vue'
export default {
 name: 'closeButton',
 
 data: function () {

     return {
    icon: 'chevron-down'
    }

 },
 mixins: [baseButton],
  methods: {
click_event() {
  this.$emit('minimize')
}

}}
</script>
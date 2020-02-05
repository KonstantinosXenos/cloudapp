<script>
import navigation from "@/components/navigator/interfaces/navigation.vue"
export default {
  name: "upmixin",
  mixins: [navigation],
  computed: {
    is_disabled() {
      return this.$store.getters[this.store+'parent_folder'] == null;
    }
  },
  methods: {
    click_event() {
    
      if (!this.is_disabled) {
            
            this.go_up(this.store)

      }
    }
  }
};
</script>
<script>
import navigation from "@/components/explorer/interfaces/navigation.vue"
export default {
  name: "upmixin",
  mixins: [navigation],
  computed: {
    is_disabled() {
      return this.$store.getters.parent_folder == null;
    }
  },
  methods: {
    click_event() {
    
      if (!this.is_disabled) {
    
            this.go_up()

      }
    }
  }
};
</script>
<script>
export default {
  name: "uploadfilemixin",
  computed: {
    is_disabled() {
      return false
    }
  },
  methods: {
    click_event() {
    
      this.$store.dispatch('update_folder_data', this.$store.getters.current_folder_id)
    }
  }
};
</script>
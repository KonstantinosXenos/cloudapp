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
    
      this.$store.dispatch(this.store+'update_folder_data', this.$store.getters[this.store+'current_folder_id'])
    }
  }
};
</script>
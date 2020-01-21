<script>
export default {
  name: "navigation",
  methods: {
    go_up() {
      if (this.router_mode) {
        this.$router.push({
          name: "explorer",
          params: { id: this.$store.getters.parent_folder }
        });
      } else {
        this.$store.dispatch(
          "update_folder_data",
          this.$store.getters.parent_folder
        );
      }
    },
    change_folder(folderid) {
      if (this.router_mode) {
        this.$router.push({
          name: "explorer",
          params: { id: folderid }
        });
      } else {
        this.$store.dispatch("update_folder_data", folderid);
      }
    }
  },
  data: function() {
    return {
      router_mode: false
    };
  }
};
</script>
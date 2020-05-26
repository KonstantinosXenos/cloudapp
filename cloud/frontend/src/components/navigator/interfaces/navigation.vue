<script>
export default {
  name: "navigation",
  methods: {
    go_up(store) {
      if (this.router_mode) {
        this.$router.push({
          name: "navigator",
          params: { id: this.$store.getters.parent_folder }
        });
      } else {
        this.$store.dispatch(store+
          "update_folder_data",
          this.$store.getters[store+'parent_folder']
        );
      }
    },
    change_folder(folderid,store) {
      if (this.router_mode) {
        this.$router.push({
          name: "navigator",
          params: { id: folderid }
        });
      } else {
        this.$store.dispatch(store+"update_folder_data", folderid);
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
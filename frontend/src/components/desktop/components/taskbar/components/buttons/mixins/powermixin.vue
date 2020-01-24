<script>
export default {
  name: "uploadfilemixin",
  computed: {
    is_disabled() {
      return false;
    }
  },
  methods: {
    click_event() {
      window.api
        .post("/authentication/logout/")
        .then(
          this.$router.push({
            name: "login"
          })
        )
        .catch(error => {
          error;
        });
    }
  }
};
</script>
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
    
      if (!this.is_disabled) {
    
            this.$emit('clickedfile')

      }
    }
  }
};
</script>
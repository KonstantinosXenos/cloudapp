<script>

export default {

  methods: {
    double_clicked_icon() {
      this.$router.push({ name: "explorer", params: { id: this.item.pk } });
    },
  },
  
};
</script>
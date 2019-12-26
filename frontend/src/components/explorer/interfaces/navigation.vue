<script>

export default {
name: 'navigation',
methods: {
go_up() {
    this.$router.push({ name: 'explorer', params: { id: this.$store.getters.parent_folder } })


}

}

};
</script>
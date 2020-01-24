<script>
import navigation from '@/components/navigator/interfaces/navigation.vue'
export default {
mixins:[navigation],
  methods: {
    double_clicked_icon() {
      this.change_folder(this.item.pk)
    },
  },
  
};
</script>
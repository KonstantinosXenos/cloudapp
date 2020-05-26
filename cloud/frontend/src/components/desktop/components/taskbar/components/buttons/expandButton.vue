<script>
import baseButton from './mixins/baseButton.vue'
import expandmixin from './mixins/expandmixin.vue'
export default {
 name: 'closeButton',
 
 data: function () {

     return {
    icon: 'expand-arrows-alt'
    }

 },
 mixins: [baseButton,expandmixin],
}
</script>
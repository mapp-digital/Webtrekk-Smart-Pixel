<template>
  <div>
    <ChildComponent />
  </div>
</template>
<script>
import ChildComponent from './Child-component.vue';
export default {
  components: {
    ChildComponent,
  },
  data() {
    return {
      webtrekk: {
        page: {
          parameter: {
            1: 'Parent component',
          },
          category: {
            1: 'Parent component',
          },
        },
      },
    };
  },
};
</script>
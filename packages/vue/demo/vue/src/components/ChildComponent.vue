<template>
  <div>
    <h1>Child component</h1>
    <p>This component has webtrekk key in its data.</p>
    <GrandChildComponent />
  </div>
</template>
<script>
import GrandChildComponent from './GrandChildComponent.vue';
export default {
  components: {
    GrandChildComponent,
  },
  data() {
    return {
      webtrekk: {
        page: {
          parameter: {
            1: 'Child component',
          },
          category: {
            1: 'Child component',
          },
        },
      },
    };
  },
};
</script>
<template>
  <div class="about">
    <h1>Tracking via data</h1>
    <p>Here is a view with a webtrekk data property.</p>
    <p>There is a child and a grandchild component too.</p>
    <p>They have webtrekk data too.</p>
    <ChildComponent />

  </div>
</template>
<script>
import ChildComponent from '../components/ChildComponent';
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  components: {
    ChildComponent,
    HelloWorld
  },
  data() {
    return {
      webtrekk: {
        page: {
          name: 'data page',
          parameter: {
            3: 'Data component',
          },
        },
      },
    };
  },
};
</script>

<template>
<section>
    <div v-webtrekk.page="{name: 'testpage', parameter: {1: 'test page parameter 1'}}">page</div>
    <p v-webtrekk.product.basket.view.list.confirmation="{
            id: '1st product',
            cost: 99.90,
            quantity: 2,
            soldOut: false,
            variant: 'green',
            parameter: {
                1: 'L'
            },
            category: {
                1: 'tops',
            }}"
        >1st Product</p>
        <p v-webtrekk.product.list="{id:'2nd product'}">Product #2</p>
        <p v-webtrekk.product.list="{id: '3rd product', cost: 9.99}">Product #3</p>
        <p v-webtrekk.order="{id: 'orderId', value: 9.99}">Order</p>
</section>

    
</template>;

<script>
import {wtBeforeRouteLeave} from '../../src/lib/routerHookFunctions';

export default {
  name: "DeactivateAutotracking",
  beforeRouteLeave(to, from, next) {
    wtBeforeRouteLeave(next);
  }
}
</script>
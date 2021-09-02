<template>
    <div>
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
    </div>
</template>

<script>
    export default {
        name: 'product-directive'
    };
</script>
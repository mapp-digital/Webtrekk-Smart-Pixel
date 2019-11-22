<template>
    <div>
        <h1 v-webtrekk.page="{ parameter: { 1: 'track with directives' } }">Directives</h1>
        <p v-webtrekk.session="{ parameter: { 1: 'directives session' } }">Here we track data with directives.</p>
      <div>
        <ul v-webtrekk.products.view.basket.list.confirmation="productData">
            <li v-for="product in productData"
                :key="product.id">
                {{product.id}} - {{product.cost}}
            </li>
        </ul>
    </div>

    </div>
</template>
<script>
    export default {
        data() {
            return {
                 productData: [
                    {id: 'product1', cost: 1},
                    {id: 'product2', cost: 2},
                    {id: 'product3', cost: 3}
                ]
            };
        },

    };
</script>

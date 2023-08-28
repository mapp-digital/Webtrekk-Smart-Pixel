<template>
    <div>
        <ul v-webtrekk.products.list.view.basket.addToCart.deleteFromCart.checkout.confirmation.addToWishlist.deleteFromWishlist="productData">
            <li v-for="product in productData"
                :key="product.id">
                {{product.id}} - {{product.cost}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'product-directive',
        data: function() {
            return {
                productData: [
                    {id: 'product1', cost: 1},
                    {id: 'product2', cost: 2},
                    {id: 'product3', cost: 3}
                ]
            };
        }
    };
</script>
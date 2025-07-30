<template>
    <div>
        <div class="productlist" v-for="product in products" :key="product.id">
            <ProductPreview :product="product" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProductPreview from "/src/components/ProductPreview.vue";

export default defineComponent({
    name: "ProductList",
    props: {
        products: {
            type: Array as () => { id: number; [key: string]: any }[],
            required: false,
        },
    },
    components: {
        ProductPreview,
    },
});
</script>

<style></style>

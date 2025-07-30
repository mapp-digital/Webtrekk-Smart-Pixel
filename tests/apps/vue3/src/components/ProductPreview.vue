<template>
  <div class="card" :id="'product_' + product.id">
    <router-link :to="'/shop/' + product.id">
      <img
        :src="product.imageUrl"
        :alt="product.name + 'title'"
        style="width: 100%"
      />
    </router-link>
    <router-link :to="'/shop/' + product.id">
      <h1>{{ product.name }}</h1>
    </router-link>
    <p class="price">${{ product.price }}</p>
    <p>{{ product.description }}</p>
    <p>
      <button @click="addToCart(product)">
        Add to Cart
      </button>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from "vue";
import store from "../store";

export default defineComponent({
  name: "ProductPreview",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const { product } = toRefs(props); // Access product prop reactively

    // Action to add product to cart
    const addToCart = (product: any) => {
      store.dispatch("addToCart", product);
    };

    return {
      product,
      addToCart,
    };
  },
});
</script>

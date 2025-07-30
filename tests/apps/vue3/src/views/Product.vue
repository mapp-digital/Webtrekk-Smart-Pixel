<template>
  <div v-if="product.length === 0">
    <p>Loading product data...</p>
  </div>
  <div v-else>
    <h1>{{ product[0].name }}</h1>
    <img :src="product[0].imageUrl" :alt="product[0].name" />
    <p>{{ product[0].description }}</p>
    <p>
      <small>SKU: {{ product[0].sku }}</small>
    </p>
    <p>
      <strong>Price: ${{ product[0].price }}</strong>
    </p>
    <form>
      <input type="number" name="quantity" min="1" v-model="quantity" />
      <button type="submit" @click.prevent="handleAddToCart">
        Add to cart
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
import { getFixtureData } from "../helpers/fixture";
import App from "./../main";

interface ProductData {
  name: string;
  price: number;
  description: string;
  sku: string;
  id: number;
  imageUrl?: string;
}

export default defineComponent({
  name: "Product",
  setup() {
    App.$webtrekk.deactivateAutoTracking = true;

    // Vue Router
    const route = useRoute();
    const productId = route.params.id;

    // Reactive state
    const quantity = ref(1);
    const product = ref<ProductData[]>([]);

    // Computed properties from Vuex
    const isLoggedOut = computed(() => store.getters.isLoggedOut);
    const userData = computed(() => store.getters.userData);

    // Fetch product data
    const getProduct = async () => {
      product.value = await getFixtureData(`products/id/${productId}`);
      App.$webtrekk.page({
        parameter: {
          1: "Single Product"
        }
      });
      App.$webtrekk.product("view", {
        id: String(product.value[0].id),
        cost: product.value[0].price,
        quantity: 1,
      });
      App.$webtrekk.track();
    };

    // Add product to cart
    const handleAddToCart = () => {
      store.dispatch("addToCart", {
        ...product.value[0],
        quantity: quantity.value,
      });
    };

    // Fetch product on mount
    onMounted(getProduct);

    return {
      quantity,
      product,
      isLoggedOut,
      userData,
      handleAddToCart,
    };
  },
});
</script>

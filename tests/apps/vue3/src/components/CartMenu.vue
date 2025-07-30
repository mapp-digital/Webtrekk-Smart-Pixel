<template>
  <div v-if="cartIsOpen" id="myModal" class="modal">
    <div class="modal-content">
      <div class="modal-header">
        <span class="close" @click="closeCart">&times;</span>
        <h2>You have {{ cartAmount }} items in your cart</h2>
      </div>
      <div v-if="cartAmount > 0">
        <table class="cartTable">
          <tr>
            <th></th>
            <th>Product</th>
            <th>Price</th>
            <th></th>
            <th>Quantity</th>
            <th></th>
            <th>Sum</th>
          </tr>
          <CartItem
            v-for="product in cart"
            :key="product.id"
            :product="product"
          />
        </table>
      </div>
      <div v-else>
        <p>Your cart is empty</p>
      </div>
      <div class="modal-footer" v-if="cartAmount > 0">
        <p>${{ cartSum }}</p>
        <button
          v-if="isLoggedOut"
          type="submit"
          @click.prevent="goToLogin"
        >
          Login or register to checkout
        </button>
        <button
          id="addOrder"
          v-else
          type="submit"
          @click.prevent="addOrder"
        >
          Order Items
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import store from "../store";
import CartItem from "/src/components/CartItem.vue";
import router from "../router";

export default defineComponent({
  name: "CartMenu",
  components: {
    CartItem,
  },
  setup() {
    // Computed properties from Vuex store
    const cartAmount = computed(() => store.getters.cartAmount);
    const cartIsOpen = computed(() => store.getters.cartIsOpen);
    const cart = computed(() => store.getters.cart);
    const cartSum = computed(() => store.getters.cartSum);
    const isLoggedOut = computed(() => store.getters.isLoggedOut);

    // Methods to dispatch Vuex actions
    const closeCart = () => {
      store.dispatch("closeCart");
    };

    const addOrder = () => {
      store.dispatch("addOrder");
    };

    const goToLogin = () => {
      closeCart();
      store.dispatch("closeCart"); 
      router.push("login");
    };

    return {
      cartAmount,
      cartIsOpen,
      cart,
      cartSum,
      isLoggedOut,
      closeCart,
      addOrder,
      goToLogin,
    };
  },
});
</script>

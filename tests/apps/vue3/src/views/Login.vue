<template>
  <div class="login-wrapper">
    <div>
      <h2>Register</h2>
      <p>Register if you are a new user.</p>
      <form id="register">
        <p>
          First name:
          <input name="firstName" v-model="regFirstName" type="text" />
        </p>
        <p>
          Last name:
          <input name="lastName" v-model="regLastname" type="text" />
        </p>
        <p>
          Username:
          <input name="name" v-model="regName" type="text" />
        </p>
        <p>
          Password:
          <input name="password" v-model="regPassword" type="password" />
        </p>
        <p>
          <button
            @click.prevent="handleRegister"
            type="submit"
          >
            Register
          </button>
        </p>
      </form>
    </div>
    <div>
      <h2>Login</h2>
      <p>Login with your existing credentials.</p>
      <form id="login">
        <p>
          Name:
          <input name="name" v-model="loginName" type="text" />
          Password:
          <input name="password" v-model="loginPassword" type="password" />
        </p>
        <p>
          <button
            @click.prevent="handleLogin"
            type="submit"
          >
            Login
          </button>
        </p>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import store from "../store";
import App from "./../main";

export default defineComponent({
  name: "Login",
  setup() {
    App.$webtrekk.page({
        parameter: {
          1: "Login"
        }
      });
    // Reactive state for registration and login
    const loginName = ref("");
    const loginPassword = ref("");
    const regName = ref("");
    const regFirstName = ref("");
    const regLastname = ref("");
    const regPassword = ref("");

    // Actions for login and registration
    const handleRegister = () => {
      store.dispatch("register", {
        name: regName.value,
        password: regPassword.value,
        firstName: regFirstName.value,
        lastName: regLastname.value,
      });
    };

    const handleLogin = () => {
      store.dispatch("login", {
        name: loginName.value,
        password: loginPassword.value,
      });
    };

    // Computed properties from Vuex (optional)
    const isLoggedOut = computed(() => store.getters.isLoggedOut);

    return {
      loginName,
      loginPassword,
      regName,
      regFirstName,
      regLastname,
      regPassword,
      handleRegister,
      handleLogin,
      isLoggedOut,
    };
  },
});
</script>

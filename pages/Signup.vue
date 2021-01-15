<template>
  <div class="signup-form">
    <form @submit.prevent="registration">
      <p class="error" v-if="error">{{ error }}</p>
      <p><input type="text" v-model="email" placeholder="email" /></p>
      <p><input type="text" v-model="password" placeholder="password" /></p>
      <div class="signup-btn">
        <button type="submit">Sign up</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      error: null,
      email: "",
      password: "",
    };
  },
  methods: {
    async registration() {
      try {
        await this.$store.dispatch("registration", {
          email: this.email,
          password: this.password,
        });
        this.$router.push("/");
      } catch (e) {
        this.formError = e.message;
      }
    },
  },
};
</script>

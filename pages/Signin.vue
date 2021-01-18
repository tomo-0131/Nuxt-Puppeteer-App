<template>
  <v-card elevation="2" class="text-center mx-auto my-8" max-width="574">
    <div class="container">
      <h2>ログイン</h2>
      <br />
      <form class="login-form">
        <v-text-field
          v-model="email"
          prepend-icon="mdi-account-circle"
          label="メールアドレス"
          required
        ></v-text-field>
        <br />
        <v-text-field
          prepend-icon="mdi-lock"
          v-model="password"
          label="パスワード"
          required
        ></v-text-field>
        <br />
        <div class="input-group">
          <v-btn color="secondary" @click="login()">送信</v-btn>
          <LogoutButton />
        </div>
      </form>
    </div>
  </v-card>
</template>

<script>
import axios from "./axios-for-auth";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      axios
        .post(
          "/accounts:signInWithPassword?key=AIzaSyA1iIc8nGONSO3jXUAbQ-ze6WNsZmjUSNM",
          {
            email: this.email,
            password: this.password,
            returnSecureToken: true,
          }
        )
        .then((response) => {
          this.$store.commit("updateIdToken", response.data.idToken);
          this.$router.push("/");
        });
      this.email = "";
      this.password = "";
    },
  },
};
</script>

<style>
.input-group {
  margin: 5px;
}
</style>

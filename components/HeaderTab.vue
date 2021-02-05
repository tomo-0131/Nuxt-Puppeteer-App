<template>
  <v-tool-bar dense fixed>
    <br />
    <v-toolbar-title class="text-center">
      <nuxt-link to="/">TOMOYUKI KUMAGAI</nuxt-link>
    </v-toolbar-title>
    <br />
    <v-tabs color="green" centered v-model="tab">
      <v-tab>
        <nuxt-link to="/">HOME</nuxt-link>
      </v-tab>
      <v-tab>
        <nuxt-link to="/about">ABOUT</nuxt-link>
      </v-tab>
      <v-tab v-if="isLoggedIn">
        <nuxt-link to="/signin">ログイン</nuxt-link>
      </v-tab>
      <v-tab v-if="isLoggedIn">
        <nuxt-link to="/signup">新規登録</nuxt-link>
      </v-tab>
    </v-tabs>
  </v-tool-bar>
</template>

<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.getters.idToken !== null;
    },
  },
};
</script>

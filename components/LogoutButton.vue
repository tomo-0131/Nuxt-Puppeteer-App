<template>
  <v-btn color="light-green" dark @click="logout()">ログアウト</v-btn>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.commit("updateIdToken", null);
      this.$router.push("/signup");
    },
  },
};
</script>

<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="9" md="6">
      <v-img
        src="https://res.fashionsnap.com/image/upload/f_auto,q_auto/asset/collection/images/2020/08/sacai-21ss-pre-001.jpg?1607036664240"
        height="250px"
      ></v-img>
      <br />
      <v-divider></v-divider>
      <br />
      <TabContents />
      <div class="container"></div>
      <v-row justify="center" align="center">
        <v-btn
          class="ma-1"
          color="light-green darken-1"
          dark
          elevation="5"
          nuxt
          to="/api"
        >
          <v-icon dark right> mdi-checkbox-marked-circle </v-icon>
          　SCRAPING!　
        </v-btn>
        <br />
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const items = await $axios.$get("http://localhost:5000/api");
    return { items };
  },
};
</script>

<template>
  <v-row justify="center" align="center">
    <v-col cols="10">
      <v-img
        src="https://res.fashionsnap.com/image/upload/f_auto,q_auto/asset/collection/images/2020/08/sacai-21ss-pre-001.jpg?1607036664240"
        height="210px"
      ></v-img>
      <br />
      <v-divider></v-divider>
      <v-card
        class="text-center"
        color="light-green darken-1"
        dark
        elevation="3"
      >
        <h3>SACAI</h3>
      </v-card>
      <br />
      <v-divider></v-divider>
      <br />
      <h5　class="grey--text text--darken-2 text-center">
        Comme des
        Garçonsで勤めた経歴を持つ阿部千登勢が1999年に立ち上げたブランド。
      </h5>
      <br />
      <v-row>
        <v-img
          lazy-src="https://cdn-images.farfetch-contents.com/15/46/69/99/15466999_27973921_1000.jpg"
          cols="6"
          sm="4"
          width="300"
          height="300"
          href="https://yahoo.com"
          src="https://cdn-images.farfetch-contents.com/15/46/69/99/15466999_27973921_1000.jpg"
        ></v-img>
        <v-divider vertical></v-divider>
        <br>
        <v-img
          lazy-src="https://cdn-images.farfetch-contents.com/15/46/69/99/15466999_27973921_1000.jpg"
          cols="6"
          sm="4"
          width="300"
          height="300"
          src="https://cdn-images.farfetch-contents.com/15/46/69/99/15466999_27973921_1000.jpg"
        ></v-img>
        <v-divider vertical></v-divider>
        <br />
        <v-img
          lazy-src="https://cdn-images.farfetch-contents.com/15/46/69/99/15466999_27973921_1000.jpg"
          cols="6"
          sm="4"
          width="300"
          height="300"
          src="https://cdn-images.farfetch-contents.com/15/46/69/99/15466999_27973921_1000.jpg"
        ></v-img>
        <v-divider vertical></v-divider>
      </v-row>
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
//export default {
//async asyncData({ $axios }) {
//const items = await $axios.$get("http://localhost:5000/");
//return { items };
//},
//};
</script>

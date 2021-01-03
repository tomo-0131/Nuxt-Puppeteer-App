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
      <v-container class="grey lighten-5">
        <v-row
          v-for="n in 2"
          :key="n"
          :class="n === 1 ? 'mb-6' : ''"
          no-gutters
        >
          <v-col v-for="k in n + 1" :key="k">
            <v-card class="pa-2" outlined tile> {{ k }} of {{ n + 1 }} </v-card>
          </v-col>
        </v-row>
      </v-container>
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

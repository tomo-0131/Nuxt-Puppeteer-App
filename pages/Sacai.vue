<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="10">
        <br />
        <v-col cols="12" lg="12" xs="4" class="pa-2">
          <nuxt-link to="/sacai">
            <v-row justify="center">
              <v-img
                class="justify-center"
                lazy-src="https://picsum.photos/id/11/10/6"
                max-height="181"
                max-width="202"
                v-bind:src="require('@/assets/image/sacai.png')"
              ></v-img>
            </v-row>
          </nuxt-link>
        </v-col>
        <br />
        <v-divider></v-divider>
        <br />
        <div style="white-space: wrap; word-wrap: break-word">
          <h5 class="grey--text text--darken-2 text-center">
            Comme des Garçonsで勤めた経歴を持つ阿部千登勢が
            1999年に立ち上げたブランド。
            異素材をドッキングさせたデザインがアイコニックである。
          </h5>
        </div>
        <br />
        <v-divider></v-divider>
        <br />
        <ImageList />
        <br />
        <br />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
//export default {
//async asyncData({ $axios }) {
//const items = await $axios.$get("http://localhost:5000/");
//return { items };
//},
//};
</script>

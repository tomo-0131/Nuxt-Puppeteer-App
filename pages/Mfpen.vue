<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="10">
        <br />
        <v-col cols="12" lg="12" xs="4" class="pa-2">
          <nuxt-link to="/mfpen">
            <v-row justify="center">
              <v-img
                class="justify-center"
                lazy-src="https://picsum.photos/id/11/10/6"
                max-height="181"
                max-width="202"
                v-bind:src="require('@/assets/image/mfpen.png')"
              ></v-img>
            </v-row>
          </nuxt-link>
        </v-col>
        <br />
        <v-divider></v-divider>
        <br />
        <div style="white-space: wrap; word-wrap: break-word">
          <h5 class="grey--text text--darken-2 text-center">
            2016年の秋冬よりスタートしたコペンハーゲンのメンズウェアブランド。
            デザイナーはSigurdBank。様々なブランドでデザインやプロダクションを経験したのち独立。
            スカンジナビアの伝統的な紳士服を、実験的で遊び心のあるデザインでモダンに仕上げ、リラックスしたムードが特徴。
            生地とカッティングに拘りのあるブランドです。
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

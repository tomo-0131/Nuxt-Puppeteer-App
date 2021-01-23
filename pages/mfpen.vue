<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="10">
        <v-row justify="center">
          <v-breadcrumbs :items="items" divider="/"></v-breadcrumbs>
        </v-row>
        <MfpenLogo />
        <br />
        <v-divider></v-divider>
        <br />
        <div style="white-space: wrap; word-wrap: break-word">
          <h5 class="grey--text text--darken-2 text-center">
            <div class="text-center">
              2016年の秋冬よりスタートしたコペンハーゲンのメンズウェアブランド。
              <br />デザイナーはSigurdBank。<br />様々なブランドでデザインやプロダクションを<br />経験したのち独立。
              <br />スカンジナビアの伝統的な紳士服を、実験的で遊び心のあるデザインでモダンに仕上げ、<br />リラックスしたムードが特徴。
            </div>
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
export default {
  data: () => ({
    items: [
      {
        text: "home",
        disabled: false,
        href: "/",
      },
      {
        text: "mfpen",
        disabled: false,
        href: "/mfpen",
      },
    ],
  }),
};
</script>

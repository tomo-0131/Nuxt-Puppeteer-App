<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="10">
        <v-row justify="center">
          <v-breadcrumbs :items="items" divider="/"></v-breadcrumbs>
        </v-row>
        <SacaiLogo />
        <div style="white-space: wrap; word-wrap: break-word">
          <h5 class="grey--text text--darken-2 text-center">
            Comme des Garçonsで勤めた経歴を持つ阿部千登勢が
            1999年に立ち上げたブランド。<br />
            異素材をドッキングさせたデザインがアイコニックである。
          </h5>
        </div>
        <br />
        <v-divider />
        <br />
        <div class="container">
          <a
            href="https://www.farfetch.com/jp/shopping/men/sacai--item-15467038.aspx?storeid=10167"
          >
            <v-img
              class="justify-center"
              max-height="181"
              max-width="202"
              v-bind:src="texts.imageUrl"
            ></v-img>
          </a>
          <br />
          <v-divider></v-divider>
          <ImageList />
        </div>

        <v-btn class="ma-2" color="light-green darken-1" elevation="5" dark nuxt to="/">
          <v-icon dark left> mdi-arrow-left </v-icon>
          BACK
        </v-btn>
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
        text: "sacai",
        disabled: false,
        href: "/sacai",
      },
    ],
  }),
};
</script>

<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="10">
        <v-row justify="center">
          <v-breadcrumbs :items="items" divider="/"></v-breadcrumbs>
        </v-row>
        <MargielaLogo />
        <br />
        <v-divider></v-divider>
        <br />
        <div style="white-space: wrap; word-wrap: break-word">
          <h5 class="grey--text text--darken-2 text-center">
            2014年にMaison
            Margiela（メゾン・マルジェラ）のクリエイティブディレクターに就任したJohn
            Galliano（ジョン・ガリアーノ）は、ブランドを象徴する脱構築的デザインを踏襲し、
            クラシックなシルエットを蘇らせました。非の打ち所のないハイクオリティなテーラリング技術が
            堪能できるトレンチコートやシャツのほか、アイコニックな《Tabi（タビ）》シリーズのブーツ、
            スニーカーなども必見です。
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
        text: "maison margirla",
        disabled: false,
        href: "/maisonmargiela",
      },
    ],
  }),
};
</script>

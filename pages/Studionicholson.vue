<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="10">
        <v-row justify="center">
          <v-breadcrumbs :items="items" divider="/"></v-breadcrumbs>
        </v-row>
        <v-col cols="12" lg="12" xs="4" class="pa-2">
          <v-row justify="center">
            <v-img
              class="justify-center"
              lazy-src="https://picsum.photos/id/11/10/6"
              max-height="181"
              max-width="202"
              v-bind:src="require('@/assets/image/studionicholson.png')"
            ></v-img>
          </v-row>
        </v-col>
        <br />
        <v-divider></v-divider>
        <br />
        <v-row justify="center">
          <v-col cols="8">
            <div style="white-space: wrap; word-wrap: break-word">
              <h5 class="grey--text text--darken-2 text-center">
                STUDIO NICHOLSON (WOMANS) を手掛けていた、
                ニック・ウェイクマンが17AWからメンズラインを開始。
                建築からインスピレーションを受けてデザインに反映されることが多い。
              </h5>
            </div>
          </v-col>
        </v-row>
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
        text: "studio nicholson",
        disabled: false,
        href: "/studionicholson",
      },
    ],
  }),
};
</script>

<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="10">
        <v-row justify="center">
          <v-breadcrumbs :items="items" divider="/"></v-breadcrumbs>
        </v-row>
        <StudioNicholsonLogo />
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

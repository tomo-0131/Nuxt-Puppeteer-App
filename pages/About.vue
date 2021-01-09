<template>
  <v-container>
    <v-row justify="center">
      <v-breadcrumbs :items="items" divider="/"></v-breadcrumbs>
    </v-row>
    <div class="text-center">
      <h2>A B O U T</h2>
    </div>
    <br />
    <v-row justify="center">
      <v-img
        class="justify-center"
        lazy-src="https://picsum.photos/id/1067/500/300"
        max-height="400"
        max-width="300"
        src="https://picsum.photos/id/1067/500/300"
      ></v-img>
      <br />
    </v-row>
    <v-row class="text-center">
      <div style="white-space: wrap; word-wrap: break-word">
        <br />
        <h2 class="text-center">P L I M E</h2>
        <br />
        <div class="text-center">
          PLIMEは世界中のファッションブランドを集めた、<br />ファッション総合ECサイトです。
        </div>
        <div class="text-center">
          全てのファッションユーザー対し、
          最新のweb技術による無駄のない洗練された<br />
          ユーザー体験をお届けするため、革新的な<br />ファッションサービスを提供します。
        </div>
        <br />
        <div class="text-center">
          PLIME is a comprehensive fashion <br />e-commerce site that collects
          fashion brands from all over the world. <br />
          We will provide new fashion<br />
          services to all fashion<br />
          users in order to provide a lean and sophisticated<br />user
          experience with the latest web technology.
        </div>
      </div>
    </v-row>
    <br />
    <br />
    <v-row justify="center">
      <v-img
        class="justify-center"
        lazy-src="https://picsum.photos/id/147/500/300"
        max-height="400"
        max-width="300"
        src="https://picsum.photos/id/147/500/300?greyscale"
      ></v-img>
      <br />
    </v-row>
    <br />
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
        text: "about",
        disabled: false,
        href: "/about",
      },
    ],
  }),
};
</script>

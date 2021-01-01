<template>
  <div id="app">
    <v-app id="inspire">
      <v-footer dark padless>
        <v-card flat tile class="indigo lighten-1 white--text text-center">
          <v-card-text>
            <v-btn
              v-for="icon in icons"
              :key="icon"
              class="mx-10 white--text"
              icon
            >
              <v-icon size="24px">
                {{ icon }}
              </v-icon>
            </v-btn>
          </v-card-text>

          <v-card-text class="white--text pt-0">
            Nuxt.js, Node.js, Puppeteer, Express
          </v-card-text>

          <v-divider></v-divider>

          <v-card-text class="white--text">
            {{ new Date().getFullYear() }} — <strong>FARFETCH SCRAPING!</strong>
          </v-card-text>
        </v-card>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
export default {
  data: () => ({
    icons: ["mdi-github", "mdi-twitter"],
  }),
};
</script>

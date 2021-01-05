<template>
  <div id="tabs">
    <v-card color="basil">
      <v-tabs
        v-model="tab"
        background-color="transparent"
        color="light-green darken-1"
        grow
      >
        <v-tab v-for="item in items" max-width="200px" :key="item.tab">
          {{ item.tab }}
        </v-tab>
      </v-tabs>
      <br />
      <v-row justify="center" align="center">
        <v-tabs-items v-model="tab">
          <v-tab-item v-for="item in items" :key="item.tab">
            <v-card flat>
              <v-card-text>{{ item.content }}</v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: null,
      items: [
        {
          tab: "What is Scraping?",
          content: "Scraping means collecting data and processing it.",
        },
        {
          tab: "Tech Stack",
          content: "Nuxt.js, Vuetify, ,Express, Puppeteer, Node.js",
        },
      ],
    };
  },
};
</script>

<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="9" md="6">
      <v-card
        elevation="2"
        height="470px"
      >
        <v-img
          src="https://res.fashionsnap.com/image/upload/f_auto,q_auto/asset/collection/images/2020/08/sacai-21ss-pre-001.jpg?1607036664240"
          height="200px"
        ></v-img>
      <div>
        <v-card-title class="headline">
          <h5 class="scraping-head">S C R A P I I N G</h5>
        </v-card-title>
          <div id="tabs">
            <v-card color="basil">
              <v-tabs
                v-model="tab"
                background-color="transparent"
                color="info"
                grow
              >
                <v-tab
                  v-for="item in items"
                   max-width="200px"
                  :key="item.tab"
                >
                  {{ item.tab }}
                </v-tab>
              </v-tabs>
            <v-row justify="center" align="center">
              <v-tabs-items v-model="tab">
                <v-tab-item
                  v-for="item in items"
                  :key="item.tab"
                >
                  <v-card
                    flat
                  >
                    <v-card-text>{{ item.content }}</v-card-text>
                  </v-card>
                </v-tab-item>
              </v-tabs-items>
            </v-row>
            </v-card>
          </div>
        </div>
        <br>
        <v-card-actions>
          <v-row justify="center" align="center">
            <v-btn
              class="v-btn-scraping"
              outlined
              color="Yellow"
              elevation="5"
              nuxt
              to="/scraping"
            >

              SCRAPING!

            </v-btn>

          </v-row>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    data(){
      return {
        tab: null,
        items: [
          { tab: 'What is Scraping?', content: '”Scraping”” means collecting data and processing it so that it is easy to use.' },
          { tab: 'Tech Stack', content: 'Nuxt.js, Vuetify, Puppeteer' },
        ],
      }
    },
  }
</script>

<style>
.scraping-head  {
  margin: 0 auto;
}

.v-btn-scraping:hover {
  color: #dd9638;
}
</style>

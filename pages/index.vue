<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="9" md="6">
      <v-card elevation="2" height="470px">
        <v-img
          src="https://res.fashionsnap.com/image/upload/f_auto,q_auto/asset/collection/images/2020/08/sacai-21ss-pre-001.jpg?1607036664240"
          height="200px"
        ></v-img>
        <div>
          <v-card-title class="headline">
            <h5 class="scraping-head">S C R A P I I N G</h5>
          </v-card-title>
        </div>
        <div>
          <TabContents />
          <br />
          <v-card-actions>
            <v-row justify="center" align="center">
              <v-btn
                class="v-btn-scraping"
                outlined
                color="Yellow"
                elevation="5"
                nuxt
                to="/api/users"
              >
                SCRAPING!
              </v-btn>
            </v-row>
          </v-card-actions>
          <SoContentsTable />
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<style>
.scraping-head {
  margin: 0 auto;
}

.v-btn-scraping:hover {
  color: #dd9638;
}
</style>

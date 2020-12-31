<template>
  <div class="container">
    <div class="text-center">
      <div class="main">
        <v-expansion-panels v-model="panel" :disabled="disabled" multiple>
          <v-expansion-panel>
            <v-expansion-panel-header>ID</v-expansion-panel-header>
            <v-expansion-panel-content>
              <h5>{{ items.id }}</h5>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>イメージURL</v-expansion-panel-header>
            <v-expansion-panel-content>
              <h5>{{ items.imageUrl }}</h5>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>ブランド名</v-expansion-panel-header>
            <v-expansion-panel-content>
              <h5>{{ items.brandName }}</h5>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>商品名</v-expansion-panel-header>
            <v-expansion-panel-content>
              <h5>{{ items.itemName }}</h5>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>価格</v-expansion-panel-header>
            <v-expansion-panel-content>
              <h5>{{ items.price }} (税込)</h5>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>素材</v-expansion-panel-header>
            <v-expansion-panel-content>
              <h5>{{ items.material }}</h5>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header
              >ブランドスタイルID</v-expansion-panel-header
            >
            <v-expansion-panel-content>
              <h5>{{ items.brandStyleId }}</h5>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <br />
        <v-btn @click="reload" class="ma-2" dark color="yellow darken-2">
          <v-icon>mdi-reload</v-icon></v-btn
        >
        <v-btn
          class="ma-2"
          color="blue lighten-1"
          dark
          elevation="5"
          nuxt
          to="/"
        >
          <v-icon dark left> mdi-arrow-left </v-icon>
          BACK
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const items = await $axios.$get("http://localhost:5000/api");
    return {
      items,
    };
  },
  methods: {
    reload() {
      location.reload();
    },
  },
};
</script>

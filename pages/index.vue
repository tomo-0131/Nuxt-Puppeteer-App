<template>
  <v-card class="mx-auto" max-width="500" max-height="500">
    <br />
    <v-list-item three-line>
      <div class="scraping">
        <h5>ID：{{ items.id }}</h5>
        <br />
        <h5>商品画像URL：{{ items.imageUrl }}</h5>
        <br />
        <h5>ブランド名：{{ items.brandName }}</h5>
        <br />
        <h5>アイテム名：{{ items.itemName }}</h5>
        <br />
        <h5>価格：￥{{ items.price }} (税込)</h5>
        <br />
        <h5>素材：{{ items.material }}</h5>
        <br />
        <h5>ブランドスタイルID：{{ items.brandStyleId }}</h5>
      </div>
    </v-list-item>
    <br />
  </v-card>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const items = await $axios.$get("http://localhost:5000/");
    return { items };
  },
};
</script>

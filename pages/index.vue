<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="9" md="6">
      <v-card elevation="2" height="610px">
        <v-img
          src="https://res.fashionsnap.com/image/upload/f_auto,q_auto/asset/collection/images/2020/08/sacai-21ss-pre-001.jpg?1607036664240"
          height="180px"
        ></v-img>
        <TabContents />
        <div class="container">
          <div>
            <div class="main">
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
          </div>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const items = await $axios.$get("http://localhost:5000/");
    return { items };
  },
};
</script>

<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        FARFETCH PUPPETEER
      </h1>
      <div class="main">
        <h2>アイテム詳細</h2>
        <p class="time">更新日時：{{ data.datetime }}</p>
        <table border="1">
          <thead>
            <tr>
              <th>ブランド名</th>
            </tr>
          </thead>
          <tbody>
            <td>{{ brand.name }}</td>

          </tbody>
        </table>
        <button　@click="reload">RELOAD</button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  async asyncData({ $axios }) {
    const data = await $axios.$get('/api/scraping')
    return { data }
  },

  data: () => ({
    data: []
  }),

  methods: {
    reload() {
      location.reload()
    }
  }
}
</script>

<style>

.article-top {
  text-align: center;
}

</style>

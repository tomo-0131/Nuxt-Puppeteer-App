<template>
  <v-app>
    <v-main>
      <Header />
        <v-container>
          <nuxt />
        </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Header from '~/components/Header.vue'

export default {
  components: {
    Header
  }
}
</script>

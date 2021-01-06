<template>
  <v-row justify="center" align="center">
    <v-col cols="10">
      <v-img
        src="https://res.fashionsnap.com/image/upload/f_auto,q_auto/asset/collection/images/2020/08/sacai-21ss-pre-001.jpg?1607036664240"
        height="210px"
      ></v-img>
      <br />
      <v-divider></v-divider>
      <br />
      <v-container>
        <nuxt-link to="/studionicholson">
          <v-img
            lazy-src="https://picsum.photos/id/11/10/6"
            max-height="181"
            max-width="302"
            v-bind:src="require('@/assets/image/studionicholson.png')"
          ></v-img>
        </nuxt-link>
      </v-container>
      <v-divider></v-divider>
      <br />
      <ImageList />
      <br />
      <v-divider></v-divider>
      <br />
      <TabContents />
      <br />
    </v-col>
  </v-row>
</template>

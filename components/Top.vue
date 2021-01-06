<template>
  <v-row justify="center" align="center">
    <v-col cols="10">
      <v-img
        src="https://res.fashionsnap.com/image/upload/f_auto,q_auto/asset/collection/images/2020/08/sacai-21ss-pre-001.jpg?1607036664240"
        height="210px"
      ></v-img>

      <br />
      <h3 class="text-center">B R A N D</h3>
      <br />
      <v-divider></v-divider>

      <v-container class="fill-height" style="min-height: 284px">
        <v-fade-transition mode="out-in">
          <v-layout justify-space-between wrap>
            <v-row justify="center">
              <v-col cols="6" lg="6" xs="4" class="pa-5">
                <nuxt-link to="/studionicholson">
                  <v-img
                    lazy-src="https://picsum.photos/id/11/10/6"
                    max-height="181"
                    max-width="302"
                    v-bind:src="require('@/assets/image/studionicholson.png')"
                  ></v-img>
                </nuxt-link>
              </v-col>

              <v-col cols="6" lg="4" xs="4" class="pa-5">
                <nuxt-link to="/sacai">
                  <v-img
                    lazy-src="https://picsum.photos/id/11/10/6"
                    max-height="181"
                    max-width="302"
                    v-bind:src="require('@/assets/image/sacai.png')"
                  ></v-img>
                </nuxt-link>
              </v-col>
            </v-row>
          </v-layout>
        </v-fade-transition>
      </v-container>

      <v-divider></v-divider>
      <br />
      <!--<ImageList />-->
      <br />
      <TabContents />
      <br />
    </v-col>
  </v-row>
</template>

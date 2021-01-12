<template>
  <v-container class="fill-height" style="min-height: 284px">
    <v-fade-transition mode="out-in">
      <v-layout justify-space-between wrap>
        <v-row justify="center">
          <v-col cols="6" lg="3" xs="4" class="pa-7">
            <nuxt-link to="/studionicholson">
              <v-img
                max-height="181"
                max-width="202"
                v-bind:src="require('@/assets/image/studionicholson.png')"
              ></v-img>
            </nuxt-link>
          </v-col>

          <br />

          <v-col cols="6" lg="3" xs="4" class="pa-7">
            <nuxt-link to="/sacai">
              <v-img
                max-height="181"
                max-width="202"
                v-bind:src="require('@/assets/image/sacai.png')"
              ></v-img>
            </nuxt-link>
          </v-col>

          <br />

          <v-col cols="6" lg="3" xs="4" class="pa-7">
            <nuxt-link to="/maisonmargiela">
              <v-img
                max-height="181"
                max-width="202"
                v-bind:src="require('@/assets/image/maisonmargiela.jpeg')"
              ></v-img>
            </nuxt-link>
          </v-col>

          <v-col cols="6" lg="2" xs="4" class="pa-8">
            <nuxt-link to="/mfpen">
              <v-img
                max-height="181"
                max-width="192"
                v-bind:src="require('@/assets/image/mfpen.png')"
              ></v-img>
            </nuxt-link>
          </v-col>
        </v-row>
      </v-layout>
    </v-fade-transition>
  </v-container>
</template>

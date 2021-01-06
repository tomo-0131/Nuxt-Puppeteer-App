<template>
  <v-tool-bar dense fixed>
    <br />
    <v-toolbar-title class="text-center">
      <nuxt-link to="/">P L I M E</nuxt-link>
    </v-toolbar-title>
    <br />

    <v-tabs color="green" centered v-model="tab">
      <v-tab
        v-for="(menuItem, index) in menuItems"
        :key="index"
        :to="menuItem.url"
      >
        {{ menuItem.name }}
      </v-tab>
    </v-tabs>

    <v-navigation-drawer v-model="drawer" temporary fixed>
      <v-list nav dense>
        <v-list-item-group>
          <v-list-item
            color="green"
            v-for="(menuItem, index) in menuItems"
            :key="index"
            :to="menuItem.url"
          >
            <v-list-item-title>{{ menuItem.name }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-tool-bar>
</template>

<script>
import constants from "./constants.js";

export default {
  data() {
    return {
      drawer: false,
      menuItems: constants.menuItems,
    };
  },
};
</script>

<style>
a {
  text-decoration: none;
  color: #414141 !important;
}
</style>

<template>
  <v-tool-bar>
    <br />
    <!-- <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon> !-->
    <v-toolbar-title class="text-center"> P L I M E</v-toolbar-title>
    <br />
    <v-tabs centered v-model="tab">
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

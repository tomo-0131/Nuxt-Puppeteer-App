<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="items"
      :items-per-page="5"
      class="elevation-1"
      :loading="isLoading"
      loading-text="Loading... Please wait"
      @click:row="setDetailData"
    ></v-data-table>
  </div>
</template>

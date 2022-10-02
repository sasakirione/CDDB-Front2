<script setup lang="ts">
import AlbumList from "/component/molecule/AlbumList";
import AlbumSearch from "/component/atomic/AlbumSearch";

const items = [
  {title: "TOP", disabled: false, href: "/"},
  {title: "アルバム検索", disabled: false, href: "/album"}
]
</script>

<template>
  <div>
    <v-breadcrumbs
        :items="items"
        divider="-"
    ></v-breadcrumbs>
    <hr />
  </div>
  <div class="main-contents">
    <h1 class="page-headline">アルバム検索画面</h1>
    <v-container>
      <v-row>
        <v-col cols="12" lg="8"><AlbumSearch/></v-col>
      </v-row>
      <v-row>
        <v-col cols="12" lg="12"><AlbumList/></v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>

</style>
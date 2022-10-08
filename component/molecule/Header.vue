<template>
  <v-app-bar color="light-blue-lighten-4">
    <v-toolbar-title>Octopus CDDB</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn href="/album">アルバム検索</v-btn>
    <v-btn href="/song">楽曲検索</v-btn>
    <v-btn href="/artist">アーティスト検索</v-btn>
  </v-app-bar>
</template>

<script setup lang="ts">

</script>

<style scoped>
@font-face {
  font-family: 'DelaGothicOne';
  src: url(/DelaGothicOne-Regular.ttf);
}

.v-toolbar-title {
  font-family: "DelaGothicOne",serif;
}
</style>
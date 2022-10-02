<script setup lang="ts">
import {ref} from "#imports";

const search = ref("")
</script>

<template>
  <v-card class="info-card search-card">
    <v-card-title>
      <v-text-field
          v-model="search"
          label="アルバム名"
          append-icon="mdi-magnify"
      ></v-text-field>
      <v-btn>検索</v-btn>
      <v-btn>詳細検索画面を開く</v-btn>
    </v-card-title>
  </v-card>
</template>

<style scoped>
.search-card {
  margin: 0 auto;
}

</style>
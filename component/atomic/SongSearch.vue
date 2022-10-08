<script setup lang="ts">

import {ref} from "#imports";

const searchText = ref("")
const searchType = ref("")

interface Emits {
  (event: "searchSong", type: string, text: string): void
}

const emit = defineEmits<Emits>()
const onSearch = () => {
  emit("searchSong", searchType.value, searchText.value)
}
</script>

<template>
  <v-card class="info-card search-card">
    <v-card-title>
      <v-select
          v-model="searchType"
          :items="['曲名', 'アーティスト名']"
          label="検索種類"
          append-icon="mdi-magnify"
      >
      </v-select>
      <v-text-field
          v-model="searchText"
          label="アルバム名"
          append-icon="mdi-magnify"
      ></v-text-field>
      <v-btn @click="onSearch">検索</v-btn>
    </v-card-title>
  </v-card>
</template>

<style scoped>

</style>
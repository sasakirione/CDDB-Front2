<script setup lang="ts">
import {ref} from "#imports";
import SongSearch from "~/component/atomic/SongSearch.vue";
import SongListSimple from "~/component/molecule/SongListSimple.vue";
import {songListRowSimple} from "~/type/api";
import {useAsyncData} from "#app";
import {cors} from "~/util/api";

const items = [
  {title: "TOP", disabled: false, href: "/"},
  {title: "楽曲検索", disabled: false, href: "/song"}
]

const isResult = ref(false)
const searchText = ref("")
const songList = ref<songListRowSimple[]>([])
const searchSong = async (type: string, text: string) => {
  if (type == null) {
    return
  }
  const url = `${import.meta.env.VITE_BASE_URL ?? "http://localhost:8080"}/v1/original-song/${getSearchType(type)}/${text}`
  const { data } = await useAsyncData<songListRowSimple[]>(() => $fetch(url, cors), {initialCache: false})
  if (data.value == null) {
    console.log("failed to load")
  } else {
    songList.value = data.value
    isResult.value = true
    searchText.value = text
  }
}
const getSearchType = (type: string) => {
  switch (type) {
    case "曲名":
      return "title"
    case "アーティスト名":
      return "artist"
  }
}

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
    <h1 class="page-headline">楽曲検索画面</h1>
    <v-container>
      <v-row>
        <v-col cols="12" lg="8">
          <SongSearch v-on:searchSong="searchSong"/>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" lg="12">
          <SongListSimple :songs="songList" :text="searchText" :is-result="isResult"/>
        </v-col>
      </v-row>
    </v-container>
  </div>

</template>

<style scoped>

</style>
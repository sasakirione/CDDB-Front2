<script setup lang="ts">
import AlbumList from "/component/molecule/AlbumList";
import AlbumSearch from "/component/atomic/AlbumSearch";
import {useAsyncData} from "#app";
import {albumListRow} from "~/type/api";
import {ref} from "#imports";

const items = [
  {title: "TOP", disabled: false, href: "/"},
  {title: "アルバム検索", disabled: false, href: "/album"}
]

const isResult = ref(false)
const albumList = ref<albumListRow[]>([])

const searchAlbum = async (text: String) => {
  const url = `${import.meta.env.VITE_BASE_URL ?? "http://localhost:8080"}/v1/albums/search/${text}`
  const { data } = await useAsyncData<albumListRow[]>(() => $fetch(url), {initialCache: false})
  if (data == null) {
    console.log("failed to load")
  } else {
    albumList.value = data.value
    isResult.value = true
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
    <h1 class="page-headline">アルバム検索画面</h1>
    <v-container>
      <v-row>
        <v-col cols="12" lg="8"><AlbumSearch v-on:searchAlbum="searchAlbum"/></v-col>
      </v-row>
      <v-row>
        <v-col cols="12" lg="12"><AlbumList :albums="albumList" :is-result="isResult"/></v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>

</style>
<script setup lang="ts">
import {useFetch} from "#app";
import {album} from "~/type/api";
import {computed} from "#imports";

const props = defineProps<{
  id: number
}>()

const url = `${import.meta.env.VITE_BASE_URL ?? "http://localhost:8080"}/v1/albums/${props.id}`
const { data: currentAlbum , pending, error, refresh } = await useFetch<album>(url)
const albumTitle = computed(() => currentAlbum.value?.title)
const albumReleaseDate = computed(() => currentAlbum.value?.releaseDate)
const totalDisc = computed(() => currentAlbum.value?.discs.length == 0 ? 1 : currentAlbum.value?.discs.length)
const recodeId = computed(() => currentAlbum.value?.recordNumber ?? "設定なし")
</script>

<template>
  <div v-if="error">failed to load</div>
  <div v-else-if="pending">loading...</div>
  <div v-else>
  <v-card>
    <v-card-title>{{ albumTitle }}</v-card-title>
    <v-card-item>リリース日：{{ albumReleaseDate }}</v-card-item>
    <v-card-item>ディスク枚数：{{ totalDisc }}枚</v-card-item>
    <v-card-item>レコード番号：{{ recodeId }}</v-card-item>
    <v-card-item>ID：{{ props.id }}</v-card-item>
  </v-card>
  </div>
</template>

<style scoped>

</style>
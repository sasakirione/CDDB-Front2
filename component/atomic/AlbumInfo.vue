<script setup lang="ts">
import {useFetch} from "#app";
import {album2} from "~/type/api";
import {computed} from "#imports";

const props = defineProps<{
  id: number
}>()

const url = `${import.meta.env.VITE_BASE_URL ?? "http://localhost:8080"}/v1/albums/${props.id}`
const { data: currentAlbum , pending, error, refresh } = await useFetch<album2>(url)
const albumTitle = computed(() => currentAlbum.value?.title)
const albumReleaseDate = computed(() => currentAlbum.value?.releaseDate)
const totalDisc = computed(() => currentAlbum.value?.discs.length == 0 ? 1 : currentAlbum.value?.discs.length)
const recodeId = computed(() => currentAlbum.value?.recordNumber ?? "設定なし")
const label = computed(() => currentAlbum.value?.label ?? "設定なし")
const albumType = computed(() => currentAlbum.value?.albumType ?? "設定なし")
</script>

<template>
  <div v-if="error">failed to load</div>
  <div v-else-if="pending">loading...</div>
  <div v-else>
  <v-card variant="outlined" class="album-info">
    <v-card-title>{{ albumTitle }}</v-card-title>
    <v-card-item>リリース日：{{ albumReleaseDate }}</v-card-item>
    <v-card-item>レーベル：{{ label }}</v-card-item>
    <v-card-item>ディスク枚数：{{ totalDisc }}枚</v-card-item>
    <v-card-item>種類：{{ albumType }}</v-card-item>
    <v-card-item>レコード番号：{{ recodeId }}</v-card-item>
  </v-card>
  </div>
</template>

<style scoped>
.album-info {
  background-color: #FFFFFF;
  padding: 15px;
  border-radius: 20px;
  box-shadow: 0 5px 10px 0 rgba(60, 194, 235, 0.5);
}
</style>
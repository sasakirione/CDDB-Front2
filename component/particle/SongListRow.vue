<script setup lang="ts">
import {computed} from "#imports";
import {albumSongs} from "~/type/api";

const props = defineProps<{
  song: albumSongs
}>()

const trackNumber = computed(() => `${props.song.discNumber}.${props.song.trackNumber}`)
const title = computed(() => props.song.title)
const artist = computed(() => "アーティスト：" + props.song.artist)
const word = computed(() => "作詞：" + props.song.word?.map((w) => w.name).join(", ") ?? "設定なし")
const isExistWord = computed(() => word.value != "作詞：")
const composer = computed(() => "作曲：" + props.song.composer?.map((c) => c.name).join(", ") ?? "設定なし")
const arranger = computed(() => "編曲：" + props.song.arranger?.map((a) => a.name).join(", ") ?? "設定なし")
</script>

<template>
  <v-list-item>
    <v-list-item-title>{{ trackNumber + ". " + title }}</v-list-item-title>
    <v-list-item-subtitle>{{ artist }}</v-list-item-subtitle>
    <v-list-item-subtitle v-show="isExistWord">{{ word }}</v-list-item-subtitle>
    <v-list-item-subtitle>{{ composer }}</v-list-item-subtitle>
    <v-list-item-subtitle>{{ arranger }}</v-list-item-subtitle>
  </v-list-item>
</template>

<style scoped>

</style>
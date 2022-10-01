<script setup lang="ts">
import {computed} from "#imports";

const props = defineProps<{
  disc: string,
  track: string,
  title: string
  artist: string,
  word: string,
  composer: string,
  arranger: string
}>()

const trackNumber = computed(() => `${props.disc}.${props.track}`)
const title = computed(() => props.title)
const artist = computed(() => "アーティスト：" + props.artist)
const word = computed(() => "作詞：" + props.word)
const isExistWord = computed(() => props.word != "")
const composer = computed(() => "作曲：" + props.composer)
const arranger = computed(() => "編曲：" + props.arranger)

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
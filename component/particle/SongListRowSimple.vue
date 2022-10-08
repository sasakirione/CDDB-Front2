<script setup lang="ts">
import {computed} from "#imports";
import {songListRowSimple} from "~/type/api";


const props = defineProps<{
  song: songListRowSimple
}>()

const title = computed(() => props.song.title)
const artist = computed(() => props.song.artist)
const songLink = computed(() => `/album/${props.song.id}`)
</script>

<template>
  <v-list-item :href="songLink">
    <v-list-item-title>{{ title }}</v-list-item-title>
    <v-list-item-subtitle>{{ artist }}</v-list-item-subtitle>
  </v-list-item>
</template>

<style scoped>

</style>
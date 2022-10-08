<script setup lang="ts">
import {computed} from "#imports";
import {albumListRow} from "~/type/api";


const props = defineProps<{
  album: albumListRow
}>()

const title = computed(() => props.album.second)
const albumLink = computed(() => `/album/${props.album.first}`)

</script>

<template>
  <v-list-item :href="albumLink">
    <v-list-item-title>{{ title }}</v-list-item-title>
  </v-list-item>
</template>

<style scoped>

</style>
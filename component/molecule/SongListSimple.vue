<script setup lang="ts">
import {songListRowSimple} from "~/type/api";
import {computed} from "#imports";
import SongListRowSimple from "~/component/particle/SongListRowSimple.vue";

const props = defineProps<{
  songs: songListRowSimple[]
  text: string
  isResult: boolean
}>()

const songCount = computed(() => props.songs.length)
</script>

<template>
  <v-card class="info-card" v-show="props.isResult">
    <v-card-title>
      検索結果："{{props.text}}"の検索結果 {{ songCount }}件
    </v-card-title>
    <v-card-text>
      <v-list>
        <SongListRowSimple v-for="song in props.songs" :key="song.id" :song="song" />
      </v-list>
    </v-card-text>
  </v-card>
</template>

<style scoped>

</style>
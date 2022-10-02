<script setup lang="ts">
import SongListRow from "~/component/particle/SongListRow.vue";
import {useFetch} from "#app";
import {albumSongs} from "~/type/api";

const props = defineProps<{
  id: number
}>()

const url = `${import.meta.env.VITE_BASE_URL ?? "http://localhost:8080"}/v1/albums/${props.id}/songs`
const { data: currentAlbum , pending, error, refresh } = await useFetch<albumSongs[]>(url)

</script>

<template>
  <v-card variant="outlined" class="album-song-list">
    <v-list>
      <div v-for="song in currentAlbum" :key="`${song.discNumber}.${song.trackNumber}`" >
        <SongListRow :song="song"/>
      </div>
    </v-list>
  </v-card>
</template>

<style scoped>
.album-song-list {
  background-color: #FFFFFF;
  padding: 15px;
  border-radius: 20px;
  box-shadow: 0 5px 10px 0 rgba(60, 194, 235, 0.5);
}
</style>
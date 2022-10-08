<script setup lang="ts">
import AlbumListRow from "~/component/particle/AlbumListRow.vue";
import {albumListRow} from "~/type/api";

const props = defineProps<{
  albums: albumListRow[]
  isResult: boolean
}>()

const albumCount = computed(() => props.albums.length)

</script>

<template>
<v-card class="info-card" v-show="props.isResult">
  <v-card-title>
    検索結果 {{ albumCount }}件
  </v-card-title>
  <v-card-text>
    <v-list>
        <AlbumListRow v-for="album in props.albums" :key="album.first" :album="album" />
    </v-list>
    </v-card-text>
</v-card>
</template>

<style scoped>

</style>
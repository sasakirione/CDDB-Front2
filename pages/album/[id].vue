<template>
  <div>
    <h1>アルバム詳細画面 - WE WILL!</h1>
    <AlbumInfo  v-bind:id="id"/>
    <SongList  v-bind:id="id"/>
  </div>
</template>

<script setup lang="ts">
import AlbumInfo from "~/component/atomic/AlbumInfo.vue";
import SongList from "~/component/molecule/SongList.vue";
import {useRoute} from "#app";

const route = useRoute();
const id = Number(route.params.id);

</script>

<style scoped>

</style>
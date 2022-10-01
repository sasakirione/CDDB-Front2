<template>
  <v-list>
    <SongListRow  artist="Liella!" title="WE WILL!"/>
    <SongListRow  artist="Liella!" title="スター宣言"/>
    <SongListRow  artist="Liella!" title="WE WILL! (Off Vocal)"/>
    <SongListRow  artist="Liella!" title="スター宣言 (Off Vocal)"/>
  </v-list>
</template>

<script setup lang="ts">
import SongListRow from "~/component/particle/SongListRow.vue";

const props = defineProps<{
  id: number
}>()
</script>

<style scoped>

</style>
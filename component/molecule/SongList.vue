<template>
  <v-card variant="outlined" class="album-song-list">
    <v-list>
      <SongListRow  artist="Liella!" title="WE WILL!" arranger="山下洋介" composer="Motokiyo" word="宮嶋淳子"/>
      <SongListRow  artist="Liella!" title="スター宣言" arranger="家原正樹" composer="丸山真由子" word="宮嶋淳子"/>
      <SongListRow  artist="Liella!" title="WE WILL! (Off Vocal)" arranger="山下洋介" composer="Motokiyo" word=""/>
      <SongListRow  artist="Liella!" title="スター宣言 (Off Vocal)" arranger="家原正樹" composer="丸山真由子" word=""/>
    </v-list>
  </v-card>
</template>

<script setup lang="ts">
import SongListRow from "~/component/particle/SongListRow.vue";

const props = defineProps<{
  id: number
}>()
</script>

<style scoped>
.album-song-list {
  background-color: #FFFFFF;
  padding: 15px;
  border-radius: 20px;
}
</style>
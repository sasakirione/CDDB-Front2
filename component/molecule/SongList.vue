<template>
  <v-card variant="outlined" class="album-song-list">
    <v-list>
      <SongListRow  artist="Liella!" title="WE WILL!" arranger="山下洋介" composer="Motokiyo" word="宮嶋淳子" disc="1" track="1"/>
      <SongListRow  artist="Liella!" title="スター宣言" arranger="家原正樹" composer="丸山真由子" word="宮嶋淳子" disc="1" track="2"/>
      <SongListRow  artist="Liella!" title="WE WILL! (Off Vocal)" arranger="山下洋介" composer="Motokiyo" word="" disc="1" track="3"/>
      <SongListRow  artist="Liella!" title="スター宣言 (Off Vocal)" arranger="家原正樹" composer="丸山真由子" word="" disc="1" track="4"/>
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
  box-shadow: 0 5px 10px 0 rgba(60, 194, 235, 0.5);
}
</style>
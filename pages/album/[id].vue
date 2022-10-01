<template>
  <div>
    <v-breadcrumbs
        :items="items"
        divider="-"
    ></v-breadcrumbs>
    <hr />
  </div>
  <div class="main-contents">
    <h1>アルバム詳細画面</h1>
    <v-container>
      <v-row>
        <v-col cols="12" lg="3"><AlbumInfo v-bind:id="id"/></v-col>
        <v-col cols="12" lg="9"><SongList v-bind:id="id"/></v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import AlbumInfo from "~/component/atomic/AlbumInfo.vue";
import SongList from "~/component/molecule/SongList.vue";
import {useRoute} from "#app";

const route = useRoute();
const id = Number(route.params.id);
const items = [
  {title: "TOP", disabled: false, href: "/"},
  {title: "アルバム検索", disabled: false, href: "/"},
  {title: "アルバム詳細", disabled: false, href: "/"},
]

</script>

<style scoped>
h1 {
  background-color: #FFFFFF;
  margin: 20px;
  padding: 10px;
  border-radius: 20px;
  display: inline-block;
}

.main-contents {
  width: 90%;
  margin: 0 auto;
}


</style>
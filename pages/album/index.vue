<script setup lang="ts">
const items = [
  {title: "TOP", disabled: false, href: "/"},
  {title: "アルバム検索", disabled: false, href: "/album"}
]
</script>

<template>
  <div>
    <v-breadcrumbs
        :items="items"
        divider="-"
    ></v-breadcrumbs>
    <hr />
  </div>
</template>

<style scoped>

</style>
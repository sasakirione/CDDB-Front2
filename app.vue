<template>
  <v-app>
    <Header/>
    <v-main>
      <NuxtPage/>
    </v-main>
  </v-app>
</template>

<script>
import Header from "./component/molecule/Header";

export default {
  components: {Header}
}
</script>
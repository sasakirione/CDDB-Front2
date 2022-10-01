<template>
  <v-app>
    <Header/>
    <v-main class="all-contents">
      <NuxtPage/>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Header from "./component/molecule/Header";
import Footer from "./component/molecule/Footer";

export default {
  components: {Footer, Header}
}
</script>

<style scoped>
.all-contents {
  background: linear-gradient(to right, #FFE5AE, #FFFFFF);
}

</style>
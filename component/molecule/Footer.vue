<script setup lang="ts">

</script>

<template>
  <div class="footer">
  <v-footer
    color="light-blue lighten-3"
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        cols="12"
        class="text-center"
      >
        <span class="white--text">&copy; {{ new Date().getFullYear() }} Octopus CDDB & sasakirione</span>
      </v-col>
    </v-row>
  </v-footer>
  </div>
</template>

<style scoped>
.footer {
  width: 100%;
  position: fixed;
  bottom: 0;
}
</style>
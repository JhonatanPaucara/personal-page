<template>
  <v-app-bar app dark color="blue" dense clipped-left>
    <v-app-bar-nav-icon @click="cambiarDrawer" />
    <v-toolbar-title>Bienvenido a mi página personal</v-toolbar-title>
  </v-app-bar>
</template>

<script>
import bus from "../bus";
export default {
  methods: {
    cambiarDrawer() {
      bus.$emit("cambiarDrawer");
    }
  }
};
</script>

<style>
</style>
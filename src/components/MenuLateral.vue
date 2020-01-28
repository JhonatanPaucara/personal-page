<template>
  <v-navigation-drawer v-model="drawer" app clipped>
    <v-list>
      <v-list-item two-line>
        <v-list-item-avatar>
          <v-avatar>
            <v-img src="../assets/logo.svg" />
          </v-avatar>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>Jhonatan D. Paucara P.</v-list-item-title>
          <v-list-item-subtitle>Ing. Electrónico</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import bus from "../bus";
export default {
  data() {
    return {
      drawer: true
    };
  },
  beforeMount() {
    bus.$on("cambiarDrawer", () => {
      this.drawer = !this.drawer;
    });
  }
};
</script>

<style>
</style>
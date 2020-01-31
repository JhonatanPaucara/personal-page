<template>
  <v-navigation-drawer v-model="drawer" app clipped>
    <v-list>
      <v-list-item two-line>
        <v-list-item-avatar>
          <v-avatar size="42">
            <img src="../assets/foto.png" />
          </v-avatar>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>Jhonatan D. Paucara P.</v-list-item-title>
          <v-list-item-subtitle>Msc. Ing. Electrónico</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item-group color="primary" v-model="item">
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.path">
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.name"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import bus from "../bus";
export default {
  data() {
    return {
      drawer: false,
      item: 1,
      items: [
        { name: "Descripción", icon: "mdi-account-circle-outline", path: "/" },
        { name: "Estudios", icon: "mdi-book-outline", path: "/studies" },
        {
          name: "Experiencia",
          icon: "mdi-briefcase-outline",
          path: "/experience"
        }
      ]
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
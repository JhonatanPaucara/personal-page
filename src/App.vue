<template>
  <v-app>
    <barra-principal />
    <menu-lateral />
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import BarraPrincipal from "./components/BarraPrincipal";
import MenuLateral from "./components/MenuLateral";
export default {
  components: {
    BarraPrincipal,
    MenuLateral
  },

  data: () => ({
    //
  })
};
</script>

<template>
  <v-container fill-height>
    <v-layout wrap>
      <v-flex xs12 pa-1>
        <v-card>
          <v-container>
            <v-layout wrap align-center>
              <v-flex xs12 sm4>
                <v-img class="white--text align-end" height="200px" src="../assets/portada.png"></v-img>
              </v-flex>
              <v-flex xs12 sm8>
                <v-card-title>Jhonatan David Paucara Prado</v-card-title>
                <v-card-subtitle class="pb-0">Acerca de mi</v-card-subtitle>
                <v-card-text class="text--primary">
                  <span>
                    Especialista en diseño y prototipado de hardware y software,
                    con amplia experiencia en el modelado 3D, procesamiento de
                    señales, control de procesos y monitoreo en tiempo real a través
                    de Web y Apps móviles. Experiencia en docencia y reconocido como investigador en el portal RENACYT.
                  </span>
                </v-card-text>
                <v-card-actions>
                  <v-layout wrap align-center>
                    <v-flex xs6 sm4>
                      <v-btn color="orange" to="/studies" text>Estudios</v-btn>
                    </v-flex>
                    <v-flex xs6 sm4>
                      <v-btn color="orange" to="/experience" text>Experiencia</v-btn>
                    </v-flex>
                    <v-flex xs6 sm4>
                      <v-btn color="orange" to="/investigation" text>Publicaciones</v-btn>
                    </v-flex>
                  </v-layout>

                  
                </v-card-actions>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
      <v-flex xs12 pa-1>
        <v-card>
          <v-card-title>
            Idiomas
            <v-spacer />
            <v-icon v-text="'mdi-web'"></v-icon>
          </v-card-title>
          <v-container>
            <v-layout wrap align-center>
              <v-flex xs4 sm5 md6>
                <ul>
                  <li>Español: Nativo</li>
                </ul>
              </v-flex>
              <v-flex xs8 sm7 md6>
                <ul>
                  <li>Ingles: Intermedio - Avanzado</li>
                </ul>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
      <v-flex xs12 pa-1>
        <v-card>
          <v-card-title>
            Habilidades blandas
            <v-spacer />
            <v-icon v-text="'mdi-account-group-outline'"></v-icon>
          </v-card-title>
          <v-container>
            <v-layout wrap align-center>
              <v-flex xs6 sm4 md3 lg2 v-for="(habilidad,index) in habilidades" :key="index">
                <ul>
                  <li>{{habilidad}}</li>
                </ul>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      panel: [0, 1],
      habilidades: [
        "Organización",
        "Proactividad",
        "Creatividad",
        "Liderazgo",
        "Asertividad",
        "Empatía"
      ]
    };
  }
};
</script>

<style>
</style>
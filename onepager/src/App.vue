<template>
  <v-app dark>
    <v-toolbar class="dark">
      <v-toolbar-title v-text="title"></v-toolbar-title>
    </v-toolbar>
    <v-content>
      <section>
        <v-parallax :src="require('./assets/product.jpeg')" height="500">
          <v-layout
            column
            align-center
            justify-center
            class="white--text"
          >
            <!-- <img :src="require('./assets/vuetify.png')" alt="Vuetify.js" height="200"> -->
            <h1 class="white--text mb-2 display-1 text-xs-center">KROOSMASTER PRO PLUS</h1>
            <div class="subheading mb-3 text-xs-center font-weight-medium">Voorkom sterfte van flora en fauna met behulp van onze preventieve software!</div>
            <v-btn
              class="green lighten-1 mt-5"
              dark
              large
              href="/pre-made-themes"
            >
              Red uw sloot
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-layout
          column
          wrap
          class="my-5"
          align-center
        >
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <h2 class="headline">The best way to start developing</h2>
              <span class="subheading">
                Cras facilisis mi vitae nunc 
              </span>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="green--text text--lighten-1">color_lens</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Material Design</div>
                    </v-card-title>
                    <v-card-text>
                      Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. 
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                      Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. 
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="green--text text--lighten-1">flash_on</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">Fast development</div>
                    </v-card-title>
                    <v-card-text>
                      Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. 
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                      Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. 
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="green--text text--lighten-1">build</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Completely Open Sourced</div>
                    </v-card-title>
                    <v-card-text>
                      Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. 
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                      Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. 
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

      <section>
        <v-parallax :src="require('./assets/sentinel-3.jpg')" height="380">
          <v-layout column align-center justify-center>
            <div class="headline pa-2 grey darken-2 white--text mb-3 text-xs-center">Met behulp van satellietdata</div>
            <em class="grey pa-2 darken-2">Geven wij u preventieve inzichten in de staat van de sloten binnen uw waterschap!</em>
            <!-- <v-btn
              class="green lighten-1 mt-5"
              dark
              large
              href="/pre-made-themes"
            >
              Banaan
            </v-btn> -->
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-container grid-list-xl>
          <v-layout row wrap justify-center class="my-5">
            <v-flex xs12 sm4>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Company info</div>
                </v-card-title>
                <v-card-text>
                  Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. 
                  Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                  Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. 
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 sm4 offset-sm1>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Contact us</div>
                </v-card-title>
                <v-card-text>
                  Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                </v-card-text>
                <v-list class="transparent">
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="green--text text--lighten-1">phone</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>777-867-5309</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="green--text text--lighten-1">place</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>Chicago, US</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="green--text text--lighten-1">email</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>john@vuetifyjs.com</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>

      <v-footer class="green darken-2">
        <v-layout row wrap align-center>
          <v-flex xs12>
            <div class="white--text ml-3">
              Made with
              <v-icon class="red--text">favorite</v-icon>
              by <a class="white--text" href="https://vuetifyjs.com" target="_blank">Vuetify</a>
              and <a class="white--text" href="https://github.com/vwxyzjn">Costa Huang</a>
            </div>
          </v-flex>
        </v-layout>
      </v-footer>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      title: "Kroosmaster"
    }
  }
}
</script>

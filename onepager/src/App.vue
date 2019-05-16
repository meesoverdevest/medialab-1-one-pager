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
            <h1 class="white--text mb-2 display-1 text-xs-center">EcoWatch</h1>
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
        <v-layout column wrap class="my-5" align-center>
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <h2 class="headline">Waarom de EcoWatch?</h2>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="green--text text--lighten-1">data_usage</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Van data naar inzicht</div>
                    </v-card-title>
                    <v-card-text>
                      Met behulp van ons dashboard is het mogelijk om van 100% van alle waterlichamen in Nederland de warmte, diepte en algengroei te bekijken. Momenteel is dat nog pas 8% van alle waterlichamen.
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="green--text text--lighten-1">satellite</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Een blik vanuit de ruimte</div>
                    </v-card-title>
                    <v-card-text>
                      De gegevens in het dashboard worden voornamelijk samengesteld aan de hand van data uit de ruimte. Met name de Sentinel-1, -2 en -3-satellieten voorzien onze systemen van informatie.
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="green--text text--lighten-1">build</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Ingrijpen voor het mis gaat</div>
                    </v-card-title>
                    <v-card-text>
                      Door continu de gezondheid van alle waterlichamen te monitoren, kan er tijdig ingegrepen worden om te voorkomen dat slechte waterkwaliteit naar andere gebieden overvloeit.
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

	  <section>
        <v-layout column wrap class="my-5" align-center>
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <h2 class="headline">Team</h2>
              <span class="subheading">We make it possible!</span>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap>
                <v-flex xs12 md3>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
					  	<v-avatar size="180" color="grey lighten-4">
							<img :src="require('./assets/joey.png')" alt="avatar">
						</v-avatar>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Joey Hoogerwerf</div>
                    </v-card-title>
                    <v-card-text>
                      Als creatief technoloog hou ik van het werken met de nieuwste technieken. Zo haalt EcoWatch zijn satellietdata op via de Google Earth Engine.
                    </v-card-text>
                  </v-card>
                </v-flex>

                <v-flex xs12 md3>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
						<v-avatar size="180" color="grey lighten-4">
							<img :src="require('./assets/yordi.png')" alt="avatar">
						</v-avatar>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">Yordi van Leeuwen</div>
                    </v-card-title>
                    <v-card-text>
                        UI UX designer die altijd wel commentaar heeft en ziet hoe iets zal gaan uitspelen.
                    </v-card-text>
                  </v-card>
                </v-flex>

                <v-flex xs12 md3>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
						<v-avatar size="180" color="grey lighten-4">
							<img :src="require('./assets/mees.png')" alt="avatar">
						</v-avatar>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Mees Overdevest</div>
                    </v-card-title>
                    <v-card-text>
                      Ik ben een mediatechnoloog met een voorkeur voor Javascript development. Met de EcoWatch hoop ik bij te kunnen dragen aan vooruitstrevende stappen op het gebied van techniek, die wordt gebruikt door de waterschappen.
                    </v-card-text>
                  </v-card>
                </v-flex>

				<v-flex xs12 md3>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
						<v-avatar size="180" color="grey lighten-4">
							<img :src="require('./assets/dario.png')" alt="avatar">
						</v-avatar>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Dario Sanchez Martinez</div>
                    </v-card-title>
                    <v-card-text>
                      Dit project heb ik vooral als onderzoeker doorgebracht. Zo wilde ik de probleemstelling door hebben, maar ook hoe remote sensing werkte.
                    </v-card-text>
                  </v-card>
                </v-flex>

              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>
      <section>
        <v-layout column wrap class="my-5" align-center>
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <h2 class="headline">Deliverables</h2>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="green--text text--lighten-1">people</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Customer Journeys</div>
                    </v-card-title>
                    <v-card-text>
                      <a download href="/assets/deliverables/customer_journey_gewenste_situatie.pdf">Gewenste situatie</a><br>
                      <a download href="/assets/deliverables/customer_journey_huidige_situatie.pdf">Huidige situatie</a>
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="green--text text--lighten-1">satellite</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Concept</div>
                    </v-card-title>
                    <v-card-text>
                      <a download href="/assets/deliverables/eindpresentatie.jpg">Eindpresentatie</a><br>
                      <a download href="/assets/deliverables/zwemwater_app.jpg">Zwemwater applicatie</a><br>
                      <a href="http://dashboard.biertjesman.nl">Dashboard</a>
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="green--text text--lighten-1">build</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Proces</div>
                    </v-card-title>
                    <v-card-text>
                      <a download href="/assets/deliverables/brainstormen.jpg">Brainstormsessie</a><br>
                      <a download href="/assets/deliverables/PosterConcept.pdf">Concept Poster</a>
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
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-container grid-list-xl>
          <v-layout row wrap justify-center class="my-5">
            <v-flex xs12 sm4>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout">
                  <div class="headline">Over A.S.O.</div>
                </v-card-title>
                <v-card-text>
                  Wij van de Aerospace Safety Organization zijn een fusie tussen de opleidingen CMD en CMGT. Met de onderzoekende kwaliteiten van Yordi en Dario krijgt de techniek de beste fundering. Alle ontwerpbeslissingen zijn gebaseerd uitvoerig onderzoek, hierdoor onderscheidt EcoWatch zich van alle anderen!
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 sm4 offset-sm1>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title>
                  <h2 class="headline">Contact</h2>
                  <div class="subheading">Geïnteresseerd, of heb je een vraag?</div>
                </v-card-title>
                <v-list class="transparent">
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="green--text text--lighten-1">phone</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>010-7944000</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="green--text text--lighten-1">place</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>Wijnhaven 99, Rotterdam</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="green--text text--lighten-1">email</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>contact@aso.com</v-list-tile-title>
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
              <v-icon class="red--text">favorite</v-icon>by Aerospace Safety Organization
            </div>
          </v-flex>
        </v-layout>
      </v-footer>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      title: "EcoWatch"
    }
  }
};
</script>

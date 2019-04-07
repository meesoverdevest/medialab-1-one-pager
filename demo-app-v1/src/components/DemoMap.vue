<template>
  <v-layout row wrap>
    <!-- <v-flex xs12>
      <v-btn-toggle>
        <v-btn flat>
          <v-icon>play_arrow</v-icon>
        </v-btn>
        <v-btn flat>
          <v-icon>pause</v-icon>
        </v-btn>
        <v-btn flat>
          <v-icon>search</v-icon>
        </v-btn>
        
      </v-btn-toggle>
    </v-flex> -->

    <v-flex xs8>
      <GmapMap
        ref="map"
        :center="center"
        :zoom="15"
        map-type-id="terrain"
        style="width: 100%; height: 100%"
      >
        <GmapMarker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          :draggable="true"
          @click="toggleInfoWindow(m,index)"
        />

        <gmap-info-window
          :options="infoOptions"
          :position="infoWindowPos"
          :opened="infoWinOpen"
          @closeclick="infoWinOpen=false"
        >
          <div v-html="infoContent"></div>
        </gmap-info-window>

      </GmapMap>
    </v-flex>
    <v-flex xs4>
      <v-card>
        <v-toolbar color="grey" dark>
          <v-btn icon>
            <v-icon>location_on</v-icon>
          </v-btn>

          <v-toolbar-title>Locatie selecteren</v-toolbar-title>
        </v-toolbar>
        <v-flex xs12>
          <gmap-autocomplete 
            id="autocomplete-text" 
            style="width: 100%; background: white; padding: 10px;" 
            @place_changed="updatePlace">
          </gmap-autocomplete>
        </v-flex>
      </v-card>
      <v-card>
        <v-toolbar color="grey" dark>
          <v-btn icon>
            <v-icon>event</v-icon>
          </v-btn>

          <v-toolbar-title>Datum selecteren</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn @click="onImmediateFailed">Google</v-btn>
          <v-toolbar-side-icon></v-toolbar-side-icon>
        </v-toolbar>
        <v-flex xs12>
          <v-date-picker
            style="width:100%"
            is-inline
            mode='range'
            v-model='calendar_attrs[0].dates'
            show-caps>
          </v-date-picker>
        </v-flex>
      </v-card>
      <v-card>
        <v-toolbar color="grey" dark>
          <v-btn icon>
            <v-icon>palette</v-icon>
          </v-btn>

          <v-toolbar-title>Banden selecteren</v-toolbar-title>
        </v-toolbar>
        <v-flex xs12>
          <v-switch v-for="band in bands"
            style="margin-left: 15px;"
            v-model="band.value"
            :key="band.title"
            :color="band.color"
            :label="`${band.title}: ${band.value}`"
          ></v-switch>
        </v-flex>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  //https://teunohooijer.com/2018/04/22/how-to-create-custom-markers-infowindows-with-vue2-google-maps/
  import ee from '@google/earthengine';

  export default {
    name: 'DemoMap',
    mounted() {
      // ee.data.authenticateViaPopup(function() {
      // // If the login succeeds, hide the login button and run the analysis.
      //   this.addImageLayer();
      // });

      

      // ee.data.authenticate(this.CLIENT_ID, this.addImageLayer(), null, null, this.onImmediateFailed());

      // Authenticate using an OAuth pop-up.
      
      // ee.data.authenticateViaPrivateKey("../assets/medialab-1-233820-943caa4aa5f6.json", this.addImageLayer());

      // ee.data.authenticateViaOauth("309326416919-13rm9igoc842ukq7d4afgd3380rbt7lg.apps.googleusercontent.com");

      // ee.data.authenticateViaPopup(this.addImageLayer());

      // this.addImageLayer();
      // ee.initialize();
      //   , this.initialize(), function(e) {
      //   console.error('Authentication error: ' + e);
      // }, null, function() {
      //   ee.data.authenticateViaPopup(this.initialize());
      // });
    },
    data () {
      return {
        center: {
          lat: 51.953326, 
          lng: 4.5586302
        },
        client: '943caa4aa5f6aca4c0b0fdf8e05c20d802288487',
        client2: '102730271402883116808',
        CLIENT_ID: '309326416919-13rm9igoc842ukq7d4afgd3380rbt7lg.apps.googleusercontent.com',
        bands: [
          {
            title: "Infrarood", 
            value: false,
            color: "red"
          },
          {
            title: "UV", 
            value: false,
            color: "purple"
          },
          {
            title: "Radar", 
            value: false,
            color: "blue"
          }
        ],
        myRange: null,
        calendar_attrs: [
          {
            key: 'today',
            // dates: [
            //   new Date()
            // ],
            highlight: {
              backgroundColor: '#ff8080',
            }
          }
        ],
        markers: [
          {
            name: "House of Aleida Greve",
            description: "description 1",
            date_build: "",
            image: null,
            position: {
              lat: 51.953526, 
              lng: 4.5586602
            },
          },
          {
            name: "House of Potgieter",
            description: "description 2",
            date_build: "",
            image: null,
            position: {
              lat: 51.953226, 
              lng: 4.5586102
            },
          },
          {
            name: "House of Johannes Cele",
            description: "description 3",
            date_build: "",
            image: null,
            position: {lat: 52.511047, lng: 6.091728}
          },
        ],
        options: {
        },
        userPosition: null,
        zoom: 18,
        infoContent: '',
        infoWindowPos: {
          lat: 0,
          lng: 0
        },
        infoWinOpen: false,
        currentMidx: null,
        //optional: offset infowindow so it visually sits nicely on top of our marker
        infoOptions: {
          pixelOffset: {
            width: 0,
            height: -35
          }
        },
      }
    },
    methods: {
      toggleInfoWindow: function (marker, idx) {
        this.center=marker.position;
        this.infoWindowPos = marker.position;
        this.infoContent = this.getInfoWindowContent(marker);

        //check if its the same marker that was selected if yes toggle
        if (this.currentMidx == idx) {
          this.infoWinOpen = !this.infoWinOpen;
        }
        //if different marker set infowindow to open and reset current marker index
        else {
          this.infoWinOpen = true;
          this.currentMidx = idx;
        }
      },
      onImmediateFailed() {
        console.log(ee);
        ee.data.authenticateViaPopup(this.client, (data) => {
          console.log(data)
            this.addImageLayer()
        });
        console.log('got here again')
      },
      updateCenter(location) {
        this.center = {
          lat: location.lat(),
          lng: location.lng(),
        }
        this.onImmediateFailed()
        ee.data.authenticate(this.client, this.addImageLayer(), null, null, this.onImmediateFailed());
      },          
      addImageLayer() {
        console.log("here")
        ee.initialize();

        var image = ee.Image('COPERNICUS/S2/20150706T105016_20150706T105351_T31UFT').getMap({bands: ['B1', 'B4', 'B3'], max: 4000});
        var overlay = new ee.MapLayerOverlay('https://earthengine.googleapis.com/map', image.mapid, image.token, {});

        this.$refs.map.overlayMapTypes.push(overlay);
      },
      updatePlace(place) {
        this.markers.push({
            name: place.name,
            description: place.formatted_address,
            date_build: "",
            position: {
              lat: place.geometry.location.lat(), 
              lng: place.geometry.location.lng()
            },
            image: (place.photos !== undefined ? place.photos[0].getUrl() : null)
        });

        this.updateCenter(place.geometry.location);
      },
      dayClicked(date) {
        this.calendar_attrs[0].dates.push(date.date);
      },
      getInfoWindowContent: function (marker) {
        return (`<div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img style="max-height: 250px; max-width: 250px;" src="${marker.image !== null ? marker.image : "https://bulma.io/images/placeholders/96x96.png"}" alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-content">
        <p class="title is-4">${marker.name}</p>
      </div>
    </div>
    <div class="content">
      ${marker.description}
      <br>
      <time datetime="2016-1-1">${marker.date_build}</time>
    </div>
  </div>
</div>`);
      },
    },
  }
</script>

<style lang="scss">
  .demo {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .map {
    flex: 100% 1 1;
  }
</style>
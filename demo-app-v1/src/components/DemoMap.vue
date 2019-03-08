<template>
  <div class="simple-map demo">
    <GmapMap
      :center="center"
      :zoom="15"
      map-type-id="terrain"
      style="width: 100%; height: 400px"
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
  </div>
</template>


<script>
  export default {
    name: 'DemoMap',
    data () {
      return {
        center: {
          lat: 51.953326, 
          lng: 4.5586302
        },
        markers: [
          {
            name: "House of Aleida Greve",
            description: "description 1",
            date_build: "",
            position: {
              lat: 51.953526, 
              lng: 4.5586602
            },
          },
          {
            name: "House of Potgieter",
            description: "description 2",
            date_build: "",
            position: {
              lat: 51.953226, 
              lng: 4.5586102
            },
          },
          {
            name: "House of Johannes Cele",
            description: "description 3",
            date_build: "",
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
      polylineClicked () {
        console.log('clicked')
        const options = {
          strokeOpacity: Math.random(),
        }
        this.options = options
      },
      pathChanged (path) {
        console.log(path)
      },
      centerOnUser () {
        if (this.userPosition) {
          this.center = this.userPosition
        }
      },
      setUserPosition (position) {
        this.userPosition = position
      },
      toggleInfoWindow: function (marker, idx) {
        this.center=marker.position
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

      getInfoWindowContent: function (marker) {
        return (`<div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
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
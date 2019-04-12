<template>
  <v-app dark>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>EcoWatch</span>
        <span class="font-weight-light">TEAM ASO</span>
      </v-toolbar-title>
    </v-toolbar>

    <v-content>
      <DemoMap/>
    </v-content>
  </v-app>
</template>

<script>
import DemoMap from './components/DemoMap'

export default {
  name: 'App',
  components: {
    DemoMap
  },
  data () {
    return {
      //
    }
  }
}
</script>

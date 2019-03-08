<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>CGI Alg</span>
        <span class="font-weight-light">TEAM ASO</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/meesoverdevest/medialab-1-one-pager"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <HelloWorld/>
      <DemoMap/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import DemoMap from './components/DemoMap'

export default {
  name: 'App',
  components: {
    HelloWorld,
    DemoMap
  },
  data () {
    return {
      //
    }
  }
}
</script>

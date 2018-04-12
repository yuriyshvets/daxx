<template>
  <v-container class="py-0">

    <v-layout row wrap>
      
      <v-flex xs12>
        <main-toolbar></main-toolbar>
      </v-flex>
      <sidebar></sidebar>
      <main-tabs></main-tabs>
    </v-layout>

  </v-container>

</template>

<script>

  import MainToolbar from './MainToolbar'
  import MainTabs from './MainTabs'
  import Sidebar from './Sidebar'

  export default {
    components: {
      'main-toolbar': MainToolbar,
      'main-tabs': MainTabs,
      'sidebar': Sidebar,
    },
    data() {
      return {
        
      }
    }
  }

</script>
<style>

</style>

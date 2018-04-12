<template>
  <v-container class="py-0 app-container">

    <v-layout row wrap>
      
      <v-flex xs12>
        <main-toolbar fill-height></main-toolbar>
      </v-flex>
      
      <v-flex xs12 md3 class="full-height">
      
        <sidebar></sidebar>

      </v-flex>

      <v-flex xs12 md9 class="full-height">
      
        <main-tabs></main-tabs>

      </v-flex>

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
  .app-container {
    /*min-height: 100%;
    height: 100%;*/
  }
  /*.full-height {
    flex: 1;
    display: flex;
  }*/
  /*.full-width {
    width: 100%;
  }*/
</style>

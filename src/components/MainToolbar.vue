<template>

  <v-toolbar flat>
    <v-toolbar-title class="grey--text">Predictive Maintenance</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat class="login-button">[First name] [Last name] <v-icon>keyboard_arrow_down</v-icon></v-btn>
    </v-toolbar-items>
    <v-btn icon>
      <v-icon>power_settings_new</v-icon>
    </v-btn>
  </v-toolbar>

</template>

<script>
  
  export default {
    data() {
      return {
        
      }
    }
  }
  
</script>

<style>
  .login-button {
    text-transform: none;
  }
</style>
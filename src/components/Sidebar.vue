<template>

  <div class="full-width">
    <v-toolbar flat dark color="primary" class="blue">
      <v-btn icon>
        <v-icon>arrow_back</v-icon>
      </v-btn>
      <v-toolbar-title class="white--text sidebar-title">Terminal Overview</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon></v-toolbar-side-icon>
    </v-toolbar>
    
    <div class="terminal-img">
      <img src="../assets/terminal.png">
    </div>
    
  </div>
  
</template>
<style>
  .sidebar-title {
    margin-left: 0;
    font-size: 1em;
    text-transform: uppercase;
    font-weight: bold;
  }
  .terminal-img img {
    max-width: 100%;
    height: auto;
  }
</style>
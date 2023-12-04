<template>
	
		<Navigation/>
    <Salma/>
	  <router-view />

  </template>
  
  <script>
import Salma from './components/Salma.vue';
import Navigation from './components/Navigation.vue';
  export default {
  components: { Navigation, Salma },
	name: "App",
	components: {
		Navigation, Salma,  
	}
  
  };

  </script>
  
  <style lang="scss">
 
  </style>
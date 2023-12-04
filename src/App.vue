<template>
	
		<Navigation/>
	  <router-view />

  </template>
  
  <script>
import Salma from './components/Salma.vue';
import Navigation from './components/Navigation.vue';
  export default {
  components: { Navigation },
	name: "App",
	components: {
		Navigation,  
	}
  
  };

  </script>
  
  <style lang="scss">
 
  </style>
<template>
	
		<Claudia/>
	  <router-view />

  </template>
  
  <script>
import Claudia from './components/Claudia.vue';
  export default {
  components: { Claudia },
	name: "App",
	components: {
		Claudia,  
	}
  
  };

  </script>
  
  <style lang="scss">
 
  </style>
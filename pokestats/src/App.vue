<template>
  <v-app id="main">
    <Navigation />

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Navigation from "./components/Navigation.vue"

export default {
  name: 'App',

  components: {
    Navigation
  },
  data: () => ({
    //
  })
};
</script>

<style scoped>

#main{
  background-color: #14023B;
}

</style>

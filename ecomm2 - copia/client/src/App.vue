<template>
  <v-app>
     <!-- <router-link to="/productohome">Productos</router-link> -->
    <v-main>
    <router-view/>
    </v-main>

  </v-app>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import NavBar from '@/components/NavBar.vue'
import Carrusel from '@/components/Carrusel.vue'
import ProductoHome from '@/components/ProductoHome.vue'

export default {
  name: 'App',
  components:{
    Header,
    Footer,
    NavBar,
    Carrusel,
    ProductoHome

   

    
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

}

#nav a {
  font-weight: bold;
  color: #2c3e50;

}

#nav a.router-link-exact-active {
  color: #42b983;
 
}



</style>

<template>
  
  <div class="home">
      <Header/>
      <NavBar/>
     <Carrusel/>

     <ProductoHome/>
      <Footer />
  
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import NavBar from '@/components/NavBar.vue'
import Carrusel from '@/components/Carrusel.vue'

import Footer from '@/components/Footer.vue'
import ProductoHome from '../components/ProductoHome.vue'

export default {
  name: 'Home',
  components: {
    Header,
    NavBar,
    Carrusel,
    Footer,
    ProductoHome
  }
}
</script>

<style>

</style>

<template>
    <div class="accesorios">
    <Header/>
    <NavBar/>

   <ProductoAccesorios/>
    <Footer/>
  
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import ProductoAccesorios from '../components/ProductoAccesorios'


export default {
      name: 'Accesorios',
      components: {
      Header,
      NavBar,
      Footer,
      ProductoAccesorios
      
  }
}
</script>

<style scoped>

</style>

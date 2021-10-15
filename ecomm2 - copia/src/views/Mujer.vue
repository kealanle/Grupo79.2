<template>
  
  <div class="mujer">
      <Header/>
      <NavBar/>

      <ProductoHome/>
      <Footer />
    </div>
</template>


<script>
import Header from '@/components/Header.vue'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import ProductoHome from '../components/ProductoHome.vue'
export default {
      name: 'Mujer',
  components: {
    Header,
    NavBar,
    Footer,
    ProductoHome,
  }
}
</script>


<template>
  
  <div class="mujer">
      <Header/>
      <NavBar/>
      <Productomujer/>
      <Footer />
    </div>
</template>


<script>
import Header from '@/components/Header.vue'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import Productomujer from '../components/Productomujer.vue'
export default {
      name: 'Mujer',
  components: {
    Header,
    NavBar,
    Footer,
    Productomujer,
  }
}
</script>


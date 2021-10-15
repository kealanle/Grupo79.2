<template>
  
  <div class="Junior">
      <Header/>
      <NavBar/>

      <ProductoJunior/>
      <Footer />
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import ProductoJunior from '../components/ProductoJunior'
export default {
  name: 'Junior',
  components: {
    Header,
    NavBar,
    Footer,
    ProductoJunior
  }
}
</script>

<style scoped>

</style>

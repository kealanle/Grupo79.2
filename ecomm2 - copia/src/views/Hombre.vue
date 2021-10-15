<template>
    <div class="hombre">
      <Header/>
      <NavBar/>
    
      <ProductoHombre/>
      <Footer />
  
</div>
</template>

<script>
import Header from '@/components/Header.vue'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import ProductoHombre from '../components/ProductoHombre.vue'
export default {
      
      name: 'Hombre',
       data() {
    return {
      productos: null,
    };
  },
  components: {
    Header,
    NavBar,
    Footer,
    ProductoHombre
  },
  mounted() {
    axios
      .get("api.json")
      .then((response) => {
        this.productos = response.data.Search.slice(0, 9);
        console.log(this.productos);
      });
  },
}
</script>

<style scoped>

.container{
      width:100%;
      height: 50%;
      margin-bottom: 0%
}
</style>
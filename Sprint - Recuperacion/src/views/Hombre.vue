<template>
    <div class="hombre">
      <Header/>
      <NavBar/>
    
      <div id="seccion" class="container-fluid">
       <h1 style="text-align: center"></h1>
       <div class="row" id="items"></div>
        </div>


      <div class="col-12 mb-2 col-md-6 col-lg-4">
       <div class="card">
        <img src="" alt="" class="card-img-top" />
       <div class="card-body">
         <h5>Titulo</h5>
         <p>$precio</p>
         <button class="btn btn-dark">Ver Mas</button>
       </div>
       </div>

      </div>
      <Footer />
  
</div>
</template>

<script>
import Header from '@/components/Header.vue'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
export default {
      name: 'Hombre',
  components: {
    Header,
    NavBar,
    Footer
  }
}
</script>

<style scoped>

.container{
      width:100%;
      height: 50%;
      margin-bottom: 0%
}
</style>
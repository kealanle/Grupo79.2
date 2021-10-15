<template>
 
 <div>
            <div class="row mt-md-5 mt-sm-5 mt-xs-5">
        <div class="col-12 mb-2 col-md-6 col-lg-4" v-for="(producto, index) of productos" :key="index">
        <div class="card">
          <!-- <img src="" alt="" class="card-img-top" /> -->
           <img :src="producto.thumbnailUrl" :alt="producto.title" class="card-img-top">
          <div class="card-body">
            <h5>{{producto.title}}</h5>
            <p>${{producto.precio}}</p>
            <button class="btn btn-dark">Comprar</button>
          </div>
        </div>
      </div>
      
  </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ProductoHome",
   data() {
    return {
      productos: null,
    };
  },
  methods:{

  },
  props: {
    msg: String,
  },
  mounted() {
    axios
      .get("api.json")
      .then((response) => {
        this.productos = response.data.Search.slice(0, 9);
        console.log(this.productos);
      });
  },
};
</script>

<style scoped>

/* img{
  max-width: 150px;
}; */

</style>
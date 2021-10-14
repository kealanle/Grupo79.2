<template>
  <div class="container">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="300"
      style="text-shadow: 1px 1px 2px #333;" @sliding-start="onSlideStart" @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        caption="Bienvenidos a La Tiendita" 
        text="Aqui podrás encontrar la mejor variedad de productos deportivos para todos y todas">
      <template #img>
          <img
            class ="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="@/assets/carrusel/max-letek-SvfBv5FLrHg-unsplash.jpg"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide>
        <h1>Colección Junior</h1>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height= "480"
            src="@/assets/carrusel/adria-crehuet-cano-LIhB1_mAGhY-unsplash.jpg"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>


      <!-- Slides with image only -->
      <b-carousel-slide>
        <h1>Colección Hombre</h1>
         <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="200"
            src="@/assets/carrusel/alex-_AOL4_fDQ3M-unsplash.jpg"
            alt="image slot"
          >
        </template>


      </b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <h1>Colección Mujer</h1>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="@/assets/carrusel/quaritsch-photography-1o-kpDcVALw-unsplash.jpg"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide>
        <h1>Accesorios</h1>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="@/assets/carrusel/filip-baotic-HjZ0qARrQDY-unsplash.jpg"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>
<script>
  export default {
  name: "Footer",
  props: {
    msg: String,
  },
};
</script>

<style scoped>

.carousel-item {
  height: 100%;
  background: rgb(0, 0, 0);
  color: white;
  position: relative;
  background-position: center;
  background-size: cover;
}
.container {
  position: relative;
  height: 90%;
  bottom: 0;
  left: 0;
  right: 0;
  padding-bottom: 42px;
}

.capa-imagen-carrusel{
  position: absolute;
  height: 100px;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  background-position: center;
  background-size: cover;
  opacity:0.7 ;
}
</style>
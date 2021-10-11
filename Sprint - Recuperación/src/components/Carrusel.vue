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
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;" @sliding-start="onSlideStart" @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide img src= "../assets/carrusel/max-letek-SvfBv5FLrHg-unsplash.jpg"
        caption="Bienvenido a la TIENDA"
        text="Aqui podrás encontrar la mejor variedad de productos deportivos
              para todos y todas"

      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="..assets/carrusel/adria-crehuet-cano-LIhB1_mAGhY-unsplash.jpg">
        <h1>Colección Junior</h1>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58">
        <h1>Colección Hombre</h1>
      </b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="https://picsum.photos/1024/480/?image=55"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
          a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
        </p>
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
  height: 50rem;
  background: rgb(0, 0, 0);
  color: white;
  position: relative;
  background-position: center;
  background-size: cover;
}
.container {
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;
  padding-bottom: 42px;
}

.capa-imagen-carrusel{
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  background-position: center;
  background-size: cover;
  opacity:0.7 ;
}
</style>
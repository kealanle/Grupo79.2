<template>
  <div>
    <div v-bind:id="idCarousel" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li
          v-bind:data-target="'#' + idCarousel"
          data-slide-to="0"
          class="active"
        ></li>
        <li
          v-bind:data-target="'#' + idCarousel"
          data-slide-to="1"
          class=""
        ></li>
        <li
          v-bind:data-target="'#' + idCarousel"
          data-slide-to="2"
          class=""
        ></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div
            class="capa-imagen-carrusel"
            
          ></div>
          <!-- <img src="../../public/adria-crehuet-cano-LIhB1_mAGhY-unsplash.jpg" alt="banner image"> -->
          <div class="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </div>
        <div class="carousel-item">
          <div
            class="capa-imagen-carrusel"
            style="
              background-image: url(../../public/adria-crehuet-cano-LIhB1_mAGhY-unsplash.jpg);
            "
          ></div>
          <div class="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div class="carousel-item">
          <div
            class="capa-imagen-carrusel"
            style="
              background-image: url(../../public/adria-crehuet-cano-LIhB1_mAGhY-unsplash.jpg);
            "
          ></div>
        
          <div class="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        :href="'#' + idCarousel"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        :href="'#' + idCarousel"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>

  <!-- <div class="container">
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
    > -->
  <!-- Text slides with image -->
  <!-- <b-carousel-slide img src= "../assets/carrusel/max-letek-SvfBv5FLrHg-unsplash.jpg"
        caption="Bienvenido a la TIENDA"
        text="Aqui podrás encontrar la mejor variedad de productos deportivos
              para todos y todas"

      ></b-carousel-slide> -->

  <!-- Slides with custom text -->
  <!-- <b-carousel-slide img-src="..assets/carrusel/adria-crehuet-cano-LIhB1_mAGhY-unsplash.jpg">
        <h1>Colección Junior</h1>
      </b-carousel-slide> -->

  <!-- Slides with image only -->
  <!-- <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58">
        <h1>Colección Hombre</h1>
      </b-carousel-slide> -->

  <!-- Slides with img slot -->
  <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
  <!-- <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="https://picsum.photos/1024/480/?image=55"
            alt="image slot"
          >
        </template>
      </b-carousel-slide> -->

  <!-- Slide with blank fluid image to maintain slide aspect ratio -->
  <!-- <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
          a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
        </p>
      </b-carousel-slide>
    </b-carousel>
  </div> -->
</template>
<script>
export default {
  name: "Footer",
  props: ["idCarousel"],
};
</script>

<style scoped>
/* .carousel-item {
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
} */
.carousel-item {
  height: 50rem;
  background: rgb(0, 0, 0);
  color: white;
  position: relative;
  background-position: center;
  background-size: cover;
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
  background-image: url("../../public/adria-crehuet-cano-LIhB1_mAGhY-unsplash.jpg"); 
        
}

</style>
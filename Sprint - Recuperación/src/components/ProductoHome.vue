<template>
<div class="container">
     <div id="template-card">
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
     </div>
</div>
</template>

<script>
export default {
  name: "ProductoHome",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.container {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding-bottom: 42px;
}
</style>
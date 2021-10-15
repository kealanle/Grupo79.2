<template>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarColor03">
            <ul class="navbar-nav mx-auto">
              <li class="nav-item">
                <router-link class="nav-link" to="/hombre">Hombre</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/mujer">Mujer</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/Junior">Junior</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/accesorios">Accesorios</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
</template>


<script>
export default {
  name: 'Footer',
  props: {
    msg: String
  }
}
</script>

<style scoped>


</style>
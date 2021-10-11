<template>
  <div>
    <b-navbar toggleable="lg" type="dark"  variant="dark">
    

      <b-container>
        <router-link class="navbar-brand" to="/">La Tiendita</router-link>
      <b-navbar-toggle target="navbar-toggle-collapse">
      </b-navbar-toggle>

      <b-collapse id="navbar-toggle-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
         <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link class="nav-link" to= "login"
                ><i class="fas fa-user"></i>Inicie Sesion</router-link
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"
                ><i class="fas fa-shopping-cart"></i>Carrito</a
              >
            </li>
          </ul>
      </b-navbar-nav>
      </b-collapse>

  
    
      </b-container>
    </b-navbar>
  </div>
</template>


<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>

<style scoped>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
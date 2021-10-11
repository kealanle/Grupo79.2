<template>

  <div class ="login">
      <Header/>
      <NavBar/>
      <div class="form-register" >
       <h1>Iniciar Sesion</h1>
                          
            <!-- form body will be here, input controls -->              
   
            <div class="form-group">
                  <div class="input-group">
                  <div class="input-group-addon"><span class="glyphicon glyphicon-envelope"></span></div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-at" viewBox="0 -2 30 30">
                        <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"/>
                  </svg>
                  <input name="email" type="text" class="form-control" placeholder="Ingrese su Email">
                  </div> 
                  <span class="help-block" id="error"></span>                     
            </div>
                    
            <div class="form-group ">
                 <div class="input-group">
                 <div class="input-group-addon"><span class="glyphicon glyphicon-lock"></span></div>
                 <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-asterisk" viewBox="0 -2 30 30">
                    <path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z"/>
                  </svg>
                 <input name="password" id="password" type="password" class="form-control" placeholder="Ingrese su Contraseña">
                 </div>  
                 <span class="help-block" id="error"></span>                    
            </div>

            <div class="row"> 
                <div class="form-group col-lg-6">
            <div class="form-group ">
            <p><a href="#">¿Olvidaste tu contraseña?</a></p>
            </div>
            </div>    
    </div>
                    
        <button class="w-100 btn btn-lg btn-primary" type="submit" >Iniciar Sesión</button>
        <div class="form-group "><p><router-link to="/registro">Si no tienes cuenta, Registrate aqui</router-link></p></div>
      
        </div>
      <Footer/>
  </div>
      
</template>


<script>
import Header from "@/components/Header.vue";
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: 'Login',
  components: {
    Header,
    NavBar,
    Footer,
  },
};
</script>

<style scoped>
.form-register {
  width: 40%;
  background: #24303c;
  padding: 30px;
  margin: auto;
  margin-top: 5%;
  margin-bottom: 5%;
  border-radius: 5%;
  font-family: "calibri";
  color: white;
  box-shadow: 7px 13px 37px #000;
  overflow: auto;
}
</style>

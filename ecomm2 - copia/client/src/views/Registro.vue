<template> 
  <div class= "">  
    <div>
    <b-navbar toggleable="lg" type="dark"  variant="dark">
    

      <b-container>
        <router-link class="navbar-brand" to="/">La Tiendita</router-link>
      <b-navbar-toggle target="navbar-toggle-collapse">
      </b-navbar-toggle>

      <b-collapse id="navbar-toggle-collapse" is-nav type="String" align="end">
      <b-navbar-nav class="ml-auto">
         <ul class="navbar-nav ml-auto" align='end'>
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
        
        <div class="form-register">
          <Header />
          <h1>Formulario de Registro</h1>

          <!-- form body will be here, input controls -->

          <div class="form-group">
          <div class="input-group">
            <div class="input-group-addon">
              <span class="glyphicon glyphicon-user"></span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              fill="currentColor"
              class="bi bi-person-circle"
              viewBox="0 -2 30 30"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path
                fill-rule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
              />
            </svg>
            <input
              name="nombres"
              type="text"
              class="form-control"
              placeholder="Ingrese sus Nombres"
            />
            <span class="help-block" id="error"></span>
          </div>
          </div>

          <div class="form-group">
          <div class="input-group">
            <div class="input-group-addon">
              <span class="glyphicon glyphicon-user"></span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              fill="currentColor"
              class="bi bi-person-circle"
              viewBox="0 -2 30 30"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path
                fill-rule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
              />
            </svg>
            <input
              name="apellidos"
              type="text"
              class="form-control"
              placeholder="Ingrese sus Apellidos"
            />
            <span class="help-block" id="error"></span>
          </div>
          </div>

          <div class="form-group">
          <div class="input-group">
            <div class="input-group-addon">
              <span class="glyphicon glyphicon-envelope"></span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              fill="currentColor"
              class="bi bi-at"
              viewBox="0 -2 30 30"
            >
              <path
                d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"
              />
            </svg>
            <input
              name="email"
              type="text"
              class="form-control"
              placeholder="Ingrese su Email"
            />
            <span class="help-block" id="error"></span>
          </div>
          </div>

         <!--Contraseña-->
          <div class="row">
          <div class="form-group col-lg-6">
            <div class="input-group">
              <div class="input-group-addon">
                <span class="glyphicon glyphicon-lock"></span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                fill="currentColor"
                class="bi bi-asterisk"
                viewBox="0 -2 30 30"
              >
                <path
                  d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z"
                />
              </svg>
              <input
                name="password"
                id="password"
                type="password"
                class="form-control"
                placeholder="Ingrese su Contraseña"
              />
            </div>
            <span class="help-block" id="error"></span>
          </div>
          </div>

          <div class="form-group col-lg-6">
          <div class="input-group">
            <div class="input-group-addon">
              <span class="glyphicon glyphicon-lock"></span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              fill="currentColor"
              class="bi bi-asterisk"
              viewBox="0 -2 30 30"
            >
              <path
                d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z"
              />
            </svg>
            <input
              name="cpassword"
              type="password"
              class="form-control"
              placeholder="Confirmar su Contraseña"
            />
          </div>
          <span class="help-block" id="error"></span>
          </div>

         <!--Departamento-->
          <div class="form-group">
          <div class="input-group">
            <div class="input-group-addon">
              <span class="glyphicon glyphicon-envelope"></span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              fill="currentColor"
              class="bi bi-map"
              viewBox="0 -2 30 30"
            >
              <path
                fill-rule="evenodd"
                d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.502.502 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103zM10 1.91l-4-.8v12.98l4 .8V1.91zm1 12.98 4-.8V1.11l-4 .8v12.98zm-6-.8V1.11l-4 .8v12.98l4-.8z"
              />
            </svg>
            <input
              name="departamento"
              type="text"
              class="form-control"
              placeholder="Departamento"
            />
          </div>
          <span class="help-block" id="error"></span>
          </div>

          <div class="form-group">
          <div class="input-group">
            <div class="input-group-addon">
              <span class="glyphicon glyphicon-envelope"></span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              fill="currentColor"
              class="bi bi-map"
              viewBox="0 -2 30 30"
            >
              <path fill-rule
                ="evenodd"
                d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.502.502 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103zM10 1.91l-4-.8v12.98l4 .8V1.91zm1 12.98 4-.8V1.11l-4 .8v12.98zm-6-.8V1.11l-4 .8v12.98l4-.8z"
              />
            </svg>
            <input
              name="ciudad"
              type="text"
              class="form-control"
              placeholder="Ciudad"
            />
          </div>

          <span class="help-block" id="error"></span>
          </div>

          <div class="form-group">
          <div class="input-group">
            <div class="input-group-addon">
              <span class="glyphicon glyphicon-envelope"></span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              fill="currentColor"
              class="bi bi-mailbox2"
              viewBox="0 -2 30 30"
            >
              <path
                d="M9 8.5h2.793l.853.854A.5.5 0 0 0 13 9.5h1a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5H9v1z"
              />
              <path
                d="M12 3H4a4 4 0 0 0-4 4v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V7a4 4 0 0 0-4-4zM8 7a3.99 3.99 0 0 0-1.354-3H12a3 3 0 0 1 3 3v6H8V7zm-3.415.157C4.42 7.087 4.218 7 4 7c-.218 0-.42.086-.585.157C3.164 7.264 3 7.334 3 7a1 1 0 0 1 2 0c0 .334-.164.264-.415.157z"
              />
            </svg>
            <input
              name="postalcode"
              type="text"
              class="form-control"
              placeholder="Codigo Postal"
            />
          </div>
          <span class="help-block" id="error"></span>
         </div>

          <div class="form-group">
          <div class="input-group">
            <div class="input-group-addon">
              <span class="glyphicon glyphicon-envelope"></span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              fill="currentColor"
              class="bi bi-signpost-fill"
              viewBox="0 -2 30 30"
            >
              <path
                d="M7.293.707A1 1 0 0 0 7 1.414V4H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5v6h2v-6h3.532a1 1 0 0 0 .768-.36l1.933-2.32a.5.5 0 0 0 0-.64L13.3 4.36a1 1 0 0 0-.768-.36H9V1.414A1 1 0 0 0 7.293.707z"
              />
            </svg>
            <input
              name="direccion"
              type="text"
              class="form-control"
              placeholder="Direccion"
            />
          </div>
          <span class="help-block" id="error"></span>
          </div>
        <button type="submit" class="w-100 btn btn-lg btn-primary"><span class="glyphicon glyphicon-log-in"></span> Registrarme</button>
      </div>

      
      <footer class="seccion-pie">
        <article>
       <h2>Contacto</h2>
        <p>Nuestro repositorio</p>

        <p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-github"
            viewBox="0 0 16 16">
            <path
            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
          />
          </svg>
        <a href="https://github.com/kealanle/Grupo79.2"
        target="_blank">Github</a> 
      </p>
    </article>
    <article>
      <h2>Integrantes</h2>
      <p>
        <a href="https://github.com/kealanle/Grupo79.2/tree/Andres-1"
        target="_blank"
          >Andres Mesa</a>
      </p>
      <p>
        <a
          href="https://github.com/kealanle/Grupo79.2/tree/Bryan"
          target="_blank"
          >Bryan Jaimes</a
        >
      </p>
      <p>
        <a
          href="https://github.com/kealanle/Grupo79.2/tree/Jabid"
          target="_blank"
          >Jabid Jimenez</a
        >
      </p>
      <p>
        <a
          href="https://github.com/kealanle/Grupo79.2/tree/Kevin"
          target="_blank"
          >Kevin Angarita</a
        >
      </p>
    </article>
      </footer>
    
    
  </div>
        
  
</template>

<script>
import Header from "@/components/Header.vue";
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name:'Registro',
  componentes: {
    Header,
    NavBar,
    Footer,
  },
};
</script>

<style scoped>
.form-register {
  width: 50%;
  background: #24303c;
  padding: 20px;
  margin: auto;
  margin-top: 10%;
  margin-bottom: 10%;
  border-radius: 5%;
  font-family: "calibri";
  color: white;
  box-shadow: 7px 13px 37px #000;
  overflow: auto;
}


.seccion-pie {
  
  background-color: #25294f;
  height: 200px;
  display: flex;
  color: white;
  justify-content: space-evenly;
}
</style>
</style>
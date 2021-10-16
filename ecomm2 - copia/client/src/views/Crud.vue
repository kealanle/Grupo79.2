<template>
  <div class="contenedor">
    <Header />
    
<Crear/>



    <!-- <div class="contenedor-crud">
      <form action="">
        <div class="topnav">
          <button href="#contact">Buscar</button>

          <input type="text" placeholder="Buscar ID" />
        </div>
      </form>
      <div class="contenedor-crud__forms">
        <div class="caja-form">
          <form action="/action_page.php">
            <label for="precio">Precio</label>
            <input
              class="input"
              type="text"
              id="precio"
              name="precio"
              placeholder="precio.."
            />

            <label for="title">Titulo</label>
            <input
              class="input"
              type="text"
              id="title"
              name="title"
              placeholder="Titulo."
            />
            <label for="categoria">Categoria</label>
            <input
              class="input"
              type="text"
              id="categoria"
              name="categoria"
              placeholder="categoria."
            />
            <label for="thumbnailUrl">Thumbnail</label>
            <input
              class="input"
              type="text"
              id="thumbnailUrl"
              name="thumbnailUrl"
              placeholder="thumbnailUrl"
            /> -->

            

            <!-- <input type="submit" value="Crear" />
            <input type="submit" value="Actualizar" />
            <input type="submit" value="Eliminar" />
          </form> -->
        <!-- </div> -->
        <!-- <div id="caja-crud">
          <button class="boton">Crear</button>
          <button class="boton">Atualizar</button>
          <button class="boton">Eliminar</button>
        </div> -->
      <!-- </div> -->
    <!-- </div> -->

    <Footer />
  </div>
</template>

<script>
import Crear from '../components/Crear.vue';
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";
import NavBar from "../components/NavBar.vue";
export default {
  components: { Header, NavBar, Footer, Crear },
   data(){
     return {
       crear: false,
       info:null,
    }
  },
   methods:{
    crearClick(){
      this.crear = true;
     
    }
    }
};
</script>


<style scoped>
.contenedor-crud {
  box-sizing: border-box;
}
.topnav {
  overflow: hidden;
  background-color: #e9e9e9;
}
.topnav button {
  float: left;
  display: block;
  color: black;
  text-align: center;
  padding: 5px 16px;
  text-decoration: none;
  font-size: 17px;
  margin-left: 41%;
}
/* Change the color of links on hover */
.topnav button:hover {
  background-color: #ddd;
  color: black;
}

/* Style the "active" element to highlight the current page */
.topnav button.active {
  background-color: #2196f3;
  color: white;
}

/* Style the search box inside the navigation bar */
.topnav input[type="text"] {
  float: right;
  padding: 0px;
  border: none;
  margin-top: 8px;
  margin-right: 40%;
  font-size: 17px;
}
input {
  margin-top: 0;
  border-radius: 30px;
}

#caja-crud {
  display: flex;
  align-content: center;
  padding-top: 100px;
  padding-right: 20px;
  padding-left: 20px;
  padding-bottom: 10px;
  background: #aaa5a5;
  flex-direction: column;
  align-content: center;
  border: 1px solid #747171;
  box-shadow: 2px 2px 8px #504f4f;
   border-radius: 5px;
  width: 20%;
  margin-right: 25%;
  margin-top: 8px;
  margin-bottom: 8px;
  margin-left: 15px;
}

.boton {
  display: flex;
  margin: 16px 0px;
  text-align: center;
  border-radius: 15px;
  padding: 6px 100px;
  font-weight: bold;
  background-color:#25294f;
  color: white;
}
.boton:hover{
    background-color: #3464a3;
}
.caja-form {
  display: flex;
  border-radius: 5px;
  background-color: #aaa5a5;
  padding: 10px;
  width: 25%;
  margin-right: 0;
  margin-top: 8px;
  margin-bottom: 8px;
  margin-left: 25%;
  border: 1px solid #747171;
  box-shadow: 2px 2px 8px #504f4f;
}

.input[type="text"],
select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-weight: 400;
}

input[type="submit"] {
  width: 100%;
  background-color:#25294f;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: #3464a3;
}
.contenedor-crud__forms{
    display: flex;
    align-content: space-between;
}
label{
    font-weight: bold !important
}
</style>
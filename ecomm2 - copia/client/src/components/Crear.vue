<template>
  <div class="container" id="container-crear">
    <div class="card">
      <form action="" method="post">
        <label for="precio">Precio: </label>
        <input class="entrada" type="number" name="precio" id="precio" required />
        <label for="title">title: </label>
        <input
          class="entrada"
          type="text"
          name="title"
          id="title"
          required
        />
        <label for="categoria">categoria: </label>
        <input
          class="entrada"
          type="text"
          name="categoria"
          id="categoria"
          required
        />
        <button class="btn" type="button" @click="crear">Crear</button>
      </form>
    </div>


  </div>
</template>
<script>

import Api from '@/logic/Api'
export default {
  name: "Crear",

  data() {
    return {
      vistaCrear: false,
      vistaActualizar: false,

    };
  },
  methods:{

    async crear(){
      const precio = document.getElementById('precio').value;
      const title = document.getElementById('title').value;
      const categoria = document.getElementById('categoria').value;

      await Api.create({precio:precio,title,categoria});
      window.location.reload(true);
    }
  }
};
</script>

<style scoped>
.container {
  padding: 20px;
  display: flex;
}
.card {
  display: flex;
  flex-direction: column;
  height: min-content;
  width: 50%;
  padding: 20px;
  margin: 5px;
}
.entrada {
  display: flex;
  width: 100%;
  background-color: rgba(255, 0, 0, 0);
  border: 1px solid #4e73df;
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 5px;
}
.btn {
  margin-top: 10px;
  border: none;
  background-color: #4e73df;
  padding: 10px 25px 10px 25px;
  color: white;
}

.entrada:focus {
  outline: none;
  box-shadow: 0px 0px 15px #4e73df;
  border: none;
}
</style>
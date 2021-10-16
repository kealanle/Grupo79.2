import axios from "axios";
const API = "http://localhost:3000";

export default {
  getcategoria(buscategoria) {
        return axios.get(API/producto/categoria/buscategoria);
      },
  getAll() {
    return axios.get(API);
  },
  create(todo) {
    return axios.post(API, todo);
  },
  getOne(nombre) {
    const API2 = `${API}/${_id}`;
    //console.log(API2);
    return axios.get(API2);
  },
  update(nombre, obj) {
    const API2 = `${API}/${nombre}`;
    //console.log(API2);
    return axios.put(API2, obj);
  },
  delete(nombre) {
    const API2 = `${API}/${nombre}`;
    //console.log(API2);
    return axios.delete(API2);
  },
};
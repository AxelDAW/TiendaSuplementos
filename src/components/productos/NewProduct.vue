<template>

<div id="add-products" class="mt-3">

    <h2 @click="actuForm" class="cursor-pointer">Añadir Productos</h2>

    <div v-if="mostrarForm">

    <form @submit.prevent="subirProd">

      <div class="mb-3">

        <label for="nombre" class="form-label">Nombre</label>
        <input type="text" class="form-control" id="nombre" v-model="product.nombre" required>

      </div>

      <div class="mb-3">

        <label for="descripcion" class="form-label">Descripción</label>
        <textarea class="form-control" id="descripcion" v-model="product.desc" required></textarea>

      </div>

      <div class="mb-3">

        <label for="precio" class="form-label">Precio</label>
        <input type="number" step="0.01" class="form-control" id="precio" v-model="product.precio" required>

      </div>

      <div class="mb-3">

        <label for="disponibilidad" class="form-label">Disponibilidad</label>
        <select class="form-control" id="disponibilidad" v-model="product.dispo" required>
            
          <option value="1">Sí</option>
          <option value="0">No</option>

        </select>

      </div>

      <div class="mb-3">

        <label for="categoria" class="form-label">Categoría</label>
        <select class="form-control" id="categoria" v-model="product.categoria" required>

          <option value="1">Proteinas</option>
          <option value="2">Creatinas</option>
          <option value="3">Carbohidratos</option>
          <option value="4">Mochilas</option>
          <option value="5">Shakers</option>
          <option value="6">Accesorios</option>

        </select>

      </div>

      <div class="mb-3">

        <label for="img" class="form-label">Imagen</label>
        <input type="text" class="form-control" id="img" v-model="product.imagen" required>

      </div>

      <button type="submit" class="btn btn-primary">Añadir Producto</button>

    </form>

  </div>

  </div>

</template>

<script>

export default {

    name: 'NewProduct',

    data(){

        return {

            product: {

                nombre: '',
                desc: '',
                precio: 0,
                disponibilidad: 0,
                categoria: 0,
                imagen: '',

            },

            mostrarForm: false,

        }

    },

    methods: {

        subirProd(){

            fetch('http://localhost:3000/perfil/subirprod', {

                method: 'POST',
                headers: {

                    'Content-Type': 'application/json'

                },
                body: JSON.stringify(this.product)

            })
            .then(response => {

                if (!response.ok){

                    console.error("Error en el servidor");

                }

                return response.json();

            })
            .then(data => {

                console.log(data)

            })
            .catch(e => {

                console.error("Error en el fetch", e)

            })

        },

        actuForm(){

          this.mostrarForm = !this.mostrarForm;

        }

    }

}

</script>

<style scoped>

.cursor-pointer {

  cursor: pointer;

}

</style>
<template>

    <h2 @click="actuForm" class="cursor-pointer">Modificar Productos</h2>

    <div v-if="mostrarForm">

        <form @submit.prevent="modProd">

            <div class="mb-3">

                <label for="id" class="form-label">ID</label>
                <input @input="buscarProducto" type="number" class="form-control" id="id" v-model="idBuscar" required>

            </div>

            <div class="mb-3">

                <label for="nombre" class="form-label">Nombre</label>
                <input type="text" class="form-control" id="nombre" v-model="product.nombre">

            </div>

            <div class="mb-3">

                <label for="descripcion" class="form-label">Descripción</label>
                <textarea class="form-control" id="descripcion" v-model="product.descripcion"></textarea>

            </div>

            <div class="mb-3">

                <label for="precio" class="form-label">Precio</label>
                <input type="number" step="0.01" class="form-control" id="precio" v-model="product.precio">

            </div>

            <div class="mb-3">

                <label for="disponibilidad" class="form-label">Disponibilidad</label>
                <select class="form-control" id="disponibilidad" v-model="product.disponibilidad">

                    <option value="1">Sí</option>
                    <option value="0">No</option>

                </select>

            </div>

            <div class="mb-3">

                <label for="categoria" class="form-label">Categoría</label>
                <select class="form-control" id="categoria" v-model="product.categoria">

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
                <input type="text" class="form-control" id="img" v-model="product.imagen">

            </div>

            <button type="submit" class="btn btn-primary">Modificar Producto</button>

        </form>

    </div>

</template>

<script>

export default {

    name: 'ModProduct',

    data(){

        return {

            listaProductos: [],
            idBuscar: 0,

            product: {

                id: 0,
                nombre: '',
                descripcion: '',
                precio: '',
                disponibilidad: 0,
                categoria: 0,
                imagen: '',

            },

            mostrarForm: false,

        }

    },

    methods: {

        buscarProducto(){

            let prod = this.listaProductos.find( k => { return k.id == this.idBuscar } );

            if( prod ){

                this.product = prod;

            }

        },

        cargarListaProductos(){

            fetch('http://localhost:3000/menu', {

                method: 'GET',
                headers: {

                    'Content-Type': 'application/json'

                },

            })
            .then(response => {

                if (!response.ok) {

                    console.error("Error en el servidor")

                }

                return response.json();

            })
            .then(data => {

                this.listaProductos = data;

            })
            .catch(e => {

                console.error("Error en el fetch", e)

            })

        },

        modProd(){

            fetch('http://localhost:3000/perfil/modprod', {

                method: 'POST',
                headers: {

                    'Content-Type': 'application/json'

                },
                body: JSON.stringify(this.product)

            })
            .then(response => {

                if (!response.ok) {

                    console.error("Error en el servidor")

                }

                return response.json();

            })
            .then(data => {

                console.log( data );

            })
            .catch(e => {

                console.error("Error en el fetch", e)

            })

        },

        actuForm(){

            this.mostrarForm = !this.mostrarForm;

        }

    },

    mounted(){

        this.cargarListaProductos();

    }

}

</script>

<style scoped>

.cursor-pointer {

  cursor: pointer;

}

</style>
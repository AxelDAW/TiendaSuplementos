<template>
    <div>
    <NavBar @filtrar="aplicarFiltro"/>

    <section>

        <div class="container-fluid">

            <div class="row">

                <div v-for="producto in productosFiltrados" :key="producto.id" class="col-md-4 mb-4">

                    <div class="card" :class="{ 'opacity-50': !producto.disponibilidad}">

                        <img :src="producto.imagen + '.jpg'" class="card-img-top" alt="Producto">

                        <div class="card-body">

                            <h5 class="card-title"><router-link v-if="producto.disponibilidad" :to="'/menu/producto/' + producto.id">

                                {{ producto.nombre }}</router-link>

                                <span v-else class="disabled-link">{{ producto.nombre }}</span>
                            
                            </h5>
                            <p class="card-text">{{ producto.descripcion }}</p>
                            <p class="card-text"><strong>Precio:</strong> {{ producto.precio.toFixed(2) }} €</p>
                            <p v-if="producto.disponibilidad" class="text-success">Disponible</p>
                            <p v-else class="text-danger">No disponible</p>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    </section>

</div>

</template>

<script>

import NavBar from '../components/NavBar.vue'

export default {

    name: 'PagPrincipal',

    components: { NavBar },

    data(){

        return {

            productos: [],
            productosFiltrados: [],
            categoria: [],
            categorias: [],

        }

    },

    methods: {

        mostrarInfo(){

            fetch('http://localhost:3000/menu')
                .then(response => {

                    if (!response.ok) {

                        throw new Error('Error en el servidor.');

                    }

                    return response.json();

                })
                .then(data => {

                    this.productos = data;
                    this.productosFiltrados = data;
                    this.categoria = data.categoria;

                    let xd = [...new Set(data.map(prod => prod.categoria))]

                    this.categorias = xd;

                })
                .catch( e => {

                    console.error('Error en la solicitud fetch.', e)

                })

        },

        aplicarFiltro(texto){

            this.productosFiltrados = this.productos.filter(producto => 

                producto.nombre.toLowerCase().includes(texto.toLowerCase())

            )

        }

    },

    mounted(){

        this.mostrarInfo();

    }

}

</script>

<style scoped>

.opacity-50 {

    opacity: 0.5;

}

.disabled.link {

    pointer-events: none;
    cursor: default;
    color: inherit;
    text-decoration: none;

}

</style>
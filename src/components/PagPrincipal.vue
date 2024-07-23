<template>
    <div>
    <NavBar @filtrar="aplicarFiltro"/>

    <section>

        <div class="container-fluid">

            <div class="row">

                <div v-for="(producto, index) in productosFiltrados" :key="producto.id" class="col-md-4 mb-4">

                    <div class="card">

                        <img :src="images[index]" class="card-img-top" alt="Producto">

                        <div class="card-body">

                            <h5 class="card-title">{{ producto.nombre }}</h5>
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
            images: ['/prote.jpg', '/creatina.jpg', '/dextrosa.jpg', '/bolsa.jpg', '/shaker.jpg', '/correas.jpg'],
            productosFiltrados: [],

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
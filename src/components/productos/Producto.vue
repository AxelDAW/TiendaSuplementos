<template>

    <NavBar/>

    <div v-for="i in datos" class="col-md-4 mb-4">

        <div class="card">

            <img :src="'../../' + i.imagen + '.jpg'" class="card-img-top" alt="Producto">

            <div class="card-body">

                <h5 class="card-title">{{ i.nombre }}</h5>
                <p class="card-text">{{ i.descripcion }}</p>
                <p class="card-text"><strong>Precio:</strong> {{ i.precio.toFixed(2) }} €</p>
                <p v-if="i.disponibilidad" class="text-success">Disponible</p>
                <p v-else class="text-danger">No disponible</p>

            </div>

        </div>

    </div>

</template>

<script>

import NavBar from '../NavBar.vue';

export default {

    name: 'Producto',

    components: { NavBar },

    data(){

        return({

            id: this.$route.params.id || 0,
            datos: [],

        })
        
    },

    methods: {

        cargarInformacionProducto: function(){

            fetch('http://localhost:3000/menu/producto/' + this.id)
                .then(response => {

                    if (response.ok) {

                        return response.json();

                    }

                })
                .then(data => {

                    this.datos = data;

                })
                .catch(e => {

                    console.error('Error en el fetch', e);

                })

        }

    },

    mounted(){

        this.cargarInformacionProducto();

    }

}

</script>
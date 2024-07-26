<template>

    <NavBar/>

    <div class="container-fluid py-5">

        <div class="row justify-content-center">

            <div class="col-md-8 text-center">
   
                    <h2 v-if="id == 1" class="mb-4">Las mejores proteínas del mercado.</h2>
                    <h2 v-if="id == 2" class="mb-4">Las mejores creatinas del mercado.</h2>
                    <h2 v-if="id == 3" class="mb-4">Los mejores carbohidratos del mercado.</h2>
                    <h2 v-if="id == 4" class="mb-4">Las mejores mochilas del mercado.</h2>
                    <h2 v-if="id == 5" class="mb-4">Los mejores mezcladores del mercado.</h2>
                    <h2 v-if="id == 6" class="mb-4">Los mejores accesorios de entrenamiendo del mercado.</h2>

            </div>

        </div>

        <div class="row">

            <div class="col-md-8">

                <div class="row">

                    <div class="col-md-4 mb-4" v-for="item in newInfo" :key="item.id">

                        <div class="card h-100" :class="{ 'opacity-50': !item.disponibilidad }">

                            <img :src="'../../' + item.imagen + '.jpg'" class="card-img-top" alt="...">

                            <div class="card-body">

                                <h5 class="card-title"><router-link v-if="item.disponibilidad" :to="'/menu/producto/' + item.id">

                                    {{ item.nombre }}</router-link>

                                    <span v-else class="disabled-link">{{ item.nombre }}</span>
                                
                                </h5>

                                <p class="card-text">{{ item.descripcion }}</p>
                                <p class="card-text"><strong>Precio:</strong> {{ item.precio }} €</p>
                                <p class="card-text" v-if="item.disponibilidad">
                                    <span class="badge bg-success">Disponible</span>
                                </p>
                                <p class="card-text" v-else>
                                    <span class="badge bg-danger">No disponible</span>
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    </div>

    <router-link to="/menu">Volver atrás</router-link>

</template>

<script>

import NavBar from '../NavBar.vue';

export default {

    name: 'Categorias',

    data(){

        return {

            id: this.$route.params.tipo || 0,
            newInfo: [],

        }

    },

    components: { NavBar},

    methods: {

        tenerinfo(){

            fetch('http://localhost:3000/categorias/'+ this.id)
                .then(response => {

                    if (response.ok) {

                        return response.json();

                    }

                })
                .then(data => {

                    console.log(data)
                    this.newInfo = data;

                })
                .catch(e => {

                    console.error('Error en el fetch', e);

                })

        },

    },

    mounted(){

        this.tenerinfo();

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
<template>

    <NavBar/>

    <router-link to="/menu">Volver atrás</router-link>

</template>

<script>

import NavBar from '../NavBar.vue';

export default {

    name: 'Categorias',

    components: { NavBar},

    methods: {

        tenerinfo(){

            fetch('http://localhost:3000/categorias')

        }

    }

}

</script>
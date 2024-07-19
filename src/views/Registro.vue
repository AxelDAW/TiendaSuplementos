<template>

    <div>

        <Registrarse/>

    </div>

    <div>

        <router-link to="/">Volver</router-link>

    </div>

</template>

<script>

import Registrarse from '../components/Registrarse.vue'

export default {

    name: 'Registro',

    components: { Registrarse },

}

</script>
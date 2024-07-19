<template>

    <PagPrincipal/>

    <div>

        <router-link to="/">Volver</router-link>

    </div>

</template>

<script>

import PagPrincipal	from '../components/PagPrincipal.vue'

export default {

    name: 'Menu',

    components: { PagPrincipal }

}

</script>
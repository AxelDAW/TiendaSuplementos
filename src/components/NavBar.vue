<template>

<header>

<nav class="navbar navbar-expand-lg navbar-light bg-light">

    <div class="container-fluid">

        <a class="navbar-brand" href="/menu"><img src="/logo.jpg" style="width: 60px; height: 60px;"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">

            <span class="navbar-toggler-icon"></span>

        </button>

        <div class="collapse navbar-collapse" id="navbarScroll">

            <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
                
                <li class="nav-item dropdown">

                    <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Nutrición</a>

                    <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">

                        <li><router-link class="dropdown-item" :to="'/menu/categorias/' + categorias[0]">Proteínas</router-link></li>
                        <li><a class="dropdown-item" :href="'/menu/categorias/'+ categorias[1]">Creatina</a></li>
                        <li><a class="dropdown-item" :href="'/menu/categorias/'+ categorias[2]">Carbohidratos</a></li>

                    </ul>

                </li>

                <li class="nav-item dropdown">

                    <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Accesorios</a>

                    <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">

                        <li><router-link class="dropdown-item" :to="'/menu/categorias/' + categorias[3]">Mochilas</router-link></li>
                        <li><router-link class="dropdown-item" :to="'/menu/categorias/' + categorias[4]">Mezcladores</router-link></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><router-link class="dropdown-item" :to="'/menu/categorias/' + categorias[5]">Entrenamiento</router-link></li>

                    </ul>

                </li>

            </ul>

            <form class="d-flex" @submit.prevent="emitfiltro">

                <input class="form-control me-2" type="search" placeholder="Escribe aquí..." aria-label="Search" v-model="textofiltrado">
                <button class="btn btn-outline-primary" type="submit">Buscar</button>

            </form>

            <div class="ms-3">

                <a href="/menu/perfil"><i class="bi bi-person-circle" style="font-size: 2em;"></i></a>

            </div>

        </div>

    </div>

</nav>

</header>

</template>

<script>

export default {

    name: 'NavBar',

    data(){

        return {

            textofiltrado: '',
            categorias: []

        }

    },

    methods: {

        emitfiltro(){

            this.$emit('filtrar', this.textofiltrado)

        },

        cargarCategorias(){

            fetch('http://localhost:3000/menu')
                .then(response => {

                    if (!response.ok) {

                        throw new Error('Error en el servidor.');

                    }

                    return response.json();

                })
                .then(data => {

                    let xd = [...new Set(data.map(prod => prod.categoria))]

                    this.categorias = xd;

                })
                .catch( e => {

                    console.error('Error en la solicitud fetch.', e)

                })

        },        

    },

    mounted(){

        this.cargarCategorias()

    }

}

</script>

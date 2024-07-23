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

                        <li><a class="dropdown-item" href="/menu/proteinas">Proteínas</a></li>
                        <li><a class="dropdown-item" href="/menu/creatinas">Creatina</a></li>
                        <li><a class="dropdown-item" href="/menu/carbos">Carbohidratos</a></li>

                    </ul>

                </li>

                <li class="nav-item dropdown">

                    <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Accesorios</a>

                    <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">

                        <li><a class="dropdown-item" href="/menu/mochilas">Mochilas</a></li>
                        <li><a class="dropdown-item" href="/menu/shakers">Mezcladores</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="/menu/accs">Entrenamiento</a></li>

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

        }

    },

    methods: {

        emitfiltro(){

            this.$emit('filtrar', this.textofiltrado)

        }

    }

}

</script>

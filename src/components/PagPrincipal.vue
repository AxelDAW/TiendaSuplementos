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

                                <li><a class="dropdown-item" href="#">Proteínas</a></li>
                                <li><a class="dropdown-item" href="#">Creatina</a></li>
                                <li><a class="dropdown-item" href="#">Carbohidratos</a></li>

                            </ul>

                        </li>

                        <li class="nav-item dropdown">

                            <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Accesorios</a>

                            <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">

                                <li><a class="dropdown-item" href="#">Mochilas</a></li>
                                <li><a class="dropdown-item" href="#">Mezcladores</a></li>
                                <li><hr class="dropdown-divider"></li>
                                <li><a class="dropdown-item" href="#">Entrenamiento</a></li>

                            </ul>

                        </li>

                    </ul>

                    <form class="d-flex">

                        <input class="form-control me-2" type="search" placeholder="Escribe aquí..." aria-label="Search">
                        <button class="btn btn-outline-primary" type="submit">Buscar</button>

                    </form>

                    <div class="ms-3">

                        <a href="/menu/perfil"><i class="bi bi-person-circle" style="font-size: 2em;"></i></a>

                    </div>

                </div>

            </div>

        </nav>

    </header>

    <section>

        <div class="container-fluid">

            <div class="row">

                <div v-for="(producto, index) in productos" :key="producto.id" class="col-md-4 mb-4">

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

</template>

<script>

export default {

    name: 'PagPrincipal',

    data(){

        return {

            productos: [],
            images: ['/prote.jpg', '/creatina.jpg', '/dextrosa.jpg', '/bolsa.jpg', '/shaker.jpg', '/correas.jpg']

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
                    console.log(this.productos)

                })
                .catch( e => {

                    console.error('Error en la solicitud fetch.', e)

                })

        }

    },

    mounted(){

        this.mostrarInfo();

    }

}

</script>
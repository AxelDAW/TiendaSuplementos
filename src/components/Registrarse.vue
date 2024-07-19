<template>

<div class="container-fluid vh-100">

    <div class="row h-100 justify-content-center align-items-center">

        <div class="col-md-12 text-center">

            <h2>Registro</h2>

            <form @submit.prevent="">

                <div class="card-body">

                    <div class="row-md-6 mb-2 card">

                        <label for="nombre">Introduce tu nombre:</label>
                        <input type="text" placeholder="Escribe aquí..." class="form-control" id="nombre" v-model="objUsu.nombre" required>

                    </div>

                </div>

                <div class="card-body">
                    
                    <div class="row-md-6 card">

                        <label for="pass">Introduce tu contraseña:</label>
                        <input type="password" placeholder="Escribe aquí..." class="form-control" id="pass" v-model="objUsu.contraseña" required>

                    </div>

                </div>

                <div>

                    <button @click="regUsu" class="mt-2 btn btn-primary">Registrarse</button>

                </div>

            </form>

        </div>

    </div>

</div>

</template>

<script>

export default {

    name: 'Registrarse',

    data(){

        return {

            objUsu: {

                nombre: '',
                contraseña: '',

            },

        }

    },

    methods: {

        regUsu(){

            return fetch('http://localhost:3000/newusu', {

                method: 'POST',
                headers: {

                    'Content-type': 'application/json'

                },
                body: JSON.stringify( this.objUsu )

            })
            .then(response => {

                if (!response.ok) {

                    throw new Error('Error');

                }

                return response.json();

            })
            .then(data => {

                if (data.valido === true) {

                    this.$router.push('/');

                } else {

                    console.log('Error al registrar usuario.')

                }

            })
            .catch(e => {

                console.error('Error', e);

            })

        }

    }

}

</script>

<style scoped>

h2 {

    font-size: 40px;
    background-color: #0d6efd;

}

</style>
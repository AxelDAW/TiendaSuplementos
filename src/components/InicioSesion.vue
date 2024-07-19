<template>

    <div class="container-fluid vh-100">

        <div class="row h-100 justify-content-center align-items-center">

            <div class="col-md-12 text-center">

                <h2>Iniciar sesión</h2>

                <form @submit.prevent="">

                    <div class="card-body">

                        <div class="row-md-6 mb-2 card">

                            <label for="nombre">Introduce tu nombre:</label>
                            <input type="text" placeholder="Escribe aquí..." class="form-control" id="nombre" v-model="iniUsu.nombre" required>

                        </div>

                    </div>

                    <div class="card-body">
                        
                        <div class="row-md-6 card">

                            <label for="pass">Introduce tu contraseña:</label>
                            <input type="password" placeholder="Escribe aquí..." class="form-control" id="pass" v-model="iniUsu.pass" required>

                        </div>

                    </div>

                    <div>

                        <button @click="iniSesion" class="mt-2 btn btn-primary">Continuar</button>

                    </div>

                </form>
            
                <span>¿Todavía no tienes cuenta? <router-link to="/registro">Crea una.</router-link></span>

            </div>

        </div>

    </div>

</template>

<script>

export default {

    name: 'InicioSesion',

    data(){

        return {

            iniUsu: {

                nombre: '',
                pass: '',

            },
            token: '',

        }

    },

    methods: {

        iniSesion(){

            fetch('http://localhost:3000/inisesion', {

                method: 'POST',
                headers: {

                    'Content-Type': 'application/json'

                },
                body: JSON.stringify( this.iniUsu )

            })
                .then(response => {

                    if (!response.ok) {

                        throw new Error('Error');

                    }

                    return response.json();

                })
                .then(data => {

                    console.log(data);
                    this.token = data.token;
                    localStorage.setItem('token', this.token)

                    if (data.valido === true){

                        this.$router.push('/menu');

                    }

                })
                .catch( e => {

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
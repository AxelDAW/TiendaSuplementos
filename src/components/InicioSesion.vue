<template>

    <div class="container-fluid vh-100 bg-image">

        <div class="row h-100 justify-content-center align-items-center">

            <div class="col-md-4 text-center">

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

                        <button @click="iniSesion" class="mt-3 btn btn-primary mb-2" style="color: black;">Continuar</button>

                    </div>

                    <div v-if="errorUsu" class="alert alert-danger mt-2">

                        {{ errorUsu }}

                    </div>

                </form>
            
                <span> ¿Todavía no tienes cuenta? <router-link to="/registro" style="color: black;">Crea una.</router-link></span>

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
            errorUsu: '',

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

                    } else {

                        this.errorUsu = 'Usuario o contraseña incorrectos.';

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
    border-radius: 10px;

}

span {

font-size: 18px;
background-color: #0d6efd;
border-radius: 5px;

}

.card {

    border-radius: 8px;
    padding: 20px;

}

.bg-image {

    background-image: url('/logo.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

}

</style>
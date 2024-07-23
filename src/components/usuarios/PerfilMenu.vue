<template>

    <div class="container-fluid">

      <div class="row">
        
        <nav id="sidebar" class="col-md-3 col-lg-2 d-md-block bg-light sidebar">

          <div class="position-sticky">

            <h4 class="p-3">Perfil de Usuario</h4>
            <ul class="nav flex-column">

              <li class="nav-item">

                <a class="nav-link active" href="#info">Información Personal</a>

              </li>

              <li class="nav-item">

                <a class="nav-link" href="#change-password">Cambiar Contraseña</a>

              </li>

              <li class="nav-item">

                <a class="nav-link" href="#delete-account">Eliminar Cuenta</a>

              </li>

              <li class="nav-item">

                <a class="nav-link" href="#order-history">Historial de Compras</a>

              </li>

              <li class="nav-item">

                <a class="nav-link" href="#cart">Ver Carrito</a>

              </li>

              <li class="nav-item">
                
                <a class="nav-link" href="#" @click="logout">Cerrar Sesión</a>

              </li>

            </ul>

          </div>

        </nav>
  
        <main class="col-md-9 ms-sm-auto col-lg-10 px-4">

          <div id="info" class="mt-3">

            <h2>Información Personal</h2>
            <p><strong>Id:</strong> {{ datos.id }}</p>
            <p><strong>Nombre:</strong> {{ datos.nombre }}</p>
            
          </div>
  
          <div id="change-password" class="mt-3">

            <h2>Cambiar Contraseña</h2>
            <form @submit.prevent="cambiarPass">

              <div class="mb-3">

                <label for="pass-actual" class="form-label">Nueva Contraseña</label>
                <input type="password" class="form-control" id="pass-actual" required v-model="newPass">

              </div>

              <div class="mb-3">

                <label for="newPass" class="form-label">Repite Contraseña</label>
                <input type="password" class="form-control" id="newPass" v-model="newPassrep" required>

              </div>

              <p v-if="error" class="text-danger">Las contraseñas no coinciden.</p>
              <button type="submit" class="btn btn-primary">Actualizar Contraseña</button>

            </form>

          </div>
  
          <div id="delete-account" class="mt-3">

            <h2>Eliminar Cuenta</h2>
            <p>¿Estás seguro de que quieres eliminar tu cuenta? Esta acción es irreversible.</p>
            <button class="btn btn-danger" @click="borrarCuenta">Eliminar Cuenta</button>

          </div>
  
          <div id="order-history" class="mt-3">

            <h2>Historial de Compras</h2>
            
          </div>
  
          <div id="cart" class="mt-3">

            <h2>Ver Carrito</h2>
            
          </div>

          <div>

            <router-link to="/menu">Volver atrás</router-link>

          </div>

        </main>

      </div>

    </div>

</template>
  
<script>

export default {

    name: 'PerfilMenu',
  
    data() {

        return {

            user: {

                name: '',
                email: ''

            },

            datos: [],
            
            newPass: '',
            newPassrep: '',
            
            newPassword: {

              contraseña: '',
              id: localStorage.getItem('id')

            },

            error: false,

        }

    },
  
    methods: {

        infoPerfil(){

          fetch('http://localhost:3000/perfil/infoperfil/' + this.newPassword.id)
            .then(response => {

              if (!response.ok){

                console.error("Error en el servidor.")

              } 

              return response.json();

            })
            .then(data => {

              if (data && data.length > 0) {this.datos = data[0]}

            })
            .catch(e => {

              console.error("Error en el fetch.", e)

            })

        },

        logout() {
        
            this.$router.push('/');

        },
  
        cambiarPass() {
          
          if (this.newPass != this.newPassrep){

            this.error = true;

          }
          
          this.newPassword.contraseña = this.newPassrep;
          
          return fetch('http://localhost:3000/perfil/changePass', {

            method: 'POST',
            headers: {

              'Content-Type': 'application/json'

            },
            body: JSON.stringify( this.newPassword)

          })
          .then(response => {

            if (response.ok){

              return response.json();

            }

          })
          .then(data => {

            console.log(data);

          })
          .catch(e => {

            console.error('Error en el fetch.', e)

          })

        },
  
        borrarCuenta() {
            
          fetch('http://localhost:3000/perfilmenu/borrar/' + localStorage.getItem('id'), {

            method: 'DELETE',

          })
          .then(response => {

            if (response.ok) {

              return response.json();

            }

          })
          .then(data => {

            console.log(data);
            this.$router.push('/');

          })

        }

    },

    mounted(){

      this.infoPerfil();

    }

}

</script>
  
<style scoped>
  
#sidebar {

    background-color: #f8f9fa;
    padding: 1rem;

}
  
#sidebar .nav-link.active {

    color: #0d6efd;

}
  
#sidebar .nav-link {

    margin-bottom: 0.5rem;

}
  
#sidebar h4 {

    margin-bottom: 1rem;
    
}
  
main {

    padding: 1rem;

}
  
main h2 {

    margin-bottom: 1rem;

}
  
main .btn {

    margin-top: 1rem;
    
}

</style>
  
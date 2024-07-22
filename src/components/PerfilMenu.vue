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
            <p><strong>Nombre:</strong> {{ user.name }}</p>
            <p><strong>Email:</strong> {{ user.email }}</p>
            
          </div>
  
          <div id="change-password" class="mt-3">

            <h2>Cambiar Contraseña</h2>
            <form @submit.prevent="changePassword">

              <div class="mb-3">

                <label for="current-password" class="form-label">Contraseña Actual</label>
                <input type="password" class="form-control" id="current-password" v-model="currentPassword" required>

              </div>

              <div class="mb-3">

                <label for="new-password" class="form-label">Nueva Contraseña</label>
                <input type="password" class="form-control" id="new-password" v-model="newPassword" required>

              </div>

              <button type="submit" class="btn btn-primary">Actualizar Contraseña</button>

            </form>

          </div>
  
          <div id="delete-account" class="mt-3">

            <h2>Eliminar Cuenta</h2>
            <p>¿Estás seguro de que quieres eliminar tu cuenta? Esta acción es irreversible.</p>
            <button class="btn btn-danger" @click="deleteAccount">Eliminar Cuenta</button>

          </div>
  
          <div id="order-history" class="mt-3">

            <h2>Historial de Compras</h2>
            <!-- Muestra el historial de compras aquí -->

          </div>
  
          <div id="cart" class="mt-3">

            <h2>Ver Carrito</h2>
            <!-- Muestra el contenido del carrito aquí -->

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
                name: 'Juan Pérez',
                email: 'juan.perez@example.com'
            },
            currentPassword: '',
            newPassword: ''

        }

    },
  
    methods: {

        infoUsuario(){

            fetch('http://localhost:3000/infousu/:id')

        },

        logout() {
        
            this.$router.push('/');

        },
  
        changePassword() {
            // Lógica para cambiar la contraseña
            console.log('Cambiar contraseña');
            // Aquí iría la lógica para enviar la solicitud de cambio de contraseña
        },
  
        deleteAccount() {
            // Lógica para eliminar la cuenta
            console.log('Eliminar cuenta');
            // Aquí iría la lógica para confirmar y eliminar la cuenta
        }

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
  
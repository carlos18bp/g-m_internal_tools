<template>
  <div class="absolute p-4">
    <router-link :to="{ name: 'sign_in' }">
      <img class="w-20 xl:w-auto" src="@/assets/images/logo/logo1.png" />
    </router-link>
  </div>
  <section
    class="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8"
  >
    <div class="max-w-4xl bg-white shadow-lg rounded-lg p-6">
      <h1 class="text-4xl font-bold text-gray-800 text-center mb-4">
        Bienvenido a G&M Platform
      </h1>
      <p class="text-gray-600 text-center text-lg">
        Una plataforma desarrollada por
        <a
          href="https://projectapp.co"
          class="text-blue-500 hover:underline"
          target="_blank"
        >
          Project App
        </a>
        para el buffet de abogados G&M.
      </p>
      <p class="text-gray-600 text-center text-lg mt-2">
        Nuestro propósito es facilitar la gestión de procesos judiciales para
        abogados y clientes.
      </p>

      <div class="mt-6">
        <h2 class="text-2xl font-semibold text-gray-800 text-center mb-2">
          ¿Qué puedes hacer en G&M Platform?
        </h2>
        <ul class="list-disc list-inside text-gray-700">
          <li>
            <strong>Abogados:</strong> Gestionen sus casos, organicen
            expedientes y den seguimiento detallado a cada proceso.
          </li>
          <li>
            <strong>Clientes:</strong> Consulten el estado de sus procesos
            judiciales en tiempo real, con transparencia y confianza.
          </li>
        </ul>
      </div>

      <div class="mt-6">
        <h2 class="text-2xl font-semibold text-gray-800 text-center mb-2">
          Funcionalidades principales
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
          <div class="p-4 border rounded-lg shadow-sm bg-gray-50">
            <h3 class="text-xl font-bold mb-2">Gestión de Procesos</h3>
            <p>
              Los abogados pueden administrar fácilmente los detalles de cada
              caso, manteniendo registros precisos.
            </p>
          </div>
          <div class="p-4 border rounded-lg shadow-sm bg-gray-50">
            <h3 class="text-xl font-bold mb-2">Transparencia para Clientes</h3>
            <p>
              Los clientes pueden visualizar el estado de sus casos,
              manteniéndose informados en cada etapa.
            </p>
          </div>
        </div>
      </div>

      <div class="mt-8 flex justify-center">
        <router-link
          :to="{ name: 'sign_on' }"
          class="px-6 py-3 bg-secondary text-white font-regular rounded-lg shadow-md hover:bg-blue-600"
        >
          Regístrate ahora
        </router-link>
      </div>
      <!--Terms and conditions and Privacy Policy -->
      <div
        class="w-full py-12 flex justify-around items-center text-center text-secondary font font-regular text-sm"
      >
        <router-link :to="{ name: 'terms_of_use' }" class="cursor-pointer"
          >Condiciones de uso</router-link
        >
        <router-link :to="{ name: 'privacy_policy' }" class="cursor-pointer"
          >Aviso de privacidad</router-link
        >
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

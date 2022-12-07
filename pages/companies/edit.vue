<template>
  <section class="pt-14">
    <div class="container mx-auto">
      <Back />
      <Title title="Empresas" subtitle="Detalle" class="mb-10"/>

      <form class="font-body">
        <h3 class="text-xl font-bold mb-5">
          Información de la Empresa
        </h3>

        <div class="grid grid-cols-5 gap-6 mb-6">
          <div>
            <label class="block mb-3.5">
              #ID de la Empresa
            </label>
            <v-input
              type="number"
              placeholder="000001"
            />
          </div>

          <div>
            <label class="block mb-3.5">
              Razón Social
            </label>
            <v-input
              type="text"
              placeholder="Hotel Buenavista S.A."
            />
          </div>

          <div>
            <label class="block mb-3.5">
              Nombre de Fantasía
            </label>
            <v-input
              type="text"
              placeholder="Hotel Buenavista"
            />
          </div>

          <div>
            <label class="block mb-3.5">
              CUIT
            </label>
            <v-input
              type="number"
              placeholder="30716133261"
            />
          </div>

          <div>
            <v-switch>
              <template v-slot:label>
                Habilitada
              </template>
            </v-switch>
          </div>
        </div>

        <h3 class="text-xl font-bold mb-5">
          Domicilio
        </h3>

        <div class="grid grid-cols-5 gap-6 mb-8">
          <div>
            <label class="block mb-3.5">
              País
            </label>
            <v-input
              type="text"
              placeholder="Argentina"
            />
          </div>

          <div>
            <label class="block mb-3.5">
              Provincia
            </label>
            <v-input
              type="text"
              placeholder="Buenos Aires"
            />
          </div>

          <div>
            <label class="block mb-3.5">
              Localidad
            </label>
            <v-input
              type="text"
              placeholder="Mar del Plata"
            />
          </div>

          <div>
            <label class="block mb-3.5">
              Calle
            </label>
            <v-input
              type="text"
              placeholder="Córdoba"
            />
          </div>

          <div>
            <label class="block mb-3.5">
              Número
            </label>
            <v-input
              type="text"
              placeholder="2041"
            />
          </div>

          <div>
            <label class="block mb-3.5">
              Departamento/Piso
            </label>
            <v-input
              type="text"
              placeholder="2041"
            />
          </div>

          <div>
            <label class="block mb-3.5">
              Adicional
            </label>
            <v-input
              type="text"
              placeholder="Ipsum Lorem"
            />
          </div>
        </div>

        <h3 class="text-xl font-bold mb-5">
          Datos de contacto
        </h3>

        <div class="grid grid-cols-5 gap-6 mb-4">
          <div>
            <label class="block mb-3.5">
              Teléfono celular
            </label>
            <v-input
              type="text"
              placeholder="+549 223 521 9100"
            />
          </div>

          <div>
            <label class="block mb-3.5">
              Teléfono fijo
            </label>
            <v-input
              type="text"
              placeholder="4521 9100"
            />
          </div>

          <div>
            <label class="block mb-3.5">
              Interno
            </label>
            <v-input
              type="text"
              placeholder="202"
            />
          </div>

          <div>
            <label class="block mb-3.5">
              Correo electrónico
            </label>
            <v-input
              type="text"
              placeholder="tomas.gimenez@joinattic.com"
            />
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'app',
  head: {
    title: 'Empresas'
  }
}
</script>

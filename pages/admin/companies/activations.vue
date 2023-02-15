<template>
  <section class="pt-14">
    <div class="container mx-auto">
      <div class="grid grid-cols-[auto_204px] items-center mb-8">
        <Title title="Habilitaciones de alojamientos" />
        <div>
          <v-button>
            +  NUEVA HABILITACIÓN
          </v-button>
        </div>
      </div>

      <Search
        placeholder="Buscar empresa o alojamiento"
      />
    </div>
  </section>
</template>

<script>
export default {
  layout: 'app',
  head: {
    title: 'Habilitaciones de alojamientos'
  }
}
</script>

<template>
  <section class="pt-14">
    <div class="container mx-auto">
      <h1 class="font-input text-3xl font-semibold mb-[60px]">
        ¡Hola, Tomás! 👋
      </h1>

      <Lasted />
    </div>
  </section>
</template>

<script>
import Lasted from '@/components/dashboard/Lasted'

export default {
  components: { Lasted },
  layout: 'app',
  head: {
    title: 'Inicio'
  }
}
</script>

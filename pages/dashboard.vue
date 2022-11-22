<template>
  <section class="mt-14">
    <div class="container mx-auto">
      <h1 class="font-input text-3xl font-semibold mb-[60px]">
        ¡Hola, Tomás! 👋
      </h1>

      <News />
      <Lasted />
    </div>
  </section>
</template>

<script>
import News from '@/components/dashboard/News'
import Lasted from '@/components/dashboard/Lasted'

export default {
  components: { News, Lasted },
  layout: 'app',
  head: {
    title: 'Inicio'
  }
}
</script>

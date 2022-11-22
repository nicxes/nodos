<template>
  <aside class="h-full bg-white flex flex-col justify-between">
    <div>
      <div class="flex justify-center py-8 mb-4">
        <Logo />
      </div>

      <nav class="list-none p-0 m-0 flex flex-col gap-4">
        <li v-for="(link, i) in links" :key="i" class="relative py-2" :class="{'active': $route.path === link.path}">
          <NuxtLink :to="link.path" class="font-display text-[20px] text-[#646464] font-semibold px-6 block" active-class="text-primary">
            {{ link.label }}
          </NuxtLink>
        </li>
      </nav>
    </div>

    <Logout />
  </aside>
</template>

<script>
export default {
  data () {
    return {
      links: [
        {
          label: 'Inicio',
          path: '/dashboard'
        },
        {
          label: 'Servicios',
          path: '/services'
        },
        {
          label: 'Reservas',
          path: '/bookings'
        },
        {
          label: 'Configuración',
          path: '/settings'
        }
      ]
    }
  }
}
</script>

<style scoped>
aside {
  border-top-right-radius: 50px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05);
}
aside li:before {
  content: '';

  position: absolute;
  height: 100%;
  width: 10px;
  left: -5px;
  top: 0;
  bottom: 0;
  border-radius: 50px;
  background: #35BC75;
  opacity: 0;
}
aside li.active:before {
  opacity: 1;
}
</style>

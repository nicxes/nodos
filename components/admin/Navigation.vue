<template>
  <aside class="bg-white flex flex-col justify-between fixed top-0 left-0 bottom-0 h-full w-full max-w-[247px]">
    <div>
      <div class="flex justify-center py-8 mb-4">
        <NuxtLink to="/dashboard">
          <Logo />
        </NuxtLink>
      </div>

      <nav class="list-none p-0 m-0 flex flex-col gap-4">
        <li v-for="(link, i) in links" :key="i" class="relative py-2" :class="{'active': $route.path === link.path}">
          <!-- Item Link -->
          <NuxtLink
            v-if="!link.sublinks"
            :to="link.path"
            class="font-display text-[20px] text-[#646464] font-semibold px-6 block"
            active-class="text-primary"
          >
            {{ link.label }}
          </NuxtLink>

          <a
            v-else
            @click="toggleDropdown(i)"
            class="font-display text-[20px] text-[#646464] font-semibold px-6 block cursor-pointer"
            :class="{'text-primary' : $route.path === link.path}"
          >
            {{ link.label }}
          </a>
          <!-- Item Link End -->

          <!-- Dropdown -->
          <ul
            v-if="link.dropdown"
            class="list-none p-0 my-3 flex flex-col gap-2"
          >
            <li v-for="(sublink, j) in link.sublinks" :key="j">
              <NuxtLink
                :to="sublink.path"
                class="font-display text-[#646464] font-semibold px-6 ml-4 block"
                active-class="text-primary"
              >
                {{ sublink.label }}
              </NuxtLink>
            </li>
          </ul>
          <!-- Dropdown End -->
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
          label: 'Empresas',
          path: '/companies',
          dropdown: false,
          sublinks: [
            {
              label: 'Listado de Empresas',
              path: '/companies'
            },
            {
              label: 'Habilitaciones',
              path: '/companies/activations'
            }
          ]
        },
        {
          label: 'Seguridad',
          path: '/users',
          dropdown: false,
          sublinks: [
            {
              label: 'Listado de Usuarios',
              path: '/users'
            }
          ]
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
  },
  methods: {
    toggleDropdown (index) {
      this.links[index].dropdown = true
    }
  }
}
</script>

<style scoped>
aside {
  border-top-right-radius: 50px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05);
}
aside nav > li:before {
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
aside nav > li.active:before {
  opacity: 1;
}
</style>

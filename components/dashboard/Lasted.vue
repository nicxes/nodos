<template>
  <div>
    <h3 class="font-input text-2xl font-semibold mb-8">
      Últimas reservas
    </h3>

    <table class="table-auto w-full">
      <thead class="mb-2">
        <tr>
          <th class="font-display text-[#B7B9C1] font-semibold text-sm">
            ID Reserva
          </th>
          <th class="font-display text-[#B7B9C1] font-semibold text-sm">
            Titular de la Reserva
          </th>
          <th class="font-display text-[#B7B9C1] font-semibold text-sm">
            Fecha desde
          </th>
          <th class="font-display text-[#B7B9C1] font-semibold text-sm">
            Fecha hasta
          </th>
          <th class="font-display text-[#B7B9C1] font-semibold text-sm">
            Pasajeros
          </th>
          <th class="font-display text-[#B7B9C1] font-semibold text-sm">
            AR$ Total
          </th>
          <th class="font-display text-[#B7B9C1] font-semibold text-sm">
            Estado
          </th>
          <th class="font-display text-[#B7B9C1] font-semibold text-sm">
            -
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in table" :key="index" class="text-[#5C5C5C] bg-white h-[75px] text-center cursor-pointer">
          <td class="font-bold">
            {{ item.id }}
          </td>
          <td class="font-bold">
            {{ item.title }}
          </td>
          <td>{{ item.from }}</td>
          <td>{{ item.to }}</td>
          <td>{{ item.slots }}</td>
          <td>{{ item.price }}</td>
          <td :class="item.state === 'Confirmada' ? 'text-primary' : null">
            {{ item.state }}
          </td>
        </tr>
      </tbody>
    </table>
    <div>
      <v-button>
        Ver todas las reservas
      </v-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      table: [
        {
          id: 0,
          title: 'Tomás Gimenez',
          from: '20/10/2022',
          to: '22/10/2022',
          slots: '3',
          price: 'AR$10.000',
          state: 'Confirmada'
        },
        {
          id: 1,
          title: 'Manuel Cotado',
          from: '20/10/2022',
          to: '22/10/2022',
          slots: '3',
          price: 'AR$10.000',
          state: 'Cancelada'
        },
        {
          id: 2,
          title: 'Manuel Cotado',
          from: '20/10/2022',
          to: '22/10/2022',
          slots: '3',
          price: 'AR$10.000',
          state: 'Cancelada'
        }
      ]
    }
  }
}
</script>

<style scoped>
table {
  border-spacing: 0 17px;
  border-collapse: inherit;
}
table tbody tr td:first-child {
  border-bottom-left-radius: 20px !important;
  border-top-left-radius: 20px !important;
}
table tbody tr td:last-child {
  border-bottom-right-radius: 20px !important;
  border-top-right-radius: 20px !important;
}
</style>

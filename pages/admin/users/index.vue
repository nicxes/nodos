<template>
  <section class="pt-14">
    <div class="container mx-auto">
      <div class="grid grid-cols-[auto_204px] items-center mb-8">
        <Title title="Usuarios" />
        <div>
          <v-button>
            + Nuevo usuario
          </v-button>
        </div>
      </div>

      <div class="mb-8">
        <Search
          placeholder="Buscar usuario"
        />
      </div>

      <Table>
        <template v-slot:head>
          <tr class="pb-2">
            <th class="text-[#B7B9C1] text-sm text-left font-body font-medium">
              Nombre
            </th>
            <th class="text-[#B7B9C1] text-sm text-left font-body font-medium">
              Apellido
            </th>
            <th class="text-[#B7B9C1] text-sm text-left font-body font-medium">
              Tipo de Usuario
            </th>
            <th class="text-[#B7B9C1] text-sm text-left font-body font-medium">
              Mail
            </th>
            <th class="text-[#B7B9C1] text-sm text-left font-body font-medium">
              Documento
            </th>
            <th></th>
            <th></th>
          </tr>
        </template>

        <template v-slot:body>
          <tr
            v-for="(item, index) in 10"
            :key="index"
            class="bg-white text-[#5C5C5C] text-sm font-body h-[75px]"
          >
            <td class="font-bold first-of-type:rounded-tl-[20px] first-of-type:rounded-bl-[20px] pl-[25px]">
              Juan
            </td>
            <td class="font-bold">
              Perez
            </td>
            <td class="font-bold">
              Gestor
            </td>
            <td class="font-bold">
              juanperez@gmail.com
            </td>
            <td class="font-bold">
              DNI - 39098213
            </td>
            <td class="text-error font-bold uppercase text-center">
              Eliminar
            </td>
            <td class="text-[#646464] font-display last-of-type:rounded-tr-[20px] last-of-type:rounded-br-[20px] pr-[25px]">
              Habilitada
            </td>
          </tr>
        </template>
      </Table>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'app',
  head: {
    title: 'Usuarios'
  }
}
</script>

<template>
  <section class="pt-14">
    <div class="container mx-auto">
      <div class="grid grid-cols-[auto_204px] items-center mb-8">
        <Title title="Empresas" />
        <div>
          <v-button>
            + Nueva Empresa
          </v-button>
        </div>
      </div>

      <div class="mb-8">
        <Search
          placeholder="Buscar empresa"
        />
      </div>

      <Table>
        <template v-slot:head>
          <tr class="pb-2">
            <th class="text-[#B7B9C1] text-sm text-left font-body font-medium w-[180px] pl-[25px]">
              ID Empresa
            </th>
            <th class="text-[#B7B9C1] text-sm text-left font-body font-medium w-[250px]">
              Razón Social
            </th>
            <th class="text-[#B7B9C1] text-sm text-left font-body font-medium w-[200px] pr-[25px]">
              CUIT
            </th>
            <th></th>
          </tr>
        </template>

        <template v-slot:body>
          <tr
            v-for="(item, index) in 5"
            :key="index"
            class="bg-white text-[#5C5C5C] text-sm font-body h-[75px]"
          >
            <td class="font-bold first-of-type:rounded-tl-[20px] first-of-type:rounded-bl-[20px] pl-[25px]">
              {{ index }}
            </td>
            <td class="font-bold">
              Razón social {{ index }} S.A.
            </td>
            <td class="font-bold">
              301111111115
            </td>
            <td class="text-right last-of-type:rounded-tr-[20px] last-of-type:rounded-br-[20px] pr-[25px]">
              <v-switch :id="index" :name="index">
                <template v-slot:label>
                  Habilitada
                </template>
              </v-switch>
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
    title: 'Empresas'
  }
}
</script>

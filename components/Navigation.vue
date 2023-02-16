<template>
  <aside class="fixed top-0 right-0 z-50 flex justify-end w-full h-full transition duration-150 ease-in-out transform" :class="$store.state.isMainMenuOpen ? 'translate-x-0' : 'translate-x-[100%]'">
    <div class="bg-[#fff] p-7 max-w-[304px] w-full h-full">
      <div class="flex justify-end mb-11">
        <button @click="toggleMenu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.96936 6.96839C7.03903 6.89854 7.1218 6.84313 7.21291 6.80532C7.30403 6.76751 7.40171 6.74805 7.50036 6.74805C7.59901 6.74805 7.6967 6.76751 7.78781 6.80532C7.87893 6.84313 7.9617 6.89854 8.03136 6.96839L12.0004 10.9389L15.9694 6.96839C16.0391 6.89866 16.1219 6.84334 16.213 6.8056C16.3041 6.76786 16.4017 6.74844 16.5004 6.74844C16.599 6.74844 16.6966 6.76786 16.7877 6.8056C16.8788 6.84334 16.9616 6.89866 17.0314 6.96839C17.1011 7.03812 17.1564 7.1209 17.1941 7.21201C17.2319 7.30312 17.2513 7.40077 17.2513 7.49939C17.2513 7.598 17.2319 7.69565 17.1941 7.78676C17.1564 7.87787 17.1011 7.96066 17.0314 8.03039L13.0609 11.9994L17.0314 15.9684C17.1011 16.0381 17.1564 16.1209 17.1941 16.212C17.2319 16.3031 17.2513 16.4008 17.2513 16.4994C17.2513 16.598 17.2319 16.6957 17.1941 16.7868C17.1564 16.8779 17.1011 16.9607 17.0314 17.0304C16.9616 17.1001 16.8788 17.1554 16.7877 17.1932C16.6966 17.2309 16.599 17.2503 16.5004 17.2503C16.4017 17.2503 16.3041 17.2309 16.213 17.1932C16.1219 17.1554 16.0391 17.1001 15.9694 17.0304L12.0004 13.0599L8.03136 17.0304C7.96163 17.1001 7.87885 17.1554 7.78774 17.1932C7.69663 17.2309 7.59898 17.2503 7.50036 17.2503C7.40175 17.2503 7.3041 17.2309 7.21299 17.1932C7.12188 17.1554 7.0391 17.1001 6.96936 17.0304C6.89963 16.9607 6.84432 16.8779 6.80658 16.7868C6.76884 16.6957 6.74942 16.598 6.74942 16.4994C6.74942 16.4008 6.76884 16.3031 6.80658 16.212C6.84432 16.1209 6.89963 16.0381 6.96936 15.9684L10.9399 11.9994L6.96936 8.03039C6.89952 7.96072 6.8441 7.87796 6.80629 7.78684C6.76849 7.69572 6.74902 7.59804 6.74902 7.49939C6.74902 7.40074 6.76849 7.30305 6.80629 7.21194C6.8441 7.12082 6.89952 7.03806 6.96936 6.96839Z" fill="#226B2F"/>
          </svg>
        </button>
      </div>

      <ul class="flex flex-col gap-6 md:flex font-display">
        <li>
          <NuxtLink to="/" class="text-[#646464] hover:text-[#35BC75] transition duration-150 ease-in-out" active-class="text-[#35BC75]">
            Inicio
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/mi-reserva" class="text-[#646464] hover:text-[#35BC75] transition duration-150 ease-in-out" active-class="text-[#35BC75]">
            Mi reserva
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/privacidad" class="text-[#646464] hover:text-[#35BC75] transition duration-150 ease-in-out" active-class="text-[#35BC75]">
            Política de Privacidad
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/terminos" class="text-[#646464] hover:text-[#35BC75] transition duration-150 ease-in-out" active-class="text-[#35BC75]">
            Términos y condiciones
          </NuxtLink>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
export default {
  methods: {
    toggleMenu () {
      this.$store.commit('toggle')
    }
  }
}
</script>

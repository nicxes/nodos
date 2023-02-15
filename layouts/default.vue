<template>
  <div>
    <Navbar />
    <main class="bg-[#FAFAFA]">
      <Nuxt />
    </main>
  </div>
</template>

<style>
.container, .container-fluid {
  padding: 0 36px;
}
@media only screen and (max-width: 1200px) {
  .container, .container-fluid {
    padding: 0 18px;
  }
}
</style>

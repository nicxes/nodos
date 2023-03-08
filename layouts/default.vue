<template>
  <div>
    <Navbar />
    <Navigation />
    <main class="bg-[#FAFAFA] min-h-screen">
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

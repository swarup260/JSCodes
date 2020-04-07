<template>
  <!-- eslint-disable -->
  <div>
    <!-- Navbar -->
    <b-navbar type="dark" variant="dark">
      <b-navbar-brand href="#">
        <b-icon-list-ul></b-icon-list-ul>
      </b-navbar-brand>
      <!-- <b-navbar-brand href="#">
        <b-icon-gear-wide-connected></b-icon-gear-wide-connected>
      </b-navbar-brand>-->
      <b-navbar-nav>
        <!-- <b-nav-item href="#">Home</b-nav-item> -->
      </b-navbar-nav>
    </b-navbar>
    <!-- Navbar -->
    <router-view />
  </div>
</template>

<style scoped>
/* *{
  background-image: url('./assets/ivan-skorodumov-tempest-1.jpg');
} */
</style>

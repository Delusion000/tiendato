<template>
  <footer class="links">
    <div class="enlaces">
      <router-link to="/">Home</router-link>
      <router-link to="/shop">Tienda/shop</router-link>
      <router-link to="/nosotros">Nosotros</router-link>
    </div>
  </footer>
</template>

<script>
</script>

<style scoped>
 footer {
    width: 100%;
    padding: 10px;
    padding-left: 50px;
    /*Flex*/
    display: flex;
    justify-content: space-between;
    align-items:center;
    flex-direction:row;
    flex-wrap:wrap;
    background: #1c59;
  }
  img{
    width: 100px;
  }
  .enlaces{
    width:80%;
    height: 20%;
    /*Flex*/
    display: flex;
    justify-content: space-around;
    align-items:center;
    flex-direction:row;
    flex-wrap:wrap;
  }
  .enlaces a{
    margin-bottom: 10px;
    text-decoration: none;
    color: black;
  }
</style>
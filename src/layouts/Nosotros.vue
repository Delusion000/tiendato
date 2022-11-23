<template>
    <div class="destacados">
      <h1>NOSOTROS</h1>
    </div>
    <Parallax 
        titulo1="Elian.exe" 
        texto1="diseñador, impulsador, director de la marca.
        impulsado por las ganas de crear y de diseñar grandes piezas que algun dia seran mas que prendas de una pequeña marca" 
        titulo2="ASH Kid." 
        texto2="Diseñador, impusador, colaborador.
        motivado por dejar una huella en la sociedad, con motivos para innovar y creecer en un proyecto, se genera la disposicion para crecer. " 
    />
</template>

<script>
import {defineAsyncComponent} from 'vue'

export default {
  components: {
    Parallax: defineAsyncComponent(() => import('../components/Parallax.vue'))
  }
}
</script>

<style scoped>
  .destacados {
    height: 15vh;
    width:100%;
    font-size:20px;
    margin-top:40px;
    margin-bottom:20px;
  }
</style>

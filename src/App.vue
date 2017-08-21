<template>
  <div>
    <meu-menu :rotas="routes"/>
    <router-view class="conteudo"></router-view>
  </div>
</template>

<script>
import { routes } from './routes';
import Menu from './components/shared/menu/Menu.vue';

export default {

  components: {
    'meu-menu' : Menu
  },
  
  data() {

    return {

      routes
    }
  }
}
</script>

<style>
</style>

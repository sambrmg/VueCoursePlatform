<template>
  <div>
    <nav id="nav">
        <ul>
            <li v-for="item in itens">
                {{ item.texto }}
            </li> 
        </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data(){
    return{
      itens: [
        {
          texto: "item 1", 
        },
        {
          texto: "item 2", 
        }
      ]
    }
  }
}
</script>

<style lang="scss">
</style>
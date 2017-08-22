<template>
    <ol class="answer">
        <li>Resposta 1</li>
        <li>Resposta 2</li>
        <li>Resposta 3</li>
    </ol>
</template>
<script>
export default {
  
}
</script>
<style >
    .answer{
        list-style: none;
        margin: 0;
        padding: 0;
    }
    .answer li {
        padding: 10px 10px 10px 40px;
        border: 2px solid #dedede;
        margin-bottom: 10px;
        counter-increment: index;
        position: relative;	
        color: #757575;		
    }
    .answer li:before {
        content: counter(index,upper-latin);
        position: absolute;
        top: -2px;
        left: -2px;
        bottom: -2px;
        padding: 7px 10px 10px 10px;
        background-color: #74a8e3;
        color: white;
        font-size: 23px;
    }
</style>

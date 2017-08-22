<template>
    <ol class="answer">
        <li>
            <span class="item"></span>
            <span class="alternative">resposta 1</span>
            <div class="clearfix"></div>
        </li>
        <li>
            <span class="item"></span>
            <span class="alternative">resposta 1</span>
            <div class="clearfix"></div>
        </li>
        <li>
            <span class="item"></span>
            <span class="alternative">resposta 1</span>
            <div class="clearfix"></div>
        </li>
        <li>
            <span class="item"></span>
            <span class="alternative">resposta 1</span>
            <div class="clearfix"></div>
        </li>
    </ol>
</template>
<script>
export default {
  
}
</script>
<style >
    .answer{
        list-style: none;
        padding: 0;
    }
    .answer li{
        counter-increment: index;
        margin-bottom: 10px;
    }
    .answer li .item{
        display: inline-block;
        background-color: #84c6fe;
        color: white;
        text-align: center;
        float: left;
        width: 55px;
        height: 100%;

    }
    .answer li .item:before{
        content: counter(index,upper-latin)" ";
    }
    .answer li .alternative{
        float: left;
    }
</style>

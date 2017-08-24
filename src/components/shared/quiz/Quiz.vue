<template>
    <div class="quiz">
        <slot></slot>
        <ol class="answer">
            <li>Answer 1</li>
            <li>Answer 2</li>
            <li>Answer 3</li>
        </ol>
    </div>
</template>
<script>
export default {
  
}
</script>
<style >
    .quiz{
        padding: 40px;
        background-color: #fbfbfb;
        box-sizing: border-box;
        border: 1px solid #ededed;
    }
    .answer{
        list-style: none;
        margin: 0;
        padding: 0;
    }
    .answer li {
        padding: 20px 10px 20px 60px;
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
        padding: 16px 15px 10px 15px;
        background-color: #74a8e3;
        color: white;
        font-size: 28px;
    }
</style>

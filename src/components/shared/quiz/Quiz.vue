<template>
    <div class="quiz">
        <slot></slot>
        <ol class="answer">
            <li v-for="(res, answer) in answers" >
                <span v-on:click="isCorrect(res,$event)">
                    {{ answer }}
                </span>
            </li>
        </ol>
    </div>
</template>
<script>
export default {
  props: ['answers'],
  methods: {
      isCorrect: function (res, event) {
          let getList = event.target.parentNode.parentNode;
          let getLi = event.target.parentNode;

          getList.childNodes.forEach( function(e){
              e.setAttribute("class","");
          })
          
          if(res == true){
            getLi.setAttribute("class","isCorrect");
          }else{
            getLi.setAttribute("class","incorrect");
          }
      }
  }
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
    .answer li.isCorrect:before {
        background-color: #62e879;    
    }
    .answer li.incorrect:before {
        background-color: #f76969;    
    }
    .answer li {
        border: 2px solid #dedede;
        margin-bottom: 10px;
        counter-increment: index;
        position: relative;	
        color: #757575;	
        cursor: pointer;	
    }
    .answer li span{
        padding: 20px 10px 20px 60px;
        display: block;
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

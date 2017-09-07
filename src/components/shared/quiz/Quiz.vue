<template>
    <section class="quiz">
        <slot></slot>
        <ol class="answer">
            <li v-for="(value, index) in answers" >
                <span v-on:click="isCorrect(value,$event)">
                    {{ index }}
                </span>
                <div>
                    <div class="answer-box">
                        {{ value.explication }}
                    </div>
                </div>
            </li>
        </ol>
    </section>
</template>
<script>
export default {
  props: ['answers', 'oneAnswerOnly'],
  
  data: function() {
      return{
          clicked: false,
          oneAnswerOnly: false
      }
  },
  methods: {
      showAnswers: function(value, event){
        let getLi = event.target.parentNode;
        let getUl = getLi.parentNode;
        
        getUl.childNodes.forEach( function(e){
            e.setAttribute("class","");
        });

        if(value.response == true){
            getLi.setAttribute("class","isCorrect");
        }else{
            getLi.setAttribute("class","incorrect");
        }
      },

      isCorrect: function (value, event) {
          if(this.oneAnswerOnly){
            if(!this.clicked){
                this.showAnswers(value, event);
                this.clicked = true
            }
          }else{
              this.showAnswers(value, event);
          }
          
      }
  }
}
</script>
<style>
    .quiz{
        padding: 40px;
        background-color: #fbfbfb;
        box-sizing: border-box;
        border: 1px solid #ededed;
    }
    .quiz p{
        margin: 0px; 
    }
    .answer{
        list-style: none;
        margin: 35px 0 0 0;
        padding: 0;
    }

    .answer li.isCorrect:before{
        background-color: #279a3b; 
    }

    .answer li.isCorrect {
        border-color: #279a3b; 
    }

    .answer li.incorrect:before {
        background-color: #e26e6e; 
    }

    .answer li.incorrect {
        border-color: #e26e6e; 
    }

    .answer li.incorrect > span, .answer li.isCorrect > span{
        border-bottom: 0px; 
    }

    .answer li {
        margin-bottom: 10px;
        counter-increment: index;
        position: relative; 
        color: #757575; 
    }

    .answer li span{
        padding: 20px 10px 20px 60px;
        display: block;
        cursor: pointer;
        border: 2px solid #dedede;
    }

    .answer li:before {
        content: counter(index,upper-latin);
        position: absolute;
        top: 0px;
        left: 0px;
        bottom: 0px;
        padding: 16px 15px 10px 15px;
        background-color: #74a8e3;
        color: white;
        font-size: 28px;
    }

    .answer li > div{
        padding: 10px 15px 10px 60px;
        border-bottom: 2px solid #dedede;
        border-right: 2px solid #dedede;
        display: none;

    }
    .answer li.incorrect > div, .answer li.isCorrect > div {
        display: block;
    }
    .answer li > div .answer-box {
        border: 1px solid #ccc;
        padding: 20px;
    }
</style>

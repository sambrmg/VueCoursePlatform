<template>
  <div>
      <h2>
		 		CSS
		 	</h2>
		 	<p>CSS - Cascading Style Sheets (Folhas de estilo em cascata)</p>
		 	<p>
		 		CSS é uma linguagem de estilo para um documento HTML, com o css é possível controlar fontes, cores, bordas, margens, imagens, posicionamento de elementos HTML e outras coisas.
		 	</p>
		 	<blockquote>
		 		O efeito cascata foi feito para estabelecer prioridades para a aplicação de regras de estilo aos elementos HTML
		 	</blockquote>

		 	
		 	<h3>
		 		Declarando as regras do CSS
		 	</h3>
		 	<p>
		 		Para declarar uma regra no CSS para um elemento no HTML terá que seguir a seguintes regras "Seletor { propriedade: valor; }", confira alguns exemplos a seguir:
		 	</p>
		 	<p>
		 		Com essa declaração <b>todos os parágrafos</b> existentes no HTML irão ter fonte de 14px e cor azul.
		 	</p>
		 	<pre>
&lt;p&gt; texto texto &lt;/p&gt;

p { 
	color: blue;
	font-size: 14px;
}
		 	</pre>
		 	<p>
		 		Com essa declaração <b>todos os elementos existentes no HTML com a classe 'nome-class-1'</b> receberão as regras, independente se é paragrafo, título, tabela, etc.
		 	</p>
		 	<pre>
&lt;p class="nome-class-1"&gt; texto texto &lt;/p&gt;

&lt;b class="nome-class-1"&gt; texto texto &lt;/b&gt;

&lt;h2 class="nome-class-1"&gt; texto texto &lt;/h2&gt;

.nome-class-1{
	color: red;
	font-size: 10;
}
		 	</pre>
		 	<p>
		 		Você poderá declarar por ID, como o <b>ID é único</b> para uma página somente ele receberá as regras.
		 	</p>
		 	<pre>
&lt;div id="identificador1"&gt; conteúdo &lt;/div&gt;		

#identificador1 {
	color: red;
}
		 	</pre>

		 	<p>
		 		Você pode especializar a regra para atender a um elemento. No caso a seguir somente o texto de exemplo 2 receberá as regras.
		 	</p>
		 	<pre>
&lt;div&gt; 
	&lt;p&gt;
		Texto de exemplo &lt;b&gt;especialização&lt;/b&gt;
	&lt;/p&gt;
&lt;/div&gt;

&lt;div class="identificador2"&gt; 
	&lt;p&gt;
		Texto de exemplo &lt;b&gt;especialização&lt;/b&gt;
	&lt;/p&gt;
&lt;/div&gt;	

.identificador2 p b {
	font-size: 20px;
}
		 	</pre>
		 	<p>
		 		Regras separadas por espaço implicam em buscar elementos descendentes.
		 		Essa declaração <code>.identificador2 p b {</code> procurará primeiramente o <b>'.identificador2'</b> em seguida procurará o <code>&lt;p&gt;</code> descendente e depois o <code>&lt;b&gt;</code> e como o <code>&lt;b&gt;</code> foi o último na declaração ele que receberá a regra.
		 	</p>

		 	<p>
		 		Quando não tem espaço entre as regras significa que é o mesmo elemento.
		 	</p>
		 	<pre>
&lt;span class="identificador2"&gt; 
	&lt;p&gt;
		Texto de exemplo &lt;b&gt;especialização&lt;/b&gt;
	&lt;/p&gt;
&lt;/span&gt;	

&lt;div class="identificador2"&gt; 
	&lt;p&gt;
		Texto de exemplo &lt;b&gt;especialização&lt;/b&gt;
	&lt;/p&gt;
&lt;/div&gt;	

div.identificador2 p b {
	font-size: 20px;
}
		 	</pre>
		 	<p>
		 		O exemplo acima mostra que somente o <code>&lt;b&gt;</code> dentro da <code>&lt;div&gt;</code> que receberá as regas, como a declaração está assim <code>div.identificador2 p b</code> 'div.identificador2' sem espaço entre eles significa que somente a classe identificador2 que estiver em uma DIV que atenderá as regras.
			</p>
      <quiz :answers="answers">
		  <p>O que é uma variável?</p>
	  </quiz>
  </div>
</template>

<script>
import Quiz from '../../components/shared/quiz/Quiz.vue';

export default {
  components: {
    'quiz': Quiz
  },
  data(){
	  return {
		   
			  answers : { 
				  'answer 1': { 
				  	'response': true,
					'explication': 'This answer is correct because XYZ'
				  	},
				  'answer 2': { 
				  	'response': false,
					'explication': 'This answer is correct because XYZ'
				  	},
				  'answer 3': { 
				  	'response': false,
					'explication': 'This answer is correct because XYZ'
				   },
				}
		  
	  }
	  
  }
  
}
</script>
<style></style>

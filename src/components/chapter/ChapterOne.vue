<template>
  <div>
      <h1>
		 		HTML5 e CSS
		 	</h1>

		 	<h2>
		 		HTML
		 	</h2>

		 	<p>
		 		HTML é uma linguagem baseada em marcação.
		 	</p>

		 	<p>
		 		Com isso usamos TAGS para marcar o conteúdo que queremos apresentar, por exemplo este texto está em uma tag <code>&lt;p&gt;</code> que é descrita para utilização de parágrafos. 
		 	</p>

		 	<p>
		 		Para declarar o documento como HTML5 é simples, basta incluir o <code>&lt;!DOCTYPE html&gt;</code> como o exemplo a seguir:
		 	</p>

		 	<pre>
&lt;!DOCTYPE html&gt;

&lt;html lang="pt-br"&gt; 
&lt;head&gt;   
    &lt;meta charset="utf-8"&gt;   
    &lt;title&gt;Título da página&lt;/title&gt;  
&lt;/head&gt;  
&lt;body&gt;  
   &lt;h1&gt;Título&lt;/h1&gt;   
   &lt;p&gt;Parágrafo.&lt;/p&gt;    
&lt;/body&gt;  
&lt;/html&gt;  
		 	</pre>
			<h3>
		 		Semântica
		 	</h3>
		 	<blockquote>
		 		Sistema linguístico, o componente do sentido das palavras e da interpretação das sentenças e dos enunciados.
		 	</blockquote>
		 	<p>
		 		Tem alguns motivos importantes para utilizar as tags corretas para cada situação. A seguir estão alguns:
		 	</p>
		 	
		 	<ul>
		 		<li>
		 			Acessibilidade
		 		</li>
		 		<li>
		 			Ferramentas de Indexação (Google, Bing, ...)
		 		</li>
		 		<li>
		 			Browsers minimalistas ou pelo terminal
		 		</li>
		 	</ul>
		 	<p>
		 		Algumas tags e as suas definições:
		 	</p>
		 	<pre>
&lt;p&gt; -> para descrever um parágrafo
&lt;b&gt; -> para realçar em negrito uma palavra
&lt;strong&gt; -> para realçar em negrito uma frase
&lt;img&gt; -> para importar uma imagem
&lt;table&gt; -> para definir dados tabulares
&lt;ul&gt; -> Lista desordenada (com marcadores)
&lt;ol&gt; -> Lista ordenada, com número ou alfanumérico
&lt;h1&gt; -> Primeiro título, é importante deixar somente um H1
		 	</pre>
		 	<p>
		 		<strong>
		 		Com o CSS é possível manipular todo comportamento das TAGs do HTML, como por exemplo: fazer com que um parágrafo vire um título com o tamanho correspondente ao título. Entretanto os programas para acessibilidade não irão entender como um título e sim como um parágrafo e irá informar para o deficiente visual.
		 		</strong>
		 	</p>
		 	<h3>
		 		O que o HTML5 trouxe de novo?
		 	</h3>
		 	<p>
		 		Novos elementos semânticos como <code>&lt;header&gt;</code>, <code>&lt;footer&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;section&gt;</code>.
		 	</p>
			
			<blockquote>
				Alguns sites criavam códigos como: <code>&lt;div id="nav"&gt;</code>, <code>&lt;div class="header"&gt;</code>, <code>&lt;div class="section"&gt;</code>, agora o HTML5 oferece os novos elementos semânticos para padronizar o código sem precisar usar em classes e id. A seguir uma imagem mostrando como utilizar:
			</blockquote>
			<img src="../../../img/nova-semantica.gif" alt="imagem exemplificando como é utilizado a nova semantica">
		 	<p>
		 		Novos atributos para os elementos de formulários como <b>number</b>, <b>date</b>, <b>time</b>, <b>calendar</b>, <b>range</b>.
		 	</p>

		 	<p>
		 		Novos elementos gráficos como <code>&lt;svg&gt;</code>, <code>&lt;canvas&gt;</code>.
		 	</p>

		 	<p>
		 		Novos elementos de multimídia como <code>&lt;audio&gt;</code>, <code>&lt;video&gt;</code>.
		 	</p>
  </div>
</template>

<script>
import Quiz from '../../components/shared/quiz/Quiz.vue';

export default {
  components: {
    'quiz': Quiz
  }

  
}
</script>
<style></style>

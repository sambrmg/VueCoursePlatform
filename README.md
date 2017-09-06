## Course Platform


## Installation

```
clone https://github.com/sambrmg/VueCoursePlatform.git

cd VueCoursePlatform/

npm install

npm run dev
```

## How to use


**Create a new chapter file:**

`/src/components/chapter/`

One file per page, example:

`ChapterOne.vue` (You can give any name to the file)
In this file you put structure default of Vue file.


```html
<template>

Here you can put HTML tags (p, blockquote, b, h1, h2, h3, h4, h5, h6, ...)

</template>

<script>
</script>

<style>
</style>
```

**Quiz component:**

```html
<quiz :answers="answers" :oneAnswerOnly="true">
  <p>Question XYZ?</p>
</quiz>
```
:oneAnswerOnly (true/false) -> to lock answer after click, default is false.

:answers (object)
Example:

```js
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
```



**After created chapter:**

Open `/src/routes.js` and add import and path 


```javascript
import ChapterOne from './components/chapter/ChapterOne.vue';
import ChapterTwo from './components/chapter/ChapterTwo.vue';

export const routes = [
    { path: '/', component: ChapterOne, titulo: 'Chapter One'},
    { path: '/chaptertwo', component: ChapterTwo, titulo: 'Chapter Two'}
];

```

## License
[MIT](https://github.com/sambrmg/VueCoursePlatform/blob/master/LICENSE)


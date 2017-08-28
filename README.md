## Course Platform


## Installation

```
clone https://github.com/sambrmg/VueCoursePlatform.git

cd VueCoursePlatform/

npm install

npm run dev
```

## How it works

```jsx
**Create a new chapter file:**

/src/components/chapter/

One file per page, example:

ChapterOne.vue (you can put any name to file)
In this file you put structure default of Vue file.

<template>

Here you can put HTML tags (p, blockquote, b, h1, h2, h3, h4, h5, h6, ...)

</template>

<script>
</script>

<style>
</style>

**After created chapter:**

Open /src/routes.js and add import and path 

import ChapterOne from './components/chapter/ChapterOne.vue';
import ChapterTwo from './components/chapter/ChapterTwo.vue';

export const routes = [
    { path: '/', component: ChapterOne, titulo: 'Chapter One'},
    { path: '/chaptertwo', component: ChapterTwo, titulo: 'Chapter Two'}
];

```

## License
[MIT]

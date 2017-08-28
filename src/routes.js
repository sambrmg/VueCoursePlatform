import ChapterOne from './components/chapter/ChapterOne.vue';
import ChapterTwo from './components/chapter/ChapterTwo.vue';

export const routes = [
    { path: '/', component: ChapterOne, title: 'Chapter One'},
    { path: '/chaptertwo', component: ChapterTwo, title: 'Chapter Two'}
];

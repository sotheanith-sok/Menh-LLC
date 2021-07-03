<template>
    <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'App',
    created() {
        document.title = 'Menh LLC';
    },
});
</script>

<style lang="scss">
    body {
        margin: 0;
        padding: 0;
        background-color: var(--color-background-1);
    }
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');

    #app {
        font-family: 'Lato';
        /*Global varaibles*/
        /*Color schemes*/
        --color-background-0: 18, 35, 46;
        --color-background-1: 0, 124, 199;
        --color-highlight-0: 32, 54, 71;
        --color-highlight-1: 77, 168, 218;
        --color-text: 238, 251, 251;
        /*Font sizes*/
        --font-size-desktop-h1: 5rem;
        --font-size-desktop-h2: 2.5rem;
        --font-size-desktop-p: 1.5rem;
        --font-size-mobile-h1: 4rem;
        --font-size-mobile-h2: 2rem;
        --font-size-mobile-p: 1.3rem;
    }
</style>

<template>
    <div class="page-not-found-section-background">
        <div class="page-not-found-section-container">
            <h1>4<span>0</span>4</h1>
            <p>Sorry, the <span>page</span> you are looking for is <span>not</span> found.</p>
            <button v-on:click="redirectToHomePage">Back to Homepage</button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'PageNotFoundSection',
    methods: {
        redirectToHomePage() {
            this.$router.push({ name: 'HomePage' });
        },
    },
});
</script>

<style lang="scss" scoped>
    /*Layout*/
    .page-not-found-section-background {
        background-color: rgba(var(--color-background-0), 0.95);
    }
    .page-not-found-section-container {
        max-width: 960px;
        min-height: 89vh;
        margin: 0 auto;
        padding: 0 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .page-not-found-section-container h1 {
        margin: 0 auto 8rem auto;
    }
    .page-not-found-section-container p {
        margin: 0 auto 7rem auto;
    }
    .page-not-found-section-container button {
        margin: 0 auto 0 auto;
        padding: 1rem;
    }

    /*Typography*/
    .page-not-found-section-container h1 {
        color: rgb(var(--color-text));
        text-align: center;
        font-weight: 700;
        font-size: calc(var(--font-size-desktop-h1) * 3);
    }
    .page-not-found-section-container p {
        color: rgb(var(--color-text));
        text-align: center;
        font-weight: 400;
        font-size: calc(var(--font-size-desktop-p) * 1);
    }
    .page-not-found-section-container button {
        color: rgb(var(--color-text));
        text-align: center;
        font-weight: 400;
        background-color: rgb(var(--color-highlight-1));
        font-size: calc(var(--font-size-desktop-p) * 1);
        border-radius: 1rem;
        border-color: transparent;

        /*Ripple effect */
        transition: background 0.75s;
        background-position: center;
        background-image: radial-gradient(
            circle,
            transparent 1%,
            rgb(var(--color-highlight-1)) 1%
        );
        background-size: 12000%;
    }
    .page-not-found-section-container button:active {
        background-color: rgba(var(--color-highlight-1), 0.8);
        transition: background 0s;
        background-size: 100%;
    }
    .page-not-found-section-container button:hover {
        background-color: rgba(var(--color-highlight-1), 0.8);
    }
    span {
        color: rgb(var(--color-highlight-1));
    }

    /*Mobile css*/
    @media screen and (max-width: 600px) {
        /*Typography*/
        .page-not-found-section-container h1 {
            font-size: calc(var(--font-size-mobile-h1) * 3);
        }
        .page-not-found-section-container p {
            font-size: calc(var(--font-size-mobile-p) * 1);
        }
        .page-not-found-section-container button {
            font-size: calc(var(--font-size-mobile-p) * 1);
        }
    }
</style>

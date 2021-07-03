<template>
    <div class="title-container" v-on:click="redirectToHomePage()">
        <h1>{{ companyName }}</h1>
        <p>{{ companySlogan }}</p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Title',
    computed: {
        companyName() {
            return this.$store.state.companyName;
        },
        companySlogan() {
            return this.$store.state.companySlogan;
        },
    },
    methods: {
        redirectToHomePage() {
            this.$router.push({ name: 'HomePage' });
        },
    },
});
</script>

<style lang="scss" scoped>
    /*Layout*/
    .title-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .title-container h1, .title-container p {
        margin: 0;
    }
    /*Typography*/
    .title-container h1 {
        text-align: center;
        font-weight: 700;
        font-size: calc(var(--font-size-desktop-h1) * 0.3);
        white-space: nowrap;
        overflow: hidden;
        cursor: pointer;
    }
    .title-container p {
        text-align: center;
        font-weight: 400;
        font-size: calc(var(--font-size-desktop-p) * 0.6);
        white-space: nowrap;
        overflow: hidden;
        cursor: pointer;
    }

    /*Mobile css*/
    @media screen and (max-width: 600px) {
        /*Typography*/
        .title-container h1 {
            font-size: calc(var(--font-size-mobile-h1) * 0.35);
        }
        .title-container p {
            font-size: calc(var(--font-size-mobile-p) * 0.6);
        }
    }
</style>

<template>
    <div class="nav-container">
        <nav class="nav">
            <ul>
                <li v-on:click="updateScrollTarget('welcome-section')">Home</li>
                <li v-on:click="updateScrollTarget('design-section')">
                    Design
                </li>
                <li v-on:click="updateScrollTarget('plan-section')">Plan</li>
                <li v-on:click="updateScrollTarget('build-section')">Build</li>
                <li v-on:click="updateScrollTarget('maintain-section')">
                    Maintain
                </li>
                <li v-on:click="updateScrollTarget('contact-us-section')">
                    Contact Us
                </li>
            </ul>
        </nav>
    </div>
</template>

<script lang="ts">
import { TScrollTarget } from '@/interfaces-and-types/Types';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Navigation',
    methods: {
        updateScrollTarget(scrollTarget: TScrollTarget) {
            if (this.$route.name !== 'HomePage') {
                this.$router.push({ name: 'HomePage' });
            }
            this.$store.commit('updateScrollTarget', scrollTarget);
        },
    },
});
</script>

<style lang="scss" scoped>
    /*Layout*/
    .nav ul {
        list-style-type: none;
        display: flex;
        justify-content: space-between;
        padding: 0;
        margin: 0;
    }
    .nav ul li {
        margin: 1rem;
    }
    .nav ul li:hover {
        padding-bottom: 0.3rem;
        margin-bottom: 0.7rem;
    }
    @media screen and (max-width: 600px) {
        .nav {
            display: none;
        }
    }

    /*Typography*/
    .nav ul li {
        border: 1px solid transparent;
        font-weight: 400;
        font-size: calc(var(--font-size-desktop-p) * 0.6);

    }
    .nav ul li:hover {
        border-bottom: 1px solid;
        cursor: pointer;
    }
</style>

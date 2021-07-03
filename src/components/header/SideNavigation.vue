<template>
    <div class="side-nav-container">
        <button v-on:click="openSideNav">
            <font-awesome-icon icon="bars" />
        </button>
        <nav class="side-nav">
            <div>
                <button v-on:click="closeSideNav">&times;</button>
            </div>
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
    name: 'SideNavigation',
    methods: {
        openSideNav() {
            document
                .getElementsByClassName('side-nav')[0]
                .setAttribute('class', 'side-nav slide-in');
        },
        closeSideNav() {
            document
                .getElementsByClassName('side-nav')[0]
                .setAttribute('class', 'side-nav slide-out');
        },
        updateScrollTarget(scrollTarget: TScrollTarget) {
            if (this.$route.name !== 'HomePage') {
                this.$router.push({ name: 'HomePage' });
            }
            this.$store.commit('updateScrollTarget', scrollTarget);
            this.closeSideNav();
        },
    },
});
</script>

<style lang="scss" scoped>
    /*Side navigation containers and its elemnts*/
    .side-nav-container {
        display: flex;
    }
    .side-nav {
        position: fixed;
        width: 50vw;
        height: 100vh;
        left: 50vw;
        top: 0vh;
    }
    .side-nav div {
        margin: 0 1rem;
        display: flex;
        justify-content: flex-end;
    }
    .side-nav ul {
        margin: 0;
        padding-left: 0;
        list-style-type: none;
    }
    .side-nav ul li {
        padding: 1rem;
    }

    /*Typography*/
    .side-nav-container * {
        color: rgb(var(--color-text));
        background-color: rgb(var(--color-background-0));
    }
    .side-nav-container button {
        border: transparent;
        font-size: calc(var(--font-size-mobile-h1) * 0.4);
        cursor: pointer;
    }
    .side-nav div button {
        font-size: calc(var(--font-size-mobile-h1) * 0.6);
    }
    .side-nav div button:hover {
        cursor: pointer;
    }
    .side-nav ul li {
        font-size: calc(var(--font-size-mobile-p) * 0.6);
        border-bottom: 1px solid rgb(var(--color-text));

        /*Ripple effect */
        transition: background 0.5s;
        background-position: center;
        background-image: radial-gradient(
            circle,
            transparent 1%,
            rgb(var(--color-highlight-0)) 1%
        );
        background-size: 12000%;
    }
    .side-nav ul li:active {
        /*Ripple effect*/
        background-color: rgba(var(--color-highlight-0), 0.8);
        transition: background 0s;
        background-size: 100%;
    }
    .side-nav ul li:hover {
        background-color: rgba(var(--color-highlight-0), 0.8);
        cursor: pointer;
    }

    /*Desktop css*/
    @media screen and (min-width: 600px) {
        /*Layout*/
        .side-nav-container {
            display: none;
        }
    }

    /*Animations*/
    .side-nav {
        transform: translateX(100%);
        -webkit-transform: translateX(100%);
    }

    .slide-in {
        animation: slide-in 0.5s forwards;
        -webkit-animation: slide-in 0.5s forwards;
    }

    .slide-out {
        animation: slide-out 0.5s forwards;
        -webkit-animation: slide-out 0.5s forwards;
    }

    @keyframes slide-in {
        100% {
            transform: translateX(0%);
        }
    }

    @-webkit-keyframes slide-in {
        100% {
            -webkit-transform: translateX(0%);
        }
    }

    @keyframes slide-out {
        0% {
            transform: translateX(0%);
        }
        100% {
            transform: translateX(100%);
        }
    }

    @-webkit-keyframes slide-out {
        0% {
            -webkit-transform: translateX(0%);
        }
        100% {
            -webkit-transform: translateX(100%);
        }
    }
</style>

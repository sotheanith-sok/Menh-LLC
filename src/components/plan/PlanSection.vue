<template>
    <div class="plan-section-background">
        <div class="plan-section-container">
            <div class="plan-section-text-container">
                <h2><span>Plan</span> For the Future</h2>
                <p>
                    Meticulous <span>planning</span> is an important factor for
                    the success of a project so let our team of experts help
                    guide you through it. From
                    <span>estimating budget</span> and
                    <span>time to completion</span> to
                    <span>clearing</span> your <span>local</span> or
                    <span>municipality requirements</span>, our experienced team
                    is here to assist you through every step of planning a home
                    construction.
                </p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'PlanSection',
    computed: {
        scrollTarget() {
            return this.$store.state.scrollTarget;
        },
    },
    watch: {
        scrollTarget() {
            this.scrollToSelf();
        },
    },
    mounted() {
        const root = this.$root;
        if (root) {
            root.$nextTick(() => {
                setTimeout(this.scrollToSelf, 0);
            });
        }
    },
    methods: {
        scrollToSelf() {
            if (this.$store.state.scrollTarget === 'plan-section') {
                this.$el.scrollIntoView({ behavior: 'smooth' });
                this.$store.commit('updateScrollTarget', undefined);
            }
        },
    },
});
</script>

<style lang="scss" scoped>
    /*Layout*/
    .plan-section-background {
        width: 100%;
        background: linear-gradient(
                225deg,
                rgba(var(--color-background-0), 0),
                rgba(var(--color-background-0), 0),
                rgba(var(--color-background-0), 1)
            ),
            url('../../assets/plan-background.png');
        background-size: cover;
        background-position: center;
    }
    .plan-section-container {
        max-width: 960px;
        min-height: 100vh;
        margin: 0 auto;
        display: flex;
        justify-content: flex-start;
        padding: 0 1rem;
    }
    .plan-section-text-container {
        width: 50%;
        margin: auto 0;
    }
    .plan-section-text-container h2,
    .plan-section-text-container p {
        margin: 2rem;
    }

    /*Typography*/
    .plan-section-text-container {
        color: rgb(var(--color-text));
        background-color: rgba(var(--color-highlight-1), 0.9);
        border-radius: 20px;
        box-shadow: -15px 15px 5px rgba(var(--color-highlight-1), 0.6);
    }
    .plan-section-text-container h2 {
        font-weight: 700;
        font-size: var(--font-size-desktop-h2);
    }
    .plan-section-text-container p {
        font-weight: 400;
        font-size: var(--font-size-desktop-p);
        letter-spacing: 0.1rem;
        word-spacing: 0.3rem;
        line-height: 2rem;
    }
    .plan-section-text-container span {
        color: rgb(var(--color-highlight-0));
    }

    /*Mobile css*/
    @media screen and (max-width: 600px) {
        /*Layout*/
        .plan-section-background {
            background: linear-gradient(
                    180deg,
                    rgba(var(--color-background-0), 0),
                    rgba(var(--color-background-0), 0),
                    rgba(var(--color-background-0), 1)
                ),
                url('../../assets/plan-background.png');
            background-size: cover;
            background-position: center;
        }
        .plan-section-text-container {
            width: 100%;
        }

        /*Typography*/
        .plan-section-text-container {
            box-shadow: 0px 15px 5px rgba(var(--color-highlight-1), 0.6);
        }
        .plan-section-text-container h2 {
            font-size: var(--font-size-mobile-h2);
        }
        .plan-section-text-container p {
            font-size: var(--font-size-mobile-p);
        }
    }
</style>

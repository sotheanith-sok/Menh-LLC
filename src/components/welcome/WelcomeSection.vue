<template>
    <div class="welcome-section-background">
        <div class="welcome-section-container">
            <h1>Your <span>Dream Home</span> Start Here</h1>
            <p>
                We, at
                <span>{{ companyName }}</span
                >, are ready to help bring your dream projects into reality.
                Starting with
                <span>designing</span>
                and
                <span>planning</span>
                to project
                <span>building</span>
                and
                <span>maintaining</span>, let our team of experts guide you
                through every steps of homebuilding.
            </p>
            <div>
                <button v-on:click="call">Get a Quote Today</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'WelcomeSection',
    computed: {
        scrollTarget() {
            return this.$store.state.scrollTarget;
        },
        companyName() {
            return this.$store.state.companyName;
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
            if (this.$store.state.scrollTarget === 'welcome-section') {
                this.$el.scrollIntoView({ behavior: 'smooth' });
                this.$store.commit('updateScrollTarget', undefined);
            }
        },
        call() {
            window.open(`tel:${this.$store.state.companyPhoneNumber}`);
        },
    },
});
</script>

<style lang="scss" scoped>
    /*Layout*/
    .welcome-section-background {
        background: linear-gradient(
                rgba(var(--color-background-0), 0.5),
                rgba(var(--color-background-0), 0.5)
            ),
            url('../../assets/welcome-background.png');
        background-size: cover;
        background-position: center;
        color: rgb(var(--color-text));
        cursor: default;
    }
    .welcome-section-container {
        max-width: 960px;
        min-height: 100vh;
        margin: 0 auto;
        padding: 0 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .welcome-section-container h1 {
        margin: 5rem 0rem 5rem 0rem;
    }
    .welcome-section-container p {
        margin: 0rem 0rem 5rem 0rem;
    }
    .welcome-section-container div {
        margin: 0rem auto 0rem auto;
    }
    .welcome-section-container div button {
        padding: 1rem 1rem;
    }

    /*Typography*/
    .welcome-section-container h1 {
        font-size: var(--font-size-desktop-h1);
        font-weight: 700;
        text-align: center;
    }
    .welcome-section-container p {
        font-size: var(--font-size-desktop-p);
        font-weight: 400;
        text-align: center;
    }
    .welcome-section-container div button {
        background-color: rgb(var(--color-highlight-1));
        color: rgb(var(--color-text));
        font-weight: 400;
        font-size: 1.5rem;
        border-radius: 100px;
        border-color: transparent;
        cursor: pointer;
        -webkit-tap-highlight-color: transparent;

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
    .welcome-section-container div button:active {
        background-color: rgba(var(--color-highlight-1), 0.8);
        transition: background 0s;
        background-size: 100%;
    }
    .welcome-section-container div button:hover {
        background-color: rgba(var(--color-highlight-1), 0.8);
    }
    span {
        color: rgb(var(--color-highlight-1));
    }

    /*Mobile css*/
    @media screen and (max-width: 600px) {
        /*Layout*/
        .welcome-section-container h1 {
            margin: 0rem 0rem 5rem 0rem;
        }
        .welcome-section-container p {
            margin: 0rem 0rem 2rem 0rem;
        }
        .welcome-section-container div {
            margin: 0rem auto 2rem auto;
        }

        /*Typography*/
        .welcome-section-container h1 {
            font-size: var(--font-size-mobile-h1);
        }
        .welcome-section-container p {
            font-size: var(--font-size-mobile-p);
        }
        .welcome-section-container div button {
            font-size: var(--font-size-mobile-p);
        }
    }
</style>

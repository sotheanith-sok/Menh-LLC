<template>
    <div class="build-section-background">
        <div class="build-section-container">
            <div class="build-section-text-container">
                <h2><span>Build</span> Your Home</h2>
                <p>
                    At <span>{{ companyName }}</span
                    >, we recognize that your ideal home has to be perfect and
                    our team of expert constructors are ready to assist in
                    bringing it to life. From <span>constructing</span> your new
                    home or <span>demolishing</span> your old one to
                    <span>renovating</span> or <span>expanding</span> your
                    current home, we will be there with you to ensure that each
                    project is done perfectly.
                </p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'BuildSection',
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
            if (this.$store.state.scrollTarget === 'build-section') {
                this.$el.scrollIntoView({ behavior: 'smooth' });
                this.$store.commit('updateScrollTarget', undefined);
            }
        },
    },
});
</script>

<style lang="scss" scoped>
    /*Layout*/
    .build-section-background {
        width: 100%;
        background: linear-gradient(
                135deg,
                rgba(var(--color-background-1), 0),
                rgba(var(--color-background-1), 0),
                rgba(var(--color-background-1), 0.5)
            ),
            url('../../assets/build-background.png');
        background-size: cover;
        background-position: left;
    }
    .build-section-container {
        max-width: 960px;
        min-height: 100vh;
        margin: 0 auto;
        display: flex;
        justify-content: flex-end;
        padding: 0 1rem;
    }
    .build-section-text-container {
        width: 50%;
        margin: auto 0;
    }
    .build-section-text-container h2,
    .build-section-text-container p {
        margin: 2rem;
    }

    /*Typography*/
    .build-section-text-container {
        color: rgb(var(--color-text));
        background-color: rgba(var(--color-highlight-0), 0.9);
        border-radius: 20px;
        box-shadow: 15px 15px 5px rgba(var(--color-highlight-0), 0.6);
    }
    .build-section-text-container h2 {
        font-weight: 700;
        font-size: var(--font-size-desktop-h2);
    }
    .build-section-text-container p {
        font-weight: 400;
        font-size: var(--font-size-desktop-p);
        letter-spacing: 0.1rem;
        word-spacing: 0.3rem;
        line-height: 2rem;
    }
    .build-section-text-container span {
        color: rgb(var(--color-highlight-1));
    }

    /*Mobile css*/
    @media screen and (max-width: 600px) {
        /*Layout*/
        .build-section-background {
            background: linear-gradient(
                    180deg,
                    rgba(var(--color-background-1), 0),
                    rgba(var(--color-background-1), 0),
                    rgba(var(--color-background-1), 0.5)
                ),
                url('../../assets/build-background.png');
            background-size: cover;
            background-position: center;
        }
        .build-section-text-container {
            width: 100%;
        }

        /*Typography*/
        .build-section-text-container {
            box-shadow: 0px 15px 5px rgba(var(--color-highlight-0), 0.6);
        }
        .build-section-text-container h2 {
            font-size: var(--font-size-mobile-h2);
        }
        .build-section-text-container p {
            font-size: var(--font-size-mobile-p);
        }
    }
</style>

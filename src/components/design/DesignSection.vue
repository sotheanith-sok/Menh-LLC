<template>
    <div class="design-section-background">
        <div class="design-section-container">
            <div class="design-section-text-container">
                <h2><span>Design</span> Your Home</h2>
                <p>
                    A perfect home requires careful design and our team of
                    designers are ready to assist you. Utilizing the state of
                    the art technology, our experienced team will bring your
                    perfect home to life; both
                    <span>interior</span> and <span>exterior</span>. With
                    <span>{{ companyName }}</span
                    >, we take the guesswork out of homebuilding so that you can
                    be confident that what you are paying for is what you want.
                </p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'DesignSection',
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
            if (this.$store.state.scrollTarget === 'design-section') {
                this.$el.scrollIntoView({ behavior: 'smooth' });
                this.$store.commit('updateScrollTarget', undefined);
            }
        },
    },
});
</script>

<style lang="scss" scoped>
    /*Layout*/
    .design-section-background {
        width: 100%;
        background: linear-gradient(
                135deg,
                rgba(var(--color-background-1), 0),
                rgba(var(--color-background-1), 0),
                rgba(var(--color-background-1), 0.5)
            ),
            url('../../assets/design-background.png');
        background-size: cover;
        background-position: left;
    }
    .design-section-container {
        max-width: 960px;
        min-height: 100vh;
        margin: 0 auto;
        display: flex;
        justify-content: flex-end;
        padding: 0 1rem;
    }
    .design-section-text-container {
        width: 50%;
        margin: auto 0;
    }
    .design-section-text-container h2,
    .design-section-text-container p {
        margin: 2rem;
    }

    /*Typography*/
    .design-section-text-container {
        color: rgb(var(--color-text));
        background-color: rgba(var(--color-highlight-0), 0.9);
        border-radius: 20px;
        box-shadow: 15px 15px 5px rgba(var(--color-highlight-0), 0.6);
    }
    .design-section-text-container h2 {
        font-weight: 700;
        font-size: var(--font-size-desktop-h2);
    }
    .design-section-text-container p {
        font-weight: 400;
        font-size: var(--font-size-desktop-p);
        letter-spacing: 0.1rem;
        word-spacing: 0.3rem;
        line-height: 2rem;
    }
    .design-section-text-container span {
        color: rgb(var(--color-highlight-1));
    }

    /*Mobile css*/
    @media screen and (max-width: 600px) {
        /*Layout*/
        .design-section-background {
            background: linear-gradient(
                    180deg,
                    rgba(var(--color-background-1), 0),
                    rgba(var(--color-background-1), 0),
                    rgba(var(--color-background-1), 0.5)
                ),
                url('../../assets/design-background.png');
            background-size: cover;
            background-position: center;
        }
        .design-section-text-container {
            width: 100%;
        }

        /*Typography*/
        .design-section-text-container {
            box-shadow: 0px 15px 5px rgba(var(--color-highlight-0), 0.6);
        }
        .design-section-text-container h2 {
            font-size: var(--font-size-mobile-h2);
        }
        .design-section-text-container p {
            font-size: var(--font-size-mobile-p);
        }
    }
</style>

<template>
    <div class="maintain-section-background">
        <div class="maintain-section-container">
            <div class="maintain-section-text-container">
                <h2><span>Maintain</span> Your Home</h2>
                <p>
                    Prolonged problems at home could lead to costly repairs down
                    the road and we, at <span>{{ companyName }}</span
                    >, are here for you. From
                    <span>electrical repairs</span> and <span>plumbing</span> to
                    <span>structural repairs</span> and <span>many more</span>,
                    let our experienced technicians deal with your problems so
                    that you can get back to doing what you do best.
                </p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'MaintainSection',
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
            if (this.$store.state.scrollTarget === 'maintain-section') {
                this.$el.scrollIntoView({ behavior: 'smooth' });
                this.$store.commit('updateScrollTarget', undefined);
            }
        },
    },
});
</script>

<style lang="scss" scoped>
    /*Layout*/
    .maintain-section-background {
        width: 100%;
        background: linear-gradient(
                225deg,
                rgba(var(--color-background-0), 0),
                rgba(var(--color-background-0), 0),
                rgba(var(--color-background-0), 1)
            ),
            url('../../assets/maintain-background.png');
        background-size: cover;
        background-position: center;
    }
    .maintain-section-container {
        max-width: 960px;
        min-height: 100vh;
        margin: 0 auto;
        display: flex;
        justify-content: flex-start;
        padding: 0 1rem;
    }
    .maintain-section-text-container {
        width: 50%;
        margin: auto 0;
    }
    .maintain-section-text-container h2,
    .maintain-section-text-container p {
        margin: 2rem;
    }

    /*Typography*/
    .maintain-section-text-container {
        color: rgb(var(--color-text));
        background-color: rgba(var(--color-highlight-1), 0.9);
        border-radius: 20px;
        box-shadow: -15px 15px 5px rgba(var(--color-highlight-1), 0.6);
    }
    .maintain-section-text-container h2 {
        font-weight: 700;
        font-size: var(--font-size-desktop-h2);
    }
    .maintain-section-text-container p {
        font-weight: 400;
        font-size: var(--font-size-desktop-p);
        letter-spacing: 0.1rem;
        word-spacing: 0.3rem;
        line-height: 2rem;
    }
    .maintain-section-text-container span {
        color: rgb(var(--color-highlight-0));
    }

    /*Mobile css*/
    @media screen and (max-width: 600px) {
        /*Layout*/
        .maintain-section-background {
            background: linear-gradient(
                    180deg,
                    rgba(var(--color-background-0), 0),
                    rgba(var(--color-background-0), 0),
                    rgba(var(--color-background-0), 1)
                ),
                url('../../assets/maintain-background.png');
            background-size: cover;
            background-position: center;
        }
        .maintain-section-text-container {
            width: 100%;
        }

        /*Typography*/
        .maintain-section-text-container {
            box-shadow: 0px 15px 5px rgba(var(--color-highlight-1), 0.6);
        }
        .maintain-section-text-container h2 {
            font-size: var(--font-size-mobile-h2);
        }
        .maintain-section-text-container p {
            font-size: var(--font-size-mobile-p);
        }
    }
</style>

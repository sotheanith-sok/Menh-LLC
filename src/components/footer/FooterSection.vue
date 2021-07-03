<template>
    <div class="footer-section-background">
        <div class="footer-section-container">
            <p>
                <font-awesome-icon icon="copyright" />
                {{ companyName }}. All right reserved.
            </p>
            <nav>
                <ul>
                    <li v-on:click="redirectToTermsAndConditionPage()">
                        Terms & Conditions
                    </li>
                    <li v-on:click="redirectToPrivacyPolicyPage">
                        Privacy Policy
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'FooterSection',
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
            if (this.$store.state.scrollTarget === 'footer-section') {
                this.$el.scrollIntoView({ behavior: 'smooth' });
                this.$store.commit('updateScrollTarget', undefined);
            }
        },
        redirectToTermsAndConditionPage() {
            this.$router.push({ name: 'TermsAndConditionsPage' });
        },
        redirectToPrivacyPolicyPage() {
            this.$router.push({ name: 'PrivacyPolicyPage' });
        },
    },
});
</script>

<style lang="scss" scoped>
    /*Layout*/
    .footer-section-background {
        background-color: rgb(var(--color-background-0));
    }
    .footer-section-container {
        max-width: 960px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        padding: 0 1rem;
    }
    .footer-section-container p {
        margin: 1rem 0 1rem 0;
        cursor: default;
    }
    .footer-section-container nav ul {
        display: flex;
        list-style-type: none;
        margin: 0rem;
        padding-left: 0;
    }
    .footer-section-container nav ul li {
        text-align: center;
        margin: 1rem 0 1rem 2rem;
    }

    /*Typography*/
    .footer-section-container {
        color: rgb(var(--color-text));
    }
    .footer-section-container p {
        font-weight: 400;
        font-size: calc(var(--font-size-desktop-p) * 0.5);
    }
    .footer-section-container nav ul li {
        font-weight: 400;
        font-size: calc(var(--font-size-desktop-p) * 0.5);
    }
    .footer-section-container nav ul li:hover {
        border-bottom: 1px solid;
        cursor: pointer;
    }

    /*Mobile css*/
    @media screen and (max-width: 600px) {
        /*Typography*/
        .footer-section-container p {
            font-size: calc(var(--font-size-mobile-p) * 0.5);
        }
        .footer-section-container nav ul li {
            font-size: calc(var(--font-size-mobile-p) * 0.5);
        }
    }
</style>

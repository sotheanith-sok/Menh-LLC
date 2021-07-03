<template>
    <div class="header-section-background">
        <div class="header-section-container">
            <Title />
            <Navigation />
            <SideNavigation />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navigation from '@/components/header/Navigation.vue';
import SideNavigation from '@/components/header/SideNavigation.vue';
import Title from '@/components/header/Title.vue';

export default defineComponent({
    name: 'HeaderSection',
    components: {
        Navigation,
        SideNavigation,
        Title,
    },
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
            if (this.$store.state.scrollTarget === 'header-section') {
                this.$el.scrollIntoView({ behavior: 'smooth' });
                this.$store.commit('updateScrollTarget', undefined);
            }
        },
    },
});
</script>

<style lang="scss" scoped>
    /*Layout*/
    .header-section-background {
        background-color: rgb(var(--color-background-0));
        color: rgb(var(--color-text));
    }
    .header-section-container {
        max-width: 960px;
        display: flex;
        margin: 0 auto;
        justify-content: space-between;
        padding: 0.2rem 1rem;
    }
</style>

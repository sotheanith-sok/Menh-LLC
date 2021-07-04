<template>
    <div class="page-not-found-page-container">
        <HeaderSection/>
        <PageNotFoundSection/>
        <FooterSection/>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import HeaderSection from '@/components/header/HeaderSection.vue';
import PageNotFoundSection from '@/components/page-not-found/PageNotFoundSection.vue';
import FooterSection from '@/components/footer/FooterSection.vue';

export default defineComponent({
    name: 'PageNotFoundPage',
    components: {
        HeaderSection,
        PageNotFoundSection,
        FooterSection,
    },
});
</script>

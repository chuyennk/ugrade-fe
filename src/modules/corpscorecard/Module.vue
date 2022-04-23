<template>
<q-layout>
    <main-header/>
    <q-page-container>
    <router-view/>
    </q-page-container>
</q-layout>
</template>

<script setup>
    import MainHeader from '../../components/MainHeader.vue';
</script>
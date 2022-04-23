<script setup>
    import { useCustStore } from '../store';
    const custStore = useCustStore()
</script>
<template>
    <h3>This is customers page</h3>
    <div>{{ custStore.counter}}</div>
    <button @click="custStore.addOne">Click to Add</button>
</template>
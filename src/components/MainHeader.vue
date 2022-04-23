<template>
    <q-header elevated>
        <q-toolbar>
            <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

            <q-toolbar-title shrink> uGrade </q-toolbar-title>

            <div class="text-caption self-end">version 0.0.1</div>
            <q-space />
            <div id="show-buttons" class="row"></div>
        </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" bordered class="bg-grey-1">
        <essential-link />
    </q-drawer>
</template>

<script setup>
    import EssentialLink from "./EssentialLink.vue"
    import {ref} from 'vue'

		const leftDrawerOpen = ref(false)
		const toggleLeftDrawer = () => (leftDrawerOpen.value = !leftDrawerOpen.value)


		const toolbars = {
			Search: [],
			CustInfo: [{ name: 'Close', icon: 'far fa-times-circle', action: 'gotoRoute', tooltip: 'Close - back to customer search' }],
		}


</script>
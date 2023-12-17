<template>
	<v-app-bar color="#e4012c" density="compact">
		<template v-slot:prepend>
			<v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
		</template>
		<v-app-bar-title class="font-weight-bold">MET INSIGHTS</v-app-bar-title>
	</v-app-bar>
	<v-navigation-drawer class="nav-drawer w-25" v-model="drawer" location="left" temporary>
		<v-list v-for="(item, index) in filteredItems" :key="index" density="compact" nav>
			<v-list-item
				:prepend-icon="item.icon"
				:title="item.title"
				:value="item.value"
			></v-list-item>
		</v-list>
	</v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref, watch, computed } from "vue"

const drawer = ref(false)
const userIsPremium = ref(false)
const userIsAdmin = ref(true)
const group = ref()

interface Item {
	title: string
	value: string
	icon: string
	account?: string
}

const items = ref<Array<Item>>([
	{
		title: "home",
		value: "home",
		icon: "mdi-home",
	},
	{
		title: "quizzes",
		value: "quizzes",
		icon: "mdi-puzzle",
		account: "premium",
	},
	{
		title: "artists",
		value: "artists",
		icon: "mdi-account",
	},
	{
		title: "artworks",
		value: "artworks",
		icon: "mdi-palette",
	},
	{
		title: "mediums",
		value: "mediums",
		icon: "mdi-brush",
	},
	{
		title: "data facts",
		value: "data facts",
		icon: "mdi-chart-donut",
		account: "premium",
	},
	{
		title: "edit",
		value: "edit",
		icon: "mdi-cog",
		account: "admin",
	},
	{
		title: "account",
		value: "account",
		icon: "mdi-account-circle",
		account: "admin",
	},
])

const filteredItems = computed(() => {
	if (userIsPremium.value) {
		return items.value.filter((item: Item) => item.account !== "admin")
	} else if (userIsAdmin.value) {
		return items.value
	} else {
		return items.value.filter(
			(item: Item) => item.account !== "premium" && item.account !== "admin",
		)
	}
})

watch(group, () => {
	drawer.value = false
})
</script>

<style scoped>
.nav-drawer {
	background: #e4012c;
	color: white;
	font-weight: bold;
}
</style>

<template>
	<div class="w-100 h-90 d-flex justify-center">
		<div class="ma-2">
			<p
				v-for="(insight, index) in insights"
				:key="index"
				class="text-white text-h1 font-weight-black"
			>
				{{ insight }}
			</p>
		</div>
		<div class="ma-2">
			<p
				v-for="(insight, index) in insights"
				:key="index"
				class="text-white text-h1 font-weight-black"
			>
				{{ insight }}
			</p>
		</div>
	</div>
</template>

<script setup lang="ts">
const insights = [
	"MET INSIGHTS",
	"MET INSIGHTS",
	"MET INSIGHTS",
	"MET INSIGHTS",
	"MET INSIGHTS",
	"MET INSIGHTS",
	"MET INSIGHTS",
]
</script>

<style scoped>
.text-h1 {
	text-overflow: clip;
	white-space: nowrap;
}
</style>

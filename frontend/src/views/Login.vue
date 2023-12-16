<template>
	<div class="login-container d-flex pa-16 align-center h-screen">
		<TextPattern />
		<Modal
			title="WELCOME BACK"
			message="Don't have an account?"
			link="Create an account"
			additionalText="now and access more content"
		/>
	</div>
</template>

<script setup lang="ts">
import TextPattern from "@/components/global/TextPattern.vue"
import Modal from "@/components/global/Modal.vue"
</script>

<style scoped>
.login-container {
	background-color: rgba(228, 1, 44, 0.8);
}
</style>

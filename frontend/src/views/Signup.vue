<template>
	<div class="signup-container d-flex pa-16 align-center h-screen">
		<TextPattern />
		<Modal
			title="CREATE ACCOUNT"
			message="Already have an account?"
			link="Login"
			additionalText="and access your content"
			buttonLabel="SUBMIT"
			redirectedPath="/login"
		/>
	</div>
</template>

<script setup lang="ts">
import TextPattern from "@/components/global/TextPattern.vue"
import Modal from "@/components/global/Modal.vue"
</script>

<style scoped>
.signup-container {
	background-color: rgba(228, 1, 44, 0.8);
}
</style>

<template>
	<div class="modal d-flex align-center justify-center">
		<div class="modal-content d-flex">
			<div class="w-50 h-100 d-flex flex-column align-center justify-center text-subtitle-1">
				<p class="ma-4">{{ message }}</p>
				<p class="ma-4">
					<router-link :to="redirectedPath" class="font-weight-bold create-account">
						{{ link }}
					</router-link>
					{{ additionalText }}
				</p>
			</div>
			<v-divider :thickness="1" vertical />
			<div class="w-50 h-100 d-flex flex-column justify-center align-center">
				<div class="w-100 pa-4 d-flex justify-end align-center">
					<v-btn
						color="black"
						size="small"
						icon="mdi-close"
						@click="redirectToHome"
					></v-btn>
				</div>
				<div class="w-100 h-100 pa-4">
					<v-form class="w-100 h-100 px-5 pb-10">
						<div class="d-flex justify-center align-center">
							<p class="mb-5 text-h6 font-weight-bold">{{ title }}</p>
						</div>
						<v-text-field
							class="my-4"
							v-model="email.value.value"
							variant="outlined"
							label="Email Address"
							:error-messages="email.errorMessage.value"
						></v-text-field>
						<v-text-field
							class="my-4"
							v-model="password.value.value"
							:type="showPassword ? 'text' : 'password'"
							:append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
							@click:append-inner="showPassword = !showPassword"
							variant="outlined"
							label="Password"
							:error-messages="password.errorMessage.value"
						></v-text-field>
						<v-text-field
							v-if="$route.path === '/create-account'"
							class="my-4"
							v-model="password.value.value"
							:type="showConfirmPassword ? 'text' : 'password'"
							:append-inner-icon="showConfirmPassword ? 'mdi-eye-off' : 'mdi-eye'"
							@click:append-inner="showConfirmPassword = !showConfirmPassword"
							variant="outlined"
							label="Confirm Password"
							:error-messages="password.errorMessage.value"
						></v-text-field>
						<v-btn
							type="submit"
							variant="flat"
							size="large"
							color="black"
							class="w-100 mt-2"
							@click="submit"
							>{{ buttonLabel }}</v-btn
						>
					</v-form>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useField, useForm } from "vee-validate"
import { ref, defineProps, computed } from "vue"
import { useRouter } from "vue-router"

const { title, message, link, additionalText, buttonLabel } = defineProps([
	"title",
	"message",
	"link",
	"additionalText",
	"buttonLabel",
])

const router = useRouter()
const showPassword = ref(false)
const showConfirmPassword = ref(false)

const { handleSubmit } = useForm({
	validationSchema: {
		email(value: string) {
			if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) {
				return true
			} else {
				return "Must be a valid e-mail"
			}
		},
		password(value: string) {
			if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(value)) {
				return true
			} else {
				return "Minimum of eight characters containing at least one letter and one number"
			}
		},
	},
})

const email = useField("email")
const password = useField("password")

const submit = handleSubmit((values) => {
	alert(JSON.stringify(values, null, 2))
})

const redirectToHome = () => {
	router.push({ path: "/" })
}

const redirectedPath = computed(() => {
	return router.currentRoute.value.path === "/login" ? "/create-account" : "/login"
})
</script>

<style scoped>
.modal {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.7);
	z-index: 1000;
}

.modal-content {
	background-color: white;
	height: 600px;
	width: 1100px;
}

.create-account {
	text-decoration: none;
	color: black;
}

.test {
	background-color: aqua;
}
</style>

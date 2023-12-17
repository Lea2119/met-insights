<template>
	<div class="landing-container">
		<div class="landing-content m-10">
			<div class="d-flex align-center text-white">
				<div class="flex-grow-1 text-h4 font-weight-bold">
					<h1>MET INSIGHTS</h1>
				</div>
				<div class="d-flex align-center">
					<v-btn
						class="font-weight-bold"
						variant="text"
						size="x-large"
						@click="redirectToLogin"
						>LOGIN</v-btn
					>
				</div>
			</div>
			<div class="text-content my-16 text-white text-h4 text-justify">
				<p>
					Step into the captivating world of art at the Metropolitan Museum. Immerse
					yourself in a meticulously curated collection that transcends boundaries,
					capturing the rich tapestry of cultures, varied periods, and diverse artistic
					styles. With just a click, uncover the brilliance of celebrated artists and the
					compelling narratives woven into each masterpiece.
				</p>
			</div>
			<div class="img-container">
				<img class="w-100 h-100" :src="imageLanding" alt="" />
			</div>
			<div class="text-content my-16 text-white text-h4 text-justify">
				<p>
					Unlock Premium Content: Elevate your artful journey by creating a free account.
					Gain access to exclusive features that go beyond the canvas—participate in
					engaging quizzes, delve into in-depth data analyses, and enjoy personalized
					content tailored to your artistic preferences. As you embark on this cultural
					odyssey, let the magic of art unfold in ways you've never experienced before.
				</p>
			</div>
			<div class="text-content my-16 text-white text-h4 text-justify">
				<p>
					Whether you're a seasoned art enthusiast or a curious explorer, there's a wealth
					of inspiration waiting for you. Join our community of art lovers and ignite your
					passion for creativity. Start your personalized artful journey today!
				</p>
			</div>
		</div>
		<div class="my-16 pa-16 text-white text-h4 d-flex align-center justify-center">
			<v-btn
				class="mx-4 text-red font-weigh-bold"
				variant="flat"
				size="x-large"
				@click="redirectToSignup"
				>CREATE AN ACCOUNT</v-btn
			>
			<v-btn class="mx-4 font-weigh-bold" variant="outlined" size="x-large"
				>CONTINUE AS GUEST</v-btn
			>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router"

const imageLanding = new URL("/src/assets/andrew-neel.jpg", import.meta.url).href
const router = useRouter()

const redirectToLogin = () => {
	router.push({ path: "/login" })
}

const redirectToSignup = () => {
	router.push({ path: "/create-account" })
}
</script>

<style scoped>
.landing-container {
	background-color: #e4012c;
	padding: 80px;
	min-height: 100vh;
}
.text-content {
	line-height: 80px;
}
.img-container {
	height: 600px;
	width: 100%;
}
img {
	object-fit: cover;
}
</style>

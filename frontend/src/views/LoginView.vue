<script setup>
import VikasanaIcon from '@/components/VikasanaIcon.vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';
import { ref } from 'vue';

const email = ref('');
const password = ref('');
const authStore = useAuthStore();
const router = useRouter();


async function loginUser() {
  console.log('Login payload:', { email: email.value, password: password.value });

  const response = await fetch('/', {
    method: 'POST',
    body: JSON.stringify({ email: email.value, password: password.value }),
  });
  const data = await response.json();
  
  if (response.ok) {
    authStore.setUser(data.user, data.token);
    alert('Login successful!');
    router.push("/dashboard")

  } else {
    alert('Login failed!');
  }
}

</script>

<template>
    <div class="flex flex-col sm:flex-row items-center min-h-screen bg-black text-white font-altone space-x-0">
      
      <div class="sm:min-h-screen sm:w-5/6 md:w-5/12 w-screen h-52 relative overflow-clip">
        <img src="/Images/constructionlanding.jpg" class="sm:min-h-screen w-full object-cover opacity-30" >
        <VikasanaIcon class="absolute top-0 mt-7 sm:mx-10" />
      </div>

      <div class="w-full max-w-lg p-6 px-10 sm:px-20 rounded-lg flex flex-col gap-4 tracking-wider shadow-[0_-5vh_40px_rgba(255,255,255,0.2)] sm:shadow-none">
        <h2 class="text-3xl -ml-4 sm:-ml-8 text-white">Welcome mate,</h2>
        <form @submit.prevent="loginUser" class="mt-4 text- flex flex-col gap-6">
          <div class="flex flex-col gap-4">
            <div class="mb-4">
              <label for="email" class="block font-medium">Email</label>
              <input
              type="email"
              v-model="email"
              class="w-full px-4 py-4 mt-3 bg-black rounded-xl ring-white ring-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
              required
              />
            </div>
            <div class="mb-4">
            <label for="password" class="block font-medium">Password</label>
            <input
            type="password"
            v-model="password"
            class="w-full px-4 py-4 mt-3 bg-black rounded-xl ring-white ring-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your password"
            required
            />
          </div>
        </div>
          <button
            type="submit"
            class="w-fit px-10 py-2 text-black bg-white rounded-xl font-black text-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400">
            Login
          </button>
        </form>
      </div>
    </div>
</template>
  
  <script>
  </script>
  
  <style scoped>
  /* Add additional styles here if needed */
  </style>
  
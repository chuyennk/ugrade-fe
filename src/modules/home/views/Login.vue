<template>
  <q-page class="row flex flex-center">
    <!-- content -->
    <q-card class="column col-3">
      <q-card-section class="bg-primary text-white">
        <div class="text-h6">Login</div>
      </q-card-section>

      <q-separator />
      <q-card-section>
        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
          <q-input
            filled
            v-model="email"
            type = "email"
            label="Email *"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please enter your email address']"
          />

          <q-input
            filled
            type="password"
            v-model="password"
            label="Password *"
            lazy-rules
            :rules="[val => val !== null && val !== '' || 'Please provide your password',]"
          />

          <div>
            <q-btn label="Login" type="submit" color="dark"/>
            <q-btn label="Reset" type="reset" color="grey-8" flat class="q-ml-sm" />
            <q-space/>
            <!-- <q-btn label="Back To Home" type="text"  @click="() => {router.push('/')}"/> -->
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
    import {ref, computed} from 'vue'
    import {useRouter} from 'vue-router'
    import {useHomeStore} from '../store'

    const store = useHomeStore()
    const router = useRouter()

    const email = ref('')
    const password = ref('')

      const onSubmit = async () => {
        await store.loggingIn({usr: email.value, pwd: password.value})

        if (store.isLoggedIn) {await router.push('/cust')}
      }

      const onReset = () => {
        console.log('reset')
      }

</script>

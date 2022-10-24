<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-img
          class="q-my-sm"
          src="~assets/adLogo.svg"
          width="60px"
          spinner-color="primary"
        />
        <q-toolbar-title> AD Madureira | Juara </q-toolbar-title>

        <div class="q-mr-md">Controlador de iluminação - V{{ $q.version }}</div>
        <q-btn flat round icon="exit_to_app" @click="signOut()"/>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import WebService from 'src/services/WebService'
export default {
  name: 'MainLayout',
  created () {
    this.ws = new WebService()
  },
  methods: {
    signOut () {
      this.ws.signOut().then(() => {
        this.$router.push({ name: 'sign-in' })
      })
    }
  }
}
</script>

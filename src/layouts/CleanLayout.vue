<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar class="row justify-center">
        <span> Versão: <b>Desenvolvimento</b> </span>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'CleanLayout'
}
</script>

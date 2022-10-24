<template>
  <q-page class="flex flex-center">
    <q-card v-if="iswebserviceok" flat bordered>
      <q-card-section>
        <div class="text-h6">Info - Result from Webservice</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-input filled v-model="heap" label="Available Heap" readonly/>
        <q-input filled v-model="ssid" label="SSID" readonly/>
      </q-card-section>
    </q-card>
    <q-card v-else flat bordered>
      <q-card-section class="q-pt-none">
        The ESP32 Webservice did not provide any result. Did you really launch
          this application from an ESP32?
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import WebService from 'src/services/WebService'

export default ({
  name: 'IndexPage',
  data () {
    return {
      heap: undefined,
      ssid: 'not defined',
      iswebserviceok: true
    }
  },
  mounted () {
    console.log('Info mounted')
    const ws = new WebService()
    ws.getInfo()
      .then((result) => {
        console.log(result)
        this.heap = result.data.heap
        this.ssid = result.data.ssid
        this.iswebserviceok = true
      })
      .catch((error) => {
        console.error(error)
        this.iswebserviceok = false
      })
  }
})
</script>

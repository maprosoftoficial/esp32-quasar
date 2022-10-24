<template>
  <q-page
    class="flex flex-center"
    :style="$q.platform.is.mobile ? 'min-height: 90vh' : 'min-height: 90vh'"
  >
    <!-- Desktop -->
    <div
      v-if="$q.platform.is.desktop"
      class="row justify-center items-center full-width"
      style="height: 94.6vh"
    >
      <q-img src="~assets/adLogo.svg" width="350px" spinner-color="primary" />
      <div class="col-6 q-pa-md row items-center justify-center full-height">
        <q-card class="shadow-0 col-8">
          <q-card-section style="padding: 0px" class="text-black">
            <p class="text-h6 text-weight-bold primary">Entrar</p>
            <div>
              <p class="primary" style="margin-bottom: 4px">E-mail</p>
              <q-input
                color="grey"
                outlined
                bottom-slots
                type="email"
                v-model.trim="email"
                lazy-rules
              />
              <p class="primary" style="margin-bottom: 4px">Senha</p>
              <q-input
                color="grey-5"
                outlined
                bottom-slots
                :type="isPwd ? 'password' : 'text'"
                v-model="password"
                :rules="[
                  (val) => !!val || '* Obrigatório',
                  (val) =>
                    val.length >= 6 ||
                    'A senha deve conter pelo menos 6 digitos',
                ]"
                lazy-rules
                @keyup.enter="SignIn()"
                style="padding-bottom: 12px"
              >
                <template v-slot:append>
                  <q-icon
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwd = !isPwd"
                  />
                </template>
              </q-input>
            </div>
            <div>
              <div
                v-ripple
                class="float-right relative-position"
                @click="ForgotPassword()"
                style="padding-top: 10px; cursor: pointer"
              >
                Esqueceu a senha?
              </div>
            </div>
            <div class="row full-width justify-center">
              <q-btn
                class="text-white bg-primary full-width"
                @click="SignIn()"
                label="Entrar"
                :disable="password.length < 6"
                style="margin-top: 30px"
              />
            </div>
          </q-card-section>
        </q-card>
      </div>
      <!-- <div
        class="col-6 q-pa-lg row items-center justify-center bg-primary full-height"
      >
        <q-img style="width: 550px" src="~assets/images/logoSite.png" />
      </div> -->
    </div>

    <!-- Mobile -->
    <div v-if="$q.platform.is.mobile" class="col flex flex-center">
      <q-img
        class="q-mb-md"
        src="~assets/adLogo.svg"
        width="200px"
        spinner-color="primary"
      />
      <div style="width: 95vw">
        <p class="text-h5 q-mx-md primary" style="">Entrar</p>
        <div class="row items-center justify-center q-px-sm q-pb-sm">
          <q-input
            v-model="email"
            label="Email"
            type="email"
            outlined
            style="width: 85vw"
          />
        </div>
        <div class="row items-center justify-center q-px-sm q-pb-sm">
          <q-input
            v-model="password"
            outlined
            :type="isPwd ? 'password' : 'text'"
            label="Senha"
            style="width: 85vw"
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
        </div>
        <div class="row items-center justify-between q-px-sm q-pt-sm">
          <q-btn
            class="text-grey"
            flat
            no-caps
            label="Esqueci minha senha"
            @click="ForgotPassword()"
          />
        </div>
        <div class="row items-center justify-center q-px-sm q-pt-md">
          <q-btn
            class="bg-primary text-white"
            standard
            no-caps
            label="Entrar"
            :disable="password.length < 6"
            style="width: 85vw"
            @click="SignIn()"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import WebService from 'src/services/WebService'

export default {
  name: 'SignIn',
  data () {
    return {
      isPwd: true,
      email: '',
      password: ''
    }
  },
  created () {
    this.ws = new WebService()
  },
  methods: {
    ForgotPassword () {
      this.$router.push({ name: 'forgot-password' })
    },
    async SignIn () {
      await this.ws.signIn(this.email, this.password).then(() => {
        this.$router.push({ name: 'home' })
      })
    }
  }
}
</script>

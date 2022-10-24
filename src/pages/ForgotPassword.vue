<template>
  <q-page>
    <!-- Desktop -->
    <div
      v-if="this.$q.platform.is.desktop"
      class="flex flex-center"
      style="height: 90vh"
    >
      <q-card flat bordered class="bg-grey-0" style="width: 30vw">
        <q-card-section>
          <p class="text-h5 q-pt-xl q-mx-md primary">Esqueci minha senha</p>
          <p class="q-mx-md q-mb-md text-grey">
            Informe seu E-mail para recuperar a senha
          </p>
        </q-card-section>

        <q-card-section>
          <div class="row items-center justify-center q-px-sm q-pb-sm">
            <q-input
              v-model="emailAddress"
              label="Email"
              outlined
              :rules="[(val) => !!val || '* Obrigatório']"
              type="email"
              lazy-rules
              @keyup.enter="Reset"
              style="width: 85vw"
            />
          </div>
        </q-card-section>
        <q-card-actions class="justify-between q-pa-lg">
          <q-btn
            class="bg-primary text-white full-width"
            standard
            @click="Reset"
            label="Redefinir"
            style="width: 45%"
          />
        </q-card-actions>
      </q-card>
    </div>
    <!-- Mobile -->
    <div v-if="this.$q.platform.is.mobile">
      <div class="col flex flex-center">
        <div class="col-10" style="width: 95vw; height: 70vh">
          <p class="text-h5 q-pt-xl q-mx-md primary">Esqueci minha senha</p>
          <p class="q-mx-md q-mb-xl text-grey">
            Informe seu E-mail para recuperar a senha
          </p>
          <div class="row items-center justify-center q-px-sm q-pb-sm">
            <q-input
              class=""
              v-model="emailAddress"
              label="E-mail"
              type="email"
              outlined
              :rules="[(val) => !!val || '* Obrigatório']"
              lazy-rules
              style="width: 85vw"
            />
          </div>
        </div>
        <div class="row items-center justify-center q-px-sm q-pt-lg">
          <q-btn
            class="bg-primary text-white"
            standard
            no-caps
            @click="Reset"
            label="Redefinir"
            style="width: 85vw"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'EsqueciSenha',
  data () {
    return {
      emailAddress: '',
      isPwd: true
    }
  },
  methods: {
    // async Reset () {
    //   const { data, error } = await supabase.auth.api.resetPasswordForEmail(
    //     this.emailAddress
    //   )
    //   console.log('Redefinição de senha - ', data)
    //   console.log('Erro redefinição de senha - ', error)
    // }
  }
}
</script>

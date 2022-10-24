/* eslint-disable */
import { Notify } from 'quasar'
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth'


export default class WebService {
    async showNotification (message, type) {
        await Notify.create({
            message,
            type,
            position: 'top'
        })
    }

    async signIn(email, password) {
        const auth = getAuth()
        await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
            const user = userCredential.user
            this.showNotification('Bem-vindo!', 'positive')
            localStorage.setItem('user', JSON.stringify(user))
            })
            .catch((error) => {
                // console.log('ERRO', error.code)
                if (error.code === 'auth/user-not-found') {
                    this.showNotification('Usuário não cadastrado! Entre em contato com o administrador', 'negative')
                } else {
                    this.showNotification('Email e/ou senha inválidos', 'negative')
                }
            })
    }

    async signOut () {
      const auth = getAuth()
      await signOut(auth)
        .then(() => {
          localStorage.clear()
        })
          .catch(() => {
            this.showNotification('Erro ao desconectar', 'negative')
            //   console.log(error)
        })
    }

}

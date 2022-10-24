import { boot } from 'quasar/wrappers'
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getAnalytics } from 'firebase/analytics'
import { getDatabase } from 'firebase/database'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyBGbJwKAHAiTX-crXRQnNzTFxqC9OqvV9U',
  authDomain: 'teste-sistema-de-vendas.firebaseapp.com',
  databaseURL: 'https://teste-sistema-de-vendas-default-rtdb.firebaseio.com',
  projectId: 'teste-sistema-de-vendas',
  storageBucket: 'teste-sistema-de-vendas.appspot.com',
  messagingSenderId: '842276438092',
  appId: '1:842276438092:web:8fed84df977ebeef0474e9',
  measurementId: 'G-6SB8EEE5MV'
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getDatabase(app)
const analytics = getAnalytics(app)
const storage = getStorage(app)

export default boot(({ app }) => {
  app.config.globalProperties.$firebase = app
  app.config.globalProperties.$auth = auth
  app.config.globalProperties.$db = db
  app.config.globalProperties.$analytics = analytics
  app.config.globalProperties.$storage = storage
})

export { app, analytics }

<template>
  <LangChangeButton />
  <div class="bg-login-page pa-12">

    <!-- ログイン -->
    <v-card class="mx-auto px-6 py-4" max-width="350">
      <v-card-title class="text-center">{{ t('login.title') }}</v-card-title>
      <v-form
        v-model="form"
        @submit.prevent="onLogin">
        <!-- フォーム -->
        <v-text-field
            v-model="userName"
            :readonly="isLoading"
            :label="t('login.username')"
            clearable />
        <v-text-field
            v-model="password"
            :readonly="isLoading"
            :label="t('login.password')"
            clearable />
        <!-- ボタン -->
        <CoreButton label="Login" type="submit" />
      </v-form>
    </v-card>
  </div>
  
  <!-- スナックバー -->
  <v-snackbar
    v-model="isSackbar" timeout="2000"
    location="top" transition="slide-y-reverse-transition" color="primary">
    {{ errorMessage }}
  </v-snackbar>
  <!-- api動作確認ボタン -->
  <!-- <CoreButton label="TEST API" @click="apiTest" /> -->
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import api from '@/api/api'
import CoreButton from '@/component/thing/CoreButton.vue';
import LangChangeButton from '@/component/thing/LangChangeButton.vue';

/** plugins */
const router = useRouter()
const { t, locale } = useI18n()

/** リアクティブデータの定義 */
const form = ref(false);
const isLoading = ref(false);
const isSackbar = ref(false);
const userName = ref(null);
const password = ref(null);
const errorMessage = ref(t('message.ERR-LOGIN-001'));

/** メソッドの定義 */
// ログインボタン押下時
const onLogin = () => {

  // ローディングを開始する。
  isLoading.value = true;

  // リクエストボディを作成する。
  const data = {
    'userName': userName.value,
    'password': password.value
  };

  // 認証
  if(userName.value === '123' && password.value === '456') {
        router.push({ name: 'contact' })

  // サーバー停止中
  } else if (!error.response) {

    errorMessage.value = t('message.ERR-API-001');
    
    // スナックバーを表示する。
    isSackbar.value = true;
    
  }

  // ローディングを終了する。
  isLoading.value = false;
};

// api通信動作確認用
const apiTest = async () => {

  try {
    const res = await api.apiTest(requestData);
    const { status, data, message } = res.data;

    if (status === 200) {
      console.log("Success:", data);
      text.value = message;
    } else if (status === 401) {
      console.error("Error:", message);
    }

  } catch (error) {
    console.error("Error:", error);
  }
}

</script>

<style>
.bg-login-page {
  background-image: url('@/assets/bg-img/bg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: calc(100vh - 48px); /* 画面全体を覆う */
}
</style>

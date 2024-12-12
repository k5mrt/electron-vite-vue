<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import { ref } from 'vue'

// ファイルパスを保存するリアクティブ変数
const filePath = ref<string | null>('No file selected')

// ファイル選択の処理
const selectFile = async () => {
  // `electronAPI`を使ってファイルパスを取得
  const result = await window.electronAPI.selectFile()
  filePath.value = result ? `Selected file: ${result}` : 'No file selected'
}
</script>

<template>
  <HelloWorld msg="Electron + Vite + Vue" />
  <div class="flex-center">
    Place static files into the <code>/public</code> folder
    <img style="width: 2.4em; margin-left: .4em;" src="/logo.svg" alt="Logo">
  </div>
  <div class="flex-center">
    <button @click="selectFile">Select a file</button>
    <p>{{ filePath }}</p>
  </div>
</template>

<style lang="scss">
.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

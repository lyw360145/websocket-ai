<template>
  <div class="welcome-message">
    <h1>我是DS，很高兴见到你！</h1>
    <p>我可以帮你写代码、读文件、写作各种创意内容，请把你的任务交给我吧~</p>
    <div class="input-container">
      <input v-model="userMessage" placeholder="请输入你的消息" class="custom-input" />
      <button @click="sendMessage" class="custom-button">发送消息</button>
    </div>
    <p v-if="step" class="message-display">你发送的消息是: {{ step }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const ws = new WebSocket('ws://localhost:3000');
ws.onopen = () => {
  console.log('xxxxx')
  // 每隔 30 秒发送一次心跳
  setInterval(() => {

    ws.send('ping');
  }, 30000);
};
const userMessage = ref('');
const messageSent = ref(false);
const step = ref('');
const sendMessage = () => {
  messageSent.value = true;
  ws.send(userMessage.value)


  ws.onmessage = (event) => {

    step.value = event.data;
  };


}

</script>

<style scoped>
.welcome-message {
  text-align: center;
  margin-top: 50px;
  font-family: Arial, sans-serif;
}

.input-container {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.custom-input {
  padding: 10px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 5px;
  outline: none;
  width: 300px;
  transition: border-color 0.3s ease;
}

.custom-input:focus {
  border-color: #007bff;
}

.custom-button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.custom-button:hover {
  background-color: #0056b3;
}

.message-display {
  margin-top: 20px;
  font-size: 18px;
  color: #333;
}
</style>
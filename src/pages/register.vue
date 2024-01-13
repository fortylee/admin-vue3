<script setup lang = "ts">
import { UserOutlined, InfoCircleOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons-vue'
import { ref } from 'vue';
import LoginLayout from '@/layouts/login-layout.vue'
const userName = ref<string>('');
const size = ref<string>('large')
</script>

<template>
  <login-layout>
    <div class="register">
      <a-divider>
        注册
      </a-divider>
      <!--账号输入框-->
      <a-input placeholder="userName : admin" :size="size">
        <template #prefix>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-icon-user"/>
          </svg>
        </template>
      </a-input>
      <!--密码输入框-->
      <a-input-password placeholder="passWord : admin" :size="size">
        <template #prefix>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-Password"/>
          </svg>
        </template>
        <template #iconRender="show">
          <EyeTwoTone v-if="show" />
          <EyeInvisibleOutlined v-else />
        </template>
      </a-input-password>
      <!--重复密码输入框-->
      <a-input-password placeholder="passWord : admin" :size="size">
        <template #prefix>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-Password"/>
          </svg>
        </template>
        <template #iconRender="show">
          <EyeTwoTone v-if="show" />
          <EyeInvisibleOutlined v-else />
        </template>
      </a-input-password>
      <div class="flex justify-between items-center">
        <a-button type="primary" :size="size" class="w-2/4">
          注册
        </a-button>
        <router-link to="/login" class="text-sm">
          使用已有账号登录
        </router-link>
      </div>
    </div>
  </login-layout>
</template>

<style scoped lang = "postcss">
a {
  text-decoration: none;
}
.register {
  @apply flex flex-col justify-between h-full;
}
</style>
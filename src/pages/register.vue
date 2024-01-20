<script setup lang = "ts">
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons-vue'
import { ref, onBeforeMount, nextTick } from 'vue'
import LoginLayout from '@/layouts/login-layout.vue'
const userName = ref<string>('');
const size = ref<string>('large')
import { reactive } from 'vue';
import axios from 'axios'

interface FormState {
  username: string;
  password: string;
  remember: boolean;
}

const formState = reactive<FormState>({
  username: '',
  password: '',
  remember: true,
});
const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};
const img = ref()

onBeforeMount(() => {
  axios.get('http://localhost:3000/register').then(
    (response) => {
      img.value = response.data
    }
  )
})
const clickha = () => {
  axios.get('http://localhost:3000/register').then(
    (response) => {
      img.value = response.data
    }
  )
}

</script>

<template>
  <login-layout>
    <div class="register">
      <a-divider>
        注册
      </a-divider>
      <a-form
        :model="formState"
        name="basic"
        autocomplete="off"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
      >
        <a-form-item
          name="username"
          :rules="[{ required: true, message: `账号不能为空！` }]"
        >
          <a-input placeholder="请输入账号" :size="size">
            <template #prefix>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-icon-user"/>
              </svg>
            </template>
          </a-input>
        </a-form-item>
        
        <a-form-item
          name="password"
          :rules="[{ required: true, message: `密码不能为空！` }]"
        >
          <a-input-password placeholder="请输入密码" :size="size">
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
        </a-form-item>
        
        <a-form-item
          name="password"
          :rules="[{ required: true, message: `密码不能为空！` }]"
        >
          <a-input-password placeholder="请再次输入密码" :size="size">
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
        </a-form-item>
        
        <a-form-item
          name="username"
          :rules="[{ required: true, message: `验证码不能为空！` }]"
        >
          <a-row justify="space-between" align="middle">
            <a-col :span="14">
              <a-input placeholder="请输入验证码" :size="size">
                <template #prefix>
                  <svg class="icon" aria-hidden="true" font-size="20px">
                    <use xlink:href="#icon-yanzhengma-"/>
                  </svg>
                </template>
              </a-input>
            </a-col>
            <a-col>
              <span @click="clickha" v-html="img"/>
            </a-col>
          </a-row>
        </a-form-item>
        <a-form-item>
          <a-row justify="space-between" align="middle">
            <a-col :span="15">
              <a-button type="primary" html-type="submit" class="w-4/6" :size="size">
                注册
              </a-button>
            </a-col>
            <a-col>
              <a-button type="link">
                <router-link to="/login" class="text-sm">
                  使用已有账号登录
                </router-link>
              </a-button>
            </a-col>
          </a-row>
        </a-form-item>
      </a-form>
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
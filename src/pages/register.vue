<script setup lang = "ts">
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons-vue'
import { ref, onBeforeMount } from 'vue'
import LoginLayout from '@/layouts/login-layout.vue'
import { reactive } from 'vue';
import axios from 'axios'
import type { Rule } from 'ant-design-vue/es/form';
import openNotification from '@/utils/notification.ts'

const size = ref<string>('large')
const captcha = ref<string>('')

onBeforeMount(() => {
  axios.get('http://localhost:3000/register').then(
    ({ data }) => {
      captcha.value = data
    }
  )
})

const captchaHandler = () => {
  axios.get('http://localhost:3000/register').then(
    ({ data }) => {
      captcha.value = data
    }
  )
}

// 表单数据
interface FormState {
  username: string;
  passwordOne: string;
  passwordTwo: string;
  verify: string;
}
const formState = reactive<FormState>({
  username: '',
  passwordOne: '',
  passwordTwo: '',
  verify: '',
});

// 校验规则
const checkPassWord = async (_rule: Rule, value: string) => {
  if (!value) {
    return Promise.reject(`密码不能为空！`)
  }
  if (value !== formState.passwordOne) {
    return Promise.reject(`重复密码不一致！`)
  }
}
const rules: Record<string, Rule[]> = {
  username: [
    { required: true, message: `账号不能为空！` },
    { min: 1, max: 10, message: `请输入账号1～10位` }],
  passwordOne: [{ required: true, message: `密码不能为空！` },
    { min: 1, max: 10, message: `请输入密码3～15位` }],
  passwordTwo: [{ validator: checkPassWord }],
  verify: [{ required: true, message: `验证码不能为空！` }]
}

// 表单校验通过
const onFinish = () => {
  axios.post('http://localhost:3000/register', formState).then((code) => {
    if (code.data.status === 200) {
      openNotification('success', code.data.message)
      formState.username = formState.passwordOne = formState.passwordTwo = formState.verify = ''
    } else {
      openNotification('error', code.data.message)
    }
  }).catch((err) => openNotification('error', err.error))
};

// 表单校验不通过
const onFinishFailed = () => {
  openNotification('error', `请正确填写注册资料！`)
};
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
        :rules="rules"
        autocomplete="off"
        @finish="onFinish"
        @finish-failed="onFinishFailed"
      >
        <!--账号-->
        <a-form-item name="username">
          <a-input v-model:value="formState.username" placeholder="请输入账号" :size="size">
            <template #prefix>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-icon-user"/>
              </svg>
            </template>
          </a-input>
        </a-form-item>
        <!--密码-->
        <a-form-item name="passwordOne">
          <a-input-password v-model:value="formState.passwordOne" placeholder="请输入密码" :size="size">
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
        <!--重复密码-->
        <a-form-item name="passwordTwo">
          <a-input-password v-model:value="formState.passwordTwo" placeholder="请再次输入密码" :size="size">
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
        <!--图形验证码-->
        <a-form-item name="verify">
          <a-row justify="space-between">
            <a-col :span="17">
              <a-input v-model:value="formState.verify" placeholder="请输入验证码" :size="size">
                <template #prefix>
                  <svg class="icon" aria-hidden="true" font-size="22px">
                    <use xlink:href="#icon-yanzhengma-"/>
                  </svg>
                </template>
              </a-input>
            </a-col>
            <a-col class="flex justify-center cursor-pointer" @click="captchaHandler" v-html="captcha"/>
          </a-row>
        </a-form-item>
        <!--功能区域-->
        <a-form-item>
          <a-row justify="space-between" align="middle">
            <a-col :span="15">
              <a-button type="primary" html-type="submit" class="w-5/6" :size="size">
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
<script setup lang = "ts">
import {
  EyeTwoTone,
  EyeInvisibleOutlined,
  TwitterCircleFilled,
  GithubFilled,
  AlipayCircleFilled
} from '@ant-design/icons-vue';
import { onBeforeMount, reactive, ref } from 'vue'
import openNotification from '@/utils/notification.ts'
import router from '@/router'
import axios from 'axios'
import LoginLayout from '@/layouts/login-layout.vue'

const size = ref<string>('large')
const activeKey = ref<string>('1')
const checked = ref<boolean>(false)
const loading = ref<boolean>(false)


const img = ref()

onBeforeMount(() => {
  axios.get('http://localhost:3000/register').then(
    (response) => {
      img.value = response.data
    }
  )
})
const forgot = () => {
  router.push('/forgot')
}

// 清空输入框
const changeHandler = () => {
  formState.userName = formState.passWord = phone.value = verify.value = ''
}

// 手机号码登录
const phone = ref<string>('')
const verify = ref<string>('')
const disabled = ref<boolean>(false)
const verifyTime = ref<number>(60)

const clickHandler = () => {
  if (phone.value !== ''){
    openNotification('success', `获取成功，请使用暗号：9527`)
    disabled.value = true
    const reduce = () => {
      if (verifyTime.value === 0) {
        clearInterval(interval)
        disabled.value = false
        verifyTime.value = 60
      } else {
        verifyTime.value --
      }
    }
    const interval = setInterval(reduce, 1000)
  }else {
    openNotification('info', '请先输入手机号码！')
  }
}

// 账号密码登录
interface FormState {
  userName: string;
  passWord: string;
}

const formState = reactive<FormState>({
  userName: '',
  passWord: ''
})


const submit = () => {
  // todo 待完善
  if (activeKey.value === '1'){
    if (formState.userName != '' && formState.passWord != ''){
      loading.value = true
      axios.post('http://localhost:3000/login', formState).then(
        (response) => {
          console.log(response)
        }
      ).catch().finally()
    } else if (formState.userName === ''){
      openNotification('error','请输入账号！')
    } else if (formState.passWord === '') {
      openNotification('error', '请输入密码！')
    }
  }
  else if (activeKey.value === '2'){
    if (phone.value !== '' && verify.value === '9527' ) {
      router.push('home')
      openNotification('success', '登录成功！')
    } else {
      openNotification('error', '手机号为空或验证码错误，请检查！')
    }
  }
}
</script>

<template>
  <login-layout>
    <a-tabs v-model:activeKey="activeKey" centered @change="changeHandler">
      <!--登录方法1：账号与密码-->
      <a-tab-pane key="1" tab="账号密码登录">
        <a-space direction="vertical" class="w-full" :size="size">
          <a-form
            :model="formState"
            name="basic"
            autocomplete="off"
          >
            <!--账号-->
            <a-form-item
              name="userName"
              :rules="[{ required: true, message: '请输入账号!' }]"
            >
              <a-input v-model:value="formState.userName" placeholder="userName : admin" :size="size">
                <template #prefix>
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-icon-user"/>
                  </svg>
                </template>
              </a-input>
            </a-form-item>
            <!--密码-->
            <a-form-item
              name="password"
              :rules="[{ required: true, message: '请输入密码!' }]"
            >
              <a-input-password v-model:value="formState.passWord" placeholder="passWord : admin" :size="size">
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
            <!--验证码-->
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
                  <span v-html="img"></span>
                </a-col>
              </a-row>
            </a-form-item>
          </a-form>
        </a-space>
      </a-tab-pane>
      <!--登录方法2：手机号码-->
      <a-tab-pane key="2" tab="手机号码登录">
        <a-space direction="vertical" class="w-full" :size="size">
          <!--手机号-->
          <a-input v-model:value="phone" placeholder="phoneNumber" :size="size">
            <template #prefix>
              <svg class="icon" aria-hidden="true" font-size="20px">
                <use xlink:href="#icon-phone_iphone" />
              </svg>
            </template>
          </a-input>
          <!--验证码-->
          <div class="flex justify-between">
            <a-input v-model:value="verify" placeholder="verify" :size="size" class="w-8/12	 mr-1 ">
              <template #prefix>
                <svg class="icon" aria-hidden="true" font-size="20px">
                  <use xlink:href="#icon-yanzhengma-"/>
                </svg>
              </template>
            </a-input>
            <a-button class="w-4/12" :size="size" :disabled="disabled" @click="clickHandler">
              <span>{{ disabled ? `${verifyTime} s` : `获取验证码` }}</span>
            </a-button>
          </div>
        </a-space>
      </a-tab-pane>
    </a-tabs>
    <div class="flex justify-between w-full py-5 select-none">
      <a-checkbox v-model:checked="checked" class="flex items-center text-sm">
        自动登录
      </a-checkbox>
      <a-button type="link" href="#" class="text-sm pr-0" @click="forgot">
        忘记密码
      </a-button>
    </div>
    <!--登录按钮-->
    <div>
      <a-button type="primary" :size="size" block :loading="loading" @click="submit">
        登录
      </a-button>
    </div>
    <div class="flex justify-between mt-3 items-center">
      <span class="text-sm">
        其他登录方式
      </span>
      <div class="grow ">
        <a-button type="link" class="text-gray-500 pr-1 pt-0" >
          <TwitterCircleFilled class="text-2xl"/>
        </a-button>
        <a-button type="link" class="text-gray-500 pr-1 " >
          <AlipayCircleFilled class="text-2xl"/>
        </a-button>
        <a-button type="link" class="text-gray-500" >
          <GithubFilled class="text-2xl"/>
        </a-button>
      </div>
      <a-button type="link" href="#" class="text-sm pr-0">
        <router-link to="/register">
          注册账号
        </router-link>
      </a-button>
    </div>
  </login-layout>
</template>

<style scoped lang = "postcss">
a {
  text-decoration: none;
}
</style>

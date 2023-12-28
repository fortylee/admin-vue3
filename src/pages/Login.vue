<script setup lang = "ts">
import {
  EyeTwoTone,
  EyeInvisibleOutlined,
  TwitterCircleFilled,
  CustomerServiceOutlined,
  GithubFilled,
  AlipayCircleFilled
} from '@ant-design/icons-vue';
import { reactive, ref } from 'vue';
import openNotification from '@/utils/notification.ts'
import router from '@/router'
import axios from 'axios'

const size = ref<string>('large')
const activeKey = ref<string>('1')
const checked = ref<boolean>(false)
const loading = ref<boolean>(false)

// 清空输入框
const changeHandler = () => {
  formState.userName = ''
  formState.passWord = ''
  phone.value = ''
  verify.value = ''
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
  <div class="flex justify-center h-screen w-full">
    <div class="container">
      <!--头部区域-->
      <div class="header">
        <h1>《滕王阁序》</h1>
        <p>老当益壮，宁移白首之心？穷且益坚，不坠青云之志。</p>
        <p>东隅已逝，桑榆非晚。</p>
      </div>
      <!--主要区域-->
      <div class="main">
        <a-tabs v-model:activeKey="activeKey" centered @change="changeHandler">
          <!--登录方法1：账号密码-->
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
                  class="mb-0"
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
              </a-form>
            </a-space>
          </a-tab-pane>
          <!--登录方法2：手机号码-->
          <a-tab-pane key="2" tab="手机号码登录">
            <a-space direction="vertical" class="w-full" :size="size">
              <!--手机号-->
              <a-input v-model:value="phone" placeholder="phoneNumber" :size="size">
                <template #prefix>
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-phone_iphone" />
                  </svg>
                </template>
              </a-input>
              <!--验证码-->
              <div class="flex justify-between">
                <a-input v-model:value="verify" placeholder="verify" :size="size" class="w-8/12	 mr-1 ">
                  <template #prefix>
                    <svg class="icon" aria-hidden="true">
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
          <a-button type="link" href="#" class="text-sm pr-0">
            忘记密码
          </a-button>
        </div>
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
            注册账号
          </a-button>
        </div>
      </div>
      <!--页脚区域-->
      <div class="footer">
        <div class="flex justify-center mb-2">
          <a-button type="link" href="#">
            GitHub
          </a-button>
          <a-button type="link" href="#">
            GitHub
          </a-button>
          <a-button type="link" href="#">
            GitHub
          </a-button>
        </div>
        <div class="text-center">
          Copyright © GitHub
        </div>
      </div>
    </div>
    <!--浮点按钮-->
    <a-float-button-group trigger="hover" type="primary">
      <template #icon>
        <CustomerServiceOutlined />
      </template>
      <a-float-button href="#">
        <template #icon>
          <GithubFilled />
        </template>
      </a-float-button>
    </a-float-button-group>
  </div>
</template>

<style scoped lang = "postcss">
.container {
  @apply flex flex-col justify-center w-11/12 sm:w-96 md:w-96 lg:w-96 xl:w-96 2xl:w-96;
}
.header {
  @apply text-center italic h-1/6;
}
.main {
  @apply h-4/6;
}
.footer {
  @apply flex flex-col text-neutral-400 text-sm;
}
</style>

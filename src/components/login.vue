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

const size = ref<string>('large')
const activeKey = ref<string>('1')
const checked = ref<boolean>(false)

const changHandle = (key: string) => activeKey.value = key
const disabled = ref<boolean>(false)
const time = ref<number>(60)

// Log in using your phone
const phone = ref<string>('')
const verify = ref<string>('')

// Log in with an account
interface FormState {
  username: string
  password: string
}

const formState = reactive<FormState>({
  username: '',
  password: ''
})

const clickHandler = () => {
  if (phone.value !== ''){
    openNotification('success', `获取成功，请使用暗号：9527`)
    disabled.value = true
    const reduce = () => {
      if (time.value === 0) {
        clearInterval(interval)
        disabled.value = false
        time.value = 60
      } else {
        time.value --
      }
    }
    const interval = setInterval(reduce, 1000)
  }else {
    openNotification('info', '请先输入手机号码！')
  }
}
const submit = () => {
  if (activeKey.value === '1'){
    if (formState.username === 'admin' && formState.password === 'admin'){
      router.push('home')
      openNotification('success', '登录成功！')
    } else {
      openNotification('error', '账号或密码错误，请检查！')
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
      <!--header area-->
      <div class="header">
        <h1>《滕王阁序》</h1>
        <p>老当益壮，宁移白首之心？穷且益坚，不坠青云之志。</p>
        <p>东隅已逝，桑榆非晚。</p>
      </div>
      <!--main area-->
      <div class="main">
        <a-tabs v-model:activeKey="activeKey" centered @change="changHandle">
          <!--login method 1-->
          <a-tab-pane key="1" tab="账号密码登录">
            <a-space direction="vertical" class="w-full" :size="size">
              <a-form
                :model="formState"
                name="basic"
                autocomplete="off"
              >
                <!--form - username-->
                <a-form-item
                  name="username"
                  :rules="[{ required: true, message: '请输入账号!' }]"
                >
                  <a-input v-model:value="formState.username" placeholder="username : admin" :size="size">
                    <template #prefix>
                      <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-icon-user"/>
                      </svg>
                    </template>
                  </a-input>
                </a-form-item>
                <!--form - password-->
                <a-form-item
                  class="mb-0"
                  name="password"
                  :rules="[{ required: true, message: '请输入密码!' }]"
                >
                  <a-input-password v-model:value="formState.password" placeholder="passwrod : admin" :size="size">
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
          <!--login method 2-->
          <a-tab-pane key="2" tab="手机号码登录">
            <a-space direction="vertical" class="w-full" :size="size">
              <!--phoneNumber-->
              <a-input v-model:value="phone" placeholder="phoneNumber" :size="size">
                <template #prefix>
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-phone_iphone" />
                  </svg>
                </template>
              </a-input>
              <!--verify-->
              <div class="flex justify-between">
                <a-input v-model:value="verify" placeholder="verify" :size="size" class="w-8/12	 mr-1 ">
                  <template #prefix>
                    <svg class="icon" aria-hidden="true">
                      <use xlink:href="#icon-yanzhengma-"/>
                    </svg>
                  </template>
                </a-input>
                <a-button class="w-4/12" :size="size" :disabled="disabled" @click="clickHandler">
                  <span>{{ disabled ? `${time} s` : `获取验证码` }}</span>
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
          <a-button type="primary" size="large" block @click="submit">
            登录
          </a-button>
        </div>
        <div class="flex justify-between mt-3 items-center">
          <span class="text-sm">其他登录方式</span>
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
      <!--footer area-->
      <div class="footer">
        <div class="flex justify-center mb-2">
          <a-button type="link" href="#">
            GitHub
          </a-button>
          <a-button type="link" href="#">
            GitHu
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
    <!--FloatButton-->
    <a-float-button-group trigger="hover" type="primary">
      <template #icon>
        <CustomerServiceOutlined />
      </template>
      <a-float-button href="https://github.com/fortylee/admin-vue3" target="_blank">
        <template #icon>
          <GithubFilled />
        </template>
      </a-float-button>
    </a-float-button-group>
  </div>
</template>

<style scoped lang = "postcss">
.container {
  @apply flex flex-col justify-between  w-11/12 sm:w-96 md:w-96 lg:w-96 xl:w-96 2xl:w-96;
}
.header {
  @apply text-center italic mt-24;
}
.footer {
  @apply flex flex-col mb-4 text-neutral-400 text-sm;
}
</style>

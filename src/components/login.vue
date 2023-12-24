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


import router from '../router'
const activeKey = ref('1')
const phone = ref('')
const verify = ref('')
const size = ref('large')



function tabClick() {
  console.log("被点击了")
}
function changHandle(key: string) {
  console.log(key)
}


// form data type
interface FormState {
  username: string;
  password: string;
}

const formState = reactive<FormState>({
  username: '',
  password: '',
});
const onFinish = (values: FormState) => {
  if (values.username === 'admin' && values.password === 'admin' ){
    router.push('home')
  } else {
    console.log(values.username)
    console.log(values.password)
    openNotification('error', '账号或密码错误，请检查！')
  }
};

const submit = () => {
  console.log(formState)
}

</script>

<template>
  <div class="flex justify-center h-screen w-full">
    <div class="container">
      <!--title area-->
      <div class="header">
        <h1>《滕王阁序》</h1>
        <p>
          老当益壮，宁移白首之心？穷且益坚，不坠青云之志。
        </p>
        <p>
          东隅已逝，桑榆非晚。
        </p>
      </div>
      <!--main area-->
      <div class="main">
        <div>
          <a-tabs v-model:activeKey="activeKey" centered @tab-click="tabClick" @change="changHandle">
            <!--login method 1-->
            <a-tab-pane key="1" tab="账号密码登录">
              <a-space direction="vertical" class="w-full" :size="size">
                <a-form
                  :model="formState"
                  name="basic"
                  autocomplete="off"
                  @finish="onFinish"
                >
                  <!--form - username-->
                  <a-form-item
                    name="username"
                    :rules="[{ required: true, message: '请输入账号!' }]"
                  >
                    <a-input v-model:value="formState.username" placeholder="usernames : admin" :size="size">
                      <template #prefix>
                        <svg class="icon" aria-hidden="true">
                          <use xlink:href="#icon-icon-user"/>
                        </svg>
                      </template>
                    </a-input>
                  </a-form-item>
                  <!--form - password-->
                  <a-form-item
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
                  <a-button class="w-4/12" :size="size">
                    获取验证码
                  </a-button>
                </div>
              </a-space>
            </a-tab-pane>
          </a-tabs>
        </div>
        <div class="flex justify-between w-full py-5 select-none">
          <a-checkbox v-model:checked="checked" class="flex items-center text-sm">
            记住密码
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
      <!--foot area-->
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

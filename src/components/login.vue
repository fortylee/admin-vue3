<script setup lang = "ts">

import {  EyeTwoTone, EyeInvisibleOutlined,
  CustomerServiceOutlined,GithubFilled,QqCircleFilled,AlipayCircleFilled } from '@ant-design/icons-vue';
import { h } from 'vue';
import { ref } from 'vue'
const activeKey = ref('1')
const userName = ref('')
const passWord = ref('')

function tabClick() {
  console.log("被点击了")
}
function changHandle(key: string) {
  console.log(key)
}
const size = ref('large')
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
                <!--userName-->
                <a-input v-model:value="userName" placeholder="userName : admin" :size="size">
                  <template #prefix>
                    <svg class="icon" aria-hidden="true">
                      <use xlink:href="#icon-icon-user"/>
                    </svg>
                  </template>
                </a-input>
                <!--passWord-->
                <a-input-password v-model:value="passWord" placeholder="passWord : admin" :size="size">
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
              </a-space>
            </a-tab-pane>
            <!--login method 2-->
            <a-tab-pane key="2" tab="手机号码登录">
              <a-space direction="vertical" class="w-full" :size="size">
                <!--phoneNumber-->
                <a-input v-model:value="userName" placeholder="phoneNumber" :size="size">
                  <template #prefix>
                    <svg class="icon" aria-hidden="true">
                      <use xlink:href="#icon-phone_iphone" />
                    </svg>
                  </template>
                </a-input>
                <!--verify-->
                <div class="flex justify-between">
                  <a-input v-model:value="userName" placeholder="verify" :size="size" class="w-8/12	 mr-1 ">
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
          <a-button type="primary" size="large" block>
            登录
          </a-button>
        </div>
        <div class="flex justify-between mt-3 items-center">
          <span class="text-sm flex">其他登录方式</span>
          <a-space warp>
            <a-button shape="circle" :icon="h(GithubFilled)" />
          </a-space>
          <a-space warp>
            <a-button shape="circle" :icon="h(QqCircleFilled)" />
          </a-space>
          <a-space warp>
            <a-button shape="circle" :icon="h(AlipayCircleFilled)" />
          </a-space>
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
  @apply flex flex-col justify-between w-11/12 sm:w-96 md:w-96 lg:w-96 xl:w-96 2xl:w-96;
}
.header {
  @apply text-center mt-32 italic;
}
.footer {
  @apply flex flex-col mb-4 text-neutral-400 text-sm;
}
</style>

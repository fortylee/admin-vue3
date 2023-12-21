<script setup lang = "ts">

import { IdcardTwoTone, LockTwoTone, EyeTwoTone, EyeInvisibleOutlined, PhoneTwoTone, MailTwoTone, LikeFilled } from '@ant-design/icons-vue';

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
    <div class="flex flex-col  ">
      <!--main area-->
      <div class="main w-80 py-28">
        <!--title area-->
        <div class="text-center mb-20">
          <h1>title area - 标题</h1>
        </div>
        <div>
          <a-tabs v-model:activeKey="activeKey" centered @tab-click="tabClick" @change="changHandle">
            <!--login method 1-->
            <a-tab-pane key="1" tab="账号密码登录">
              <a-space direction="vertical" class="w-full" :size="size">
                <!--userName-->
                <a-input v-model:value="userName" placeholder="userName : admin" :size="size">
                  <template #prefix>
                    <IdcardTwoTone />
                  </template>
                </a-input>
                <!--passWord-->
                <a-input-password v-model:value="passWord" placeholder="passWord : admin" :size="size">
                  <template #prefix>
                    <LockTwoTone />
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
                    <PhoneTwoTone />
                  </template>
                </a-input>
                <!--verify-->
                <div class="flex justify-between">
                  <a-input v-model:value="userName" placeholder="verify" :size="size" class="w-8/12	 mr-1 ">
                    <template #prefix>
                      <MailTwoTone />
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
          <a>icon</a>
          <a>icon</a>
          <a>icon</a>
          <a-button type="link" href="#" class="text-sm pr-0">
            注册账号
          </a-button>
        </div>
      </div>
      <!--foot area-->
      <div class="footer mt-44 flex flex-col ">
        <div class="mb-2 flex justify-center text-slate-400	">
          <span class="mr-5">帮助</span>
          <span class="mr-5">隐私</span>
          <span class="mr-5">条款</span>
        </div>
        <div class=" flex justify-center text-slate-400	">
          Copyright © 2020 苏大强科技有限公司
        </div>
      </div>
    </div>
    <a-float-button type="primary" :style="{ right: '94px'}">
      <template #icon>
        <LikeFilled />
      </template>
    </a-float-button>
  </div>
</template>

<style scoped lang="postcss">

</style>

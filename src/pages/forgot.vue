<script setup lang="ts">

import LoginLayout from '@/layouts/login-layout.vue'
import router from '@/router'
import { ref } from 'vue'
const size = ref('large')
const disabled = ref(true)
const current = ref(0)
const activeKey = ref('1')
const clickChange =() => {
  disabled.value =false
  current.value = 1
  activeKey.value = '2'
}
const wanc = () => {
  current.value = 2
  activeKey.value = '3'
}
</script>

<template>
  <login-layout>
    <div>
      <a-page-header
        title="返回登录"
        sub-title=""
        @back="() => router.push('/login')"
      />
      <a-steps
        :current="current"
        size="small"
        :items="[
          {
            title: '验证账号',
          },
          {
            title: '重置密码',
          },
          {
            title: '完成',
          },
        ]"
      />
      <a-tabs v-model:activeKey="activeKey">
        <!--第一步-->
        <a-tab-pane key="1" >
          <a-row align="middle" justify="space-between" class="my-8">
            <a-col :span="19">
              <a-input :size="size" placeholder="请输入账号"/>
            </a-col>
            <a-col>
              <a-button :size="size" @click="clickChange">
                验证
              </a-button>
            </a-col>
          </a-row>
          <a-button type="primary" class="w-full" :size="size" :disabled="disabled">
            下一步
          </a-button>
        </a-tab-pane>
        <!--第二步-->
        <a-tab-pane key="2" force-render>
          <a-input :size="size" placeholder="请输入密码"/>
          <a-input :size="size" placeholder="请再次输入密码" class="my-8"/>
          <a-button type="primary" class="w-full" :size="size" @click="wanc">完成</a-button>
        </a-tab-pane>
        <!--第三步-->
        <a-tab-pane key="3">
          <div class="flex flex-col">
            <a-progress type="circle" :percent="100" class="text-center" />
            <span class="text-center my-8">恭喜您，完成密码修改</span>
            <router-link to="/login">
              <a-button type="primary" :size="size" class="w-full">
                完成
              </a-button>
            </router-link>
          </div>
        </a-tab-pane>
      </a-tabs>
    </div>
  </login-layout>
</template>

<style scoped lang="postcss">

</style>
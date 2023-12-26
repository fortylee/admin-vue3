<script setup lang = "ts">
import { AppstoreOutlined, MenuUnfoldOutlined, MenuFoldOutlined, GithubFilled } from '@ant-design/icons-vue';
import { ref } from 'vue'
import router from '@/router'
import openNotification from '@/utils/notification.ts'

const collapsed = ref<boolean>(false)
const logout = () => {
  router.push('login')
  openNotification('success', '已退出登录！')
}

</script>

<template>
  <a-layout>
    <!--侧边栏区域-->
    <a-layout-sider v-model:collapsed="collapsed" class="h-screen">
      <!--侧边栏顶部-->
      <div class="text-gray-50 flex justify-center text-2xl p-4">
        <GithubFilled/>
        <h1 v-if="!collapsed" class="text-xl pl-4">
          admin-vue3
        </h1>
      </div>
      <!--侧边栏菜单-->
      <a-menu theme="dark" mode="inline">
        <a-sub-menu key="home">
          <template #title>
            <span>
              <AppstoreOutlined />
              <span>Home</span>
            </span>
          </template>
          <a-menu-item key="t">
            个人中心
          </a-menu-item>
          <a-menu-item key="0">
            修改密码
          </a-menu-item>
        </a-sub-menu>
        <a-menu-item key="1">
          <AppstoreOutlined />
          <span>壹</span>
        </a-menu-item>
        <a-menu-item key="2">
          <AppstoreOutlined />
          <span>贰</span>
        </a-menu-item>
        <a-menu-item key="3">
          <AppstoreOutlined />
          <span>叁</span>
        </a-menu-item>
        <a-menu-item key="4">
          <AppstoreOutlined />
          <span>肆</span>
        </a-menu-item>
        <a-menu-item key="5">
          <AppstoreOutlined />
          <span>伍</span>
        </a-menu-item>
        <a-menu-item key="6">
          <AppstoreOutlined />
          <span>陆</span>
        </a-menu-item>
        <a-menu-item key="7">
          <AppstoreOutlined />
          <span>柒</span>
        </a-menu-item>
        <a-menu-item key="8">
          <AppstoreOutlined />
          <span>捌</span>
        </a-menu-item>
        <a-menu-item key="9">
          <AppstoreOutlined />
          <span>玖</span>
        </a-menu-item>
        <a-menu-item key="10">
          <AppstoreOutlined />
          <span>拾</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <!--主要区域-顶部-->
      <a-layout-header style="background-color: white" class="text-xl flex items-center justify-between">
        <menu-fold-outlined v-if="collapsed" @click="() =>(collapsed = !collapsed)"/>
        <menu-unfold-outlined v-else @click="() =>(collapsed = !collapsed)"/>
        <a-dropdown>
          <div class="hover:bg-gray-50 cursor-pointer">
            <a-avatar>
              <template #icon>
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-icon-user"/>
                </svg>
              </template>
            </a-avatar>
            <span class="ml-2">admin</span>
          </div>
          <template #overlay>
            <a-menu>
              <a-menu-item>
                <a-button type="primary">
                  个人中心
                </a-button>
              </a-menu-item>
              <a-menu-item>
                <a-button type="primary">
                  修改密码
                </a-button>
              </a-menu-item>
              <a-menu-item>
                <a-button type="primary" danger @click="logout">
                  退出登录
                </a-button>
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </a-layout-header>
      <!--主要区域-内容-->
      <a-layout-content class="text-2xl">
        <slot/>
      </a-layout-content>
      <!--主要区域-页脚-->
      <a-layout-footer>
        页脚
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<style scoped lang = "postcss">

</style>
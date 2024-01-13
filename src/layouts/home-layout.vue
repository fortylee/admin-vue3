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
// const changeHandler = (key:string) => {
//   router.push(key)
// }
const slotName = ref<string>('')

function changeTab (key:string) {
  console.log(key)
  slotName.value = key
  // router.push(key)
}
import { ref } from 'vue';
const panes = ref<{ title: string; content: string; key: string; closable?: boolean }[]>([
  { title: 'Tab 1', content: 'Content of Tab 1', key: '1' },
  { title: 'Tab 2', content: 'Content of Tab 2', key: '2' },
  { title: 'Tab 3', content: 'Content of Tab 3', key: '3', closable: false },
]);

const activeKey = ref(panes.value[0].key);

const newTabIndex = ref(0);

const add = () => {
  activeKey.value = `newTab${++newTabIndex.value}`;
  panes.value.push({ title: 'New Tab', content: 'Content of new Tab', key: activeKey.value });
};

const remove = (targetKey: string) => {
  let lastIndex = 0;
  panes.value.forEach((pane, i) => {
    if (pane.key === targetKey) {
      lastIndex = i - 1;
    }
  });
  panes.value = panes.value.filter(pane => pane.key !== targetKey);
  if (panes.value.length && activeKey.value === targetKey) {
    if (lastIndex >= 0) {
      activeKey.value = panes.value[lastIndex].key;
    } else {
      activeKey.value = panes.value[0].key;
    }
  }
};

const onEdit = (targetKey: string | MouseEvent, action: string) => {
  if (action === 'add') {
    add();
  } else {
    remove(targetKey as string);
  }
};
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
        <a-sub-menu key="home" @click="clickMenu">
          <template #title>
            <span>
              <AppstoreOutlined />
              <span>工作台</span>
            </span>
          </template>
          <a-menu-item key="t">
            个人中心
          </a-menu-item>
          <a-menu-item key="0">
            修改密码
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="1">
          <template #title>
            <span>
              <AppstoreOutlined />
              <span>权限管理</span>
            </span>
          </template>
          <a-menu-item key="4">
            账号管理
          </a-menu-item>
          <a-menu-item key="6">
            权限组管理
          </a-menu-item>
          <a-menu-item key="9">
            权限管理
          </a-menu-item>
        </a-sub-menu>
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
      <a-layout-content class="text-2xl" >
        <!--tab标签-->
        <div style="background-color:#ececec ">
          <a-tabs v-model:activeKey="activeKey" type="editable-card" @edit="onEdit">
            <a-tab-pane v-for="pane in panes" :key="pane.key" :tab="pane.title" :closable="pane.closable">
              {{ pane.content }}
            </a-tab-pane>
          </a-tabs>
        </div>
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
<script setup lang = "ts">
import { CustomerServiceOutlined, GithubFilled } from '@ant-design/icons-vue'
</script>

<template>
  <div class="flex justify-center h-screen w-full">
    <div class="container">
      <!--头部区域-->
      <div class="header">
        <div>
          <h1>《滕王阁序》</h1>
          <p>老当益壮，宁移白首之心？穷且益坚，不坠青云之志。</p>
          <p>东隅已逝，桑榆非晚。</p>
        </div>
      </div>
      <!--主要区域-->
      <div class="main">
        <slot/>
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
  </div>
  <!--浮动按钮-->
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
</template>

<style scoped lang = "postcss">
.container {
  @apply flex flex-col justify-between w-11/12 sm:w-96 md:w-96 lg:w-96 xl:w-96 2xl:w-96;
}
.header {
  @apply flex flex-col justify-end text-center italic h-1/3;
}
.main {
  @apply h-1/3;
}
.footer {
  @apply flex flex-col justify-end text-neutral-400 text-sm h-1/3;
}
</style>
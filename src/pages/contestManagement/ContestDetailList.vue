<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>竞赛管理</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/contestManage/list' }"
        >竞赛列表</el-breadcrumb-item
      >
      <el-breadcrumb-item>{{ $route.params.region }}</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 列表区域 -->
    <ProblemList :region="$route.params.region" />
  </div>
</template>

<script>
import ProblemList from "@/components/InternalProblemList.vue";
export default {
  components: {
    ProblemList,
  },
};
</script>

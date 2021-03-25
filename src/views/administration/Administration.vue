<template>
  <div>
    <a-table :columns="columns" :data-source="dataSource" rowKey="userID">
      <template #action="{ record }">
        <template v-if="record.type !== 'common'">
          <a @click="onSetting(record)">设置权限</a>
          <a-divider type="vertical" />
        </template>
        <a-popconfirm
          v-if="dataSource.length"
          title="是否要删除该用户?"
          @confirm="onDelete(record.userID)"
        >
          <a>删除</a>
        </a-popconfirm>
      </template>
    </a-table>
    <a-drawer
      title="设置权限"
      placement="right"
      :closable="false"
      v-model:visible="visibleDrawerComp"
      :after-visible-change="afterVisibleChange"
      width="50%"
    >
      <a-tabs v-model:activeKey="activeTabsKey">
        <a-tab-pane key="1" tab="角色菜单">
          <a-tree
            checkable
            :tree-data="treeData"
            v-model:expandedKeys="expandedKeys"
            v-model:selectedKeys="selectedKeys"
            v-model:checkedKeys="checkedKeys"
          >
            <template #title0010><span style="color: #1890ff">sss</span></template>
          </a-tree>
        </a-tab-pane>
        <a-tab-pane key="2" tab="角色api" force-render>Content of Tab Pane 2</a-tab-pane>
      </a-tabs>
    </a-drawer>
  </div>
</template>
<script>
import { SmileOutlined, DownOutlined } from "@ant-design/icons-vue";
import { defineComponent, reactive, ref, toRefs } from "vue";

export default defineComponent({
  setup() {
    const columns = [
      {
        title: "用户ID",
        dataIndex: "userID",
        key: "userID",
      },
      {
        title: "用户名称",
        dataIndex: "userName",
        key: "userName",
      },
      {
        title: "Action",
        key: "action",
        slots: {
          customRender: "action",
        },
      },
    ];
    const dataSource = ref([
      {
        userID: "id_1",
        userName: "超级管理员",
        type: "admin",

        address: "New York No. 1 Lake Park",
      },
      {
        userID: "id_2",
        userName: "普通用户11",
        type: "common",
      },
      {
        userID: "id_3",
        userName: "普通用户22",
        type: "common",
      },
    ]);

    const treeData = [
      {
        title: "parent 1",
        key: "0-0",
        children: [
          {
            title: "parent 1-0",
            key: "0-0-0",
            children: [
              {
                title: "leaf",
                key: "0-0-0-0",
              },
              {
                title: "leaf",
                key: "0-0-0-1",
              },
            ],
          },
          {
            title: "parent 1-1",
            key: "0-0-1",
            children: [
              {
                key: "0-0-1-0",
                slots: {
                  title: "title0010",
                },
              },
            ],
          },
        ],
      },
    ];

    const data = reactive({
      visibleDrawerComp: false, // 抽屉组件 - 默认不显示
      activeTabsKey: "1",
    });

    // 点击删除
    const onDelete = (userID) => {
      dataSource.value = dataSource.value.filter((item) => item.userID !== userID);
    };
    // 点击设置权限
    const onSetting = (record) => {
      console.log(record);
      data.visibleDrawerComp = true;
    };

    // 抽屉弹窗的 收起
    const afterVisibleChange = (bool) => {
      console.log("visible", bool);
    };

    return {
      ...toRefs(data),
      dataSource,
      columns,
      treeData,
      onDelete,
      onSetting,
      afterVisibleChange,
    };
  },

  components: {
    SmileOutlined,
    DownOutlined,
  },
});
</script>

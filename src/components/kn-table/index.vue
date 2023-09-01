<template>
  <div>
    <table :style="`--border:${border ? '1px solid #e2e2e3' : 'none'}`">
      <tr>
        <th
          v-for="(item, index) in columns"
          :style="`--align:${item.align ?? 'left'}`"
          :key="item.key ?? index"
        >
          {{ item.title }}
        </th>
      </tr>
      <tbody>
        <tr v-for="(item, index) in dataSource" :key="index">
          <td
            v-for="(column, i) in columns"
            :style="`--align:${column.align ?? 'left'}`"
            :key="column.key ?? i"
          >
            <slot :name="column.dataIndex" :row="item">{{
              item[column.dataIndex]
            }}</slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script lang="ts" setup>
interface Columns {
  title: string;
  dataIndex: string;
  key: string;
  align: string;
}
interface Props {
  columns?: Columns[];
  dataSource?: { [name: string]: any }[];
  border?: boolean;
}

const props = defineProps<Props>();
</script>
<style lang="scss" scoped>
table {
  width: 100%;
  display: flex;
  flex-direction: column;
  border: none;
  border-bottom: var(--border);

  tr {
    flex: 1;
    display: flex;
    border: var(--border);
    border-bottom: none;

    &:last-child {
      border-right: var(--border);
    }

    th {
      flex: 1;
      text-align: var(--align);
      border: none;
      border-right: var(--border);

      &:last-child {
        border-right: none;
      }
    }

    td {
      flex: 1;
      text-align: var(--align);
      border: none;

      border-right: var(--border);

      &:last-child {
        border-right: none;
      }
    }
  }
}
</style>
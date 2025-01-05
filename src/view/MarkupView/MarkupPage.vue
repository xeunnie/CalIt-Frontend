<script setup lang="ts">
import { sections } from '@/view/MarkupView/sections';
import { useRouter } from 'vue-router';

const router = useRouter();

const resolveRoute = (path) => router.resolve(path).href;

</script>

<template>
  <div id="wrap">
    <div class="header-wrap">
    <div id="header">
      <h1>CalIt 마크업리스트</h1>
      <div>
        <p>Version: <b>0.2.</b></p>
        <p>Last Update: <b>2024-12-19</b></p>
        <p>Coding: <b>Vue&amp;Typescript</b></p>
      </div>
    </div>
    <p>Router 링크는 프로젝트 내의 페이지로 연결되며, Design Link는 Figma의 디자인 링크로 연결됩니다.</p>
    </div>
    <div class="table-wrap">
    <table class="HtmlUnit">
      <thead>
      <tr class="head">
        <td>No</td>
        <td>Path</td>
        <td>Page Name</td>
        <td>Description</td>
        <td>Router Link</td>
        <td>Design Link(PC)</td>
        <td>Design Link(mobile)</td>
      </tr>
      </thead>
      <tbody>
      <template v-for="section in sections" :key="section.title">
        <th colspan="9">{{ section.title }}</th>
        <tr v-for="(item, index) in section.items" :key="item.fileName">
          <td>{{ index + 1 }}</td>
          <td>{{ item.path }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.description }}</td>
          <td>
            <a :href="resolveRoute(item.path)"
               target="_blank" rel="noopener noreferrer">Router 링크</a>
          </td>
          <td>
            <a :href="item.designLinkPC" target="_blank">PC 디자인</a>
          </td>
          <td>
            <a :href="item.designLinkMobile" target="_blank">Mobile 디자인</a>
          </td>
        </tr>
      </template>
      </tbody>
    </table>
    </div>
  </div>
</template>

<style scoped>
html,body{width:100%;height:100%; min-width:800px;}
body{line-height:1.2em; border:0;}
strong, em, span, wbr, a{display:inline-block;}
span{margin:0; padding:0; outline:0;}
hr{display:none}
a{
  cursor: pointer;
  text-decoration: none;
  color: #181818;
  background-color: #a8d5e8;
  padding: 5px;
  border-radius: 5px;
}
table{border-collapse:collapse;}
#wrap {
  width: 90vw;
  height: 95vh;
}
#header {
  margin-bottom: 20px;
  position: relative;
}
#header::after {
  content: '';
  clear: both;
  display: block;
}
#header > h1 {
  float: left;
  font-size: 28px;
  color: #1a1a1a;
  padding-top: 15px;
}
#header > div {
  float: right;
}
#header > div > p {
  font-size: 11px;
  color: #888;
  text-align: right;
}
.header-wrap{
  margin-bottom: 20px;
}
.table-wrap{
  overflow: auto;
  height: calc(95vh - 120px);
}
table.HtmlUnit {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
}
table.HtmlUnit tr{
  width: 100%;
}
table.HtmlUnit th,
table.HtmlUnit td {
  border: 1px solid #ccc;
}
table.HtmlUnit th {
  padding: 5px 6px;
  text-align: left;
  border-bottom: 2px solid #444 !important;
  height: 32px;
  background-color: #dae1e8;
}
table.HtmlUnit td {
  padding: 5px 6px;
}
table.HtmlUnit tr:hover > td {
  background-color: #ffeaee;
}
</style>

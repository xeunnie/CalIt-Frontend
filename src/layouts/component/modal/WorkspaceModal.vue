<script setup lang="ts">
import user1 from '@/assets/icon/persona/user1.svg';
import plus from '@/assets/icon/menu/plus.svg';
import workspaceData from '@/static/data/workspaceData';
import { setPersona } from '@/utils/personaUtils';
</script>

<template>
  <div class="workspace-modal">
    <div class="modal-wrap">
      <div class="workspace-modal-header">
        <div>
          <p>Workspace List</p>
        </div>
        <hr/>
      </div>
      <div class="workspace-modal-body">
        <div v-if="isLoading">Loading...</div>
        <div v-else-if="errorMessage">{{ errorMessage }}</div>
        <ul v-else>
          <li>
            <div class="workspace-item">
              <router-link to="/my/dashboard">
                <img :src="user1" alt="user"/>
                <p>My Space</p>
              </router-link>
            </div>
            <hr/>
          </li>
          <li v-for="(workspaceItem, index) in workspaceData" :key="index">
            <button class="workspace-item" @click="handleWorkspaceSelection(workspaceItem)">
              <img width="30px" :src="setPersona(workspaceItem.avatar)" alt="workspace"/>
              <div>{{ workspaceItem.workspaceName }}</div>
            </button>
          </li>
        </ul>
      </div>
      <div class="workspace-modal-footer">
        <hr/>
        <div>
          <router-link to="/my/create">
            <img :src="plus" class="plus" alt="plus-btn"/>
            <p>Add Workspace</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.workspace-modal {
  background-color: #f3f6ff;
  padding: 16px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 50px;
  right: 10px;
  width: 200px;
  max-height: 500px;
  overflow: auto;
}

.modal-wrap {
  position: relative;
}

.workspace-modal-header {
  position: absolute;
  z-index: 1;
  background-color: #f3f6ff;
  top: 0;
  width: 100%;
}

.workspace-modal-body {
  padding-top: 45px;
}

p {
  font-weight: 500;
  margin: 0;
}

hr {
  border: 1px solid #dfe5f1;
  width: 100%;
  margin: 10px 0;
}

ul {
  text-decoration: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;

  li {
    list-style: none;

    hr {
      margin-bottom: 0;
    }
  }

  .workspace-item {
    padding: 0.5rem;
    gap: 0.625rem;
    display: flex;
    align-items: center;
    border-radius: 10px;
    background-color: #ffffff;

    &:hover {
      background-color: #c6d2fd;
      color: white;
    }
    img {
      width: 30px;
      height: 30px;
    }
    p{
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}

a {
  display: flex;
  text-decoration: none;
  color: #222;
  align-items: center;
  gap: 10px;
}

.plus {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #93aafd;
}
</style>

<script setup lang="ts">
</script>

<template>
  <ul>
    <li>
      <router-link to="/my/dashboard">
        <div class="menu-icon">
          <i class="icon-dashboard"/>
        </div>
        <p class="outfit">Dashboard</p>
      </router-link>
    </li>
    <li>
      <router-link to="/my/schedule/monthly">
        <i class="icon-schedule"/>
        <p class="outfit">Schedule</p>
      </router-link>
      <ul class="submenu">
        <li>
          <router-link to="/my/schedule/monthly">
            <i class="icon-monthly"/>
            <p class="outfit">Monthly</p>
          </router-link>
        </li>
        <li>
          <router-link to="/my/schedule/weekly">
            <i class="icon-weekly"/>
            <p class="outfit">Weekly</p>
          </router-link>
        </li>
      </ul>
    </li>
    <hr>
    <li>
      <router-link to="/my/task/kanban">
        <i class="icon-task"/>
        <p class="outfit">Task</p>
      </router-link>
    </li>
  </ul>

</template>

<style scoped>
i{
  width: 24px;
  display: block;
  height: 24px;
}
ul{
  list-style: none;
  padding: 0;
  margin: 0;
  a{
    padding: 0 1rem;
    gap: 0.625rem;
    text-decoration: none;
    display: flex;
    color: #000;
    font-weight: 300;
    height: 2.5rem;
    align-items: center;
    &:hover {
      background-color: #C6D2FD;
      color: white;
      border-radius: 10px;
      p{
        font-weight: 500;
      }
    }
  }
}
.submenu {
  padding-left: 1.25rem;
}
p{
  margin: 0;
  font-size: 1rem;
}
hr{
  border: 1px solid #dfe5f1;
  width: 100%;
  margin: 10px 0;
}
.icon-dashboard{
  background-image: url("@/assets/icon/menu/dashboard.svg");
}
.icon-schedule{
  background-image: url("@/assets/icon/menu/schedule.svg");
}
.icon-monthly {
  background-image: url("@/assets/icon/menu/monthly.svg");
}
.icon-weekly{
  background-image: url("@/assets/icon/menu/weekly.svg");
}
.icon-task{
  background-image: url("@/assets/icon/menu/task.svg");
}
</style>

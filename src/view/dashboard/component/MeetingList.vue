<script setup lang="ts">
import { computed } from 'vue';

const meetings = [
  {
    id: 1,
    title: 'Analytic dashboard design',
    project: '워크스페이스 명',
    date: 'Today, 15:00pm',
  },
  {
    id: 2,
    title: 'Contact us section on landing page',
    project: 'Circles project',
    date: 'Today, 15:00pm',
  },
  {
    id: 3,
    title: 'Contact us section on landing page',
    project: 'Circles project',
    date: 'Tomorrow, 15:00pm',
  },
  {
    id: 4,
    title: 'Contact us section on landing page',
    project: 'Circles project',
    date: 'Tomorrow, 15:00pm',
  },
  {
    id: 5,
    title: 'Contact us section on landing page',
    project: 'Circles project',
    date: 'Dec 15th',
  },
];

const getBackgroundColor = (date) => {
  if (date.startsWith('Today')) {
    return '#FFE3E3';
  } if (date.startsWith('Tomorrow')) {
    return '#FFEEDE';
  }
  return '#DEE3FF';
};

const meetingBackgroundColors = computed(
  () => meetings.map((meeting) => getBackgroundColor(meeting.date)),
);
</script>

<template>
  <div class="meeting-list">
    <h3>Upcoming Meetings</h3>
    <div class="meeting-card-area">
      <div class="meeting-card" v-for="(meeting, index) in meetings" :key="meeting.id">
        <div class="head">
          <h4>{{ meeting.title }}</h4>
          <p>{{ meeting.project }}</p>
        </div>
        <div class="time" :style="{ backgroundColor: meetingBackgroundColors[index] }">
          <span>{{ meeting.date }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.meeting-list {
  h3 {
    font-size: 20px;
    font-weight: 500;
    margin: 0 0 1rem;
  }
}

.meeting-card-area {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.meeting-card {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 15px;
  width: 236px;
  //height: 148px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
}

h4 {
  font-size: 1rem;
  font-weight: 500;
}

p {
  font-size: 12px;
  color: #909090;
}

.time {
  font-size: 12px;
  padding: 4px 12px;
  border-radius: 4px;
  width: fit-content;
}
</style>

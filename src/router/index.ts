import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Thumbnail',
    component: () => import('@/view/thumbnail/ThumbnailPage.vue'),
  },
  {
    path: '/markup',
    name: 'MarkupList',
    component: () => import('@/view/MarkupView/MarkupPage.vue'),
  },

  // user
  {
    path: '/user',
    name: 'UserTemplate',
    component: () => import('@/view/user/UserTemplate.vue'),
    children: [
      {
        path: 'login',
        name: 'Login',
        component: () => import('@/view/user/pages/LoginPage.vue'),
      },
      {
        path: 'signup',
        name: 'Signup',
        component: () => import('@/view/user/pages/SignupPage.vue'),
      },
      {
        path: 'password',
        name: 'Password',
        component: () => import('@/view/user/pages/PasswordPage.vue'),
      },
      {
        path: 'password-reset',
        name: 'PasswordReset',
        component: () => import('@/view/user/pages/PasswordResetPage.vue'),
      },
      {
        path: 'complete',
        name: 'Complete',
        component: () => import('@/view/user/pages/CompletePage.vue'),
      },
    ],
  },

  // my
  {
    path: '/my',
    name: 'My',
    component: () => import('@/layouts/ContentsArea.vue'),
    children: [
      {
        path: 'dashboard',
        name: 'MyDashboard',
        component: () => import('@/view/dashboard/MyDashBoard.vue'),
      },
      {
        path: 'schedule',
        name: 'MySchedule',
        children: [
          {
            path: 'monthly',
            name: 'MyMonthly',
            component: () => import('@/view/schedule/monthly/MyMonthly.vue'),
          },
          {
            path: 'weekly',
            name: 'myWeekly',
            component: () => import('@/view/schedule/weekly/MyWeekly.vue'),
          },
        ],
      },
      {
        path: 'task',
        name: 'MyTask',
        component: () => import('@/view/scrum/Task/TaskTemplate.vue'),
        children: [
          {
            path: 'kanban',
            name: 'MyTaskKanban',
            component: () => import('@/view/scrum/Task/kanban/MyTaskKanban.vue'),
          },
          {
            path: 'list',
            name: 'MyTaskList',
            component: () => import('@/view/scrum/Task/list/MyTaskList.vue'),
          },
          {
            path: 'timeline',
            name: 'MyTaskTimeline',
            component: () => import('@/view/scrum/Task/timeline/TimeLine.vue'),
          },
        ],
      },
    ],
  },

  // dashboard
  {
    path: '/workspace/:id',
    name: 'Workspace',
    component: () => import('@/layouts/ContentsArea.vue'),
    children: [
      // dashboard
      {
        path: 'dashboard',
        name: 'WorkspaceDashboard',
        component: () => import('@/view/dashboard/WorkspaceDashBoard.vue'),
      },
      // schedule
      {
        path: 'schedule',
        name: 'WorkspaceSchedule',
        children: [
          {
            path: 'monthly',
            name: 'WorkspaceMonthly',
            component: () => import('@/view/schedule/monthly/WorkSpaceMonthly.vue'),
          },
          {
            path: 'weekly',
            name: 'WorkspaceWeekly',
            component: () => import('@/view/schedule/weekly/WorkSpaceWeekly.vue'),
          },
        ],
      },

      // scrum
      {
        path: 'scrum',
        name: 'WorkspaceScrum',
        children: [
          {
            path: 'label',
            name: 'WorkspaceLabel',
            component: () => import('@/view/scrum/list/LabelList.vue'),
          },
          {
            path: 'sprint',
            name: 'WorkspaceSprint',
            children: [
              {
                path: 'list',
                name: 'WorkspaceSprintList',
                component: () => import('@/view/scrum/list/SprintList.vue'),
              },
              {
                path: 'create',
                name: 'WorkspaceSprintCreate',
                component: () => import('@/view/scrum/create/SprintCreate.vue'),
              },
            ],
          },
          {
            path: 'task',
            name: 'WorkspaceTask',
            component: () => import('@/view/scrum/Task/TaskTemplate.vue'),
            children: [
              {
                path: 'kanban',
                name: 'WorkspaceTaskKanban',
                component: () => import('@/view/scrum/Task/kanban/WorkSpaceTaskKanban.vue'),
              },
              {
                path: 'list',
                name: 'WorkspaceTaskList',
                component: () => import('@/view/scrum/Task/list/WorkSpaceTaskList.vue'),
              },
              {
                path: 'timeline',
                name: 'WorkspaceTaskTimeline',
                component: () => import('@/view/scrum/Task/timeline/TimeLine.vue'),
              },
              {
                path: 'create',
                name: 'WorkspaceCreateIssue',
                component: () => import('@/view/scrum/create/TaskCreate.vue'),
              },
            ],
          },
          {
            path: 'meeting',
            name: 'Meeting',
            children: [
              {
                path: 'list',
                name: 'MeetingList',
                component: () => import('@/view/scrum/meeting/MeetingList.vue'),
              },
              {
                path: 'detail/:id',
                name: 'MeetingDetail',
                component: () => import('@/view/scrum/meeting/MeetingDetail.vue'),
              },
              {
                path: 'create',
                name: 'MeetingCreate',
                component: () => import('@/view/scrum/meeting/MeetingCreate.vue'),
              },
              {
                path: 'edit/:id',
                name: 'MeetingEdit',
                component: () => import('@/view/scrum/meeting/MeetingEdit.vue'),
              },
            ],
          },
          {
            path: 'board',
            name: 'Board',
            children: [
              {
                path: 'error',
                name: 'Error',
                children: [
                  {
                    path: 'list',
                    name: 'ErrorList',
                    component: () => import('@/view/board/list/ErrorList.vue'),
                  },
                  {
                    path: 'detail',
                    name: 'ErrorDetail',
                    component: () => import('@/view/board/detail/ErrorDetailPage.vue'),
                  },
                  {
                    path: 'create',
                    name: 'ErrorCreate',
                    component: () => import('@/view/board/create/ErrorCreatePage.vue'),
                  },
                  {
                    path: 'edit/:id',
                    name: 'ErrorEdit',
                    component: () => import('@/view/board/edit/ErrorEditPage.vue'),
                  },
                ],
              },
              {
                path: 'qa',
                name: 'QA',
                children: [
                  {
                    path: 'list',
                    name: 'QAList',
                    component: () => import('@/view/board/list/QAList.vue'),
                  },
                  {
                    path: 'detail',
                    name: 'QADetail',
                    component: () => import('@/view/board/detail/QADetailPage.vue'),
                  },
                  {
                    path: 'create',
                    name: 'QACreate',
                    component: () => import('@/view/board/create/QACreatePage.vue'),
                  },
                  {
                    path: 'edit/:id',
                    name: 'QAEdit',
                    component: () => import('@/view/board/edit/QAEditPage.vue'),
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        path: 'chat',
        name: 'Chat',
        component: () => import('@/view/chat/ChatInitialPage.vue'),
      },
      {
        path: 'chat/:id',
        name: 'ChatRoom',
        component: () => import('@/view/chat/ChatRoomPage.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

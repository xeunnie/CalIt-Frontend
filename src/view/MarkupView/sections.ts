export interface RouteItem {
  path: string;
  name: string;
  description: string;
  designLinkPC: string;
  designLinkMobile: string;
}

export interface Section {
  title: string;
  items: RouteItem[];
}

export const sections: Section[] = [
  {
    title: '메인 페이지',
    items: [
      {
        path: '/',
        name: 'Thumbnail',
        description: '메인 썸네일 페이지',
        designLinkPC: 'https://www.figma.com/proto/NjUfhUM8i0WHIc8xgVzAqa/Untitled?node-id=2-7&t=SQ3gS1mPCzykKl4V-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
        designLinkMobile: 'https://www.figma.com/file/6JNQyGJ9D0Vg6Q8v5R5y1p/Caltemp-Design?node-id=0%3A1',
      },
      {
        path: '/markup',
        name: 'MarkupList',
        description: '마크업 목록 페이지',
        designLinkPC: 'https://www.figma.com/proto/NjUfhUM8i0WHIc8xgVzAqa/Untitled?node-id=2-7&t=SQ3gS1mPCzykKl4V-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
        designLinkMobile: 'https://www.figma.com/file/6JNQyGJ9D0Vg6Q8v5R5y1p/Caltemp-Design?node-id=0%3A1',
      },
    ],
  },
  {
    title: '사용자 페이지',
    items: [
      {
        path: '/user/login',
        name: 'Login',
        description: '사용자 로그인 페이지',
        designLinkPC: 'https://www.figma.com/proto/NjUfhUM8i0WHIc8xgVzAqa/Untitled?node-id=2-7&t=SQ3gS1mPCzykKl4V-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
        designLinkMobile: 'https://www.figma.com/file/6JNQyGJ9D0Vg6Q8v5R5y1p/Caltemp-Design?node-id=0%3A1',
      },
      {
        path: '/user/signup',
        name: 'Signup',
        description: '회원가입 페이지',
        designLinkPC: 'https://www.figma.com/proto/NjUfhUM8i0WHIc8xgVzAqa/Untitled?node-id=2-7&t=SQ3gS1mPCzykKl4V-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
        designLinkMobile: 'https://www.figma.com/file/6JNQyGJ9D0Vg6Q8v5R5y1p/Caltemp-Design?node-id=0%3A1',
      },
      {
        path: '/user/password',
        name: 'Password',
        description: '비밀번호 변경을 위한 이메일 안내 페이지',
        designLinkPC: 'https://www.figma.com/proto/NjUfhUM8i0WHIc8xgVzAqa/Untitled?node-id=2-7&t=SQ3gS1mPCzykKl4V-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
        designLinkMobile: 'https://www.figma.com/file/6JNQyGJ9D0Vg6Q8v5R5y1p/Caltemp-Design?node-id=0%3A1',
      },
      {
        path: '/user/password-reset',
        name: 'PasswordReset',
        description: '비밀번호 재설정 페이지',
        designLinkPC: 'https://www.figma.com/proto/NjUfhUM8i0WHIc8xgVzAqa/Untitled?node-id=2-7&t=SQ3gS1mPCzykKl4V-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
        designLinkMobile: 'https://www.figma.com/file/6JNQyGJ9D0Vg6Q8v5R5y1p/Caltemp-Design?node-id=0%3A1',
      },
      {
        path: '/user/complete',
        name: 'Complete',
        description: '회원가입 완료 페이지',
        designLinkPC: 'https://www.figma.com/proto/NjUfhUM8i0WHIc8xgVzAqa/Untitled?node-id=2-7&t=SQ3gS1mPCzykKl4V-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
        designLinkMobile: 'https://www.figma.com/file/6JNQyGJ9D0Vg6Q8v5R5y1p/Caltemp-Design?node-id=0%3A1',
      },
    ],
  },
  {
    title: '마이 페이지',
    items: [
      {
        path: '/my/dashboard',
        name: 'MyDashboard',
        description: '마이 대시보드',
        designLinkPC: 'https://www.figma.com/proto/NjUfhUM8i0WHIc8xgVzAqa/Untitled?node-id=2-7&t=SQ3gS1mPCzykKl4V-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
        designLinkMobile: 'https://www.figma.com/file/6JNQyGJ9D0Vg6Q8v5R5y1p/Caltemp-Design?node-id=0%3A1',
      },
      {
        path: '/my/schedule/monthly',
        name: 'MyMonthly',
        description: '마이 월간 일정 페이지',
        designLinkPC: 'https://www.figma.com/proto/NjUfhUM8i0WHIc8xgVzAqa/Untitled?node-id=2-7&t=SQ3gS1mPCzykKl4V-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
        designLinkMobile: 'https://www.figma.com/file/6JNQyGJ9D0Vg6Q8v5R5y1p/Caltemp-Design?node-id=0%3A1',
      },
      {
        path: '/my/schedule/weekly',
        name: 'MyWeekly',
        description: '마이 주간 일정 페이지',
        designLinkPC: 'https://www.figma.com/proto/NjUfhUM8i0WHIc8xgVzAqa/Untitled?node-id=2-7&t=SQ3gS1mPCzykKl4V-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
        designLinkMobile: 'https://www.figma.com/file/6JNQyGJ9D0Vg6Q8v5R5y1p/Caltemp-Design?node-id=0%3A1',
      },
      {
        path: '/my/task/kanban',
        name: 'MyTaskKanban',
        description: '마이 태스크 칸반 페이지',
        designLinkPC: 'https://www.figma.com/proto/NjUfhUM8i0WHIc8xgVzAqa/Untitled?node-id=2-7&t=SQ3gS1mPCzykKl4V-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
        designLinkMobile: 'https://www.figma.com/file/6JNQyGJ9D0Vg6Q8v5R5y1p/Caltemp-Design?node-id=0%3A1',
      },
      {
        path: '/my/task/list',
        name: 'MyTaskList',
        description: '마이 태스크 리스트 페이지',
        designLinkPC: 'https://www.figma.com/proto/NjUfhUM8i0WHIc8xgVzAqa/Untitled?node-id=2-7&t=SQ3gS1mPCzykKl4V-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
        designLinkMobile: 'https://www.figma.com/file/6JNQyGJ9D0Vg6Q8v5R5y1p/Caltemp-Design?node-id=0%3A1',
      },
      {
        path: '/my/task/time',
        name: 'MyTaskTime',
        description: '마이 태스크 타임라인 페이지',
        designLinkPC: 'https://www.figma.com/proto/8w2ZQ3w4iB9Q0c7Cjwz3Jm/Untitled?node-id=2%3A7&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
        designLinkMobile: 'https://www.figma.com/file/8w2ZQ3w4iB9Q0c7Cjwz3Jm/Caltemp-Design?node-id=0%3A1',
      },
    ],
  },
  {
    title: '워크스페이스 대시보드 및 일정관리',
    items: [
      {
        path: '/workspace/:id/dashboard',
        name: 'WorkspaceDashboard',
        description: '워크스페이스 대시보드 페이지',
        designLinkPC: 'https://www.figma.com/proto/NjUfhUM8i0WHIc8xgVzAqa/Untitled?node-id=2-7&t=SQ3gS1mPCzykKl4V-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
        designLinkMobile: 'https://www.figma.com/file/6JNQyGJ9D0Vg6Q8v5R5y1p/Caltemp-Design?node-id=0%3A1',
      },
      {
        path: '/workspace/:id/schedule/monthly',
        name: 'WorkspaceMonthly',
        description: '워크스페이스 월간 일정 페이지',
        designLinkPC: 'https://www.figma.com/proto/NjUfhUM8i0WHIc8xgVzAqa/Untitled?node-id=2-7&t=SQ3gS1mPCzykKl4V-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
        designLinkMobile: 'https://www.figma.com/file/6JNQyGJ9D0Vg6Q8v5R5y1p/Caltemp-Design?node-id=0%3A1',
      },
      {
        path: '/workspace/:id/schedule/weekly',
        name: 'WorkspaceWeekly',
        description: '워크스페이스 주간 일정',
        designLinkPC: 'https://www.figma.com/proto/NjUfhUM8i0WHIc8xgVzAqa/Untitled?node-id=2-7&t=SQ3gS1mPCzykKl4V-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
        designLinkMobile: 'https://www.figma.com/file/6JNQyGJ9D0Vg6Q8v5R5y1p/Caltemp-Design?node-id=0%3A1',
      },
    ],
  },
  {
    title: '워크스페이스 스크럼 관리',
    items: [
      {
        path: '/workspace/:id/scrum/label',
        name: 'WorkspaceLabel',
        description: '워크스페이스 스크럼 라벨 페이지',
        designLinkPC: 'https://www.figma.com/proto/8w2ZQ3w4iB9Q0c7Cjwz3Jm/Untitled?node-id=2%3A7&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
        designLinkMobile: 'https://www.figma.com/file/8w2ZQ3w4iB9Q0c7Cjwz3Jm/Caltemp-Design?node-id=0%3A1',
      },
      {
        path: '/workspace/:id/scrum/sprint/list',
        name: 'WorkspaceSprintList',
        description: '워크스페이스 스크럼 스프린트 리스트 페이지',
        designLinkPC: 'https://www.figma.com/proto/8w2ZQ3w4iB9Q0c7Cjwz3Jm/Untitled?node-id=2%3A7&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
        designLinkMobile: 'https://www.figma.com/file/8w2ZQ3w4iB9Q0c7Cjwz3Jm/Caltemp-Design?node-id=0%3A1',
      },
      {
        path: '/workspace/:id/scrum/sprint/create',
        name: 'WorkspaceSprintCreate',
        description: '워크스페이스 스크럼 스프린트 생성 페이지',
        designLinkPC: 'https://www.figma.com/proto/8w2ZQ3w4iB9Q0c7Cjwz3Jm/Untitled?node-id=2%3A7&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
        designLinkMobile: 'https://www.figma.com/file/8w2ZQ3w4iB9Q0c7Cjwz3Jm/Caltemp-Design?node-id=0%3A1',
      },
      {
        path: '/workspace/:id/scrum/task/kaban',
        name: 'WorkspaceTaskKaban',
        description: '워크스페이스 스크럼 태스크 칸반 페이지',
        designLinkPC: 'https://www.figma.com/proto/8w2ZQ3w4iB9Q0c7Cjwz3Jm/Untitled?node-id=2%3A7&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
        designLinkMobile: 'https://www.figma.com/file/8w2ZQ3w4iB9Q0c7Cjwz3Jm/Caltemp-Design?node-id=0%3A1',
      },
      {
        path: '/workspace/:id/scrum/task/list',
        name: 'WorkspaceTaskList',
        description: '워크스페이스 스크럼 태스크 리스트 페이지',
        designLinkPC: 'https://www.figma.com/proto/8w2ZQ3w4iB9Q0c7Cjwz3Jm/Untitled?node-id=2%3A7&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
        designLinkMobile: 'https://www.figma.com/file/8w2ZQ3w4iB9Q0c7Cjwz3Jm/Caltemp-Design?node-id=0%3A1',
      },
      {
        path: '/workspace/:id/scrum/task/timeline',
        name: 'WorkspaceTaskTimeline',
        description: '워크스페이스 스크럼 태스크 타임라인 페이지',
        designLinkPC: 'https://www.figma.com/proto/8w2ZQ3w4iB9Q0c7Cjwz3Jm/Untitled?node-id=2%3A7&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
        designLinkMobile: 'https://www.figma.com/file/8w2ZQ3w4iB9Q0c7Cjwz3Jm/Caltemp-Design?node-id=0%3A1',
      },
      {
        path: 'workspace/:id/scrum/task/create',
        name: 'WorkspaceTaskCreate',
        description: '워크스페이스 스크럼 태스크 생성 페이지',
        designLinkPC: 'https://www.figma.com/proto/8w2ZQ3w4iB9Q0c7Cjwz3Jm/Untitled?node-id=2%3A7&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
        designLinkMobile: 'https://www.figma.com/file/8w2ZQ3w4iB9Q0c7Cjwz3Jm/Caltemp-Design?node-id=0%3A1',
      },
    ],
  },
  {
    title: '워크스페이스 회의 관리',
    items: [
      {
        path: '/workspace/:id/meeting/list',
        name: 'MeetingList',
        description: '워크스페이스 회의 리스트 페이지',
        designLinkPC: 'https://www.figma.com/proto/8w2ZQ3w4iB9Q0c7Cjwz3Jm/Untitled?node-id=2%3A7&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
        designLinkMobile: 'https://www.figma.com/file/8w2ZQ3w4iB9Q0c7Cjwz3Jm/Caltemp-Design?node-id=0%3A1',
      },
      {
        path: '/workspace/:id/meeting/detail/:id',
        name: 'MeetingDetail',
        description: '워크스페이스 회의 상세 페이지',
        designLinkPC: 'https://www.figma.com/proto/8w2ZQ3w4iB9Q0c7Cjwz3Jm/Untitled?node-id=2%3A7&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
        designLinkMobile: 'https://www.figma.com/file/8w2ZQ3w4iB9Q0c7Cjwz3Jm/Caltemp-Design?node-id=0%3A1',
      },
      {
        path: '/workspace/:id/meeting/create',
        name: 'MeetingCreate',
        description: '워크스페이스 회의 생성 페이지',
        designLinkPC: 'https://www.figma.com/proto/8w2ZQ3w4iB9Q0c7Cjwz3Jm/Untitled?node-id=2%3A7&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
        designLinkMobile: 'https://www.figma.com/file/8w2Q3w4iB9Q0c7Cjwz3Jm/Caltemp-Design?node-id=0%3A1',
      },
    ],
  },
  {
    title: '워크스페이스 게시판 관리',
    items: [
      {
        path: '/workspace/:id/board/error/list',
        name: 'ErrorBoardList',
        description: '워크스페이스 에러보드  리스트 페이지',
        designLinkPC: 'https://www.figma.com/proto/8w2Q3w4iB9Q0c7Cjwz3Jm/Untitled?node-id=2%3A7&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
        designLinkMobile: 'https://www.figma.com/file/8w2Q3w4iB9Q0c7Cjwz3Jm/Caltemp-Design?node-id=0%3A1',
      },
      {
        path: '/workspace/:id/board/error/detail/:id',
        name: 'ErrorBoardDetail',
        description: '워크스페이스 에러보드 상세 페이지',
        designLinkPC: 'https://www.figma.com/proto/8w2Q3w4iB9Q0c7Cjwz3Jm/Untitled?node-id=2%3A7&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
        designLinkMobile: 'https://www.figma.com/file/8w2Q3w4iB9Q0c7Cjwz3Jm/Caltemp-Design?node-id=0%3A1',
      },
      {
        path: '/workspace/:id/board/error/create',
        name: 'ErrorBoardCreate',
        description: '워크스페이스 에러보드 생성 페이지',
        designLinkPC: 'https://www.figma.com/proto/8w2Q3w4iB9Q0c7Cjwz3Jm/Untitled?node-id=2%3A7&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
        designLinkMobile: 'https://www.figma.com/file/8w2Q3w4iB9Q0c7Cjwz3Jm/Caltemp-Design?node-id=0%3A1',
      },
      {
        path: '/workspace/:id/board/error/edit/:id',
        name: 'ErrorBoardEdit',
        description: '워크스페이스 에러보드수정 페이지',
        designLinkPC: 'https://www.figma.com/proto/8w2Q3w4iB9Q0c7Cjwz3Jm/Untitled?node-id=2%3A7&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
        designLinkMobile: 'https://www.figma.com/file/8w2Q3w4iB9Q0c7Cjwz3Jm/Caltemp-Design?node-id=0%3A1',
      },
      {
        path: '/workspace/:id/board/qa/list',
        name: 'QaBoardList',
        description: '워크스페이스 QA보드 리스트 페이지',
        designLinkPC: 'https://www.figma.com/proto/8w2Q3w4iB9Q0c7Cjwz3Jm/Untitled?node-id=2%3A7&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
        designLinkMobile: 'https://www.figma.com/file/8w2Q3w4iB9Q0c7Cjwz3Jm/Caltemp-Design?node-id=0%3A1',
      },
      {
        path: '/workspace/:id/board/qa/detail/:id',
        name: 'QaBoardDetail',
        description: '워크스페이스 QA보드 상세 페이지',
        designLinkPC: 'https://www.figma.com/proto/8w2Q3w4iB9Q0c7Cjwz3Jm/Untitled?node-id=2%3A7&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
        designLinkMobile: 'https://www.figma.com/file/8w2Q3w4iB9Q0c7Cjwz3Jm/Caltemp-Design?node-id=0%3A1',
      },
      {
        path: '/workspace/:id/board/qa/create',
        name: 'QaBoardCreate',
        description: '워크스페이스 QA보드 생성 페이지',
        designLinkPC: 'https://www.figma.com/proto/8w2Q3w4iB9Q0c7Cjwz3Jm/Untitled?node-id=2%3A7&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
        designLinkMobile: 'https://www.figma.com/file/8w2Q3w4iB9Q0c7Cjwz3Jm/Caltemp-Design?node-id=0%3A1',
      },
    ],
  },
  {
    title: '워크스페이스 채팅 관리',
    items: [
      {
        path: '/workspace/:id/chat',
        name: 'Chat',
        description: '워크스페이스 채팅',
        designLinkPC: 'https://www.figma.com/proto/NjUfhUM8i0WHIc8xgVzAqa/Untitled?node-id=2-7&t=SQ3gS1mPCzykKl4V-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
        designLinkMobile: 'https://www.figma.com/file/6JNQyGJ9D0Vg6Q8v5R5y1p/Caltemp-Design?node-id=0%3A1',
      },
      {
        path: '/workspace/:id/chat/:id',
        name: 'ChatRoom',
        description: '워크스페이스 채팅룸',
        designLinkPC: 'https://www.figma.com/proto/NjUfhUM8i0WHIc8xgVzAqa/Untitled?node-id=2-7&t=SQ3gS1mPCzykKl4V-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
        designLinkMobile: 'https://www.figma.com/file/6JNQyGJ9D0Vg6Q8v5R5y1p/Caltemp-Design?node-id=0%3A1',
      },
    ],
  },
];

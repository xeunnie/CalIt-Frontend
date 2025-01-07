// 먼슬리, 위클리에서 쓰는 date-fns 관련 유틸 함수들
import { format } from 'date-fns';
import * as dateFns from 'date-fns';

// 날짜 포맷 유틸 함수
export function formatUtil(date: Date, formatString: string): string {
  return format(date, formatString);
}

// 주간 범위 가져오기
export function getWeekRange(today: Date): string {
  const start = new Date(today);
  const end = new Date(today);
  end.setDate(today.getDate() + 6);
  return `${formatUtil(start, 'MMM d')} - ${formatUtil(end, 'MMM d')}`;
}

// 주간 날짜 배열 가져오기
export function getWeekDaysUtil(date: Date): Date[] {
  const startOfWeek = dateFns.startOfWeek(date, { weekStartsOn: 0 }); // 일요일 시작
  const weekDays: Date[] = [];
  for (let i = 0; i < 7; i += 1) {
    weekDays.push(dateFns.addDays(startOfWeek, i));
  }
  return weekDays;
}

// 해당 월의 총 일 수 계산
export function getDaysInMonthUtil(date: Date): number {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
}

// 해당 월의 시작 날짜 가져오기
export function startOfMonthUtil(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

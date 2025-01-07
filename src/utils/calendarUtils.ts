import { ref, computed } from 'vue';
import { getDaysInMonthUtil, startOfMonthUtil } from '@/utils/scheduleDateFnsUtils';

const useCalendar = () => {
  const today = new Date();
  const currentYear = ref<number>(today.getFullYear());
  const currentMonth = ref<number>(today.getMonth());
  const weekDays = ref<string[]>(['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']);

  // 해당 월의 총 일 수 계산
  const daysInMonth = computed<number>(
    () => getDaysInMonthUtil(new Date(currentYear.value, currentMonth.value)),
  );

  // 해당 월의 시작 요일 계산 (빈칸 수)
  const startBlankDays = computed<number>(
    () => startOfMonthUtil(new Date(currentYear.value, currentMonth.value)).getDay(),
  );

  // 오늘로 이동
  const goToToday = (): void => {
    currentYear.value = today.getFullYear();
    currentMonth.value = today.getMonth();
  };

  // 이전 달 범위 계산
  const prevMonth = (currentDate: Date): { startDate: Date; endDate: Date } => {
    const date = new Date(currentDate);
    date.setMonth(date.getMonth() - 1);
    return {
      startDate: new Date(date.getFullYear(), date.getMonth(), 1),
      endDate: new Date(date.getFullYear(), date.getMonth() + 1, 0),
    };
  };

  // 다음 달 범위 계산
  const nextMonth = (currentDate: Date): { startDate: Date; endDate: Date } => {
    const date = new Date(currentDate);
    date.setMonth(date.getMonth() + 1);
    return {
      startDate: new Date(date.getFullYear(), date.getMonth(), 1),
      endDate: new Date(date.getFullYear(), date.getMonth() + 1, 0),
    };
  };

  return {
    today,
    currentYear,
    currentMonth,
    weekDays,
    daysInMonth,
    startBlankDays,
    goToToday,
    prevMonth,
    nextMonth,
  };
};

export default useCalendar;

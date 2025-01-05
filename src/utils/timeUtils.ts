export function getTimeDifference(time: string): string {
  try {
    const now = new Date();
    const alarmDate = new Date(new Date(time).toLocaleString('en-US', { timeZone: 'Asia/Seoul' }));
    if (Number.isNaN(alarmDate.getTime())) {
      throw new Error('Invalid date format');
    }
    alarmDate.setHours(alarmDate.getHours() + 9);
    const diffMs = now.getTime() - alarmDate.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);
    if (diffMins < 1) {
      return 'now';
    }
    if (diffMins < 60) {
      return `${diffMins} min`;
    }
    if (diffHours < 24) {
      return `${diffHours} hr`;
    }
    return `${diffDays} days`;
  } catch (error) {
    return 'Invalid time';
  }
}

export function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString);
    if (Number.isNaN(date.getTime())) {
      throw new Error('Invalid date format');
    }

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year} /${month}/ ${day}`;
  } catch (error) {
    return 'Invalid date';
  }
}

const priorityClass = (priority: string): Record<string, boolean> => ({
  'high-priority': priority === 'High Priority',
  'med-priority': priority === 'Med Priority',
});

export default priorityClass;

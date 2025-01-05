const priorityClass = (priority) => ({
  'high-priority': priority === 'High Priority',
  'med-priority': priority === 'Med Priority',
});

export default priorityClass;


// Months 
const months = [
   // { name: 'January', days: 31, range: { start: new Date(2024, 0, 1), end: new Date(2024, 0, 31) } },
   // { name: 'February', days: 28, range: { start: new Date(2024, 1, 1), end: new Date(2024, 1, 28) } },
    { name: 'March', days: 31, range: { start: new Date(2024, 2, 1), end: new Date(2024, 2, 31) } },
    { name: 'April', days: 30, range: { start: new Date(2024, 3, 1), end: new Date(2024, 3, 30) } },
    { name: 'May', days: 31, range: { start: new Date(2024, 4, 1), end: new Date(2024, 4, 31) } },
    { name: 'June', days: 30, range: { start: new Date(2024, 5, 1), end: new Date(2024, 5, 30) } },
    { name: 'July', days: 31, range: { start: new Date(2024, 6, 1), end: new Date(2024, 6, 31) } },
    { name: 'August', days: 31, range: { start: new Date(2024, 7, 1), end: new Date(2024, 7, 31) } },
    { name: 'September', days: 30, range: { start: new Date(2024, 8, 1), end: new Date(2024, 8, 30) } },
    { name: 'October', days: 31, range: { start: new Date(2024, 9, 1), end: new Date(2024, 9, 31) } },
    { name: 'November', days: 30, range: { start: new Date(2024, 10, 1), end: new Date(2024, 10, 30) } },
    { name: 'December', days: 31, range: { start: new Date(2024, 11, 1), end: new Date(2024, 11, 31) } }
  ];

// Testing
  months.forEach(month => {
    console.log(`${month.name} has ${month.days} days.`);
    console.log(`Range: ${month.range.start.toDateString()} - ${month.range.end.toDateString()}`);
  });

  // Types of Projects
  const project = [
    { name: 'Japanese'},
    { name: 'Coding'},
    { name: 'Nursing'},
    { name: 'Freeday'}
  ];

  // Pick Day of Week
  for (let i = 0; i < months.length; i++) {
    console.log(`${months[i].name}:`);
    console.log('');
    console.log('----------------------');
  }

  // Pick Project 
  for (let day = 1; day <= months[i].days; day++) {
    console.log(`${day}`);
    const randomIndex = Math.floor(Math.random() * project.length);
    const randomProject = project[randomIndex];
    console.log(`Random project: ${randomProject.name}`);
  
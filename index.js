// prompt

// Months 
const months = [
   { name: 'January', days: 31, range: { start: new Date(2024, 0, 1), end: new Date(2024, 0, 31) } },
   { name: 'February', days: 28, range: { start: new Date(2024, 1, 1), end: new Date(2024, 1, 28) } },
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

// Types of Projects with weights
// Types of Projects with weights
const projects = [
  { name: 'Japanese', weight: 1 },
  { name: 'Coding', weight: 2 },
  { name: 'Nursing', weight: 3 },
  { name: 'Freeday', weight: 4 }
];

// Assign random project to each day of the week for each month
months.forEach(month => {
  console.log(`${month.name}:`);
  let previousProject;
  for (let day = 1; day <= month.days; day++) {
    let totalWeight = projects.reduce((acc, project) => acc + project.weight, 0);
    let selectedProjects = [];
    for (let i = 0; i < 2; i++) {
      let selectedProject;
      do {
        let randomNum = Math.floor(Math.random() * totalWeight);
        selectedProject = projects.find(project => randomNum < project.weight);
      } while (!selectedProject || selectedProjects.includes(selectedProject));
      selectedProjects.push(selectedProject);
    }
    console.log(`Day ${day}: ${selectedProjects.map(project => project.name).join(', ')}`);
    if (day % 7 === 0 && day !== month.days) {
      console.log('--- Break ---');
    }
  }
  console.log('');
});
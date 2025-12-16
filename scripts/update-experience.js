const fs = require('fs');
const path = require('path');

// Career start date: January 2022 (when you graduated and started your career)
// You were actively coding in your final year, but career officially started Jan 2022
const careerStartDate = new Date('2022-01-01');
const currentDate = new Date();

// Calculate years of experience
const yearsDiff = currentDate.getFullYear() - careerStartDate.getFullYear();
const monthsDiff = currentDate.getMonth() - careerStartDate.getMonth();

let yearsOfExperience = yearsDiff;
if (monthsDiff < 0 || (monthsDiff === 0 && currentDate.getDate() < careerStartDate.getDate())) {
  yearsOfExperience = yearsDiff - 1;
}

// If it's been at least 6 months into the current year, round up
if (monthsDiff >= 6 || (monthsDiff >= 0 && yearsDiff > 0)) {
  yearsOfExperience = yearsDiff;
}

// Read README.md
const readmePath = path.join(__dirname, '..', 'README.md');
let readmeContent = fs.readFileSync(readmePath, 'utf8');

// Update the experience line
// Pattern: **Experience:** X+ Years
const experiencePattern = /\*\*Experience:\*\* \d+\+ Years/g;
const newExperienceLine = `**Experience:** ${yearsOfExperience}+ Years`;

readmeContent = readmeContent.replace(experiencePattern, newExperienceLine);

// Write back to README.md
fs.writeFileSync(readmePath, readmeContent, 'utf8');

console.log(`✅ Updated experience to ${yearsOfExperience}+ Years (calculated from January 2022)`);


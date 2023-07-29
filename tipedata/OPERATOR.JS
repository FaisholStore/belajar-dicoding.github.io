//data siswa

const namasiswa = "faishol"; 
const Mathscore = 90;
const ipascore = 60;
const englishScore = 78;

const totalscrore = Mathscore +ipascore +englishScore;
console.log(`Total Score ${namasiswa} :${totalscrore}`);
// Menghitung rata-rata nilai


const averageScore = totalscrore / 3;
console.log(`Rata-rata nilai ${namasiswa}: ${averageScore.toFixed(2)}`);

// Menentukan status kelulusan
const passingGrade = 60;
const isPassed = totalscrore >= passingGrade;
console.log(`${namasiswa} ${isPassed ? "lulus" : "tidak lulus"}`);
// Karakter siswa
const studentName = "John"; // Tipe data string
const studentAge = 17; // Tipe data number (bilangan bulat)
const isStudent = true; // Tipe data boolean
const studentId = BigInt(12345678901234567890); // Tipe data BigInt (angka sangat besar)

// Informasi tambahan
const studentScores = [80, 85, 90]; // Tipe data array (berisi nilai-nilai number)
const hasHomework = null; // Tipe data null (tidak ada nilai atau kosong)

// Fungsi
const greetStudent = function () {
  console.log(`Hello, ${studentName}!`);
};

// Menggunakan symbol untuk menghindari konflik properti
const subjectMath = Symbol("Math");
const subjectScience = Symbol("Science");

// Objek yang merepresentasikan mata pelajaran dan nilai siswa
const studentSubjects = {
  [subjectMath]: 90,
  [subjectScience]: 85,
};

// Menampilkan informasi siswa
console.log(`Student Name: ${studentName}`);
console.log(`Age: ${studentAge}`);
console.log(`Is a student: ${isStudent}`);
console.log(`Student ID: ${studentId}`);
console.log(`Student Scores: ${studentScores.join(", ")}`);
console.log(`Has Homework: ${hasHomework}`);
console.log(`Math Score: ${studentSubjects[subjectMath]}`);
console.log(`Science Score: ${studentSubjects[subjectScience]}`);

// Menjalankan fungsi
greetStudent();

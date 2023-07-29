## Tipe Data

Pada materi sebelumnya kita telah belajar tentang variabel untuk menyimpan nilai. Nilai yang kita tetapkan pada variabel pasti memiliki tipe data. Tipe data merupakan pengklasifikasian data berdasarkan jenisnya. Pada JavaScript terdapat beberapa tipe data sebagai berikut:

### Undefined

Tipe data ini terbentuk ketika sebuah variabel tidak memiliki nilai. Artinya, ketika kita mendeklarasikan variabel tanpa menginisialisasikan nilainya, variabel tersebut menjadi  *undefined* . Contoh:

main.js

```
`let x;
console.log(typeof(x));/* output: undefined */`
```


---

> heloo semuua gua isooll hahahha

```

// Karakter siswa
const studentName = "John"; // Tipe data string
const studentAge = 17; // Tipe data number (bilangan bulat)
const isStudent = true; // Tipe data boolean
const studentId = BigInt(12345678901234567890); // Tipe data BigInt (angka sangat besar)
```


`Pada bagian ini, kita mendeklarasikan beberapa variabel yang merepresentasikan karakter siswa. studentName adalah variabel yang menyimpan nama siswa sebagai string. studentAge menyimpan usia siswa sebagai bilangan bulat. isStudent adalah variabel boolean yang bernilai true, menunjukkan bahwa karakter tersebut adalah siswa. studentId adalah variabel BigInt yang menyimpan nomor ID siswa, yang merupakan angka sangat besar.`


```
// Informasi tambahan
const studentScores = [80, 85, 90]; // Tipe data array (berisi nilai-nilai number)
const hasHomework = null; // Tipe data null (tidak ada nilai atau kosong)

```


Pada bagian ini, kita mendeklarasikan dua variabel lagi. `studentScores` adalah variabel array yang menyimpan nilai-nilai ujian siswa sebagai angka. `hasHomework` adalah variabel null, menunjukkan bahwa siswa tidak memiliki tugas.

```
// Fungsi
const greetStudent = function () {
  console.log(`Hello, ${studentName}!`);
};

```


Kami mendefinisikan fungsi `greetStudent`, yang mencetak pesan sapaan "Hello, {nama siswa}!" ke konsol menggunakan template literals.

```
// Menggunakan symbol untuk menghindari konflik properti
const subjectMath = Symbol("Math");
const subjectScience = Symbol("Science");
```


Dalam bagian ini, kami mendefinisikan dua simbol (`subjectMath` dan `subjectScience`) untuk menghindari konflik nama properti saat membuat objek.

```
// Objek yang merepresentasikan mata pelajaran dan nilai siswa
const studentSubjects = {
  [subjectMath]: 90,
  [subjectScience]: 85,
};
```


Di sini, kami membuat objek `studentSubjects` yang menggunakan simbol sebagai kunci properti. Objek ini merepresentasikan nilai-nilai ujian siswa pada dua mata pelajaran: matematika (`subjectMath`) dan ilmu pengetahuan (`subjectScience`).


```
// Menampilkan informasi siswa
console.log(`Student Name: ${studentName}`);
console.log(`Age: ${studentAge}`);
console.log(`Is a student: ${isStudent}`);
console.log(`Student ID: ${studentId}`);
console.log(`Student Scores: ${studentScores.join(", ")}`);
console.log(`Has Homework: ${hasHomework}`);
console.log(`Math Score: ${studentSubjects[subjectMath]}`);
console.log(`Science Score: ${studentSubjects[subjectScience]}`);

```

Di sini, kita mencetak informasi karakter siswa dan nilai-nilai ujian ke konsol menggunakan `console.log()`.


```
// Menjalankan fungsi
greetStudent();

```


Terakhir, kita menjalankan fungsi `greetStudent()` untuk mencetak pesan sapaan "Hello, John!" ke konsol, sesuai dengan nilai variabel `studentName`.

Hasil dari kode di atas akan menjadi seperti ini (dalam konsol):


HASILLNYA

```
Student Name: John
Age: 17
Is a student: true
Student ID: 12345678901234567890
Student Scores: 80, 85, 90
Has Homework: null
Math Score: 90
Science Score: 85
Hello, John!

```

### OPERATOR

Pada tipe data number, kita juga dapat melakukan perhitungan aritmatika seperti penjumlahan, pengurangan, perkalian, dsb. Berikut operator yang dapat kita gunakan dalam perhitungan aritmatika pada tipe data number:


| Operator | Fungsi          | Contoh       |
| -------- | --------------- | ------------ |
| +        | Penjumlahan     | 10 + 10 = 20 |
| -        | Pengurangan     | 15 - 7 = 8   |
| /        | Pembagian       | 21 / 7 = 3   |
| *        | Perkalian       | 9 * 9 = 81   |
| %        | Sisa hasil bagi | 5 % 2 = 1    |
| **       | Perpangkatan    | 3 ** 3 = 27  |

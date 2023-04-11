interface studentsOrTeachers {
  students: number,
  teachers: number
}

interface Subject {
  mathematics: studentsOrTeachers,
  biology: studentsOrTeachers,
  geography: studentsOrTeachers,
  chemistry: studentsOrTeachers
}

const subjects: Subject = {
        mathematics: {
            students: 200,
            teachers: 6
        },
        biology: {
            students: 120,
            teachers: 6
        },
        geography: {
            students: 60,
            teachers: 2
        },
        chemistry: {
            students: 100,
            teachers: 3
        }
    }

// 1. Создать строку из названий предметов написанных через запятую

let lessons:string = '';

for (let key in subjects) {
  lessons += key + ', ';
}
console.log(lessons.slice(0, lessons.length - 2));

// 2. Посчитать общее количество студентов и учителей на всех предметах

let sum: number = 0;
for (const key in subjects) {
  sum += subjects[key].students + subjects[key].teachers;
}

console.log(sum);

// 3. Получить среднее количество студентов на всех предметах

let sumStudents:number = Object.values(subjects).reduce((acc, n) => {
  acc += n.students

return acc
}, 0);


const averageStudents: number = sumStudents / Object.values(subjects).length;

console.log(averageStudents);

// 4. Создать массив из объектов предметов

let arr: Array<{subjects: string, students: number, teachers: number}> = (
  (Object.entries(subjects).map(([subjects,{students, teachers}]) => {
  return ({ subjects, students, teachers})
    })
  )
)

console.log(arr);

// 5. Получить массив из предметов и отсортировать по количеству преподавателей на факультете от большего к меньшему

console.log(arr.sort((a, b) => b.teachers - a.teachers));

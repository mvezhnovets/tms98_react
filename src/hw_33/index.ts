type Subject = {
  students: number;
  teachers: number;
};

type Lessons = 'mathematics' | 'biology' | 'geography' | 'chemistry';

const subjects = {
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
};

// 1. Создать строку из названий предметов написанных через запятую

function getSubjectNamesAsString(subj: Record<Lessons, Subject>): string {
  return Object.keys(subj).join(',');
}

console.warn(getSubjectNamesAsString(subjects));

// 2. Посчитать общее количество студентов и учителей на всех предметах

function getTotalStudents(subj: Record<Lessons, Subject>): number {
  return Object.values(subj).reduce(
    (accumulator, { students }) => accumulator + students,
    0
  );
}

function getTotalTeachers(subj: Record<Lessons, Subject>): number {
  return Object.values(subj).reduce(
    (accumulator, { teachers }) => accumulator + teachers,
    0
  );
}

console.warn(getTotalStudents(subjects));
console.warn(getTotalTeachers(subjects));

// 3. Получить среднее количество студентов на всех предметах

function getTotal(subj: Record<Lessons, Subject>): number {
  return Object.keys(subj).length;
}

function getAverageStudents(total: number, quantity: number): number {
  return total / quantity;
}

console.warn(
  getAverageStudents(getTotalStudents(subjects), getTotal(subjects))
);

// 4. Создать массив из объектов предметов

const array: Array<{ subjects: string; students: number; teachers: number }> =
  Object.entries(subjects).map(([subjects, { students, teachers }]) => {
    return { subjects, students, teachers };
  });

console.warn(array);

// 5. Получить массив из предметов и отсортировать по количеству преподавателей на факультете от большего к меньшему

console.warn(array.sort((a, b) => b.teachers - a.teachers));

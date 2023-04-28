/* С ниже приведенным массивом решить следующие задачи. Все функции и данные должны быть протипизированы:

    1. Создать строку из имен пользователей через запятую
    2. Посчитать общее количество машин у пользователей
    3. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования
    4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных
    5. Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с названиями марок автомобилей через запятую
 */

type User = {
  name: string;
  phone: string;
  email: string;
  animals?: string[];
  cars?: string[];
  hasChildren: boolean;
  hasEducation: boolean;
};
const users: User[] = [
  {
    name: 'Harry Felton',
    phone: '(09) 897 33 33',
    email: 'felton@gmail.com',
    animals: ['cat'],
    cars: ['bmw'],
    hasChildren: false,
    hasEducation: true
  },
  {
    name: 'May Sender',
    phone: '(09) 117 33 33',
    email: 'sender22@gmail.com',
    hasChildren: true,
    hasEducation: true
  },
  {
    name: 'Henry Ford',
    phone: '(09) 999 93 23',
    email: 'ford0@gmail.com',
    cars: ['bmw', 'audi'],
    hasChildren: true,
    hasEducation: false
  }
];

function printUsersName(users: User[]): string {
  return users.map((element) => element.name).join(', ');
}

console.warn(printUsersName(users));

function hasCars(user: User): user is User & { cars: string[] } {
  return !!user.cars;
}

for (const user of users) {
  if (hasCars(user)) {
    console.warn(user.cars.length);
  }
  //   console.warn(user.cars?.length);
}

function printCarsTotal(users: User[]): number {
  return users
    .filter(hasCars)
    .map((element) => element.cars.length)
    .reduce((accumulator, current) => accumulator + current, 0);
}

console.warn(printCarsTotal(users));

function printUserHasEducation(users: User[]) {
  return users.filter((element) => element.hasEducation);
}

console.warn(printUserHasEducation(users));

function printUserHasAnimal(users: User[]) {
  return users.filter((element) => element.animals);
}

console.warn(printUserHasAnimal(users));

function printCarNames(users: User[]) {
  return users
    .filter((element) => element.cars)
    .map((element) => element.cars)
    .join(',');
}

console.warn(printCarNames(users));

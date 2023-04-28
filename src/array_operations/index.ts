/**
 * Исходные данные
 **/
interface User2 {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
  age: number;
}
const users2: User2[] = [
  {
    id: 7,
    email: 'michael.lawson@reqres.in',
    first_name: 'Michael',
    last_name: 'Lawson',
    avatar: 'https://reqres.in/img/faces/7-image.jpg',
    age: 23
  },
  {
    id: 8,
    email: 'lindsay.ferguson@reqres.in',
    first_name: 'Lindsay',
    last_name: 'Ferguson',
    avatar: 'https://reqres.in/img/faces/8-image.jpg',
    age: 20
  },
  {
    id: 9,
    email: 'tobias.funke@reqres.in',
    first_name: 'Tobias',
    last_name: 'Funke',
    avatar: 'https://reqres.in/img/faces/9-image.jpg',
    age: 40
  },
  {
    id: 10,
    email: 'byron.fields@reqres.in',
    first_name: 'Byron',
    last_name: 'Fields',
    avatar: 'https://reqres.in/img/faces/10-image.jpg',
    age: 36
  },
  {
    id: 11,
    email: 'george.edwards@reqres.in',
    first_name: 'George',
    last_name: 'Edwards',
    avatar: 'https://reqres.in/img/faces/11-image.jpg',
    age: 70
  },
  {
    id: 12,
    email: 'rachel.howell@reqres.in',
    first_name: 'Rachel',
    last_name: 'Howell',
    avatar: 'https://reqres.in/img/faces/12-image.jpg',
    age: 45
  }
];

/**
 * 1. Получить строку с именами и фамилиями всех
 * пользователей через запятую.
 **/
function getUserFullName(user: User2) {
  return `${user.first_name} ${user.last_name}`;
}

const fullnames = users2.map(getUserFullName).join(', ');
console.warn(fullnames);

/**
 * 2. Создать массив из emails по алфавиту
 **/
type Emails = string[];

function getUserEmails(user: User2) {
  return user.email;
}

const emails: Emails = users2.map(getUserEmails);

const sortEmails: Emails = emails.sort();

console.warn(emails);
console.warn(sortEmails);

/**
 * 3.Создать новый массив пользователей,где объект пользователя должен
 * содержать только id и поле, отвечающее за имя пользователя
 * (например, username), которое должно содержать имя и фамилию.
 **/
type UserInfo = Pick<User2, 'id'> & { fullname: string };

function getDetails(user: User2): UserInfo {
  return {
    id: user.id,
    fullname: getUserFullName(user)
  };
}

const shortDetails = users2.map(getDetails);

console.warn(shortDetails);

// Функция для разворота строки
function reverseString(inputString) {
  return inputString.split("").reverse().join("");
}

// Функция для подсчета гласных
function countVowels(inputString) {
  let vowelCount = 0;
  for (let char of inputString.toLowerCase()) {
    if ("aeiouyäöüеёиоуыэюя".indexOf(char) !== -1) {
      vowelCount++;
    }
  }
  return vowelCount;
}

// Функция для поиска максимального элемента в массиве
function findMax(numbers) {
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}

// Функция для вычисления суммы чисел в массиве
function sumArray(numbers) {
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}

// Функция для поиска минимального элемента в массиве
function findMin(numbers) {
  let min = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }
  return min;
}

// Функция для обновления счетчика посещений
function updateVisitCount() {
  let visitCount = localStorage.getItem("visitCount") || 0;
  visitCount++;
  localStorage.setItem("visitCount", visitCount);
  document.getElementById("visitCount").textContent = visitCount;
}

// Функция для поиска элемента в массиве
function findElement(numbers, targetNumber) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === targetNumber) {
      return i;
    }
  }
  return -1;
}

// Класс для создания пользователей
class User {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
  }

  getInfo() {
    return `Имя: ${this.name}, Возраст: ${this.age}, Email: ${this.email}`;
  }
}

// Пример использования функций
// Развернуть строку
const inputString = "hello, world!";
const reversedString = reverseString(inputString);
console.log("Перевернутая строка:", reversedString);

// Подсчитать гласные
const vowelCount = countVowels("Hello, world! Привет, мир!");
console.log("Количество гласных:", vowelCount);

// Найти максимальное число в массиве
const numbers = [5, 8, 3, 12, 6];
const maxNumber = findMax(numbers);
console.log("Максимальное число:", maxNumber);

// Вычислить сумму чисел в массиве
const totalSum = sumArray(numbers);
console.log("Сумма чисел:", totalSum);

// Найти минимальное число в массиве
const minNumber = findMin(numbers);
console.log("Минимальное число:", minNumber);

// Обновить счетчик посещений
window.onload = updateVisitCount;

// Найти элемент в массиве
const targetNumber = 4;
const index = findElement(numbers, targetNumber);
if (index !== -1) {
  console.log("Число", targetNumber, "найдено в позиции:", index);
} else {
  console.log("Число", targetNumber, "не найдено.");
}

// Создать пользователей
const user1 = new User("Влад", 33, "vlad@gmail.com");
const user2 = new User("Саша", 30, "sasha@gmail.com");

console.log(user1.getInfo());
console.log(user2.getInfo());

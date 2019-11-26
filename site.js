//Задача №1 Найти сумму только положительных из 3 чисел
let arrNum = prompt(`Введите количество чисел в массиве`);
let arr = new Array(arrNum);
let i = 0;

for (let i=0; i<arrNum; i++) {
  arr[i]=prompt(`Введите число`);
}

let summa = 0;

for (let i=0; (i<arrNum && arr[i] > 0); i++) {
  summa = summa + +arr[i];
}


alert(`Сумма положительных чисел = ${summa}`);

//Задача №2 Посчитать выражение макс(a*b*c,а+b+c) + 3

let a = prompt(`Введите число a`);
let b = prompt(`Введите число b`);
let c = prompt(`Введите число c`);

alert(`Вы ввели следующие значения: a=${a}, b=${b}, c=${c}.`);


alert(Math.max((+a)*(+b)*(+c),(+a + +b + +c))+3);

console.log();

//Задача №3 Определить какой четверти принадлежит точка с координатами (х,у)

let x = prompt(`Введите координату по оси Х`);
let y = prompt(`Введите коррдинату по оси Y`);

if ((+x > 0) && (+y > 0)) {
  alert("Точка во 2-ой четверти");
}
  else if ((+x > 0) && (+y < 0)) {
    alert("Точка во 4-ой четверти");
  }
    else if ((+x < 0) && (+y > 0)) {
      alert("Точка в 1-ой четверти");
    }
      else {
        alert("Точка во 3-ей четверти");
      }
//Задача №4 найти min,max, min index, max index
let rndNum = prompt(`Введите длину массива`)
let arrRnd= [];
let arrMin = 0;
let arrMax = 0;
let minInd = 0;
let maxInd = 0;

for (let i = 0; i < rndNum; i++) {
  arrRnd[i] = Math.round( Math.random() * 100 );
}

console.log(arrRnd)

for (let t = 0; t < rndNum; t++) {
  if (arrRnd[t] >= arrMax) {
    arrMax = arrRnd[t];
    maxInd = t;
  }
   
  if (arrRnd[t] <= arrMin) {
    arrMin = arrRnd[t];
    minInd = t;
  }
}

alert(`Минимум ${arrMin} с индексом ${minInd}, максимум ${arrMax} с индексом ${arrMin}`);



//Задача №5 Сумма элементов массива с нечётными индексами

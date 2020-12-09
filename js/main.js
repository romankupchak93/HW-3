// 1. Знайдіть суму всіх цифр від 1 до 100.
function sumFromOneToHundred() {
    document.getElementById("AnswerTask1").style.display = "";
}
// 2.  Є масив [1, 2, 3, 4, 5]. З допомогою  цикла for вивести всі елементи на екран.
function MassiveOneToFive() {
    document.getElementById("AnswerTask2").style.display = "";
}
// 3. Є масив [-1, 22, 3, 44, 5]. Виведіть максимальне значення
function MassiveMaxVal() {
    document.getElementById("AnswerTask3").style.display = "";
}
// 4. Попросити юзера ввести 8 чисел і скільки він ввів додатніх, відємних та нулів. Вивести статистику на екран. Також достатньо тільки 1 змінної для отримання даних від юзера.

let anyNumCount = 1;
let anyNumArray = [];
let anyPositive = 0;
let anyNegative = 0;
let zero = 0;

function EightValues() {
    document.getElementById("anyNum").focus();
    if (document.getElementById('anyNum').value === '' || document.getElementById('anyNum').value === null || document.getElementById('anyNum').value === undefined) {
        alert('Помилка! Ви не ввели число');
    } else {
        ++anyNumCount;
        let i = anyNumCount;
        while (i <= 8) {
            document.getElementById('anyNumLabel').innerHTML = `Введіть ${anyNumCount} цифру`;
            i++;
        }
        anyNumArray.push(document.getElementById('anyNum').value);
        if (anyNumCount === 8) {
            document.getElementById('anyNumButtonNext').value = 'Перевірити';
        }

        if (document.getElementById('anyNum').value > 0) {
            anyPositive += 1;
        } else if (parseFloat(document.getElementById('anyNum').value) === 0) {
            zero += 1;
        } else if (document.getElementById('anyNum').value < 0) {
            anyNegative += 1;
        }

        if (anyNumCount > 8) {
            document.getElementById('anyNumQuestion').style.display = 'none';
            document.getElementById('anyNumResult').innerHTML = `Ви ввели: <strong>${anyNumArray}</strong> з них:  
            <br> додатніх - ${anyPositive}  
            <br> від'ємних - ${anyNegative}  
            <br> нулів - ${zero}`;
        }

        document.getElementById('anyNum').value = '';
    }
}

// 5. 5. Надрукуйте табличку множення для числа  8 від 1 до 9. 8 х 1 = 8

function ViewTab() {
    let tAdd = document.getElementById('tab');
    document.getElementById("AnswerTask5").style.display = "";
    let table = '<table class="table table-striped" border=1>';
    for (let j = 1; j <= 9; j++) {
      for (let i = 8; i <=8; i++) {
        let el = '<tr class="table-light">' + '<td class="table-light">' + i + '</td>' + '<td class="table-light">'+"*"+'</td>' + '<td class="table-light">'+j+'</td>' + '<td class="table-light">'+"="+'</td>' +'<td class="table-light">'+(i*j)+'</td>' + '</tr>';
        table += el;
      }
    //   table += '</tr><tr>';
    }
    table += '</table>';
    //console.log(table);
    tAdd.innerHTML = table;
  }
// function ViewTab() {
//     for (let j = 1; j <= 9; j++) {
//         for (let i = 8; i <=8; i++)
//             {
//                 document.write(i + "*" + j + "=" +(i*j) + "<br>");
//             }
//     }
// }

// 6. Є масив з елементами 2, 5, 9, 15, 0, 4. З допомогою цикла for і оператора if вивести на екран цифри, які більше 3-х, але менше 10.
function MassiveSomeVal() {
    document.getElementById("AnswerTask6").style.display = "";
}
// 7
let A, B, C;
document.getElementById('returnOperation').style.display = 'none';
function getValue(id) {
  let res = document.getElementById(id).value - 0;
  if (!isNaN(res))
    return res;
  alert("В цьому елементі " + id + " не числове значення!");
}

function PutNum(val) {
  document.getElementById("window").value = (document.getElementById("window").value + val) - 0;
  // let result = document.getElementById("window").innerHTML = `${A} ${action} ${B} = ${C}`;

}

function plus() {
  A = getValue("window");
  document.getElementById("window").value = '';
  action = "+";
}

function sub() {
  A = getValue("window");
  document.getElementById("window").value = '';
  action = "-";
}

function mult() {
  A = getValue("window");
  document.getElementById("window").value = '';
  action = "*";
}

function div() {
  A = getValue("window");
  document.getElementById("window").value = '';
  action = "/";
}

function clr() {
  document.getElementById("window").value = '';
}

function calculate() {
  B = getValue("window");
  switch (action) {
    case "+":
      C = A + B;
      // document.getElementById("window").innerHTML = `${C} = ${B} + ${C}`;
      break;
    case "-":
      C = A - B;
      break;
    case "*":
      C = A * B;
      break;
    case "/":
      if (B == 0) {
        alert("На нуль не ділимо");
      } else {
        C = A / B;
      }
      break;
  }
  // document.getElementById("window").innerHTML = `${A} ${action} ${B} = ${C}`;
  document.getElementById("window").value = C;
  document.getElementById('returnOperation').style.display = 'block';

  document.getElementById('yes').addEventListener('click', function (){
    document.getElementById("window").value = '';
    document.getElementById('returnOperation').style.display = 'none';
});
  document.getElementById('no').addEventListener('click', function (){
    document.getElementById('returnOperation').style.display = 'none';
    document.getElementById('goodbye').innerHTML = 'Нехай щастить';
});
  // alert('Продовжимо?')
  // document.getElementById("window").innerHTML = `${A} ${action} ${B} = ${C}`;
}

window.onload = function () {

  for (let i = 0; i < 10; i++) {
    (function (val) {
      document.getElementById("but_" + val).onclick = function () {
        PutNum(val)
      }
    })(i);
  }
  document.getElementById("plus").addEventListener("click", plus);
  document.getElementById("calculate").addEventListener("click", calculate);
  document.getElementById("sub").addEventListener("click", sub);
  document.getElementById("mult").addEventListener("click", mult);
  document.getElementById("div").addEventListener("click", div);
  document.getElementById("clr").addEventListener("click", clr);
}
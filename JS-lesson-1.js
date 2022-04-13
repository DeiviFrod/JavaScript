let yolochka1 = 20; // объявление переменной и присвоение ей значения
let yolochka2 = "Hello";
// yolochka1 = 15; - отдельное присвоение значения переменной
let result = yolochka1 + yolochka2; // канкатенация 

let n1 = 30,
    n2 = 30,
    yolochka3 = "100",
    n4 = 500;

let sum_body = +yolochka3 + n4 //изменение типа данных в число через +
let sum_body_string = String(n2) + n4; // изменение типа данных в строку + канкатенация
let sum_body_int = parseInt(yolochka3) + n4; // измение типа данных в число через parseInt + канкатенация
console.log (sum_body_string, typeof(sum_body_string));
console.log (sum_body_int, typeof(sum_body_int));

let compare_1 = n1 > n2; // булевый тип
let compare_2 = n1 < n2;
console.log(compare_1, typeof(compare_1));

let bool_true = true; // булевый тип данных
let bool_false = false;// булевый тип данных
let b1 = bool_true + bool_false;

let condition = true
if (compare_1) {    // if (условие true/false) {код который будет выполняться если УСЛОВИЕ-TRUE}
    let t_1 = 5;
    let t_2 = 10;
    let result = t_1 + t_2
    console.log("if-DONE",result)
} else if (compare_2) {    // else if (условие true/false) { код который будет выполняться если if-FALSE и условие-TRUE}
    console.log ("else if-DONE",compare_2)
} else {           // else нет условия, выполняется если if(false) и else if (false)
    console.log ("else DONE")
}  

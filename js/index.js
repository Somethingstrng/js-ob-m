//объекты
const user1={};
console.log(user1);
console.log(typeof user1);

const user2={
    firstName: 'Ivan',
    lastName: 'Ivanov',
    workExp: 10,
    isMale: true,
};
console.log(user2);
console.log(user2.firstName, user2.lastName);
user2.category='junior';//добавление свойства для объекта
console.log(user2);
user2.workExp=15;//изменение свойства для объекта
console.log(user2);

user2_copy=user2;
console.log(user2_copy);

const user3={
    firstName: 'Mary',
    lastName: 'Petrova',
    isFemale: true,
    sayHello: function(){
        console.log('Hello! My name is', user3.firstName, user3.lastName);
    },
    doGreeting: function(){
        console.log('Hi! My name is '+this.firstName+' '+this.lastName);
    },
    doGreeting2: function(someUser){
        console.log('Hi, ', someUser.firstName);
    },
    sayHelloUser2: function(){
        console.log('Hello! My name is', user2.firstName, user2.lastName);
    },
    outThisObject: function(){
        console.log(this);
    },
};
console.log(user3.sayHello());
console.log(user3.doGreeting());
console.log(user3.sayHelloUser2());
console.log(user3.outThisObject());
console.log(user3.doGreeting2(user2));

const user4={
    0: 'Ivan',
    1: 'Ivanov',
    2: 10,
    3: true,
};
console.log(user4[0]);
console.log(user4[1]);
console.log(user4[2]);
console.log(user4[3]);
console.log(user3['firstName']);

//удаление свойства объекта
delete user3.lastName;
console.log(user3);

function mySum(a,b){
    return a+b;
};

function helloWithUser(user){
    console.log('Hello, ', user.firstName, user.lastName);
}
console.log('function helloWithUser')
helloWithUser(user1);
helloWithUser(user2);
helloWithUser(user3);

const car={
    type: 'BMW',
    carName: 'Tina',
    carAge: {
        develop: 2007,
        totalAge: 14,
        inUse:{
            userOlya: 5,
            userMisha: 7,
        }
    },
    carPower: 167,
    carFemale: true,
    carColor: 'white',
    carSize: 386,
};
console.log(car.carAge.inUse.userMisha)

const test1={};
const test2=test1;
const test3={};
//test1===test3 false

let obj1={}, obj2='Tom';
Object.assign(obj2, obj1);
console.log(obj1);
console.log(obj2);
obj1.name='objname1';
obj2.name='objname2';
console.log(obj1);
console.log(obj2);
let obj3={age: 34};
Object.assign(obj3,obj1);
let obj4={name: 'somename'};
Object.assign(obj4,obj3);

/*let x=0, i;
for(i=1;i<=10;i++){
    x+=1
}*/

for(let i in car){
    console.log(i);
    console.log(car[i]);
}

//массивы
let someObj={};//пустой объект
someObj.property1='hello';
someObj.property2=100;

let someArray=[];//пустой массив
let arr1=[1,2,3,4,5,6,7,8,9,10];
console.log(arr1);
console.log(arr1[0]);
console.log(arr1[4]);
arr1[0]=1000;
console.log(arr1);
let sum_1el_and_2el=arr1[0]+arr1[1];
console.log(sum_1el_and_2el);

let arr2=['name1', 'name2', 'name3', 'name4']
console.log(arr2);
console.log(arr2.length);//количество строк
arr2[arr2.length]=90;
console.log(arr2);

//посчитать сумму массива

const arrayMult=(arr)=>{
    let result=1;
    for(let i=0;i<arr.length;i++){
        result*=arr[i];
    };
    return result;
};
const result2=arrayMult([1,2,3,4,5]);
console.log(result2);

const arrayOut = (arr) =>{
    for(let i=0;i<arr.length;i++){
        result*=arr[i];
    }
};

let arr3=['maria', 10, true, {role: 'user'}];
let arr4=[,,,,,,];
console.log(arr4);
console.log(arr4[arr4.length-1]);

//функция которая находит минимум массива
const searchMinArray=(arr)=>{
    let i, min=arr[0];
    for(i=0;i<arr.length;i++){
        if (arr[i]<min){
            min=arr[i];
        }
    }
    return min;
}

//функция которая находит max массива
const searchMaxArray=(arr)=>{
    let i, max=arr[0];
    for(i=0;i<arr.length;i++){
        if (arr[i]>max){
            max=arr[i];
        }
    }
    return max;
}

//вычислить сумму четных элементов массива функция
//вернуть общий массив без повторов
const arraySum=(arr)=>{
    let result=0;
    for(let i=1;i<arr.length;i=i+2){
        result+=arr[i];
    };
    return result;
};
const result=arraySum([1,2,3,4,5,6,7,8,9,10,11,12]);
console.log(result);

const task2=(array1,array2)=>{
    for(let i=array1.length,j=0;j<array2.length;i++,j++){
        array1[i]=array2[j];
    }
    return array1;
}

const task3=(number,countZeros)=>{
    let i,resultArray=[];
    if(number<0){
        resultArray[0]='-';
    }   else{
        resultArray[0]='+';
    }
    for(i=1;i<=countZeros+1;i++){
        resultArray[i]=0;
    }
    resultArray[i]=Math.abs(number);
    return resultArray;
}

let str1='hello world';

let frts=['apple','banana'];
frts.push('watermelon')//добавить в конец
frts.unshift('melon')//добавить в начало
frts.shift();//удалить в начале
frts.pop();//удалить в конце
console.log(frts);

const myArray=[10,20,30,40,50];
myArray.forEach((i)=>console.log(i));

function OutNum(number){
    console.log(number)
}
myArray.forEach(OutNum);

myArray.forEach((i)=>Math.pow(i,2));

function powNum(number){
    return number**2;
}
myArray.forEach(powNum);

//filter
const myArrayBigger30=myArray.filter(i=>(i>=30));

const word=['asdfasd','fdasfafgad','fghydfhg','fds','xcvb','bgfdsrf'];
const res_word=word.filter((i)=>i.length>=5);

//every
myArray.every(i=>(i>=18));
//some
myArray.some(i=>(i>=18));

myArray.every((i)=>(i%==0));

const myArr1=['Vasya', 'Petya']; 
const myArr2=['Lyda','Ira','Lena','Vasya']; 
const myArr3=myArr1.concat(myArr2);
const uniqArray = [...new Set(myArr3)];


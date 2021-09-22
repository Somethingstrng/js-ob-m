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
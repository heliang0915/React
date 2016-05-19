 // import {React} from "react";

"use strict"

let a='abc';

// let point=new Point(0,2);
// console.log(point.x);

console.log(a);
let b=(mes)=>mes;
console.log(b("Hello Es623"));
// alert(11);
let abc='abcdef';


let ms=(x,y,z)=>x+y+z;

let code=(h)=>x=>x+h;

//数组解构
let ary=['1','2','3'];
let [x,y,z]=ary;
console.log(x);
console.log(y);
console.log(z);

//对象解构
let obj={name:"张三",age:100,min:'10'};
let {name,age,min}=obj;

console.log(name);
console.log(age);
console.log(min);

//字符串解构

let str="hello";
let [m,n,q,w,r]=str;

console.log(m);
console.log(n);
console.log(q);
console.log(w);
console.log(r);

// let ary=[1,2,3,4,5];
ary.forEach((v)=>console.log(v));

const ADMIN={
	test:function(){
		console.log(this);
		var btn=document.getElementById('btn');
		btn.addEventListener('click',(ev)=>{
			console.log(this);
		});
		// btn.onClick=(ev)=>{
			
		// 	alert('a');
		// 	console.log(this);
		// }
	}
}


class Animal{
	constructor(name){
		this.name=name;
	}
	say(){
		console.log("动物的名称"+this.name);
	}
}


class Cat extends Animal{

	constructor(name,age){
		super(name);
		this.age=age;
	}
	say(){
		console.log("小猫的名字"+this.name+" 小猫的年龄"+this.age);
	}
}

var animal=new Animal("Kety");
var cat=new Cat("Tom",10);

animal.say();
cat.say();


// 字面量增强

let aaa={
	test(){
		console.log('test');
	}
}

let bbb={
	__proto__:aaa, //继承字面量
	work(){
		console.log('work');
	}
}

//字符串模版
let num=Math.random();
console.log(`you number is ${num}`);

let name2='张三';
let age2=10;

console.log(`用户名${name2} 年龄 ${age2}`);


aaa.test();

bbb.test();
bbb.work();




// var btn=document.getElementById('btn');
// btn.addEventListener('click',function(ev){
// 	alert(ev);
// });

 ADMIN.test();
 let fn=(name='deauletVal',...rest)=>{
 	console.log(name)
 	console.log(rest);
 };
  let fn2=(...rest)=>{
 	console.log(rest);
 };

 let names=['tom','jack','kety'];

 let fn3=(...params)=>{
 	console.log(`Hello ${params}`);
 }


fn('张三','a','b');
fn2('张三','a','b');
fn3(...names);


let map=new Map();
map.set('key',"aa");

console.log(map.get('key'));
console.log(map.has('key'));
console.log(map.size);

let set=new Set();

set.add("hello");

console.log(set.has('hello'));
console.log(set.size);


let wm=new WeakMap();
console.log(wm);
wm.set(set,{name:'lisi'});
console.log(wm.size);

let ws=new WeakSet();
ws.add({name:'aaa'});
console.log(ws.size);




//代理
// let obj2={name:'a1',age:10};

// var fn4={
// 	set(r,p,v){
// 		console.log("prop"+p+" val"+v);
// 		r[p]=v;
// 	}
// }
// obj2=Proxy(obj2,fn4);

// obj2['name']='a2';

//Object.assign({name:'张三'},{age:10});
var aa={};
Object.assign(aa,{age:10},{name:'zhangsan'})
console.log(aa);

// function testTable(target){
// 	target.isTestTable=true;
// }

// @testTable
// class MyTest(){

// }

// console.log(MyTest.isTestTable);

const comp=n=>n+1;

console.log(comp(1));


//高阶函数
const sum=(x,y)=>x+y;
const calculate=(fn,x,y)=>fn(x,y);

let result=calculate(sum,1,2);
console.log(result);


let students = [
    {name: 'Anna', grade: 6},
    {name: 'John', grade: 4},
    {name: 'Maria', grade: 9}
];

let rr=student=>student.grade>6;

// console.log(students.filter(rr));


let myItem=student=>student.grade>6;

// console.log(students.map(myItem));


console.log(students.filter(rr).map(myItem));
//递归

const digui=num=>{
	if(num>0){
		console.log(num);
		digui(num-1);
	}
}

digui(5);


const jc= num2 =>{

	if(num2<=0){
		return 1;
	}else{
		return num2*jc(num2-1);
	}
}

console.log(jc(5));

//functor

let fn5=num=>num+1;

let ary2=[1,2,3];

console.log("fn5:"+ary2.map(fn5));



//组合

let comm=(f,g)=>x=>f(g(x));
let toUperCase=x=>x.toUpperCase();
let ex=x=>`${x}`;

let ang=comm(ex,toUperCase);

console.log(ang('hello world'));

//解构函数

const foo=()=>[1,2,3];
const [f1,f2,f3]=foo();
console.log(f1,f2,f3);

const [f4,...f5]=[4,5,6];
console.log(f4);
console.log(f5);

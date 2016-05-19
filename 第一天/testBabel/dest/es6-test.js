// import {React} from "react";

"use strict";

var _assign = require("babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

var _weakSet = require("babel-runtime/core-js/weak-set");

var _weakSet2 = _interopRequireDefault(_weakSet);

var _weakMap = require("babel-runtime/core-js/weak-map");

var _weakMap2 = _interopRequireDefault(_weakMap);

var _set = require("babel-runtime/core-js/set");

var _set2 = _interopRequireDefault(_set);

var _map = require("babel-runtime/core-js/map");

var _map2 = _interopRequireDefault(_map);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _slicedToArray2 = require("babel-runtime/helpers/slicedToArray");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var a = 'abc';

// let point=new Point(0,2);
// console.log(point.x);

console.log(a);
var b = function b(mes) {
	return mes;
};
console.log(b("Hello Es623"));
// alert(11);
var abc = 'abcdef';

var ms = function ms(x, y, z) {
	return x + y + z;
};

var code = function code(h) {
	return function (x) {
		return x + h;
	};
};

//数组解构
var ary = ['1', '2', '3'];
var x = ary[0];
var y = ary[1];
var z = ary[2];

console.log(x);
console.log(y);
console.log(z);

//对象解构
var obj = { name: "张三", age: 100, min: '10' };
var name = obj.name;
var age = obj.age;
var min = obj.min;


console.log(name);
console.log(age);
console.log(min);

//字符串解构

var str = "hello";

var _str = (0, _slicedToArray3.default)(str, 5);

var m = _str[0];
var n = _str[1];
var q = _str[2];
var w = _str[3];
var r = _str[4];


console.log(m);
console.log(n);
console.log(q);
console.log(w);
console.log(r);

// let ary=[1,2,3,4,5];
ary.forEach(function (v) {
	return console.log(v);
});

var ADMIN = {
	test: function test() {
		var _this = this;

		console.log(this);
		var btn = document.getElementById('btn');
		btn.addEventListener('click', function (ev) {
			console.log(_this);
		});
		// btn.onClick=(ev)=>{

		// 	alert('a');
		// 	console.log(this);
		// }
	}
};

var Animal = function () {
	function Animal(name) {
		(0, _classCallCheck3.default)(this, Animal);

		this.name = name;
	}

	Animal.prototype.say = function say() {
		console.log("动物的名称" + this.name);
	};

	return Animal;
}();

var Cat = function (_Animal) {
	(0, _inherits3.default)(Cat, _Animal);

	function Cat(name, age) {
		(0, _classCallCheck3.default)(this, Cat);

		var _this2 = (0, _possibleConstructorReturn3.default)(this, _Animal.call(this, name));

		_this2.age = age;
		return _this2;
	}

	Cat.prototype.say = function say() {
		console.log("小猫的名字" + this.name + " 小猫的年龄" + this.age);
	};

	return Cat;
}(Animal);

var animal = new Animal("Kety");
var cat = new Cat("Tom", 10);

animal.say();
cat.say();

// 字面量增强

var aaa = {
	test: function test() {
		console.log('test');
	}
};

var bbb = {
	__proto__: aaa, //继承字面量
	work: function work() {
		console.log('work');
	}
};

//字符串模版
var num = Math.random();
console.log("you number is " + num);

var name2 = '张三';
var age2 = 10;

console.log("用户名" + name2 + " 年龄 " + age2);

aaa.test();

bbb.test();
bbb.work();

// var btn=document.getElementById('btn');
// btn.addEventListener('click',function(ev){
// 	alert(ev);
// });

ADMIN.test();
var fn = function fn() {
	for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
		rest[_key - 1] = arguments[_key];
	}

	var name = arguments.length <= 0 || arguments[0] === undefined ? 'deauletVal' : arguments[0];

	console.log(name);
	console.log(rest);
};
var fn2 = function fn2() {
	for (var _len2 = arguments.length, rest = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
		rest[_key2] = arguments[_key2];
	}

	console.log(rest);
};

var names = ['tom', 'jack', 'kety'];

var fn3 = function fn3() {
	for (var _len3 = arguments.length, params = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
		params[_key3] = arguments[_key3];
	}

	console.log("Hello " + params);
};

fn('张三', 'a', 'b');
fn2('张三', 'a', 'b');
fn3.apply(undefined, names);

var map = new _map2.default();
map.set('key', "aa");

console.log(map.get('key'));
console.log(map.has('key'));
console.log(map.size);

var set = new _set2.default();

set.add("hello");

console.log(set.has('hello'));
console.log(set.size);

var wm = new _weakMap2.default();
console.log(wm);
wm.set(set, { name: 'lisi' });
console.log(wm.size);

var ws = new _weakSet2.default();
ws.add({ name: 'aaa' });
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
var aa = {};
(0, _assign2.default)(aa, { age: 10 }, { name: 'zhangsan' });
console.log(aa);

// function testTable(target){
// 	target.isTestTable=true;
// }

// @testTable
// class MyTest(){

// }

// console.log(MyTest.isTestTable);

var comp = function comp(n) {
	return n + 1;
};

console.log(comp(1));

//高阶函数
var sum = function sum(x, y) {
	return x + y;
};
var calculate = function calculate(fn, x, y) {
	return fn(x, y);
};

var result = calculate(sum, 1, 2);
console.log(result);

var students = [{ name: 'Anna', grade: 6 }, { name: 'John', grade: 4 }, { name: 'Maria', grade: 9 }];

var rr = function rr(student) {
	return student.grade > 6;
};

// console.log(students.filter(rr));

var myItem = function myItem(student) {
	return student.grade > 6;
};

// console.log(students.map(myItem));

console.log(students.filter(rr).map(myItem));
//递归

var digui = function digui(num) {
	if (num > 0) {
		console.log(num);
		digui(num - 1);
	}
};

digui(5);

var jc = function jc(num2) {

	if (num2 <= 0) {
		return 1;
	} else {
		return num2 * jc(num2 - 1);
	}
};

console.log(jc(5));

//functor

var fn5 = function fn5(num) {
	return num + 1;
};

var ary2 = [1, 2, 3];

console.log("fn5:" + ary2.map(fn5));

//组合

var comm = function comm(f, g) {
	return function (x) {
		return f(g(x));
	};
};
var toUperCase = function toUperCase(x) {
	return x.toUpperCase();
};
var ex = function ex(x) {
	return "" + x;
};

var ang = comm(ex, toUperCase);

console.log(ang('hello world'));

//解构函数

var foo = function foo() {
	return [1, 2, 3];
};

var _foo = foo();

var _foo2 = (0, _slicedToArray3.default)(_foo, 3);

var f1 = _foo2[0];
var f2 = _foo2[1];
var f3 = _foo2[2];

console.log(f1, f2, f3);

var f4 = 4;
var f5 = [5, 6];

console.log(f4);
console.log(f5);
const _ = require('underscore');

var arr = [3,6,9,1,12];
//underscore 내의 함수들 이용하면 편리
console.log(arr[0]);
console.log(arr[arr.length-1]);
console.log(_.first(arr));
console.log(_.last(arr));

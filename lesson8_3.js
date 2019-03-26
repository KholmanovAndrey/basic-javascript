
var arr = [];
for (var i = 0; i < 3; i++) {
    ((j) => {
        arr.push(function() { console.log(j) });
    })(i);
}

arr[0](); // 3
arr[1](); // 3
arr[2](); // 3

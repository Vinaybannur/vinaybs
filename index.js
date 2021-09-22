let arr = [{name:"vinay",lastName:"bannur",className:'b28'}];
for (let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

for (var key in arr){
    console.log(arr[key]);
}

for (var a of arr){
    console.log(a);
}

arr.forEach(element => console.log(element));
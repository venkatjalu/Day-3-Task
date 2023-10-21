var a = {
   name: "i love you gabbi for ever",
   age:26,
   newname: ["jalu", "vel", "gabbi", "aarav"]
}

for(var i in a.newname){
console.log(i,a.newname[i]);
}


var arr = [
{
   "name": "jalu",
   "age": 23
},
{
   "name": "vel",
   "age": 22
},
{
   "name": "than",
   "age": 21
},
{
   "name": "mari",
   "age": 20
}
];
for(var i=0; i<arr.length; i++){
   console.log(arr[i].name+": "+arr[i].age);
}

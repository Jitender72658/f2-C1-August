let arr = [
  { id: 1, name: 'john', age: 18, profession: 'developer' },
  { id: 2, name: 'jack', age: 20, profession: 'developer' },
  { id: 3, name: 'karen', age: 19, profession: 'admin' },
];

// Don't worry about consoling these functions, they are already being called on the button clicks.
// Please don't change anything in the index.html file.

function PrintDeveloper() {
  //Write your code here , just console.log
  console.log("printing developers");
  for(let i of
     arr){
    if(i.profession=='developer'){
      console.log(i);
    }
  }
}

function addData() {
  //Write your code here, just console.log
  let forthEmployee = {id:4,name:"susan",age:"20",profession:"intern"};
  for(let i = 0;i<arr.length;i++){
    if(arr[i].id==forthEmployee.id){
      console.log("Array after adding new data", arr);
     return;
    }
  }
  arr.push(forthEmployee);
  console.log("Array after adding new data", arr);

}

function removeAdmin() {
  //Write your code here, just console.log
  for(let i =0;i<arr.length;i++){
    if(arr[i].profession=='admin'){
      arr.splice(i,1);
    }
  }
  console.log("Array after removing admin", arr);
}

let newArray = [
  { id: 5, name: 'boult', age: 22, profession: 'team-lead' },
 { id: 6, name: 'harry', age: 26, profession: 'developer' },
  { id: 7, name: 'kunal', age: 18, profession: 'admin' },
  { id: 8, name: 'pop', age: 24, profession: 'intern' },
  { id: 9, name: 'root', age: 29, profession: 'developer' },
];

function concatenateArray() {
  if(arr.length>4){
    console.log('Array after concatination',arr);
    return;
  }
  arr.push(...newArray);
  console.log('Array after concatination',arr);
}

// Here is an example of how functions work,
// basically a function is a block of code which can directly access your 'arr' variable since arr is global.
// If I have a function called consoleArr(), that can directly access arr like this to console it.

function consoleArr() {
  console.log('Consoling Array Variable', arr);
}

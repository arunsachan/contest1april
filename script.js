/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map((item)=>{
    if(item.profession == 'developer'){
      console.log(item);
    }
  })
    
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((item)=>{
    if(item.profession == "developer"){
      console.log(item);
    }
  })

}

function addData() {
  //Write your code here, just console.log
  let newStud= {id:4,name:"susan",age:"20",profession:"intern"};
  arr.push(newStud);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
 
}


function concatenateArray() {
  //Write your code here, just console.log
  let brr= [
    { id: 1, name: "Ram", age: "35", profession: "Tester" },
    { id: 2, name: "Shyam", age: "25", profession: "Etl" },
    { id: 3, name: "Vikram", age: "29", profession: "Aws" },
  ];
  let childArr= arr.concat(brr);
  console.log(childArr);
  
}

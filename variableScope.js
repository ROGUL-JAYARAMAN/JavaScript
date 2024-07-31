var a = 10; //global scope
console.log("Declared as var : ", a);

const c = 30;
console.log("Declared as const : ", c);

{
  console.log("Inside a function , outside of declaration");

  console.log("printing a inside a function : ", a);

  let b = 20; //local scope
  console.log("Declared as let : ", b);

  console.log("printing b inside a function : ", b);

  console.log("printing c inside a function : ", c);
}
//console.log("print outside of the function ",b); //printing b : error b is not defined

//c=50;   //modifyning c : error modifying const

console.log(c,"Modifying c")  

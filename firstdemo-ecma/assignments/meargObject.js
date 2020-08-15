// You have two objects - { a: 1, b: 2 } and { d: 4, e: 5 }.
// create the following output: { a: 1, b: 2, c: 3, d: 4, e: 5 }.
// NOTE: modifying the resulting object should not change the values of 2 existing objects.

let object1 = {a:1,b:2}
let object2 = {s:4,e:5}

let meargeObject=(obj1,appendObj,obj2)=>{
    return (
        Object.assign(obj1,appendObj,obj2)
    )
}
console.log("Mearged object is:", meargeObject(object1,{c:3},object2))
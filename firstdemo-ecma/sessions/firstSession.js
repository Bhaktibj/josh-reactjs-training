// Variable Diclarationns

let FirstName="Bhakti"
console.log("Before First Name is:", FirstName) // Before first name is
FirstName="Shradha"
console.log("After First Name is:", FirstName) // After first name is

const LastName="Jadhav"
console.log("Before Last Name is using const:", LastName)
// LastName="Mane"                                           # giving Type Error
// console.log("After last name is using const:", LastName)

//************************************************************************************* */

// Functions
// Arrow functions

let setLastName=(lastname)=>lastname + "welcome";
console.log("Using arrow function", setLastName("Ross"))

let users = ['Bhakti', 'Jyoti', 'Athrava']
let user = users.map(userName=>{console.log(userName)})
let length = users.map(user=>{user.length})
console.log(length)

// existing function
function setFirstName(firstname){
    console.log("Using existing function:", firstname)}
return setFirstName("john");

//*************************************************************************************** */

// Template Literals
let pinCode = 566773, 
phoneNumber = 9008777377;

let detail = `PinCode and PhoneNumber is: ${pinCode}, ${phoneNumber}`;
console.log(detail);


// Given an array of email addresses, find the ones ending with ".com"

let emailAddress = ['bhakti@gmail.com', 'shradha@gmail.com', 'josh@gmail.com', 
'haptik@gmail.com', 'hjhshd@gmail', 'karan@gmail.comm']

let endsWithCom=[];
for(let i = 0; i < emailAddress.length; i++) {
   if(emailAddress[i].endsWith('.com')){
     endsWithCom.push(emailAddress[i])
    }
} 
console.log("Email address are ends with .com: ",endsWithCom)


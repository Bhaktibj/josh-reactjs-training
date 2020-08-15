// Write a function which will accept an array of user objects and for each username prints a customised greeting message.
// The User object would contain the following keys: "firstName", "username", "email". Hint: destructure the params.

let greetUser=(firstName, username, email)=>{
    return [
        firstName,
        username,
        email
    ];
}
let greeting = [firstName, username, email]=greetUser("Bhakti","Bhaktibj","Bhaktibj@gmail.com");
console.log(`Hi ${firstName}, 
you are registered with us. Your username is:${username} and your email is ${email}`)

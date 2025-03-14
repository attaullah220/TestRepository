let role;

role = prompt("Enter user Role!")

if(role === "Employee" || role === "EnrolledMemebr" || role === "Subscriber" || role ==="NonSubscriber"){
console.log("Welcome to Dietary Services")
}
else {
    alert("Sorroy! You are not allowed to access the system!")
}

let person = "Employee";
let isEnrolledMemebr = false;

if(person === "Employee"){
    console.log("He is authorized to have access to Dietary Services.");
}

else{
    console.log("Person is not authorized.");
}

if(person === "Employee"){
    if(isEnrolledMemebr === true){
        console.log("He is authorized to have access to Dietary Services and one-on-one interaction with a dietician.");
    }
    else {
        console.log("Person is not an Enrolled Memebr.");
    }
}

else{
    console.log("Person is not an Employee.");
}
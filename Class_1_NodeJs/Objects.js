const allUsers = [{
    firstName: "Om",
    gender: "male"
}, {
    firstName: "abc",
    gender: "female"
}, {
    firstName: "pqr",
    gender: "male"
}]

for(let i = 0; i < allUsers.length; i++){
    if(allUsers[i]["gender"] == "male"){
        console.log(allUsers[i]["firstName"])
    }
}

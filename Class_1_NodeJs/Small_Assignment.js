// Print the First Name of the people with male as their gender

const personArray = ["Om", "abc", "pqr"]
const genderArray = ["male", "male", "female"]

for(i = 0; i <= personArray.length; i++){
    if(genderArray[i] == "male"){
        console.log(personArray[i])
    }
}
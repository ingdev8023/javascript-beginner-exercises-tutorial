let total = prompt('How many km are left to go?');

// Your code below:
function kmToGo (total) {
    let totalNumber = parseInt(total)
    if(total > 100){
        return "We still have a bit of driving left to go"
    } else if(total > 50 & total <= 100) {
        return "We'll be there in 5 minutes"
    } else {
        return "I'm parking. I'll see you right now"
    }

}
console.log(kmToGo(total))



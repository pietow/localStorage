// localStorage.setItem('fname', 'piet')
// localStorage.setItem('lname', 'doe')
let name = localStorage.username
if(!name) {
    // name = prompt("What is your name?")
    localStorage.usrename = name
}

localStorage.lastRead = (new Date()).toUTCString()
let lastRead = new Date(Date.parse(localStorage.lastRead))
// console.log(lastRead)

// localStorage.clear()

const user = {
    fname: 'piet',
    lname: 'doe',
}

localStorage.user = JSON.stringify(user)
const retrieved = JSON.parse(localStorage.user)
console.log(retrieved.lname)

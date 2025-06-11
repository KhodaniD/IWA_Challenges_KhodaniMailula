// Challenge e: Displaying a person's name and role in the DOM
const firstname = "Alex"
const surname = "Naidoo"
export const role = "Head of Marketing"
const display = firstname + " " + surname + " (" + role + ")"
document.querySelector('#alex').innerText = display
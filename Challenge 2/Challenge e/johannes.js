// Challenge e: Displaying a name and role in the HTML document
const firstname = "Johannes"
const surname = "Potgieter"
export const role = "Intern"
const display = firstname + " " + surname + " (" + role + ")"
document.querySelector('#johannes').innerText = display
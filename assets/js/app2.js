let inputs = document.querySelectorAll('input');
let labels = document.querySelectorAll('label');

inputs.forEach(input => {
    input.addEventListener('focus', () => {
        let id = input.getAttribute('id');
        labels.forEach(element => {
            element.classList.remove('focused');
        });
        document.querySelector('label[for*=' + id + ']').classList.add('focused');
    });
});


let printBox = document.querySelector('p#boxType');
let print = document.querySelector('#print');
function printClick() {
    printBox.innerHTML = '';
    print.classList.add('progress');
    print.setAttribute('disabled', '');
    let fname = document.querySelector('#fname').value;
    let lname = document.querySelector('#lname').value;
    let num = document.querySelector('#num').value;
    let age = document.querySelector('#age').value;
    let email = document.querySelector('#email').value;
    let i = 0;

    let paragraph = `Hi ${fname} ${lname}, Now I have your number which is ${num}, also I know your age ${age} and your email 
    ${email}`;


    let counter = setInterval(() => {
        printBox.append(paragraph[i]);
        i++;
        if (i === paragraph.length){
            print.classList.remove('progress');
            print.removeAttribute('disabled');
            clearInterval(counter);
        }
    }, 100);
}
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


let printBox = document.querySelector('#boxType');
let print = document.querySelector('#print');
let espan = document.querySelector('#eSpan');
let courser = document.querySelector('#coursor');
let detailes = {'fname' : 'fadi', 'lname' : 'noumih', 'number' : '0935741791', 'age' : '21', 'country' : 'Syria'}
function printClick() {
    printBox.innerHTML = '';
    print.classList.add('progress');
    print.setAttribute('disabled', '');
    courser.style.display = 'inline';
    if (document.querySelector('#fname').value != '') {
        detailes.fname = document.querySelector('#fname').value;
    }
    if (document.querySelector('#lname').value != '') {
        detailes.lname = document.querySelector('#lname').value;
    }
    if (document.querySelector('#num').value != '') {
        detailes.number = document.querySelector('#num').value;
    }
    if (document.querySelector('#age').value != '') {
        detailes.age = document.querySelector('#age').value;
    }
    if (document.querySelector('#country').value != '') {
        detailes.country = document.querySelector('#country').value;
    }
    let year = new Date().getFullYear() - detailes.age;
    
    let i = 0;
    let paragraph = ` Hi ${detailes.fname} ${detailes.lname}, Thanks for using my website, 
                    as you are ${detailes.age} years old, I think you have been born in ${year}, 
                    since you live in ${detailes.country}, god helps you, 
                    and this phone number ${detailes.number} is private, don't worry.`;

    let counter = setInterval(() => {
        printBox.append(paragraph[i]);
        i++;

        if (i === paragraph.length){
            print.classList.remove('progress');
            print.removeAttribute('disabled', '');
            courser.style.display = 'none';
            clearInterval(counter);
        }
    }, 100);
}

            
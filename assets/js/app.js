let randArray = [];
let generate = document.querySelector('#generate');
let sum = document.querySelector('#sum');
let sumBox = document.querySelector('#sumB');
let sum5 = document.querySelector('#sum5');
let sumBox5 = document.querySelector('#sumB5');
let line = document.querySelectorAll('.line');

// this code will be excuted when you press the generate button
function generateClick() {
            let i = -1;
            generate.classList.add('progress');
            generate.setAttribute('disabled', '');
            sum.classList.add('disable');
            sum.setAttribute('disabled', '');
            sumBox.innerHTML = '';
            sum5.classList.add('disable');
            sum5.setAttribute('disabled', '');
            sumBox5.innerHTML = '';
            line.forEach(lin => {
                lin.classList.add('stop');
            });
            document.querySelectorAll('b').forEach(element => {
                element.innerHTML = '';
            });
            document.querySelectorAll('.greenLight').forEach(item => {
                item.classList.remove('active');
            });
    let counter = setInterval(() => {
        i++;
        randArray [i] = Math.round(Math.random() * 100);
        document.querySelector('#num' + i).innerHTML = randArray[i];
        document.querySelectorAll('.greenLight').forEach(item => {
            item.classList.remove('active');
        });
        document.querySelector('#green' + i).classList.add('active');
        if (i === 9){
            setTimeout(() => {
                document.querySelectorAll('.greenLight').forEach(item => {
                item.classList.remove('active');
            });
            }, 500);
            generate.classList.remove('progress');
            generate.removeAttribute('disabled');
            sum.classList.remove('disable');
            sum.removeAttribute('disabled');
            sum5.classList.remove('disable');
            sum5.removeAttribute('disabled');
            line.forEach(lin => {
                lin.classList.remove('stop');
            });
            clearInterval(counter);
        };
    }, 500);
};

// this is the original code 
/* var randArray = [];
for (var i = 0 ;i <= 10 ; i++) {
    randArray [i] = Math.round(Math.random() * 100);
};
document.write('<h5> Randomly Generated Array </h5>');
document.write('<p>' + randArray + '</p>'); */



function sumClick() {
    let sumO = 0;
    let i = -1;
    sum.classList.add('progress');
    sum.setAttribute('disabled', '');
    sumBox.innerHTML = '' ;
    document.querySelectorAll('.greenLight').forEach(item => {
        item.classList.remove('active');
    });
    let counter = setInterval(() => {
        i++;
        document.querySelector('#green' + i).classList.add('active');
        if (randArray[i]%2 == 0){
            sumO += randArray[i];
            sumBox.innerHTML = sumO ;
        }
        else{
            setTimeout(() => {
                document.querySelector('#green' + i).classList.remove('active');
            }, 400);
        }

        if (i === 9){
            sum.classList.remove('progress');
            sum.removeAttribute('disabled');
            clearInterval(counter);
        };
    }, 500);
}


function sum5Click() {
    let sumO5 = 0;
    let i = -1;
    sum5.classList.add('progress');
    sum5.setAttribute('disabled', '');
    sumBox5.innerHTML = '';
    document.querySelectorAll('.greenLight').forEach(item => {
        item.classList.remove('active');
    });
    let counter = setInterval(() => {
        i++;
        document.querySelector('#green' + i).classList.add('active');
        sumO5 += randArray[i];
        sumBox5.innerHTML = sumO5 ;

        if (i === 4){
            sum5.classList.remove('progress');
            sum5.removeAttribute('disabled');
            clearInterval(counter);
        };
    }, 500);
}








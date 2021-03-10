//this version contains output html element tag


const form1 = document.additionForm

form1.getElementById("submit1").addEventListener('click', function addButton(e) {
    e.preventDefault();
    const num1 = form1.Num1.value;
    const num2 = form1.Num2.value;
    form1.output1.value = Number(num1) + Number(num2);
});


const form2 = document.subtractionForm

form2.getElementById("submit2").addEventListener('click', function subButton(e) {
    e.preventDefault();
    console.log(document.sub);
    const num1 = document.sub.Num1.value;
    const num2 = document.sub.Num2.value;
    form2.sub.ouput2.value = Number(num1) - Number(num2);
});

const form3 = document.multiplicationForm
form3.getElementById("submit3").addEventListener('click', function mulButton(e) {
    e.preventDefault();
    const num1 = document.mul.Num1.value;
    const num2 = document.mul.Num2.value;
    form3.mul.output3.value = Number(num1) * Number(num2);
});

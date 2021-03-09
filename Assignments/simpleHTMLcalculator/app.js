const form1 = document.additionForm

document.getElementById("submit1").addEventListener('click', function addButton(e) {
    e.preventDefault();
    const num1 = form1.add.Num1.value;
    const num2 = form1.add.Num2.value;
    form1.add.output1.value = Number(num1) + Number(num2);
});


const form2 = document.subtractionForm

document.getElementById("submit2").addEventListener('click', function subButton(e) {
    e.preventDefault();
    console.log(document.sub);
    const num1 = document.sub.Num1.value;
    const num2 = document.sub.Num2.value;
    document.sub.ouput2.value = Number(num1) - Number(num2);
});

const form3 = document.multiplicationForm
document.getElementById("submit3").addEventListener('click', function mulButton(e) {
    e.preventDefault();
    const num1 = document.mul.Num1.value;
    const num2 = document.mul.Num2.value;
    document.mul.output3.value = Number(num1) * Number(num2);
});

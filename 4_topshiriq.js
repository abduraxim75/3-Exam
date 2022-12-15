//             4 topshiriq         //
let array = [3, 5, 22, 5, 7, 2, 45, 75];
let qiymat = document.getElementById('qiymat');
let sum = 0;
for (let i = 0; i < array.length; i++) {
    let javob = array[i] + 3;
    sum += javob;
}
    qiymat.innerHTML = sum;

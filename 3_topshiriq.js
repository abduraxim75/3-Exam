//              3 topshiriq            //
function hundred() {
    let count = document.getElementById("alpha3").value
    let ten = ( count - count % 10) / 10
    let standart;
    let alpha_count;
    switch (ten) {
        case 0: standart = "";
            break;
        case 1: standart = "o'n";
            break;
        case 2: standart = "yigirma";
            break;
        case 3: standart = "o'ttiz";
            break;
        case 4: standart = "qirq";
            break;
        case 5: standart = "ellik";
            break;
        case 6: standart = "oltmish";
            break;
        case 7: standart = "yetmish";
            break;
        case 8: standart = "sakson";
            break;
        case 9: standart = "to'qson";
            break;
    }
    let one = count % 10
    switch (one) {
        case 0: alpha_count = "";
            break;
        case 1: alpha_count = "bir";
            break;
        case 2: alpha_count = "ikki";
            break;
        case 3: alpha_count = "uch";
            break;
        case 4: alpha_count = "to`rt";
            break;
        case 5: alpha_count = "besh";
            break;
        case 6: alpha_count = "olti";
            break;
        case 7: alpha_count = "yetti";
            break;
        case 8: alpha_count = "sakkiz";
            break;
        case 9: alpha_count = "to'qqiz";
            break;
    }
    document.getElementById('solve').innerText = standart+" "+alpha_count
    }
hundred();
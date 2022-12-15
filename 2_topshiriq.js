//                2 topshiriq          //
function france() {
    let a = document.getElementById('input_lavozim').value
    a = a.toLowerCase();
    if (a === "ishchi") {
        document.getElementById('plavozim').innerText = 'hello'
    }
    else if (a === "director") {
        document.getElementById('plavozim').innerText = "greeting"
    }
    else if (a === "") {
        document.getElementById('plavozim').innerText = "no login"
    }
    else {
        document.getElementById('plavozim').innerText = "bunday lavozim mavjud emas"
    }
}
document.getElementById('btn_la', addEventListener('click', () => {
    france()
}))
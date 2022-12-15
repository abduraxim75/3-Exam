function calculateDays() {
    let day = document.getElementById("day").value;
    let day2 = document.getElementById("day2").value;
    const dateOne = new Date(day);
    const dateTwo = new Date(day2);
    const time = Math.abs(dateTwo - dateOne);
    const days = Math.ceil(time / (1000 * 60 * 60 * 24))
    document.getElementById("output").innerHTML = days + " kun";
}

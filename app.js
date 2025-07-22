let userInput = document.querySelector('#date');

userInput.max = new Date().toISOString().split('T')[0];// prevent future dates

let calculateButton = document.querySelector('#calculate');
let result = document.querySelector('#result');

function calculateAge() {
    let birthDate = new Date(userInput.value);

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1; // Months are zero-based in JavaScript
    let y1 = birthDate.getFullYear();

    let today = new Date();
    let d2 = today.getDate();
    let m2 = today.getMonth() + 1; // Months are zero-based in JavaScript
    let y2 = today.getFullYear();


    let year = y2 - y1;
    let month;
    let day;

    if (m2 >= m1) {
        month = m2 - m1;
    } else {
        year--;
        month = 12 + m2 - m1
    }

    if (d2 >= d1) {
        day = d2 - d1;
    } else {
        m3--;
        d3 = getDaysInMonth(y1, m1) + d2 - d1;
    }

    if (month < 0) {
        month = 11;
        year--;
    }

    result.innerHTML = `Your age is <span>${year}</span> years, <span>${month}</span> months, and <span>${day}</span> days.`;

}

function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}

calculateButton.addEventListener('click', () => {
    calculateAge();
})
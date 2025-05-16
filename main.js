//1.
// const outputAll = document.createElement(`div`);
// outputAll.classList.add(`outputAll`);
// for (let i = 1; i <= 10; i++) {
//     const outputItem = document.createElement(`div`);
//     outputItem.classList.add(`outputItem`);
//     for (let j = 1; j <= 10; j++) {
//         const outputContent = document.createElement(`p`);
//         const result = i * j;
//         outputContent.textContent = `${i} x ${j} = ${result}`;
//         outputItem.appendChild(outputContent);
//     }
//     outputAll.appendChild(outputItem);
// }
// document.body.appendChild(outputAll);

// 2.
function drawChart() {
    const anhValue = parseInt(document.getElementById('anh').value) || 0;
    const phapValue = parseInt(document.getElementById('phap').value) || 0;
    const ducValue = parseInt(document.getElementById('duc').value) || 0;
    const ngaValue = parseInt(document.getElementById('nga').value) || 0;
    const nhatValue = parseInt(document.getElementById('nhat').value) || 0;

    const dataArray = [
        { label: 'Anh', value: anhValue },
        { label: 'Pháp', value: phapValue },
        { label: 'Đức', value: ducValue },
        { label: 'Nga', value: ngaValue },
        { label: 'Nhật', value: nhatValue }
    ];

    const totalValue = dataArray.reduce((sum, item) => sum + item.value, 0);

    const chartContainer = document.getElementById('chartContainer');
    chartContainer.innerHTML = '';
    chartContainer.style.display = 'table';
    chartContainer.style.width = '300px';

    dataArray.forEach((item) => {
        const rowDiv = document.createElement('div');
        rowDiv.style.display = 'table-row';

        const labelCell = document.createElement('div');
        // labelCell.style.display = 'table-cell';
        // labelCell.style.padding = '5px';
        // labelCell.style.border = '1px solid #ccc';
        labelCell.textContent = item.label;
        rowDiv.appendChild(labelCell);

        const chartCell = document.createElement('div');
        // chartCell.style.display = 'table-cell';
        // chartCell.style.padding = '5px';
        // chartCell.style.border = '1px solid #ccc';
        chartContainer;
        const barDiv = document.createElement('div');
        barDiv.classList.add('bar-inline');
        let percentage = 0;
        if (totalValue > 0) {
            percentage = (item.value / totalValue) * 100;
        }
        barDiv.style.width = `${percentage}%`;
        chartCell.appendChild(barDiv);

        const percentageSpan = document.createElement('span');
        percentageSpan.classList.add('percentage-label');
        percentageSpan.textContent = `${percentage.toFixed(0)}%`;
        chartCell.appendChild(percentageSpan);

        rowDiv.appendChild(chartCell);
        chartContainer.appendChild(rowDiv);
    });
}

// 3.
let time = 0;
let intervalId = null;

const contentClock = document.getElementById('contentClock');
const buttonStart = document.getElementById('buttonStart');
const buttonStop = document.getElementById('buttonStop');
const buttonReset = document.getElementById('buttonReset');

function updateClock() {
    const totalTenths = time;
    const totalSeconds = Math.floor(totalTenths / 10);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const tenths = totalTenths % 10;

    const formatted =
        String(minutes).padStart(2, '0') +
        ':' +
        String(seconds).padStart(2, '0') +
        '.' +
        tenths;

    contentClock.textContent = formatted;
}

buttonStart.addEventListener('click', function () {
    if (intervalId === null) {
        intervalId = setInterval(() => {
            time++;
            updateClock();
        }, 100);
    }
});

buttonStop.addEventListener('click', function () {
    clearInterval(intervalId);
    intervalId = null;
});

buttonReset.addEventListener('click', function () {
    clearInterval(intervalId);
    intervalId = null;
    time = 0;
    updateClock();
});

updateClock();

// 4.
document.addEventListener('DOMContentLoaded', function () {
    const contentInputDiv = document.getElementById('contentInput');
    const inputNumber = document.getElementById('inputNumber');
    const veTamGiacButton = document.getElementById('buttonTriangle');
    const contentTriangleDiv = document.getElementById('contentTriangle');

    veTamGiacButton.addEventListener('click', function () {
        const n = parseInt(inputNumber.value);
        if (isNaN(n) || n <= 0) {
            contentTriangleDiv.textContent =
                'Vui lòng nhập một số nguyên dương hợp lệ.';
            return;
        }

        let tamGiacHTML = '';
        for (let i = 1; i <= n; i++) {
            let hang = '';
            let currentNum = i % 10;

            for (let j = 0; j < i; j++) {
                hang += currentNum + ' ';
                currentNum--;
                if (currentNum < 0) {
                    currentNum = 9;
                }
            }
            tamGiacHTML += hang.trim() + '<br>';
        }
        contentTriangleDiv.innerHTML = tamGiacHTML;
    });
});

// 5.
document.addEventListener('DOMContentLoaded', function () {
    const inputNumber = document.getElementById('inputNumber');
    const veTamGiacButton = document.getElementById('buttonTriangle');
    const contentTriangleDiv = document.getElementById('contentTriangle');

    veTamGiacButton.addEventListener('click', function () {
        const n = parseInt(inputNumber.value);
        if (isNaN(n) || n <= 0) {
            contentTriangleDiv.textContent =
                'Vui lòng nhập một số nguyên dương hợp lệ.';
            return;
        }

        let tamGiacHTML = '<pre style="font-family: monospace;">';

        for (let i = 1; i <= n; i++) {
            let hang = '';
            for (let space = 0; space < n - i; space++) {
                hang += ' ';
            }
            let currentNum = i % 10;
            for (let j = 0; j < i; j++) {
                hang += currentNum + ' ';
                currentNum--;
                if (currentNum < 0) currentNum = 9;
            }
            tamGiacHTML += hang.trimEnd() + '\n';
        }
        tamGiacHTML += '</pre>';
        contentTriangleDiv.innerHTML = tamGiacHTML;
    });
});

// 6.
document.addEventListener('DOMContentLoaded', function () {
    const numberOneInput = document.getElementById(`numberfirst`);
    const numberSecondInput = document.getElementById(`numbersecond`);
    const buttonAdd = document.getElementById(`buttonAdd`);
    const buttonSub = document.getElementById(`buttonSub`);
    const buttonMul = document.getElementById(`buttonMul`);
    const buttonDisvi = document.getElementById(`buttonDisvi`);
    const buttonExponent = document.getElementById(`buttonExponent`);
    const result = document.getElementById(`result`);

    buttonAdd.addEventListener(`click`, function () {
        const num1 = parseFloat(numberOneInput.value);
        const num2 = parseFloat(numberSecondInput.value);
        result.value = num1 + num2;
    });

    buttonSub.addEventListener(`click`, function () {
        const num1 = parseFloat(numberOneInput.value);
        const num2 = parseFloat(numberSecondInput.value);
        result.value = num1 - num2;
    });

    buttonMul.addEventListener(`click`, function () {
        const num1 = parseFloat(numberOneInput.value);
        const num2 = parseFloat(numberSecondInput.value);
        result.value = num1 * num2;
    });

    buttonDisvi.addEventListener(`click`, function () {
        const num1 = parseFloat(numberOneInput.value);
        const num2 = parseFloat(numberSecondInput.value);
        if (num2 === 0) {
            result.value = 'Lỗi chia cho 0';
        } else {
            result.value = num1 / num2;
        }
    });

    buttonExponent.addEventListener('click', function () {
        const num1 = parseFloat(numberOneInput.value);
        const num2 = parseFloat(numberSecondInput.value);
        result.value = Math.pow(num1, num2);
    });
});

// 7.
function generateCalendar(year, month, highlightDay) {
    const daysInWeek = ['Su', 'M', 'Tu', 'W', 'Th', 'F', 'Sa'];
    const firstDay = new Date(year, month - 1, 1);
    const startDay = firstDay.getDay();
    const daysInMonth = new Date(year, month, 0).getDate();

    let table = '<table>';
    table += `<caption>${firstDay
        .toLocaleString('default', { month: 'long' })
        .toUpperCase()} ${year}</caption>`;
    table += '<tr>';
    for (let d of daysInWeek) {
        table += `<th>${d}</th>`;
    }
    table += '</tr><tr>';

    for (let i = 0; i < startDay; i++) {
        table += '<td></td>';
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const currentDay = new Date(year, month - 1, day).getDay();

        const isHighlight = day === highlightDay ? ' class="highlight"' : '';
        table += `<td${isHighlight}>${day}</td>`;

        if (currentDay === 6 && day !== daysInMonth) {
            table += '</tr><tr>';
        }
    }

    table += '</tr></table>';
    document.getElementById('calendarContainer').innerHTML = table;
}

generateCalendar(2025, 5, 15);

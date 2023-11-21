function renderCalendar(month, year) {
    var daysContainer = document.getElementById('days');
    var currentMonthElement = document.getElementById('current-month');

    daysContainer.innerHTML = '';

    var firstDay = new Date(year, month, 1);
    var lastDay = new Date(year, month + 1, 0);

    currentMonthElement.innerHTML = new Intl.DateTimeFormat('default', { month: 'long', year: 'numeric' }).format(firstDay);

    var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    for (var i = 0; i < daysOfWeek.length; i++) {
        var dayElement = document.createElement('div');
        dayElement.classList.add('day');
        dayElement.textContent = daysOfWeek[i];
        daysContainer.appendChild(dayElement);
    }

    for (var i = 0; i < firstDay.getDay(); i++) {
        var emptyDayElement = document.createElement('div');
        emptyDayElement.classList.add('day');
        daysContainer.appendChild(emptyDayElement);
    }

    for (var i = 1; i <= lastDay.getDate(); i++) {
        var dayElement = document.createElement('div');
        dayElement.classList.add('day');
        dayElement.textContent = i;
        if (i === new Date().getDate() && month === new Date().getMonth() && year === new Date().getFullYear()) {
            dayElement.classList.add('today');
        }
        daysContainer.appendChild(dayElement);
    }
}

function prevMonth() {
    var currentDate = new Date();
    var currentMonth = currentDate.getMonth();
    var currentYear = currentDate.getFullYear();

    if (currentMonth === 0) {
        currentYear--;
        currentMonth = 11;
    } else {
        currentMonth--;
    }

    renderCalendar(currentMonth, currentYear);
}

function nextMonth() {
    var currentDate = new Date();
    var currentMonth = currentDate.getMonth();
    var currentYear = currentDate.getFullYear();

    if (currentMonth === 11) {
        currentYear++;
        currentMonth = 0;
    } else {
        currentMonth++;
    }

    renderCalendar(currentMonth, currentYear);
}

document.addEventListener('DOMContentLoaded', function () {
    var currentDate = new Date();
    var currentMonth = currentDate.getMonth();
    var currentYear = currentDate.getFullYear();

    renderCalendar(currentMonth, currentYear);
});

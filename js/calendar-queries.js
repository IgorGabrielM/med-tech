function renderCustomCalendar(month, year) {
    var customDaysContainer = document.getElementById('custom-days-query');
    var customMonthElement = document.getElementById('custom-current-month');

    customDaysContainer.innerHTML = '';

    var firstDay = new Date(year, month, 1);
    var lastDay = new Date(year, month + 1, 0);

    customMonthElement.innerHTML = new Intl.DateTimeFormat('default', { month: 'long', year: 'numeric' }).format(firstDay);

    var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    for (var i = 0; i < daysOfWeek.length; i++) {
        var customDayElement = document.createElement('div');
        customDayElement.classList.add('custom-day');
        customDayElement.textContent = daysOfWeek[i];
        customDaysContainer.appendChild(customDayElement);
    }

    for (var i = 0; i < firstDay.getDay(); i++) {
        var emptyCustomDayElement = document.createElement('div');
        emptyCustomDayElement.classList.add('custom-day');
        customDaysContainer.appendChild(emptyCustomDayElement);
    }

    for (var i = 1; i <= lastDay.getDate(); i++) {
        var customDayElement = document.createElement('div');
        customDayElement.classList.add('custom-day');
        customDayElement.textContent = i;
        if (i === new Date().getDate() && month === new Date().getMonth() && year === new Date().getFullYear()) {
            customDayElement.classList.add('custom-today');
        }
        customDaysContainer.appendChild(customDayElement);
    }
}

function customPrevMonth() {
    var currentDate = new Date();
    var currentMonth = currentDate.getMonth();
    var currentYear = currentDate.getFullYear();

    if (currentMonth === 0) {
        currentYear--;
        currentMonth = 11;
    } else {
        currentMonth--;
    }

    renderCustomCalendar(currentMonth, currentYear);
}

function customNextMonth() {
    var currentDate = new Date();
    var currentMonth = currentDate.getMonth();
    var currentYear = currentDate.getFullYear();

    if (currentMonth === 11) {
        currentYear++;
        currentMonth = 0;
    } else {
        currentMonth++;
    }

    renderCustomCalendar(currentMonth, currentYear);
}

document.addEventListener('DOMContentLoaded', function () {
    var currentDate = new Date();
    var currentMonth = currentDate.getMonth();
    var currentYear = currentDate.getFullYear();

    renderCustomCalendar(currentMonth, currentYear);
});

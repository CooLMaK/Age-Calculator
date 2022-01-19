let input1 = document.querySelector('#dob');
let input2 = document.querySelector("#aad");
function calculateAge() {
    let startDateInput = document.querySelector('#dob').value;
    let endDateInput = document.querySelector('#aad').value;
    let startDate = new Date(startDateInput);
    let endDate = new Date(endDateInput);
    let timeDiff = endDate.getTime() - startDate.getTime();
    let dayDiff = timeDiff / (1000 * 3600 * 24);
    dayDiff = parseInt(dayDiff);

    if (startDateInput == null || endDateInput == null || startDateInput == '' || endDateInput == '') {
        alert("Enter A Valid Input");
        return;
    } else {

        //Taking out Year, Month, and day and storing in new variable, from Date of Birth.
        let startYear = startDate.getFullYear();
        let startMonth = startDate.getMonth();
        let startDay = startDate.getDate();

        //Taking out Year, Month, and day and storing in new variable, from current date.
        let endYear = endDate.getFullYear();
        let endMonth = endDate.getMonth();
        let endDay = endDate.getDate();

        //calculating year, month and days .
        let calYear = endYear - startYear;
        let calMonth;
        let calDay;
        if (endMonth >= startMonth) {
            calMonth = endMonth - startMonth;
        } else {
            calYear--;
            calMonth = 12 + endMonth - startMonth;
        }

        if (endDay >= startDay) {
            calDay = (endDay - startDay);
        } else {
            calMonth--;
            calDay = (31 + endDay - startDay);

            if (calMonth < 0) {
                calMonth = 11;
                calYear--;
            }
        }

        //creating object to store calculated Age.

        const age = {
            years: calYear,
            months: calMonth,
            days: calDay,
            daysDiff: dayDiff
        };


        return age;
    }

}

const result = document.querySelector('.overAllRes p');


const submit = document.querySelector('#calc');
const ageInMonths = document.querySelector('.resMonths h3');
const ageInWeeks = document.querySelector('.resWeeks h3');
const ageInDays = document.querySelector('.resDays h3');


submit.addEventListener('click', () => {
    let ageObj = calculateAge();

    if (ageObj.years > 0 && ageObj.months == 0 && ageObj.days == 0) {
        result.innerText = ageObj.years + 'Years Old Happy BirthDay!!';
    } else if (ageObj.years == 0 && ageObj.months == 0 && ageObj.days == 0) {
        result.innerText = 'Welcome To Earth!!!';
    } else {
        result.innerText = ageObj.years + ' Year, ' + ageObj.months + ' Months and ' + ageObj.days + ' Days';
    }

    let ageyear = parseInt(ageObj.years);
    let agemonth = parseInt(ageObj.months);
    let ageday = parseInt(ageObj.days);
    let allyears = ageyear + (agemonth / 12) + (ageday / 365);

    let allmonths = allyears * 12;

    allmonths = allmonths.toFixed(2);

    let alldays = parseInt(ageObj.daysDiff);
    let allweeks = (alldays / 7).toFixed(2);
    ageInMonths.innerText = `Age in Months :\u00A0\u00A0\u00A0\u00A0${allmonths}`;
    ageInWeeks.innerText = `Age in Weeks :\u00A0\u00A0\u00A0\u00A0${allweeks}`;
    ageInDays.innerText = `Age in Days :\u00A0\u00A0\u00A0\u00A0${alldays}`;
})
const res = document.querySelector('#reset');
res.addEventListener('click', reset);

function reset() {
    result.innerText = 'Calculated Age';
    ageInMonths.innerText = 'Age in Months :';
    ageInWeeks.innerText = 'Age in Weeks :';
    ageInDays.innerText = 'Age in Days :';
    input1.value = null;
    input2.value = null;

}


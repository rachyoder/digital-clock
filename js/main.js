let clock = document.querySelector('.clock');

setInterval(function() {
    timeNow = new Date();

    let hours = timeNow.getHours();
    let minutes = timeNow.getMinutes();
    let seconds = timeNow.getSeconds();

    /* Formats Numbers for Clock Readout */
    function doubleDigit(number) {
        if (number < 10) {
            return '0' + number;
        } else {
            return number;
        }
    }
    /* Makes Hours Standard Time Format */
    function standardTime(digit) {
        if (digit > 12) {
            let formatedTime = digit - 12;
            return formatedTime
        } else {
            return digit;
        }
    }
    /* Declares AM or PM */
    function amOrPm(time) {
        if (time >= 12) {
            let clockTime = 'PM';
            return clockTime;
        } else {
            let clockTIme = 'AM'
            return clockTime;
        }
    }

    whatTime = amOrPm(hours)
    hours = standardTime(hours);

    hours = doubleDigit(hours);
    minutes = doubleDigit(minutes);
    seconds = doubleDigit(seconds);

    clock.textContent = hours + ':' + minutes + ':' + seconds + ' ' + whatTime;

},1000);
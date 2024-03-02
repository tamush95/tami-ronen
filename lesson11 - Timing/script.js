// יצירת אלמנט כללי שבתוכו יופיע לוח הכפל
const board = document.createElement('div');
board.className = 'board';
// הוספת האלמנט ל-Body
document.body.appendChild(board);

for (let y = 1; y <= 10; y++) {
    for (let x = 1; x <= 10; x++) {
        // יצירת אלמנט שבתוכו יופיע המספר (כמו תא בטבלה)
        const div = document.createElement('div');
        div.innerHTML = x * y;
        board.appendChild(div);

        div.setAttribute("ziv", `${y} x ${x} = ${y * x}`);
    } const traffic1 = document.querySelector('.traffic-light');

    const first = traffic1.querySelector('div');
    const second = traffic1.querySelector('div:nth-child(2)');
    const last = traffic1.querySelector('div:last-child');

    let trafficTimeOut;

    function reset() {
        first.style.backgroundColor = '';
        second.style.backgroundColor = '';
        last.style.backgroundColor = '';
    }

    function green() {
        reset();
        last.style.backgroundColor = 'green';
        trafficTimeOut = setTimeout(yellow, 3 * 1000);
    }

    function yellow() {
        reset();
        second.style.backgroundColor = 'yellow';
        trafficTimeOut = setTimeout(red, 1000);
    }

    function red() {
        reset();
        first.style.backgroundColor = 'red';
        trafficTimeOut = setTimeout(redAndYellow, 3 * 1000);
    }

    function redAndYellow() {
        reset();
        second.style.backgroundColor = 'yellow';
        first.style.backgroundColor = 'red';
        trafficTimeOut = setTimeout(green, 1000);
    }

    function stop() {
        clearTimeout(trafficTimeOut);
    }

    red();
}
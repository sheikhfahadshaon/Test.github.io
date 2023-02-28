let counter = 0;

function count() {
    counter++;
    document.querySelector('h1').innerHTML = counter;

    if (counter % 10 === 0) {
        alert(`Count is now ${counter} `);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('button').addEventListener('click', count);

    setInterval(count, 1000);

    document.querySelector('form').onsubmit = function () {
        const name = document.querySelector('#name').value;
        alert(`Hello, ${name}`);
    };
});

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('button').forEach(function (button) {
        button.onclick = function () {
            document.querySelector('#hello').style.color = button.dataset.color;
        };
    });

    document.querySelector('select').onchange = function () {
        document.querySelector('#hello').style.color = this.value;
    }
});


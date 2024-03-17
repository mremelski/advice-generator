const dice = document.querySelector('.dice');
const title = document.querySelector('.title');
const adviceText = document.querySelector('.advice-text');

dice.addEventListener('click', function () {
    fetch('https://api.adviceslip.com/advice')
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            title.innerText = `ADVICE #${data.slip.id}`;
            adviceText.innerText = `"${data.slip.advice}"`;
        })
        .catch((e) => {
            adviceText.innerText = 'Error';
        });
});

// if (window.innerWidth < 700) {
//     divider.src = "pattern-divider-mobile.svg"
// }
const umbrella = document.getElementById('umbrella');
const color = 'pink';
const radio1 = document.getElementById('radio1');
const radio2 = document.getElementById('radio2');
const radio3 = document.getElementById('radio3');

radio1.addEventListener('click', function () {
    color = 'pink';
    customize(color);
});

radio2.addEventListener('click', function () {
    color = 'blue';
    customize(color);
});

radio3.addEventListener('click', function () {
    color = 'yellow';
    customize(color);
});

customize(color);

function customize(color) {
    setTimeout(() => {
        const img = document.createElement('img');
        img.src = `./Images/${color}_umbrella.png`;
        umbrella.innerHTML = '';
        umbrella.append(img);
    }, 5000);
    const loadImg = document.createElement('img');
    loadImg.setAttribute('class', 'loadImg');
    loadImg.src = './Images/loader_icon.svg';
    loadImg.style.color=color;

    umbrella.innerHTML = '';
    umbrella.append(loadImg);
}
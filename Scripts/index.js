const umbrella = document.getElementById('umbrella');
const color = 'pink';
const radio1 = document.getElementById('radio1');
const radio2 = document.getElementById('radio2');
const radio3 = document.getElementById('radio3');

radio1.addEventListener('select', function () {
    color = 'pink';
    console.log(color);
    customize(color);
});

radio2.addEventListener('select', function () {
    color = 'blue';
    console.log(color);

    customize(color);
});

radio3.addEventListener('select', function () {
    color = 'yellow';
    console.log(color);

    customize(color);
});

customize(color);

function customize(color) {
    setTimeout(() => {
        const img = document.createElement('img');
        img.src = `./Images/${color}_umbrella.png`;
        img.setAttribute('class', 'image');
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
const WALLPAPERS = [
    'mountains-lake.png'
];
document.querySelector('body').style.backgroundImage = ('url("./assets/img/wallpapers/' + (WALLPAPERS.sort(() => Math.random() - 0.5)[0]) + '")');
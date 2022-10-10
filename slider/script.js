var models = [

    {
        name : "Prag",
        image : "img/prag.jpeg",
        link : "https://tr.wikipedia.org/wiki/Prag"
    },
    {
        name : "Amsterdam",
        image : "img/amsterdam.jfif",
        link : "https://tr.wikipedia.org/wiki/Amsterdam"
    },
    {
        name : "Paris",
        image : "img/paris.jpeg",
        link : "https://tr.wikipedia.org/wiki/Paris"
    },

];



var index = 2;


document.querySelector('.card-title').textContent = models[index].name;

document.querySelector('.card-img-top').setAttribute('src', models[index].image);

document.querySelector('.card-link').setAttribute('href', models[index].link);
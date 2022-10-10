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



var index = 0;
var slideCount = models.length;

showSlide(index);

document.querySelector(".fa-circle-arrow-left").addEventListener('click',function(){
    index--;
    showSlide(index);
});


document.querySelector(".fa-circle-arrow-right").addEventListener('click',function(){
    index++;
    showSlide(index);
});


function showSlide(i){

    // =========================== Last and first slide 
    // ===========================
    index = i;

    if( i<0 ) {
        index = slideCount - 1;
    }
    if( i>= slideCount) {
        index = 0;
    }



    // =========================== Loading title-link-image 
    // ===========================
    document.querySelector('.card-title').textContent = models[index].name;

    document.querySelector('.card-img-top').setAttribute('src', models[index].image);

    document.querySelector('.card-link').setAttribute('href', models[index].link);

}






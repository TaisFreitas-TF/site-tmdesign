
//Lógica fixar menu top

window.onload = function(e) {
    var offset = document.getElementsByTagName('section')[0].offsetTop;
    var section = document.getElementsByTagName('section')[0];

    document.addEventListener('scroll', function() {
        if (document.body.scrollTop > offset || document.documentElement.scrollTop > offset) {
           section.style.position = 'fixed';
        } else {
            section.style.position = '';
        }
    });
}



(function(){
    let Presiona = document.getElementById("presionaid")
    var $element = document.getElementById("element");
    $element.addEventListener('click', function(){
        $element.classList.toggle("image-big")
        $element.classList.toggle("image-small")
        presiona.classList.toggle("presiona-on")
    })
})()


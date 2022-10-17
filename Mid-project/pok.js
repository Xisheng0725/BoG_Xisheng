let id = 1;
var right = document.getElementById("buttonRight");
var left = document.getElementById("buttonleft");
const onRightButtonClick = () => {
    id++;
    refreshImg(id);
}
const refreshImg = (id) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((resp) => resp.json())
        .then((data) => {
            var image = document.getElementById("image");
            image.src = data.sprites.front_default;
        });
}

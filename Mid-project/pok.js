let id = 1;

const refreshImg = (id = 1) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((resp) => resp.json())
        .then((data) => {
            var image = document.getElementById("image");
            image.src = data.sprites.front_default;
            var name = document.getElementById("name");
            name.rows[0].cells[0].innerHTML = data.species.name;
            var type = document.getElementById("type");
            for (var i = 0; i < data.types.length; i++) {
                type.rows[0].cells[i].innerHTML = data.types[i].type.name;
            }
        });
}

var right = document.getElementById("buttonRight");
var left = document.getElementById("buttonleft");
const onRightButtonClick = (right) => {
    if (id === 904) {
        return;
    }
    id++;
    refreshImg(id);
}
const onLeftButtonClick = (left) => {
    if (id === 1) {
        return;
    }
    id--;
    refreshImg(id);
}
refreshImg(1)
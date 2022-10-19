let id = 1;
const refreshImg = (id) => {
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
            var info = document.getElementById("infos");
            info.rows[0].cells[0].innerHTML = "height";
            info.rows[0].cells[2].innerHTML = Math.round(data.height * 0.1 * 100) / 100 + "m";

            info.rows[1].cells[0].innerHTML = "weight";
            info.rows[1].cells[2].innerHTML = data.weight + "kg";
            for (var i = 0; i < data.stats.length; i++) {
                info.rows[0].cells[1].innerHTML = ":";
                info.rows[1].cells[1].innerHTML = ":";
                info.rows[i + 2].cells[0].innerHTML = data.stats[i].stat.name;
                info.rows[i + 2].cells[1].innerHTML = ":";
                info.rows[i + 2].cells[2].innerHTML = data.stats[i].base_stat;
            }

            for (var i = data.stats.length; i < info.length; i++) {
                info.rows[i].cells[0].innerHTML = "";
            }
            
            var move = document.getElementById("move");

            move.addEventListener('click', function handleClick() {
                var info = document.getElementById("infos");
                var sub = document.getElementById("sub");
                sub.row[0].cells[0].innerHTML = "Move";
                for (var i = 0; i < data.moves.length; i++) {
                    info.rows[i].cells[0].innerHTML = data.moves[i].move.name;
                    info.rows[i].cells[1].innerHTML = "";
                    info.rows[i].cells[2].innerHTML = "";
                }
            });
        });
}
refreshImg(1);

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

var infoButton = document.getElementById("infobutton");
const oninfoButtonClick = (infoButton) => {
    refreshImg(id);
}

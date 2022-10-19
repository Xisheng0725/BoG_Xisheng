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
            
                if (data.types[i].type.name === "grass") {
                    type.rows[0].cells[i].style.backgroundColor = "#7AC74C";
                }
                if (data.types[i].type.name === "normal") {
                    type.rows[0].cells[i].style.backgroundColor = "#A8A77A";
                }
                if (data.types[i].type.name === "fire") {
                    type.rows[0].cells[i].style.backgroundColor = "#EE8130";
                }
                if (data.types[i].type.name === "water") {
                    type.rows[0].cells[i].style.backgroundColor = "#6390f0";
                }
                if (data.types[i].type.name === "electric") {
                    type.rows[0].cells[i].style.backgroundColor = "#F7D02C";
                }
                if (data.types[i].type.name === "ice") {
                    type.rows[0].cells[i].style.backgroundColor = "#96D9D6";
                }
                if (data.types[i].type.name === "fighting") {
                    type.rows[0].cells[i].style.backgroundColor = "#C22E28";
                }
                if (data.types[i].type.name === "poison") {
                    type.rows[0].cells[i].style.backgroundColor = "#A33EA1";
                }
                if (data.types[i].type.name === "ground") {
                    type.rows[0].cells[i].style.backgroundColor = "#E2BF65";
                }
                if (data.types[i].type.name === "flying") {
                    type.rows[0].cells[i].style.backgroundColor = "#A98FF3";
                }
                if (data.types[i].type.name === "psychic") {
                    type.rows[0].cells[i].style.backgroundColor = "#F95587";
                }
                if (data.types[i].type.name === "bug") {
                    type.rows[0].cells[i].style.backgroundColor = "#A6B91A";
                }
                if (data.types[i].type.name === "rock") {
                    type.rows[0].cells[i].style.backgroundColor = "#B6A136";
                }
                if (data.types[i].type.name === "ghost") {
                    type.rows[0].cells[i].style.backgroundColor = "#735797";
                }
                if (data.types[i].type.name === "dragon") {
                    type.rows[0].cells[i].style.backgroundColor = "#6F35FC";
                }
                if (data.types[i].type.name === "dark") {
                    type.rows[0].cells[i].style.backgroundColor = "#705746";
                }
                if (data.types[i].type.name === "steel") {
                    type.rows[0].cells[i].style.backgroundColor = "#B7B7CE";
                }
                if (data.types[i].type.name === "fairy") {
                    type.rows[0].cells[i].style.backgroundColor = "#D685AD";
                }
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

            for (var i = 8; i < info.rows.length; i++) {
                info.rows[i].cells[0].innerHTML = "";
            }



            
            var move = document.getElementById("move");

            move.addEventListener('click', function handleClick() {
                var info = document.getElementById("infos");
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
    var info = document.getElementById("infos");
    for (var i = 0; i < info.length; i++) {
        info.rows[i].cells[0].innerHTML = "";
    }
}

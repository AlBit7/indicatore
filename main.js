const frecce = document.getElementsByTagName("svg");

var coordinateFrecce = new Array(frecce.length);

for (let i = 0; i < frecce.length; ++i) {

    let coordinate = frecce[i].getBoundingClientRect();
    coordinateFrecce[i] = [(coordinate.left + coordinate.right) / 2, (coordinate.top + coordinate.bottom) / 2];

}

onmousemove = (event) => {

    for (let i = 0; i < frecce.length; ++i)
        frecce[i].style = `transform: rotate(${(event.clientX <= coordinateFrecce[i][0]) ? Math.atan((coordinateFrecce[i][1] - event.clientY) / (coordinateFrecce[i][0] - event.clientX)) - Math.PI : Math.atan((coordinateFrecce[i][1] - event.clientY) / (coordinateFrecce[i][0] - event.clientX))}rad);`;

};

function coloreCasuale() {

    // colori abbastanza accesi su sfondo giallo chiaro
    let colori = ["green", "blue", "red", "black", "white", "teal", "slateblue", "royalblue", "orange", "violet", "prple", "peru", "tomato", "navy", "maroon", "lime", "lawngreen", "gold", "fuchsia", "firebrick", "crimson", "coral", "aqua"];

    return colori[Math.floor(Math.random() * colori.length)];

}

function cambiaColore() {

    for (let i = 0; i < frecce.length; ++i) {
        colore = coloreCasuale();
        for (let j = 0; j < 3; ++j)
            frecce[i].getElementsByClassName("cls-1")[j].style.stroke = colore;
    }

    document.getElementById("body").style = `background-color: ${coloreCasuale()}`;

}


// const frecce = document.getElementsByTagName("svg");

// var coordinateFrecce = new Array(frecce.length);

// for (let i = 0; i < frecce.length; ++i) {

//     let coordinate = frecce[i].getBoundingClientRect();
//     coordinateFrecce[i] = [(coordinate.left + coordinate.right) / 2, (coordinate.top + coordinate.bottom) / 2];

// }

// onmousemove = (event) => {

//     let Xmouse = event.clientX;
//     let Ymouse = event.clientY;

//     for (let i = 0; i < frecce.length; ++i) {

//         let Xfreccia = coordinateFrecce[i][0];
//         let Yfreccia = coordinateFrecce[i][1];

//         let angolo = Math.atan((Yfreccia - Ymouse) / (Xfreccia - Xmouse));

//         if (Xmouse <= Xfreccia)
//             angolo -= Math.PI;

//         frecce[i].style = `transform: rotate(${angolo}rad);`;

//     }

// };


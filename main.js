// const frecce = document.getElementsByTagName("svg");

// onmousemove = function (event) {

//     let Xmouse = event.clientX;
//     let Ymouse = event.clientY;

//     for (let i = 0; i < frecce.length; i++) {

//         let coordinate = frecce[i].getBoundingClientRect();
//         let Xfreccia = (coordinate.left + coordinate.right) / 2;
//         let Yfreccia = (coordinate.top + coordinate.bottom) / 2;

//         let angolo = Math.atan((Yfreccia - Ymouse) / (Xfreccia - Xmouse));

//         if (Xmouse <= Xfreccia)
//             angolo = angolo - Math.PI;

//         frecce[i].style = 'transform: rotate(' + angolo + 'rad);';

//     }

// };















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

//         let angolo = (Xmouse <= Xfreccia) ? Math.atan((Yfreccia - Ymouse) / (Xfreccia - Xmouse)) - Math.PI : Math.atan((Yfreccia - Ymouse) / (Xfreccia - Xmouse));

//         frecce[i].style = `transform: rotate(${angolo}rad);`;

//     }

// };










const frecce = document.getElementsByTagName("svg");

var coordinateFrecce = new Array(frecce.length);

for (let i = 0; i < frecce.length; ++i) {

    let coordinate = frecce[i].getBoundingClientRect();
    coordinateFrecce[i] = [(coordinate.left + coordinate.right) / 2, (coordinate.top + coordinate.bottom) / 2];

}

onmousemove = (event) => {

    for (let i = 0; i < frecce.length; ++i) {
        
        let angolo = (event.clientX <= coordinateFrecce[i][0]) ? Math.atan((coordinateFrecce[i][1] - event.clientY) / (coordinateFrecce[i][0] - event.clientX)) - Math.PI : Math.atan((coordinateFrecce[i][1] - event.clientY) / (coordinateFrecce[i][0] - event.clientX));

        frecce[i].style = `transform: rotate(${angolo}rad);`;

    }

};
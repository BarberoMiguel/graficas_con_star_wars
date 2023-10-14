const div1 = "#chart1";
const div2 = "#chart2";



// fetch('https://swapi.dev/api/films/')
//     .then(res => res.json())
//     .then(data => console.log(data));

fetch('https://swapi.dev/api/films/')
    .then(res => res.json())
    .then(res1 => res1.results)
    .then(el => {
    let titulo = [];
    for (let i = 0; i < el.length; i++) {
        titulo.push(el[i].title);
    };
    let fecha = [];
    for (let i = 0; i < el.length; i++) {
        fecha.push(el[i].release_date.slice(0,4));
    };
    pintarGrafico(div1, titulo, fecha, "Películas", "Año");
});

fetch('https://swapi.dev/api/people/')
    .then(res => res.json())
    .then(res1 => res1.results)
    .then(el => {
    let nombres = [];
    for (let i = 0; i < el.length; i++) {
        nombres.push(el[i].name);
    };
    let participacion = [];
    for (let i = 0; i < el.length; i++) {
        participacion.push(el[i].films.length);
    };
    pintarGrafico(div2, nombres, participacion, "Personajes", "En cuantas películas ha participado");
});

function pintarGrafico(div, parametros, valores, ejeX, ejeY) {
    var data = {
        labels: parametros,
        series: [valores, valores],
    };

    const options = {
        axisX: {
          label: ejeX,
        },
        axisY: {
          label: ejeY,
          onlyInteger: true, 
        },
        chartPadding: {  
            bottom: 40,     
          }
    };

    new Chartist.Line(div, data, options);
};










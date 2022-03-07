const val = document.getElementById("val");
let search = document.getElementById('search');
const res = document.getElementById('res');

const KEY = 'b763180d58-ed5761c038-r8dydn';

val.value = 'UZS';

let load = false;

async function getData() {

    let values = val.value;

    const respons = await fetch(`https://api.fastforex.io/fetch-multi?from=USD&to=${values}&api_key=${KEY}`);

    const result = await respons.json();

    console.log(result.results);


    for (let key in result.results) {

        res.innerHTML = `${result.results[key]} ${values} `

    }

    load = true;






}

search.addEventListener('click', () => {

    res.innerHTML = '<div class="spinner-border" role="status"><span class="visually-hidden"></span></div>';

    setTimeout(getData, 1500);

});
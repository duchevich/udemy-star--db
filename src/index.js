// var 1
fetch('https://swapi.co/api/people/1/')
    .then((res) => {
        return res.json();
    })
    .then((body) => {
        console.log(body);
    });

// var 2 (более читаемая запись var 1)
const getResource = async (url) => {
    const res = await fetch(url);
    const body = await res.json();
    return body;
}

getResource('https://swapi.co/api/people/1/')
    .then((body) => {
        console.log(body);
    });
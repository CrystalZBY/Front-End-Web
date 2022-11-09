document.getElementById("button").addEventListener("click",() => {
    callApi();
})

function callApi(){
    fetch("https://pokeapi.co/api/v2/pokemon")
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
    })
}
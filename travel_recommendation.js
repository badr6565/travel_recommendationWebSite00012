var searchbar=document.getElementById('search-box')
var divSection=document.getElementById('places-cont')
fetch('travel_recommendation_api.json')
.then(response=>response.json())
.then(data=>{

    data.countries.forEach(country => {
        const div = document.createElement('div')
        div.innerText=`the country${country.name} `
        divSection.appendChild(div)
    });



})
var searchbar=document.getElementById('search-box')
var divSection=document.getElementById('places-cont')
fetch('travel_recommendation_api.json')
.then(response=>response.json())
.then(data=>{

    data.countries.forEach(country => {
        const div = document.createElement('div')
        const placesimages=document.createElement('img');
        const title =document.createElement('h3')
        const cities =document.createElement('h4')
        const des =document.createElement('p')


        placesimages.setAttribute('src',`${country.cities[0].imageUrl}`)
        title.innerText=`${country.name}`
        cities.innerText=`cities are ${(country.cities[0].name).split(" ")[0]} and ${(country.cities[1].name).split(" ")[0]}`
        des.innerText=`${(country.cities[0].name).split(" ")[0]} ${country.cities[0].description} ${(country.cities[1].name).split(" ")[0]}  ${country.cities[1].description} `
        


       
        
        div.appendChild(placesimages);
        div.appendChild(title)
        div.appendChild(cities)
        div.appendChild(des)
       
       
        divSection.appendChild(div);
        
    });



})
function search(){
    
    var searchBtn=document.getElementById('searchBtn').value
    fetch('travel_recommendation_api.json')
    .then(response=>response.json())
    .then(data=>{

       var searchedPlaces= data.countries.find(country=>country.name.toLowerCase()===searchBtn)
       searchedPlaces.forEach(country => {
        const div = document.createElement('div')
        const placesimages=document.createElement('img');
        const title =document.createElement('h3')
        const cities =document.createElement('h4')
        const des =document.createElement('p')


        placesimages.setAttribute('src',`${country.cities[0].imageUrl}`)
        title.innerText=`${country.name}`
        cities.innerText=`cities are ${(country.cities[0].name).split(" ")[0]} and ${(country.cities[1].name).split(" ")[0]}`
        des.innerText=`${(country.cities[0].name).split(" ")[0]} ${country.cities[0].description} ${(country.cities[1].name).split(" ")[0]}  ${country.cities[1].description} `
        


       
        
        div.appendChild(placesimages);
        div.appendChild(title)
        div.appendChild(cities)
        div.appendChild(des)
       
       
        divSection.appendChild(div);



    })

})}






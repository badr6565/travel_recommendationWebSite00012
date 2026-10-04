var searchbar=document.getElementById('search-box')
var divSection=document.getElementById('places-cont')
var places=[]

fetch('travel_recommendation_api.json')
.then(response=>response.json())
.then(data=>{

    places = [
        ...data.countries,
        ...data.temples,
        ...data.beaches
    ];
    console.log(places)


    places.forEach(place => {

        const div = document.createElement('div')
        const placesimages=document.createElement('img');
        const title =document.createElement('h3')
        const cities =document.createElement('h4')
        const des =document.createElement('p')


        placesimages.setAttribute('src',`${place.cities?.[0]?.imageUrl ?? place.imageUrl}`) ;
        // comsole.log(place[1].tamples[0].imageUr)
        title.innerText=`${place.name}`

        cities.innerText=`${(place.cities?.[0]?.name??"").split(" ")[0]}  ${(place.cities?.[1]?.name??"").split(" ")[0]}`
        des.innerText=`${(place.cities?.[0]?.name??place.name).split(" ")[0]} ${place.cities?.[0]?.description??place.description} ${(place.cities?.[1].name??"").split(" ")[0]}  ${place.cities?.[1]?.description??""} `
        


       
        
        div.appendChild(placesimages);
        div.appendChild(title)
        div.appendChild(cities)
        div.appendChild(des)
       
       
        divSection.appendChild(div);
        
    });



})
document.getElementById("searchBtn").addEventListener("click", function (){
    
    var searchBtn=document.getElementById('search-box').value
    fetch('travel_recommendation_api.json')
    .then(response=>response.json())
    .then(data=>{
      document.getElementById('places-cont').innerHTML="";
       places = [
        ...data.countries,
        ...data.temples,
        ...data.beaches
    ];
      var filteredPlaces= places.filter(place =>
        place.name.toLowerCase().includes(searchBtn))

        console.log(filteredPlaces)
       
       filteredPlaces.forEach(place => {
        const div = document.createElement('div')
        const placesimages=document.createElement('img');
        const title =document.createElement('h3')
        const cities =document.createElement('h4')
        const des =document.createElement('p')


        // placesimages.setAttribute('src',`${country.cities[0].imageUrl}`)
        // title.innerText=`${country.name}`
        // cities.innerText=`cities are ${(country.cities[0].name).split(" ")[0]} and ${(country.cities[1].name).split(" ")[0]}`
        // des.innerText=`${(country.cities[0].name).split(" ")[0]} ${country.cities[0].description} ${(country.cities[1].name).split(" ")[0]}  ${country.cities[1].description} `
        
  placesimages.setAttribute('src',`${place.cities?.[0]?.imageUrl ?? place.imageUrl}`) ;
        // comsole.log(place[1].tamples[0].imageUr)
        title.innerText=`${place.name}`

        cities.innerText=`${(place.cities?.[0]?.name??"").split(" ")[0]}  ${(place.cities?.[1]?.name??"").split(" ")[0]}`
        des.innerText=`${(place.cities?.[0]?.name??place.name).split(" ")[0]} ${place.cities?.[0]?.description??place.description} ${(place.cities?.[1].name??"").split(" ")[0]}  ${place.cities?.[1]?.description??""} `
        



       
        
        div.appendChild(placesimages);
        div.appendChild(title)
        div.appendChild(cities)
        div.appendChild(des)
       
       
        divSection.appendChild(div);



    })

})})






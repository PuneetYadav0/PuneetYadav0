const button = document.getElementById('button')
function getLocation(position){
    console.log(position)
}
async function getData(cityName){
    const promise = await fetch(`http://api.eatherapi.com/v1/current.json?key`)
}
function failedTogetLocation(){
    console.log("Something Went Wrong")
}
button.addEventListener('click', async()=>{
    await navigator.geolocation.getCurrentPosition(getLocation,failedTogetLocation);
})
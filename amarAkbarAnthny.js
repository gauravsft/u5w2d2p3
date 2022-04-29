
// create an object
function characterDetails(name,profesion,live){
    this.name=name;
    this.profesion=profesion;
    this.live=live;
}

//create a function
const getCharacterDetails=function(profesion){
    console.log(this.name+" is a  " + profesion + " lives in " +this.live +".");
}

getCharacterDetails.call(characterDetails("Amar","Singer","Goa"),"Magician");
getCharacterDetails.call(characterDetails("Akbar","Cheaf","Mumbai"),"Cheaf");
getCharacterDetails.call(characterDetails("Anthni","Magician","Kashmir"),"Singer");

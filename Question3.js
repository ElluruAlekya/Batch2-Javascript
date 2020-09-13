var PersonsData =[
    Person2 = {   
        name : "Alekya",
        age : 243,
        country : "Syria",
        hobbies : ["reading", "listening music"]
    },
    Person1 = {   
        name : "Anudeep",
        age : 32,
        country : "India",
        hobbies : ["reading", "listening music"]
    }
];
    
PersonsData.forEach(element => {
        console.log(element);
});
function ageLessThan30(){
    PersonsData.forEach(element => {
        if(element.age <30){
            console.log("age less than 30 details",element);
        }
    });
}
function CountryAsIndia(){
    PersonsData.forEach(element => {
        if(element.country === "India"){
            console.log("Person data with India country details",element);
        }
    });
}
ageLessThan30();
CountryAsIndia();






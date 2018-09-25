
window.onload = function() {
var filterType = ""; // sets the filter type to "" (will later be dog, cat or bird)
var filterAgeMin = 0; // sets the filter age min to 0 (for no minimum age filter)
var filterAgeMax = Number.MAX_VALUE; // sets the filter age max to the largest number possible (for no maximum age filter)


var loadTableWithFilters = function ( petData ){
 
    var htmlTable = document.querySelector("#main-table-body");

    var img, name, n, desc, age, a;

    htmlTable.innerHTML = "";
    
    for (i = 0; i < petData.length; i++){    
        if (petData[i].type === filterType || filterType === "" && petData[i].age >= filterAgeMin && petData[i].age <= filterAgeMax){
       	//type = petData[i].type;

       	// image
        img = document.createElement("img");
        img.src = petData[i].image.src;
        img.alt = petData[i].image.alt;
        img.height = petData[i].image.height;
        img.width = petData[i].image.width;
 
        // name
        name = document.createElement('h4');
        n = document.createTextNode(petData[i].name); 
        name.appendChild(n);

        // description
        desc = document.createElement('p');
        desc.innerHTML = petData[i].description;

        // age
        age = document.createElement('span');
        a = document.createTextNode("Age: " + petData[i].age + " years old.");
        age.appendChild(a);

        
 		
 		// create element for table row and collumn
        var table = document.createElement('tr');
        var lColumn = document.createElement('td');
        var rColumn = document.createElement('td');    
 
 		// left side has only image
        lColumn.appendChild(img);

        // right side name description and age
        rColumn.appendChild(name);
        rColumn.appendChild(desc);
        rColumn.appendChild(age);
 
        // append this table now to the HTML
        table.appendChild(lColumn);
        table.append(rColumn);
        htmlTable.appendChild(table);
        }
    }
   
};
   
// FILTER FUNCTIONS
// Doggos ONLY
var filterDog = function () {
    filterType = "dog";
    filterAgeMin = 0;
    filterAgeMax = Number.MAX_VALUE;
    loadTableWithFilters( petData );
};
 
// Cat ONLY
var filterCat = function () {
    filterType = "cat";
    filterAgeMin = 0;
    filterAgeMax = Number.MAX_VALUE;
    loadTableWithFilters( petData );
};

// Bird ONLY
var filterBird = function () {
    filterType = "bird";
    filterAgeMin = 0;
    filterAgeMax = Number.MAX_VALUE;
    loadTableWithFilters( petData );
};
 
// Any pet MAX AGE 1
var filter_zero_1 = function (){
    filterType = "";
    filterAgeMin = 0;
    filterAgeMax = 1;
    loadTableWithFilters( petData );
};
 
// Any pet AGE 1-3
var filter_1_3 = function (){
    filterType = "";
    filterAgeMin = 1;
    filterAgeMax = 3;
    loadTableWithFilters( petData );
};
 
// Any pet AGE 4+
var filter_4_plus = function () {
    filterType = "";
    filterAgeMin = 4;
    filterAgeMax = Number.MAX_VALUE;
    loadTableWithFilters( petData );
};
 
// Resets to show ALL pets like in main page
var filterAllPets = function () {
    filterType = "";
    filterAgeMin = 0;
    filterAgeMax = Number.MAX_VALUE;
    loadTableWithFilters( petData );
};

//function call
loadTableWithFilters( petData );
filterAllPets();
};
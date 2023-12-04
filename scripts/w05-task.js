/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById("temples");
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    templesElement.innerHTML = ""; //Clear exixting content

    temples.forEach((temple) => {
        //Create HTML elements
        const article = document.createElement("article");
        const h3 = document.createElement("h3");
        const img = document.createElement("img");

        //Add content to the elements
        h3.textContent = temple.templeName;
        img.src = temple.imageUrl;
        img.alt = temple.location;

        //Append elements to article
        article.appendChild(h3);
        article.appendChild(img);

        //Append airticle to templeElement
        templesElement.appendChild(article);
    });
};



/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    templeList = await response.json();
    displayTemples(templeList);
};

/* reset Function */
const reset = () => {
    templesElement.innerHTML = ""; //Clear all articles
};

/* sortBy Function */
const sortBy = (temples) => {
    reset(); //Clear existing content

    const filter = document.querySelector("#sortBy").value;

    switch(filter){
        case "utah":
            displayTemples(temples.filter((temple) => temple.location.includes("Utah")));
            break;
          case "notutah":
            displayTemples(temples.filter((temple) => !temple.location.includes("Utah")));
            break;
          case "older":
            const olderThan1950 = new Date(1950, 0, 1);
            displayTemples(temples.filter((temple) => new Date(temple.dedicated) < olderThan1950));
            break;
          case "all":
            displayTemples(temples);
            break;

          // Ssorting alphabetically:
          case "alphabetical":
            displayTemples(temples.sort((a, b) => a.templeName.localeCompare(b.templeName)));
            break;
          default:
            break;
    }
};

/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => sortBy(templeList));

/* Calling getTemples();*/
getTemples();
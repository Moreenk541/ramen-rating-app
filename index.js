const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "miso.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "tonkotsu.jpg" }
 ];
 
 function displayRamens(){
    const ramenMenu =document.getElementById('ramen-menu');
    ramens.forEach(ramen => {
        const img =document.createElement('img');
        img.src = `${ramen.image}`;
       img.alt =ramen.name;

       img.addEventListener('click', function() {
        handleClick(ramen);
    });

       ramenMenu.appendChild(img);
        
    });
 }

 function handleClick(ramen){
    const ramenDetail =document.getElementById('ramen-detail');
    let detailHtml =`
        <img src="${ramen.image}"alt="${ramen.name}">
        <div id="rameninfo">
        <h3 class="ramen-name">${ramen.name}</h3>
        <p class="ramen-restaurant">${ramen.restaurant}</p>
        </div>
    `;
    if (ramen.rating){
        detailHtml +=`
        <div class="ramen-addedinfo">
            <h3>Rating:</h3>
            <p>${ramen.rating}</p>
        </div>   
        `
    }
    if(ramen.comment){
        detailHtml +=` 
        <div class="ramen-addedinfo">
            <h3>Comment:</h3>
            <p>${ramen.comment}</p>
        </div>`
    }

    ramenDetail.innerHTML =detailHtml;
    ramenDetail.style.display = "block";
 }
 function addSubmitListener() {
    document.getElementById("ramenForm").addEventListener("submit", function(event) {
        event.preventDefault();

        const newRamen = {
            id: ramens.length + 1,
            name: event.target.name.value,
            restaurant: event.target.restaurant.value,
            image: event.target.url.value,   
            rating: event.target.rate.value, 
            comment: event.target.comment.value,
        };

        ramens.push(newRamen);
        displayNewRamen(newRamen);

        event.target.reset();
    });
}
function displayNewRamen(ramen) {
    const ramenMenu = document.getElementById("ramen-menu");
    const img = document.createElement("img");
    img.src = ramen.image;
    img.alt = ramen.name;
    img.addEventListener("click", () => handleClick(ramen));
    ramenMenu.appendChild(img);
}
function main() {
    displayRamens();
    addSubmitListener();

    // Check if the array is not empty before displaying the first ramen
    if (ramens.length > 0) {
        handleClick(ramens[0]); // Display first ramen by default
    } else {
        const ramenDetail = document.getElementById('ramen-detail');
        ramenDetail.style.display = "none"; // Hide if no ramen is available
    }
}

main();


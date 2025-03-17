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
    ramenDetail.innerHTML =detailHtml;
 }

 displayRamens()
 handleClick()
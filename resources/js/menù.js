
fetch('../resources/menù.json')
.then(response=>response.json())
.then(data=>{
    // data è un ARRAY con tutti i dati json ed ha scope LOCALE xciò deve essere fatto tutto dentro la fetch
    // console.log(data);  

    // per accedere a ogni singolo sushi perciò ogg. (element = ogni singolo sushi) ma dobiamo filtrare categorie uniche senza ripetizioni
    function Category(){
        let uniqueCategories=[];
    data.forEach(element => { 
        if(!uniqueCategories.includes(element.categoria)){
            uniqueCategories.push(element.categoria)
        }
    });

    console.log(uniqueCategories); // crudo cotto sashimi
    // dobbiamo creare un buttone per ogni categoria 
    let wrapper=document.querySelector("#wrapper"); // catturiamo il contenitore dall'html
    uniqueCategories.forEach(element=>{
        let div= document.createElement('div');
        div.classList.add("col-md-2", "d-flex", "justify-content-around", "col-12", "my-5" );
        div.innerHTML=`<h3 class="btn btnCategory btn-outline-light" id="${element}"> ${element}</h3>
        </div>`;
   wrapper.appendChild(div); // dove.appendchild(cosa appendere)

    })
  }

   Category();

//    funzione per creare cards dei Sushi 
let wrapperCards=document.querySelector("#wrapperCards");
function CreateCards(data){
    //ripulire pag.
wrapperCards.innerHTML="";
    data.forEach(element=>{
        let div=document.createElement('div');
        div.classList.add("col-3","me-2", "mb-4");
        div.innerHTML=`<div class="card position-relative align-items-center justify-content-center  gradient-card" >
        <div class="overflow-hidden">
          <img src="../media/carousel1.jpg" class="card-img-top card-img-zoom" alt="...">
        </div>
        <h5 class="card-title">${element.tipo}</h5>
        <p class="card-text">${element.pezzi}pz</p>
        <p class="card-text">${element.prezzo}&euro;</p>
        </div>`;
        wrapperCards.appendChild(div);

    })


}
CreateCards(data);



// gestione FILTRI PER CATEGORIA
let btnCategories=document.querySelectorAll(".btnCategory"); //catturo tutti i bottoni.
console.log(btnCategories);
// creo il filtro
function filterbyCategory(category){
    let filtered=data.filter(sushi=>sushi.categoria==category)
    CreateCards(filtered); 
}

btnCategories.forEach(button=>{ //per ogni bottone 
    button.addEventListener('click', ()=>{
        // console.log(button.id);
        filterbyCategory(button.id);
        
       
     
    })

})
 


})





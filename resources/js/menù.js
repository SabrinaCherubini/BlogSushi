
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
        div.innerHTML=`<h3 class="btn btn-outline-light id="${element}"> ${element}</h3>
        </div>`;
   wrapper.appendChild(div); // dove.appendchild(cosa appendere)

    })
  }

   Category();
})



/*DECLARACION Y ASIGNACION DE VARIABLES A USAR CON EL DOM*/
const charactersElm = document.getElementById('characters');
const nameFilter = document.getElementById('filtro');
const statusFilter = document.getElementById('estado-filtro');

/*IMPLEMENTANDO METODO PARA LLAMAR A LA API RICK AND MORTY*/

/*REALIZANDO FUNCION ASINCRONA PARA QUE 
  FUNCIONE EN PARALELO AL SERVIDOR*/
try{
    async function getCharacters (name, status){

        /*LLAMANDO A LA API RICK AND MORTI Y 
        ASIGNANDO A VARIABLE*/
        let url = 'https://rickandmortyapi.com/api/character/';

        if(name||status){
            url += '?';
            if(name){
                url += `name=${name}&`;
            } 
        }
    
        /*DECLARANDO VARIABLE Y ASIGNANDO URL A ELLA 
        PARA DEFINIR COMO SE RECIBIRA LA RESPUESTA DE LA API*/
        const res = await fetch(url);
    
        /*DECLARANDO Y ASIGNANDO VARIABLE CON TIPO DE 
        FORMATO EN QUE VAMOS A RECIBIR 
        LA RESPUESTA DE LA API*/
        const data = await res.json();
        
        
    
        /* COMPROBANDO EJECUTANDO DE METODO*/
        console.log(data.results);
    
        /*RECIBIENDO RESULTADO DE LA PETICION*/
        return data.results;
    }

      /*REALIZANDO METODO QUE VA A MOSTRAR 
      ELEMENTOS DE LA API EN EL DOM*/
    async function viewCharacters(name, status){

        /*OBTENIENDO PERSONAJES FILTRADOS DE 
        LA API EN EL METODO getCharacters*/
        const characters = await getCharacters(name,status);
    
        charactersElm.innerHTML = '';
        /*RENDERIZANDO PERSONAJES Y 
        CREANDO TARJETAS DE ESTOS EN EL DOM UTILIZANDO UN LOOP*/
    
        for(let character of characters){
         /*CREANDO ELEMENTO DIV PARA CONTENEDOR 
         PRINCIPAL DE TARJETAS CON PERSONAJES EN EL DOM*/
        
         const card = document.createElement('div');
 
         /*AGREGANDO UNA CLASE AL ELEMENTO card 
         PARA DAR DISEÑO A TARJETAS DE 
         PERSONAJES EN EL DOM*/
         card.classList.add('character-card');

         /*DEFINIENDO ESTRUCTURA DE LA 
         TARJETE DE PERSONAJE A MOSTRAR EN EL DOM*/
            card.innerHTML = `
                <img src="${character.image}" />
                <div class="nombre"><h2>${character.name}</h2></div>
                <p>Status: ${character.status}</p>
                <p>Especie: ${character.species}</p>
                <p>Origen: ${character.origin.name}</p>
                <p class="episodios">
                    Primeros 3 episodios:<br><a href="${character.episode[0]}" target="_blank ">Episodio 1</a><br>
                                        <a href="${character.episode[1]}" target="_blank ">Episodio 2</a><br>
                                        <a href="${character.episode[2]}" target="_blank ">Episodio 3</a>
                </p>

                <style>
                    .character-card{
                        width: 300px;
                        margin: 10px;
                        padding: 10px;
                        background-color: #4d4747;
                        border: #ffffff 2px solid;
                        border-radius: 10px;
                        font-family: sans-serif;
                        color: white;
                    }
                    a{
                        color: #ffffff;
                        text-decoration: none;
                    }
                    a:hover{
                        color: #ff9776;
                        transform: scale(1.1);
                    }
                    .episodios{
                        background-color: blueviolet;
                        border: #ffffff 2px solid;
                        border-radius: 12px;
                        padding-left: 10px;
                        padding-top: 5px;
                        padding-bottom: 5px;
                        text-align: center;
                    }
                    img{
                        width: 60%;
                        border: #ffffff 2px solid;
                        border-radius: 50%;
                        box-shadow: 0 0 5px rgba(10, 10, 10, 0.7);
                        margin-left: 120px;
                    }
                    .nombre{
                        border: #ffffff 2px solid;
                        background-color: blueviolet;
                        border-radius: 12px;
                        
                        text-align: center;
                    }
                    h2{
                      background-image: var(--accent-gradient);
		              -webkit-background-clip: text;
		              -webkit-text-fill-color: transparent;
                    }

                </style>

            `;

           
            /*AGREGANDO TARJETAS A EL DOM */
            charactersElm.appendChild(card);
           
        }
    }

    /*EJECUTANDO METODO CREACION DE TARJETAS*/
    viewCharacters();
    
    /*CREANDO FUNCIONALIDAD PARA BARRA DE BUSQUEDA EN EL DOM*/
    nameFilter.addEventListener('input', () => {
        viewCharacters(nameFilter.value); 
    });
   

}catch{

    const failed = document.createElement('div');

        /*AGREGANDO UNA CLASE AL ELEMENTO card 
        PARA DAR DISEÑO A TARJETAS DE 
        PERSONAJES EN EL DOM*/
        card.classList.add('failed');

        /*DEFINIENDO ESTRUCTURA DE LA 
        TARJETE DE PERSONAJE A MOSTRAR EN EL DOM*/
        failed.innerHTML = `
            <h1>Sorry your serch is wroung</h1>

            <style>
                .failed{
                    display: flex;
                    justify-content: center;
                    color: #ffffff;
                }
                h1{
                    text-align: center;
                    font-size: 20px;
                }
            </style>

        `
};
  
  





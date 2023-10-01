  // elementos

  const inputNumber = document.querySelector("#numero");
  const btn = document.querySelector("#btn");
  const token = document.querySelector(".token");
  const validacao = document.querySelector(".validacao");
  
 let numeroAleatorio = 0;

const paragrafo = document.createElement("p");
token.appendChild(paragrafo);

const validar = document.createElement("p");
validacao.appendChild(validar)

const gerarTokens = () => {
  numeroAleatorio = Math.floor(Math.random() *900000) + 100000;
  paragrafo.innerHTML = numeroAleatorio;
}
 setInterval(gerarTokens, 8000 );

 btn.addEventListener("click" , () => { 

    const input =  Number(inputNumber.value)
  console.log(input) 

    if(!input)return;
 
 if(input === numeroAleatorio ){
        
    validar.innerHTML = "Codigo valido !"
} else{
      
    validar.innerHTML = "Codigo invalido !"
   
   }
});


  
  


  





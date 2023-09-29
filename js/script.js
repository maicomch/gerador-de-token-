  // elementos

  const inputNumber = document.querySelector("#numero");
  const btn = document.querySelector("#btn");
  const token = document.querySelector(".token");
  const validacao = document.querySelector(".validacao");
  
 

const paragrafo = document.createElement("p");
token.appendChild(paragrafo);

const validar = document.createElement("p");
validacao.appendChild(validar)

const gerarTokens = () => {
  const numeroAleatorio = Math.floor(Math.random() *900000) + 100000;
  paragrafo.innerHTML = numeroAleatorio;
  
  console.log(paragrafo)
}
 setInterval(gerarTokens, 8000 );

   btn.addEventListener("click" , () => { 

    const input =  Number((inputNumber).value)
  console.log(input) 

    if(!input)return;

   
    /*if(input === ){
      
    
      console.log(validar.innerHTML = "Codigo valido !") 
    } else{
      
      console.log( validar.innerHTML = "Codigo invalido !")
   
   }
*/
 
    
})


  
  


  





var exchangeform = document.querySelector(".exchangeForm");

exchangeform.onsubmit = function(e) {
    e.preventDefault();// refresh 
     var elemnets=e.target.elements;
     var amount=elemnets[0].value;
     var exchange=elemnets[1].value;
     var result = amount;

     if (exchange==='dollar'){
         result=amount/3.5;

     }

     else if (exchange==='dinar'){
         result=amount/5;
     }


     var data="The value in nis is "+result;
        document.querySelector('.result').innerHTML=data;


}



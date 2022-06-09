function calc(){
    let p = (document.getElementById("peso").value);
    let a = (document.getElementById("altura").value);
    // let i = parseFloat(document.getElementById("idade").value);
    let calculo = (p/(a * a)).toFixed(1);
    
    let convert = parseFloat(calculo)

    
    if (convert < 18) { 
        document.getElementById("res").innerText = "Seu IMC é " + convert + ", Classificado como Abaixo do Normal";
    } else if (convert > 18 && convert <= 24.9){
        document.getElementById("res").innerText = "Seu IMC é " + convert + ", Classificado como Normal";
    } else if (convert > 25.0 && convert <= 29.9) {
        document.getElementById("res").innerText = "Seu IMC é " + convert + ", Classificado como Sobrepeso";
    } else if (convert > 30.0 && convert <= 39.9) {
        document.getElementById("res").innerText = "Seu IMC é " + convert + ", Classificado como Obesidade";
    } else if (convert > 40) {
        document.getElementById("res").innerText = "Seu IMC é " + convert + ", Classificado como Obesidade grave";
    }       
    
    
    // function ResultSoma() {
    //     if (convert < 18) { 
    //         return "Abaixo do peso"
    //     } else if (convert > 18 && convert <= 24.9){
    //         return "normal"
    //     } else if (convert > 25.0 && convert <= 29.9) {
    //         return "sobrepesso"
    //     } else if (convert > 30.0 && convert <= 39.9) {
    //         return "Obesidade"
    //     } else if (convert => 40) {
    //         return "Obesidade Grave"
    //     }  
    // }

    //inserir o calulo na tag "resp"
    // document.getElementById("res").innerText = calculo;
    
  
    console.log(convert)
    console.log(p);
    console.log(a);
    console.log(calculo);
    // console.log(resp);

}

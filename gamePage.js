N1 = localStorage.getItem("J1");
N2 = localStorage.getItem("J2");
Pontuassaum1 = 0;
Pontuassaum2 = 0;

document.getElementById("nomeJ1").innerHTML = N1 + ": ";
document.getElementById("nomeJ2").innerHTML = N2 + ": ";
document.getElementById("ponJ1").innerHTML = Pontuassaum1;
document.getElementById("ponJ2").innerHTML = Pontuassaum2;

document.getElementById("askPepole").innerHTML = "QUEM PERGUNTA: " + N1;
document.getElementById("resposta").innerHTML = "QUEM RESPONDE: " + N2;


function enviar() {
    GETpicanha = document.getElementById("number1").value;
    GETpicanha2 =document.getElementById("number2").value;
    PalavraFinal = GETpicanha + "X" + GETpicanha2;
    
    TagPalavra = "<h4 id = 'wordDisplay'> N*: " + PalavraFinal + "</h4>";
    TagRe = "<br> Resposta: <input type='text' id='EntradaCheck'> ";
    Butaum = "<br><br> <button class ='btn btn-info' onclick= 'check_in()'> SEU PALPITE ESTÁ...</button>"
    Tudo = TagPalavra + TagRe + Butaum;
    console.log(Tudo);
    document.getElementById("saida").innerHTML = Tudo;
    document.getElementById("word").value = "";
}

QP = "J1";
QR = "J2";

function check_in(){
    
    RFinal = parseInt(GETpicanha) * parseInt(GETpicanha2);

    GETcade = document.getElementById("EntradaCheck").value;
    GETcade = GETcade.toLowerCase();
    if ( GETcade == RFinal){
        if(QR == "J1"){
            Pontuassaum1++;
            document.getElementById("ponJ1").innerHTML = Pontuassaum1;
            
        }
        else{
            Pontuassaum2++;
            document.getElementById("ponJ2").innerHTML = Pontuassaum2;
        }
    }
    if(QR == "J1"){
        QR = "J2";
        QP = "J1";
        document.getElementById("askPepole").innerHTML = "QUEM PERGUNTA: " + N1;
        document.getElementById("resposta").innerHTML = "QUEM RESPONDE: " + N2;
    }
    else{
        QP = "J2";
        QR = "J1";
        document.getElementById("askPepole").innerHTML = "QUEM PERGUNTA: " + N2;
        document.getElementById("resposta").innerHTML = "QUEM RESPONDE: " + N1;    
    }
    document.getElementById("saida").innerHTML = "";
}
var agora = new Date()
var dia = agora.getDay()
var hora = agora.getHours()
var minuto = agora.getMinutes()
var segundos = agora.getSeconds()

switch(dia){
    case 0:
        var diaSem  = "Domingo";
        break
    case 1:
        var diaSem = "Segunda";
        break
    case 2:
        var diaSem = "Terça";
        break
    case 3:
        var diaSem = "Quarta";
        break
    case 4:
        var diaSem = "Quinta"
        break
    case 5:
        var diaSem = "Sexta"
        break
    case 6:
        var diaSem = "Sabado"
        break
    default:
        var diaSem = 'ERRO'
        break
} console.log(`Hoje é ${diaSem}. Agora são EXATAMENTE ${hora}:${minuto}:${segundos}`)
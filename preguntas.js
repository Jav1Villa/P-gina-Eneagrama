function verificar(){
    
    let puntosE1 = 0;
    let puntosE2 = 0;
    let puntosE3 = 0;
    let puntosE4 = 0;
    let puntosE5 = 0;
    let puntosE6 = 0;
    let puntosE7 = 0;
    let puntosE8 = 0;
    let puntosE9 = 0;

    let p1 = document.quiz.pregunta1.value;
    let p2 = document.quiz.pregunta2.value;
    let p3 = document.quiz.pregunta3.value;
    let p4 = document.quiz.pregunta4.value;
    let p5 = document.quiz.pregunta5.value;
    let p6 = document.quiz.pregunta6.value;
    let p7 = document.quiz.pregunta7.value;
    let p8 = document.quiz.pregunta8.value;
    let p9 = document.quiz.pregunta9.value;
    let p10 = document.quiz.pregunta10.value;

    switch (p1) {
        case "Muy de acuerdo": puntosE1 = puntosE1 + 4;break;
        case "Algo de acuerdo": puntosE1 = puntosE1 + 3;break;
        case "Posiblemente": puntosE1 = puntosE1 + 2;break;
        case "Poco en desacuerdo": puntosE1 = puntosE1 + 1;break;
        case "Totalmente en desacuerdo": puntosE1 = puntosE1 + 0;break;
        default:break;
    }

    switch (p2) {
        case "Muy de acuerdo": puntosE2 = puntosE2 + 4;break;
        case "Algo de acuerdo": puntosE2 = puntosE2 + 3;break;
        case "Posiblemente": puntosE2 = puntosE2 + 2;break;
        case "Poco en desacuerdo": puntosE2 = puntosE2 + 1;break;
        case "Totalmente en desacuerdo": puntosE2 = puntosE2 + 0;break;
        default:break;
    }

    switch (p3) {
        case "Muy de acuerdo": puntosE3 = puntosE3 + 4;break;
        case "Algo de acuerdo": puntosE3 = puntosE3 + 3;break;
        case "Posiblemente": puntosE3 = puntosE3 + 2;break;
        case "Poco en desacuerdo": puntosE3 = puntosE3 + 1;break;
        case "Totalmente en desacuerdo": puntosE3 = puntosE3 + 0;break;
        default:break;
    }

    switch (p4) {
        case "Muy de acuerdo": puntosE4 = puntosE4 + 4;break;
        case "Algo de acuerdo": puntosE4 = puntosE4 + 3;break;
        case "Posiblemente": puntosE4 = puntosE4 + 2;break;
        case "Poco en desacuerdo": puntosE4 = puntosE4 + 1;break;
        case "Totalmente en desacuerdo": puntosE4 = puntosE4 + 0;break;
        default:break;
    }

    switch (p5) {
        case "Muy de acuerdo": puntosE5 = puntosE5 + 4;break;
        case "Algo de acuerdo": puntosE5 = puntosE5 + 3;break;
        case "Posiblemente": puntosE5 = puntosE5 + 2;break;
        case "Poco en desacuerdo": puntosE5 = puntosE5 + 1;break;
        case "Totalmente en desacuerdo": puntosE5 = puntosE5 + 0;break;
        default:break;
    }

    switch (p6) {
        case "Muy de acuerdo": puntosE6 = puntosE6 + 4;break;
        case "Algo de acuerdo": puntosE6 = puntosE6 + 3;break;
        case "Posiblemente": puntosE6 = puntosE6 + 2;break;
        case "Poco en desacuerdo": puntosE6 = puntosE6 + 1;break;
        case "Totalmente en desacuerdo": puntosE6 = puntosE6 + 0;break;
        default:break;
    }

    switch (p7) {
        case "Muy de acuerdo": puntosE7 = puntosE7 + 4;break;
        case "Algo de acuerdo": puntosE7 = puntosE7 + 3;break;
        case "Posiblemente": puntosE7 = puntosE7 + 2;break;
        case "Poco en desacuerdo": puntosE7 = puntosE7 + 1;break;
        case "Totalmente en desacuerdo": puntosE7 = puntosE7 + 0;break;
        default:break;
    }

    switch (p8) {
        case "Muy de acuerdo": puntosE8 = puntosE8 + 4;break;
        case "Algo de acuerdo": puntosE8 = puntosE8 + 3;break;
        case "Posiblemente": puntosE8 = puntosE8 + 2;break;
        case "Poco en desacuerdo": puntosE8 = puntosE8 + 1;break;
        case "Totalmente en desacuerdo": puntosE8 = puntosE8 + 0;break;
        default:break;
    }

    switch (p9) {
        case "Muy de acuerdo": puntosE9 = puntosE9 + 4;break;
        case "Algo de acuerdo": puntosE9 = puntosE9 + 3;break;
        case "Posiblemente": puntosE9 = puntosE9 + 2;break;
        case "Poco en desacuerdo": puntosE9 = puntosE9 + 1;break;
        case "Totalmente en desacuerdo": puntosE9 = puntosE9 + 0;break;
        default:break;
    }

    switch (p10) {
        case "Muy de acuerdo": puntosE1 = puntosE1 + 4; break;
        case "Algo de acuerdo": puntosE1 = puntosE1 + 3; break;
        case "Posiblemente": puntosE1 = puntosE1 + 2; break;
        case "Poco en desacuerdo": puntosE1 = puntosE1 + 1; break;
        case "Totalmente en desacuerdo": puntosE1 = puntosE1 + 0; break;
        default: break;
    }

    document.write(puntosE1);
    document.write(puntosE2);
    document.write(puntosE3);
    document.write(puntosE4);
    document.write(puntosE5);
    document.write(puntosE6);
    document.write(puntosE7);
    document.write(puntosE8);
    document.write(puntosE9);

    

}
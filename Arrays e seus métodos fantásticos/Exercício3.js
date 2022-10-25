var inventario_Drofo = ["um anel da invisibilidade", " dois pares de botas mágicas", " uma poção do sono", " duas poções da inocência"];

var inventario_Topper = [" uma capa da invisibilidade", " uma pedra do despertar", " uma varinha das varinhas", " uma poção da inocência", " duas poções da mentira", " uma poção anti-inteligência"];


// No meio de sua jornada, Torper consumiu uma das poções da mentira... , 

inventario_Topper.splice(4, 1, " uma poção da mentira");

// perdeu sua pedra...

delete inventario_Topper[1];

// e ganhou um par de botar mágicas do Drofo achou um escudo mágico e uma espada mágica. 

inventario_Topper.push(" um par de botar mágicas do Drofo", "  um escudo mágico", " uma espada mágica.");


console.log(inventario_Topper);

// No meio da sua jornada, Drofo, ganhou mais uma bota mágica...

inventario_Drofo.splice(1, 1, " três pares de botas mágicas");

// usou sua poção do sono...

delete inventario_Drofo[2];

// e consumiu a poção anti-inteligência do Torper...

delete inventario_Topper[5];

// encontrou um ovo de dragão e uma coxinha.

inventario_Drofo.push(" um ovo de dragão", " uma coxinha");


console.log(inventario_Drofo);

var novo_inventario_Drofo = inventario_Drofo.filter(function (i) {
    return i;
  });

var novo_inventario_Topper = inventario_Topper.filter(function (i) {
    return i;
  });

document.write("No final Drofo ficou com: " + novo_inventario_Drofo + ","+ novo_inventario_Topper);






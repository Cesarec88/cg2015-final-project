var Feature = require('./Feature.js');

Feature.inherits(PortaOspedale, Feature);

function PortaOspedale(feature) {
    Feature.call(this, feature);
}

PortaOspedale.prototype.style = {
                            prefix: "fa",
                            icon: "medkit",
                            zIndex: 3
                        };

PortaOspedale.prototype.in_graph = true;

PortaOspedale.prototype.in_2D_map = false;

PortaOspedale.prototype.get3DModel = function() {

      //colors 
      var grigio = new THREE.MeshLambertMaterial( {color: 0x808080});
      var grigioChiaro = new THREE.MeshLambertMaterial({color : 0xD3D3D3});
      var celesteMetallo = new THREE.MeshLambertMaterial({color : 0xB0C4DE});
      var bianco = new THREE.MeshLambertMaterial({color : 0xFFFFFF});
      var nero = new THREE.MeshLambertMaterial({color : 0x000000});
      var verdeAcquamarina = new THREE.MeshLambertMaterial( {color : 0x348781});
      var rosso = new THREE.MeshLambertMaterial({color : 0xFF0000});
      var turchese = new THREE.MeshLambertMaterial({color : 0x43C6DB,opacity :0.7,transparent: true});
      var bluMetallo = new THREE.MeshLambertMaterial({color : 0xB7CEEC});
      var grigioScuro = new THREE.MeshLambertMaterial({color : 0x313131});
      var grigioScuro2 = new THREE.MeshLambertMaterial({color : 0x212121});
      var grigioBluMetallico = new THREE.MeshLambertMaterial({color : 0xC2DFFF});
      var grigioBluMetallicoScuro = new THREE.MeshLambertMaterial({color : 0x566D7E});

      //code
      var portaOspedale = new THREE.Object3D();
      portaOspedale.scale.set(1.1,1.1,1.1);
       
      var dettaglio = 1;
      var antaSinistra = creaAnta();
      var antaDestra = creaAnta();
      var maniglia = creaManiglia();
      var cardiniAntaSinistra = creaCardini();
      var cardiniAntaDestra = creaCardini();
      var manigliaSicurezzaSinistra = creaManigliaSicurezza();
      var manigliaSicurezzaDestra = creaManigliaSicurezza();
      var serratura = creaSerratura();
      var meccanismoSerratura = creaMeccanismoSerratura();
      var ingressoSerratura = creaIngressoSerratura();
      var bloccaAntaSinistra = creaBloccaAnta();
      var bloccaAntaDestra = creaBloccaAnta();
      meccanismoSerratura.position.set(-0.05,-0.02,0.03);
      maniglia.position.set(-0.47/2,0.85/2,-0.03);
      cardiniAntaSinistra.position.set(0.595/2 ,0,-0.06/2);
      cardiniAntaDestra.position.set(0.6/2 ,0,0.077/2);
      antaDestra.rotation.y =Math.PI +45/180*Math.PI;
      antaSinistra.rotation.y =-Math.PI*45/180;
      antaDestra.position.set(-0.6/2 -0.084,0,0.0043);
      antaSinistra.position.set(0.6/2 +0.084,0,-0.0043);
      manigliaSicurezzaSinistra.position.set(0,0.4,0.06/2);
      manigliaSicurezzaDestra.position.set(0,0.4,-0.062/2);
      maniglia.add(meccanismoSerratura);
      antaSinistra.add(maniglia);
      antaSinistra.add(manigliaSicurezzaSinistra);
      antaDestra.add(manigliaSicurezzaDestra)
      antaDestra.add(ingressoSerratura);
      antaSinistra.add(cardiniAntaSinistra);
      portaOspedale.add(antaSinistra);
      antaDestra.add(cardiniAntaDestra); 
      antaSinistra.add(bloccaAntaSinistra);
      antaDestra.add(bloccaAntaDestra);     
      portaOspedale.add(antaDestra);
      portaOspedale.rotation.y =Math.PI/2;

      function creaIngressoSerratura () {
        var meccanismo = new THREE.Object3D();
        var geometriaBase = new THREE.BoxGeometry(0.01,0.1,0.02);
        var geometriaPrimoIncastro = new THREE.BoxGeometry(0.01,0.021,0.012);
        var geometriaSecondoIncastro = new THREE.BoxGeometry(0.01,0.041,0.01);
        var base = new THREE.Mesh( geometriaBase, bluMetallo);
        var primoIncastro = new THREE.Mesh( geometriaPrimoIncastro, grigioScuro);
        var secondoIncasto = new THREE.Mesh( geometriaSecondoIncastro, grigioScuro2);
        primoIncastro.position.set(-0.0006,0.03,0);
        secondoIncasto.position.y =-0.05;
        primoIncastro.add(secondoIncasto);
        base.add(primoIncastro);
        meccanismo.add(base);
        meccanismo.position.set(-0.291,0.39,0.005);
        meccanismo.scale.set(1.1,1.2,1.2);
        return meccanismo;
        
      }

      function creaBloccaAnta () {
        var blocco = new THREE.Object3D()
        var geometriaBloccaAnta = new THREE.CylinderGeometry(0.012,0.012,1.905,Math.round(32*dettaglio));
        var geometriaBloccaAnta2 = new THREE.CylinderGeometry(0.007,0.007,1.907,Math.round(32*dettaglio));
        var bloccaAnta = new THREE.Mesh( geometriaBloccaAnta, bluMetallo);
        var bloccaAnta2 = new THREE.Mesh( geometriaBloccaAnta2, grigioBluMetallicoScuro);
        blocco.position.set(-0.275,0.7/2,0);
        blocco.scale.x =1/1.3; 
        bloccaAnta.add(bloccaAnta2)
        blocco.add(bloccaAnta);
        return blocco;
      }

      function creaMeccanismoSerratura () {
        var meccanismo = new THREE.Object3D();
        var geometriaBase = new THREE.BoxGeometry(0.01,0.1,0.02);
        var geometriaPrimoIncastro = new THREE.BoxGeometry(0.01,0.02,0.01);
        var geometriaSecondoIncastro = new THREE.BoxGeometry(0.006,0.04,0.008);
        var base = new THREE.Mesh( geometriaBase, bluMetallo);
        var primoIncastro = new THREE.Mesh( geometriaPrimoIncastro, grigioBluMetallicoScuro);
        var secondoIncasto = new THREE.Mesh( geometriaSecondoIncastro, grigioBluMetallicoScuro);
        primoIncastro.position.set(-0.008/2,0.03,0);
        secondoIncasto.position.y =-0.05;
        primoIncastro.add(secondoIncasto);
        base.add(primoIncastro);
        meccanismo.add(base);
        return meccanismo;
      }

      function creaManigliaSicurezza () {
        var maniglia = new THREE.Object3D();
        var geometriaReggiManiglia = new THREE.BoxGeometry(0.5,0.1,0.005);
        var geometriaApriPorta = new THREE.CylinderGeometry(0.04,0.04,0.48,Math.round(32*dettaglio));
        var geometriaCopriApriPorta = new THREE.CylinderGeometry(0.042,0.042,0.01,Math.round(32*dettaglio));
        var reggiManiglia = new THREE.Mesh( geometriaReggiManiglia, nero);
        var apriPorta = new THREE.Mesh( geometriaApriPorta, rosso);
        var copriApriPorta1 = new THREE.Mesh( geometriaCopriApriPorta, nero);
        var copriApriPorta2 = new THREE.Mesh( geometriaCopriApriPorta, nero);
        reggiManiglia.position.z =0.005/2;
        apriPorta.rotation.z =Math.PI/2;
        copriApriPorta1.position.y =0.48/2 +0.01/2;
        copriApriPorta2.position.y =-0.48/2 -0.01/2;
        apriPorta.add(copriApriPorta1);
        apriPorta.add(copriApriPorta2);
        reggiManiglia.add(apriPorta);
        maniglia.add(reggiManiglia);
        return maniglia;
      }

      function creaCardini () {
        var cardiniAnta = new THREE.Object3D();
        var geometriaSottoCardine = new THREE.CylinderGeometry(0.009,0.009,0.04,Math.round(32*dettaglio)); 
        var geometriaSopraCardine = new THREE.CylinderGeometry(0.01,0.01,0.04,Math.round(32*dettaglio)); 
        var sottoCardine1 = new THREE.Mesh( geometriaSottoCardine, verdeAcquamarina);
        var sopraCardine1 = new THREE.Mesh( geometriaSopraCardine, verdeAcquamarina);
        var sottoCardine2 = new THREE.Mesh( geometriaSottoCardine, verdeAcquamarina);
        var sopraCardine2 = new THREE.Mesh( geometriaSopraCardine, verdeAcquamarina);
        sottoCardine1.position.y =-0.4;
        sopraCardine1.position.y =0.04;
        sottoCardine2.position.y =1;
        sopraCardine2.position.y =0.04;
        sottoCardine2.add(sopraCardine2);
        sottoCardine1.add(sopraCardine1);
        cardiniAnta.add(sottoCardine2);
        cardiniAnta.add(sottoCardine1);
        return cardiniAnta;
      }

      function creaManiglia () {
        var maniglia = new THREE.Object3D();
        var baseManiglia = creaBaseManiglia();
        var manico = creaManico();
        manico.rotation.x =Math.PI/2;
        manico.position.set(0,0.04,-0.03/2 -0.01/2);
        maniglia.add(baseManiglia);
        maniglia.add(manico);
        maniglia.scale.set(1.1,1.1,1.1);
         
        return maniglia;
      }

      function creaManico () {
        var manico = new THREE.Object3D(); 
        var geometriaParte1 = new THREE.CylinderGeometry(0.01,0.01,0.03,Math.round(32*dettaglio));
        var geometriaParte2 = new THREE.SphereGeometry(0.01,Math.round(32*dettaglio),Math.round(32*dettaglio));
        var geometriaParte3 = new THREE.CylinderGeometry(0.01,0.01,0.07,Math.round(32*dettaglio));
        var parte1 = new THREE.Mesh( geometriaParte1, nero);
        var parte2 = new THREE.Mesh( geometriaParte2, nero);
        var parte3 = new THREE.Mesh( geometriaParte3, nero);
        var parte4 = new THREE.Mesh( geometriaParte2, nero);
        parte3.rotation.z =Math.PI/2;
        parte3.position.x =0.07/2;
        parte2.position.y =-0.03/2;
        parte4.position.y =-0.07/2;
        parte3.add(parte4);
        parte2.add(parte3);
        parte1.add(parte2);
        manico.add(parte1);
        return manico;
      }

      function creaBaseManiglia () {
        var base = new THREE.Object3D();
        var geometriaBase1 = new THREE.BoxGeometry(0.038,0.14,0.01);
        var geometriaBase2 = new THREE.CylinderGeometry(0.023,0.023,0.01,Math.round(32*dettaglio));
        var serratura = creaSerratura();
        var base1 = new THREE.Mesh( geometriaBase1, nero);
        var base2 = new THREE.Mesh( geometriaBase2, nero);
        serratura.rotation.x = Math.PI/2;
        serratura.position.y =-0.03;
        base2.rotation.x =Math.PI/2;
        base2.position.y =-0.033;
        base2.scale.z =1.5
        base1.add(serratura);
        base1.add(base2);
        base.add(base1);
        return base;
      }

      function creaSerratura () {
        var serratura = new THREE.Object3D();
        var geometriaSerratura1 = new THREE.CylinderGeometry(0.005,0.005,0.02,Math.round(32*dettaglio));
        var geometriaSerratura2 = new THREE.BoxGeometry(0.008,0.02,0.02);
        var geometriaSerratura3 = new THREE.BoxGeometry(0.007,0.0203,0.0018);        
        var serratura1 = new THREE.Mesh( geometriaSerratura1, bluMetallo);
        var serratura2 = new THREE.Mesh( geometriaSerratura2, bluMetallo);
        var serratura3 = new THREE.Mesh( geometriaSerratura3, grigioBluMetallicoScuro );
        serratura2.position.z = 0.01;
        serratura1.add(serratura2);
        serratura1.add(serratura3);
        serratura.add(serratura1);
        return serratura;
      }

      function creaAnta () {
        var anta = new THREE.Object3D();
        var geometriaCopriBaseAnta = new THREE.BoxGeometry(0.6,1.2,0.01);
        var geometriaCopriMedioAnta = new THREE.BoxGeometry(0.2,0.7,0.01);
        var geometriaCopriAltoAnta = new THREE.BoxGeometry(0.2,0.2,0.01);
        var geometriaBordoCopriAnta = new THREE.CylinderGeometry(0.005,0.005,1.9,Math.round(32*dettaglio));
        var geometriaBordoCopriAnta2 = new THREE.BoxGeometry(0.03,1.9,0.01);
        var geometriaMedioAnta2 = new THREE.BoxGeometry(0.2,0.7,0.06);
        var geometriaMedioAnta1 = new THREE.BoxGeometry(0.19,0.7,0.06);
        var geometriaAltoAnta = new THREE.BoxGeometry(0.2,0.2,0.06);
        var geometriaVetro = new THREE.BoxGeometry(0.2,0.5,0.05);
        var geometriaBaseAnta = new THREE.BoxGeometry(0.59,1.2,0.06);
        var geometriaCorniceVetroVerticale = new THREE.BoxGeometry(0.01,0.52,0.064);
        var geometriaCorniceVetroOrizzontale = new THREE.BoxGeometry(0.224,0.01,0.064);
        var copriBaseAnta = new THREE.Mesh( geometriaCopriBaseAnta , verdeAcquamarina );
        var medioAnta1 = new THREE.Mesh( geometriaMedioAnta1, verdeAcquamarina);
        var medioAnta2 = new THREE.Mesh( geometriaMedioAnta2, verdeAcquamarina);
        var baseAnta = new THREE.Mesh( geometriaBaseAnta, verdeAcquamarina );
        var copriMedioAnta1 = new THREE.Mesh( geometriaCopriMedioAnta, verdeAcquamarina);
        var copriMedioAnta2 = new THREE.Mesh( geometriaCopriMedioAnta, verdeAcquamarina);
        var copriAltoAnta = new THREE.Mesh( geometriaCopriAltoAnta, verdeAcquamarina);
        var altoAnta = new THREE.Mesh( geometriaAltoAnta, verdeAcquamarina);
        var bordoCopriAnta = new THREE.Mesh( geometriaBordoCopriAnta, verdeAcquamarina);
        var bordoCopriAnta2 = new THREE.Mesh( geometriaBordoCopriAnta2, verdeAcquamarina);
        var vetro = new THREE.Mesh( geometriaVetro, turchese);
        var corniceVetroVerticale1 = new THREE.Mesh( geometriaCorniceVetroVerticale, verdeAcquamarina);
        var corniceVetroVerticale2 = new THREE.Mesh( geometriaCorniceVetroVerticale, verdeAcquamarina);
        var corniceVetroOrizzontale1 = new THREE.Mesh( geometriaCorniceVetroOrizzontale, verdeAcquamarina);
        var corniceVetroOrizzontale2 = new THREE.Mesh( geometriaCorniceVetroOrizzontale, verdeAcquamarina);
        copriBaseAnta.position.set(-(0.6-0.59)/2,0,-0.05/2);
        copriMedioAnta1.position.set(-0.2,1.2/2 +0.7/2,0);
        copriMedioAnta2.position.set(0.2,1.2/2 +0.7/2,0);
        copriAltoAnta.position.set(0,(0.5 +0.2)/2,-0.05/2);
        altoAnta.position.set(0,(0.5 +0.2)/2,-0.05/2 +0.05/2);
        vetro.position.set(-0.01/2,1.2/2 +0.5/2,0);
        medioAnta2.position.z =0.05/2;
        medioAnta1.position.set(0.005,0,0.05/2);
        bordoCopriAnta.position.set(-0.6/2,0.7/2,0);
        corniceVetroVerticale1.position.x = 0.2/2 +0.014/2;
        corniceVetroVerticale2.position.x =-0.2/2 -0.014/2;
        corniceVetroOrizzontale1.position.y = 0.5/2 +0.014/2;
        corniceVetroOrizzontale2.position.y =-0.5/2 -0.014/2;
        bordoCopriAnta2.position.set(0.02/2,0,-0.01/2 );
        bordoCopriAnta.add(bordoCopriAnta2);
        vetro.add(copriAltoAnta);
        vetro.add(corniceVetroVerticale1);
        vetro.add(corniceVetroVerticale2);
        vetro.add(corniceVetroOrizzontale1);
        vetro.add(corniceVetroOrizzontale2);
        vetro.add(copriAltoAnta);
        vetro.add(altoAnta);
        baseAnta.add(vetro);
        copriMedioAnta1.add(medioAnta1);
        copriMedioAnta2.add(medioAnta2);
        copriBaseAnta.add(bordoCopriAnta);
        copriBaseAnta.add(copriMedioAnta1);
        copriBaseAnta.add(copriMedioAnta2);
        baseAnta.add(copriBaseAnta);
        anta.add(baseAnta);
        anta.scale.x = 1.3;
        return anta;
      }


    portaOspedale.name = this.id;
    portaOspedale.feature = this;
    var model = Feature.packageModel(portaOspedale);
    return model;
};

module.exports = PortaOspedale;

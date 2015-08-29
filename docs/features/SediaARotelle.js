var Feature = require('./Feature.js');

Feature.inherits(SediaARotelle, Feature);

function SediaARotelle(feature) {
    Feature.call(this, feature);
}

SediaARotelle.prototype.style = {
                            prefix: "fa",
                            icon: "medkit",
                            zIndex: 3
                        };

SediaARotelle.prototype.in_graph = true;

SediaARotelle.prototype.in_2D_map = false;

SediaARotelle.prototype.get3DModel = function() {
 		//colors
      var grigio = new THREE.MeshLambertMaterial({color : 0x808080});
      var grigioChiaro = new THREE.MeshLambertMaterial({color : 0xD3D3D3});
      var blue = new THREE.MeshLambertMaterial({color : 0x000033});
      var bianco = new THREE.MeshLambertMaterial({color : 0xFFFFFF});
      var nero = new THREE.MeshLambertMaterial({color : 0x000000});
      var neroChiaro = new THREE.MeshLambertMaterial({color : 0x242424});

      var sediaARotelle = new THREE.Object3D();
      var dettaglio = 1;
      var ruoteGrandi = creaRuoteGrandi();
      var ruotePiccole = creaRuotePiccole();
      ruotePiccole.position.x =0.319;
      ruotePiccole.position.y =-0.21;
      var sedia = creaSedia();
      sediaARotelle.add(ruoteGrandi);
      sediaARotelle.add(ruotePiccole);
      sediaARotelle.add(sedia);
      sediaARotelle.scale.set(1.2,1.2,1.2);

      function creaSedia () {
        var sedia = new THREE.Object3D();
        var scheletro = creaScheletro();
        var sedile = creaSedile();
        sedile.scale.y =1.2; 
        var pedaliera = creaPedaliera();
        pedaliera.position.set(0.67,-0.3/2,0);
        pedaliera.rotation.z =30/180*Math.PI;
        sedile.position.y =0.19;
        scheletro.add(sedile);
        scheletro.add(pedaliera);
        sedia.add(scheletro);
        return sedia;
      }

      function creaScheletro () {
        var scheletro = new THREE.Object3D();
        var geometriaParteScheletro1 = new THREE.CylinderGeometry(0.01,0.01,0.37,Math.round(dettaglio*32),Math.round(dettaglio*32));
        var geometriaParteScheletro2 = new THREE.CylinderGeometry(0.01,0.01,0.43,Math.round(dettaglio*32),Math.round(dettaglio*32));
        var parteScheletro1 = new THREE.Mesh( geometriaParteScheletro1 , blue);
        var parteScheletro2 = new THREE.Mesh( geometriaParteScheletro2 , blue);
        var parteScheletro3 = new THREE.Mesh( geometriaParteScheletro2 , blue);
        var parteDestraScheletro = creaParteScheletro();
        var parteSinistraScheletro = creaParteScheletro();
        var fermaRuota1 = creaFermaRuota();
        var fermaRuota2 = creaFermaRuota();
        var distanza= 0.17;
        parteDestraScheletro.position.z =distanza;
        parteSinistraScheletro.position.z =-distanza;
        fermaRuota1.position.set(0.25,0.15,0.2);
        fermaRuota2.position.set(0.25,0.15,-0.2);
        fermaRuota2.rotation.y =Math.PI;
        parteScheletro2.position.set(0.1,0.01,0);
        parteScheletro2.rotation.x =Math.PI*50.35/180;
        parteScheletro3.position.set(0.2,0.01,0);
        parteScheletro3.rotation.x =-Math.PI*50.35/180;
        parteScheletro1.position.y =0.07;
        parteScheletro1.rotation.x =Math.PI*110/180;
        parteScheletro1.scale.x=0.6;
        parteScheletro2.scale.z=0.6;
        parteScheletro3.scale.z=0.6;
        scheletro.add(fermaRuota1);
        scheletro.add(fermaRuota2);
        scheletro.add(parteScheletro1);
        scheletro.add(parteScheletro2);
        scheletro.add(parteScheletro3);
        scheletro.add(parteDestraScheletro);
        scheletro.add(parteSinistraScheletro);        
        return scheletro;
      }

      function creaFermaRuota () {
        var fermaRuota = new THREE.Object3D();
        var geometriaFermaRuota1 = new THREE.CylinderGeometry(0.01,0.01,0.055,Math.round(dettaglio*32),Math.round(dettaglio*32));
        var geometriaFermaRuota2 = new THREE.CylinderGeometry(0.01,0.01,0.06,Math.round(dettaglio*32),Math.round(dettaglio*32));
        var geometriaFermaRuota3 = new THREE.CylinderGeometry(0.005,0.005,0.2,Math.round(dettaglio*32),Math.round(dettaglio*32));
        var geometriaFermaRuota4 = new THREE.TorusGeometry(0.01,0.01,Math.round(dettaglio*32),2*dettaglio);
        var geometriaFermaRuota5 = new THREE.CylinderGeometry(0.012,0.012,0.05,Math.round(dettaglio*32),Math.round(dettaglio*32));
        var geometriaFermaRuota6 = new THREE.CylinderGeometry(0.009,0.009,0.005,Math.round(dettaglio*32),Math.round(dettaglio*32));
        var geometriaFermaRuota7 = new THREE.SphereGeometry(0.01,Math.round(dettaglio*32),Math.round(dettaglio*32));
        var fermaRuota1 = new THREE.Mesh( geometriaFermaRuota1, grigioChiaro);
        var fermaRuota2 = new THREE.Mesh( geometriaFermaRuota2, grigioChiaro);
        var fermaRuota3 = new THREE.Mesh( geometriaFermaRuota3, grigioChiaro);
        var fermaRuota4 = new THREE.Mesh( geometriaFermaRuota4, grigioChiaro);
        var fermaRuota5 = new THREE.Mesh( geometriaFermaRuota5, nero);
        var fermaRuota6 = new THREE.Mesh( geometriaFermaRuota6, grigioChiaro);
        var fermaRuota7 = new THREE.Mesh( geometriaFermaRuota7, nero);
        var fermaRuota8 = new THREE.Mesh( geometriaFermaRuota7, nero);
        // fermaRuota1.position.z =0.2;
        fermaRuota1.rotation.x =Math.PI/2;
        fermaRuota2.position.z =0.06/2;
        fermaRuota2.rotation.x =Math.PI/2;
        fermaRuota2.scale.set(0.2,1,0.8);
        fermaRuota3.rotation.x =Math.PI/2;
        fermaRuota3.position.z =-0.2/2;
        fermaRuota4.rotation.x =Math.PI/2;
        fermaRuota5.position.y =-(0.2 +0.05)/2;
        fermaRuota6.position.y =-(0.05+0.005)/2;
        fermaRuota7.position.y =-0.005/2;
        fermaRuota7.scale.set(0.7,0.3,0.7);
        fermaRuota8.position.y =0.055/2;
        fermaRuota8.scale.y =0.6; 
        fermaRuota6.add(fermaRuota7);
        fermaRuota5.add(fermaRuota6);
        fermaRuota3.add(fermaRuota5);
        fermaRuota1.add(fermaRuota8);
        fermaRuota1.add(fermaRuota4);
        fermaRuota1.add(fermaRuota3);
        fermaRuota1.add(fermaRuota2);
        fermaRuota.add(fermaRuota1);
        return fermaRuota;
      }

      function creaParteScheletro () {
         var parteScheletro = new THREE.Object3D();
         var geometriaPezzoScheletroA = new THREE.CylinderGeometry(0.01,0.01,0.32,Math.round(dettaglio*32),Math.round(dettaglio*32));
         var geometriaPezzoScheletroB = new THREE.SphereGeometry(0.01,Math.round(dettaglio*32),Math.round(dettaglio*32));
         var geometriaPezzoScheletroC = new THREE.CylinderGeometry(0.01,0.01,0.1,Math.round(dettaglio*32),Math.round(dettaglio*32));
         var geometriaPezzoScheletroD = new THREE.CylinderGeometry(0.013,0.013,0.1,Math.round(dettaglio*32),Math.round(dettaglio*32));
         var geometriaPezzoScheletroE = new THREE.CylinderGeometry(0.01,0.01,0.3,Math.round(dettaglio*32),Math.round(dettaglio*32));
         var geometriaPezzoScheletroF = new THREE.CylinderGeometry(0.01,0.01,0.39,Math.round(dettaglio*32),Math.round(dettaglio*32));
         var geometriaPezzoScheletroG = new THREE.CylinderGeometry(0.01,0.01,0.23,Math.round(dettaglio*32),Math.round(dettaglio*32));
         var geometriaPezzoScheletroH = new THREE.CylinderGeometry(0.01,0.01,0.06,Math.round(dettaglio*32),Math.round(dettaglio*32));
         var geometriaPezzoScheletroI = new THREE.CylinderGeometry(0.01,0.01,0.25,Math.round(dettaglio*32),Math.round(dettaglio*32));
         var geometriaPezzoScheletroL = new THREE.CylinderGeometry(0.011,0.011,0.03,Math.round(dettaglio*32),Math.round(dettaglio*32));
         var geometriaPezzoScheletroM = new THREE.CylinderGeometry(0.01,0.01,0.05,Math.round(dettaglio*32),Math.round(dettaglio*32));
         var geometriaPezzoScheletroN = new THREE.CylinderGeometry(0.01,0.01,0.1,Math.round(dettaglio*32),Math.round(dettaglio*32));
         var geometriaPezzoScheletroO = new THREE.CylinderGeometry(0.011,0.011,0.07,Math.round(dettaglio*32),Math.round(dettaglio*32));
         var geometriaPezzoScheletroP = new THREE.BoxGeometry(0.04,0.07,0.022);
         var geometriaPezzoScheletroQ = new THREE.CylinderGeometry(0.007,0.007,0.02,Math.round(dettaglio*32),Math.round(dettaglio*32));
         var geometriaCopriPezzoScheletroA = new THREE.CylinderGeometry(0.013,0.0105,0.02,Math.round(dettaglio*32),Math.round(dettaglio*32));
         var copriPezzoScheletroA1 = new THREE.Mesh( geometriaCopriPezzoScheletroA, nero);
         var pezzoScheletroA1 = new THREE.Mesh( geometriaPezzoScheletroA, blue);
         var pezzoScheletroB1 = new THREE.Mesh( geometriaPezzoScheletroB, blue);
         var pezzoScheletroC1 = new THREE.Mesh( geometriaPezzoScheletroC, blue);
         var pezzoScheletroD1 = new THREE.Mesh( geometriaPezzoScheletroB, blue);
         var pezzoScheletroE1 = new THREE.Mesh( geometriaPezzoScheletroC, blue);
         var pezzoScheletroF1 = new THREE.Mesh( geometriaPezzoScheletroD, blue);
         var pezzoScheletroG1 = new THREE.Mesh( geometriaPezzoScheletroE, blue);
         var pezzoScheletroH1 = new THREE.Mesh( geometriaPezzoScheletroF, blue);
         var pezzoScheletroI1 = new THREE.Mesh( geometriaPezzoScheletroG, blue);
         var pezzoScheletroL1 = new THREE.Mesh( geometriaPezzoScheletroH, blue);
         var pezzoScheletroM1 = new THREE.Mesh( geometriaPezzoScheletroB, blue);
         var pezzoScheletroN1 = new THREE.Mesh( geometriaPezzoScheletroI, blue); 
         var pezzoScheletroO1 = new THREE.Mesh( geometriaPezzoScheletroL, nero);
         var pezzoScheletroP1 = new THREE.Mesh( geometriaPezzoScheletroM, grigioChiaro); 
         var pezzoScheletroQ1 = new THREE.Mesh( geometriaPezzoScheletroN, grigioChiaro); 
         var pezzoScheletroR1 = new THREE.Mesh( geometriaPezzoScheletroO, nero);
         var pezzoScheletroS1 = new THREE.Mesh( geometriaPezzoScheletroP, nero);
         var pezzoScheletroT1 = new THREE.Mesh( geometriaPezzoScheletroM, blue);
         var pezzoScheletroU1 = new THREE.Mesh( geometriaPezzoScheletroB, blue);
         var pezzoScheletroV1 = new THREE.Mesh( geometriaPezzoScheletroQ, grigioChiaro);
         var copriPezzoScheletroP1 = new THREE.Mesh( geometriaPezzoScheletroB, nero);
         var copriPezzoScheletroQ1 = new THREE.Mesh( geometriaPezzoScheletroB, nero);
         pezzoScheletroA1.position.set(0.06,-0.13,0);
         pezzoScheletroA1.rotation.z =Math.PI/2;
         copriPezzoScheletroA1.position.y = 0.32/2+0.02/2;
         pezzoScheletroB1.position.y =-0.32/2;
         pezzoScheletroD1.position.y =-0.1/2;
         pezzoScheletroC1.rotation.z = Math.PI*45/180;
         pezzoScheletroC1.position.set(Math.sin(pezzoScheletroC1.rotation.z)*0.05,-Math.cos(pezzoScheletroC1.rotation.z)*0.05,0);
         pezzoScheletroE1.rotation.z =-pezzoScheletroC1.rotation.z;
         pezzoScheletroE1.position.set(Math.sin(-pezzoScheletroC1.rotation.z)*0.05,-Math.cos(-pezzoScheletroC1.rotation.z)*0.05,0);
         pezzoScheletroF1.rotation.z =Math.PI/2;
         pezzoScheletroF1.position.y =-0.1/2;
         pezzoScheletroG1.rotation.z =Math.PI/2;
         pezzoScheletroG1.position.set(0.3/2,0.06,0);
         pezzoScheletroH1.position.set(0.28,-0.39/2 + 0.06,0);
         pezzoScheletroI1.position.y =-0.23/2;
         pezzoScheletroL1.rotation.z =Math.PI/2;
         pezzoScheletroL1.position.set(-0.06/2,-0.05,0);
         pezzoScheletroM1.position.y =0.06/2;
         pezzoScheletroN1.rotation.z =-Math.PI*60/180;
         pezzoScheletroN1.position.set(-Math.sin(pezzoScheletroN1.rotation.z)*0.25/2,Math.cos(pezzoScheletroN1.rotation.z)*0.25/2,0);
         pezzoScheletroO1.position.y =0.25/2 +0.03/2;
         pezzoScheletroP1.position.y =0.03/2+0.05/2;
         copriPezzoScheletroP1.position.y =0.05/2;
         copriPezzoScheletroP1.scale.y =0.5; 
         pezzoScheletroQ1.rotation.z =Math.PI/2;
         pezzoScheletroQ1.position.set(-0.1/2,-0.01,0);
         copriPezzoScheletroQ1.position.y =0.1/2;
         copriPezzoScheletroQ1.scale.y =0.5; 
         pezzoScheletroS1.position.x =0.04/2;
         pezzoScheletroT1.rotation.z =Math.PI*60/180;
         pezzoScheletroT1.position.set(0.02,-0.1,0);
         pezzoScheletroU1.position.y =-0.05/2;
         pezzoScheletroV1.position.y =-0.23/2 -0.02/2;
         pezzoScheletroR1.add(pezzoScheletroS1);
         pezzoScheletroQ1.add(pezzoScheletroR1);
         pezzoScheletroQ1.add(copriPezzoScheletroQ1);
         pezzoScheletroP1.add(pezzoScheletroQ1);
         pezzoScheletroP1.add(copriPezzoScheletroP1);
         pezzoScheletroO1.add(pezzoScheletroP1);
         pezzoScheletroT1.add(pezzoScheletroU1)
         pezzoScheletroN1.add(pezzoScheletroT1)
         pezzoScheletroN1.add(pezzoScheletroO1);
         pezzoScheletroM1.add(pezzoScheletroN1);
         pezzoScheletroL1.add(pezzoScheletroM1);
         pezzoScheletroI1.add(pezzoScheletroV1);
         pezzoScheletroI1.add(pezzoScheletroL1);
         pezzoScheletroF1.add(pezzoScheletroI1);
         pezzoScheletroE1.add(pezzoScheletroF1);
         pezzoScheletroD1.add(pezzoScheletroE1);
         pezzoScheletroC1.add(pezzoScheletroD1);
         pezzoScheletroB1.add(pezzoScheletroC1);
         pezzoScheletroA1.add(pezzoScheletroB1);
         pezzoScheletroA1.add(pezzoScheletroH1);
         pezzoScheletroA1.add(copriPezzoScheletroA1);
         parteScheletro.add(pezzoScheletroA1);
         pezzoScheletroA1.add(pezzoScheletroG1);
         return parteScheletro;
               }


      function creaPedaliera () {
         var pedaliera = new THREE.Object3D();
         var geometriaPoggiaPiedeA = new THREE.BoxGeometry(0.005,0.03,0.15);
         var geometriaPoggiaPiedeB = new THREE.CylinderGeometry(0.005,0.005,0.09,Math.round(dettaglio*32),Math.round(dettaglio*32));
         var geometriaPoggiaPiedeC = new THREE.CylinderGeometry(0.007,0.007,0.03,Math.round(dettaglio*32),Math.round(dettaglio*32));
         var geometriaPedale=new THREE.BoxGeometry(0.1,0.01,0.15);
         var geometriaBordoPedaleLu =new THREE.CylinderGeometry(0.005,0.005,0.1,Math.round(dettaglio*32),Math.round(dettaglio*32)); 
         var geometriaBordoPedaleLa =new THREE.CylinderGeometry(0.005,0.005,0.15,Math.round(dettaglio*32),Math.round(dettaglio*32)); 
         var geometriaBordoPedaleAngolo = new THREE.SphereGeometry(0.005,Math.round(dettaglio*32),Math.round(dettaglio*32));
         var pedale1 = new THREE.Mesh( geometriaPedale, nero);
         var bordoPedaleLu1 = new THREE.Mesh( geometriaBordoPedaleLu, nero);
         var bordoPedaleLa1 = new THREE.Mesh( geometriaBordoPedaleLa, nero);
         var bordoPedaleAngolo1 = new THREE.Mesh( geometriaBordoPedaleAngolo, nero);
         var pedale2 = new THREE.Mesh( geometriaPedale, nero);
         var bordoPedaleLu2 = new THREE.Mesh( geometriaBordoPedaleLu, nero);
         var bordoPedaleLa2 = new THREE.Mesh( geometriaBordoPedaleLa, nero);
         var bordoPedaleAngolo2 = new THREE.Mesh( geometriaBordoPedaleAngolo, nero);
         var poggiaPiedeA1 = new THREE.Mesh( geometriaPoggiaPiedeA, nero);
         var poggiaPiedeB1 = new THREE.Mesh( geometriaPoggiaPiedeB, grigioChiaro);
         var poggiaPiedeC1 = new THREE.Mesh( geometriaPoggiaPiedeC, nero);
         var poggiaPiedeA2 = new THREE.Mesh( geometriaPoggiaPiedeA, nero);
         var poggiaPiedeB2 = new THREE.Mesh( geometriaPoggiaPiedeB, grigioChiaro);
         var poggiaPiedeC2 = new THREE.Mesh( geometriaPoggiaPiedeC, nero);
         pedale1.position.z =0.15/2 +0.015;
         pedale2.position.z =-0.15/2 -0.015;
         bordoPedaleLa1.rotation.x =Math.PI/2;
         bordoPedaleLa1.position.x =0.1/2;
         bordoPedaleLu1.rotation.z =Math.PI/2;
         bordoPedaleLu1.position.z =-0.15/2;
         bordoPedaleAngolo1.position.y =-0.1/2;
         bordoPedaleLa2.rotation.x =Math.PI/2;
         bordoPedaleLa2.position.x =0.1/2;
         bordoPedaleLu2.rotation.z =Math.PI/2;
         bordoPedaleLu2.position.z =0.15/2;
         bordoPedaleAngolo2.position.y =-0.1/2;
         poggiaPiedeA2.position.set(-0.06,0.065,0);
         poggiaPiedeB2.position.set(0.01,-0.057/2,0.14/2);
         poggiaPiedeC2.position.y =(0.054)/2;
         poggiaPiedeA1.position.set(-0.06,0.065,0);
         poggiaPiedeB1.position.set(0.01,-0.057/2,-0.14/2);
         poggiaPiedeC1.position.y =0.054/2;
         poggiaPiedeB2.add(poggiaPiedeC2);
         poggiaPiedeA2.add(poggiaPiedeB2);
         pedale2.add(poggiaPiedeA2);
         poggiaPiedeB1.add(poggiaPiedeC1);
         poggiaPiedeA1.add(poggiaPiedeB1);
         pedale1.add(poggiaPiedeA1);
         pedale2.add(bordoPedaleLu2);
         pedale2.add(bordoPedaleLa2);
         bordoPedaleLu2.add(bordoPedaleAngolo2)
         pedale1.add(bordoPedaleLu1);
         pedale1.add(bordoPedaleLa1);
         bordoPedaleLu1.add(bordoPedaleAngolo1)
         pedaliera.add(pedale1);
         pedaliera.add(pedale2);
         return pedaliera;
      }

      function creaSedile () {
         var sedile = new THREE.Object3D();
         var geometriaPoggiaCuscino = new THREE.BoxGeometry(0.38,0.005,0.34);
         var geometriaPoggiaSchiena1 = new THREE.BoxGeometry(0.005,0.2,0.3);
         var geometriaPoggiaSchiena2 = new THREE.BoxGeometry(0.005,0.1,0.3);
         var geometriaCuscino1 = new THREE.BoxGeometry(0.36,0.06,0.32); 
         var geometriaCuscino2 = new THREE.CylinderGeometry(0.03,0.03,0.32,Math.round(dettaglio*32),Math.round(dettaglio*32));
         var geometriaCuscino3 = new THREE.BoxGeometry(0.02,0.2,0.3);
         var geometriaCuscino3a = new THREE.CylinderGeometry(0.01,0.01,0.2,Math.round(dettaglio*32),Math.round(dettaglio*32));
         var geometriaCuscino4 = new THREE.BoxGeometry(0.02,0.1,0.3);
         var geometriaCuscino4a = new THREE.CylinderGeometry(0.01,0.01,0.3,Math.round(dettaglio*32),Math.round(dettaglio*32));
         var geometriaCuscino4b = new THREE.SphereGeometry(0.01,Math.round(dettaglio*32),Math.round(dettaglio*32));
         var geometriaCuscino4c = new THREE.CylinderGeometry(0.01,0.01,0.1,Math.round(dettaglio*32),Math.round(dettaglio*32));
         var poggiaCuscino = new THREE.Mesh( geometriaPoggiaCuscino, neroChiaro);
         var poggiaSchiena1 = new THREE.Mesh( geometriaPoggiaSchiena1, neroChiaro);
         var poggiaSchiena2 = new THREE.Mesh( geometriaPoggiaSchiena2, neroChiaro);
         var cuscino = new THREE.Mesh( geometriaCuscino1, nero); 
         var cuscino2 = new THREE.Mesh( geometriaCuscino2, nero); 
         var cuscino3 = new THREE.Mesh( geometriaCuscino3, nero); 
         var cuscino3a1 = new THREE.Mesh( geometriaCuscino3a, nero); 
         var cuscino3a2 = new THREE.Mesh( geometriaCuscino3a, nero); 
         var cuscino4 = new THREE.Mesh( geometriaCuscino4, nero); 
         var cuscino4a = new THREE.Mesh( geometriaCuscino4a, nero); 
         var cuscino4b1 = new THREE.Mesh( geometriaCuscino4b, nero); 
         var cuscino4b2 = new THREE.Mesh( geometriaCuscino4b, nero); 
         var cuscino4c1 = new THREE.Mesh( geometriaCuscino4c, nero); 
         var cuscino4c2 = new THREE.Mesh( geometriaCuscino4c, nero); 
         var manici = creaManici();
         poggiaCuscino.position.x =0.38/2;
         poggiaSchiena1.position.y =0.2/2;
         poggiaSchiena2.rotation.z =Math.PI*10/180;
         poggiaSchiena2.position.set(-Math.sin(poggiaSchiena2.rotation.z)*(0.1)/2,Math.cos(poggiaSchiena2.rotation.z)*(0.2+0.1)/2,0);
         cuscino.position.set(0.36/2,0.06/2 +0.005/2,0);
         cuscino2.rotation.x =Math.PI/2;
         cuscino2.position.x =0.36/2;
         cuscino2.scale.x =0.7; 
         cuscino3.position.x =(0.02+0.005)/2;
         cuscino4.position.x =(0.02+0.005)/2;
         cuscino4a.rotation.x =Math.PI/2;
         cuscino4a.position.y =0.1/2;
         cuscino4a.scale.z =0.8; 
         cuscino4b1.position.y =0.3/2;
         cuscino4b2.position.y =-0.3/2;
         cuscino4b1.scale.y =0.7; 
         cuscino4b2.scale.y =0.7; 
         cuscino4c1.scale.z =0.7; 
         cuscino4c2.scale.z =0.7; 
         cuscino4c1.position.z =0.3/2;
         cuscino4c2.position.z =-0.3/2; 
         cuscino3a1.position.z =0.3/2;
         cuscino3a2.position.z =-0.3/2;
         cuscino3a1.scale.z =0.7; 
         cuscino3a2.scale.z =0.7; 
         cuscino.add(cuscino2);
         sedile.add(manici);
         sedile.add(cuscino);
         sedile.add(poggiaCuscino);
         sedile.add(poggiaSchiena1);
         poggiaSchiena1.add(poggiaSchiena2);
         cuscino3.add(cuscino3a1);
         cuscino3.add(cuscino3a2);
         poggiaSchiena1.add(cuscino3);
         poggiaSchiena2.add(cuscino4);
         cuscino4.add(cuscino4a);
         cuscino4a.add(cuscino4b1);
         cuscino4a.add(cuscino4b2);
         cuscino4.add(cuscino4c1);
         cuscino4.add(cuscino4c2);
         return sedile;
      }

      function creaManici () {
         var manici = new THREE.Object3D();
         var manicoDestro = creaManico();
         var manicoSinistro = creaManico();
         var distanza = 0.17;
         manicoDestro.position.z =distanza;
         manicoSinistro.position.z =-distanza;
         manici.add(manicoSinistro);
         manici.add(manicoDestro);
         return manici;
      }

      function creaManico () {
         var manico = new THREE.Object3D();
         var geometriaManicoTrasportino1 = new THREE.CylinderGeometry(0.01,0.01,0.18,Math.round(dettaglio*32),Math.round(dettaglio*32));
         var geometriaManicoTrasportino2 = new THREE.CylinderGeometry(0.01,0.01,0.13,Math.round(dettaglio*32),Math.round(dettaglio*32));
         var geometriaManicoTrasportino3 = new THREE.CylinderGeometry(0.01,0.01,0.05,Math.round(dettaglio*32),Math.round(dettaglio*32));
         var geometriaMano = new THREE.CylinderGeometry(0.012,0.013,0.06,Math.round(dettaglio*32),Math.round(dettaglio*32));
         var geometriaMano2 = new THREE.SphereGeometry(0.013,Math.round(dettaglio*32),Math.round(dettaglio*32));
         var geometriaTuboReggiCuscino1 = new THREE.CylinderGeometry(0.011,0.011,0.38,Math.round(dettaglio*32),Math.round(dettaglio*32));
         var geometriaTuboReggiCuscino2 = new THREE.CylinderGeometry(0.009,0.009,0.02,Math.round(dettaglio*32),Math.round(dettaglio*32));
         var geometriaCopriTuboCuscino2 = new THREE.SphereGeometry(0.009,Math.round(dettaglio*32),Math.round(dettaglio*32));
         var geometriaParteManico = new THREE.BoxGeometry(0.12,0.33,0.005);
         var geometriaTuboManico1 = new THREE.CylinderGeometry(0.01,0.01,0.15,Math.round(dettaglio*32),Math.round(dettaglio*32));
         var geometriaTuboManico2 = new THREE.SphereGeometry(0.01,Math.round(dettaglio*32),Math.round(dettaglio*32));
         var geometriaTuboManico3 = new THREE.CylinderGeometry(0.01,0.01,0.32,Math.round(dettaglio*32),Math.round(dettaglio*32));
         var geometriaTuboManico4 = new THREE.CylinderGeometry(0.01,0.01,0.045,Math.round(dettaglio*32),Math.round(dettaglio*32));
         var geometriaPoggiaMano1 = new THREE.BoxGeometry(0.015,0.25,0.022);
         var geometriaPoggiaMano2 = new THREE.CylinderGeometry(0.011,0.011,0.015,Math.round(dettaglio*32),Math.round(dettaglio*32));
         var geometriaCuscinoPoggiaMano1 = new THREE.CylinderGeometry(0.01,0.01,0.245,Math.round(dettaglio*32),Math.round(dettaglio*32));
         var tuboReggiCuscino1 = new THREE.Mesh( geometriaTuboReggiCuscino1, neroChiaro);
         var tuboReggiCuscino2a = new THREE.Mesh( geometriaTuboReggiCuscino2, grigioChiaro);
         var tuboReggiCuscino2b = new THREE.Mesh( geometriaTuboReggiCuscino2, grigioChiaro);
         var copriTuboCuscino2a = new THREE.Mesh( geometriaCopriTuboCuscino2, nero);
         var copriTuboCuscino2b = new THREE.Mesh( geometriaCopriTuboCuscino2, grigioChiaro);
         var manicoTrasportino1 = new THREE.Mesh( geometriaManicoTrasportino1, blue);
         var manicoTrasportino2 = new THREE.Mesh( geometriaTuboManico2, nero);
         var manicoTrasportino3 = new THREE.Mesh( geometriaTuboManico2, blue);
         var manicoTrasportino5 = new THREE.Mesh( geometriaTuboManico2, blue);
         var manicoTrasportino4 = new THREE.Mesh( geometriaManicoTrasportino2, blue);
         var manicoTrasportino6 = new THREE.Mesh( geometriaManicoTrasportino3, blue);
         var parteManico = new THREE.Mesh( geometriaParteManico, neroChiaro);
         var tuboManico1a = new THREE.Mesh( geometriaTuboManico1, blue);
         var tuboManico1b = new THREE.Mesh( geometriaTuboManico1, blue);
         var tuboManico2a = new THREE.Mesh( geometriaTuboManico2, blue);
         var tuboManico2b = new THREE.Mesh( geometriaTuboManico2, blue);
         var tuboManico3 = new THREE.Mesh( geometriaTuboManico3, blue);
         var tuboManico4 = new THREE.Mesh( geometriaTuboManico2, blue);
         var tuboManico5 = new THREE.Mesh( geometriaTuboManico4, blue);
         var poggiaMano1 = new THREE.Mesh( geometriaPoggiaMano1, neroChiaro);
         var poggiaMano2a = new THREE.Mesh( geometriaPoggiaMano2, neroChiaro);
         var poggiaMano2b = new THREE.Mesh( geometriaPoggiaMano2, neroChiaro);
         var cuscinoPoggiaMano1 = new THREE.Mesh( geometriaCuscinoPoggiaMano1, nero);
         var cuscinoPoggiaMano2a = new THREE.Mesh( geometriaTuboManico2, nero);
         var cuscinoPoggiaMano2b = new THREE.Mesh( geometriaTuboManico2, nero);
         var mano = new THREE.Mesh( geometriaMano, nero);
         var mano2 = new THREE.Mesh( geometriaMano2, nero);
         tuboReggiCuscino1.position.set(0.38/2,0,0);
         tuboReggiCuscino2a.position.y =-0.38/2-0.02/2;
         tuboReggiCuscino1.rotation.z =Math.PI/2;
         copriTuboCuscino2a.position.y =-0.02/2;
         copriTuboCuscino2b.position.y =-0.02/2;
         copriTuboCuscino2a.scale.y =0.4; 
         tuboReggiCuscino2b.rotation.z =Math.PI/2;
         tuboReggiCuscino2b.position.set(-0.03/2,0.38/2,0);
         parteManico.position.x =0.13/2;
         parteManico.rotation.z=-Math.PI*5/180;
         tuboManico1a.rotation.z =Math.PI/2;
         tuboManico1a.position.set(0.15/2,-0.36/2,0);
         tuboManico1b.rotation.z =Math.PI/2;
         tuboManico1b.position.set(0.15/2,0.35/2,0);
         tuboManico2a.position.y =-0.15/2;
         tuboManico2b.position.y =-0.15/2;
         tuboManico3.rotation.z =Math.PI*95/180;
         tuboManico3.position.set(-Math.sin(tuboManico3.rotation.z)*0.32/2,Math.cos(tuboManico3.rotation.z)*0.32/2,0);
         tuboManico4.position.y =0.32/2;
         tuboManico5.rotation.z =-Math.PI*42/180;
         tuboManico5.position.set(-Math.sin(tuboManico5.rotation.z)*0.045/2,Math.cos(tuboManico5.rotation.z)*0.045/2,0);
         poggiaMano1.position.x =-0.015/2;
         poggiaMano2a.rotation.z =Math.PI/2;
         poggiaMano2b.rotation.z =Math.PI/2;
         poggiaMano2a.position.y =0.25/2;
         poggiaMano2b.position.y =-0.25/2;
         poggiaMano2a.scale.x =0.8; 
         poggiaMano2b.scale.x =0.8; 
         cuscinoPoggiaMano1.position.x =-0.01;
         cuscinoPoggiaMano2a.position.y =0.245/2;
         cuscinoPoggiaMano2a.scale.y =0.8;
         cuscinoPoggiaMano2b.position.y =-0.245/2;
         cuscinoPoggiaMano2b.scale.y =0.8; 
         manicoTrasportino1.position.y =0.22/2;
         manicoTrasportino2.position.y =-0.18/2;
         manicoTrasportino2.scale.y =0.7; 
         manicoTrasportino3.position.y =0.18/2;
         manicoTrasportino4.rotation.z =Math.PI*15/180;
         manicoTrasportino4.position.set(-Math.sin(manicoTrasportino4.rotation.z)*(0.13)/2,Math.cos(manicoTrasportino4.rotation.z)*(0.13)/2,0);
         manicoTrasportino5.position.y =0.13/2;
         manicoTrasportino5.rotation.z =-15*Math.PI/180;
         manicoTrasportino6.position.x =-0.05/2;
         manicoTrasportino6.rotation.z =Math.PI/2;
         mano.position.y =0.06/2;
         mano2.position.y =0.06/2;
         mano2.scale.y =0.8; 
         tuboReggiCuscino2a.add(copriTuboCuscino2a);
         tuboReggiCuscino2b.add(copriTuboCuscino2b);
         tuboReggiCuscino1.add(parteManico);
         tuboReggiCuscino1.add(tuboManico1a);
         tuboReggiCuscino1.add(tuboManico1b);
         tuboManico1a.add(tuboManico2a);
         tuboManico1b.add(tuboManico2b);
         tuboManico2b.add(tuboManico3);
         poggiaMano1.add(poggiaMano2a);
         poggiaMano1.add(poggiaMano2b);
         tuboManico3.add(poggiaMano1);
         tuboManico3.add(tuboManico4);
         tuboManico4.add(tuboManico5);
         tuboReggiCuscino1.add(tuboReggiCuscino2a);
         tuboReggiCuscino1.add(tuboReggiCuscino2b);
         manico.add(tuboReggiCuscino1);
         poggiaMano1.add(cuscinoPoggiaMano1);
         cuscinoPoggiaMano1.add(cuscinoPoggiaMano2a);
         cuscinoPoggiaMano1.add(cuscinoPoggiaMano2b);
         manico.add(manicoTrasportino1);
         manicoTrasportino1.add(manicoTrasportino2);
         manicoTrasportino1.add(manicoTrasportino3);
         manicoTrasportino3.add(manicoTrasportino4);
         manicoTrasportino4.add(manicoTrasportino5);
         manicoTrasportino5.add(manicoTrasportino6);
         manicoTrasportino6.add(mano);
         mano.add(mano2);
         return manico;
      }

      function creaRuotePiccole () {
         var ruote = new THREE.Object3D();
         var ruotaPiccola1 = creaRuotaPiccola();
         var ruotaPiccola2 = creaRuotaPiccola();
         var distanza = 0.17;
         ruotaPiccola1.position.z=-distanza;
         ruotaPiccola2.position.z=distanza;
         ruote.add(ruotaPiccola1);
         ruote.add(ruotaPiccola2);
         return ruote;
      }

      function creaRuotaPiccola () {
         var ruotaPiccola = new THREE.Object3D();
         var geometriaRuota = new THREE.TorusGeometry(0.05,0.01,Math.round(dettaglio*32),Math.round(dettaglio*64));
         var geometriaInternoRuota1 = new THREE.TorusGeometry(0.045,0.009,Math.round(dettaglio*32),Math.round(dettaglio*64));
         var geometriaInternoRuota3 = new THREE.TorusGeometry(0.018,0.009,Math.round(dettaglio*32),dettaglio);
         var geometriaInternoRuota4 = new THREE.BoxGeometry(0.01,0.1,0.01);
         var geometriaPernoRuota1 = new THREE.CylinderGeometry(0.01,0.01,0.03,Math.round(dettaglio*32),Math.round(dettaglio*32));
         var geometriaPernoRuota2 = new THREE.SphereGeometry(0.01,Math.round(dettaglio*32),Math.round(dettaglio*32));
         var geometriaPernoRuota3 = new THREE.CylinderGeometry(0,0.06,0.09,Math.round(dettaglio*32),Math.round(dettaglio*32));
         var geometriaPernoRuota4 = new THREE.BoxGeometry(0.06,0.03,0.005);
         var geometriaPernoRuota5 = new THREE.CylinderGeometry(0.01,0.01,0.02,Math.round(dettaglio*32),Math.round(dettaglio*32));
         var geometriaPernoRuota6 = new THREE.CylinderGeometry(0.01,0.012,0.035,Math.round(dettaglio*32),Math.round(dettaglio*32));
         var ruota = new THREE.Mesh( geometriaRuota, grigio);
         var internoRuota1 = new THREE.Mesh( geometriaInternoRuota1, nero);
         var internoRuota3 = new THREE.Mesh( geometriaInternoRuota3, nero);
         var pernoRuota1 = new THREE.Mesh( geometriaPernoRuota1, grigioChiaro);
         var pernoRuota2a = new THREE.Mesh( geometriaPernoRuota2, grigioChiaro);
         var pernoRuota2b = new THREE.Mesh( geometriaPernoRuota2, grigioChiaro);
         var pernoRuota3a = new THREE.Mesh( geometriaPernoRuota3, grigioChiaro);
         var pernoRuota3b = new THREE.Mesh( geometriaPernoRuota3, grigioChiaro);
         var pernoRuota4 = new THREE.Mesh( geometriaPernoRuota4, grigioChiaro);
         var pernoRuota5 = new THREE.Mesh( geometriaPernoRuota5, grigioChiaro);
         var pernoRuota6 = new THREE.Mesh( geometriaPernoRuota2, grigioChiaro);
         var pernoRuota7 = new THREE.Mesh( geometriaPernoRuota6, grigioChiaro);
         var appoggioPerno7 = new THREE.Object3D();
         var appoggioPerno3a = new THREE.Object3D();
         var appoggioPerno3b = new THREE.Object3D();
         for (var i = 0; i <5; i++) {
            var internoRuota = new THREE.Mesh( geometriaInternoRuota4, nero);
            internoRuota.rotation.z =Math.PI*i/5;
            ruota.add(internoRuota);
         };
         pernoRuota1.rotation.x =Math.PI/2;
         pernoRuota2a.scale.y =0.3; 
         pernoRuota2b.scale.y =0.3; 
         pernoRuota2a.position.y =0.03/2;
         pernoRuota2b.position.y =-0.03/2;
         pernoRuota3a.rotation.set(Math.PI/2,0,Math.PI*45/180);
         pernoRuota3b.rotation.set(Math.PI/2,0,Math.PI*45/180);
         pernoRuota3a.scale.set(0.4,1,0.03); 
         pernoRuota3b.scale.set(0.4,1,0.03);
         appoggioPerno3a.position.set(0.0232,0.03*1.2/3,-0.0532/2); 
         appoggioPerno3b.position.set(0.0232,-0.03*1.2/3,-0.0532/2);
         pernoRuota4.rotation.y =-pernoRuota3a.rotation.z;
         pernoRuota4.position.set(0.075*Math.cos(pernoRuota4.rotation.y),0,0.075*Math.sin(pernoRuota4.rotation.y));
         pernoRuota5.rotation.x =Math.PI/2;
         pernoRuota5.position.z =-(0.02+0.005)/2;
         pernoRuota6.position.y =-0.02/2;
         pernoRuota7.position.y =-0.035/2;
         appoggioPerno7.rotation.z =-40/180*Math.PI;
         appoggioPerno7.add(pernoRuota7);
         pernoRuota6.add(appoggioPerno7);
         pernoRuota5.add(pernoRuota6);
         pernoRuota4.add(pernoRuota5);
         pernoRuota1.add(pernoRuota4);
         pernoRuota1.add(appoggioPerno3a);
         pernoRuota1.add(appoggioPerno3b)
         appoggioPerno3a.add(pernoRuota3a);
         appoggioPerno3b.add(pernoRuota3b);
         pernoRuota1.add(pernoRuota2a);
         pernoRuota1.add(pernoRuota2b);
         ruota.add(pernoRuota1);
         ruota.add(internoRuota3)
         ruota.add(internoRuota1)
         ruotaPiccola.add(ruota);
         return ruotaPiccola;
      }



      function creaRuoteGrandi () {
        var ruote = new THREE.Object3D();
        var ruotaGrande1 =creaRuotaGrande();
        var ruotaGrande2 =creaRuotaGrande();
        ruotaGrande2.rotation.y =Math.PI;
        var distanza = 0.2
        ruotaGrande1.position.z =-distanza;
        ruotaGrande2.position.z =distanza;
        ruote.add(ruotaGrande1);
        ruote.add(ruotaGrande2);
        return ruote;
      }


      function creaRuotaGrande () {
        var ruotaGrande1 = new THREE.Object3D();
        var geometriaRuota = new THREE.TorusGeometry(0.25,0.013,Math.round(dettaglio*32),Math.round(dettaglio*64));
        var geometriaUnisciRaggera = new THREE.TorusGeometry(0.24,0.006,Math.round(dettaglio*32),Math.round(dettaglio*64));
        var geometriaCorriMano = new THREE.TorusGeometry(0.23,0.007,Math.round(dettaglio*32),Math.round(dettaglio*64));
        var geometriaPerno = new THREE.CylinderGeometry(0.01,0.01,0.02,Math.round(dettaglio*32),Math.round(dettaglio*32));
        var geometriaRaggera = new THREE.CylinderGeometry(0.25,0,0.0178,Math.round(dettaglio*32),Math.round(dettaglio*32));
        var geometriaCopriPerno = new THREE.CylinderGeometry(0.0175,0.0175,0.0007,Math.round(dettaglio*32),Math.round(dettaglio*32));
        var geometriaPernoRuota = new THREE.CylinderGeometry(0.012,0.012,0.03,Math.round(dettaglio*32),Math.round(dettaglio*32));
        var geometriaEsternoCopriPerno = new THREE.SphereGeometry(0.01,Math.round(dettaglio*32),Math.round(dettaglio*32));
        var geometriaFermaCorriMano = new THREE.BoxGeometry(0.02,0.005,0.03);
        var ruota1 = new THREE.Mesh( geometriaRuota, grigio);
        var perno1 = new THREE.Mesh( geometriaPerno, grigioChiaro);
        var pernoRuota1 = new THREE.Mesh( geometriaPernoRuota, nero);
        var copriPernoInterno1 =new  THREE.Mesh( geometriaCopriPerno, grigioChiaro); 
        var copriPernoEsterno1 =new  THREE.Mesh( geometriaCopriPerno, grigioChiaro); 
        var esternoCopriPernoInterno1 = new THREE.Mesh( geometriaEsternoCopriPerno, nero);
        var raggera = new THREE.Mesh( geometriaRaggera, bianco);
        var unisciRaggera1 = new THREE.Mesh( geometriaUnisciRaggera, grigioChiaro);
        var corriMano = new THREE.Mesh( geometriaCorriMano, grigioChiaro);
        var fermaCorriMano11 = new THREE.Mesh( geometriaFermaCorriMano, nero);
        var fermaCorriMano12 = new THREE.Mesh( geometriaFermaCorriMano, nero);
        var fermaCorriMano13 = new THREE.Mesh( geometriaFermaCorriMano, nero);
        var fermaCorriMano14 = new THREE.Mesh( geometriaFermaCorriMano, nero);
        fermaCorriMano11.position.set(0,0.235,-0.03/2);
        fermaCorriMano12.position.set(0,-0.235,-0.03/2);
        fermaCorriMano13.position.set(0.235,0,-0.03/2);
        fermaCorriMano14.position.set(-0.235,0,-0.03/2);
        fermaCorriMano13.rotation.z =Math.PI/2;
        fermaCorriMano14.rotation.z =Math.PI/2;
        corriMano.position.z =-0.03;
        raggera.rotation.x =Math.PI/2;
        esternoCopriPernoInterno1.position.y =-0.0005;
        esternoCopriPernoInterno1.scale.y =0.2; 
        perno1.rotation.x =Math.PI/2;
        copriPernoInterno1.position.y =-0.01;
        copriPernoEsterno1.position.y =0.01;
        ruota1.add(raggera);
        copriPernoEsterno1.add(pernoRuota1)
        copriPernoInterno1.add(esternoCopriPernoInterno1);
        perno1.add(copriPernoInterno1);
        perno1.add(copriPernoEsterno1);
        ruota1.add(perno1);
        ruotaGrande1.add(unisciRaggera1);
        ruotaGrande1.add(ruota1);
        ruotaGrande1.add(corriMano);
        ruotaGrande1.add(fermaCorriMano11);
        ruotaGrande1.add(fermaCorriMano12);
        ruotaGrande1.add(fermaCorriMano13);
        ruotaGrande1.add(fermaCorriMano14);
        return ruotaGrande1;
         }


   		sediaARotelle.name = this.id;
   		sediaARotelle.feature = this;
   		var model = Feature.packageModel(sediaARotelle);
    	return model;
};

module.exports = SediaARotelle;

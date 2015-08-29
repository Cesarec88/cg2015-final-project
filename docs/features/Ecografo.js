var Feature = require('./Feature.js');

Feature.inherits(Ecografo, Feature);

function Ecografo(feature) {
	Feature.call(this, feature);
}

Ecografo.prototype.style = {
			    			prefix: "fa",
	    					icon: "flask",
	    					zIndex: 3
						};

Ecografo.prototype.in_graph = true;

Ecografo.prototype.in_2D_map = true;

Ecografo.prototype.get3DModel = function() {
	      //colors
      var grigioScuro = new THREE.MeshLambertMaterial({color : 0x808080});
      var grigioChiaro = new THREE.MeshLambertMaterial({color : 0xD3D3D3});
      var grigio = new THREE.MeshLambertMaterial({color : 0xA9A9A9});
      var celesteMetallo = new THREE.MeshLambertMaterial({color : 0xB0C4DE});
      var bianco = new THREE.MeshLambertMaterial({color : 0xFFFFFF});
      var nero = new THREE.MeshLambertMaterial({color : 0x000000});
      var grigioPulsante = new THREE.MeshLambertMaterial({color : 0x708090});
      var blue = new THREE.MeshLambertMaterial({color: 0x000080});


      //create a fake object
      var ecografo = new THREE.Object3D( );
      var dettaglio =1;

      ecografo.scale.set(1.7,1.7,1.7);

      var baseEcografo = creaBaseEcografo();
      var corpoEcografo = creaCorpoEcografo();
      var schermoETastieraEcografo = creaSchermoETastiera();

      corpoEcografo.position.y = 0.13;
      schermoETastieraEcografo.position.y = 0.50;


      corpoEcografo.add(schermoETastieraEcografo);
      ecografo.add(baseEcografo);
      ecografo.add(corpoEcografo);




      function creaSchermoETastiera(){
        var tastiera = creaTastiera();
        var schermo = creaSchermo();

        tastiera.add(schermo);

        return tastiera;
      };

      function creaSchermo(){
        var schermo = new THREE.Object3D();
        var geometriaNodoBraccio = new THREE.CylinderGeometry( 0.04 , 0.04 , 0.01 , Math.round(dettaglio*32) );
        var geometriaNodoBraccio2 = new THREE.CylinderGeometry( 0.04 , 0.04 , 0.02 , Math.round(dettaglio*32) );
        var geometriaNodoBraccio3 = new THREE.SphereGeometry( 0.03 , Math.round(dettaglio*32) , Math.round(dettaglio*32) );
        var geometriaNodoBraccio4 = new THREE.SphereGeometry( 0.02 , Math.round(dettaglio*32) , Math.round(dettaglio*32) );
        var geometriaNodoBraccio5 = new THREE.CylinderGeometry( 0.02 , 0.02 , 0.01 , Math.round(dettaglio*32) );
        var geometriaBraccio = new THREE.BoxGeometry( 0.2 , 0.02 , 0.08 );
        var geometriaBraccio2 = new THREE.BoxGeometry( 0.18 , 0.015 , 0.04 );
        var geometriaBraccioSchermo = new THREE.CylinderGeometry( 0.018 , 0.018 , 0.2 , Math.round(dettaglio*32) );
        var geometriaDietroSchermo = new THREE.BoxGeometry( 0.02 , 0.22 , 0.26 );
        var geometriaDietroSchermo1 = new THREE.BoxGeometry( 0.01 , 0.18 , 0.22 );
        var geometriaSchermo = new THREE.BoxGeometry( 0.01 , 0.2 , 0.22 );
        var geometriaCassa = new THREE.BoxGeometry( 0.05 , 0.04 , 0.26 );
        var geometriaCassa2 = new THREE.BoxGeometry( 0.05 , 0.04 , 0.01 );
        var geometriaCassa3 = new THREE.BoxGeometry( 0.01 , 0.04 , 0.26 );
        var geometriaAria = new THREE.BoxGeometry( 0.051 , 0.0001 , 0.26 );

        var nodoBraccio = new THREE.Mesh( geometriaNodoBraccio , grigioChiaro );
        var nodoBraccio2 = new THREE.Mesh( geometriaNodoBraccio2 , grigioChiaro );
        var nodoBraccio3 = new THREE.Mesh( geometriaNodoBraccio3 , grigioChiaro );
        var nodoBraccio4 = new THREE.Mesh( geometriaNodoBraccio4 , grigioChiaro );
        var nodoBraccio4a = new THREE.Mesh( geometriaNodoBraccio4 , grigioChiaro );
        var nodoBraccio5 = new THREE.Mesh( geometriaNodoBraccio5 , grigioChiaro );
        var nodoBraccio5a = new THREE.Mesh( geometriaNodoBraccio5 , grigioChiaro );
        var braccio = new THREE.Mesh( geometriaBraccio , grigioChiaro );
        var braccio2Oggetto1 = new THREE.Object3D();
        var braccio3Oggetto1 = new THREE.Object3D();
        var braccio2 = new THREE.Mesh( geometriaBraccio2 , grigioChiaro );
        var braccio3 = new THREE.Mesh( geometriaBraccio2 , grigioChiaro );
        var braccioSchermo = new THREE.Mesh( geometriaBraccioSchermo , grigioChiaro );
        var dietroSchermo = new THREE.Mesh( geometriaDietroSchermo , grigioScuro );
        var dietroSchermo1 = new THREE.Mesh( geometriaDietroSchermo1 , grigioScuro );
        var schermoEco = new THREE.Mesh( geometriaSchermo , nero ); 
        var cassa = new THREE.Mesh(geometriaCassa , grigioScuro);
        var cassa2 = new THREE.Mesh(geometriaCassa2 , grigioScuro);
        var cassa1 = new THREE.Mesh(geometriaCassa2 , grigioScuro);
        var cassaDietro = new THREE.Mesh(geometriaCassa3 , grigioScuro);

        cassaDietro.position.x = 0.02;
        cassa1.position.z = 0.13;
        cassa2.position.z = -0.13;
        cassa.position.y = -0.1;
        cassa.position.x = -0.005;
        schermoEco.position.x = -0.01;
        dietroSchermo.position.x = -0.009;
        dietroSchermo1.position.x = -0.001;
        braccioSchermo.position.y = 0.05;
        braccioSchermo.position.x = -0.02;
        nodoBraccio4a.position.x = -0.09;
        braccio3.position.x = -0.09;
        nodoBraccio5.rotation.y = Math.PI*(-45+15)/180;
        braccio3Oggetto1.rotation.z = +Math.PI*25/180;
        nodoBraccio4.position.x = -0.09;
        braccio2Oggetto1.rotation.y = Math.PI *45/180;
        braccio2Oggetto1.rotation.z = -Math.PI*25/180;
        braccio2.position.y = 0.01;
        braccio2.position.x = -0.09;
        nodoBraccio3.position.y = 0.01;
        nodoBraccio2.position.x = 0.1;
        braccio.position.x = 0.1;
        braccio.position.y = -0.01;
        schermo.position.y =0.3/2 + 0.005;


        for(var i = 0 ; i<26 ; i++){
          var aria = new THREE.Mesh( geometriaAria , nero );
          aria.position.set( 0 , -0.018 + 0.039*i/27 , 0 );
          cassa.add( aria );

        }

        cassa.add(cassa1);
        cassa.add(cassa2);
        cassa.add(cassaDietro);
        dietroSchermo.add(cassa);
        dietroSchermo.add(schermoEco);
        braccioSchermo.add(dietroSchermo);
        braccioSchermo.add(dietroSchermo1);
        nodoBraccio4a.add(braccioSchermo);
        nodoBraccio4a.add(nodoBraccio5a);
        braccio3.add(nodoBraccio4a);
        nodoBraccio5.add(braccio3);
        braccio3Oggetto1.add(nodoBraccio5);
        nodoBraccio4.add(braccio3Oggetto1);
        braccio2.add(nodoBraccio4);
        braccio2Oggetto1.add(braccio2);
        nodoBraccio3.add(braccio2Oggetto1);
        nodoBraccio2.add(nodoBraccio3);
        braccio.add(nodoBraccio2);
        nodoBraccio.add(braccio);
        schermo.add(nodoBraccio);
        return schermo;
      };


      function creaSonda(){
        var sonda = new THREE.Object3D();
        var geometriaManico1 = new THREE.CylinderGeometry( 0.023 , 0.023 , 0.018 , Math.round(dettaglio*32) );
        var geometriaManico2 = new THREE.BoxGeometry( 0.05 , 0.018 , 0.035 );
        var geometriaManico3 = new THREE.BoxGeometry( 0.01 , 0.018 , 0.05 );
        var geometriaBanda = new THREE.CylinderGeometry( 0.009 , 0.009 , 0.045 , Math.round(dettaglio*32) );
        var geometriaBanda2 = new THREE.SphereGeometry( 0.009 , Math.round(dettaglio*32) , Math.round(dettaglio*32) );

        var manico1 = new THREE.Mesh( geometriaManico1 , grigio );
        var manico2 = new THREE.Mesh( geometriaManico2 , grigio );
        var manico3 = new THREE.Mesh( geometriaManico3 , grigio );
        var banda = new THREE.Mesh( geometriaBanda , grigioScuro );
        var banda1 = new THREE.Mesh( geometriaBanda2 , grigioScuro );
        var banda2 = new THREE.Mesh( geometriaBanda2 , grigioScuro );

        manico2.position.x = 0.025;
        manico3.position.x = 0.025;
        banda.position.x = 0.01/2;
        banda.rotation.x = Math.PI/2;
        banda1.position.y = 0.045/2;
        banda2.position.y = -0.045/2;

        banda.add(banda1);
        banda.add(banda2);
        manico3.add(banda);
        manico2.add(manico3)
        manico1.add(manico2);
        sonda.add(manico1);

        return sonda
      };

      function creaSondaRettale(){
        var sondaRettale = new THREE.Object3D();
        var geometriaParteFinale = new THREE.CylinderGeometry( 0.004 , 0.002 , 0.05 , Math.round(dettaglio*32) );
        var geometriaManico1 = new THREE.CylinderGeometry( 0.005 , 0.005 , 0.03 , Math.round(dettaglio*32) );
        // var geometriaManico3 = new THREE.CylinderGeometry( 0.005 , 0.005 , 0.01 , Math.round(dettaglio*32) );
        var geometriaManico2 = new THREE.SphereGeometry( 0.005 , Math.round(dettaglio*32) , Math.round(dettaglio*32) );
        var geometriaParteFinale2 = new THREE.SphereGeometry( 0.002 , Math.round(dettaglio*32) , Math.round(dettaglio*32) );
        var geometriaParteCentrale = new THREE.CylinderGeometry( 0.007 , 0.007 , 0.04 , Math.round(dettaglio*32) );

        var manico1 = new THREE.Mesh( geometriaManico1 , grigio );
        var manico2 = new THREE.Mesh( geometriaManico2 , grigio ) ;
        var parteFinale = new THREE.Mesh( geometriaParteFinale , nero ) ;
        var parteFinale1 = new THREE.Mesh( geometriaParteFinale2 , grigioScuro ) ;
        var parteCentrale = new THREE.Mesh( geometriaParteCentrale , grigio ) ;

        manico2.position.y = -0.03/2;
        parteCentrale.position.y = 0.03;
        parteFinale.position.y = -0.03/2;
        parteFinale1.position.y = -0.05/2;

        parteFinale.add(parteFinale1);
        manico1.add(parteFinale);
        manico1.add( parteCentrale );
        manico1.add( manico2 );
        sondaRettale.add( manico1 );

        return sondaRettale;
      };

      function creaTastiera(){

        var tastiera = new THREE.Object3D();
        var sonda = creaSonda();
        var sondaRettale = creaSondaRettale();

        var geometriaBraccio = new THREE.CylinderGeometry( 0.04 , 0.04 , 0.3 ,  Math.round(dettaglio*32) );
        var geometriaT1 = new THREE.BoxGeometry( 0.1 , 0.05 , 0.26 );
        var geometriaT2 = new THREE.BoxGeometry( 0.2 , 0.03 , 0.26 );
        var geometriaT3 = new THREE.BoxGeometry( 0.06 , 0.03 , 0.06 );
        var geometriaC1 = new THREE.CylinderGeometry( 0.015 , 0.015 , 0.27 , Math.round(dettaglio*32) );
        var geometriaS1 = new THREE.SphereGeometry( 0.015 , Math.round(dettaglio*32) , Math.round(dettaglio*32) );
        var geometriaPulsante = new THREE.CylinderGeometry( 0.005 , 0.005 , 0.015 , Math.round(dettaglio*32) );
        var geometriaPulsante2 = new THREE.CylinderGeometry( 0.002 , 0.002 , 0.015 , Math.round(dettaglio*32) );
        var geometriaPulsante3 = new THREE.BoxGeometry( 0.004 , 0.015 , 0.004 );
        var geometriaSchermino = new THREE.BoxGeometry( 0.04 , 0.015 , 0.04 );
        var geometriaReggiSonda = new THREE.CylinderGeometry( 0.004 , 0.004 , 0.04 , Math.round(dettaglio*32) )
        
        var braccio = new THREE.Mesh( geometriaBraccio , grigioScuro );
        var T1 = new THREE.Mesh( geometriaT1 , nero );
        var C1a = new THREE.Mesh( geometriaC1 , bianco );
        var C1b = new THREE.Mesh( geometriaC1 , bianco );
        var C1d = new THREE.Mesh( geometriaC1 , bianco );
        var C1c = new THREE.Mesh( geometriaC1 , bianco );
        var C1e = new THREE.Mesh( geometriaC1 , bianco );
        var T2 = new THREE.Mesh( geometriaT2 , nero );
        var T2a = new THREE.Mesh( geometriaT2 , bianco );
        var T3 = new THREE.Mesh( geometriaT3 , nero );
        var S1a = new THREE.Mesh( geometriaS1 , bianco );
        var S1b = new THREE.Mesh( geometriaS1 , bianco );
        var S1c = new THREE.Mesh( geometriaS1 , bianco );
        var S1d = new THREE.Mesh( geometriaS1 , bianco );
        var S1e = new THREE.Mesh( geometriaS1 , bianco );
        var schermino = new THREE.Mesh( geometriaSchermino , blue );
        var reggiSonda1 = new THREE.Mesh( geometriaReggiSonda , bianco );
        var reggiSonda2 = new THREE.Mesh( geometriaReggiSonda , bianco );
        var reggiSonda3 = new THREE.Mesh( geometriaReggiSonda , bianco );
        var reggiSonda4 = new THREE.Mesh( geometriaReggiSonda , bianco );
        var reggiSonda5 = new THREE.Mesh( geometriaReggiSonda , bianco );
        var reggiSonda6 = new THREE.Mesh( geometriaReggiSonda , bianco );
        var reggiSonda7 = new THREE.Mesh( geometriaReggiSonda , bianco );
        var reggiSonda8 = new THREE.Mesh( geometriaReggiSonda , bianco );

        for(var i = 0; i<16 ; i++){
          var pulsante1 = new THREE.Mesh( geometriaPulsante2 , grigio );
          pulsante1.position.set(0.09 , 0.013 , -0.12+0.24*i/15 );  
          T2.add(pulsante1);
        
        }

        for(var i = 0; i<11 ; i++){
          var pulsante1 = new THREE.Mesh( geometriaPulsante , grigioPulsante );
          pulsante1.position.set(0.065 , 0.013 , -0.12+0.24*i/10 );  
          T2.add(pulsante1);
        
        }


        for(var i = 0; i<16 ; i++){
          var pulsante1 = new THREE.Mesh( geometriaPulsante , celesteMetallo );
          pulsante1.position.set(0.08 , 0.013 , -0.12+0.24*i/15 );  
          T2.add(pulsante1);
        
        }

        for(var i = 0; i<7 ; i++){
          var pulsante1 = new THREE.Mesh( geometriaPulsante2 , grigio );
          pulsante1.position.set(0.05 , 0.013 , -0.12+0.24*i/6 );  
          T2.add(pulsante1);
        
        }

        for(var i = 0; i<11 ; i++){
          var pulsante1 = new THREE.Mesh( geometriaPulsante3 , grigio );
          pulsante1.position.set(0.03 , 0.013 , -0.12+0.24*i/10 );  
          T2.add(pulsante1);
        
        }

        for(var i = 0; i<11 ; i++){
          var pulsante1 = new THREE.Mesh( geometriaPulsante , grigioPulsante );
          pulsante1.position.set(0.04 , 0.013 , -0.12+0.24*i/10 );  
          T2.add(pulsante1);
        
        }

        for(var i = 0; i<16 ; i++){
          var pulsante1 = new THREE.Mesh( geometriaPulsante2 , celesteMetallo );
          pulsante1.position.set(0.02 , 0.013 , -0.12+0.24*i/15 );  
          T2.add(pulsante1);
        
        }

        for( var j = 0 ; j<7 ; j++ ){
          for(var i = 0; i<26 ; i++ ){
             var pulsante1 = new THREE.Mesh( geometriaPulsante2 , grigioScuro );
             pulsante1.position.set(-0.02 + 0.06*j/6 , 0.02 , -0.12+0.24*i/25 );  
             T1.add(pulsante1);
        
          }

        }

        reggiSonda1.rotation.x = Math.PI/2;
        reggiSonda2.rotation.x = Math.PI/2;
        reggiSonda3.rotation.x = Math.PI/2;
        reggiSonda4.rotation.x = Math.PI/2;
        reggiSonda5.rotation.x = Math.PI/2;
        reggiSonda6.rotation.x = Math.PI/2;
        reggiSonda7.rotation.x = Math.PI/2;
        reggiSonda8.rotation.x = Math.PI/2;

        reggiSonda4.position.z = 0.035/2;
        reggiSonda5.position.z = 0.035/2;
        reggiSonda6.position.z = 0.035/2;
        reggiSonda7.position.z = 0.035/2;
        reggiSonda4.position.y = 0.043/2;
        reggiSonda5.position.y = -0.043/2;
        reggiSonda6.position.y = 0.043 + 0.043/2;
        reggiSonda7.position.y = 0.086 + 0.043/2;

        reggiSonda1.position.z = -0.035/2;
        reggiSonda2.position.z = -0.035/2;
        reggiSonda3.position.z = -0.035/2;
        reggiSonda8.position.z = -0.035/2;
        reggiSonda1.position.y = 0.043/2;
        reggiSonda2.position.y = -0.043/2;
        reggiSonda3.position.y = 0.043 + 0.043/2;
        reggiSonda8.position.y = 0.086 + 0.043/2;

        sonda.position.x = -0.035;
        sonda.position.z = -0.021;
        sonda.rotation.x = Math.PI/2;

        // sondaRettale.position.x = -0.035;
        sondaRettale.position.z = -0.021;
        sondaRettale.position.y = 0.043;
        sondaRettale.rotation.z = Math.PI/2;


        braccio.rotation.y = Math.PI;
        T1.position.y = 0.015;
        T1.position.x =-0.05;
        T2a.position.y = -0.01
        T2.position.x = 0.12;
        T2.position.y = 0.05;
        C1a.rotation.x = Math.PI/2;
        C1e.rotation.x = Math.PI/2;
        C1a.position.x = -0.1;
        C1b.position.x = 0.1;
        C1c.position.x = 0.035;
        C1c.position.z = 0.13;
        C1d.position.z = -0.13;
        C1d.position.x = 0.035;
        C1e.position.x = 0.27/2 + 0.04;
        C1b.rotation.x = Math.PI/2;
        C1c.rotation.z = Math.PI/2;
        C1d.rotation.z = Math.PI/2;
        S1a.position.y = 0.27/2;
        S1c.position.y = 0.27/2;
        S1b.position.y = -0.27/2;
        S1d.position.y = -0.27/2;
        T3.rotation.x = Math.PI/2;
        T3.position.x = -0.035;
        S1e.position.y = -0.01;
        schermino.position.set( 0.035  , 0.01 , -0.08);

        T1.add(schermino);
        T3.add(S1e);

        C1c.add(reggiSonda4);
        C1c.add(reggiSonda5);
        C1c.add(reggiSonda6);
        C1c.add(reggiSonda7);

        C1d.add(reggiSonda1);
        C1d.add(reggiSonda2);
        C1d.add(reggiSonda3);
        C1d.add(reggiSonda8);
        C1d.add(sonda);
        C1d.add(sondaRettale);
        C1e.add(T3);
        C1a.add(S1b);
        C1a.add(S1a);
        C1e.add(S1d);
        C1e.add(S1c);
        T2.add(T2a);
        T2.add(C1a);
        T2.add(C1b);
        T2.add(C1c);
        T2.add(C1d);
        T2.add(C1e);
        T2.add(T1);
        braccio.add(T2);
        tastiera.add(braccio);


        return tastiera;
      };

      function creaCorpoEcografo(){
        var corpoEcografo = new THREE.Object3D();
        var copriRuotaA = new THREE.Object3D();
        var copriRuotaB = new THREE.Object3D();
        var geometriaCentroEcografo = new THREE.CylinderGeometry( 0.05 , 0.05 , 0.45 , Math.round(dettaglio*32) );
        var geometriaPosterioreEcografo = new THREE.CylinderGeometry( 0.165 , 0.18 , 0.3 , Math.round(dettaglio*32) );
        var geometriaPosterioreEcografo1 = new THREE.SphereGeometry( 0.165 , Math.round(dettaglio*32) , Math.round(dettaglio*32) );
        var geometriaPosterioreEcografo2 = new THREE.BoxGeometry( 0.1, 0.3 , 0.01 );
        var geometriaPosterioreEcografo3 = new THREE.BoxGeometry( 0.1, 0.01 , 0.03 );
        var geometriaCopriRuota = new THREE.CylinderGeometry( 0.05 , 0.05 , 0.01 , Math.round(dettaglio*32) );
        var geometriaCopriRuota1 = new THREE.BoxGeometry( 0.1 , 0.01 , 0.2 );
        var geometriaPulsante = new THREE.CylinderGeometry( 0.005 , 0.005 , 0.015 , Math.round(dettaglio*32) );
        var geometriaPulsante2 = new THREE.CylinderGeometry( 0.002 , 0.002 , 0.015 , Math.round(dettaglio*32) );


        var centroEcografo = new THREE.Mesh( geometriaCentroEcografo , grigioChiaro );
        var posterioreEcografo1 = new THREE.Mesh( geometriaPosterioreEcografo , grigio );
        var posterioreEcografo2 = new THREE.Mesh( geometriaPosterioreEcografo1 , grigio );
        var posteriorePareteEcografo1 = new THREE.Mesh( geometriaPosterioreEcografo2 , grigio );
        var posteriorePareteEcografo2 = new THREE.Mesh( geometriaPosterioreEcografo2 , grigio );
        var posteriorePareteEcografo3 = new THREE.Mesh( geometriaPosterioreEcografo3 , grigio );
        var posteriorePareteEcografo4 = new THREE.Mesh( geometriaPosterioreEcografo3 , grigio );
        var copriRuota1 = new THREE.Mesh( geometriaCopriRuota , grigioChiaro );
        var copriRuota2 = new THREE.Mesh( geometriaCopriRuota , grigioChiaro );
        var copriRuota3 = new THREE.Mesh( geometriaCopriRuota1 , grigioChiaro );
        var copriRuota4 = new THREE.Mesh( geometriaCopriRuota1 , grigioChiaro );
        var pulsante1 = new THREE.Mesh( geometriaPulsante , grigioPulsante );
        var pulsante2 = new THREE.Mesh( geometriaPulsante , grigioPulsante );
        var pulsante3 = new THREE.Mesh( geometriaPulsante2 , grigioScuro );
        var pulsante4 = new THREE.Mesh( geometriaPulsante2 , grigioScuro );
        var pulsante5 = new THREE.Mesh( geometriaPulsante2 , grigioScuro );


        centroEcografo.position.y = 0.225;

        posterioreEcografo1.position.set( 0.16 , 0.15 , 0 );
        posterioreEcografo2.position.set( 0.16 , 0.26 , 0 );

        copriRuota1.position.set( -0.15 , 0.003 , -0.15 );
        copriRuota2.position.set( -0.15 , 0.003 , 0.15 );

        copriRuotaA.rotation.y = Math.PI*45.5/180;
        copriRuota3.position.z = 0.1;

        copriRuotaB.rotation.y = -Math.PI*45.5/180;
        copriRuota4.position.z = -0.1;

        posteriorePareteEcografo1.rotation.y = Math.PI*43/180;
        posteriorePareteEcografo2.rotation.y = -Math.PI*43/180;
        posteriorePareteEcografo1.position.set( -0.16 , 0 , -0.06 );
        posteriorePareteEcografo2.position.set( -0.16 , 0 , 0.06 );
        posteriorePareteEcografo3.position.set( 0 , 0.15 -0.005 , 0.015 -0.005 );
        posteriorePareteEcografo4.position.set( 0 , 0.15 -0.005 , -0.015 + 0.005 );

        pulsante1.rotation.x = Math.PI/2;
        pulsante2.rotation.x = Math.PI/2;
        pulsante3.rotation.x = Math.PI/2;
        pulsante4.rotation.x = Math.PI/2;
        pulsante5.rotation.x = Math.PI/2;

        pulsante2.position.y = 0.014;
        pulsante3.position.y = 0.026;
        pulsante4.position.y = 0.036;
        pulsante5.position.y = 0.048;


        posteriorePareteEcografo1.add( pulsante1 );
        posteriorePareteEcografo1.add( pulsante3 );
        posteriorePareteEcografo1.add( pulsante4 );
        posteriorePareteEcografo1.add( pulsante5 );
        posteriorePareteEcografo1.add( pulsante2 );
        posteriorePareteEcografo2.add(posteriorePareteEcografo4);
        posteriorePareteEcografo1.add(posteriorePareteEcografo3);
        posterioreEcografo1.add(posteriorePareteEcografo1);
        posterioreEcografo1.add(posteriorePareteEcografo2);
        copriRuotaA.add(copriRuota3);
        copriRuota1.add(copriRuotaA);
        copriRuotaB.add(copriRuota4);
        copriRuota2.add(copriRuotaB);
        corpoEcografo.add(copriRuota1);
        corpoEcografo.add(copriRuota2);
        corpoEcografo.add(posterioreEcografo1);
        corpoEcografo.add(posterioreEcografo2);
        corpoEcografo.add(centroEcografo);


        return corpoEcografo;
      };

      function creaBaseEcografo(){

        var geometriaCentroEcografo = new THREE.CylinderGeometry( 0.1 , 0.1 , 0.08 , Math.round(dettaglio*32) );
        var geometriaCentro2Ecografo = new THREE.CylinderGeometry( 0.11 , 0.11 , 0.08 , Math.round(dettaglio*32) );
        var geometriaPosterioreEcografo = new THREE.CylinderGeometry( 0.2 , 0.2 , 0.01 , Math.round(dettaglio*32) );
        var geometriaPosterioreEcografo2 = new THREE.CylinderGeometry( 0.05 , 0.05 , 0.01 , Math.round(dettaglio*32) );
        var geometriaCopriGrataEcografo2 = new THREE.BoxGeometry( 0.15 , 0.08 , 0.015 );
        var geometriaCoperturaCentro = new THREE.CylinderGeometry( 0 , 0.06 , 0.01 , Math.round(dettaglio*32) );


        var baseEcografo = new THREE.Object3D();

        var centroEcografo = new THREE.Mesh( geometriaCentroEcografo , grigioScuro );
        var posterioreEcografo1 = new THREE.Mesh( geometriaPosterioreEcografo , grigioScuro );
        var posterioreRuotaEcografo1 = new THREE.Mesh( geometriaPosterioreEcografo2 , grigioScuro );
        var posterioreRuotaEcografo2 = new THREE.Mesh( geometriaPosterioreEcografo2 , grigioScuro );
        var posterioreEcografo2 = new THREE.Mesh( geometriaCentro2Ecografo , grigioScuro );
        var posterioreEcografo3 = new THREE.Mesh( geometriaCentro2Ecografo , grigioScuro );
        var copriGrataEcografo2a = new THREE.Mesh( geometriaCopriGrataEcografo2 , grigioScuro );
        var copriGrataEcografo2b = new THREE.Mesh( geometriaCopriGrataEcografo2 , grigioScuro );
        var coperturaCentro = new THREE.Mesh( geometriaCoperturaCentro , nero );

        var grataVentola = creaGrataVentola(); 

        var ruota1 = creaRuota();
        var ruota2 = creaRuota();
        var ruota3 = creaRuota();
        var ruota4 = creaRuota();  

        coperturaCentro.position.set( -0.081 , 0.04 , 0 );

        ruota1.position.set( -0.15 , 0.052 , -0.15 );
        ruota2.position.set( -0.15 , 0.052 , 0.15 );
        ruota3.position.set( 0.28, 0.052 , -0.14 );
        ruota4.position.set( 0.28, 0.052 , 0.14 );

        posterioreRuotaEcografo1.position.set( 0.28 , 0.125 , -0.13 );
        posterioreRuotaEcografo2.position.set( 0.28 , 0.125 , 0.13 );


        copriGrataEcografo2a.rotation.y = Math.PI*37/180;
        copriGrataEcografo2a.position.set( 0.004 , 0.09 , -0.118 );

        copriGrataEcografo2b.rotation.y = -Math.PI*37/180;
        copriGrataEcografo2b.position.set( 0.004 , 0.09 , 0.118 );

        centroEcografo.position.y = 0.09;

        grataVentola.position.set( 0.125 , 0.06 , -0.082 );
        posterioreEcografo1.position.set( 0.16 , 0.125 , 0 );
        posterioreEcografo2.position.set( 0.25 , 0.09 , 0 );
        posterioreEcografo3.position.set( 0.12 , 0.09 , 0.082 );

        baseEcografo.add(posterioreRuotaEcografo1);
        baseEcografo.add(posterioreRuotaEcografo2);
        baseEcografo.add(copriGrataEcografo2a);
        baseEcografo.add(copriGrataEcografo2b);
        baseEcografo.add(posterioreEcografo3);
        baseEcografo.add(grataVentola);
        baseEcografo.add(posterioreEcografo2);
        baseEcografo.add(posterioreEcografo1);
        centroEcografo.add(coperturaCentro);
        baseEcografo.add(centroEcografo);
        baseEcografo.add(ruota1);
        baseEcografo.add(ruota2);
        baseEcografo.add(ruota3);
        baseEcografo.add(ruota4);


        return baseEcografo;
      };



      function creaGrataVentola(){
        var geometriaOmbra = new THREE.CylinderGeometry( 0.11 , 0.11 , 0.06 , Math.round(dettaglio*32) );
        var geometriaBase = new THREE.CylinderGeometry( 0.11 , 0.11 , 0.02 , Math.round(dettaglio*32) );
        var geometriaTaglio = new THREE.CylinderGeometry( 0.1101 , 0.1101 , 0.001 , Math.round(dettaglio*32) );

        var base = new THREE.Mesh( geometriaBase , grigioScuro );
        var ombra = new THREE.Mesh( geometriaOmbra , nero );
        ombra.position.y = 0.03 + 0.01; 
        for( var i = 1; i < 13 ; i++ ){
          var taglio = new THREE.Mesh( geometriaTaglio , grigioScuro );
          taglio.position.y = 0.005 + i *0.005 + 0.005;
          base.add(taglio);

        };
        base.add(ombra);

        return base;
      };

      function creaRuota(){

        var geometriaInternoRuota = new THREE.CylinderGeometry( 0.045 , 0.045 , 0.015 , Math.round(dettaglio*32) );
        var geometriaEsternoRuota = new THREE.TorusGeometry( 0.045 , 0.0075 , Math.round(dettaglio*32), Math.round(dettaglio*64) );
        var geometriaRuotaParteInterna = new THREE.CylinderGeometry( 0.047 , 0.047 , 0.025 , Math.round(dettaglio*32) );
        var geometriaPernoRuota = new THREE.CylinderGeometry( 0.02 , 0.02 , 0.07 , Math.round(dettaglio*32) );
        var geometriaCopriPerno = new THREE.CircleGeometry( 0.02 , Math.round(dettaglio*32) );
        var geometriaPernoRuotaSuperiore = new THREE.CylinderGeometry( 0.015 , 0.025 , 0.015 , Math.round(dettaglio*32) );
        var geometriaCopriPernoRuotaSuperiore = new THREE.CylinderGeometry( 0.027 , 0.027 , 0.0025 , Math.round(dettaglio*32) );


        var ruota = new THREE.Object3D();
        var ruotaParteEsterna1 = new THREE.Object3D();
        var ruotaParteEsterna2 = new THREE.Object3D();

        var copriPernoRuotaSuperiore = new THREE.Mesh( geometriaCopriPernoRuotaSuperiore , grigioScuro );

        var pernoRuotaSuperiore = new THREE.Mesh( geometriaPernoRuotaSuperiore , nero );

        var copriPerno = new THREE.Mesh( geometriaCopriPerno , nero );

        var pernoRuota = new THREE.Mesh( geometriaPernoRuota , grigioChiaro );

        var ruotaParteInterna = new THREE.Mesh( geometriaRuotaParteInterna , grigioChiaro );

        var internoRuota1 = new THREE.Mesh( geometriaInternoRuota , grigioChiaro );
        var esternoRuota1 = new THREE.Mesh( geometriaEsternoRuota , nero );

        var internoRuota2 = new THREE.Mesh( geometriaInternoRuota , grigioChiaro );
        var esternoRuota2 = new THREE.Mesh( geometriaEsternoRuota , nero );

        copriPernoRuotaSuperiore.position.y = -0.015/2;

        pernoRuotaSuperiore.rotation.x = Math.PI/2;
        pernoRuotaSuperiore.position.z = -0.015/2;

        copriPerno.rotation.x = Math.PI/2;
        copriPerno.position.y = 0.03;

        ruotaParteInterna.position.set( 0.005 , 0 , 0.005 );

        pernoRuota.rotation.x = Math.PI/2;
        pernoRuota.position.set( -0.02  , 0 , 0.03 );

        esternoRuota1.rotation.x = Math.PI/2;
        esternoRuota2.rotation.x = Math.PI/2;

        ruotaParteEsterna1.position.y = 0.015 + 0.005/2;
        ruotaParteEsterna2.position.y = -0.015 - 0.005/2;

        ruota.rotation.x = -Math.PI/2;
        // ruota.position.y = 0.05;

        pernoRuotaSuperiore.add( copriPernoRuotaSuperiore );

        copriPerno.add( pernoRuotaSuperiore );

        pernoRuota.add( copriPerno );

        ruota.add( pernoRuota );

        ruota.add( ruotaParteInterna );

        ruotaParteEsterna2.add( esternoRuota2 );
        ruotaParteEsterna2.add( internoRuota2 );
        ruota.add( ruotaParteEsterna2 );

        ruotaParteEsterna1.add( esternoRuota1 );
        ruotaParteEsterna1.add( internoRuota1 );
        ruota.add( ruotaParteEsterna1 );

        return ruota;
      };

	ecografo.name = this.id;
	ecografo.feature = this;
	var model = Feature.packageModel(ecografo);
	return model;
};

module.exports = Ecografo;

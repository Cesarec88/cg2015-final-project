     
var Feature = require('./Feature.js');

Feature.inherits(Tac, Feature);

function Tac(feature) {
  Feature.call(this, feature);
}

Tac.prototype.style = {
                prefix: "fa",
                icon: "flask",
                zIndex: 3
            };

Tac.prototype.in_graph = true;

Tac.prototype.in_2D_map = true;

Tac.prototype.get3DModel = function() {


      var grigio = new THREE.MeshLambertMaterial({color : 0x808080});
      var grigioChiaro = new THREE.MeshLambertMaterial({color : 0xD3D3D3});
      var celesteMetallo = new THREE.MeshLambertMaterial({color : 0xB0C4DE});
      var bianco = new THREE.MeshLambertMaterial({color : 0xFFFFFF});
      var nero = new THREE.MeshLambertMaterial({color : 0x000000});
      var mocassino = new THREE.MeshLambertMaterial({color : 0xFFE4B5});
      var biancoOpaco = new THREE.MeshLambertMaterial({color : 0xF0FFF0});
      var avorio = new THREE.MeshLambertMaterial({color : 0xFFFFF0});
      var rossoScuro = new THREE.MeshLambertMaterial({color : 0x800000});
      var rosso = new THREE.MeshLambertMaterial({color : 0xFF0000});
      var gialloOro = new THREE.MeshLambertMaterial({color : 0xffd700});
      var dettaglio = 1;

      var tac = new THREE.Object3D();


      var macchinario = creaMacchinaio();
      macchinario.scale.z =1.5;
      macchinario.position.set(  0 , 0 , -3.5 );

      var lettinoTac = creaLettinoTac();

      tac.add(lettinoTac);
      tac.add(macchinario);




      function creaLettinoTac(){
        var letto = new THREE.Object3D();
        var geometriaBaseLetto = new THREE.BoxGeometry( 0.54 , 0.04 , 1.4 );
        var geometriaBaseLetto2 = new THREE.BoxGeometry( 0.54 , 0.21 , 1.4 );
        var geometriaBaseLetto3 = new THREE.BoxGeometry( 0.56 , 0.23 , 1.42 );
        var geometriaBaseLetto4 = new THREE.BoxGeometry( 0.6 , 0.23 , 1.45 );
        var geometriaBaseLetto5 = new THREE.BoxGeometry( 0.61 , 0.18 , 1.46 );
        var geometriaBaseLetto6 = new THREE.BoxGeometry( 0.62 , 0.23 , 2.5 );
        var geometriaLettino = new THREE.BoxGeometry( 0.62 , 0.015 , 2.5 );
        var geometriaLettino1 = new THREE.BoxGeometry( 0.53 , 0.015 , 2. );
        var geometriaLettino2 = new THREE.BoxGeometry( 0.53001 , 0.015 , 2.0001 );
        var geometriaFineLettino1 = new THREE.BoxGeometry( 0.5301 , 0.015 , 0.05 );
        var geometriaFineLettino2 = new THREE.BoxGeometry( 0.53001 , 0.015 , 0.050001 );
        var geometriaFineLettino3 = new THREE.CylinderGeometry( 0.013 , 0.013 , 0.53 , Math.round(dettaglio*32) );  
        var geometriaFineLettino4 = new THREE.CylinderGeometry( 0.03/2 , 0.03/2 , 0.52999999999999999 , Math.round(dettaglio*32) );  
        var geometriaBordoBase6 = new THREE.CylinderGeometry( 0.015 , 0.015 , 2.5 , Math.round(dettaglio*32) );
        var geometriaBordoLettinoA = new THREE.CylinderGeometry( 0.02 , 0.02 , 2.5 , Math.round(dettaglio*32) );
        var geometriaBordoLettinoB = new THREE.CylinderGeometry( 0.021 , 0.021 , 2.5001 , Math.round(dettaglio*32) );
        var geometriaBinariLettino = new THREE.CylinderGeometry( 0.01 , 0.01 , 2.5, Math.round(dettaglio*32) );
        var geometriaPulsante2 = new THREE.CylinderGeometry( 0.005 , 0.005 , 0.015 , Math.round(dettaglio*32) );
        var geometriaPulsante = new THREE.CylinderGeometry( 0.01 , 0.01 , 0.015 , Math.round(dettaglio*32) );
        var geometriaComandi = new THREE.BoxGeometry( 0.2 , 0.2 , 0.3 );

        var comandi = new THREE.Mesh( geometriaComandi , avorio );
        var binario1 = new THREE.Mesh( geometriaBinariLettino , bianco );
        var binario2 = new THREE.Mesh( geometriaBinariLettino , bianco );
        var baseLetto = new THREE.Mesh( geometriaBaseLetto , grigio );
        var baseLetto2 = new THREE.Mesh( geometriaBaseLetto2 , avorio );
        var baseLetto3 = new THREE.Mesh( geometriaBaseLetto3 , avorio );
        var baseLetto4 = new THREE.Mesh( geometriaBaseLetto4 , avorio );
        var baseLetto5 = new THREE.Mesh( geometriaBaseLetto5 , avorio );
        var baseLetto6 = new THREE.Mesh( geometriaBaseLetto6 , avorio );
        var bordobase6a = new THREE.Mesh( geometriaBordoBase6 , avorio );
        var bordobase6b = new THREE.Mesh( geometriaBordoBase6 , avorio );
        var bordoLettinoA = new THREE.Mesh( geometriaBordoLettinoA , avorio );
        var bordoLettinoB = new THREE.Mesh( geometriaBordoLettinoA , avorio );
        var lettino = new THREE.Mesh( geometriaLettino , bianco );
        var lettino1 = new THREE.Mesh( geometriaLettino1 , bianco );
        var lettino2 = new THREE.Mesh( geometriaLettino2 , mocassino );
        var fineLettino1 = new THREE.Mesh( geometriaFineLettino1 , bianco );
        var fineLettino2 = new THREE.Mesh( geometriaFineLettino2 , mocassino );
        var fineLettino3 = new THREE.Mesh( geometriaFineLettino3 , bianco );
        var fineLettino4 = new THREE.Mesh( geometriaFineLettino4 , mocassino );
        var fineLettino5 = new THREE.Mesh( geometriaFineLettino4 , mocassino );
        var bordoLettinoC = new THREE.Mesh( geometriaBordoLettinoB , bianco );
        var bordoLettinoD = new THREE.Mesh( geometriaBordoLettinoB , bianco );
        var pulsante = new THREE.Mesh( geometriaPulsante , rossoScuro );
        var pulsante2 = new THREE.Mesh( geometriaPulsante2 , nero );


      baseLetto.position.set( 0 ,  -1.3   -0.36/2 -0.02 , 0 );
      baseLetto2.position.y = 0.21/2 + 0.02;
      baseLetto3.position.y = 0.23/2 + 0.21/2;
      baseLetto4.position.y = 0.23;
      baseLetto5.position.y = 0.23/2 + 0.18/2;
      baseLetto6.position.y = 0.23/2 +0.18/2;
      bordobase6a.rotation.x = Math.PI/2;
      bordobase6b.rotation.x = Math.PI/2;
      bordobase6a.position.set( -0.31 , -0.23/2 , 0 );
      bordobase6b.position.set( 0.31 , -0.23/2 , 0 );
      bordoLettinoA.rotation.x = Math.PI/2;
      bordoLettinoB.rotation.x = Math.PI/2;
      bordoLettinoA.position.set( -0.313 +0.02 , 0.24/2 , 0 );
      bordoLettinoB.position.set( 0.313 -0.02 , 0.24/2 , 0 );
      bordoLettinoC.rotation.x = Math.PI/2;
      bordoLettinoD.rotation.x = Math.PI/2;
      bordoLettinoC.position.set( -0.312 +0.02 , 0.02/2 , 0 );
      bordoLettinoD.position.set( 0.312 -0.02 , 0.02/2 , 0 );
      lettino.position.y = 0.23/2 +0.015/2;
      lettino1.position.set( 0 , 0.03 , 0.2 );
      lettino2.position.set( 0 , 0.015 , 0 );
      fineLettino1.position.set( 0 , 0.0158 , 1.01 );
      fineLettino1.rotation.x = Math.PI*-40/180;
      fineLettino2.position.y = 0.015;
      fineLettino3.rotation.z = Math.PI/2;
      fineLettino4.rotation.z = Math.PI/2;
      fineLettino5.rotation.z = Math.PI/2;
      fineLettino3.position.z = -0.04/2;
      fineLettino4.position.set( 0 , 0.007 , 0.05/2  );
      fineLettino5.position.z = -1;
      fineLettino5.position.y = 0.007;
      binario1.rotation.x = Math.PI/2;
      binario2.rotation.x = Math.PI/2;
      binario1.position.x = 0.17;
      binario2.position.x = -0.17;
      comandi.position.set( -0.2 , -0.24/2 , -2/2 )
      pulsante.rotation.z = Math.PI/2;
      pulsante.position.set( -0.0951 , -0.05 , - 0.1 );
      pulsante2.rotation.z = Math.PI/2;
      pulsante2.position.set( -0.0951 , -0.05 , - 0.07 );


        comandi.add(pulsante2);
        comandi.add(pulsante);
        baseLetto6.add(comandi);
        lettino.add(binario1);
        lettino.add(binario2);
        lettino1.add(fineLettino5);
        fineLettino1.add(fineLettino4)
        fineLettino1.add(fineLettino3)
        fineLettino1.add(fineLettino2);
        lettino1.add(fineLettino1);
        lettino1.add(lettino2);
        lettino.add(lettino1);
        lettino.add(bordoLettinoC);
        lettino.add(bordoLettinoD);
        baseLetto6.add(lettino)
        baseLetto6.add(bordoLettinoA);
        baseLetto6.add(bordoLettinoB);
        baseLetto6.add(bordobase6a)
        baseLetto6.add(bordobase6b)
        baseLetto5.add(baseLetto6);
        baseLetto4.add(baseLetto5);
        baseLetto3.add(baseLetto4);
        baseLetto2.add(baseLetto3);
        baseLetto.add(baseLetto2);
        letto.add(baseLetto);
        return letto;
      };

     function creaMacchinaio(){
      var macchinario = new THREE.Object3D();
      var geometriaEsterno = new THREE.TorusGeometry( 1 , 0.5 , Math.round(dettaglio*32) ,Math.round(dettaglio*64) );
      var geometriaInterno = new THREE.TorusGeometry( 0.9 , 0.5 , Math.round(dettaglio*32) ,Math.round(dettaglio*64) );
      var geomteriaRicoprimentoEsterno = new THREE.CylinderGeometry( 1.5 , 1.5 , 1 ,  Math.round(dettaglio*32) , 1,1);
      var geomteriaRicoprimentoInterno = new THREE.CylinderGeometry( 0.4 , 0.4 , 1 ,  Math.round(dettaglio*32) , 1,1);
      var geomteriaBase = new THREE.BoxGeometry( 1.5 , 0.36 , 1.8 );
      var geomteriaBase2 = new THREE.BoxGeometry( 1.5 , 0.04, 1.8 );
      var geomteriaParteSuperiore = new THREE.BoxGeometry( 0.8 , 0.5, 1.4 );
      var geometriaBinario = new THREE.BoxGeometry( 1 , 0.2 , 1.6 );
      var geometriaBordoBinario = new THREE.CylinderGeometry( 0.1 , 0.1 , 1 ,  Math.round(dettaglio*32) );
      var geometriaBordoBinario2 = new THREE.CylinderGeometry( 0.02 , 0.02 , 1.6 ,  Math.round(dettaglio*32) );
      var geometriaSecondaPulsantiera = new THREE.BoxGeometry( 0.5 , 0.4 , 0.02 );
      var geometriaPulsante2 = new THREE.CylinderGeometry( 0.01 , 0.01 , 0.036 , Math.round(dettaglio*32) );
      var geometriaPulsante = new THREE.CylinderGeometry( 0.02 , 0.02 , 0.04 , Math.round(dettaglio*32) );
      var geometriaPulsante3 = new THREE.CylinderGeometry( 0.08 , 0.08 , 0.04 , Math.round(dettaglio*32) );
      var geometriaSottoPulsante3 = new THREE.CylinderGeometry( 0.08 , 0.16 , 0.035 , Math.round(dettaglio*32) );
      var geometriaCornicePulsantiera = new THREE.CylinderGeometry( 0.03 , 0.03 , 0.4 , Math.round(dettaglio*32) );
      var geometriaCornicePulsantiera2 = new THREE.CylinderGeometry( 0.03 , 0.03 , 0.5 , Math.round(dettaglio*32) );

      var ricoprimentoEsterno = new THREE.Mesh( geomteriaRicoprimentoEsterno , avorio );
      var ricoprimentoInterno = new THREE.Mesh( geomteriaRicoprimentoInterno , avorio );
      var base = new THREE.Mesh( geomteriaBase , avorio );
      var base2 = new THREE.Mesh( geomteriaBase2 , grigio );
      var parteSuperiore = new THREE.Mesh( geomteriaParteSuperiore , avorio );
      var binario1 = new THREE.Mesh( geometriaBinario , bianco );
      var bordoBinario = new THREE.Mesh( geometriaBordoBinario , bianco );
      var bordoBinario1 = new THREE.Mesh( geometriaBordoBinario , bianco );
      var bordoBinario2a = new THREE.Mesh( geometriaBordoBinario2 , bianco );
      var bordoBinario2b = new THREE.Mesh( geometriaBordoBinario2 , bianco );
      var secondaPulsantiera = new THREE.Mesh( geometriaSecondaPulsantiera , avorio );
      var pulsante = new THREE.Mesh( geometriaPulsante , celesteMetallo );
      var pulsante2 = new THREE.Mesh( geometriaPulsante , celesteMetallo );
      var pulsante3 = new THREE.Mesh( geometriaPulsante2 , celesteMetallo );
      var pulsante4 = new THREE.Mesh( geometriaPulsante3 , rosso );
      var sottoPulsante4 = new THREE.Mesh( geometriaSottoPulsante3 , gialloOro );
      var cornice1 = new THREE.Mesh( geometriaCornicePulsantiera , avorio  );
      var cornice2 = new THREE.Mesh( geometriaCornicePulsantiera , avorio  );
      var cornice3 = new THREE.Mesh( geometriaCornicePulsantiera2 , avorio  );
      var cornice4 = new THREE.Mesh( geometriaCornicePulsantiera2 , avorio  );


      secondaPulsantiera.position.set( -0.9 , 0.1 , 0.5);

      bordoBinario2a.rotation.x = Math.PI/2;
      bordoBinario2a.position.set( 0.223 , 0.11 , 0 );

      bordoBinario2b.rotation.x = Math.PI/2;
      bordoBinario2b.position.set( -0.223 , 0.11 , 0 );

      bordoBinario.rotation.z = Math.PI/2;
      bordoBinario.position.set( 0 , 0.015 , 0.75 ) ;
      binario1.add(bordoBinario);

      bordoBinario1.rotation.z = Math.PI/2;
      bordoBinario1.position.set( 0 , 0.015 , -0.75 ) ;
      binario1.add(bordoBinario1);

      binario1.position.set( 0 , -0.45 , 0.5 );

      ricoprimentoEsterno.position.z = 0.5;
      ricoprimentoInterno.position.z = 0.5;
      ricoprimentoInterno.material.side = THREE.DoubleSide;

      ricoprimentoEsterno.rotation.x = Math.PI/2;
      ricoprimentoInterno.rotation.x = Math.PI/2;

      base.position.set( 0 , -1.3 , 0.5 );
      base2.position.y = -0.36/2 -0.02 ;

      parteSuperiore.position.set ( 0 , 1.5 , 0.5 )

      pulsante.rotation.x = Math.PI/2;
      pulsante.position.set( 0.09 , 0.08 , 0 );

      pulsante2.rotation.x = Math.PI/2;
      pulsante2.position.set( 0.09 , 0.03 , 0 );

      pulsante3.rotation.x = Math.PI/2;
      pulsante3.position.set( 0.09 , -0.03 , 0 );

      pulsante4.rotation.x = Math.PI/2;
      pulsante4.position.set( -0.06 , 0.02 , 0 );

      sottoPulsante4.rotation.x = Math.PI/2;
      sottoPulsante4.position.set( -0.06 , 0.02 , 0 );

      cornice1.position.x = 0.5/2;
      cornice2.position.x = -0.5/2;
      cornice3.rotation.z = Math.PI/2;
      cornice3.position.y = 0.17;
      cornice4.rotation.z = Math.PI/2;
      cornice4.position.y = -0.17;

      var esterno1 = new THREE.Mesh( geometriaEsterno , avorio );
      var esterno2 = new THREE.Mesh( geometriaEsterno , avorio );
      var interno1 = new THREE.Mesh( geometriaInterno , mocassino );
      var interno2 = new THREE.Mesh( geometriaInterno , avorio );

      esterno1.position.set( 0 , 0 , 0 );
      esterno2.position.set( 0 , 0 , 1 );
      interno1.position.set( 0 , 0 , 1 );
      interno2.position.set( 0 , 0 , 0 );
      
      binario1.add(bordoBinario2a);
      binario1.add(bordoBinario2b);

      secondaPulsantiera.add(pulsante);
      secondaPulsantiera.add(pulsante2);
      secondaPulsantiera.add(pulsante3);
      secondaPulsantiera.add(pulsante4);
      secondaPulsantiera.add(cornice4);
      secondaPulsantiera.add(cornice3);
      secondaPulsantiera.add(cornice2);
      secondaPulsantiera.add(cornice1);
      secondaPulsantiera.add(sottoPulsante4);
      macchinario.add(interno1);
      macchinario.add(interno2);
      macchinario.add(esterno1);
      macchinario.add(esterno2);
      esterno2.add(secondaPulsantiera)
      macchinario.add(binario1);
      macchinario.add(parteSuperiore);
      base.add(base2);
      macchinario.add(base);
      macchinario.add(ricoprimentoEsterno);
      macchinario.add(ricoprimentoInterno);        


      return macchinario;
      };
  tac.name = this.id;
  tac.feature = this;
  var model = Feature.packageModel(tac);
  return model;
};

module.exports = Tac;


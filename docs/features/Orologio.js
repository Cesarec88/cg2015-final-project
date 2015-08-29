var Feature = require('./Feature.js');

Feature.inherits(Orologio, Feature);

function Orologio(feature) {
    Feature.call(this, feature);
}

Orologio.prototype.style = {
                            prefix: "fa",
                            icon: "medkit",
                            zIndex: 3
                        };

Orologio.prototype.in_graph = true;

Orologio.prototype.in_2D_map = false;

Orologio.prototype.get3DModel = function() {
	 //colors
      var grigio = new THREE.MeshLambertMaterial({color : 0x808080});
      var bianco = new THREE.MeshLambertMaterial({color : 0xFFFFFF});
      var nero = new THREE.MeshLambertMaterial({color : 0x000000});
      var turchese = new THREE.MeshLambertMaterial({color : 0x43C6DB,opacity :0.3,transparent: true});

      //create a fake object
      var dettaglio = 1; 
      var orologio = creaOroglogio();
      orologio.position.y =0.1;

      function creaOroglogio () {
        var orologio = new THREE.Object3D();
        var geometriaBase = new THREE.CylinderGeometry(0.15,0.15,0.02,Math.round(dettaglio*64),Math.round(dettaglio*32));
        var geometriaCopriLancette = new  THREE.CylinderGeometry(0.13,0.15,0.005,Math.round(dettaglio*64),Math.round(Math.round(dettaglio*32)*32));
        var geometriaMinuto = new THREE.BoxGeometry(0.01,0.001,0.01);
        var geometriaOra = new THREE.BoxGeometry(0.015,0.0015,0.019);
        var geometriaLancettaOre = new THREE.CylinderGeometry(0.004,0.004,0.09,Math.round(Math.round(dettaglio*32)*32),Math.round(dettaglio*32));
        var geometriaLancettaMinuti = new THREE.BoxGeometry(0.1,0.0025,0.005);
        var geometriaChiodo = new THREE.CylinderGeometry(0.01,0.01,0.005,Math.round(dettaglio*32),Math.round(dettaglio*32));
        var geometriaChiodo1 = new THREE.CylinderGeometry(0.005,0.005,0.0025,Math.round(dettaglio*32),Math.round(dettaglio*32));
        var base = new THREE.Mesh( geometriaBase, bianco);
        var copriLancette = new THREE.Mesh( geometriaCopriLancette, turchese);
        var lancettaMinuti = new THREE.Mesh( geometriaLancettaMinuti, nero);
        var lancettaOre = new THREE.Mesh( geometriaLancettaOre, nero);
        var chiodo = new THREE.Mesh( geometriaChiodo, grigio);
        var chiodo1 = new THREE.Mesh( geometriaChiodo1, bianco);
        copriLancette.position.y =0.02/2 + 0.005/2;
        lancettaOre.rotation.z =Math.PI/2;
        lancettaOre.rotation.y =2*Math.PI*15/360;
        lancettaOre.scale.x =0.1; 
        lancettaMinuti.rotation.y =2*Math.PI*45/360;
        chiodo.position.y =0.02/2;
        chiodo1.position.y =0.01/4;
        var lancettaOre1 = new THREE.Object3D();
        var lancettaMinuti1 = new THREE.Object3D();
        lancettaMinuti1.add(lancettaMinuti);
        lancettaOre1.add(lancettaOre);
        lancettaOre1.position.set(-0.09/2*Math.cos(lancettaOre.rotation.y),0.01,0.09/2*Math.sin(lancettaOre.rotation.y));
        lancettaMinuti1.position.set(-0.05*Math.cos(lancettaMinuti.rotation.y),0.01,0.05*Math.sin(lancettaMinuti.rotation.y));
      for (var i = 0; i < 60; i++) {
          var minuto = new THREE.Mesh( geometriaMinuto, nero);
          minuto.rotation.y= 2*Math.PI*i/60;
          minuto.position.set(0.14*Math.sin(minuto.rotation.y),0.01,0.14*Math.cos(minuto.rotation.y));
          base.add(minuto);
        };
      for (var i = 0; i < 12; i++) {
          var ora = new THREE.Mesh( geometriaOra, nero);
          ora.rotation.y= 2*Math.PI*i/12;
          ora.position.set(0.14*Math.sin(ora.rotation.y),0.01,0.14*Math.cos(ora.rotation.y));
          base.add(ora);
        };
        var geometriaMezzoGiorno = new THREE.BoxGeometry(0.015,0.0015,0.017);
        var mezzogiorno = new THREE.Mesh( geometriaMezzoGiorno, nero);
        mezzogiorno.position.set(-0.125,0.01,0);
        mezzogiorno.rotation.y =Math.PI/2;
        base.add(mezzogiorno);
        base.add(lancettaOre1);
        base.add(lancettaMinuti1);
        base.add(copriLancette);
        base.add(chiodo);
        chiodo.add(chiodo1);
        orologio.add(base);
        return orologio;
      }


    orologio.name = this.id;
    orologio.feature = this;
    var model = Feature.packageModel(orologio);
    return model;
};

module.exports = Orologio;
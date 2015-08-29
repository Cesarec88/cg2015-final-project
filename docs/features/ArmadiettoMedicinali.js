var Feature = require('./Feature.js');

Feature.inherits(ArmadiettoMedicinali, Feature);

function ArmadiettoMedicinali(feature) {
    Feature.call(this, feature);
}

ArmadiettoMedicinali.prototype.style = {
                            prefix: "fa",
                            icon: "medkit",
                            zIndex: 3
                        };

ArmadiettoMedicinali.prototype.in_graph = true;

ArmadiettoMedicinali.prototype.in_2D_map = true;

ArmadiettoMedicinali.prototype.get3DModel = function() {

      //colors
      var bianco = new THREE.MeshLambertMaterial({color : 0xFFFFFF});
      var turchese = new THREE.MeshLambertMaterial({color : 0x43C6DB,opacity :0.7,transparent: true});
      var rosso = new THREE.MeshLambertMaterial({color : 0xFF0000});
      var grigio = new THREE.MeshLambertMaterial({color : 0x808080});

      //misure 
      var altezzaMensola = 0.01;
      var larghezzaMensola = 0.4;
      var lunghezzaMensola = 0.2;
      var altezzaArmadietto = 0.52;



      var armadiettoMedicinali = creaArmadiettoMedicinali();
      var dettaglio = 1;
      armadiettoMedicinali.scale.set(1.5,1.5,1.5);
       


      function creaArmadiettoMedicinali () {
            var armadietto = new THREE.Object3D();
            var baseEMensole = creaBaseEMensole();
            var croce = creaCroce();
            var cardine1 = creaCardine();
            var cardine2 = creaCardine();
            var maniglia = creaManiglia();
            var geometriaPareteLaterale = new THREE.BoxGeometry(altezzaMensola,altezzaArmadietto,lunghezzaMensola);
            var geometriaParetePosteriore = new THREE.BoxGeometry(larghezzaMensola,altezzaArmadietto,altezzaMensola);
            var geometriaAperturaArmadietto = new THREE.BoxGeometry(larghezzaMensola-altezzaMensola,altezzaArmadietto,altezzaMensola);
            var pareteLateraleDx = new THREE.Mesh( geometriaPareteLaterale, bianco);
            var pareteLateraleSn = new THREE.Mesh( geometriaPareteLaterale, bianco);
            var paretePosteriore = new THREE.Mesh( geometriaParetePosteriore, bianco);
            var aperturaArmadietto = new THREE.Mesh( geometriaAperturaArmadietto, turchese);
            maniglia.position.set(larghezzaMensola/2-altezzaMensola*3,0,0.015);
            cardine1.position.set(-larghezzaMensola/2+altezzaMensola/2,0.2,0.002);
            cardine2.position.set(-larghezzaMensola/2+altezzaMensola/2,-0.2,0.002);
            aperturaArmadietto.position.set(0,altezzaArmadietto/2,lunghezzaMensola/2);
            pareteLateraleDx.position.set(-larghezzaMensola/2+altezzaMensola/2,altezzaArmadietto/2,0);
            pareteLateraleSn.position.set(larghezzaMensola/2-altezzaMensola/2,altezzaArmadietto/2,0);
            paretePosteriore.position.set(0,altezzaArmadietto/2,altezzaMensola/2-lunghezzaMensola/2);
            croce.position.set(0,0.1,altezzaMensola/2);
            aperturaArmadietto.add(maniglia);
            aperturaArmadietto.add(cardine1);
            aperturaArmadietto.add(cardine2);
            aperturaArmadietto.add(croce);
            armadietto.add(aperturaArmadietto);
            armadietto.add(pareteLateraleDx);
            armadietto.add(pareteLateraleSn);
            armadietto.add(paretePosteriore);
            armadietto.add(baseEMensole);
            return armadietto;
      }

      function creaBaseEMensole () {
            var geometria = new THREE.BoxGeometry(larghezzaMensola,altezzaMensola,lunghezzaMensola);
            var base = new THREE.Object3D();
            for (var i = 0; i <5; i++) {
                  var mensola = new THREE.Mesh( geometria, bianco);
                  mensola.position.y =0.13*i;
                  base.add(mensola);
                  
            };
            return base;
      }

      function creaCroce () {
            var croce = new THREE.Object3D();
            var geometriaCroce1 = new THREE.BoxGeometry(0.17,0.07,altezzaMensola/3);
            var geometriaCroce2 = new THREE.BoxGeometry(0.07,0.17,altezzaMensola/3);
            var croce1 = new THREE.Mesh( geometriaCroce1, rosso);
            var croce2 = new THREE.Mesh( geometriaCroce2, rosso);
            croce.add(croce1);
            croce.add(croce2);
            return croce;
      }

      function creaCardine () {
            var cardine = new THREE.Object3D();
            var geometriaCilindro1 = new THREE.CylinderGeometry(0.005,0.005,0.03,Math.round(32*dettaglio));
            var geometriaCilindro2 = new THREE.CylinderGeometry(0.003,0.003,0.02,Math.round(32*dettaglio));
            var cilindro1 = new THREE.Mesh( geometriaCilindro1, bianco);
            var cilindro2 = new THREE.Mesh( geometriaCilindro2, bianco);
            cilindro2.position.y =-0.03/2-0.01/1;
            cardine.add(cilindro1);
            cilindro1.add(cilindro2);
            return cardine;
      }

      function creaManiglia () {
            var maniglia = new THREE.Object3D();
            var geometria = new THREE.CylinderGeometry(0.005,0.005,0.13,Math.round(32*dettaglio));
            var geometriaReggiManiglia = new THREE.CylinderGeometry(0.002,0.002,0.01,Math.round(32*dettaglio));
            var reggiManiglia1 = new THREE.Mesh( geometriaReggiManiglia, grigio);
            var reggiManiglia2 = new THREE.Mesh( geometriaReggiManiglia, grigio);
            var manico = new THREE.Mesh( geometria, bianco);
            reggiManiglia1.rotation.x =Math.PI/2;
            reggiManiglia2.rotation.x =Math.PI/2;
            reggiManiglia1.position.set(0,0.05,-0.007);
            reggiManiglia2.position.set(0,-0.05,-0.007);
            manico.add(reggiManiglia1);
            manico.add(reggiManiglia2);
            maniglia.add(manico);
            return maniglia;
      }




    armadiettoMedicinali.name = this.id;
    armadiettoMedicinali.feature = this;
    var model = Feature.packageModel(armadiettoMedicinali);
    return model;
};

module.exports = ArmadiettoMedicinali;

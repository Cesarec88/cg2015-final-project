var Feature = require('./Feature.js');

Feature.inherits(Lavabo, Feature);

function Lavabo(feature) {
    Feature.call(this, feature);
}

Lavabo.prototype.style = {
                            prefix: "fa",
                            icon: "medkit",
                            zIndex: 3
                        };

Lavabo.prototype.in_graph = true;

Lavabo.prototype.in_2D_map = false;

Lavabo.prototype.get3DModel = function() {



      var grigio = new THREE.MeshLambertMaterial({color : 0x808080});
      var grigioChiaro = new THREE.MeshLambertMaterial({color : 0xD3D3D3});
      var celesteMetallo = new THREE.MeshLambertMaterial({color : 0xB0C4DE});
      var bianco = new THREE.MeshLambertMaterial({color : 0xFFFFFF});
      var nero = new THREE.MeshLambertMaterial({color : 0x000000});
      var rosso = new THREE.MeshLambertMaterial({color : 0xFF0000});
      var blue = new THREE.MeshLambertMaterial({color : 0x0000FF});


      //create a fake object
      var lavabo = new THREE.Object3D();
      var dettaglio = 1;

      var lavello = creaLavello();
      var sifone = creaSifone();
      lavello.position.y = 1.1;
      lavello.add(sifone);
      lavabo.add(lavello);

      function creaSifone () {
        var tubo = new THREE.Object3D();
        var geomtriaPrimoScarico = new THREE.CylinderGeometry(0.025,0.025,0.25,Math.round(dettaglio*32),Math.round(dettaglio*32));
        var geomtriaPrimoScarico2 = new THREE.CylinderGeometry(0.04,0.04,0.15,Math.round(dettaglio*32),Math.round(dettaglio*32));
        var geomtriaPrimoScarico3 = new THREE.CylinderGeometry(0.045,0.045,0.01,Math.round(dettaglio*32),Math.round(dettaglio*32));
        var geomtriaPrimoScarico4 = new THREE.CylinderGeometry(0.025,0.025,0.23,Math.round(dettaglio*32),Math.round(dettaglio*32));
        var geomtriaPrimoScarico5 = new THREE.CylinderGeometry(0.04,0.06,0.05,Math.round(dettaglio*32),Math.round(dettaglio*32));
        var geomtriaPrimoScarico6 = new THREE.CylinderGeometry(0.06,0.06,0.02,Math.round(dettaglio*32),Math.round(dettaglio*32));
        var primoScarico = new THREE.Mesh(geomtriaPrimoScarico,grigio);
        var primoScarico2 = new THREE.Mesh(geomtriaPrimoScarico2,grigio);
        var primoScarico3 = new THREE.Mesh(geomtriaPrimoScarico3,grigio);
        var primoScarico4 = new THREE.Mesh(geomtriaPrimoScarico4,grigio);
        var primoScarico5 = new THREE.Mesh(geomtriaPrimoScarico5,grigio);
        var primoScarico6 = new THREE.Mesh(geomtriaPrimoScarico6,grigio);
        primoScarico6.position.y =-0.025 -0.01;
        primoScarico5.position.y =-0.18/2;
        primoScarico.position.y =-0.25/2 -0.02;
        primoScarico2.position.y =-0.25/2 -0.15/2;
        primoScarico4.rotation.x = Math.PI/2;
        primoScarico4.position.set(0,0.045,-0.23/2);
        primoScarico5.add(primoScarico6)
        primoScarico4.add(primoScarico5)
        primoScarico2.add(primoScarico4)
        primoScarico2.add(primoScarico3)
        primoScarico.add(primoScarico2);
        tubo.add(primoScarico);
        return tubo;
      }

      function creaLavello () {
        var lavello = new THREE.Object3D();
        var geometriaBase = new THREE.BoxGeometry(0.54,0.04,0.43);
        var geometriaPareteCorta = new THREE.BoxGeometry(0.03,0.21,0.43);
        var geometriaPareteLunga = new THREE.BoxGeometry(0.54,0.21,0.03);
        var geometriaPareteLunga2 = new THREE.BoxGeometry(0.54,0.21,0.1);
        var geometriaBordo = new THREE.CylinderGeometry(0.02,0.02,0.21,Math.round(dettaglio*32),Math.round(dettaglio*32));
        var geometriaBaseBordo = new THREE.CylinderGeometry(0.02,0.02,0.54,Math.round(dettaglio*32),Math.round(dettaglio*32));
        var geometriaBaseBordo1 = new THREE.CylinderGeometry(0.02,0.02,0.43,Math.round(dettaglio*32),Math.round(dettaglio*32));
        var geometriaBaseAngolo = new THREE.SphereGeometry(0.02,Math.round(dettaglio*32),Math.round(dettaglio*32));
        var geometriaScarico = new THREE.CylinderGeometry(0.025,0.025,0.03,Math.round(dettaglio*32),Math.round(dettaglio*32));
        var geometriaScarico2 = new THREE.TorusGeometry(0.025,0.022,Math.round(dettaglio*32),Math.round(dettaglio*64));
        var geometriaTroppoPieno = new THREE.CylinderGeometry(0.015,0.015,0.029,Math.round(dettaglio*32),Math.round(dettaglio*32));
        var geometriaTroppoPieno2 = new THREE.TorusGeometry(0.015,0.015,Math.round(dettaglio*32),Math.round(dettaglio*64));
        var geometriaRubinetto = new THREE.CylinderGeometry(0.03,0.03,0.04,Math.round(dettaglio*32),Math.round(dettaglio*32));
        var geometriaRubinetto2 = new THREE.CylinderGeometry(0.02,0.02,0.1,Math.round(dettaglio*32),Math.round(dettaglio*32));
        var geometriaRubinetto3 = new THREE.CylinderGeometry(0.01,0.02,0.04,Math.round(dettaglio*32),Math.round(dettaglio*32));
        var geometriaRubinetto4 = new THREE.SphereGeometry(0.015,Math.round(dettaglio*32),Math.round(dettaglio*32));
        var geometriaRubinetto5 = new THREE.CylinderGeometry(0.015,0.015,0.15,Math.round(dettaglio*32),Math.round(dettaglio*32));
        var geometriaRubinetto7 = new THREE.CylinderGeometry(0.015,0.015,0.03,Math.round(dettaglio*32),Math.round(dettaglio*32),true);
        var geometriaManopola = new THREE.CylinderGeometry(0.035,0.035,0.02,Math.round(dettaglio*32),Math.round(dettaglio*32));
        var geometriaManopola2 = new THREE.BoxGeometry(0.015,0.03,0.06);
        var geometriaManopola3 = new THREE.BoxGeometry(0.02,0.025,0.04);
        var base = new THREE.Mesh(geometriaBase,bianco);
        var baseBordoLunga1 = new THREE.Mesh(geometriaBaseBordo,bianco);
        var baseBordoLunga2 = new THREE.Mesh(geometriaBaseBordo,bianco);
        var baseBordoCorta1 = new THREE.Mesh(geometriaBaseBordo1,bianco);
        var baseBordoCorta2 = new THREE.Mesh(geometriaBaseBordo1,bianco);
        var angolo1 = new THREE.Mesh(geometriaBaseAngolo,bianco);
        var angolo2 = new THREE.Mesh(geometriaBaseAngolo,bianco);
        var angolo3 = new THREE.Mesh(geometriaBaseAngolo,bianco);
        var angolo4 = new THREE.Mesh(geometriaBaseAngolo,bianco);
        var pareteCorta1 = new THREE.Mesh(geometriaPareteCorta,bianco);
        var pareteCorta2 = new THREE.Mesh(geometriaPareteCorta,bianco);
        var pareteLunga1 = new THREE.Mesh(geometriaPareteLunga,bianco);
        var pareteLunga2 = new THREE.Mesh(geometriaPareteLunga2,bianco);
        var bordo1 = new THREE.Mesh(geometriaBordo,bianco);
        var bordo2 = new THREE.Mesh(geometriaBordo,bianco);
        var bordo3 = new THREE.Mesh(geometriaBordo,bianco);
        var bordo4 = new THREE.Mesh(geometriaBordo,bianco);
        var scarico = new THREE.Mesh(geometriaScarico,nero);
        var scarico2 = new THREE.Mesh(geometriaScarico2,grigio);
        var troppoPieno = new THREE.Mesh(geometriaTroppoPieno,nero);
        var troppoPieno2 = new THREE.Mesh(geometriaTroppoPieno2,grigio);
        var rubinetto = new THREE.Mesh(geometriaRubinetto,grigio);
        var rubinetto2 = new THREE.Mesh(geometriaRubinetto2,grigio);
        var rubinetto3 = new THREE.Mesh(geometriaRubinetto3,grigio);
        var rubinetto4 = new THREE.Mesh(geometriaRubinetto4,grigio);
        var rubinetto5 = new THREE.Mesh(geometriaRubinetto5,grigio);
        var rubinetto6 = new THREE.Mesh(geometriaRubinetto4,grigio);
        var rubinetto7 = new THREE.Mesh(geometriaRubinetto7,grigio);
        var manopolaBlue = new THREE.Mesh(geometriaManopola,grigio);
        var manopolaBlue2 = new THREE.Mesh(geometriaManopola2,grigio);
        var manopolaBlue3 = new THREE.Mesh(geometriaManopola3,blue);
        var manopolaRossa = new THREE.Mesh(geometriaManopola,grigio);
        var manopolaRossa2 = new THREE.Mesh(geometriaManopola2,grigio);
        var manopolaRossa3 = new THREE.Mesh(geometriaManopola3,rosso);
        rubinetto7.rotation.x =-Math.PI/2;
        rubinetto7.position.z = 0.015;
        rubinetto6.position.y = 0.15/2;
        rubinetto5.rotation.x = Math.PI/2;
        rubinetto5.position.z = 0.15/2;
        rubinetto4.position.y = 0.02;
        rubinetto3.position.y = 0.02 +0.05;
        rubinetto2.position.y = 0.02 +0.05;
        rubinetto.position.y = 0.105 +0.02;
        manopolaBlue.position.set(0.17,0.105 +0.01,0);
        manopolaRossa2.position.y = 0.02;
        manopolaRossa3.position.y = 0.02;
        manopolaBlue2.position.y = 0.02;
        manopolaBlue3.position.y = 0.02;
        manopolaRossa.position.set(-0.17,0.105 +0.01,0);
        bordo1.position.y = 0.105;
        bordo2.position.y = 0.105;
        bordo3.position.y = 0.105;
        bordo4.position.y = 0.105;
        troppoPieno.rotation.x =Math.PI/2;
        troppoPieno2.position.z =0.038;
        troppoPieno2.position.y =0.05;
        scarico2.rotation.x=Math.PI/2;
        scarico.position.y = 0.006;
        pareteLunga1.position.set(0,0.105,0.22);
        pareteLunga2.position.set(0,0.105,-0.185);
        pareteCorta1.position.set(0.54/2 +0.005,0.105,0);
        pareteCorta2.position.set(-0.54/2 -0.005,0.105,0);
        baseBordoLunga1.rotation.z = Math.PI/2;
        baseBordoLunga2.rotation.z = Math.PI/2;
        baseBordoLunga1.position.z = 0.215;
        baseBordoLunga2.position.z =-0.215;
        baseBordoCorta1.rotation.x = Math.PI/2;
        baseBordoCorta2.rotation.x = Math.PI/2;
        baseBordoCorta1.position.x = 0.27;
        baseBordoCorta2.position.x =-0.27;
        angolo1.rotation.z =-Math.PI/2;
        angolo2.rotation.z =-Math.PI/2;
        angolo3.rotation.z =-Math.PI/2;
        angolo4.rotation.z =-Math.PI/2;
        angolo1.position.y = 0.27;
        angolo3.position.y = 0.27;
        angolo2.position.y = -0.27;
        angolo4.position.y = -0.27;
        baseBordoLunga1.add(angolo1);
        baseBordoLunga1.add(angolo2);
        baseBordoLunga2.add(angolo3);
        baseBordoLunga2.add(angolo4);
        base.add(scarico);
        base.add(scarico2);
        troppoPieno2.add(troppoPieno);
        pareteLunga2.add(troppoPieno2);
        pareteLunga2.add(rubinetto);
        pareteLunga2.add(manopolaBlue);
        pareteLunga2.add(manopolaRossa);
        manopolaBlue.add(manopolaBlue2);
        manopolaBlue.add(manopolaBlue3);
        manopolaRossa.add(manopolaRossa2);
        manopolaRossa.add(manopolaRossa3);
        rubinetto.add(rubinetto2);
        rubinetto2.add(rubinetto3);
        rubinetto3.add(rubinetto4);
        rubinetto4.add(rubinetto5);
        rubinetto5.add(rubinetto6);
        rubinetto6.add(rubinetto7);
        base.add(baseBordoLunga1);
        base.add(baseBordoLunga2);
        base.add(baseBordoCorta1);
        base.add(baseBordoCorta2);
        base.add(pareteCorta1);
        base.add(pareteCorta2);
        base.add(pareteLunga1);
        base.add(pareteLunga2);
        angolo1.add(bordo1);
        angolo2.add(bordo2);
        angolo3.add(bordo3);
        angolo4.add(bordo4);
        lavello.add(base);
        return lavello;
      }


    lavabo.name = this.id;
    lavabo.feature = this;
    var model = Feature.packageModel(lavabo);
    return model;
};

module.exports = Lavabo;


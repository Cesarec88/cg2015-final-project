var Feature = require('./Feature.js');

Feature.inherits(SediaAccoglienzaDispari, Feature);

function SediaAccoglienzaDispari(feature) {
    Feature.call(this, feature);
}

SediaAccoglienzaDispari.prototype.style = {
                            prefix: "fa",
                            icon: "medkit",
                            zIndex: 3
                        };

SediaAccoglienzaDispari.prototype.in_graph = true;

SediaAccoglienzaDispari.prototype.in_2D_map = false;

SediaAccoglienzaDispari.prototype.get3DModel = function() {


      //colors
      var grigio = new THREE.MeshLambertMaterial({color : 0x808080});
      var grigioChiaro = new THREE.MeshLambertMaterial({color : 0xD3D3D3});
      var celesteMetallo = new THREE.MeshLambertMaterial({color : 0xB0C4DE});
      var bianco = new THREE.MeshLambertMaterial({color : 0xFFFFFF});
      var nero = new THREE.MeshLambertMaterial({color : 0x000000});
      var rosso = new THREE.MeshLambertMaterial({color : 0xFF0000});
      var verdeOspedale = new THREE.MeshLambertMaterial({color : 0x006666});


      //create a fake object
      var sediaAccoglienzaDispari = new THREE.Object3D();
      var dettaglio =1;

      var sedile1 = creaSedile();
      var sedile2 = creaSedile();
      var sedile3 = creaSedile();
      var sedile4 = creaSedile();
      var sedile5 = creaSedile();

      var reggiSedile1 = creaReggiSedile();
      var reggiSedile3 = creaReggiSedile();
      reggiSedile1.position.set(0.18,-0.25,0);
      reggiSedile3.position.set(-0.18,-0.25,0);
      sedile4.position.x =0.45;
      sedile5.position.x =-0.45;
      sedile1.position.x =0.9;
      sedile3.position.x =-0.9;
      sedile1.add(reggiSedile1);
      sedile3.add(reggiSedile3);
      sediaAccoglienzaDispari.add(sedile1);
      sediaAccoglienzaDispari.add(sedile2);
      sediaAccoglienzaDispari.add(sedile3);
      sediaAccoglienzaDispari.add(sedile4);
      sediaAccoglienzaDispari.add(sedile5);
      


      function creaReggiSedile () {
        var reggiSedile = new THREE.Object3D();
        var geometriaBarraVerticale = new THREE.BoxGeometry(0.04,0.5,0.055);
        var geometriaBarraOrizzontale = new THREE.BoxGeometry(0.05,0.04,0.5);
        var barraVerticale = new THREE.Mesh( geometriaBarraVerticale, celesteMetallo);
        var barraOrizzontale = new THREE.Mesh( geometriaBarraOrizzontale, celesteMetallo);
        barraOrizzontale.position.y =-0.5/2;
        barraVerticale.add(barraOrizzontale);
        reggiSedile.add(barraVerticale);
        return reggiSedile;
      }

      function creaSedile () {
        var sedile = new THREE.Object3D();
        var base = creaBase();
        var schienale = creaSchienale();
        schienale.position.set(0,0.23,-0.2);
        schienale.rotation.x =Math.PI*80/180;
        sedile.add(schienale);
        sedile.add(base);
        return sedile;
      }

      function creaBase () {
        var geometriaBase = new THREE.BoxGeometry(0.4,0.02,0.4);
        var geometriaReggiBase = new THREE.BoxGeometry(0.45,0.05,0.04);
        var geometriaReggiBase2 = new THREE.BoxGeometry(0.05,0.03,0.38);
        var geometriaReggiBase1 = new THREE.CylinderGeometry(0.02,0.02,0.05,Math.round(32*dettaglio));
        var geometriaBordoBase = new THREE.CylinderGeometry(0.01,0.01,0.4,Math.round(32*dettaglio));
        var geometriaFineBase = new THREE.CylinderGeometry(0.015,0.015,0.395,Math.round(32*dettaglio));
        var geometriaBordoFineBase = new THREE.SphereGeometry(0.015,Math.round(32*dettaglio),Math.round(32*dettaglio));
        var geometriaBordoBase2 = new THREE.SphereGeometry(0.01,Math.round(32*dettaglio),Math.round(32*dettaglio));
        var bordoFineBase1 = new THREE.Mesh( geometriaBordoFineBase, bianco);
        var bordoFineBase2 = new THREE.Mesh( geometriaBordoFineBase, bianco);
        var bordoBase1 = new THREE.Mesh( geometriaBordoBase, bianco);
        var bordoBase2 = new THREE.Mesh( geometriaBordoBase, bianco);
        var fineBase = new THREE.Mesh( geometriaFineBase, bianco);
        var base = new THREE.Mesh( geometriaBase, grigio);
        var sferaBordo1 = new THREE.Mesh( geometriaBordoBase2, grigio);
        var sferaBordo2 = new THREE.Mesh( geometriaBordoBase2, grigio);
        var reggiBase = new THREE.Mesh( geometriaReggiBase, celesteMetallo);
        var reggiBase1 = new THREE.Mesh( geometriaReggiBase1, celesteMetallo);
        var reggiBase2 = new THREE.Mesh( geometriaReggiBase1, celesteMetallo);
        var reggiSedia1 = new THREE.Mesh( geometriaReggiBase2, celesteMetallo);
        var reggiSedia2 = new THREE.Mesh( geometriaReggiBase2, celesteMetallo);
        reggiSedia1.position.set(0.13,0.01,0);
        reggiSedia2.position.set(-0.13,0.01,0);
        reggiBase1.position.x =0.45/2;
        reggiBase2.position.x =-0.45/2;
        reggiBase.position.y =-0.05/2 -0.01;
        sferaBordo1.position.y =-0.2;
        sferaBordo2.position.y =-0.2;
        bordoBase1.rotation.x =Math.PI/2;
        bordoBase2.rotation.x =Math.PI/2;
        bordoBase1.position.x =0.2;
        bordoBase2.position.x =-0.2;
        bordoFineBase1.position.y =0.395/2;
        bordoFineBase2.position.y =-0.395/2;
        fineBase.rotation.z =Math.PI/2;
        fineBase.position.set(0,-0.005,0.2);
        reggiBase.add(reggiSedia1);
        reggiBase.add(reggiSedia2);
        reggiBase.add(reggiBase1);
        reggiBase.add(reggiBase2);
        base.add(reggiBase);
        base.add(fineBase);
        bordoBase1.add(sferaBordo1);
        bordoBase2.add(sferaBordo2);
        base.add(bordoBase1);
        base.add(bordoBase2);
        fineBase.add(bordoFineBase1);
        fineBase.add(bordoFineBase2);
        return base;
      }

      function creaSchienale () {
        var geometriaSchienale = new THREE.BoxGeometry(0.4,0.02,0.4);
        var geometriaBordoSchienale1 = new THREE.CylinderGeometry(0.01,0.01,0.44,Math.round(32*dettaglio));
        var geometriaBordoSchienale2 = new THREE.CylinderGeometry(0.01,0.01,0.4,Math.round(32*dettaglio));
        var geometriaFineSchienale = new THREE.CylinderGeometry(0.015,0.015,0.395,Math.round(32*dettaglio));
        var geometriaFineSchienale2 = new THREE.SphereGeometry(0.015,Math.round(32*dettaglio),Math.round(32*dettaglio));
        var bordoSchienale1 = new THREE.Mesh( geometriaBordoSchienale1, grigio);
        var bordoSchienale2 = new THREE.Mesh( geometriaBordoSchienale1, grigio);
        var bordoBassoSchienale = new THREE.Mesh( geometriaBordoSchienale2, grigio);
        var fineSchienale = new THREE.Mesh( geometriaFineSchienale, bianco);
        var schienale = new THREE.Mesh( geometriaSchienale, grigio);
        var sferaFineSchinale1 = new THREE.Mesh( geometriaFineSchienale2, grigio);
        var sferaFineSchinale2 = new THREE.Mesh( geometriaFineSchienale2, grigio);
        sferaFineSchinale1.position.y =0.395/2;
        sferaFineSchinale2.position.y =-0.395/2;
        fineSchienale.rotation.z =Math.PI/2;
        fineSchienale.position.set(0,-0.005,-0.2);
        bordoBassoSchienale.rotation.z =Math.PI/2;
        bordoBassoSchienale.position.z =0.2;
        bordoSchienale1.rotation.x =Math.PI/2;
        bordoSchienale2.rotation.x =Math.PI/2;
        bordoSchienale1.position.set(0.2,0,0.04/2);
        bordoSchienale2.position.set(-0.2,0,0.04/2);
        fineSchienale.add(sferaFineSchinale1);
        fineSchienale.add(sferaFineSchinale2);
        schienale.add(fineSchienale);
        schienale.add(bordoBassoSchienale);
        schienale.add(bordoSchienale1);
        schienale.add(bordoSchienale2);        
        return schienale;
      }




    sediaAccoglienzaDispari.name = this.id;
    sediaAccoglienzaDispari.feature = this;
    var model = Feature.packageModel(sediaAccoglienzaDispari);
    return model;
};

module.exports = SediaAccoglienzaDispari;


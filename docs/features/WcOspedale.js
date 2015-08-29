     
var Feature = require('./Feature.js');

Feature.inherits(WcOspedale, Feature);

function WcOspedale(feature) {
  Feature.call(this, feature);
}

WcOspedale.prototype.style = {
                prefix: "fa",
                icon: "medkit",
                zIndex: 3
            };

WcOspedale.prototype.in_graph = true;

WcOspedale.prototype.in_2D_map = false;

WcOspedale.prototype.get3DModel = function() {

      //colors
      var grigio = new THREE.MeshLambertMaterial({color : 0x808080});
      var grigioChiaro = new THREE.MeshLambertMaterial({color : 0xD3D3D3});
      var celesteMetallo = new THREE.MeshLambertMaterial({color : 0xB0C4DE});
      var bianco = new THREE.MeshLambertMaterial({color : 0xFFFFFF});
      var nero = new THREE.MeshLambertMaterial({color : 0x000000});
      var biancoCeramica = new THREE.MeshLambertMaterial({color : 0xFDEEF4});
      var limone = new  THREE.MeshLambertMaterial({color : 0xFFF8C6});


      //create a fake object
      var wcOspedale = new THREE.Object3D();
      var dettaglio = 1;

      wcOspedale.scale.set(1.2,1.2,1.2);

      var tazza = creaTazza();
      tazza.position.y = 0.2;
      wcOspedale.add(tazza);



      function creaTazza () {
        var tazza = new THREE.Object3D();
        var geometriaCono = new THREE.CylinderGeometry(0.19,0.05,0.28,Math.round(dettaglio*32));
        var geometriaCopriCono = new THREE.TorusGeometry(0.18,0.01,Math.round(dettaglio*32),Math.round(dettaglio*64));
        var geometriaCopriWater = new THREE.CylinderGeometry(0.18,0.18,0.02,Math.round(dettaglio*32));
        var geometriaCopriWater2 = new THREE.TorusGeometry(0.18,0.01,Math.round(dettaglio*32),100);
        var geometriaSopraCono = new THREE.BoxGeometry(0.4,0.02,0.36); 
        var geometriaBordoSopraCono = new THREE.CylinderGeometry(0.01,0.01,0.4,Math.round(dettaglio*32));        
        var geometriaSopraWater = new THREE.BoxGeometry(0.23,0.02,0.36); 
        var geometriaBordoSopraWater = new THREE.CylinderGeometry(0.01,0.01,0.23,Math.round(dettaglio*32));
        var geometriaBordoSopraWater2 = new THREE.CylinderGeometry(0.01,0.01,0.36,Math.round(dettaglio*32));
        var geometriaAngoloSopraWater = new THREE.SphereGeometry(0.01,Math.round(dettaglio*32),Math.round(dettaglio*32));
        var geometriaScaricoCentrale = new THREE.BoxGeometry(0.1,0.25,0.36);
        var geometriaCopriScaricoCentrale = new THREE.BoxGeometry(0.105,0.01,0.365);
        var geometriaPulsanteScarico = new THREE.CylinderGeometry(0.03,0.03,0.005,Math.round(dettaglio*32));
        var geometriaPulsanteScarico2 = new THREE.CylinderGeometry(0.04,0.05,0.003,Math.round(dettaglio*32));
        var geometriaCorpo = new THREE.BoxGeometry(0.4,0.31,0.02);
        var copriWater = new THREE.Mesh(geometriaCopriWater,bianco);
        var copriWater2 = new THREE.Mesh(geometriaCopriWater2,bianco);
        var cono = new THREE.Mesh(geometriaCono,limone);
        var sopraCono = new THREE.Mesh(geometriaSopraCono,limone);
        var corpo1 = new THREE.Mesh(geometriaCorpo,limone);
        var corpo2 = new THREE.Mesh(geometriaCorpo,limone);
        var copriCono = new THREE.Mesh(geometriaCopriCono,limone);
        var bordoSopraCono1 = new THREE.Mesh(geometriaBordoSopraCono,limone);
        var bordoSopraCono2 = new THREE.Mesh(geometriaBordoSopraCono,limone);
        var bordoSopraWater1 = new THREE.Mesh(geometriaBordoSopraWater,bianco);
        var bordoSopraWater2 = new THREE.Mesh(geometriaBordoSopraWater,bianco);
        var sopraWater = new THREE.Mesh(geometriaSopraWater,bianco);
        var bordoSopraWater = new THREE.Mesh(geometriaBordoSopraWater2,bianco);
        var angoloCopriWater1 = new THREE.Mesh(geometriaAngoloSopraWater,bianco);
        var angoloCopriWater2 = new THREE.Mesh(geometriaAngoloSopraWater,bianco);
        var scaricoCentrale = new THREE.Mesh(geometriaScaricoCentrale,limone);
        var copriScaricoCentrale = new THREE.Mesh(geometriaCopriScaricoCentrale,limone);
        var pulsanteScarico = new THREE.Mesh(geometriaPulsanteScarico,limone);
        var pulsanteScarico2 = new THREE.Mesh(geometriaPulsanteScarico2,limone);
        var perno1 = creaPerno();
        var perno2 = creaPerno();
        copriScaricoCentrale.position.y = 0.125 +0.005;
        scaricoCentrale.position.set(0.2 -0.05,0.125 +0.01,0);
        bordoSopraWater.rotation.x = Math.PI/2;
        bordoSopraWater.position.x = 0.115;
        angoloCopriWater1.position.y = 0.18;
        angoloCopriWater2.position.y =-0.18;
        bordoSopraWater1.rotation.z =  Math.PI/2;
        bordoSopraWater2.rotation.z =  Math.PI/2;
        bordoSopraWater1.position.z = 0.18;
        bordoSopraWater2.position.z =-0.18;
        bordoSopraCono1.rotation.z =  Math.PI/2;
        bordoSopraCono2.rotation.z =  Math.PI/2;
        bordoSopraCono1.position.z = 0.18;
        bordoSopraCono2.position.z =-0.18;
        copriCono.rotation.x = Math.PI/2;
        copriCono.position.y = 0.15 -0.01;
        copriWater2.rotation.x = Math.PI/2;
        copriWater.position.y = 0.15 +0.011;
        corpo1.rotation.x = Math.PI*29/180;
        corpo2.rotation.x =-Math.PI*29/180;
        corpo1.position.set(0.2,0,0.2*Math.sin(corpo1.rotation.x));
        corpo2.position.set(0.2,0,0.2*Math.sin(corpo2.rotation.x));
        sopraCono.position.set(0.2,0.15 -0.01,0);
        sopraWater.position.set(0.115,0,0);
        pulsanteScarico.position.y = 0.005 +0.0025;
        pulsanteScarico2.position.y = 0.005;
        copriWater.add(copriWater2);
        cono.add(copriWater);
        cono.add(copriCono);
        copriScaricoCentrale.add(pulsanteScarico);
        copriScaricoCentrale.add(pulsanteScarico2);
        scaricoCentrale.add(copriScaricoCentrale);
        sopraCono.add(scaricoCentrale);
        sopraCono.add(bordoSopraCono1);
        sopraCono.add(bordoSopraCono2);
        cono.add(sopraCono);
        bordoSopraWater.add(angoloCopriWater1);
        bordoSopraWater.add(angoloCopriWater2);
        sopraWater.add(bordoSopraWater);
        sopraWater.add(bordoSopraWater1);
        sopraWater.add(bordoSopraWater2);
        copriWater.add(sopraWater);
        perno1.position.set(0.145,-0.01 +0.0025,0.1);
        perno2.position.set(0.145,-0.01 +0.0025,-0.1);
        sopraWater.add(perno1);
        sopraWater.add(perno2);
        cono.add(corpo1);
        cono.add(corpo2);
        tazza.add(cono);
        return tazza;
      }

      function creaPerno () {
        var cg = new THREE.CylinderGeometry(0.02,0.02,0.005,Math.round(dettaglio*32));
        var rg = new THREE.BoxGeometry(0.04,0.007,0.02);
        var c = new THREE.Mesh(cg,grigioChiaro);
        var r = new THREE.Mesh(rg,grigioChiaro);
        r.position.x = -0.02;
        c.add(r);
        return c;
      }
    wcOspedale.name = this.id;
    wcOspedale.feature = this;
    var model = Feature.packageModel(wcOspedale);
    return model;
};

module.exports = WcOspedale;

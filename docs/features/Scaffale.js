var Feature = require('./Feature.js');

Feature.inherits(Scaffale, Feature);

function Scaffale(feature) {
    Feature.call(this, feature);
}

Scaffale.prototype.style = {
                            prefix: "fa",
                            icon: "medkit",
                            zIndex: 3
                        };

Scaffale.prototype.in_graph = true;

Scaffale.prototype.in_2D_map = false;

Scaffale.prototype.get3DModel = function() {

      var grigioChiaro = new THREE.MeshLambertMaterial({color : 0xD3D3D3});
      var grigioBluMetallo = new THREE.MeshLambertMaterial({color : 0x646D7E});
      var nero = new THREE.MeshLambertMaterial({color : 0x000000});


      var scaffale = new THREE.Object3D();
      var dettaglio = 1; 
      var scheletro = creaScheletro();
      var mensola1 = creaMensola();
      var mensola2 = creaMensola();
      var mensola3 = creaMensola();
      var mensola4 = creaMensola();
      mensola1.position.y = 0.25;
      mensola2.position.y = 0.6;
      mensola3.position.y = 1.2;
      mensola4.position.y = 1.8;
      scaffale.position.y = 0.005;
      scaffale.add(scheletro);
      scaffale.add(mensola1);
      scaffale.add(mensola2);
      scaffale.add(mensola3);
      scaffale.add(mensola4);
      scaffale.scale.set(1.5,1.5,1.5);
       
      
      



function creaMensola () {
  var mensola = new THREE.Object3D();
  var geometriaReggiMensola = new THREE.CylinderGeometry(0.015,0.015,0.05,Math.round(dettaglio*32));
  var sezioniOrizzontali = creaSezioniOrizzontali();
  var sezioniVerticali = creaSezioniVerticali();
  var reggiMensola1 = new THREE.Mesh(geometriaReggiMensola,grigioChiaro);
  var reggiMensola2 = new THREE.Mesh(geometriaReggiMensola,grigioChiaro);
  var reggiMensola3 = new THREE.Mesh(geometriaReggiMensola,grigioChiaro);
  var reggiMensola4 = new THREE.Mesh(geometriaReggiMensola,grigioChiaro);
  reggiMensola1.position.set(0.65,0,0.2);
  reggiMensola2.position.set(0.65,0,-0.2);
  reggiMensola3.position.set(-0.65,0,0.2);
  reggiMensola4.position.set(-0.65,0,-0.2);
  mensola.add(reggiMensola1);
  mensola.add(reggiMensola2);
  mensola.add(reggiMensola3);
  mensola.add(reggiMensola4);
  mensola.add(sezioniVerticali);
  mensola.add(sezioniOrizzontali);
  return mensola;
};

function creaSezioniVerticali () {
  var sezioniVerticali = new THREE.Object3D();
  var geometriaVerticale = new THREE.BoxGeometry(0.0025,0.01,0.4);
  for (var i = 0; i < 60 ; i++) {
    var verticale1 = new THREE.Mesh(geometriaVerticale,grigioChiaro);
    var verticale2 = new THREE.Mesh(geometriaVerticale,grigioChiaro);
    var verticale3 = new THREE.Mesh(geometriaVerticale,grigioChiaro);
    verticale1.position.set(-0.65 +1.3*i/59,0.02 -0.0045,0);
    verticale2.position.set(-0.65 +1.3*i/59,-0.02 +0.0045,0);
    verticale3.position.set(-0.65 +1.3*i/59,0,0);
    sezioniVerticali.add(verticale1);
    sezioniVerticali.add(verticale2);
    sezioniVerticali.add(verticale3);
  };
  return sezioniVerticali;
}

function creaSezioniOrizzontali () {
  var sezioniOrizzontali = new THREE.Object3D();
  var geometriaOrizzontale = new THREE.BoxGeometry(1.3,0.04,0.005);
  var geometriaVerticale = new THREE.BoxGeometry(0.005,0.04,0.4);
  for (var i = 0; i <4; i++) {
    var orizzontale = new THREE.Mesh(geometriaOrizzontale,grigioBluMetallo);
    orizzontale.position.set(0,0,0.2 -0.4*i/3);
    sezioniOrizzontali.add(orizzontale);
  };
  var verticale1 = new THREE.Mesh(geometriaVerticale,grigioBluMetallo);
  var verticale2 = new THREE.Mesh(geometriaVerticale,grigioBluMetallo);
  verticale1.position.x = 0.65;
  verticale2.position.x =-0.65;
  sezioniOrizzontali.add(verticale1);
  sezioniOrizzontali.add(verticale2);
  return sezioniOrizzontali;
};


function creaScheletro () {
  var scheletro = new THREE.Object3D();
  var angolo1 = creaAngolo();
  var angolo2 = creaAngolo();
  var angolo3 = creaAngolo();
  var angolo4 = creaAngolo();
  angolo1.position.set(0.65,0,0.2);
  angolo2.position.set(0.65,0,-0.2);
  angolo3.position.set(-0.65,0,0.2);
  angolo4.position.set(-0.65,0,-0.2);
  // angolo1.position.set(0.2,0,0.65);
  // angolo2.position.set(-0.2,0,0.65);
  // angolo3.position.set(0.2,0,-0.65);
  // angolo4.position.set(-0.2,0,-0.65);
  scheletro.add(angolo1);
  scheletro.add(angolo2);
  scheletro.add(angolo3);
  scheletro.add(angolo4);
  return scheletro;
};

function creaAngolo () {
  var angolo = new THREE.Object3D();
  var geometriaBase1 = new THREE.CylinderGeometry(0.02,0.02,0.01,Math.round(dettaglio*32));
  var geometriaBase2 = new THREE.CylinderGeometry(0.01,0.01,0.015,Math.round(dettaglio*32));
  var geometriaAsta = new THREE.CylinderGeometry(0.01,0.01,2,Math.round(dettaglio*32));
  var geometriaFine = new THREE.CylinderGeometry(0.01,0.01,0.0025,Math.round(dettaglio*32));
  var base1 = new THREE.Mesh(geometriaBase1,nero);
  var base2 = new THREE.Mesh(geometriaBase2,nero);
  var asta = new  THREE.Mesh(geometriaAsta,grigioBluMetallo);
  var fine = new THREE.Mesh(geometriaFine,nero);
  base2.position.y = 0.005 +0.0075;
  asta.position.y = 0.0075 +1;
  fine.position.y = 1 +0.00145;
  asta.add(fine);
  base2.add(asta);
  base1.add(base2);
  angolo.add(base1);
  return angolo;
};



    scaffale.name = this.id;
    scaffale.feature = this;
    var model = Feature.packageModel(scaffale);
    return model;
};

module.exports = Scaffale;


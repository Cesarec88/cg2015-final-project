var Feature = require('./Feature.js');

Feature.inherits(Scrivania, Feature);

function Scrivania(feature) {
    Feature.call(this, feature);
}

Scrivania.prototype.style = {
                            prefix: "fa",
                            icon: "medkit",
                            zIndex: 3
                        };

Scrivania.prototype.in_graph = true;

Scrivania.prototype.in_2D_map = false;

Scrivania.prototype.get3DModel = function() {

      var marrone = new THREE.MeshLambertMaterial({color : 0xF4A460});
      var grigio = new THREE.MeshLambertMaterial({color : 0x808080});
      var grigioChiaro = new THREE.MeshLambertMaterial({color : 0xD3D3D3});
      var celesteMetallo = new THREE.MeshLambertMaterial({color : 0xB0C4DE});
      var bianco = new THREE.MeshLambertMaterial({color : 0xFFFFFF});
      var nero = new THREE.MeshLambertMaterial({color : 0x000000});

      var scrivania = creaScrivania();
      scrivania.position.y = 0.37;
      scrivania.scale.set(1.4,1.5,1.4);
      scene.add(scrivania)


function creaScrivania () {
      var scrivania = new THREE.Object3D();
      var geometriaParetiLaterali = new THREE.BoxGeometry(0.02,0.74,0.7);
      var geometriaSottoParetiLaterali = new THREE.BoxGeometry(0.03,0.01,0.72);
      var geometriaPareteCentrale = new THREE.BoxGeometry(1.7,0.64,0.02);
      var geometriaScrittoio = new THREE.BoxGeometry(1.4,0.02,0.7);
      var geometriaScrittoio2 = new THREE.BoxGeometry(0.15,0.02,0.7);
      var sottoPareteLaterale1 = new  THREE.Mesh(geometriaSottoParetiLaterali,bianco);
      var sottoPareteLaterale2 = new  THREE.Mesh(geometriaSottoParetiLaterali,bianco);
      var pareteLaterale1 = new  THREE.Mesh(geometriaParetiLaterali,grigio);
      var pareteLaterale2 = new  THREE.Mesh(geometriaParetiLaterali,grigio);
      var pareteCentrale = new THREE.Mesh(geometriaPareteCentrale,grigio);
      var scrittoio = new  THREE.Mesh(geometriaScrittoio,bianco);
      var scrittoio2a = new  THREE.Mesh(geometriaScrittoio2,grigio);
      var scrittoio2b = new  THREE.Mesh(geometriaScrittoio2,grigio);
      scrittoio.position.y = 0.37 -0.01;
      pareteLaterale1.position.x = 0.85 -0.01;
      pareteLaterale2.position.x =-0.85 +0.01;
      pareteCentrale.position.set(0,0.05 -0.01,-0.175 -0.075);
      scrittoio2a.position.x = 0.7 +0.075;
      scrittoio2b.position.x =-0.7 -0.075;
      sottoPareteLaterale1.position.y =-0.37 +0.005;
      sottoPareteLaterale2.position.y =-0.37 +0.005;
      pareteLaterale1.add(sottoPareteLaterale1);
      pareteLaterale2.add(sottoPareteLaterale2);
      scrivania.add(pareteLaterale1);
      scrivania.add(pareteLaterale2);
      scrivania.add(pareteCentrale);
      scrivania.add(scrittoio);
      scrittoio.add(scrittoio2a);
      scrittoio.add(scrittoio2b);

    return scrivania;
  }



    scrivania.name = this.id;
    scrivania.feature = this;
    var model = Feature.packageModel(scrivania);
    return model;
};

module.exports = Scrivania;


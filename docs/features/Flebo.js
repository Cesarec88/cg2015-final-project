    var Feature = require('./Feature.js');

Feature.inherits(Flebo, Feature);

function Flebo(feature) {
  Feature.call(this, feature);
}

Flebo.prototype.style = {
                prefix: "fa",
                icon: "medkit",
                zIndex: 3
            };

Flebo.prototype.in_graph = true;

Flebo.prototype.in_2D_map = true;

Flebo.prototype.get3DModel = function() {

      var green_material = new THREE.MeshLambertMaterial( {color : 0x42C7AD } );
      var flebo = new THREE.Object3D( );
      var dettaglio =1;




      flebo.scale.set(0.1,0.1,0.1);

      var dripJoint_geometry = new THREE.SphereGeometry( 0.6 , Math.round(dettaglio*32) , Math.round(dettaglio*32) );
      var black_material = new THREE.MeshLambertMaterial( { color: 0x000000 } )
      var dripJoint = new THREE.Mesh( dripJoint_geometry, black_material );

      dripJoint.position.y = 1.5;

      flebo.add(dripJoint);

      var dripFoot_geometry = new THREE.BoxGeometry( 4 , 0.6 , 0.4 );
      var silver_material = new THREE.MeshLambertMaterial( {color: 0xA9A9A9 } );
      dripFoot = new THREE.Mesh(dripFoot_geometry , silver_material);
      dripFoot.position.y =1.35;
      dripFoot.position.x =-2;

      var o1_1 = new THREE.Object3D();
      o1_1.rotation.y = Math.PI;
      o1_1.position.x = -2;

      dripFoot.add(o1_1);

      var dripFootBlackPiece_geometry = new THREE.BoxGeometry(0.1, 0.6 , 0.4);
      var dripFootBlackPiece = new THREE.Mesh(dripFootBlackPiece_geometry , black_material);
      dripFootBlackPiece.position.x = 0.05;

      o1_1.add(dripFootBlackPiece);

      flebo.add( dripFoot );

      var dripFootWheel_geometry= new THREE.CylinderGeometry( 0.5 , 0.5 , 0.8 , Math.round(dettaglio*32) );
      var dripFootWheel = new THREE.Mesh( dripFootWheel_geometry, black_material);
      dripFootWheel.rotation.x = Math.PI/2;
      dripFootWheel.position.y= - 0.6 - 0.2;
      o1_1.add( dripFootWheel );

      for(var i=1; i<5 ; i++){
      var dripFootB
      dripFootB = createDripFoot( i, silver_material, black_material);
      dripJoint.add(dripFootB);
    }


    var dripLowerCylinder_geometry = new THREE.CylinderGeometry( 0.3 , 0.3 , 12 , Math.round(dettaglio*32) );
    var dripLowerCylinder = new THREE.Mesh(dripLowerCylinder_geometry, silver_material );
    dripLowerCylinder.position.y= 5.7;
    dripJoint.add(dripLowerCylinder)

    var dripMidleCylinder1_geometry = new THREE.CylinderGeometry( 0.32 , 0.32 , 1 , Math.round(dettaglio*32) );
    var dripMidleCylinder1 = new THREE.Mesh(dripMidleCylinder1_geometry, green_material);
    dripMidleCylinder1.position.y = 6+0.5;
    dripLowerCylinder.add(dripMidleCylinder1);

    var dripMidleRectangle_geometry = new THREE.BoxGeometry( 0.02 , 1 , 0.7 );
    for(var i =0; i<20; i++){
      var dripMidleHandle = createDripMidleHandle(i, green_material);
      dripMidleCylinder1.add(dripMidleHandle);
    }

    var dripMidleCylinder2_geometry = new THREE.SphereGeometry( 0.32 , Math.round(dettaglio*32) , Math.round(dettaglio*32) );
    var dripMidleCylinder2 = new THREE.Mesh(dripMidleCylinder2_geometry, green_material);
    dripMidleCylinder2.position.y =0.5;
    dripMidleCylinder1.add(dripMidleCylinder2);

    var dripUpperCylinder_geometry = new THREE.CylinderGeometry( 0.2 , 0.2 , 5 , Math.round(dettaglio*32) );
    var dripUpperCylinder = new THREE.Mesh(dripUpperCylinder_geometry, silver_material );
    dripMidleCylinder2.add(dripUpperCylinder);

    var dripUpperCylinder2_geometry = new THREE.CylinderGeometry( 0.32 , 0.32 , 1.5 , Math.round(dettaglio*32) );
    var dripUpperCylinder2 = new THREE.Mesh(dripUpperCylinder2_geometry, green_material );
    dripUpperCylinder2.position.y = 3;
    dripUpperCylinder.add(dripUpperCylinder2);


    var dripUpperCylinder3_geometry = new THREE.BoxGeometry( 0.03 , 0.7 , 2 );

    for(var i=0; i<4 ; i++){
    var dripUpperPart
    dripUpperPart = createDripUpperPart( i, green_material);
    dripUpperCylinder2.add(dripUpperPart);
    }

    var dripTop_geometry = new THREE.CylinderGeometry( 0.9 , 0.9 , 0.05 ,Math.round(dettaglio*32) );
    var dripTop = new THREE.Mesh(dripTop_geometry,green_material);
    dripTop.position.y = 0.6;
    dripUpperCylinder2.add(dripTop);



    function createDripFoot(i , silver_material, black_material){
      var footObject = new THREE.Object3D();
      // dripJoint.add(footObject);
      footObject.rotation.y =2* Math.PI*i/5
      footObject.position.y = -0.15

      dripFoot = new THREE.Mesh(dripFoot_geometry , silver_material);
      dripFoot.position.x =-2;
      var o = new THREE.Object3D();
      o.rotation.y = Math.PI;
      o.position.x = -2;
      dripFoot.add(o);
      var dripFootBlackPiece = new THREE.Mesh(dripFootBlackPiece_geometry , black_material);
      dripFootBlackPiece.position.x = 0.05;
      o.add(dripFootBlackPiece);
      var dripFootWheel = new THREE.Mesh( dripFootWheel_geometry, black_material);
      dripFootWheel.rotation.x = Math.PI/2;
      dripFootWheel.position.y= - 0.6 - 0.2;
      o.add( dripFootWheel );
      footObject.add( dripFoot );

      return footObject;
    }

    function createDripMidleHandle(i, green_material){
      var dripMidleRectangle = new THREE.Mesh(dripMidleRectangle_geometry, green_material);
      dripMidleRectangle.rotation.y = 2*Math.PI*i/20;
      return dripMidleRectangle;
    }

    function createDripUpperPart(i, green_material){
    var dripUpperObject = new THREE.Object3D();
    var dripUpperCylinder3 = new THREE.Mesh(dripUpperCylinder3_geometry, green_material );
    dripUpperCylinder2.add(dripUpperObject);
    dripUpperCylinder3.position.z = -0.64;
    dripUpperCylinder3.rotation.x = Math.PI*30/180;
    dripUpperObject.add(dripUpperCylinder3);
    dripUpperObject.rotation.y = 2 * Math.PI* i /4
    return dripUpperObject;
    }

flebo.name = this.id;
  flebo.feature = this;
  var model = Feature.packageModel(flebo);
  return model;
};

module.exports = Flebo;
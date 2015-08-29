     


var Feature = require('./Feature.js');

Feature.inherits(LettinoVisita, Feature);

function LettinoVisita(feature) {
  Feature.call(this, feature);
}

LettinoVisita.prototype.style = {
                prefix: "fa",
                icon: "medkit",
                zIndex: 3
            };

LettinoVisita.prototype.in_graph = true;

LettinoVisita.prototype.in_2D_map = false;

LettinoVisita.prototype.get3DModel = function() {

      var gray_material      = new THREE.MeshLambertMaterial({color : 0x808080});
      var darkGreen_material = new THREE.MeshLambertMaterial({color : 0x2F4F4F});
      var black_material     = new THREE.MeshLambertMaterial({color : 0x000000});
      var lightBlue_material = new THREE.MeshLambertMaterial({color : 0xadd8e6});

      //create a fake object
      var lettinoVisita = new THREE.Object3D( );


      var detail = 0.4;

      var pillowLength = 1.3;
      var pillowHeigth = 0.055;
      var pillowWidth = 0.61;
      var lettinoVisitaLowerPillow = createPillow( pillowLength , pillowHeigth , pillowWidth );
      lettinoVisitaLowerPillow.position.y = 0.6 + pillowHeigth/2;
      lettinoVisita.add(lettinoVisitaLowerPillow);

      var pillowLength2 = pillowLength/3;
      var lettinoVisitaUpperPillow = createPillow( pillowLength2 , pillowHeigth , pillowWidth );
      lettinoVisitaUpperPillow.rotation.z = Math.PI*25/180;
      lettinoVisitaUpperPillow.position.y = pillowLength2/2*Math.sin(Math.PI*25/180);
      lettinoVisitaUpperPillow.position.x = (pillowLength + pillowLength2)/2;
      lettinoVisitaLowerPillow.add(lettinoVisitaUpperPillow);

      var lettinoVisitaBase1 = createBase();
      var lettinoVisitaBase2 = createBase();
      lettinoVisitaBase1.position.z = pillowWidth/2 + 0.025;
      lettinoVisitaBase2.position.z = -pillowWidth/2 - 0.025;
      lettinoVisita.add(lettinoVisitaBase1);
      lettinoVisita.add(lettinoVisitaBase2);

      var leglettinoVisitaSusteiner_geometry = new THREE.CylinderGeometry( 0.016 , 0.016 , pillowWidth + 0.05 , Math.round(32*detail) );
      var lettinoVisitaPillowRiser_geometry = new THREE.CylinderGeometry( 0.012 , 0.012 , pillowWidth + 0.07 , Math.round(32*detail) );
      var lettinoVisitaPillowRiser1_geometry = new THREE.CylinderGeometry( 0.012 , 0.012 , pillowWidth/1.5 , Math.round(32*detail) );
      var lettinoVisitaPillowRiser2_geometry = new THREE.CylinderGeometry( 0.005 , 0.005 , 0.06 , Math.round(32*detail) );
      var lettinoVisitaPillowRiser4_geometry = new THREE.CylinderGeometry( 0.005 , 0.005 , 0.05 , Math.round(32*detail) );
      var lettinoVisitaPillowRiser3_geometry = new THREE.CylinderGeometry( 0.008 , 0.006 , 0.03 , Math.round(32*detail) );

      var leglettinoVisitaSusteiner1 = new THREE.Mesh( leglettinoVisitaSusteiner_geometry , lightBlue_material );
      var leglettinoVisitaSusteiner2 = new THREE.Mesh( leglettinoVisitaSusteiner_geometry , lightBlue_material );
      var lettinoVisitaPillowRiser = new THREE.Mesh( lettinoVisitaPillowRiser_geometry , lightBlue_material );
      var lettinoVisitaPillowRiser1 = new THREE.Mesh( lettinoVisitaPillowRiser1_geometry , lightBlue_material );
      var lettinoVisitaPillowRiser2a = new THREE.Mesh( lettinoVisitaPillowRiser4_geometry , lightBlue_material );
      var lettinoVisitaPillowRiser2b = new THREE.Mesh( lettinoVisitaPillowRiser2_geometry , lightBlue_material );
      var lettinoVisitaPillowRiser2c = new THREE.Mesh( lettinoVisitaPillowRiser4_geometry , lightBlue_material );
      var lettinoVisitaPillowRiser2d = new THREE.Mesh( lettinoVisitaPillowRiser4_geometry , lightBlue_material );
      var lettinoVisitaPillowRiser3 = new THREE.Mesh(lettinoVisitaPillowRiser3_geometry , black_material);
      
      leglettinoVisitaSusteiner1.rotation.x = Math.PI/2;
      leglettinoVisitaSusteiner2.rotation.x = Math.PI/2;
      leglettinoVisitaSusteiner1.position.x = 1.105/2 + 0.3;
      leglettinoVisitaSusteiner1.position.y = 0.17;
      leglettinoVisitaSusteiner2.position.y = 0.17;
      leglettinoVisitaSusteiner2.position.x = -1.128/2;
      lettinoVisitaPillowRiser.rotation.x = Math.PI/2;
      lettinoVisitaPillowRiser.position.x = 1.105/2 + 0.3;
      lettinoVisitaPillowRiser.position.y = 0.50;
      lettinoVisitaPillowRiser1.rotation.x = Math.PI/2;
      lettinoVisitaPillowRiser1.position.x = -0.03;
      lettinoVisitaPillowRiser2a.rotation.z = Math.PI/2;
      lettinoVisitaPillowRiser2b.rotation.z = Math.PI/2;
      lettinoVisitaPillowRiser2a.position.y = 0.018;
      lettinoVisitaPillowRiser2a.position.x = -0.037/2;
      lettinoVisitaPillowRiser2b.position.y = -pillowWidth/2 + 0.05;
      lettinoVisitaPillowRiser2b.position.x = -0.06/2;
      lettinoVisitaPillowRiser3.position.y = 0.03;
      lettinoVisitaPillowRiser2c.position.y = 0.05/2;
      lettinoVisitaPillowRiser2c.position.x = -0.038/2;
      lettinoVisitaPillowRiser2c.rotation.z =Math.PI/2;
      lettinoVisitaPillowRiser2d.rotation.z = Math.PI/2;
      lettinoVisitaPillowRiser2d.position.y = -0.018;
      lettinoVisitaPillowRiser2d.position.x = -0.037/2;


      lettinoVisitaPillowRiser2a.add(lettinoVisitaPillowRiser2c);
      lettinoVisitaPillowRiser2b.add( lettinoVisitaPillowRiser3 );
      lettinoVisitaPillowRiser.add(lettinoVisitaPillowRiser2d);
      lettinoVisitaPillowRiser.add(lettinoVisitaPillowRiser2a);
      lettinoVisitaPillowRiser.add(lettinoVisitaPillowRiser2b);
      lettinoVisitaPillowRiser.add(lettinoVisitaPillowRiser1);
      lettinoVisita.add(lettinoVisitaPillowRiser);
      lettinoVisita.add(leglettinoVisitaSusteiner1);
      lettinoVisita.add(leglettinoVisitaSusteiner2);

      lettinoVisita.scale.set( 1.6 , 1.6 , 1.5 );



function createBase( ){

  var base = new THREE.Object3D();
  var l1_geometry = new THREE.CylinderGeometry(  0.016 , 0.016 , 1.3 , Math.round(32*detail) );
  var n_geometry = new THREE.SphereGeometry(  0.0175  , Math.round(32*detail) , Math.round(64*detail) );
  var l3_geometry = new THREE.CylinderGeometry( 0.016 , 0.016 , 0.06 , Math.round(32*detail) );
  var l6_geometry = new THREE.CylinderGeometry( 0.016 , 0.016 , 0.578 , Math.round(32*detail) );
  var l7_geometry = new THREE.CylinderGeometry( 0.017 , 0.018 , 0.01 , Math.round(32*detail) );

  var l1a = new THREE.Mesh( l1_geometry , lightBlue_material );
  var l2_1a = new THREE.Mesh(n_geometry, lightBlue_material );
  var l2_2a = new THREE.Mesh(n_geometry, lightBlue_material );
  var l3_1a = new THREE.Mesh( l3_geometry , lightBlue_material );
  var l3_2a = new THREE.Mesh( l3_geometry , lightBlue_material );
  var l4_1a = new THREE.Mesh( n_geometry , lightBlue_material );
  var l4_2a = new THREE.Mesh( n_geometry , lightBlue_material );
  var l5_1a = new THREE.Object3D();
  var l5_2a = new THREE.Object3D();
  var l6_1a = new THREE.Mesh( l6_geometry , lightBlue_material );
  var l6_2a = new THREE.Mesh( l6_geometry , lightBlue_material );
  var l7a = new THREE.Mesh( l7_geometry , black_material );
  var l7_2a = new THREE.Mesh( l7_geometry , black_material );

  l1a.rotation.z = Math.PI/2;
  l1a.position.set( pillowLength2/ 3 , 0.6 , 0 );
  l2_1a.position.y = 1.3/2;
  l2_2a.position.y = -1.3/2;
  l3_1a.rotation.z = Math.PI*20/180;
  l3_2a.rotation.z = -Math.PI*20/180;
  l3_1a.position.x = 0.06/2 * Math.sin(-Math.PI*20/180);
  l3_1a.position.y = 0.06/2;
  l3_2a.position.x = -0.06/2 * Math.sin(Math.PI*20/180);
  l3_2a.position.y = -0.06/2;
  l4_1a.position.y = 0.06/2;
  l4_2a.position.y = -0.06/2;
  l5_1a.rotation.z = -Math.PI*20/180;
  l5_2a.rotation.z = Math.PI*20/180;
  l6_1a.rotation.z = Math.PI/2;
  l6_2a.rotation.z = Math.PI/2;
  l6_1a.position.x = -0.578/2;
  l6_2a.position.x = -0.578/2;
  l7a.position.y = 0.568/2;
  l7_2a.position.y = 0.568/2;


  l6_1a.add( l7a );
  l6_2a.add( l7_2a );
  l5_1a.add(l6_1a);
  l5_2a.add(l6_2a);
  l4_1a.add(l5_1a);
  l4_2a.add(l5_2a);
  l3_1a.add(l4_1a);
  l3_2a.add(l4_2a);
  l2_1a.add(l3_1a);
  l2_2a.add(l3_2a);
  l1a.add(l2_1a);
  l1a.add(l2_2a);
  base.add(l1a);

  return base;
};

function createPillow(pillowLength, pillowHeigth , pillowWidth){

  var pillow = new THREE.Object3D();
  var p1_geometry = new THREE.BoxGeometry( pillowLength , pillowHeigth , pillowWidth );
  var p2_geometry = new THREE.CylinderGeometry( pillowHeigth/2 , pillowHeigth/2 , pillowWidth - pillowHeigth/Math.round(32*detail) ,Math.round(32*detail) );
  var p3_geometry = new THREE.CylinderGeometry( pillowHeigth/2 , pillowHeigth/2 , pillowLength - pillowHeigth/Math.round(32*detail) ,Math.round(32*detail) );
  var p4_geometry = new THREE.SphereGeometry( pillowHeigth/2 , Math.round(32*detail) , Math.round(64*detail) );
  var p1  = new THREE.Mesh( p1_geometry , darkGreen_material );
  var p2a = new THREE.Mesh( p2_geometry , darkGreen_material );
  var p2b = new THREE.Mesh( p2_geometry , darkGreen_material );
  var p3a = new THREE.Mesh( p3_geometry , gray_material );
  var p3b = new THREE.Mesh( p3_geometry , gray_material );
  var p4a = new THREE.Mesh( p4_geometry , gray_material );
  var p4b = new THREE.Mesh( p4_geometry , gray_material );
  var p4c = new THREE.Mesh( p4_geometry , gray_material );
  var p4d = new THREE.Mesh( p4_geometry , gray_material );

  p2a.rotation.x = Math.PI/2;
  p2b.rotation.x = Math.PI/2;
  p2a.position.x = -pillowLength/2;
  p2b.position.x =  pillowLength/2;

  p3a.rotation.z = Math.PI/2;
  p3b.rotation.z = Math.PI/2;
  p3a.position.z = -pillowWidth/2;
  p3b.position.z = pillowWidth/2;

  p4a.position.y = pillowWidth/2;
  p4b.position.y = -pillowWidth/2;
  p4c.position.y = pillowWidth/2;
  p4d.position.y = -pillowWidth/2;

  p2a.add(p4a);
  p2a.add(p4b);
  p2b.add(p4c);
  p2b.add(p4d);
  pillow.add(p3a);
  pillow.add(p3b);
  pillow.add(p2a);
  pillow.add(p2b);
  pillow.add(p1);


  return pillow;
};


  lettinoVisita.name = this.id;
  lettinoVisita.feature = this;
  var model = Feature.packageModel(lettinoVisita);
  return model;
};

module.exports = LettinoVisita;
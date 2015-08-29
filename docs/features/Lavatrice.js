var Feature = require('./Feature.js');

Feature.inherits(Lavatrice, Feature);

function Lavatrice(feature) {
    Feature.call(this, feature);
}

Lavatrice.prototype.style = {
                            prefix: "fa",
                            icon: "medkit",
                            zIndex: 3
                        };

Lavatrice.prototype.in_graph = true;

Lavatrice.prototype.in_2D_map = false;

Lavatrice.prototype.get3DModel = function() {

	  //colors
      var grigio = new THREE.MeshLambertMaterial({color : 0x808080});
      var grigioSpeciale = new THREE.MeshLambertMaterial({color : 0x808080,side:THREE.DoubleSide});
      var grigioChiaro = new THREE.MeshLambertMaterial({color : 0xD3D3D3});
      var celesteMetallo = new THREE.MeshLambertMaterial({color : 0xB0C4DE});
      var bianco = new THREE.MeshLambertMaterial({color : 0xFFFFFF});
      var nero = new THREE.MeshLambertMaterial({color : 0x000000});
      var turchese = new THREE.MeshLambertMaterial({color : 0x43C6DB,opacity :0.7,transparent: true});
      var verdeAzzurrino = new THREE.MeshLambertMaterial({color : 0x33CCCC});
      var blue = new THREE.MeshLambertMaterial({color : 0x0033CC});
      var rosso= new THREE.MeshLambertMaterial({color : 0xcc0033});
      
      var dettaglio =1;
      var lavatrice = creaLavatrice();

      function creaLavatrice () {
        var lavatrice = new THREE.Object3D();
        var facciataFrontale = creaFacciataFrontale();
        var geometriaFacciataSuperiore = new THREE.BoxGeometry(0.62,0.02,0.595);
        var geometriaFacciataLaterale = new THREE.BoxGeometry(0.6,0.85,0.02);
        var geometriaFacciataPosteriore = new THREE.BoxGeometry(0.02,0.83,0.57);
        var geometriaBase = new THREE.BoxGeometry(0.57,0.02,0.57);
        var facciataSuperiore = new THREE.Mesh( geometriaFacciataSuperiore, bianco);
        var facciataLaterale1 = new THREE.Mesh( geometriaFacciataLaterale, bianco);
        var facciataLaterale2 = new THREE.Mesh( geometriaFacciataLaterale, bianco);
        var facciataPosteriore = new THREE.Mesh( geometriaFacciataPosteriore, grigio);
        var base = new THREE.Mesh( geometriaBase, nero);
        facciataFrontale.position.set(0.13,0,0);
        facciataSuperiore.position.set(0.004,0.85,0);
        facciataLaterale1.position.set(-0.0061,0.87/2,-0.575/2);
        facciataLaterale2.position.set(-0.0061,0.87/2,0.575/2);
        facciataPosteriore.position.set(-0.28,0.85/2,0);
        base.position.y =0.015;
        lavatrice.add(base);
        lavatrice.add(facciataPosteriore)
        lavatrice.add(facciataLaterale1);
        lavatrice.add(facciataLaterale2);
        lavatrice.add(facciataSuperiore);
        lavatrice.add(facciataFrontale);
        return lavatrice;
      }

       function creaFacciataFrontale () {
        var facciataFrontale = new THREE.Object3D();
        var geometriaCopriPulsante = new THREE.SphereGeometry(0.025,Math.round(dettaglio*32),Math.round(dettaglio*32));
        var geometriaPulsante = new THREE.CylinderGeometry(0.025,0.025,0.07,Math.round(dettaglio*32));
        var geometriaPulsante1 = new THREE.CylinderGeometry(0.025,0.025,0.05,Math.round(dettaglio*32));
        var geometriaPulsante3 = new THREE.CylinderGeometry(0.005,0.005,0.05,Math.round(dettaglio*32));
        var geometriaFacciata1 =new THREE.TorusGeometry(0.225,0.07,Math.round(dettaglio*32),Math.round(dettaglio*64));
        var geometriaFacciata2 = new THREE.BoxGeometry(0.02,0.2,0.595);
        var geometriaFacciata2b = new THREE.BoxGeometry(0.02,0.17,0.595);
        var geometriaFacciata3 = new THREE.BoxGeometry(0.02,0.4,0.126);
        var geometriaFacciata4 = new THREE.BoxGeometry(0.03,0.09,0.595);
        var geometriaFacciata5 = new THREE.BoxGeometry(0.03,0.09,0.595);
        var facciata1 = new THREE.Mesh( geometriaFacciata1, bianco);
        var facciata2a = new THREE.Mesh( geometriaFacciata2, bianco);
        var facciata2b = new THREE.Mesh( geometriaFacciata2b, bianco);
        var facciata3a = new THREE.Mesh( geometriaFacciata3, bianco);
        var facciata3b = new THREE.Mesh( geometriaFacciata3, bianco);
        var facciata4 = new THREE.Mesh( geometriaFacciata4, bianco);
        var facciata5 = new THREE.Mesh( geometriaFacciata5, bianco);
        var pulsante1 = new THREE.Mesh( geometriaPulsante, bianco);
        var pulsante1a = new THREE.Mesh( geometriaPulsante1, bianco);
        var pulsante2 = new THREE.Mesh( geometriaPulsante1, celesteMetallo);
        var pulsante2a = new THREE.Mesh( geometriaCopriPulsante, verdeAzzurrino);
        var pulsante3 = new THREE.Mesh( geometriaPulsante3 , nero);
        var pulsante4 = new THREE.Mesh( geometriaPulsante3 , blue);
        var pulsante5 = new THREE.Mesh( geometriaPulsante3 , verdeAzzurrino);
        var pulsante6 = new THREE.Mesh( geometriaPulsante3 , rosso);
        var centrifuga = creaCentrifuga();
        centrifuga.position.y =1/2;
        facciata1.position.x =0.16;
        facciata1.rotation.y =Math.PI/2;
        facciata1.scale.z =0.065; 
        facciata2a.position.set(0.1539,-0.3,0);
        facciata2b.position.set(0.1539,0.23,0);
        facciata3a.position.set(0,(0.2+0.4)/2,-(0.595-0.126)/2);
        facciata3b.position.set(0,(0.2+0.4)/2,(0.595-0.126)/2);
        facciata4.position.set(0.01/2,0.17/2,0);
        facciata5.position.set(0.005,-0.1 -0.09/2,0);
        pulsante1.position.set(0,-0.01,0.23);
        pulsante1.rotation.x =Math.PI/2;
        pulsante1a.position.y =-0.07/2-0.05/2 -0.02;
        pulsante2.rotation.z =Math.PI/2;
        pulsante2.position.set(0.005,-0.01,0);
        pulsante2a.position.y =-0.05/2;
        pulsante2a.scale.y =0.3; 
        pulsante3.position.set(0.01,0.01,-0.1);
        pulsante4.position.z =-0.015;
        pulsante5.position.z =-0.015;
        pulsante6.position.z =-0.015;
        pulsante1.add(pulsante1a);
        facciata4.add(pulsante1);
        facciata4.add(pulsante2);
        pulsante5.add(pulsante6);
        pulsante4.add(pulsante5);
        pulsante3.add(pulsante4);
        pulsante2.add(pulsante3);
        pulsante2.add(pulsante2a);
        facciata2b.add(facciata4);
        facciata2a.add(facciata5);
        facciata2a.add(facciata3a);
        facciata2a.add(facciata3b);
        centrifuga.add(facciata2b);
        centrifuga.add(facciata2a);
        centrifuga.add(facciata1);
        facciataFrontale.add(centrifuga);
        return facciataFrontale
      }


      function creaCentrifuga () {
        var centrifuga = new THREE.Object3D();
        var geometriaInterno = new THREE.CylinderGeometry(0.171,0.171,0.35,Math.round(dettaglio*32),1,1);
        var geometriaInterno2 = new THREE.CylinderGeometry(0.17,0.17,0.01,Math.round(dettaglio*32));
        var geometriaOblo =new THREE.TorusGeometry(0.18,0.03,Math.round(dettaglio*32),Math.round(dettaglio*64));
        var interno = new THREE.Mesh( geometriaInterno, grigioSpeciale);
        var interno2 = new THREE.Mesh( geometriaInterno2, grigio);
        var oblo = new THREE.Mesh( geometriaInterno2, turchese);
        var oblo2 = new THREE.Mesh( geometriaOblo, bianco);
        interno.rotation.z =-Math.PI/2;
        interno2.position.y =(-0.35+0.01)/2;
        oblo.position.y =(0.35-0.01)/2;
        oblo2.rotation.x =Math.PI/2;
        oblo2.scale.z =0.5; 
        oblo.add(oblo2);
        interno.add(oblo);
        interno.add(interno2);
        centrifuga.add(interno);
        return centrifuga;
      }





	    lavatrice.name = this.id;
    lavatrice.feature = this;
    var model = Feature.packageModel(lavatrice);
    return model;
};

module.exports = Lavatrice;
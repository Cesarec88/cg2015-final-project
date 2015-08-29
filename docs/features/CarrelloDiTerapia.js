var Feature = require('./Feature.js');

Feature.inherits(CarrelloDiTerapia, Feature);

function CarrelloDiTerapia(feature) {
	Feature.call(this, feature);
}

CarrelloDiTerapia.prototype.style = {
			    			prefix: "fa",
	    					icon: "medkit",
	    					zIndex: 3
						};

CarrelloDiTerapia.prototype.in_graph = true;

CarrelloDiTerapia.prototype.in_2D_map = true;

CarrelloDiTerapia.prototype.get3DModel = function() {
	//TO DO
	  var white_material = new THREE.MeshLambertMaterial({color: 0xFFFFFF});
      var gray_material = new THREE.MeshLambertMaterial({color : 0xa9a9a9 });
      var green_material = new THREE.MeshLambertMaterial({color : 0x42C7AD});
      var black_material = new THREE.MeshLambertMaterial({color : 0x000000});

      var o0 = new THREE.Object3D( );
      var detail = 0.5;

      o0.scale.set(0.1,0.1,0.1);
      o0.rotation.x = Math.PI/2;


      var carrelBase_geometry = new THREE.BoxGeometry( 7 , 0.5 , 5 );
      var carrelBase = new THREE.Mesh(carrelBase_geometry, gray_material);
      carrelBase.position.y = 0.5 + 2;
      o0.add( carrelBase);

      var carrelWall_geometry = new THREE.BoxGeometry( 7 , 11 , 0.5 );
      var carrelWall = new THREE.Mesh(carrelWall_geometry, gray_material);
      carrelWall.position.y = 11/2 -0.5/2;
      carrelWall.position.z = -3 + 0.5/2;
      carrelBase.add( carrelWall);

      var carrelWallLeft_geometry = new THREE.BoxGeometry( 0.3 , 11 , 5 );
      var carrelWallLeft = new THREE.Mesh(carrelWallLeft_geometry, gray_material);
      carrelWallLeft.position.y = 11/2 -0.5/2;
      carrelWallLeft.position.x = 7/2 -0.3/2;
      carrelBase.add( carrelWallLeft);


      var carrelWallRight_geometry = new THREE.BoxGeometry( 0.3 , 11 , 5 );
      var carrelWallRight = new THREE.Mesh(carrelWallRight_geometry, gray_material);
      carrelWallRight.position.y = 11/2 -0.5/2;
      carrelWallRight.position.x = -7/2 +0.3/2;
      carrelBase.add( carrelWallRight);

      var o2 = new THREE.Object3D();
      o2.rotation.y = Math.PI;
      o2.position.x = -0.3/2;
      carrelWallRight.add(o2);

      var carrelShelf_geometry = new THREE.BoxGeometry( 3  , 0.1 , 5 );
      carrelShelf = new THREE.Mesh(carrelShelf_geometry, white_material);
      carrelShelf.rotation.z = Math.PI;
      carrelShelf.position.x = 1.5;
      carrelShelf.position.y = 4;
      o2.add(carrelShelf);

      var carrelHandle = createCarrelHandle();
      carrelHandle.rotation.z = Math.PI/2;
      carrelHandle.rotation.y = -Math.PI/2;
      carrelHandle.position.y =5;
      carrelHandle.position.x = 0.6;
      o2.add(carrelHandle);


      var o3 = new THREE.Object3D();
      o3.position.x = 0.3/2;
      carrelWallLeft.add(o3);

      var carrelBasket = createCarrelBasket();
      carrelBasket.position.y = 1.5;
      carrelBasket.position.x = 1;
      o3.add(carrelBasket);


      var o1 = new THREE.Object3D();
      carrelBase.add(o1);
      o1.position.z = 5/2 - 0.5/2;
      var closetHeight = 5/2;
      var closet1 = createCloset(closetHeight)
      closet1.position.y = 5/4 + 0.5/2;
      o1.add(closet1);

      var closet2 = createCloset(closetHeight);
      closet2.position.y = 5/2 + 0.1; ;
      closet1.add(closet2);

      closetHeight = 5 / 3;
      var closet3 = createCloset(closetHeight);
      closet3.position.y = 5/3 + 0.5; ;
      closet2.add(closet3);

       var closet4 = createCloset(closetHeight);
       closet4.position.y = 5/3 + 0.1; ;
       closet3.add(closet4);

       var closet5 = createCloset(closetHeight);
       closet5.position.y = 5/3 + 0.1; ;
       closet4.add(closet5);


       var carrelUpperPart_geometry = new THREE.BoxGeometry( 7 , 0.5 , 5.5 );
       var carrelUpperPart = new THREE.Mesh(carrelUpperPart_geometry, gray_material);
       carrelUpperPart.position.y = 11 ;
       carrelUpperPart.position.z = -0.5/2;
       carrelBase.add(carrelUpperPart);


       var carrelTop_geometry = new THREE.BoxGeometry( 7.3 , 0.3 , 5.7 );
       var carrelTop = new THREE.Mesh(carrelTop_geometry, white_material);
       carrelTop.position.y = 0.5/2;
       carrelUpperPart.add(carrelTop);

       var carrelTopBoarder1_geometry = new THREE.CylinderGeometry( 0.5/2 , 0.5/2 , 6.8 ,Math.round(32*detail) );//THREE.BoxGeometry( 7.3 , 0.5 , 0.5 );
       var carrelTopBoarder1a_geometry = new THREE.SphereGeometry(0.5/2 , Math.round(32*detail) , Math.round(32*detail));
       var carrelTopBoarder1a = new THREE.Mesh(carrelTopBoarder1a_geometry, white_material);
       var carrelTopBoarder1b = new THREE.Mesh(carrelTopBoarder1a_geometry, white_material);
       var carrelTopBoarder1 = new THREE.Mesh(carrelTopBoarder1_geometry, white_material);
       carrelTopBoarder1.rotation.z = Math.PI/2;
       carrelTopBoarder1.position.y = 0.3/2;
       carrelTopBoarder1.position.z = -5.7/2 + 0.25;
       carrelTopBoarder1a.position.y = 3+0.8/2;
       carrelTopBoarder1b.position.y = -3 -0.8/2;
       carrelTopBoarder1.add(carrelTopBoarder1a);
       carrelTopBoarder1.add(carrelTopBoarder1b);
       carrelTop.add(carrelTopBoarder1);

       var carrelTopBoarder2_geometry = new THREE.CylinderGeometry( 0.5/2 , 0.5/2 , 5.2 ,Math.round(32*detail) );//THREE.BoxGeometry( 7.3 , 0.5 , 0.5 );
       var carrelTopBoarder2a = new THREE.Mesh(carrelTopBoarder1a_geometry, white_material);
       var carrelTopBoarder2b = new THREE.Mesh(carrelTopBoarder1a_geometry, white_material);
       var carrelTopBoarder2left = new THREE.Mesh(carrelTopBoarder2_geometry, white_material);
       var carrelTopBoarder2right = new THREE.Mesh(carrelTopBoarder2_geometry, white_material);
       carrelTopBoarder2right.rotation.x = Math.PI/2;
       carrelTopBoarder2left.rotation.x = Math.PI/2;
       carrelTopBoarder2left.position.z = 5.2/2;
       carrelTopBoarder2right.position.z = 5.2/2;
       carrelTopBoarder2a.position.y = 5.2/2;
       carrelTopBoarder2b.position.y = 5.2/2;
       carrelTopBoarder2left.add(carrelTopBoarder2a);
       carrelTopBoarder2right.add(carrelTopBoarder2b);
       carrelTopBoarder1a.add(carrelTopBoarder2left);
       carrelTopBoarder1b.add(carrelTopBoarder2right);

       var carrelWheel1 = createWheel()
       carrelWheel1.rotation.y= -Math.PI/2;
       carrelWheel1.rotation.z= Math.PI/2;
       carrelWheel1.position.y= 1.1;
       carrelWheel1.position.x= 2.5;
       carrelWheel1.position.z= 2;
       o0.add(carrelWheel1);

       var carrelWheel2 = createWheel()
       carrelWheel2.rotation.y= -Math.PI/2;
       carrelWheel2.rotation.z= Math.PI/2;
       carrelWheel2.position.y= 1.1;
       carrelWheel2.position.x= 2.5;
       carrelWheel2.position.z= -2;
       o0.add(carrelWheel2);

       var carrelWheel3 = createWheel()
       carrelWheel3.rotation.y= -Math.PI/2;
       carrelWheel3.rotation.z= Math.PI/2;
       carrelWheel3.position.y= 1.1;
       carrelWheel3.position.x= -2.5;
       carrelWheel3.position.z= -2;
       o0.add(carrelWheel3);

      var carrelWheel4 = createWheel()
      carrelWheel4.rotation.y= -Math.PI/2;
      carrelWheel4.rotation.z= Math.PI/2;
      carrelWheel4.position.y= 1.1;
      carrelWheel4.position.x= -2.5;
      carrelWheel4.position.z= +2;
      o0.add(carrelWheel4);




function createWheel(){
       var wheelOutside_geometry = new THREE.CylinderGeometry(0.9 , 0.9 , 0.38 , Math.round(64*detail));
       var wheelInside_geometry = new THREE.CylinderGeometry(0.7, 0.7, 0.4 , Math.round(32*detail) );
       var wheelSusteiner_geometry = new THREE.CylinderGeometry(0.15,0.15, 0.4 , Math.round(32*detail));
       var wheelSusteiner2_geometry = new THREE.CylinderGeometry(0.7, 0.7, 0.3 , Math.round(32*detail) );
       var wheelSusteiner3_geometry = new THREE.BoxGeometry(0.3, 1, 0.8 );
       var wheelSusteiner3 = new THREE.Mesh(wheelSusteiner3_geometry, gray_material);
       var wheelSusteiner2 = new THREE.Mesh(wheelSusteiner2_geometry, gray_material);
       var wheelSusteiner = new THREE.Mesh(wheelSusteiner_geometry, gray_material);
       var wheelInside = new THREE.Mesh(wheelInside_geometry , gray_material);
       var wheelOutside = new THREE.Mesh(wheelOutside_geometry , black_material);
       wheelSusteiner3.rotation.z = Math.PI/2;
       wheelSusteiner3.position.x = 0.5;
       wheelSusteiner.position.y = 0.4;
       wheelSusteiner.position.x = 0.2;
       wheelInside.add(wheelSusteiner);
       wheelSusteiner.add(wheelSusteiner2)
       wheelSusteiner2.add(wheelSusteiner3)
       wheelInside.add( wheelOutside) ;
       return wheelInside
     }




       function createCarrelBasket(){

         var carrelBasket_geometry = new THREE.BoxGeometry( 2 , 4 , 3 );
         var carrelBasketCover_geometry = new THREE.BoxGeometry( 2.3 , 0.25 , 3.3 );
         var carrelBasket = new THREE.Mesh(carrelBasket_geometry, white_material);
         var carrelBasketCover = new THREE.Mesh(carrelBasketCover_geometry, white_material);

         carrelBasketCover.position.y= 2 + 0.25/2;
         carrelBasketCover.position.x=0.3/2;
        //  carrelBasketCover.position.z=0.3;


         carrelBasket.add(carrelBasketCover);


         return carrelBasket ;
       }



       function createCarrelHandle(){
         var carrelHandle_geometry = new THREE.CylinderGeometry( 0.2 , 0.2 , 3.5 , Math.round(32*detail) );
         var carrelHandleJoint_geometry = new THREE.CylinderGeometry(0.2 , 0.2 , 1 , Math.round(32*detail) );
         var carrelHandleBall_geometry = new THREE.SphereGeometry( 0.2 , Math.round(32*detail) , Math.round(32*detail) );
         var carrelHandle = new THREE.Mesh(carrelHandle_geometry, green_material);
         var carrelHandleBottom = new THREE.Mesh( carrelHandleBall_geometry, green_material);
         var carrelHandleTop = new THREE.Mesh( carrelHandleBall_geometry, green_material);
         var carrelHandleJointBottom = new THREE.Mesh(carrelHandleJoint_geometry, green_material);
         var carrelHandleJointTop = new THREE.Mesh(carrelHandleJoint_geometry, green_material);

         carrelHandleTop.position.y = 3.5/2;
         carrelHandleBottom.position.y = -3.5/2;
         carrelHandleJointTop.position.z = 0.5;
         carrelHandleJointBottom.position.z = 0.5;
         carrelHandleJointTop.rotation.x = Math.PI/2;
         carrelHandleJointBottom.rotation.x = Math.PI/2;
         carrelHandle.add(carrelHandleTop);
         carrelHandleTop.add(carrelHandleJointTop);
         carrelHandle.add(carrelHandleBottom);
         carrelHandleBottom.add(carrelHandleJointBottom);

         return carrelHandle ;
       }




function createCloset(closetHeight){
      var closet_geometry = new THREE.BoxGeometry( 7-0.6 , closetHeight , 0.5 );
      var closet = new THREE.Mesh(closet_geometry, green_material);

      // carrelBase.add(firstCloset);
      var closetHandle1_geometry = new THREE.CylinderGeometry( 0.1 , 0.1 , 4 , Math.round(32*detail) );
      var closetHandle1 = new THREE.Mesh(closetHandle1_geometry , white_material);
      closetHandle1.rotation.z = Math.PI/2;
      closetHandle1.position.y = closetHeight/4;
      closetHandle1.position.z =0.5 + 0.08;
      var closetHandle2_geometry = new THREE.CylinderGeometry( 0.07 , 0.07 , 0.4 , Math.round(32*detail) );
      var closetHandle2a = new THREE.Mesh(closetHandle2_geometry , white_material);
      closetHandle2a.rotation.x = Math.PI/2;
      closetHandle2a.position.y = 1.5;
      closetHandle2a.position.z =-0.15;
      closetHandle1.add(closetHandle2a);
      var closetHandle2b = new THREE.Mesh(closetHandle2_geometry , white_material);
      closetHandle2b.rotation.x = Math.PI/2;
      closetHandle2b.position.y = -1.5;
      closetHandle2b.position.z =-0.15;
      closetHandle1.add(closetHandle2b);
      var blackThick_geometry = new THREE.BoxGeometry( 7-0.6 , 0.05 , 0.5 );
      var blackThick = new THREE.Mesh(blackThick_geometry, black_material);
      blackThick.position.y = closetHeight/2 + 0.05;
      closet.add(blackThick);
      closet.add(closetHandle1);

      return closet;
    }

	o0.name = this.id;
	o0.feature = this;
	var model = Feature.packageModel(o0);
	return model;
};

module.exports = CarrelloDiTerapia;
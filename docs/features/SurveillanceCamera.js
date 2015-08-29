var Feature = require('./Feature.js');

Feature.inherits(SurveillanceCamera, Feature);

function SurveillanceCamera(feature) {
	Feature.call(this, feature);
}

SurveillanceCamera.prototype.style = {
									    prefix: "fa",
									    icon: "video-camera",
									    zIndex: 3
    								};

SurveillanceCamera.prototype.in_graph = true;
SurveillanceCamera.prototype.in_2D_map = true;

SurveillanceCamera.prototype.get3DModel = function() {
	var blue = new THREE.MeshLambertMaterial( {color: 0x38a9dc} );
	var nero = new THREE.MeshLambertMaterial( {color: 0x000000} );
	var bianco = new THREE.MeshLambertMaterial( {color: 0xFFFFFF} );
    var grigioChiaro = new THREE.MeshLambertMaterial({color : 0xD3D3D3});

	var camera = new THREE.Object3D();

	//Creazione corpo macchina
	var widthBody = 0.2;
	var depthBody = 0.1;
	var heightBody = 0.1;

	var bodyCameraGeometry = new THREE.BoxGeometry(widthBody, depthBody, heightBody);
	var bodyCamera = new THREE.Mesh( bodyCameraGeometry, nero );
	bodyCamera.name = "bodyCamera_" + this.id;

	//Creazione obiettivo
	var radiusTopCameraLens = 0.04;
	var radiusBottomCameraLens = 0.05;
	var heightCylinderCamenraLens =  0.07;
	var cameraLensGeometry = new THREE.CylinderGeometry(radiusTopCameraLens, radiusBottomCameraLens, heightCylinderCamenraLens, 32 );
	var cameraLens = new THREE.Mesh( cameraLensGeometry, bianco );
	cameraLens.name = "cameraLens_" + this.id;
	cameraLens.rotation.z = Math.PI/2;
	cameraLens.position.x += 2*widthBody/3;

	var LensGeometry = new THREE.CylinderGeometry(radiusTopCameraLens ,radiusTopCameraLens ,0.01,32,32);
	var Lens = new THREE.Mesh(LensGeometry,blue);
	Lens.position.y =-0.035 -0.005;


	//Creazione asse sostegno
	var radiusTopRod = 0.005;
	var radiusBottomRod = 0.005;
	var heightRod = 0.15;

	var rodGeometry = new THREE.CylinderGeometry(radiusTopRod, radiusBottomRod, heightRod, 32 );
	var rod = new THREE.Mesh( rodGeometry, nero );
	rod.name = "rod_" + this.id;
	rod.rotation.z = Math.PI/2;
	rod.position.x -= widthBody/2;

	camera.add(bodyCamera);
	camera.add(cameraLens);
	cameraLens.add(Lens);

	camera.receiveShadow = true;
	camera.castShadow = true;

	camera.rotation.y += Math.PI*1/9;
	
	camera.feature = this;
	camera.name = this.id;

	var model = Feature.packageModel(camera);
	return model;
};

module.exports = SurveillanceCamera;

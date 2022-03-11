



function threejs(){
   
   
   
// const loader = new GLTFLoader();

// loader.load( 'C:/Users/Danish Khan/Documents/Website Work/Danish Khan/Src/matilda/scene.gltf', function ( gltf ) {

// 	scene.add( gltf.scene );

//     renderer.render(scene,camera)

// }, undefined, function ( error ) {

// 	console.error( error );

// } );


   
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff)
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

    const renderer = new THREE.WebGLRenderer({canvas: document.querySelector('#bg'), })
    ;
    renderer.setPixelRatio(windows.devicePixelRatio);
    renderer.setSize( window.innerWidth, window.innerHeight );
    // document.body.appendChild( renderer.domElement );

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial( { color: 0xf4f4f4 } );
    const cube = new THREE.Mesh( geometry, material );
    scene.add( cube );
 





    camera.position.z = 5;

    function animate() {
        requestAnimationFrame( animate );

        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        renderer.render( scene, camera );
    };

    animate();
}
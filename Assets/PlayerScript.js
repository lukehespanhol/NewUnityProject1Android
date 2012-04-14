#pragma strict

function Start () {

}

var playerSpeed : int;
static var playerScore : int;


function Update () {


// assuming device is held parallel to the ground and home button is in the right hand
var dir : Vector3 = Vector3.zero;

	dir.x = -Input.acceleration.y;
	dir.y = Input.acceleration.x;

	//clamp acceleration vector to the unit sphere
	if (dir.sqrMagnitude > 1)
	dir.Normalize();

	// Make it move 10 meters per second instead of 10 meters per frame...
	dir *= Time.deltaTime;

	// Move object
	transform.Translate (dir * playerSpeed);


}

function OnGUI (){


GUI.Label(Rect(10,10,200,50),"Score:" + playerScore);

if(GUI.Button(Rect(10,Screen.height-50,50,50), "Reset")){
	Application.LoadLevel("Level 1");
	playerScore=0;
}

}

function OnTriggerEnter(otherObject:Collider){

otherObject.gameObject.tag == "PU";
otherObject.gameObject.transform.position.x = -7;
otherObject.gameObject.transform.position.y = Random.Range(-5,5);

playerScore ++;


}
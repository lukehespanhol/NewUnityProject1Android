#pragma strict

function Start () {

}

var PUSpeed : int;
var amtToMoveH : float;

function Update () {

amtToMoveH = PUSpeed * Time.deltaTime;

transform.Translate(Vector3.right * amtToMoveH);

if (transform.position.x >= 7){

transform.position.x = -7;
transform.position.y = Random.Range(-6,6);

}

}


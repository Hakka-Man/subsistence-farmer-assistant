var subsistenceCount = 0;
var farmCount = 0;
var subsistence = 'Subsistence';
var farmer = 'Farmer Assistant.';
var speed = 50;

function subsistenceTypeWriter() {
  if (subsistenceCount < subsistence.length) {
    document.getElementById("subsistence").innerHTML += subsistence.charAt(subsistenceCount);
    subsistenceCount++;
    setTimeout(subsistenceTypeWriter, speed);
    }else{
        farmertypeWriter()
    }
}

function farmertypeWriter() {
  if (farmCount < farmer.length) {
    document.getElementById("farmer").innerHTML += farmer.charAt(farmCount);
    farmCount++;
    setTimeout(farmertypeWriter, speed);
  }
}

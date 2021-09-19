var subsistenceCount = 0;
var farmCount = 0;
var buyCount = 0;
var subsistence = 'Subsistence';
var farmer = 'Farmer Assistant.';
var buy = "Buy or Sell Fresh Produce!";
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
  }else{
    buytypeWriter()
  }
}

function buytypeWriter() {
  if (buyCount < buy.length) {
    document.getElementById("buy").innerHTML += buy.charAt(buyCount);
    buyCount++;
    setTimeout(farmertypeWriter, speed);
  }
}

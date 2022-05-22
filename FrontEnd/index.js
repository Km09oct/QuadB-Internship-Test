const myFunction = () => {
  let checkBox = document.getElementById("myCheck");
  if (checkBox.checked == true) {
    if ($(".cryptoBtn").hasClass("theme-dark")) {
    } else {
      $("#container").addClass("theme-dark");
      $("#container").removeClass("theme-light");
    }
    if (
      $(".cryptoBtn").hasClass("theme-dark") &&
      $(".cryptoBtn").hasClass("white")
    ) {
    }
    if ($(".cryptoBtn").hasClass("theme-light")) {
      $(".cryptoBtn").addClass("theme-dark");
      $(".cryptoBtn").addClass("white");
      $(".cryptoBtn").removeClass("theme-light");
      $(".cryptoBtn").removeClass("black");
    }
    if ($("#cryptorow").hasClass("theme-dark")) {
    } else {
      $("#cryptorow").addClass("theme-dark");
      $("#cryptorow").addClass("white");
      $("#cryptorow").removeClass("theme-light");
      $("#cryptorow").removeClass("black");
    }
    $("#cryptomoney").css("color", "white");
  } else {
    $("#container").addClass("theme-light");
    $("#container").removeClass("theme-dark");
    $(".cryptoBtn").addClass("theme-light");
    $(".cryptoBtn").addClass("black");
    $(".cryptoBtn").removeClass("theme-dark");
    $(".cryptoBtn").removeClass("white");
    $("#cryptomoney").css("color", "#0c0f48");
    $("#cryptorow").removeClass("theme-dark");
    $("#cryptorow").removeClass("white");
    $("#cryptorow").addClass("theme-light");
    $("#cryptorow").addClass("black");
  }
};

const changeCrypto = (name) => {
  document.getElementById('crypto1').innerText = name;
  document.getElementById('crypto3').innerText = name;
  fetchData(name);
};

const fetchData = (name) => {
  let url
  if(name === 'BTC') url = 'http://localhost:3000/BTC-INR';
  if(name === 'XRP') url = 'http://localhost:3000/XRP-INR';
  if(name === 'ETH') url = 'http://localhost:3000/ETH-INR';
  if(name === 'TRX') url = 'http://localhost:3000/TRX-INR';
  if(name === 'EOS') url = 'http://localhost:3000/EOS-INR';
  if(name === 'ZIL') url = 'http://localhost:3000/ZIL-INR';
  if(name === 'BAT') url = 'http://localhost:3000/BAT-INR';
  if(name === 'ZRX') url = 'http://localhost:3000/ZRQ-INR';
  if(name === 'REQ') url = 'http://localhost:3000/REQ-INR';
  if(name === 'NULS') url = 'http://localhost:3000/NULS-INR';
  fetch(url)
  .then((data) => {
    return data.json();
  })
  .then((jsonData) => {
    let json = jsonData[0];
    console.log(json);
    tablefill(json);
  })
  .catch((err) => console.log(err));
}

const tablefill = (json) =>{
  document.getElementById('no').innerText = '1';
  document.getElementById('name').innerText = json.id;
  document.getElementById('last').innerText = json.last.toString();
  document.getElementById('buy-sell').innerText = json.buy.toString() + ' / ' + json.sell.toString();
  document.getElementById('volume').innerText = json.volume.toString();
  document.getElementById('base-unit').innerText = json.base_unit;
}

$(document).ready(function() {
  var decToHex = function(n) {
    return parseInt(n, 10).toString(16);
  };

  var hexToDec = function(n) {
    return parseInt(n, 16).toString(10);
  };

  var padToSix = function(hexString) {
    while (hexString.length % 6 !== 0) {
      hexString += "0";
    }
    return hexString;
  };

  $("#inputStr").keyup(function() {
    var inputStr = $("#inputStr").val().toLowerCase();
    var hexString;
    if (inputStr === "") {
      hexString = "FFFFFF";
    } else {
      var inputStrArr = inputStr.split("");
      hexString = padToSix(_.map(inputStrArr, function(char) {
        return decToHex(char.charCodeAt());
      }).join(""));

      while (hexString.length !== 6) {
        var hexStringArr = hexString.match(/.{2}/g);
        hexString = padToSix(_.map(hexStringArr, function(doubleChar) {
          var doubleCharSplit = doubleChar.split("");
          var sum = parseInt(hexToDec(doubleCharSplit[0])) + parseInt(hexToDec(doubleCharSplit[1]));
          return decToHex(sum);
        }).join(""));
      }
    }

    $(".hex").html("#" + hexString);
    $("body").css("background-color", "#" + hexString);
  });
});

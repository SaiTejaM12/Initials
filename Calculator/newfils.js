function getAction() {
  return document.getElementById("display_actions_value").innerText;
}
function printAction(num) {
  return (document.getElementById("display_actions_value").innerText = num);
}

function getResult() {
  return document.getElementById("result_value").innerText;
}
function printResult(num) {
  if (num == "") {
    document.getElementById("result_value").innerText = num;
  } else {
    return (document.getElementById("result_value").innerText = num);
  }
}
var number = document.getElementsByClassName("number");
for (var i = 0; i < number.length; i++) {
  if (i > 10) break;
  else {
    number[i].addEventListener("click", function() {
      var output = getResult();
      if (output != NaN) {
        output = output + this.id;
        printResult(output);
      }
    });
  }
}

var operator = document.getElementsByClassName("operator");
for (var i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function() {
    if (this.id == "clear") {
      printAction("");
      printResult("");
    } else if (this.id == "delete") {
      var output = getResult();
      if (output != NaN) {
        output = output.substr(0, output.length - 1);
        printResult(output);
      }
    } else {
      var output = getResult();
      var action = getAction();
      if (output != "") {
        action = action + output;
        if (this.id == "=") {
          var result = eval(action);
          printAction(result);
          printResult(result);
          setTimeout(function() {
            printResult("");
            printAction("");
          }, 15000);
        } else if (this.id == ".") {
          var output = getResult();
          if (output != NaN) {
            output = output + this.id;
            printResult(output);
          }
        } else if (this.id == "+-") {
          var x = -1;
          var result = getResult() * x;
          printResult(result);
        } else {
          action = action + this.id;
          printAction(action);
          printResult("");
        }
      }
    }
  });
}

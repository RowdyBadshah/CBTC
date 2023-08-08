for (var i = 0; i < document.querySelectorAll(".vlaue").length - 1; i++) {
  document.querySelectorAll(".vlaue")[i].addEventListener("click", function () {
    var val = this.innerHTML;
    document.querySelector(".input-content").value += val;
  });
}

function calculate() {
  let x = document.querySelector(".input-content").value;
  let y = eval(x);
  document.querySelector(".input-content").value = y;
}

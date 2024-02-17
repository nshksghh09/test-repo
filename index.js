console.log("hello world");
alert("add hello world on this web page");
document.getElementById("btn").addEventListener("click", () => {
  let content = document.getElementById("cont").innerHTML;
  document.getElementById("cont").innerHTML = content + "hello world";
});

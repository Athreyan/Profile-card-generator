var loadfile = function (event) {
  var image = document.getElementById("output");
  image.src = URL.createObjectURL(event.target.files[0]);
};

function myFunction() {
  var name = document.getElementById("name").value;
  var quote = document.getElementById("quote").value;
  var ph_number = document.getElementById("ph_number").value;
  var twitter = document.getElementById("twitter").value;
  var github = document.getElementById("github").value;


  var n = (document.getElementById("nameoncard").innerHTML = name);
  var n = (document.getElementById("title").innerHTML = quote);
  var n = (document.getElementById("number").innerHTML = ph_number);
  var n = (document.getElementById("twitter").innerHTML = twitter);
  var n = (document.getElementById("github").innerHTML = github);
  var filesSelected = document.getElementById("image").files;
  var imageLoaded = document.getElementById("coverPic");

  if (filesSelected.length > 0) {
    var filesLoad = filesSelected[0];
    if (filesLoad.type.match("image.*")) {
      var fileReader = new FileReader();
      fileReader.onload = function (fileLoadedEvent) {
        imageLoaded.src = fileLoadedEvent.target.result;
        //console.log("kkkk")
      };
      fileReader.readAsDataURL(filesLoad);
    }
  }
}

var total = 200;
$(document).ready(function(){
    $("#character").html('200')
    console.log("abc")
    $("#questionInput").keyup(function(){
        $("#character").html(200-$("#questionInput").val().length)
    })
})
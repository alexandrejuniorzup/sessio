$(function () {
    var socket = io.connect("http://localhost:3000/chat")

     $('#chat').submit(function(event){
         event.preventDefault();
    //
    //     socket.emit("send", { msg: messages });
    //
     });

    $("#messages").keypress(function(e){
        if(e.which == 13) {
            var text = $("#messages").val();
            $("#messages").val('');
            socket.emit("send", text);
        }
    });




});
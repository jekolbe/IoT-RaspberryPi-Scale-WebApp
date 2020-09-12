"use strict";

var connection = new signalR.HubConnectionBuilder().withUrl("/messageHub").build();

connection.start().then(function () {
    console.log("connected");
});

connection.on("ReceiveMessage", function (device, message) {
    var msg = message.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    var encodedMsg = device + " says " + msg;
    var json = JSON.parse(msg);
    var li = document.createElement("li");
    li.textContent = encodedMsg;
    document.getElementById("weight").innerHTML = Math.round(json.weight) + " Gramm";
    //document.getElementById("messagesList").appendChild(li);
});
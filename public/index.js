const previewBtn = document.getElementById('btn1');

previewBtn.addEventListener('click', () => {

    const ssid = document.getElementById('ssid').value;
    const password =  document.getElementById('password').value;
    
    if(ssid !== '' && password !== ''){
        console.log(ssid+'->'+password);
        var temp = "WIFI:T:WPA;S:"+ssid+";P:"+password+";";
        var v = new QRCode(document.getElementById("qr-code"), {
            text: temp,
            width: 128,
            height: 128
        });
        document.getElementById('network').innerText = ssid;
        document.getElementById('pass').innerText = password;
    }
});


const previewBtn = document.getElementById('btn1');

previewBtn.addEventListener('click', () => {

    const ssid = document.getElementById('ssid').value;
    const password =  document.getElementById('password').value;
    
    if(ssid !== '' && password !== ''){
        console.log(ssid+'->'+password);

        var v = new QRCode(document.getElementById("qr-code"), {
            text: password,
            width: 128,
            height: 128
        });
        

    }
});


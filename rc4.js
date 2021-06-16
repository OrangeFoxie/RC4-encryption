
function rc4(key, str) {
    s = new Array();
    for (var i = 0; i < 256; i++) {
        s[i] = i;
    };
    var j = 0;
    var x;
    for (i = 0; i < 256; i++) {
        j = (j + s[i] + key.charCodeAt(i % key.length)) % 256;
        x = s[i];
        s[i] = s[j];
        s[j] = x;
    }
    i = 0;
    j = 0;
    var ct = '';
    for (var y = 0; y < str.length; y++) {
        i = (i + 1) % 256;
        j = (j + s[i]) % 256;
        x = s[i];
        s[i] = s[j];
        s[j] = x;
        ct += String.fromCharCode(str.charCodeAt(y) ^ s[(s[i] + s[j]) % 256]);
    }
    return ct;
}
let kq1;
function rc4Enc(){
    let strInput = document.getElementById("strInput").value;
    let keyEnc = document.getElementById("keyEnc").value;
    kq1 = rc4(keyEnc,strInput);
    this.checkkq("txtoutput",kq1);
}

function rc4Dec(){
	rc4Enc();
	let strInput = kq1;
    let keyEnc = document.getElementById("keyEnc").value;
    let kq = rc4(keyEnc,strInput);
	this.checkkq("txtoutput2",kq);
}

function checkkq(id,kq){
	if(kq){
		document.getElementById(id).innerHTML = kq;
	}else{
		document.getElementById(id).innerHTML = "Kết quả";
	}
}

/**
 * Created by john on 2/6/14.
 */


function updateURN() {
    var obj = {};
    obj.level = document.getElementById("level").value;
    obj.reverb = document.getElementById("reverb").value;
    obj.dsp = document.getElementById("dsp").value;

    var json;
    json = JSON.stringify(obj);

    //alert(json);
    var c = Iuppiter.compress(json);
    //window.confirm(c);

    //var d = Iuppiter.decompress(c);
    //window.confirm(d);

    // Compressed byte array can be converted into base64 to sumbit to server side to do something.
    var b = Iuppiter.Base64.encode(c, true);
    document.getElementById("urn").value = "urn:AUDLZ2:" + b;
//
//    window.confirm(b);
    var bb = Iuppiter.toByteArray(b);
    var db = Iuppiter.decompress(Iuppiter.Base64.decode(bb, true));

    document.getElementById("blob").value = db;

}


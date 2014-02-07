/**
 * Created by john on 2/6/14.
 */

function updateURN() {
    var obj = {};
    obj.level = document.getElementById("level");
    obj.reverb = document.getElementById("reverb");
    obj.dsp = document.getElementById("dsp");

    var json = JSON.stringify(obj)
    alert(json);
    var c = Iuppiter.compress(json);
    window.confirm(c.length < s.length, c);

    document.getElementById("urn").value = c;
    var d = Iuppiter.decompress(c);
    window.confirm(d == s, d);

    // Compressed byte array can be converted into base64 to sumbit to server side to do something.
    var b = Iuppiter.Base64.encode(c, true);

    var bb = Iuppiter.toByteArray(b);
    var db = Iuppiter.decompress(Iuppiter.Base64.decode(bb, true));
    window.confirm(db == s, db);

}
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
    var compressed = Iuppiter.compress(json);
    //window.confirm(compressed);

    var decompressed = Iuppiter.decompress(compressed);
    console.log("decompressed = compressed:" + decompressed == compressed);
    console.log("decompressed: " + decompressed);
    console.log("compressed: " + compressed);

    // Compressed byte array can be converted into base64 to submit to server side to do something.
    var base64Encoded = Iuppiter.Base64.encode(compressed, true);
    //var base64Bytes = Iuppiter.toByteArray(base64Encoded);
    document.getElementById("urn").value = "urn:AUDLZ2:" + base64Encoded;

    var unencoded = Iuppiter.Base64.decode(base64Encoded, false);
    console.log("unencoded:" + unencoded);
    var unmangledJSON = Iuppiter.decompress(unencoded, false);
    console.log("unmangled json: " + unmangledJSON);

    document.getElementById("blob").value = unencoded;
    console.log("tried setting blob value to: " + unencoded);

}


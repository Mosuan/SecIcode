/*
code by Mosuan
E-mail:934817794@qq.com
website:http://www.secevery.com
*/

function is_null(){
    var str = $("#encode").val();
    if(str == "在这里输入需要编码/解码的内容"){
        alert("请输入需要编码/解码的内容");
        return false;
    }
}

//base64编码
function base64encode(){
    var base64str = $("#encode").val();
    if(is_null() != false){
        var code = $.base64.encode(base64str);
        $("#decode").val(code);
    }
}

//base64解码
function base64decode(){
    var base64str = $("#encode").val();
    if(is_null() != false){
        var code = $.base64.decode(base64str);
        $("#decode").val(code);
    }
}

//\u十六进制（unicode)编码
function unicodeencode(){
    var str = $("#encode").val();
    var res=[];
    if(is_null() != false){
        for(var i=0;i < str.length;i++)
            res[i]=("00"+str.charCodeAt(i).toString(16)).slice(-4);
        $("#decode").val(("\\u"+res.join("\\u")));
    }
}

//\u十六进制（unicode)解码
function unicodedecode(){
    var str = $("#encode").val();
    var res=[];
    if(is_null() != false){
        str=str.replace(/\\/g,"%");
        $("#decode").val(unescape(str));
    }
}

//&#x;十六进制（unicode)编码
function unicodexencode(){
    var str = $("#encode").val();
    var res=[];
    if(is_null() != false){
        for(var i=0;i < str.length;i++)
            res[i]=("00"+str.charCodeAt(i).toString(16)+";");
        $("#decode").val(("&#x"+res.join("&#x")));
    }
}

//&#x;十六进制（unicode)解码
function unicodexdecode(){
    var str = $("#encode").val();
    var res=[];
    if(is_null() != false){
        str=str.replace(/&#x00/g,"%");
        str=str.replace(/;/g,"");
        $("#decode").val(unescape(str));
    }
}

//&#十进制编码
function tenencode(){
    var str = $("#encode").val();
    var res=[];
    if(is_null() != false){
        for(var i=0;i < str.length;i++)
            res[i]=("0000"+str.charCodeAt(i));
        $("#decode").val(("&#"+res.join("&#")));
    }
}

//&#十进制解码
function tendecode(){
    var str = $("#encode").val().split("&");
    var res = "";
    if(is_null() != false){
        for(i=1;i < str.length;i++){
            str[i] = str[i].replace("#","");
            res += String.fromCharCode(str[i]);
        }
        $("#decode").val(res);
    }
}

//&#十进制编码
function tenfenencode(){
    var str = $("#encode").val();
    var res=[];
    if(is_null() != false){
        for(var i=0;i < str.length;i++)
            res[i]=(str.charCodeAt(i)+";");
        $("#decode").val(("&#"+res.join("&#")));
    }
}

//&#十进制解码
function tenfendecode(){
    var str = $("#encode").val().split("&");
    var res = "";
    if(is_null() != false){
        for(i=1;i < str.length;i++){
            str[i] = str[i].replace("#","");
            str[i] = str[i].replace(";","");
            res += String.fromCharCode(str[i]);
        }
        $("#decode").val(res);
    }
}

//hex编码
function hexencode(){
    var str = $("#encode").val();
    var res=[];
    if(is_null() != false){
        for(var i=0;i < str.length;i++)
            res[i]=(str.charCodeAt(i).toString(16));
        $("#decode").val((res.join("")));
    }
}

//hex解码
function hexdecode(){
    var str = $("#encode").val();
    var strlength = str.length;
    var res="";
    if(is_null() != false){
        //判断是否能取模
        if(strlength%2 == 0){
            for(i=0; i<strlength; i=i+2){
                var s = "%"+str.substr(i,2);
                res += unescape(s);
            }
        }
        $("#decode").val(res);
    }
}

//url一次编码
function urlencode(){
    var str = $("#encode").val();
    if(is_null() != false){
        $("#decode").val(escape(str));
    }
}

//url一次解码
function urldecode(){
    var str = $("#encode").val();
    if(is_null() != false){
        $("#decode").val(unescape(str));
    }
}

//url二次编码
function url2encode(){
    var str = $("#encode").val();
    if(is_null() != false){
        $("#decode").val(escape(str).replace(/%/g,"%25"));
    }
}

//url二次解码
function url2decode(){
    var str = $("#encode").val();
    if(is_null() != false){
        var s = str.replace(/%25/g,"%");
        $("#decode").val(unescape(s));
    }
}





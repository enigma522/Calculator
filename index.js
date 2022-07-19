
var x="";
var current=0;
var previous="";
op ="";

function clear() {
    x="";
    current=0;
    previous=0;
    $(".current").text("");
    $(".previous").text("");
}

$(".num , .operator").click(function() { 
    if  ($(this).text()=="÷"){
        x = x + "/";
    }else{
        x = x + $(this).text();
    }
    if ((x[x.length-1]=='+') || (x[x.length-1]=='-') || (x[x.length-1]=='*') || (x[x.length-1] == '/')){
        if ((x[x.length-2]=='+') || (x[x.length-2]=='-') || (x[x.length-2]=='*') || (x[x.length-2] == '/')) {
            x = x.slice(0,-1);
        }
    }
    if (x[x.length-2]=="="){
        if ((x[x.length-1]=='+') || (x[x.length-1]=='-') || (x[x.length-1]=='*') || (x[x.length-1] == '/')) {
            op= $(this).text();
            $(".previous").text($(".current").text());
            previous = $(".current").text();
            x="";
            //x = x + $(this).text();
        }else{
            x="";
            x = x + $(this).text();
            $(".current").text(x);
        }
    }else{
        $(".current").text(x);
    }
    
});



$("body").keypress(function (e) { 
    if (e.charCode>=42 && e.charCode<=57) {
        x = x + e.key;
        
    if ((x[x.length-1]=='+') || (x[x.length-1]=='-') || (x[x.length-1]=='*') || (x[x.length-1] == '÷')){
        if ((x[x.length-2]=='+') || (x[x.length-2]=='-') || (x[x.length-2]=='*') || (x[x.length-2] == '÷')) {
            x = x.slice(0,-1);
        }
    }
    if (x[x.length-2]=="="){
        if ((x[x.length-1]=='+') || (x[x.length-1]=='-') || (x[x.length-1]=='*') || (x[x.length-1] == '÷')) {
            op= e.key;
            $(".previous").text($(".current").text());
            previous = $(".current").text();
            x="";
            //x = x + $(this).text();
        }else{
            x="";
            x = x + e.key;
            $(".current").text(x);
        }
    }else{
        $(".current").text(x);
    }
    }else if (e.charCode==13){
        $(".current").text((eval(previous+op+x)).toString());
        x="=";
    }else{
        console.log(x);
    }
    
});

$(".result").click(function () { 
    $(".current").text((eval(previous+op+x)).toString());
    x="=";
});

$(".ac").click(function (e) { 
    clear();
    
});

$(".del").click(function () { 
    x = x.slice(0,-1);
    $(".current").text(x);   
});

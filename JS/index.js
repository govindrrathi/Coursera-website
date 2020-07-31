function sayhello (){
    var rlanswr = 144
    var answer = document.getElementById("answer").value;
    
    if (answer == rlanswr){
        var message = "<h2>"+answer+" is correct!</h2>";
        document.getElementById("content").innerHTML = message;
        document.getElementById('coloror').style.background = "#008000" ;
        alert("correct")
     }
    else if(answer>rlanswr-11 && answer<rlanswr+11){
        var message = "<h2>"+answer+" is close";
        document.getElementById("content").innerHTML = message;
    }
    else{
        var message = "<h2>"+answer+" is wrong )=</h2>";
        document.getElementById("content").innerHTML = message;
   
    }
}


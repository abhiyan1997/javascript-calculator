    
<script type = "text/javascript">
    function calc(){
    
    var num1 = parseFloat(document.getElementById("n1").value)
    var num2 = parseFloat(document.getElementById("n2").value)
    
    
    var calcu = document.getElementById("keys").value
    
    if(calcu === "+"){
    
    document.getElementById('result').value = num1+num2;
    
    }
    if(calcu === "-"){
    
    document.getElementById('result').value = num1-num2;
    
    }
    if(calcu === "x"){
    
    document.getElementById('result').value = num1*num2;
    
    }
    if(calcu === "/"){
    
    document.getElementById('result').value = num1/num2;
    
    }
    if(calcu === "%"){
    
    document.getElementById('result').value = num1%num2;
    
    }
    }
    function reset() {
        window.location=("calculator.html")
        
    }
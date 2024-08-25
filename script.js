function del() {
        displayans.value = ""
        displayanswer.value="0"
        
    }

    function del1() {
        displayans.value= displayans.value.substring(0,  displayans.value.length -1)
        displayanswer.value= displayanswer.value.substring(0,  displayanswer.value.length -1)
        
    }

   
    

    
      let displayans = document.getElementById("displayans");
      function displayNum(num){
      displayans.value += num
 }



    function operate(b) {
        sign = b
        displayanswer.value = displayans.value
        displayans.value=""
     
    }

    function calculate() {
        let numa = displayans.value
        let numb = displayanswer.value

        if (sign === "+") {
            displayanswer.value = Number (numa) + Number (numb)
        }

        else if (sign === "-") {
            displayanswer.value = Number (numa) - Number(numb)
        }

         else if (sign === "/") {
            displayanswer.value = Number ( numa) / Number(numb)
        }

        else if (sign === "*") {
            displayanswer.value = Number ( numa) * Number(numb)
        }
    }

       
    
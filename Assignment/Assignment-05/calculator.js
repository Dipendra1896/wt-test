let string="";
let buttons =document.getElementsByTagName('button');
Array.from(buttons).forEach(function(button){
    button.addEventListener('click', function(btn){
            if (btn.target.innerHTML=='=') {
                
                string= eval(string);
                document.querySelector('input').value=string;
            }
            else if (btn.target.innerHTML=='AC') {
                string = "";
                document.querySelector('input').value = string;
            }
            else{
                console.log(btn.target)
                string = string + btn.target.innerHTML;
                document.querySelector('input').value = string;
            }

        })
    })
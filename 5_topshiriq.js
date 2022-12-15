//                5        topshiriq       //

let setter=new Array();
let arr1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2];
let arr2 = [4, 2, 21, 12, 13, 34, 46, 79, 10, 21, 34];
let war = document.getElementById('solve--array')
for(let i = 0;i <arr1.length;i++){
        
        setter[i]= arr1[i]+arr2[i];
        
    }
    war.innerText = setter
    //             6 topshiriq           //
    $(function() {
        $('input').keyup(function() {
            this.value = this.value.toLocaleUpperCase();
        });
    });

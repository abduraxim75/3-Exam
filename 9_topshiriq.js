//      9 topshiriq//
let names = document.getElementById("nick");
let all=document.getElementById("see");
names.addEventListener('change',function(e){
    e.preventDefault();
let p=document.createElement('p');
p.innerHTML=`${e.target.value}`;
all.append(p)
e.target.value='';
})


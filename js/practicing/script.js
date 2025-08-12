let select=document.createElement('select')
let body=document.querySelector('#dropdown')
console.log(body)
body.appendChild(select)
select.className="selector"
let array=['ECE','CSE','MECHANICAL','AEROSPACE']
array.forEach(addoptions)
function addoptions(ele){
    let option=document.createElement('option')
    option.textContent=ele
    option.id=ele
    select.appendChild(option)
    
}
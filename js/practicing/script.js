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
let category_select=document.createElement('select')
category_select.id='category_select'
let category_list=[
    "Food & Dining",
    "Transportation", 
    "Shopping",
    "Entertainment",
    "Bills & Utilities",
    "Healthcare",
    "Salary",
    "Freelance",
    "Investment",
    "Other"
];
category_list.forEach(element=>{
    let category_slides=document.createElement('option')
    category_slides.value=element
    category_slides.textContent=element
    category_select.appendChild(category_slides)
})  
let categrory_label=document.createElement('label')

categrory_label.textContent='Category'
categrory_label.htmlFor='category_select'
let div_category=document.createElement('div')
div_category.id='form-div'

div_category.appendChild(categrory_label)
div_category.appendChild(category_select)
console.log(div_category)
document.querySelector('#form-div:nth-child(3)').insertAdjacentElement('afterend',div_category)
console.log(category_select)

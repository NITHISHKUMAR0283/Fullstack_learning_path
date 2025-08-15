let select=document.createElement('select')
let body=document.querySelector('#dropdown')
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
document.querySelector('#form-div:nth-child(3)').insertAdjacentElement('afterend',div_category)
class Form {
    constructor(description, amount, type, cat, date, notes) {
        this.description = description;
        this.amount = amount;
        this.type = type;
        this.date = date;
        this.notes = notes;
        this.categ = cat;
    }
    get() {
        return `${this.description}--${this.amount}--${this.type}--${this.categ}--${this.date}--${this.notes}`;
    }
}

const formEntries = [];

function add_details(event) {
    event.preventDefault();

    const description = document.getElementById("text").value;
    const amount = parseFloat(document.getElementById("amount").value);
    const category1 = document.getElementById("category_select").value;
    const type = document.getElementById("selector").value;
    const date = document.getElementById("date").value;
    const notes = document.getElementById("text_input").value;

    const newentry = new Form(description, amount, type, category1, date, notes);
    formEntries.push(newentry);
    displaydetails()
    document.getElementById('form').reset(); // clear form after submit
}

function displaydetails(){
     formEntries.forEach(obj1=>{
})
}

document.getElementById('form').addEventListener('submit', add_details);

let filter=document.getElementById('filterby')

let showexpense=document.getElementById('showexpense')

showexpense.addEventListener('click',display=>{
    let exsistingtable=document.getElementById("show")
     if(exsistingtable){
                exsistingtable.remove();
            }
    let table=document.createElement("table")
    table.id="show"
    let tableh=document.createElement("tr")
    let heading=[
    "Description",
    "Amount",
    "Type",
    "Category",
    "Date",
    "Notes"
]   
    heading.forEach(head => {
            
            let tablehead=document.createElement("th")
            tablehead.textContent=head
            tableh.appendChild(tablehead)

    
});
table.appendChild(tableh)
    formEntries.forEach(obj=>{
       
        let inputstring=obj.get()
        let dataarr=inputstring.split("--")
        let tr=document.createElement("tr")
        dataarr.forEach(d=>{
            
        let td=document.createElement("td")
        td.textContent=d
        tr.appendChild(td)}

        )
        table.appendChild(tr)


    })
    document.getElementById('table_c').appendChild(table)
})

let myLeads = []
const inputEl = document.getElementById('input-el')
const saveBtn = document.getElementById('save-input-btn')
const linkList = document.getElementById('link-list')

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
console.log(JSON.parse(localStorage.getItem("myLeads")))

// if(leadsFromLocalStorage){
    myLeads.push(leadsFromLocalStorage)
    renderList()
// }

saveBtn.addEventListener('click',()=>{
    // console.log(inputEl.value)
    if(inputEl.value != ''){
        myLeads.push(inputEl.value)
        // console.log(myLeads)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        renderList()  
    }else{
        alert("Add link Please")
    }
})

function renderList(){
    listItems = ""
    for(let i=0;i<myLeads.length;i++){
        listItems = `<li><a href='${myLeads[i]}' target='_blank'>${myLeads[i]}</a></li>`
    }
    linkList.innerHTML += listItems

    inputEl.value = ''
}
console.log(myLeads)
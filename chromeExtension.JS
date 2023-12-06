
let myLeads = []
const inputEl = document.getElementById('input-el')
const saveBtn = document.getElementById('save-input-btn')
const deleteBtn = document.getElementById('delete-input-btn')
const tabeBtn = document.getElementById('tab-input-btn')
const linkList = document.getElementById('link-list')

renderList()

tabeBtn.addEventListener('click',()=>{
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        renderList()
    });
})

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
    const leadsFromLocalStorage = localStorage.getItem("myLeads")
    if(leadsFromLocalStorage != null){
        myLeads = JSON.parse(leadsFromLocalStorage)
        console.log(myLeads)
    }

    listItems = ""
    myLeads.forEach((leads)=>{
        listItems += `<li><a href='${leads}' target='_blank'>${leads}</a></li>`
    })
    
    linkList.innerHTML = listItems

    inputEl.value = ''
}

deleteBtn.addEventListener('click',()=>{
    localStorage.clear()
    myLeads = []
    renderList()
})

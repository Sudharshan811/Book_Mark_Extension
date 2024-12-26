const save_button = document.getElementById("save-btn")
let Leads = []
const input_box = document.getElementById("input-box")
const unorder_list = document.getElementById("unorder_list")
const deletebtn = document.getElementById("delete-btn")


let leadfromstorage= JSON.parse(localStorage.getItem("myLeads"))

if(leadfromstorage){
    Leads = leadfromstorage
    render()
}



function render(){
    let listItems = ""
    
    for(let i=0;i<Leads.length;i++){
        console.log(Leads[i])
        
        listItems += "<li><a target='_black' href='"+Leads[i]+"'>"+ Leads[i] + "</a></li>" 
        
    }
    
    unorder_list.innerHTML = listItems
    
    }


deletebtn.addEventListener("dblclick",function(){
   
    localStorage.clear()
    Leads = []
    render()
})



console.log(leadfromstorage)
save_button.addEventListener("click",function(){
    Leads.push(input_box.value)
    
    input_box.value = ""
    localStorage.setItem("myLeads",JSON.stringify(Leads))
    
    render()
    
})

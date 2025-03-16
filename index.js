document.getElementById("nav-btn").addEventListener("click",function(){
    const color = document.getElementById('body');
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    color.style.backgroundColor = randomColor;
})
document.getElementById("new-html-page-btn").addEventListener("click",function(){
    window.location.href="./main.html"
})
const time = new Date();
let hours = time.getHours();
const minute = time.getMinutes().toString().padStart(2,'0');
const seconds = time.getSeconds().toString().padStart(2,'0');
const amPm = hours>= 12? "PM" : "AM";
hours = hours % 12 || 12;
const  timeString = `${hours}:${minute}:${seconds} ${amPm}`
const parentContainer= document.getElementById("history-container")
document.getElementById('clear').addEventListener("click",function(){
    document.getElementById('history-container').innerHTML= "";
})
document.getElementById("com-btn-1").addEventListener("click",function(){
    alert("board Updated Successfully")
    const div = document.createElement('div');
    div.textContent = 'You have completed the task Fix Mobile Button Issue at '+ timeString;
    div.classList.add('border', 'border-solid', 'px-2','py-1', 'rounded','mt-2','text-sm','bg-[#F4F7FF]')
    parentContainer.appendChild(div)
    this.disabled =true;
    const count = document.getElementById('task-count');
    const newCount = count.innerText;
    updateCount = newCount - 1;
    count.innerText = updateCount;
    const totalCount = document.getElementById('total-complete');
    const newTotalCount = totalCount.innerText;
    updateTotalCount = parseInt(newTotalCount)+1;
    totalCount.innerText=updateTotalCount;
    console.log(updateCount)
    if(updateCount<=-1){
        alert('Congrates!!! you have completed all current task.')
    }
})
document.getElementById("com-btn-2").addEventListener("click",function(){
    alert("board Updated Successfully")
    const div = document.createElement('div');
    div.textContent = 'You have completed the task Add Dark Mode at '+ timeString;
    div.classList.add('border', 'border-solid','px-2', 'rounded','mt-2','text-sm')
    parentContainer.appendChild(div)
    this.disabled =true;
    const count = document.getElementById('task-count');
    const newCount = count.innerText;
    updateCount = newCount - 1;
    count.innerText = updateCount;
    const totalCount = document.getElementById('total-complete');
    const newTotalCount = totalCount.innerText;
    updateTotalCount = parseInt(newTotalCount)+1;
    totalCount.innerText=updateTotalCount;
    if(updateCount<=-1){
        alert('Congrates!!! you have completed all current task.')
    }
})
document.getElementById("com-btn-3").addEventListener("click",function(){
    alert("board Updated Successfully")
    const div = document.createElement('div');
    div.textContent = 'You have completed the task Optimize Home page at '+ timeString;
    div.classList.add('border', 'border-solid','px-2', 'rounded','mt-2','text-sm')
    parentContainer.appendChild(div)
    this.disabled =true;
    const count = document.getElementById('task-count');
    const newCount = count.innerText;
    updateCount = newCount - 1;
    count.innerText = updateCount;
    const totalCount = document.getElementById('total-complete');
    const newTotalCount = totalCount.innerText;
    updateTotalCount = parseInt(newTotalCount)+1;
    totalCount.innerText=updateTotalCount;
    if(updateCount<=-1){
        alert('Congrates!!! you have completed all current task.')
    }
})
document.getElementById("com-btn-4").addEventListener("click",function(){
    alert("board Updated Successfully")
    const div = document.createElement('div');
    div.textContent = 'You have completed the task Add new emoji🤲 at '+ timeString;
    div.classList.add('border', 'border-solid','px-2', 'rounded','mt-2','text-sm')
    parentContainer.appendChild(div)
    this.disabled =true;
    const count = document.getElementById('task-count');
    const newCount = count.innerText;
    updateCount = newCount - 1;
    count.innerText = updateCount;
    const totalCount = document.getElementById('total-complete');
    const newTotalCount = totalCount.innerText;
    updateTotalCount = parseInt(newTotalCount)+1;
    totalCount.innerText=updateTotalCount;
    if(updateCount<=-1){
        alert('Congrates!!! you have completed all current task.')
    }
})
document.getElementById("com-btn-5").addEventListener("click",function(){
    alert("board Updated Successfully")
    const div = document.createElement('div');
    div.textContent = 'You have completed the Integrate OpenAI API at '+ timeString;
    div.classList.add('border', 'border-solid','px-2', 'rounded','mt-2','text-sm')
    parentContainer.appendChild(div)
    this.disabled =true;
    const count = document.getElementById('task-count');
    const newCount = count.innerText;
    updateCount = newCount - 1;
    count.innerText = updateCount;
    const totalCount = document.getElementById('total-complete');
    const newTotalCount = totalCount.innerText;
    updateTotalCount = parseInt(newTotalCount)+1;
    totalCount.innerText=updateTotalCount;
    if(updateCount<=-1){
        alert('Congrates!!! you have completed all current task.')
    }
})
document.getElementById("com-btn-6").addEventListener("click",function(){
    alert("board Updated Successfully")
    const div = document.createElement('div');
    div.textContent = 'You have completed the Improve Job searching at '+ timeString;
    div.classList.add('border', 'border-solid','px-2', 'rounded', 'mt-2','text-sm')
    parentContainer.appendChild(div)
    this.disabled =true;
    const count = document.getElementById('task-count');
    const newCount = count.innerText;
    updateCount = newCount - 1;
    count.innerText = updateCount;
    const totalCount = document.getElementById('total-complete');
    const newTotalCount = totalCount.innerText;
    updateTotalCount = parseInt(newTotalCount)+1;
    totalCount.innerText=updateTotalCount;
    if(updateCount<=-1){
        alert('Congrates!!! you have completed all current task.')
    }
})

document.getElementById("date").innerHTML = new Date().toLocaleDateString('en-GB', { 
    weekday: 'long'
 }) + ",<br>" + new Date().toLocaleDateString('en-GB', { 
 month: 'long', day: 'numeric', year: 'numeric' 
 }).replace(/(\d+) (\w+) (\d+)/,'  $2 $1 $3');

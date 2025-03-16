console.log("connect to html");
document.getElementById("nav-btn").addEventListener("click",function(){
    
})
document.getElementById("new-html-page-btn").addEventListener("click",function(){
    window.location.href="./main.html"
})
document.getElementById("com-btn-1").addEventListener("click",function(){
    alert("board Updated Successfully")
    this.disabled =true;
})

document.getElementById("date").innerHTML = new Date().toLocaleDateString('en-GB', { 
    weekday: 'long'
 }) + ",<br>" + new Date().toLocaleDateString('en-GB', { 
 month: 'long', day: 'numeric', year: 'numeric' 
 }).replace(/(\d+) (\w+) (\d+)/,'  $2 $1 $3');

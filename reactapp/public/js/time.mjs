//Using speech synthesis utterance

console.log("hi");
window.onerror = function (msg, url, line) {
    alert("Message : " + msg );
    alert("url : " + url );
    alert("Line number : " + line );
 }

 const audio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-alarm-digital-clock-beep-989.mp3');
 audio.loop = true;
 

const open=document.getElementById("open");
const todo =document.getElementById('submit');
const reminderlist=document.querySelector('.reminderlist');
const inputValue=document.querySelector('.form_popup input')
let text="";

window.onload=(event)=>{
    showTasks();
}

if(open){
    console.log(open);
open.addEventListener("click",openForm)}

const close=document.getElementById("closeForm");

if(close){
close.addEventListener("click",closeForm)
}
function openForm(){
    
    document.getElementById("form").style.display="block";
}

function closeForm(){
    document.getElementById("form").style.display="none";
}

function TTS(task)
{
    const msg=new SpeechSynthesisUtterance();
    msg.rate=0.2;
    msg.pitch=1;
    msg.text=task;
    speechSynthesis.speak(msg);
    console.log(task);
}





function localStorageAlarmList()
{
   let List=localStorage.getItem("Alarm");
   if(List==null)return List=[];

    return JSON.parse(List);
}

function localStorageTaskList()
{
    let List=localStorage.getItem("Tasks");
    if(List==null)return List=[];
  
    return JSON.parse(List);
}

function localStorageList(){
    let List=localStorage.getItem("myList");
    // console.log(List)
    if(List==null)return List=[];
    return JSON.parse(List);
}
// const alarmList=[];
// const taskList=[];
// const myList=[];


// if(localStorage.getItem("alarmList")){
let alarmList = localStorageAlarmList();


// if(localStorage.getItem("taskList")){
let taskList = localStorageTaskList();



// if(localStorage.getItem("myList"))

let myList=localStorageList();

 
let alarmListOut=0;
// if(myList){ //not null show existing tasks
//     showTasks(myList);
// }
let remove=(val)=>{
    let lists=localStorage.getItem("myList");

    if(lists){
        lists=JSON.parse(lists);
        let newlist=lists.filter((value)=>value!=val);
        console.log(newlist);
    }
}

   
function showTasks()
{
     
    let lists=localStorage.getItem("myList");
    
    if(lists)
    {
        
        let Lists=JSON.parse(lists);
       
        
        let id=0;
        Lists.map((element)=>{
            const {Time,Task}=element
            
          
        // display the tasks   
        text+=`<li class="task">
             <label for=${Time}><button onclick="remove(this.value)" value=${Task} class="delete-alarm">Delete</button><p>${Task}</p> </label> </li>`;
             console.log(Task);
        });
        
    }
    reminderlist.innerHTML=text;
    // inputValue.value=" ";
}



if(todo){
    console.log(todo);
    todo.addEventListener("click",SetAlarm); // set the new reminder
}

function ringFunc(time){
    audio.play();
    // alert(time);

    let lists=localStorage.getItem("myList");
    lists=JSON.parse(lists);

    if(lists)
    {
        // console.log(lists["Time"]);
        // console.log(lists.indexOf(time));
    
        for(var i=0;i<lists.length;i++)
        {
            console.log(lists[i].Time);
            
            // audio.pause();
             var count=5;
            if(lists[i].Time===time)
            {
                audio.pause();
                while(count>=0)
                {
                    TTS(lists[i].Task);  
                    console.log(lists[i].Task);
                    count--;
                }
            }
        }
    }
}


setInterval(currentTime,1000)// 1s=1000ms

function currentTime()
{
    var now=new Date();

    
    let n_hours=now.getHours();
    let n_mins=now.getMinutes();
    let n_sec=now.getSeconds();
    
    if(n_hours<10){
        n_hours='0'+n_hours;
    }
    if(n_mins<10){
        n_mins='0'+n_mins;
    }
    if(n_sec<10){
        n_sec='0'+n_sec;
    }
    let time= n_hours+":"+n_mins+":"+n_sec;
    

    

    
   
    if(alarmList.includes(time)){
        ringFunc(time);
       
    }
}


function SetAlarm()
{
  
    const date=document.getElementById('date').value;
    const todotime=document.getElementById('time').value;
    const task=document.getElementById('tasks').value;

    // const alarm='';
    // const alarmTime=new Date();

    console.log(date+" "+todotime);
    
    const alarm=date+" "+todotime;
                    
    console.log(`alarm date ${alarm}`);
                    // document.write(alarm);

                    // const date=Date.parse(alarm.value)
                    
    const alarmTime=new Date(alarm);
    console.log(`alarm date ${alarmTime}`); 
    
    let hours=alarmTime.getHours();
    let mins=alarmTime.getMinutes();
    let sec=alarmTime.getSeconds();
    
    
    if(hours<10){
        hours='0'+hours;
    }
    if(mins<10){
        mins='0'+mins;
    }
    if(sec<10){
        sec='0'+sec;
    }

    let alarmtime=hours+":"+mins+":"+sec;
    
    if(isNaN(alarmtime)){
        if(!alarmList.includes(alarmtime))
        {
            
            alarmList.push(alarmtime);
            taskList.push(task);

            

            myList.push({"Time":alarmtime,"Task":task});
           
            localStorage.setItem("Alarm",JSON.stringify(alarmList));
            localStorage.setItem("Tasks",JSON.stringify(taskList));
            localStorage.setItem("myList",JSON.stringify(myList));
            
           
            // showTasks();
            
            
            // const set=time+" "+task;

            
        }
        
    }
    
    
   
}
       

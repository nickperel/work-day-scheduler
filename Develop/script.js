{/* <div class="row time-block">
        <p class="col-2 hour">
          9AM
        </p>
        <textarea class="col-8 description">
          
        </textarea>
        <button class="col-2 saveBtn">
          <i class="fas fa-save"></i>
        </button>
</div> */}
      console.log("hello world")
        
const timeTextArr = [
    "9AM",
    "10AM",
    "11AM",
    "12PM",
    "1PM",
    "2PM",
    "3PM",
    "4PM",
    "5PM"
];

const saveToLocalStorage = (event) => {

    var timeRepresented = event.target.id;

    console.log(timeRepresented);

    var targetTextArea = document.getElementById("text-"+timeRepresented)

    console.log(targetTextArea.value)


}

for (let i = 0; i < 9; i++) {
    const timeContainer = document.createElement("div");
        timeContainer.className = "row time-block"

      const hourText = document.createElement("p");
        hourText.className = "col-2 hour"
        hourText.textContent = timeTextArr[i];
    
      const taskText = document.createElement("textarea");
        taskText.className = "col-8 description" 
        taskText.setAttribute('id', "text-"+(i+9))
    
      const saveBtn = document.createElement("button");
        saveBtn.className = "col-2 saveBtn";
        saveBtn.setAttribute('id', i+9)
        saveBtn.addEventListener("click", saveToLocalStorage)

      const saveIcon = document.createElement("i");
        saveIcon.className = "fas fa-save"

    saveBtn.appendChild(saveIcon);
    timeContainer.appendChild(hourText);
    timeContainer.appendChild(taskText);
    timeContainer.appendChild(saveBtn);

   const mainContainer = document.querySelector(".container");
   mainContainer.appendChild(timeContainer);
}
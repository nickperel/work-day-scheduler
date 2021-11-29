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

const time = new Date();
document.getElementById("currentDay").innerHTML = time.toDateString();

const saveToLocalStorage = (event) => {

    var arrayPosition = event.target.id;

    console.log(arrayPosition);

    var targetTextArea = document.getElementById("text-"+arrayPosition)
    var textAreaValue = targetTextArea.value;

    console.log(textAreaValue);

  // try to get the item, but if it ends up being null, we included the or statement to then create an empty array so that it wouldn't return null
  const localValues = JSON.parse(localStorage.getItem("initialLocal")) || [];
  localValues[arrayPosition] = textAreaValue;

  localStorage.setItem('initialLocal', JSON.stringify(localValues));

  console.log(localValues);
}

for (let i = 0; i < 9; i++) {
    const timeContainer = document.createElement("div");
        timeContainer.className = "row time-block"

      const hourText = document.createElement("p");
        hourText.className = "col-2 hour"
        hourText.textContent = timeTextArr[i];
    
      const taskText = document.createElement("textarea");
        taskText.className = "col-8 description" 
        taskText.setAttribute('id', "text-"+(i))

      const localValues = JSON.parse(localStorage.getItem("initialLocal")) || [];
        if (localValues[i]) {
          taskText.value = localValues[i];
        }

      const saveBtn = document.createElement("button");
        saveBtn.className = "col-2 saveBtn";
        saveBtn.setAttribute('id', i)
        saveBtn.addEventListener("click", saveToLocalStorage)

      const saveIcon = document.createElement("i");
        saveIcon.className = "fas fa-save"

    saveBtn.appendChild(saveIcon);
    timeContainer.appendChild(hourText);
    timeContainer.appendChild(taskText);
    timeContainer.appendChild(saveBtn);

   const mainContainer = document.querySelector(".container");
   mainContainer.appendChild(timeContainer);

   const currentTime = new Date();
   const blockHour = i+9;
   const currentHour = currentTime.getHours();
        if (currentHour > blockHour) {
          timeContainer.classList.add("past");
        }
        if (currentHour < blockHour) {
          timeContainer.classList.add("future");
        }
        if (currentHour === blockHour) {
          timeContainer.classList.remove(["past", "future"])
          timeContainer.classList.add("present");
        };
}
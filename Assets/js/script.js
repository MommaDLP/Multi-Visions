const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open"); //Task
const closeModalBtn = document.querySelector(".btn-close");//"X"
const appointmentDate = document.querySelector('#datepicker');//calendar
const submit = document.querySelector('.submit');
// when you open the Modal the work behind it will be hidden
const openModal = function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  };

  openModalBtn.addEventListener("click", openModal);
  //when you click the 'X' button it should close the modal
  const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  }; 

  closeModalBtn.addEventListener("click", closeModal);
  overlay.addEventListener("click", closeModal);
  
  submit.addEventListener('click', function(event) {
    event.preventDefault();
});

//Josh tried to help me but we couldntg get it to work 
// function generateTaskId() {
//   class TaskCard {
//     constructor() {
//       this.title= document.getElementById('task-title').value;
//       this.date= document.getElementById('DatePicker').value;
//       this.description= document.getElementById('task-description').value;
//     }
//   }
//   const taskCard = TaskCard();
//   createTaskCard(taskCard);
//   closeModal();
// };

// function createTaskCard(taskCard) {
//   if (taskCard) {
//       const title = taskCard.title;
//       const date = dayjs(taskCard.date);
//       const description = taskCard.description;
//       if (title && date && description) {
//           const newDiv = document.createElement('div');
//           newDiv.classList.add('newDiv');
//           const title2 = document.createElement('h3');
//           title2.textContent = `${title}`;
//           newDiv.appendChild(title2);
//           const line = document.createElement('hr');
//           newDiv.appendChild(line);
//           const date2 = document.createElement('p');
//           date2.textContent = `${date}`;
//           newDiv.appendChild(date2);
//           const description2 = document.createElement('p');
//           description2.textContent = `${description}`;
//           newDiv.appendChild(description2);
//           const deleteButton = document.createElement('button');
//           deleteButton.textContent = 'Delete';
//           newDiv.appendChild(deleteButton);
//           deleteButton.addEventListener('click', function() {
//               // Remove newDiv from the DOM
//               newDiv.remove();
//               // Remove corresponding taskData from newDivArray
//               newDivArray = newDivArray.filter(item => item.id !== taskCard.id);
//               // Update localStorage
//               localStorage.setItem('newDivArray', JSON.stringify(newDivArray));
//           });}}}
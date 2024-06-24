let newDivArray = JSON.parse(localStorage.getItem("newDivArray")) || [];

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open"); //Task
const closeModalBtn = document.querySelector(".btn-close");//"X"
const appointmentDate = document.querySelector('#datepicker');//calendar
const submit = document.querySelector('.submit');

const toDoBox = document.getElementById('todo-cards');
const progressBox = document.getElementById('in-progress-cards');
const doneBox = document.getElementById('done-cards');

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
  
  //submit button to click and add modal fields with new card
  submit.addEventListener('click', function(event) {
    event.preventDefault();

    const taskTitle = document.getElementById('task-title').value;
    const taskDueDate = document.getElementById('DatePicker').value;
    const taskDescription = document.getElementById('task-description').value;

    // Create a new card element
    const newCard = newCard ();
    createnewCard(newCard);
    closeModal();
});
// Josh tried helping me here get my local storage to my new card nut i did not succeed
function createnewCard(newCard) {
  if (newCard) {
      const title = newCard.title;
      const date = dayjs(newCard.date);
      const description = newCard.description;
      if (title && date && description) {
          const newDiv = document.createElement('div');
          newDiv.classList.add('newDiv');

          const title2 = document.createElement('h3');
          title2.textContent = `${title}`;

          newDiv.appendChild(title2);
          const line = document.createElement('hr');
          newDiv.appendChild(line);

          const date2 = document.createElement('p');
          date2.textContent = `${date}`;
          newDiv.appendChild(date2);

          const description2 = document.createElement('p');
          description2.textContent = `${description}`;
          newDiv.appendChild(description2);

          const deleteButton = document.createElement('button');
          deleteButton.textContent = 'Delete';
          newDiv.appendChild(deleteButton);
          deleteButton.addEventListener('click', function() {
             
              newDiv.remove();
              
              newDivArray = newDivArray.filter(item => item.id !== newCard.id);
              // Update localStorage
              localStorage.setItem('newDivArray', JSON.stringify(newDivArray));
          });}}}
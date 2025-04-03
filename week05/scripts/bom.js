const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener("click", (e) => {
  if (input.value.trim() !== "") {
    displayList(input.value);
    chaptersArray.push(input.value);
    setChapterList();
    input.value = "";
    input.focus();
  }
});

function displayList(item){
  const listItem = document.createElement("li");
  const deleteButton = document.createElement("button");
  listItem.textContent = item;
  deleteButton.textContent = "❌";
  deleteButton.classList.add("delete");
  listItem.append(deleteButton);
  list.append(listItem); 
  deleteButton.addEventListener("click", function () {
    list.removeChild(listItem);
    deleteChapter(item);
    input.focus();
  });
}

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
  displayList(chapter);
});

function setChapterList(){
  localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList(){
  return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter){
  // chapter = chapter.slice(0, chapter.length -1);
  chaptersArray = chaptersArray.filter(item => item !== chapter);
  setChapterList();
}



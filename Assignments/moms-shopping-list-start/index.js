const form = document.addItem

form.addEventListener("submit", function(event){
    event.preventDefault()
    
    //assign new elements 
    const newLi = document.createElement("li");
    const newDiv = document.createElement("div");

    newDiv.textContent = title.value;
    form.title.value = "";

    const shopList = document.getElementById("list");
    newLi.append(newDiv);
    shopList.append(newLi);

    const editButton = document.createElement('button');
    editButton.textContent = "Edit";
    newLi.append(editButton);

    const deleteButton = document.createElement("button");
    deleteButton.textContent("X");
    newLi.append(deleteButton);
    newLi.idName = "list";
})
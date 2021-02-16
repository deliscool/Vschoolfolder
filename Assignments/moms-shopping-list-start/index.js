const form = document.addItem

form.addEventListener("submit", function (e) {
    e.preventDefault()

    const listUl = document.getElementById("li");
    const listDiv = document.createElement("div")
    listDiv.textcontent = title.value;
    form.title.value = "";

    const shoppingList = document.getElementById("list");
    listItem.append(listDiv)
    shoppingList.append(listItem);

}
)
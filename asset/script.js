const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");
const table = document.getElementById("table");

let tableText = ['mohammad','suhad', '22', 'kurigram'];

increment.addEventListener("click", (e)=>{
    
    let tableRow = document.createElement('tr');
    
    tableText.forEach(table =>{
        let tableDocument = document.createElement('td');
        tableRow.appendChild(tableDocument);
        let textNode = document.createTextNode(table);
        tableDocument.appendChild(textNode);
    })
    table.appendChild(tableRow);
})

// select the target element

// remove the list item
// e.parentElement.removeChild(e);

// const tr = document.getElementsByTagName("tr")
decrement.addEventListener("click", (e)=>{
    const remove = document.querySelector("tr:last-child");
    // const s = e.target.value;
    // console.log(click);
    // tr.removeChild();
    remove.parentElement.removeChild(remove);
});

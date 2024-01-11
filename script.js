// var allstudents = ['captain america','Thor','hawkeye', 'hulk','iron man']
// console.log(allstudents);

// allstudents.pop()
// allstudents.shift()
// allstudents.push('black panther')
// allstudents.unshift('')
 var cart = []
 function addItems(){
    if(inp.value==="") {
        alert("Fill in something now")
    } else{
        console.log(inp.value);
        cart.push(inp.value)
        document.getElementById("inp").value=""
        console.log(cart);
        

        show.innerHtml =""
        for(i=0; i<cart.length; i++){
            show.innerHTML += cart[i]
        }
    }
 }
 function addToFirst() {
    cart.unshift(inp.value)
    show.innerHTML = cart
    show.innerHTML = ""
    document.getElementById("inp").value =""
    for (i=0; i<cart.length; i++) {
        show.innerHTML += 
        `<p> ${i+1}. ${cart[i]}</p>`
    }
 }
function deleteLast() {
    cart.pop(inp.value)
    show.innerHTML = cart
    show.innerHTML = ""
    document.getElementById("inp").value=""
for(i=0; i<cart.length; i++) {
    show.innerHTML += 
    `<p>${i+1}.${cart[i]}</p>`
}


}

function deleteFirst() {
    cart.shift(inp.value)
    show.innerHTML = cart
    show.innerHTML = ""
    document.getElementById("inp").value=""
for(i=0; i<cart.length; i++) {
    show.innerHTML += 
    `<p>${i+1}.${cart[i]}</p>`
}


}
 function replaceAnItem() {
    var itemNumber = prompt ("Enter the number of the item you want to edit")
    var newItemNumber = prompt ("Enter the name of the New item here")
    cart.splice(itemNumber-1, 1, newItemNumber)
    show.innerHTML = cart
    show.innerHTML = ""
    document.getElementById("inp").value =""
    for(i=0; i<cart.length; i++) {
        show.innerHTML +=
        `<p> ${i+1};${cart[i]}</p>`
    }
 }
 function deleteAnyItem() {
    var indexToDelete = prompt ("Input an item Number")
    cart.splice (IndexToDelete-1, 1)
    show.innerHTML= cart
    show.innerHTML =""
    document.getElementById("inp").value =""
    for(i=0; i <cart.length; i++) {
        show.innerHTML +=
        `<p>${i+1}.${cart[i]}</p>`
    }
 }
 function deleteAllItem() {
    cart.splice (0, cart.length )
    show.innerHTML= cart
    show.innerHTML =""
    document.getElementById("inp").value =""
    for(i=0; i <cart.length; i++) {
        show.innerHTML +=
        `<p>${i+1}.${cart[i]}</p>`
    }
 }



















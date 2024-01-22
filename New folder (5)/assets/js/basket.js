const div = document.getElementById('myDiv')

function getBasket() {
    div.innerHTML = ''
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.map((item,index) =>{
        const box = document.createElement('div')
            box.className = 'myBox col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12'
            box.innerHTML =`
            <img src="${item.image}" alt="">
            <p>${item.title}</p>
            <p>$${item.price}</p>
            <p>Urun Sayi : ${item.count}eded</p>
            <button onclick="deleteCart1(${index})">-</button>
            <button onclick="deleteCart2(${index})">Delete</button>
            `;
            div.appendChild(box)
    })
}

function deleteCart1(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    if(cart[index].count > 1){
        cart[index].count -= 1
    }else{
        cart.splice(index,1)
    }
    localStorage.setItem('cart',JSON.stringify(cart))
    getBasket()
}
function deleteCart2(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.splice(index,1)
    localStorage.setItem('cart',JSON.stringify(cart))
    getBasket()

}

getBasket()
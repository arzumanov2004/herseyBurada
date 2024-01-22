const div = document.getElementById('myDiv')

function getWishlist() {
    div.innerHTML = ''
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || []
    wishlist.map((item,index) =>{
        const box = document.createElement('div')
            box.className = 'myBox col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12'
            box.innerHTML =`
            <img src="${item.image}" alt="">
            <p>${item.title}</p>
            <button onclick="deleteWishlist(${index})">Delete</button>
            `;
            div.appendChild(box)
    })
}

function deleteWishlist(index) {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || []
    wishlist.splice(index,1)
    localStorage.setItem('wishlist',JSON.stringify(wishlist))
    getWishlist()

}

getWishlist()
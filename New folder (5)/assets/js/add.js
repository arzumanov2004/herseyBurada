const inp = document.getElementById('inp')
const searc = document.getElementById('searc')
const btnAZ = document.getElementById('btnAZ')
const btnZA = document.getElementById('btnZA')
const yenile = document.getElementById('default')
const Myform = document.getElementById('Myform')
const exampleInputEmail1 = document.getElementById('exampleInputEmail1')
const exampleInputPassword1 = document.getElementById('exampleInputPassword1')
const tableDiv = document.getElementById('tableDiv')


//Search By Name


function searchByName() {
    tableDiv.innerHTML = ''
    axios.get('https://65685f8d9927836bd974aa4c.mockapi.io/pradacts')
    .then(res =>{
        db = res.data
        const filterData = db.filter(item => item.title.toLowerCase().startsWith(inp.value.toLowerCase()))
        filterData.map(item =>{
            const box = document.createElement('tr')
            box.className = 'myBox'
            box.innerHTML = `
            <td><img src="${item.image}" alt=""></td>
            <td><h3>${item.title}</h3></td>
            <td><h4>$${item.price}</h4></td>
            <td><button style="background-color: #007A5C; color: white; border: none; width: 60px; height: 30px; margin-right: 20px;" onclick="deleteFromForm(${item.id})">sil</button></td>
            `;
            tableDiv.appendChild(box)
        })
    })
}
searc.addEventListener('click',searchByName)

//Form Post


function formPost(e) {
    e.preventDefault()
    axios.post('https://65685f8d9927836bd974aa4c.mockapi.io/pradacts',{
        title: exampleInputEmail1.value,
        price: exampleInputPassword1.value,
    })
    Myform.reset()
    setTimeout(() => {
        getForm()
    }, 1000);
}
Myform.addEventListener('submit',formPost)

//Form Get


function getForm() {
    tableDiv.innerHTML = ''
    axios.get('https://65685f8d9927836bd974aa4c.mockapi.io/pradacts')
    .then(res =>{
        db = res.data
        db.map(item =>{
            const box = document.createElement('tr')
            box.className = 'myBox'
            box.innerHTML = `
            <td><img src="${item.image}" alt=""></td>
            <td><h3>${item.title}</h3></td>
            <td><h4>$${item.price}</h4></td>
            <td><button style="background-color: #007A5C; color: white; border: none; width: 60px; height: 30px; margin-right: 20px;" onclick="deleteFromForm(${item.id})">sil</button></td>
            `;
            tableDiv.appendChild(box)
        })
    })
}
getForm()

//Form Delete


function deleteFromForm(id) {
    tableDiv.innerHTML = ''
    axios.delete(`https://65685f8d9927836bd974aa4c.mockapi.io/pradacts/${id}`)
    setTimeout(() => {
        getForm()
    }, 1000);
}


//Sort A-Z


function sortAZ() {
    tableDiv.innerHTML = ''
    axios.get('https://65685f8d9927836bd974aa4c.mockapi.io/pradacts')
    .then(res =>{
        db = res.data
        const sortData = db.sort((a,b) => a.title.localeCompare(b.title))
        sortData.map(item =>{
            const box = document.createElement('tr')
            box.className = 'myBox'
            box.innerHTML = `
            <td><img src="${item.image}" alt=""></td>
            <td><h3>${item.title}</h3></td>
            <td><h4>$${item.price}</h4></td>
            <td><button style="background-color: #007A5C; color: white; border: none; width: 60px; height: 30px; margin-right: 20px;" onclick="deleteFromForm(${item.id})">sil</button></td>
            `;
            tableDiv.appendChild(box)
        })
    })
}
btnAZ.addEventListener('click',sortAZ)

//Sort Z-A


function sortZA() {
    tableDiv.innerHTML = ''
    axios.get('https://65685f8d9927836bd974aa4c.mockapi.io/pradacts')
    .then(res =>{
        db = res.data
        const sortData = db.sort((a,b) => b.title.localeCompare(a.title))
        sortData.map(item =>{
            const box = document.createElement('tr')
            box.className = 'myBox'
            box.innerHTML = `
            <td><img src="${item.image}" alt=""></td>
            <td><h3>${item.title}</h3></td>
            <td><h4>$${item.price}</h4></td>
            <td><button style="background-color: #007A5C; color: white; border: none; width: 60px; height: 30px; margin-right: 20px;" onclick="deleteFromForm(${item.id})">sil</button></td>
            `;
            tableDiv.appendChild(box)
        })
    })
}
btnZA.addEventListener('click',sortZA)

//Default

yenile.addEventListener('click',getForm)
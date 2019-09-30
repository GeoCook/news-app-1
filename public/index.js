import { strict } from "assert"

const title = document.getElementById("title")
const button = document.getElementById('button')
const inputQuery = document.getElementById('inputQuery')

//when button is clicked
button.addEventListener('click', async ()=>{

    console.log("loading")
    
    // passes the query to the server and stores what as returned as response
    let response = await fetch(`http://localhost:3003/news?newsQuery=${inputQuery.value}`)
    console.log("entered query")
    console.log(`inputQuery.value in index is ${inputQuery.value}`)
    //turning JSON to text
    let data = await response.json()
    console.log("set data")
    console.log(data)

    // if(divArr){
    //     document.body.removeChild( divArr );
    // }


    let imgArr=[]
    let titleArr=[]
    let divArr=document.createElement('div')
    for(i=0;i<data.length;i++){
        titleArr[i] = document.createElement('h1')
        titleArr[i].textContent = data[i].title
        titleArr[i].className='title'
        divArr.appendChild(titleArr[i])
        let link = document.createElement('a')
        link.href=data[i].articleURL
        imgArr[i] = document.createElement('img')
        imgArr[i].src = data[i].imageURL
        imgArr[i].className="image"
        divArr.appendChild(link)
        link.appendChild(imgArr[i])
    }
    document.body.appendChild(divArr)

})
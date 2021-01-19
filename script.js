var place = document.getElementById('myform')

place.addEventListener('submit',function(e){
    e.preventDefault()

    var search = document.getElementById('user').value

    var originalName = search.split(' ').join('')

    fetch("https://api.github.com/users/"+originalName).then((result)=>result.json()).then((data)=>{
        console.log(data)
        var board = document.getElementById('resultado')
    board.innerHTML=`
    <img src="${data.avatar_url}" class="avatar">
        <div class="dados"><h1>${data.name}</h1>
        <p>${data.bio}</p>
        <a href="${"https://github.com/"+originalName}">${"https://github.com/"+originalName}</a>
    `
    })

    

    
;})

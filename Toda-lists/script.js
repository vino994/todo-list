var btn = document.getElementById('btn');
var userInput = document.getElementById('detail');
var userList  = document.querySelector('.user-list');
var DataStore =[];
btn.addEventListener('click',(e)=>{

    e.preventDefault();

    //random color

   



      DataStore.push(userInput.value);
      
      userInput.value='';

      userList.innerHTML='';
      DataStore.forEach((data)=>{
        var red = Math.floor(Math.random()*256);
        var green = Math.floor(Math.random()*256);
        var blue = Math.floor(Math.random()*256);
    
        var r = red.toString(16).padStart(2,'0');
        var g = green.toString(16).padStart(2,'0');
        var b = blue.toString(16).padStart(2,'0');
    
        var hexColor = `#${r}${g}${b}`;
        var list = document.createElement('li');
       list.className = 'list-details';
       list.style.backgroundColor=hexColor;
       list.innerHTML = `<button>${data}<span><i class="fa-solid fa-square-xmark"></i></span></button>`;
   
        userList.appendChild(list);
      })
      

})
//Event delecation while click li element icon to remove list


userList.addEventListener('click',(e)=>{
     if(e.target.classList.contains('fa-square-xmark')){
        var listItem = e.target.closest('li');
        var data = listItem.textContent.trim();
        var index =  DataStore.indexOf(data);

        if(index !== -1){
            DataStore.splice(0,index);
        }
        listItem.remove();

        ///now close button click working fine....
     }
})


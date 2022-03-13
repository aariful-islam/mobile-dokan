document.getElementById('iphone').addEventListener('click',function(){
    fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    .then(res=>res.json())
    .then(data=>showIphones(data.data))

})
const showIphones =(iphones)=>{
    const iphonesField=document.getElementById('showIphone')
    iphones.forEach(iphone => {
        const div=document.createElement('div');
        div.innerHTML=`
        <div class="card">
    <img src="${iphone.image}" class="card-img-top h-25 w-25 mx-auto" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
        `
        iphonesField.appendChild(div)
        
    });



}
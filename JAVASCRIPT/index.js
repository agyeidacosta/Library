
 const hambuger = document.querySelector('.humbuger'); 
  const navMenu = document.querySelector('.nav-bar'); 
  const closeBtn = document.querySelector('.nav-bar .close'); 
  const navLinks = document.querySelectorAll('.nav-bar a'); // select all links 
 
  // Open menu 
  hambuger.addEventListener('click', () => { 
    navMenu.classList.add('active'); 
  }); 
 
  // Close menu with close button 
  closeBtn.addEventListener('click', () => { 
    navMenu.classList.remove('active'); 
  }); 
 
  // Close menu when a link is clicked 
  navLinks.forEach(link => { 
    link.addEventListener('click', () => { 
      navMenu.classList.remove('active'); 
    }); 
  }); 

function fasttime(){
  const gettime=new Date();
 const el=document.getElementById('time');
  el.innerHTML=gettime.toLocaleString("en-GB",{

 day:"2-digits";
 month:"short";
 year:"numeric";
 hour:"2-digits";
 minutes:"2-digits";
 second:"2-digits";
  el.style.margin='20px 0';
   el.style.color='gold';
   el.style.padding='15px';
   el.style.width='400px';
})
}

setInterval(fasttime,1000);
 

  function popupmessage(){
  alert("Payment Made Successfully");
   

  }


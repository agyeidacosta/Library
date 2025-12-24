
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


  const gettime=new Date('2025-12-24 10:44:00');
 const el=document.getElementById('time');
  el.innerHTML=gettime.toLocaleString();
  el.style.margin='20px 0';
   el.style.color='gold';
   el.style.padding='15px';
   el.style.width='400px';
   
 

  function popupmessage(){
  alert("Payment Made Successfully");
   

  }

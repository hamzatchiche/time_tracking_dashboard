fetch('../data.json')
    .then(response => response.json()) // Parse JSON
    .then(data => {
       const items=document.querySelectorAll('.time-btn');
       updatetime();
       items.forEach(item => {
        item.addEventListener('click' ,()=>
        {
            items.forEach(li => li.classList.remove('active'));
            item.classList.add('active');
            updatetime();
        })
       })
       function updatetime() {
           const item=document.querySelectorAll(".cards");
           let currenthour=document.querySelectorAll(".current-hour");
           let previoushour=document.querySelectorAll(".previous-hour");
           const timeframe=document.querySelector('.active').dataset.type;

       data.forEach((item , i)=> {

        let current =item.timeframes[timeframe].current;
        let previous = item.timeframes[timeframe].previous;
console.log(item.timeframes[timeframe]);
        if (currenthour[i]) {
        // currenthour[i].textContent = `${current}hrs`;
        
          const obj = { val: 0 };
          gsap.to(obj, {
            val: current,
            duration: 0.5,
            ease: 'power1.out',
            onUpdate: () => {
              currenthour[i].textContent = `${Math.floor(obj.val)}hrs`;
            }
          });
      }
       if(previoushour[i]) {
        const pre={preval : 0};
        gsap.to(pre,{
          preval: previous,
          duration: 0.5,
          ease:"power1.out",
          onUpdate:() =>{
            previoushour[i].textContent = `Last ${timeframe.replace('ly', '').replace('i','y')} ${Math.floor(pre.preval)}hrs`;
          }
        })
       }
      
    })};
   gsap.from(".card", {
        duration: 0.5,
        opacity: 0,
        y: -20,
        stagger: 0.2,
        ease: "power2.out"
      });
    
 }) 


    .catch(error => console.error('Error fetching JSON:', error));

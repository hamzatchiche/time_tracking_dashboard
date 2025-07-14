const data = [
  {
    title: "Work",
    timeframes: {
      daily: { current: 5, previous: 7 },
      weekly: { current: 32, previous: 36 },
      monthly: { current: 103, previous: 128 }
    }
  },
  {
    title: "Play",
    timeframes: {
      daily: { current: 1, previous: 2 },
      weekly: { current: 10, previous: 8 },
      monthly: { current: 23, previous: 29 }
    }
  },
  {
    title: "Study",
    timeframes: {
      daily: { current: 0, previous: 1 },
      weekly: { current: 4, previous: 7 },
      monthly: { current: 13, previous: 19 }
    }
  },
  {
    title: "Exercise",
    timeframes: {
      daily: { current: 1, previous: 1 },
      weekly: { current: 4, previous: 5 },
      monthly: { current: 11, previous: 18 }
    }
  },
  {
    title: "Social",
    timeframes: {
      daily: { current: 1, previous: 3 },
      weekly: { current: 5, previous: 10 },
      monthly: { current: 21, previous: 23 }
    }
  },
  {
    title: "Self Care",
    timeframes: {
      daily: { current: 0, previous: 1 },
      weekly: { current: 2, previous: 2 },
      monthly: { current: 7, previous: 11 }
    }
  }
];

// Le reste du code
const items = document.querySelectorAll('.time-btn');
updatetime();

items.forEach(item => {
  item.addEventListener('click', () => {
    items.forEach(li => li.classList.remove('active'));
    item.classList.add('active');
    updatetime();
  });
});

function updatetime() {
  let currenthour = document.querySelectorAll(".current-hour");
  let previoushour = document.querySelectorAll(".previous-hour");
  const timeframe = document.querySelector('.active').dataset.type;

  data.forEach((item, i) => {
    let current = item.timeframes[timeframe].current;
    let previous = item.timeframes[timeframe].previous;

    if (currenthour[i]) {
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

    if (previoushour[i]) {
      const pre = { preval: 0 };
      gsap.to(pre, {
        preval: previous,
        duration: 0.5,
        ease: "power1.out",
        onUpdate: () => {
          previoushour[i].textContent = `Last ${timeframe.replace('ly', '').replace('i', 'y')} ${Math.floor(pre.preval)}hrs`;
        }
      });
    }
  });
}

gsap.from(".card", {
  duration: 0.5,
  opacity: 0,
  y: -20,
  stagger: 0.2,
  ease: "power2.out"
});

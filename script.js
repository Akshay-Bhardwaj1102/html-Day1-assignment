//   const observer = new IntersectionObserver(
//     (entries, observer) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("visible");
//           observer.unobserve(entry.target); // Optional: run only once
//         }
//       });
//     },
//     {
//       threshold: 0.2, // Trigger when 20% is visible
//     }
//   );

//   const targets = document.querySelectorAll(".description-wrapper",".list-wrapper");
//   targets.forEach(target => {
//   observer.observe(target);
// });

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2,
  }
);

// Select both elements
const targets = document.querySelectorAll(".description-wrapper, .list-wrapper");

targets.forEach(target => {
  observer.observe(target);
});

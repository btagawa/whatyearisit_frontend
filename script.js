
fetch('https://whatyearisit-backend-neon.vercel.app/year')
.then(response => response.json())
.then(data => {
    console.log(data)
  document.body.querySelector("#year").textContent = data.year
});

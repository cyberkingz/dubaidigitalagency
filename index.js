const h1 = document.querySelector("h1");

window.addEventListener(("mousedown"), (e) => {
        h1.style.color = "red";
})

window.addEventListener(("mouseup"), (e) => {
        h1.style.color = "white";
})

h1.addEventListener(("mouseenter"), (e) => {
    h1.style.color = "orange";
    h1.style.transform = 'rotate(20deg)';
})

h1.addEventListener(("mouseleave"), (e) => {
    h1.style.color = "white";
    h1.style.transform = 'rotate(0deg)';
})

window.addEventListener(("mousemove"), (e) => {
    
})


/* window.addEventListener(("mousemove"), (e) => {
    h1.style.color = "red";
}) */
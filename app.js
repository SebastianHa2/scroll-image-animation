let scrollableSection = document.querySelector('.scrollable'), 
images = [...document.querySelectorAll('.image')]

let current = 0, target = 0, ease = 0.75

document.body.style.height = `${scrollableSection.getBoundingClientRect().height}px`

images.forEach((image, index) => {
    image.style.backgroundImage = `url('./images/image-${index + 1}.jpeg')`
})

function lerp(start, end, ease) {
    return start * (1 - ease) + end * ease
}

function animate() {
    target = window.scrollY
    current = lerp(current, target, 0.75)

    scrollableSection.style.transform = `translate3d(0, ${-current}px, 0)`

    images.forEach(image => {
        let top = image.parentElement.getBoundingClientRect().top
        image.style.transform = `rotateX(${top * 0.075}deg) rotateY(${top * 0.075}deg)`
    })

    requestAnimationFrame(animate)
}

animate()
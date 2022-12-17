const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const square = entry.target.querySelector('.intro-back');

        if (entry.isIntersecting) {
            square.classList.add('intro-new');
            return; // if we added the class, exit the function
        }

        // We're not intersecting, so remove the class!
        square.classList.remove('intro-back-reverse');
    });
});

observer.observe(document.querySelector('.intro-section'));                                 [                                                                                                                                                                                                                                                                                                                                                                                            p8-     cccccccccccccccccccccccccccccccccccccccccccccccccccbvg]
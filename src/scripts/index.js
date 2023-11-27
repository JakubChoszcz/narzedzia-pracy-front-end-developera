document.addEventListener('DOMContentLoaded', () => {
    // hamburger
    const hamburgerButton = document.querySelector('.navbar__hamburger-button');
    const hamburgerLinksList = document.querySelector('.navbar__links');
    const hamburgerLinks = hamburgerLinksList.querySelectorAll('a');

    hamburgerButton.addEventListener('click', () => {
        handleToggleHamburger();
    })

    hamburgerLinks.forEach(hamburgerLink => {
        hamburgerLink.addEventListener('click', () => {
            handleToggleHamburger();
        })
    })

    function handleToggleHamburger() {
        hamburgerButton.classList.toggle('active');
        hamburgerLinksList.classList.toggle('active');
    }

    // scroll top
    const scrollTopButton = document.getElementById('scroll-top')

    document.addEventListener('scroll', () => {
        const { scrollY } = window;

        if (scrollY > 100) {
            scrollTopButton.classList.add('active');
        } else {
            scrollTopButton.classList.remove('active');
        }
    })

    scrollTopButton.addEventListener('click', () => {
        handleScrollTop();
    })

    function handleScrollTop() {
        window.scrollTo(0, 0);
    }

    // testimonials
    const testimonials = document.querySelectorAll('.testimonials');

    testimonials.forEach(testimonial => {
        const cards = testimonial.querySelectorAll('.testimonials__cards li');
        const prevCardButton = testimonial.querySelector('.testimonials__arrow.left');
        const nextCardButton = testimonial.querySelector('.testimonials__arrow.right');
        const pagination = testimonial.querySelector('.testimonials__pagination');
        let paginationBullets = [];
        let currentCard = 0;

        createPaginationBullets();
        handleCards();

        prevCardButton.addEventListener('click', () => {
            currentCard = currentCard - 1;
            handleCards();
        })

        nextCardButton.addEventListener('click', () => {
            currentCard = currentCard + 1;
            handleCards();
        })

        function handleCards() {
            cards.forEach((card, cardIndex) => {
                card.classList.remove('active');

                cardIndex === currentCard && card.classList.add('active');
            })

            handleArrows();
            handlePagination();
        }

        function handleArrows() {
            if (currentCard === 0) {
                prevCardButton.classList.add('unactive');
                prevCardButton.setAttribute('disabled', '');
            } else {
                prevCardButton.classList.remove('unactive');
                prevCardButton.removeAttribute('disabled');
            }

            if (currentCard === cards.length - 1) {
                nextCardButton.classList.add('unactive');
                nextCardButton.setAttribute('disabled', '');
            } else {
                nextCardButton.classList.remove('unactive');
                nextCardButton.removeAttribute('disabled');
            }
        }

        function createPaginationBullets() {
            for (let i = 0; i < cards.length; i++) {
                const bullet = document.createElement('button');
                bullet.classList.add('pagination__bullet')

                bullet.addEventListener('click', () => {
                    currentCard = i;
                    handleCards();
                })

                pagination.appendChild(bullet);
                paginationBullets.push(bullet);
            }
        }

        function handlePagination() {
            paginationBullets.forEach((bullet, bulletIndex) => {
                if (bulletIndex === currentCard) {
                    bullet.classList.add('active');
                } else {
                    bullet.classList.remove('active');
                }
            })
        }
    })
})
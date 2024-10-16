// slick slider for banner
$('.banner-slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 3000,
    draggable: false,
  });

  $('.ao-road').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    focusOnSelect: false,
  });

  // header footer script
      // mega menu 
        // Get the modal element
        var modal = document.getElementById('searchModal');

        // Get the link that opens the modal
        var searchLink = document.getElementById('searchLink');

        // Get the <span> element that closes the modal
        var span = document.querySelector('.close');

        // When the user clicks on the search link, open the modal
        searchLink.onclick = function () {
            modal.style.display = "block";
        }

        // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
            modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }

        // JavaScript to handle mega menu hover and content change
        const links = document.querySelectorAll('.mega-left .megamenu-li');
        const contents = document.querySelectorAll('.mega-right > div');

        links.forEach((link, index) => {
            link.addEventListener('mouseover', () => {
                contents.forEach(content => content.style.display = 'none');
                contents[index].style.display = 'block';
            });
        });

        const megaMenuLinks = document.querySelectorAll('.megamenu-li');
        const megaMenuContents = document.querySelectorAll('.megamenu-li-outer > div');

        megaMenuLinks.forEach((link, index) => {
            link.addEventListener('mouseover', () => {
                megaMenuContents.forEach(content => content.classList.remove('active'));

                megaMenuContents[index].classList.add('active');

                megaMenuContents[index].classList.remove('inactive');

                megaMenuContents.forEach((content, i) => {
                    if (i !== index) {
                        content.classList.add('inactive');
                    }
                });
            });
        });

        // mobile toggle 
        const Hamberger = document.querySelector('.bamber');
        const Side = document.querySelector('.side');
        const mob = document.querySelector('.bodyy');
        Hamberger.addEventListener("click", () => {
            Hamberger.classList.toggle("active");
            Side.classList.toggle("active");
            mob.classList.toggle("active");
            // console.log("One");
        })

        //scroll 
        const Head = document.querySelector(".navbar");
        const effect = document.querySelector(".effect");

        if (scroll) {
            window.addEventListener("scroll", (e) => {
                if (scrollY > 10) {
                    Head.classList.add("effect");
                } else {
                    Head.classList.remove("effect");
                }
            })
        }

        // resources page
        // Select the necessary elements
        const Rbutton = document.querySelector(".ao-resource__cta");
        const liSt = document.querySelector(".ao-resource__outer");
        const Btext = document.querySelector(".ao-resource__rightcta");

        // Check if elements are found
        if (Rbutton && liSt && Btext) {
        Rbutton.addEventListener("click", () => {
            // Toggle the visibility class on liSt
            liSt.classList.toggle("visible-tile");

            // Toggle the text content of Btext
            Btext.textContent = Btext.textContent === "Explore More" ? "Explore Less" : "Explore More";
            });
        } else {
        console.error("One or more elements are not found.");
        }
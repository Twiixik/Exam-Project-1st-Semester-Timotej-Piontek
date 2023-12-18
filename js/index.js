
// THIS IS THE FUCNTION FOR FILTERING CATEGORIES 

{
    window.onload = function() {
        var div = document.getElementById("categories");
        const children = div.getElementsByTagName("ul")[0].children;
        const tags = ['20-70', '60-2000', 'footwear', 'jewellery', 'women', 'men', 'brands',];

        Array.from(children).forEach(element => { 

            const link = element.getElementsByTagName("a")[0];
            const tag = link.getAttribute('filter-tag')

            link.onclick = function() {
                const cards = document.getElementById("stores").getElementsByClassName("store-card");

                Array.from(cards).forEach(element => {
                    element.classList.remove('hide');

                    if (!element.getAttribute('filter-tags').includes(tag)) {
                        element.classList.add('hide');
                    }

                    if (tag == 'all') {
                        element.classList.remove('hide');
                    }
                });
            }
        });
        // THIS IS DROP DOWN MENU FOR MOBILE FOR CATEGORIES 
        
        const toggler = document.getElementById("drop-down-toggler");
        toggler.onclick = function() {
            var categoriyList = document.getElementById("category-selectors");

            if (categoriyList.style.display == 'none') {
                categoriyList.style.display = 'block';
            } else {
                categoriyList.style.display = 'none';
            }
        }
    } 
}

// DROP DOWN MENU FOR ALL MOBILE PAGES 

const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}

// FUNCTION FOR LIKE BUTTON ALERT 

function likeReview() {
    alert('Liked!');
}

function dislikeReview() {
    alert('Disliked!');
}
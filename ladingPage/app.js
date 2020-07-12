//side nav
const sideNav = document.querySelector('.sidenav');
    // sideNav.style.background = 'green';
    M.Sidenav.init(sideNav, {});

//    document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.slider');
//     var instances = M.Slider.init(elems, options);
//   });

// slider
    const slider = document.querySelector('.slider');
    M.Slider.init(slider, {
            indicators:false,
            height: 500,
            transition: 500,
            interval:6000
    });


    // autocomplete

    const ac = document.querySelector('.autocomplete');
    M.Autocomplete.init(ac, {
            data: {
                "Engineering": null,
                "Diploma": null,
                "Management": null,
                "Pharmacy": null,
                "Medical": null,
                "LAW": null,
            }
    });


    // material box
    const nb = document.querySelectorAll('.materialboxed');
    M.Materialbox.init(nb, {});
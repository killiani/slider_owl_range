
$(document).ready(function() {
    var owl = $(".owl-carousel"),


// rangeArr = [],
        inputType =$("input[type=range]");
    owl.owlCarousel({
// 'loop': true,
// 'mouseDrag': false,
// 'autoplay': true,
        margin: 20,

        'responsive': {
            0: {
                items: 1,
                slideBy: 1

            },
            980: {
                items: 2,
                slideBy: 1

            },
            1280: {
                items: 3,
                slideBy: 1,

            }
        }

    });
//   function getIndex(event) {

//   }
    owl.on('changed.owl.carousel', function(event) {
        console.log(event.item.index);
        inputType.val(event.item.index);

    });

    $(".go-me").click(function() {
        owl.trigger("next.owl.carousel");
    });
    $(".back-me").on("click", function() {
        owl.trigger("prev.owl.carousel");
    });
    $("input").on("change", function(e) {
        e.preventDefault();
        console.log(inputType.val());
// console.log(e.item.index);
// FIGURE OUT HOW TO GET CAROUSEL INDEX

        $('.owl-carousel').trigger('to.owl.carousel', [inputType.val(),1,true]);

    });
});




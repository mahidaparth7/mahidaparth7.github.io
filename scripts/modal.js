$(document).ready(function () {
  // MODAL
  var modalText = {
    skillout: {
      title: "Skillout",
      tag: "MULTI-LEVEL MARKETING.",
      detail:
        "Skillout is the first online platform for the best dance teachers. Through our platform you can discover the best dance teachers near you and start dancing..",
    },
    catterfly: {
      title: "Catterfly",
      tag: "Travel, ECommerce",
      link: "https://catterfly.com",
      detail:
        "Catterfly is a travel website that lets users create travel packages based on their need from various itineraries and services.",
    },
    writi: {
      title: "Virtual HealthCare Platform",
      tag: "HealthCare",
      link: "https://writi.ca",
      detail:
        "Virtual Healthcare Platform that is a Canada based startup product which helps the nursing home to automate their prescription filling process. It also sends a copy of the prescription to the pharmacy which distributes the required medicine to nursing home based on prescription.",
    },
    nodesetup: {
      title: "Node-React app deployment npm package",
      tag: "DevOps",
      link: "https://github.com/mahidaparth7/node-deploy",
      detail: "Node Up is npm CLI to deply node-react apps",
    },
    dlgtpl: {
      title: "DLGTPL - Cable & Broadband Service Provider Website",
      tag: "DevOps",
      link: "https://dlgtpl.com/",
      detail:
        "One of my family member's company wanted a website for services they were providing. I used Material Kit Pro to design this website and deliver the purpose of their customer engagement and support.",
    },
    heatandplumb: {
      title: "Heatandplumb.com",
      tag: "E-commerce",
      link: "https://heatandplumn.com",
      detail: "Uk based E-commerce company that sells bathroom products.",
    },
    chart: {
      title: "Finance Chart Wordpress Plugin",
      tag: "wordpress",
      detail:
        "Wordpress Plugin to extract data from crunchbase and display with interactive charts.",
    },
  };

  $("#gallery .button").on("click", function () {
    fillModal(this.id);
    $(".modal-wrap").addClass("visible");
  });

  $(".close").on("click", function () {
    $(".modal-wrap, #modal .button").removeClass("visible");
  });

  $(".mask").on("click", function () {
    $(".modal-wrap, #modal .button").removeClass("visible");
  });

  var carousel = $("#carousel"),
    slideWidth = 700,
    threshold = slideWidth / 3,
    dragStart,
    dragEnd;

  setDimensions();

  $("#next").click(function () {
    shiftSlide(-1);
  });
  $("#prev").click(function () {
    shiftSlide(1);
  });

  carousel.on("mousedown", function () {
    if (carousel.hasClass("transition")) return;
    dragStart = event.pageX;
    $(this).on("mousemove", function () {
      dragEnd = event.pageX;
      $(this).css("transform", "translateX(" + dragPos() + "px)");
    });
    $(document).on("mouseup", function () {
      if (dragPos() > threshold) {
        return shiftSlide(1);
      }
      if (dragPos() < -threshold) {
        return shiftSlide(-1);
      }
      shiftSlide(0);
    });
  });

  function setDimensions() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      slideWidth = $(window).innerWidth();
    }
    $(".carousel-wrap, .slide").css("width", slideWidth);
    $(".modal").css("max-width", slideWidth);
    $("#carousel").css("left", slideWidth * -1);
  }

  function dragPos() {
    return dragEnd - dragStart;
  }

  function shiftSlide(direction) {
    if (carousel.hasClass("transition")) return;
    dragEnd = dragStart;
    $(document).off("mouseup");
    carousel
      .off("mousemove")
      .addClass("transition")
      .css("transform", "translateX(" + direction * slideWidth + "px)");
    setTimeout(function () {
      if (direction === 1) {
        $(".slide:first").before($(".slide:last"));
      } else if (direction === -1) {
        $(".slide:last").after($(".slide:first"));
      }
      carousel.removeClass("transition");
      carousel.css("transform", "translateX(0px)");
    }, 700);
  }

  function fillModal(id) {
    $("#modal .title").text(modalText[id].title);
    $("#modal .detail").text(modalText[id].detail);
    $("#modal .tag").text(modalText[id].tag);
    if (modalText[id].link)
      $("#modal .button")
        .addClass("visible")
        .parent()
        .attr("href", modalText[id].link);

    $.each($("#modal li"), function (index, value) {
      $(this).text(modalText[id].bullets[index]);
    });
    $.each($("#modal .slide"), function (index, value) {
      console.log(index);
      $(this).css({
        background:
          "url('img/slides/" +
          id +
          "/" +
          id +
          "-" +
          index +
          ".jpg') center center/cover",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      });
    });
  }
});

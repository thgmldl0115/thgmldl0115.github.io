// butti-N4 [ndm0xBm6x9]
(function() {
  $(function() {
    $(".butti-N4").each(function() {
      const $block = $(this);
      // Swiper
      const swiper = new Swiper(".butti-N4 .contents-swiper", {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        autoplay: {
          delay: 5000,
        },
        pagination: {
          el: ".butti-N4 .swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".butti-N4 .swiper-button-next",
          prevEl: ".butti-N4 .swiper-button-prev",
        },
      });
      // Swiper Play, Pause Button
      const pauseButton = $block.find('.swiper-button-pause');
      const playButton = $block.find('.swiper-button-play');
      playButton.hide();
      pauseButton.show();
      pauseButton.on('click', function() {
        swiper.autoplay.stop();
        playButton.show();
        pauseButton.hide();
      });
      playButton.on('click', function() {
        swiper.autoplay.start();
        playButton.hide();
        pauseButton.show();
      });
    });
  });
})();
// butti-N9 [cEm0xBM7P4]
(function() {
  $(function() {
    $(".butti-N9").each(function() {
      const $block = $(this);
      // Swiper
      const swiper = new Swiper(".butti-N9 .contents-swiper", {
        slidesPerView: 'auto',
        spaceBetween: 0,
        loop: true,
        autoplay: {
          delay: 3000,
        },
        navigation: {
          nextEl: ".butti-N9 .swiper-button-next",
          prevEl: ".butti-N9 .swiper-button-prev",
        },
      });
    });
  });
})();
// butti-N26 [vIm0Xc0uxl]
(function() {
  $(function() {
    $(".butti-N26").each(function() {
      const $block = $(this);
      const $calendar = $block.find(".contents-date")
      // Date Range Picker
      $calendar.dateRangePicker({
        //   format: "YYYY-MM",
        container: '.butti-N26 .contents-top',
        // language:'ko',
        language: 'custom',
        inline: true,
        alwaysOpen: true,
        singleDate: true,
        showShortcuts: false,
      }).bind('datepicker-first-date-selected', function(event, obj) {
        console.log(obj);
      }).bind('datepicker-change', function(event, obj) {
        console.log(obj);
      });
      // Amount Count Button Click Event
      $block.find(".contents-amount").each(function() {
        const $this = $(this);
        const $amountNumElement = $this.find(".contents-amount-num span");
        $this.on("click", ".btn-minus", function() {
          let amountNum = parseInt($amountNumElement.text());
          if (amountNum > 1) {
            amountNum--;
          }
          $amountNumElement.text(amountNum);
        });
        $this.on("click", ".btn-plus", function() {
          let amountNum = parseInt($amountNumElement.text());
          amountNum++;
          $amountNumElement.text(amountNum);
        });
      });
    });
  });
})();
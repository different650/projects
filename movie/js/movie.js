$(function () {
  initFlipCards();
});

function initFlipCards() {

  $('.flip_card').on('click', function (e) {
    const $card = $(this);

    // 이미 열린 카드면 닫기, 아니면 열기
    $card.toggleClass('active');

  });
}
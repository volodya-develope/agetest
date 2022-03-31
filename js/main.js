$(function () {
  $('.menu__btn').on('click', function () {
    $('.menu__items').toggleClass('menu__items-active'),
      $('.menu__btn').toggleClass('menu__btn-active')
  })
})
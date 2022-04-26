// const p_tag = document.createElement('p');
// p_tag.appendChild(document.createTextNode('text p tag'));
// p_tag.classList.add('class');

// console.log(p_tag);

$(".js-range-slider").ionRangeSlider({
  type: "single",
  min: 1900000,
  max: 59312000,
  from: 40000000,
  to: 59312000,
  
  keyboard:true,
  grid_num:4,
  grid: true,
  to_fixed:true,
  from_shadow:true,
  prettify_separator:"،",
  prettify_enabled:true,

});


const day = new Date(),
option = {
     weekday : 'long',
     year : 'numeric',
     month: 'long',
     day:'
     '
}

console.log(day.toLocaleString('fa-IR' , option));

 
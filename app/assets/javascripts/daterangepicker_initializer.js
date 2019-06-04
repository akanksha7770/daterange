// /* globals daterangepicker, $ */
// "use strict";

// $(function(){
//   $('[data-behavior=daterangepicker]').daterangepicker({
//     locale: { format: 'DD/MM/YYYY' },
//     singleDatePicker: 'true',
//     cancelLabel: 'Clear',
//     "timePicker": true,
//     "singleDatePicker": true,
//     "timePickerIncrement": 1,
//     "autoApply": true,
//     "format": 'YYYY-MM-DD HH:mm:ss'
//   });

//   $('[data-behavior=daterangepicker]').on('cancel.daterangepicker', function(){
//     $(this).val(' ');
//   });

// });
/* globals daterangepicker, $ */
"use strict";

$(function(){
  $('[data-behavior=daterangepicker]').daterangepicker({
    locale: { format: 'DD/MM/YYYY'},
    cancelLabel: 'Clear'
  });

  $('[data-behavior=daterangepicker]').on('cancel.daterangepicker', function(){
    $(this).val(' ');
  });

});
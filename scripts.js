//Download E-Book and Submit Form - After validating that everything in the form is filled out correctly 
var firstName = false; 
var lastName = false; 
var email = false; 
var phone = false; 
var city = false; 
var state = false; 
var capital = false; 
//Check if email is valid function 
function isEmail(email) { 
     var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
     return regex.test(email); 
}; 
//Check if phone is valid function 
function isPhone(phone) { 
     var regex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/; 
     return regex.test(phone); 
} 
//Checking if first name has value 
$(document).on('change keyup', '#input_3_8', function () { 
     if ($(this).val()) { 
         firstName = true; 
     } else { 
         firstName = false; 
     } 
     //Adding pdf download link to button if ALL fields are valid after filling out first name 
     if (firstName && lastName && email && phone && city && state && capital) { 
         $('.download-pdf-link').attr('href', '/wp-content/uploads/2020/01/the-buffalo-spot-e-book.pdf'); 
     } 
}); 
//Checking if last name has value 
$(document).on('change keyup', '#input_3_9', function () { 
     if ($(this).val()) { 
         lastName = true; 
     } else { 
         lastName = false; 
     } 
     //Adding pdf download link to button if ALL fields are valid after filling out last name 
     if (firstName && lastName && email && phone && city && state && capital) { 
         $('.download-pdf-link').attr('href', '/wp-content/uploads/2020/01/the-buffalo-spot-e-book.pdf'); 
     } 
}); 
//Checking if email has value and if its valid with email function 
$(document).on('change keyup', '#input_3_3', function () { 
     if (isEmail($(this).val())) { 
         email = true; 
     } else { 
         email = false; 
     } 
     //Adding pdf download link to button if ALL fields are valid after filling out email 
     if (firstName && lastName && email && phone && city && state && capital) { 
         $('.download-pdf-link').attr('href', '/wp-content/uploads/2020/01/the-buffalo-spot-e-book.pdf'); 
     } 
}); 
//Checking if phone has value and if its valid with phone function 
$(document).on('change keyup', '#input_3_4', function () { 
     if (isPhone($(this).val())) { 
         phone = true; 
     } else { 
         phone = false; 
     } 
     //Adding pdf download link to button if ALL fields are valid after filling out phone 
     if (firstName && lastName && email && phone && city && state && capital) { 
         $('.download-pdf-link').attr('href', '/wp-content/uploads/2020/01/the-buffalo-spot-e-book.pdf'); 
     } 
}); 
//Checking if city has value 
$(document).on('change keyup', '#input_3_10', function () { 
     if ($(this).val()) { 
         city = true; 
     } else { 
         city = false; 
     } 
     //Adding pdf download link to button if ALL fields are valid after filling out city 
     if (firstName && lastName && email && phone && city && state && capital) { 
         $('.download-pdf-link').attr('href', '/wp-content/uploads/2020/01/the-buffalo-spot-e-book.pdf'); 
     } 
}); 
//Checking if state has value 
$(document).on('change', '#input_3_5', function () { 
     if ($(this).val()) { 
         state = true; 
     } else { 
         state = false; 
     } 
     //Adding pdf download link to button if ALL fields are valid after selecting state 
     if (firstName && lastName && email && phone && city && state && capital) { 
         $('.download-pdf-link').attr('href', '/wp-content/uploads/2020/01/the-buffalo-spot-e-book.pdf'); 
     } 
}); 
//Checking if liquid capital has value 
$(document).on('change', '#input_3_11', function () { 
     if ($(this).val()) { 
         capital = true; 
     } else { 
         capital = false; 
     } 
     //Adding pdf download link to button if ALL fields are valid after selecting liquid capital 
     if (firstName && lastName && email && phone && city && state && capital) { 
         $('.download-pdf-link').attr('href', '/wp-content/uploads/2020/01/the-buffalo-spot-e-book.pdf'); 
     } 
}); 
//Trigger form submission on button click 
$('.download-pdf-link').click(function () { 
     $('#gform_submit_button_3').trigger('click'); 
});
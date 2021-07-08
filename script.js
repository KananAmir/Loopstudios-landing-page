var menu_icon = document.getElementById('menu_icon');
var nav_menu_section = document.getElementById('nav_menu_section');
var close_icon = document.getElementById('close_icon');


menu_icon.addEventListener('click', function(){
    nav_menu_section.style.display = 'block';
    close_icon.style.display ='block';
});

close_icon.addEventListener('click', function(){
    nav_menu_section.style.display = 'none';
    close_icon.style.display ='none';
})
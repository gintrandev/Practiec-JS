const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

var tabs = $$('.tab-item');
var panes = $$('.tab-pane');
var line = $('.line');
var tabActive = $('.tab-item.active');


// Hiện thị line lần đầu vào web 
// Đặt điểm trái của line trùng với điểm trái của tab đang active (offsetLeft)
line.style.left = tabActive.offsetLeft + 'px';

// Đặt độ rộng của line trùng với độ rộng của tab đang active (offsetWidth)
line.style.width = tabActive.offsetWidth + 'px';


// forEach(function(currentValue, index))
tabs.forEach((tab, index) => {

    var pane = panes[index];
    
    // khi click vào tab trong array tabs
    tab.onclick = function() {
        
        // remove class active của tab và pane hiện tại 
        $('.tab-item.active').classList.remove('active');
        $('.tab-pane.active').classList.remove('active');

        // hiển thị lại line khi click vào tab
        line.style.left = this.offsetLeft + 'px';
        line.style.width = this.offsetWidth + 'px';

        // add class active cho tab được click và pane tương ứng với tab đó
        this.classList.add('active');
        pane.classList.add('active');
    };
});
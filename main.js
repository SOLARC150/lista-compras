let n = 1
let item;
const na = document.getElementById('n');

    $('form').on('submit', function(e){
        e.preventDefault();
        const itemAdic = $('form input');
        $(`
        <li>
            <p2 class="${n}">${itemAdic.val()}</p2>
        </li>
        `).appendTo('ul');
        n++;
        itemAdic.val('');

        $('ul li p2').on('click', function() {
            item = this.className;
            
            $(`${'.'+item}`).css('border','none');
            $(`${'.'+item}`).css('text-decoration', 'line-through');
        })
    })



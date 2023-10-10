const categorize = () =>{
    const categoriies = document.querySelectorAll('.category')

    const items = document.querySelectorAll('.product')

    categoriies.forEach(category => {
        category.addEventListener('click', ()=>{

            items.forEach(item => {

                if (category.innerHTML == 'All'){
                    item.style.display = 'flex';
                }
                else if (category.innerHTML == item.id){
                    item.style.display = 'flex';
                }else{
                    item.style.display = 'none';
                }
            });
        })
    });
}

categorize();


const filter = () =>{
    const brand  = document.getElementById('brand');
    const color  = document.getElementById('color');
    const size  = document.getElementById('size');
    const condition  = document.getElementById('condition');
    const origin  = document.getElementById('origin');


    // get selected texts in filters
    selected_brand = brand.options[brand.selectedIndex].text
    selected_color = color.options[color.selectedIndex].text
    selected_size = size.options[size.selectedIndex].text
    selected_origin = origin.options[origin.selectedIndex].text
    selected_condition = condition.options[condition.selectedIndex].text

    filter_data = {
        'brand' : selected_brand,
        'color' : selected_color,
        'size' : selected_size,
        'origin' : selected_origin,
        'condition' : selected_condition,
    }

    fetch('/url', {

        method: 'POST',
        credentials: 'same-origin',

        headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            'X-CSRFToken': csrftoken
        },
        
        body: JSON.stringify({'data':filter_data})
    })
    .then(response => {
        return response.json()
        
    })
    
    .then(data => {
        console.log(data)
        
    })

}


const add_to_cart = (product_id) =>{
    var cart_data = parseInt(document.getElementById('cart-count').innerText)
    var new_cart_data = cart_data += 1

    document.getElementById('cart-count').innerText = new_cart_data

}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('discount-row').addEventListener('click', function(e){
    if (e.target.classList.contains('discount')) {
      e.preventDefault();
      document.getElementById('product').innerHTML = e.target.dataset['product'];
      document.getElementById('title').innerHTML = e.target.dataset['title'];
      document.getElementById('couponcode').innerHTML = e.target.dataset['couponcode'];

      bootstrap.Toast.getOrCreateInstance(document.getElementById('liveToast'), { autohide: false}).show();
    }
    })
    
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            bootstrap.Toast.getOrCreateInstance(document.getElementById('liveToast'), { autohide: false}).dispose();
        }
    });
});
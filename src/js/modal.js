export const register = () => {
    const modal = document.querySelector('.modal');

    // Get the button that opens the modal
    var btn = document.querySelector('.button__register');

    // Get the <span> element that closes the modal
    var close = document.querySelector('.close');

    // When the user clicks on the button, open the modal
    btn.addEventListener('click', () => {
        console.log('clicked the button register');
        // modal.style.display = "block";
    });

    // When the user clicks on <span> (x), close the modal
    close.addEventListener('click', () => {
        modal.style.display = "block";
    });

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };


}












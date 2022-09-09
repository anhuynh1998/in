

const toast = document.getElementById( "toast_1" );
const toastShow = toast.querySelectorAll( ".toast_show" );
const positionToast = [ 'toast--top--right', 'toast--top--left', 'toast--bottom--left', 'toast--bottom--right' ];


const random = () => {
    const randomPosition = Math.floor( Math.random() * positionToast.length );
    const randomToast = Math.floor( Math.random() * toastShow.length );
    let x = positionToast[ randomPosition ];
    let y = toastShow[ randomToast ]
    y.classList.toggle( x )
    setTimeout( function () {
        y.classList.toggle( x )
        
    },3300)
    
}




import Swal from 'sweetalert2'

export function Success(text: string, icon: 'success' | 'error' | 'warning' | 'info' | 'question') {

    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        },
        customClass: {
            popup: 'custom-toast-popup'
        }
    });

    Toast.fire({
        icon: icon,
        title: text
    });

}
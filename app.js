

    // const btn1 = document.querySelector('.btn')

    // btn1.addEventListener('click', () => {
    //     document.querySelector('.p1').textContent = 'Vas por buen caminoooo...'
    //     setTimeout(() => {
    //         document.querySelector('.p1').textContent = 'Aquí saldrá un nuevo mensaje....'
    //     }, 3000);  
    // });


    const btn1 = document.querySelector('.btn')

    btn1.addEventListener('click', () => {
        let counter = 0

        const interval = setInterval (() => {
            counter++
            document.querySelector('.p1').textContent=`${counter}`;
        if (counter >=4) {
            clearInterval(interval)
            document.querySelector('.p1').textContent= 'Comencemos...'
        }
        
        },1000) 

        setTimeout(() => {
                    document.querySelector('.p2').textContent = '¿Qué día el el primer día de la semana?'
                    Toastify({
                        text: "Lunes",
                        duration: 10000,
                        destination: "",
                        newWindow: true,
                        close: true,
                        gravity: "bottom", // `top` or `bottom`
                        position: "right", // `left`, `center` or `right`
                        stopOnFocus: true, // Prevents dismissing of toast on hover
                        style: {
                            background: "linear-gradient(to right, rgb(0 64 144), 0 32 55)",
                        },
                        onClick: function aa () {Swal.fire({
                            title: 'Atención!',
                            text: 'Respuesta correcta',
                            imageUrl: '/img/Logo.png',
                            icon: 'success',
                            confirmButtonText: 'Salir',        
                        }) } // Callback after click
                    }).showToast();

                    Toastify({
                        text: "Martes",
                        duration: 10000,
                        destination: "",
                        newWindow: true,
                        close: true,
                        gravity: "bottom", // `top` or `bottom`
                        position: "right", // `left`, `center` or `right`
                        stopOnFocus: true, // Prevents dismissing of toast on hover
                        style: {
                            background: "linear-gradient(to right, rgb(0 64 144), 0 32 55)",
                        },
                        onClick: function aa () {Swal.fire({
                            title: 'Atención!',
                            text: 'Respuesta correcta',
                            imageUrl: '/img/Logo.png',
                            icon: 'success',
                            confirmButtonText: 'Salir',        
                        }) } // Callback after click
                    }).showToast();
                    Toastify({
                        text: "Miércoles",
                        duration: 10000,
                        destination: "",
                        newWindow: true,
                        close: true,
                        gravity: "bottom", // `top` or `bottom`
                        position: "right", // `left`, `center` or `right`
                        stopOnFocus: true, // Prevents dismissing of toast on hover
                        style: {
                            background: "linear-gradient(to right, rgb(0 64 144), 0 32 55)",
                        },
                        onClick: function aa () {Swal.fire({
                            title: 'Atención!',
                            text: 'Respuesta correcta',
                            imageUrl: '/img/Logo.png',
                            icon: 'success',
                            confirmButtonText: 'Salir',        
                        }) } // Callback after click
                    }).showToast();
                    Toastify({
                        text: "Jueves",
                        duration: 10000,
                        destination: "index.html",
                        newWindow: true,
                        close: true,
                        gravity: "bottom", // `top` or `bottom`
                        position: "right", // `left`, `center` or `right`
                        stopOnFocus: true, // Prevents dismissing of toast on hover
                        style: {
                            background: "linear-gradient(to right, rgb(0 64 144), 0 32 55)",
                        },
                        onClick: function aa () {Swal.fire({
                            title: 'Atención!',
                            text: 'Respuesta correcta',
                            imageUrl: '/img/Logo.png',
                            icon: 'success',
                            confirmButtonText: 'Salir',        
                        }) } // Callback after click
                    }).showToast();
                    Toastify({
                        text: "Viernes",
                        duration: 10000,
                        destination: "",
                        newWindow: true,
                        close: true,
                        gravity: "bottom", // `top` or `bottom`
                        position: "right", // `left`, `center` or `right`
                        stopOnFocus: true, // Prevents dismissing of toast on hover
                        style: {
                            background: "linear-gradient(to right, rgb(0 64 144), 0 32 55)",
                        },
                        onClick: function aa () {Swal.fire({
                            title: 'Atención!',
                            text: 'Respuesta correcta',
                            imageUrl: '/img/Logo.png',
                            icon: 'success',
                            confirmButtonText: 'Salir',        
                        }) } // Callback after click
                    }).showToast();
                    Toastify({
                        text: "Sábado",
                        duration: 10000,
                        destination: "",
                        newWindow: true,
                        close: true,
                        gravity: "bottom", // `top` or `bottom`
                        position: "right", // `left`, `center` or `right`
                        stopOnFocus: true, // Prevents dismissing of toast on hover
                        style: {
                            background: "linear-gradient(to right, rgb(0 64 144), 0 32 55)",
                        },
                        onClick: function aa () { Swal.fire({
                            title: 'Atención!',
                            text: 'Respuesta correcta',
                            imageUrl: '/img/Logo.png',
                            icon: 'success',
                            confirmButtonText: 'Salir',        
                        })} // Callback after click
                    }).showToast();
                    Toastify({
                        text: "Domingo",
                        duration: 10000,
                        
                        newWindow: false,
                        close: true,
                        gravity: "bottom", // `top` or `bottom`
                        position: "right", // `left`, `center` or `right`
                        stopOnFocus: true, // Prevents dismissing of toast on hover
                        style: {
                            background: "linear-gradient(to right, rgb(0 64 144), 0 32 55)",
                        },
                        onClick: function aa () { Swal.fire({
                            title: 'Atención!',
                            text: 'Respuesta correcta',
                            imageUrl: '/img/Logo.png',
                            icon: 'success',
                            confirmButtonText: 'Salir',        
                        }) } // Callback after click
                    }).showToast();

                }, 4000);
       

    });


    

// fetch('https://dummyjson.com/auth/login', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({

//         username: 'kminchelle',
//         password: '0lelplR',
//         // expiresInMins: 60, // optional
//     })
// })
//     .then(res => res.json())
//     .then(console.log);

addEventListener("DOMContentLoaded", (event) => {
    event.preventDefault()
    const btn = document.getElementById('loginForm');
    btn.addEventListener('click', (event) => {
        event.preventDefault()
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (!username || !password) {
            alert('Tên đăng nhập và mật khẩu bắt buộc điền')
            return
        }

        fetch("https://dummyjson.com/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: 'kminchelle',
                password: '0lelplR',
                // expiresInMins: 60, // optional
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                // if (data.token) {
                //     localStorage.setItem("token", data.token);
                //     window.location.href = "/home.html"
                // }
                // else {
                //     alert('Đăng nhập không thành công')
                //     window.location.href = "/index.html"
                // }
                localStorage.setItem('token', data.token);
                window.location.href = '/html/home.html';
            })
            .catch((error) => {
                console.log(error);
            })
    })
    if(localStorage.getItem('token')) {
        window.location.href = '/html/home.html';
    }
});
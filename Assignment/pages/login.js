document.getElementById("loginform").addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const res = await fetch('http://127.0.0.1:9090/api/login', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, password: password }),
    });
    const data = await res.json();
    if (data.success) {
        localStorage.setItem('LoginId', data.email)
    }
    console.log(data.email, ":::", password);
})
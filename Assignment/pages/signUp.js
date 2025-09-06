document.getElementById("signform").addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const res = await fetch('http://127.0.0.1:9090/api/signup', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email: email, password: password }),
    });
    const data = await res.json();
    console.log(data);
    if (data.success) {
        alert('user created, go to login')
    }
    console.log(data.email, ":::", password);
})
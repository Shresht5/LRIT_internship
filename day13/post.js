document.getElementById('loginId').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(`Email: ${email} \nPassword: ${password}`);
})
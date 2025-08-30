const test1 = () => {//callback
    fetch('https://dummyjson.com/test')
        .then((res) => {
            res.json().then((data) => {
                console.log(`status: ${data.status}, Method: ${data.method}`)
            })
        })
}
const test2 = () => {//promise
    fetch('https://dummyjson.com/test')
        .then((res) =>
            res.json()
        )
        .then((data) => {
            console.log(`status: ${data.status}, Method: ${data.method}`);
        })
        .catch((err) => { console.log(err) });
};
const test3 = async () => {//async/await
    const res = await fetch('https://dummyjson.com/test')
    const data = await res.json();
    console.log(`status: ${data.status}, Method: ${data.method}`);
}
test1();
test2();
test3();

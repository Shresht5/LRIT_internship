const test = () => {
    fetch('https://dummyjson.com/test')
        .then((res) => {
            res.json().then((data) => {
                console.log(`status: ${data.status}, Method: ${data.method}`)
            })
        })

}
test();
function name() {
    return function data() {
        console.log("xyz")
    }
}
const fun = name();
console.log(fun)
fun();
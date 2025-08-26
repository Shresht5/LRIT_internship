function home() {
    while (true) {

        let firstnumber = Number(prompt("Enter First Number"));
        let operater = prompt("Enter Operator");
        let secondnumber = Number(prompt("Enter Second Number"));
        let answer;
        switch (operater) {
            case '+':
                answer = firstnumber + secondnumber;
                break;
            case '-':
                answer = firstnumber - secondnumber;
                break;
            case '*':
                answer = firstnumber * secondnumber;
                break;
            case '/':
                answer = firstnumber / secondnumber;
                break;
            case '^':
                answer = firstnumber ** secondnumber;
                break;
            case '%':
                answer = firstnumber % secondnumber;
                break;
            default:
                alert("please enter proper operator")
        }
        alert(`Ans = ${answer}`);
        const Exit = prompt("do you want to exit (Y/N)")
        if (Exit == "Y") { return; }
    }
}


home()
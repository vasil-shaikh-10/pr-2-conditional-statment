function fibonacci(){
    let n =parseInt(document.getElementById('value').value);

    let p="", v1=0, v2=1, fib;

    for(i=1; i<=n; i++){
        p += v1 + ',';
        fib = v1 + v2;
        v1 = v2;
        v2 = fib;
    }

    document.getElementById('num').innerHTML = p;
}
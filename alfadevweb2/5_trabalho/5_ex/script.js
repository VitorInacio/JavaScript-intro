cnh = false;
idade = 18;

if (idade >= 18 && cnh == true) {
    console.log("Você pode dirigir");
}else if ( idade >= 18 || cnh == false) {
    console.log("Você precisa ter uma CNH");
}else {
    console.log("Você precisa ter 18 anos")
}
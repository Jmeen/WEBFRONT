if (name === null || name === "") {
    name = "Stranger";
}
document.write('Welcome,', name);

let result = confirm("are you ready?");
if(result){
    alert("Let`s do it!")
}
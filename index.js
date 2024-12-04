function findnumber(){
    const dicenumber = document.getElementById("dicenumber");
    const diceimage = document.getElementById("diceimage");
    const int1 = document.getElementById("num").value;
    const values = [];
    const images = [];
    for(let i=0;i<int1;i++)
    {
        const value = Math.floor(Math.random()*6 + 1);
        values.push(value);
        images.push(`<img src="images/${value}.png" alt="Dicevalue${value}">`);
    }
    dicenumber.textContent = values.join(", ");
    diceimage.innerHTML = images.join("");
}
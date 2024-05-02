//0 <= Math.random() < 1
//Math.floor(): Rounds down the result to the nearest whole number. 
//So, the range of possible results after flooring is [0, 255]

const rcolor = () =>{

    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);

    return `red ${red}, green ${green}, blue ${blue}`;
}

console.log(rcolor());

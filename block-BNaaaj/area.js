function areaOfsquare(side){
    console.log (side*side)
}

function areaOfrectangle(l,w){
    console.log(2*(l*w))
}

function areaOfcircle(redias){
    console.log(2*22/7*redias)
}


module.exports={
    square:areaOfsquare,
    rectangle:areaOfrectangle,
    circle:areaOfcircle
}
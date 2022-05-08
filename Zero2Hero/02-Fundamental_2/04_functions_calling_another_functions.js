function cutFruitPieces(fruit){
    return fruit*4;
}

function fruitProcessor(apples, oranges){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} apples & ${orangePieces} oranges.`;
    return juice;
}
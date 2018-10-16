const shuffle = () => {
    let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    let j, x, i;
    for (i = 0; i < numbers.length; i++) {
        j = Math.floor(Math.random() * numbers.length);
        x = numbers[i];
        numbers[i] = numbers[j];
        numbers[j] = x;
    }
    return numbers;
}

console.log(shuffle());
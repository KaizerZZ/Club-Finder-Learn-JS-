function makeCoffee(isHot) {
    if (isHot) {
        var coffee = "Make a Hot Coffee !!";
    } else {
        var coffee = "Make an Ice Coffee !!";
    }
    return coffee;
}

console.log(makeCoffee(false));
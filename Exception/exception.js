function bagi(a, b) {
    try {
        if (a === undefined || b !== "number") {
            throw new Error("input harus 2");
        }
        if(typeof a!== "number" || typeof b !== "number") {
            throw new Error("input harus berupa angka");
        }
        if (b === 0) {
            throw new Error("tidak bisa dibagi nol");
        }
        return a / b;
    }   catch (error) {
        console.error(error.message);
        return null;
    }
}

console.log(bagi("a"));
console.log(bagi(10, "a"));
function paintingEggs(input) {

    let eggSize = input.shift();

    let eggPaint = input.shift();

    let batchesNum = Number(input.shift());

    let price = 0;
    let totalPrice = price * batchesNum;

    if (eggSize === "Large") {
        if (eggPaint === "Red") {
            price = 16 * batchesNum
        } else if (eggPaint === "Green") {
            price = 12 * batchesNum;
        } else if (eggPaint === "Yellow") {
            price = 9 * batchesNum;
        }
    } else if (eggSize === "Medium") {
        if (eggPaint === "Red") {
            price = 13 * batchesNum;
        } else if (eggPaint === "Green") {
            price = 9 * batchesNum;
        } else if (eggPaint === "Yellow") {
            price = 7 * batchesNum;
        }
    } else if (eggSize === "Small") {
        if (eggPaint === "Red") {
            price = 9 * batchesNum;
        } else if (eggPaint === "Green") {
            price = 8 * batchesNum;
        } else if (eggPaint === "Yellow") {
            price = 5 * batchesNum;
        }
    }

    let priceAfter = price * 0.65
    console.log(`${priceAfter.toFixed(2)} leva.`);
}
paintingEggs(["Medium", "Green", "5"])
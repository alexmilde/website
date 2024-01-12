export const predict = (X: number[], w: number): number[] => {
    return X.map((x) => x * w)
}

const average = (array: number[]) => array.reduce((a, b) => a + b) / array.length

export const loss = (X: number[], Y: number[], w: number) => {
    const prediction = predict(X, w).map((x, index) => {
        return x - Y[index]
    })
    const loss = average(prediction.map((x) => x * x))

    return loss
}

export const train = (X: number[], Y: number[], iterations: number, lr: number): number | undefined => {
    let w = 0

    for (let i = 0; i < iterations; i++) {
        const current_loss = loss(X, Y, w)
        console.log(`iteration: ${i} loss: ${current_loss} w:${w}`)

        if (loss(X, Y, w + lr) < current_loss) {
            w += lr
        } else if (loss(X, Y, w - lr) < current_loss) {
            w -= lr
        } else {
            return w
        }
    }

    console.log("Couldn't converge within " + iterations + ' iterations')
    return undefined
}

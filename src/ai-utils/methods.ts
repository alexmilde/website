import * as tf from '@tensorflow/tfjs'

export const predict = (X: number[], w: number, b: number): number[] => {
    return tf.add(tf.mul(tf.tensor1d(X), w), b).arraySync() as number[]
}

export const loss = (X: number[], Y: number[], w: number, b: number) => {
    const tensorX = tf.tensor1d(predict(X, w, b))
    const tensorY = tf.tensor1d(Y)
    const prediction = tf.sub(tensorX, tensorY)
    const loss = tf.mean(tf.square(prediction)).arraySync()
    return loss
}

export const train = (X: number[], Y: number[], iterations: number, lr: number): number[] | undefined => {
    let w = 0
    let b = 0

    for (let i = 0; i < iterations; i++) {
        const current_loss = loss(X, Y, w, b)
        console.log(`iteration: ${i} loss: ${current_loss} w:${w}`)

        if (loss(X, Y, w + lr, b) < current_loss) {
            w += lr
        } else if (loss(X, Y, w - lr, b) < current_loss) {
            w -= lr
        } else if (loss(X, Y, w, b + lr) < current_loss) {
            b += lr
        } else if (loss(X, Y, w, b - lr) < current_loss) {
            b -= lr
        } else {
            return [w, b]
        }
    }

    console.log("Couldn't converge within " + iterations + ' iterations')
    return undefined
}

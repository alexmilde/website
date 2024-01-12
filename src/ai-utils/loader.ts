import * as tf from '@tensorflow/tfjs'

const loadFileAndParseRows = async (path: string, skipFirstRow: boolean): Promise<number[][]> => {
    const response = await fetch(path)
    const text = await response.text()
    const rows = text
        .split('\n')
        .map((row) => {
            if (!row) return

            return row
                .replace('\r', '')
                .split(' ')
                .filter((x) => x != '')
                .map((value) => {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    return isNaN(value as any) ? value : parseInt(value, 10)
                })
        })
        .filter((x) => x)

    if (skipFirstRow) rows.shift()

    return rows as number[][]
}

export const loadtxt = async (path: string, skipFirstRow: boolean = true, transpose: boolean = true) => {
    const rows: number[][] = await loadFileAndParseRows(path, skipFirstRow)

    if (!transpose) return rows

    return await tf.transpose(tf.tensor2d(rows)).array()
}

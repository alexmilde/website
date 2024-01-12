export const plotLayout = (xLabel: string, yLabel: string) => {
    return {
        autosize: true,
        width: 500,
        height: 500,
        margin: {
            l: 40,
            r: 40,
            b: 40,
            t: 40,
        },
        xaxis: {
            title: xLabel,
        },
        yaxis: {
            title: yLabel,
        },
    }
}

export const markers = (x: number[], y: number[], name: string = 'unlabeled') => {
    return {
        x: x,
        y: y,
        mode: 'markers',
        type: 'scatter',
        name: name,
    }
}

export const lines = (x: number[], y: number[], name: string = 'unlabeled') => {
    return {
        x: x,
        y: y,
        mode: 'lines',
        type: 'scatter',
        name: name,
    }
}

export function clamp (x:number, min=0, max=1) {
    return (x < min) ? min
         : (max < x) ? max
         : x
}

export function sign(x: number) {
    if (Math.sign) return Math.sign(x)
    return Number(x > 0) - Number(x < 0) || +x
}

export function abs(x: number) {
    if (Math.abs) return Math.abs(x)
    return x > 0? x: -x
}

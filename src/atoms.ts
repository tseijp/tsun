import {atom} from 'jotai'

// style
export const themeAtom = atom({
    background: "#212121"
})

// detail
export const detailAtom = atom(-1)

// select
export const celAtom = atom(0)
export const rowAtom = atom(0)
export const colAtom = atom(0)
export const timesAtom = atom(["readed", "reading", "todo"])
export const entryAtom = atom(["business", "living", "learn", "tech"])

type Pos = {x: number, y: number}
export const posAtom = atom<Pos, Pos>(
    (get) => ({x: get(colAtom), y: get(rowAtom)}),
    (get, set, {x=-1, y=-1}) => {
        // init col, row
        if (x < 0) x = get(colAtom); else set(colAtom, x);
        if (y < 0) y = get(rowAtom); else set(rowAtom, y);

        // init path
        const pathname = [get(timesAtom)[y], get(entryAtom)[x]].filter(v => v)
        const location = new URL("/" + pathname.join('/'), window.location.href)

        // set history
        if (window.location.pathname !== location.pathname)
            window.history.pushState(null, "", location.href)
    }
)

import {atom} from 'jotai'

// style
export const themeAtom = atom({
    background: "#212121"
})

// navigation
export const rowAtom = atom(0)
export const colAtom = atom(0)
export const pagesAtom = atom(["ToRead", "Reading", "Readed"])
export const entryAtom = atom(["Business", "Living", "Learn", "Tech"])

export const pathAtom = atom(
    () => window.location,
    (get, set, {col=-1, row=-1}) => {
        // init col, row
        if (col < 0) col = get(colAtom); else set(colAtom, col);
        if (row < 0) row = get(rowAtom); else set(rowAtom, row);

        // init path
        const pathname = ["", get(pagesAtom)[row] ?? "", get(entryAtom)[col] ?? ""]
        const location = new URL(pathname.join('/'), window.location.href)

        // set history
        if (window.location.pathname !== location.pathname)
            window.history.pushState(null, "", location.href)
    }
)

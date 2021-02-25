import {atom} from 'jotai'

export const rowAtom = atom(0)
export const colAtom = atom(0)
export const pagesAtom = atom(["ToRead", "Reading", "Readed"])
export const entryAtom = atom(["Business", "Living", "Learn", "Tech"])

export const pathAtom = atom(
    () => window.location,//.filter(v => v),
    (get, set, args: string) => {
        // init pathname
        const location = new URL(args, window.location.href)
        const pathname = location.pathname.split("/")

        // reset history
        if (window.location.pathname !== location.pathname)
            window.history.pushState(null, "", location.href)

        // reset pages and entry
        const row = get(pagesAtom).indexOf(pathname[1])
        const col = get(entryAtom).indexOf(pathname[2])
        if (get(rowAtom) !== row && row > -1)
            set(rowAtom, row)
        if (get(colAtom) !== col && col > -1)
            set(colAtom, col)
    }
)

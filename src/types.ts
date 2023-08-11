export type TCellType = "key" | "bmwIconsDisplayArea" | "messageDisplayArea";

export interface IAacKey<P = {}> {
    id: string,
    label: string,
    backgroundColor: string,
    rowStart: number,
    rowSpan: number,
    columnStart: number,
    columnSpan: number
}

export interface IAacKeyboards<P = {}> {
    rows: number,
    columns: number,
    cells: object
}

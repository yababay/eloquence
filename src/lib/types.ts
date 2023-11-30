interface CaptionWithAuthor {
    caption: string
    author: string
}

export interface Quotation {
    id?: string
    foreign?: string
    russian: CaptionWithAuthor
}

export type QuotationWithNext = {quotation: Quotation, next: number}

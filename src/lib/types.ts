type TextWithAuthor = {
    text: string,
    author: string,
}

export type EnglishRussian = {
    english?: string,
    russian: string
}

export type Quotation = {
    english?: TextWithAuthor,
    russian: TextWithAuthor
}

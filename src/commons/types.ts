export interface Article {
    teaser: Teaser
    content: Array<Content>
    details?: Array<Detail>
    links?: Array<Link>
}

export interface Content {
    headline: string
    copy?: string
    list?: Array<string>
}
export interface Teaser {
    date: string
    slug: string
    headline: string
    copy: string
    links?: Array<Link>
    hidemore?: boolean
}

export interface Detail extends Link {
    copy: string
}

export interface LinkWithIcon extends Link {
    icon: string
    iconClass?: string
}

export interface Link {
    title: string
    url: string
}

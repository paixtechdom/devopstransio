export interface Services {
    svg: JSX.Element,
    title: string,
    desc: string
}


export interface nav  {
    title: string,
    link: string,
    sublinks?: Object[]
}


export interface button {
    text : string,
    className: string
}
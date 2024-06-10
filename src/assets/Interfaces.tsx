export interface Services {
    img: string,
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
    navigateTo : string
}
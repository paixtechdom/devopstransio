export const TrimText = (text:string):string => {

    let trimmedText = text

    for (let i = 0; i < text.length; i++) {

        trimmedText = trimmedText.replace(' ', '')        
        trimmedText = trimmedText.replace('+', 'plus')        
        trimmedText = trimmedText.replace('/', 'plus')        
        trimmedText = trimmedText.replace(/[^a-z]/g, '')
        
    }

    return trimmedText.trim().toString()

}




 
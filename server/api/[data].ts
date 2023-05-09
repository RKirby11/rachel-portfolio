import fs from 'fs'
export default defineEventHandler((event) => {
    const data = JSON.parse(fs.readFileSync(`./static/${event.context.params.data}.json`, 'utf8'))
    return {
        'data': data[`${event.context.params.data}`]
    }
})
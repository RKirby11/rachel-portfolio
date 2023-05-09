import fs from 'fs'
export default defineEventHandler((event) => {
    const data = JSON.parse(fs.readFileSync(`./static/${event.context.params.type}.json`, 'utf8'))
    return data[`${event.context.params.type}`];
})
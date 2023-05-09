import fs from 'fs'
export default defineEventHandler((event) => {
    const data = JSON.parse(fs.readFileSync('./static/projects.json', 'utf8'))
    return {
        'data': data.projects.splice(0, event.context.params.count)
    }
})
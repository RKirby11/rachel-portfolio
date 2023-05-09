import fs from 'fs'

export default defineEventHandler((event) => {
    const data = JSON.parse(fs.readFileSync('./static/projects.json', 'utf8'))
    if(event.context.params.type === 'all') {
        return {  "data": data.projects }
    }
    else {
        return {
            "data": data.projects.filter(project => project.tags.includes(event.context.params.type))
        }
    }
})
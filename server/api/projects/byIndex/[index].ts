import fs from 'fs'
export default defineEventHandler((event) => {
    const data = JSON.parse(fs.readFileSync('./static/projects.json', 'utf8'))
    return data.projects[event.context.params.index];
})
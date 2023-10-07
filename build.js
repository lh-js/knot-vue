import fs from 'fs'

//在组件包中引入打包后的样式
updateFile('./umd/es/index.mjs', 0, "import './style.css'")

function updateFile(readFile, row, updateData, outputFile) {
    const data = fs.readFileSync(readFile, 'utf8').split('\n')
    if (row === 0) {
        data[0] = updateData
    } else {
        data[row - 1] = updateData
    }
    fs.writeFileSync(outputFile ? outputFile : readFile, data.join('\n'), 'utf8')
}
const listToTree = (list: any[], keyName: string = 'id', childrenName: string = 'children', parentKeyName: string = 'parentId') => {
    let newList:any[] = JSON.parse(JSON.stringify(list))
    let info = newList.reduce((pre, item) => (pre[item[keyName]] = item, item[childrenName] = [], pre), {})
    return newList.filter(item => {
        info[item[parentKeyName]] && info[item[parentKeyName]][childrenName].push(item)
        return !item[parentKeyName]
    })
};

export default listToTree;
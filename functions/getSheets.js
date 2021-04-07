let googleSheetsToObj = (json, arrProp) => {
    let arr = [];
    for (let i in json.feed.entry) {

        arr.push(
            (() => {
                let obj = {};
                for (let x in arrProp) {
                    obj[arrProp[x]] = json.feed.entry[i][`gsx$${arrProp[x]}`]['$t']
                }
                return obj
            })()
        )
    }

    return arr;
}

const getSheets = {
    async get(url, arrProp) {
        try {
            const response = await fetch(url);
            const json = await response.json();
            let convertGoogleSheets = googleSheetsToObj(json, arrProp);
            return convertGoogleSheets
        } catch (err) {
            // console.log(err)
        }
    },
}



export default getSheets
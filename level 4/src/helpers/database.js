class Database {
    constructor(data) {
        this.data = data;
    }

    getData() {
        return this.data;
    }   

    search(keyword) {
        return this.data.filter(entry => entry.title.includes(keyword) || entry.description.includes(keyword));
    }

    findNoteByID (id) {
        for (let key of this.data) {
            if(key['id'] == id) {
                return key
            }
        }
        // return null
    }
}

module.exports.Database = new Database([
    {
        id:1,
        title: "This is title",
        description: "go to school",
    }, 
    {
        id:2,
        title: "This is title",
        description: "try harder",
    },
    {
        id:3,
        title: "This is title",
        description: "sleep",
    }
])
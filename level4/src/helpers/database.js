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
        title: "Viết Report ABC",
        description: "Viết report cho challenge A",
        assignedDate: "Oct 29, 2022",
        daysLeft: 1,
        type: 1
    }, 
    {
        id:2,
        title: "Làm labs cho lỗi X",
        description: "Lỗi này phức tạp nên làm 3 level thôi",
        assignedDate: "Nov 25, 2022",
        daysLeft: 5,
        type: 2
    },
    {
        id:3,
        title: "Deploy labs lên server",
        description: "Deploy nhanh để đi ăn cơm",
        assignedDate: "Nov 26, 2022",
        daysLeft: 4,
        type: 2
    },
    {
        id:4,
        title: "Research về lỗi Z",
        description: "Lỗi này quằn nên cho thời gian dài xíu",
        assignedDate: "Nov 29, 2022",
        daysLeft: 14,
        type: 3
    }
])
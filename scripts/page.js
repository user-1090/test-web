const params = new URLSearchParams(window.location.search);
const type = params.get("type");

const pages = {
    eat: {
        title: "吃饭",
        list: [
            {
                text: "米饭",
                link: "rice"
            },
            {
                text: "面条",
                link: "noodle"
            },
            {
                text: "水",
                link: "water"
            }
        ]
    },

    sleep: {
        title: "睡觉",
        list: [
            {
                text: "床单",
                link: "bed"
            },
            {
                text: "被子",
                link: "quilt"
            },
            {
                text: "枕头",
                link: "pillow"
            }
        ]
    }
};

const currentPage = pages[type];

document.getElementById("title").textContent = currentPage.title;

const list = document.getElementById("list");

currentPage.list.forEach(item => {

    const li = document.createElement("li");

    const a = document.createElement("a");

    a.textContent = item.text;

    a.href = `result.html?item=${item.link}`;

    li.appendChild(a);

    list.appendChild(li);

});
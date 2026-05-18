const params = new URLSearchParams(window.location.search);
const item = params.get("item");

const pages = {
    rice: {
        title: "吃饭的后果",
        text: "吃饭的后果是长胖"
    },
    noodle: {
        title: "吃面条的后果",
        text: "吃面条的后果是长胖"
    },
    water: {
        title: "喝水的后果",
        text: "喝水的后果是长胖"
    },
    bed:{
        title: "睡床单的后果",
        text: "睡床单的后果是冷死"
    },
    quilt:{
        title: "睡被子的后果",
        text: "睡被子的后果是热死"
    },
    pillow:{
        title: "睡枕头的后果",
        text: "睡枕头的后果是颈椎病"
    },
};

const currentPage = pages[item];

document.getElementById("title").textContent = currentPage.title;
document.getElementById("text").textContent = currentPage.text;

function setFootnoteTitles() {
    const footnotes = document.querySelectorAll("sup a.footnote");
    footnotes.forEach(f => {
        const id = f.href.substr(f.href.search("#") + 1);
        f.title = document.getElementById(id).innerText;
    });
}

setFootnoteTitles();
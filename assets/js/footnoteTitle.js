function setFootnoteTitles() {
    const footnotes = document.querySelectorAll("sup a.footnote");
    footnotes.forEach(f => {
        const id = f.href.substr(f.href.search("#") + 1);
        const title = document.getElementById(id).innerText;

        // Drop the final return-to-text character for the title
        f.title = title.substring(0, title.length - 2);
    });
}

setFootnoteTitles();
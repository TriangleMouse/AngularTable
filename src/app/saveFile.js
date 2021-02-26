function myFunc(){
    let data = `
    <?xml version="1.0" encoding="UTF-8"?>
    <root>
        <users>
        ${Array.from(document.querySelectorAll("tbody tr"))
            .map(
                user => `
          <user>
            <firstName>${user.children[0].innerText}</firstName>
            <lastName>${user.children[1].innerText}</lastName>
            <email>${user.children[2].innerText}</email>
          </user>
        `
            )
            .join("")}
        </users>
    </root>
  `;
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([data], {
        type: "text/xml"
    }));
    a.setAttribute("download", "Users.xml");
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

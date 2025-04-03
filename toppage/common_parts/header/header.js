//変数名,htmlファイルのパス,idを変更
const includeheader = new XMLHttpRequest();
includeheader.open("GET", "./common_parts/header/header.html", true);
includeheader.onreadystatechange = function () {
  if (includeheader.readyState === 4 && includeheader.status === 200) {
    const headerHTML = includeheader.responseText;
    const header = document.querySelector("#header");
    header.insertAdjacentHTML("afterbegin", headerHTML);
  }
};
includeheader.send();
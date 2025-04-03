//変数名,htmlファイルのパス,idを変更
const includefooter = new XMLHttpRequest();
includefooter.open("GET", "./index/common_parts/footer/footer.html", true);
includefooter.onreadystatechange = function () {
  if (includefooter.readyState === 4 && includefooter.status === 200) {
    const footerHTML = includefooter.responseText;
    const footer = document.querySelector("#footer");
    footer.insertAdjacentHTML("afterbegin", footerHTML);
  }
};
includefooter.send();
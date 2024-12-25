// card的信息显示
function toggleDetails(index) {
    var details = document.querySelectorAll('.details')[index];
    var button = document.querySelectorAll('.toggle-btn')[index];
    
    if (details.style.display === "none" || details.style.display === "") {
        details.style.display = "block";
        button.textContent = "隐藏详细信息";
    } else {
        details.style.display = "none";
        button.textContent = "查看详细信息";
    }
}

// 点照片
function showContent(contentId) {
            // 隐藏所有内容
  const contents = document.querySelectorAll('.content');
  contents.forEach(content => {
  content.classList.remove('active');
});
            // 显示对应的内容
  const selectedContent = document.getElementById('content' + contentId);
  selectedContent.classList.add('active');
}
// 留言板
document.addEventListener('DOMContentLoaded', function () {
  // 确保 DOM 加载完成后运行
  document.getElementById('messageForm').addEventListener('submit', function (e) {
    e.preventDefault(); // 阻止表单提交

    const messageInput = document.getElementById('messageInput');
    const messagesContainer = document.getElementById('messages');

    // 获取并清理用户输入
    const messageText = messageInput.value.trim();

    if (messageText) {
      // 创建留言
      const messageDiv = document.createElement('div');
      messageDiv.classList.add('message');
      messageDiv.textContent = messageText;

      // 添加到留言容器
      messagesContainer.appendChild(messageDiv);

      // 清空输入框
      messageInput.value = '';
    } else {
      alert('留言内容不能为空！'); // 提示用户输入内容
    }
  });
});

// 避免开F12
document.addEventListener('keydown', function(event) {
    // 检查按下的是否是F12
    if (event.key === 'F12') {
        // 阻止默认行为，防止打开开发者工具
        event.preventDefault();
    }
});
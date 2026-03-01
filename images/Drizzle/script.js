/* ============================================
   页面交互功能
   ============================================ */

// 平滑滚动功能：为所有锚点链接添加平滑滚动效果
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // 阻止默认的跳转行为
        
        // 获取目标元素（通过href属性值）
        const target = document.querySelector(this.getAttribute('href'));
        
        // 如果目标元素存在，平滑滚动到该元素
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth', // 平滑滚动
                block: 'start' // 滚动到元素顶部
            });
        }
    });
});

// 联系表单提交处理
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    // 监听表单提交事件
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // 阻止表单默认提交行为
        
        // 获取表单输入值
        const name = document.getElementById('name').value; // 姓名
        const email = document.getElementById('email').value; // 邮箱
        const message = document.getElementById('message').value; // 留言内容
        
        // 简单验证：检查所有字段是否已填写
        if (name && email && message) {
            // 在实际应用中，这里应该将数据发送到服务器
            // 目前仅显示提示信息
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset(); // 重置表单
        }
    });
}

// 导航栏滚动效果：当页面滚动时添加阴影
let lastScroll = 0; // 记录上次滚动位置
const navbar = document.querySelector('.navbar'); // 获取导航栏元素

// 监听页面滚动事件
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset; // 获取当前滚动位置
    
    // 如果滚动超过100像素，添加阴影效果
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = 'none'; // 否则移除阴影
    }
    
    lastScroll = currentScroll; // 更新上次滚动位置
});

// 元素进入视口时的淡入动画：使用Intersection Observer API
const observerOptions = {
    threshold: 0.1, // 当元素10%可见时触发
    rootMargin: '0px 0px -50px 0px' // 底部边距：提前50px触发
};

// 创建观察器实例
const observer = new IntersectionObserver((entries) => {
    // 遍历所有被观察的元素
    entries.forEach(entry => {
        // 如果元素进入视口
        if (entry.isIntersecting) {
            // 显示元素：设置不透明度和位置
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// 页面加载完成后，为指定元素添加淡入动画
document.addEventListener('DOMContentLoaded', () => {
    // 选择需要添加动画的元素
    const animateElements = document.querySelectorAll('.product-card, .stat-item, .about-text, .contact-form, .contact-info');
    
    // 为每个元素设置初始状态（隐藏并下移）
    animateElements.forEach(el => {
        el.style.opacity = '0'; // 初始透明
        el.style.transform = 'translateY(20px)'; // 初始位置下移20px
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease'; // 过渡动画
        observer.observe(el); // 开始观察该元素
    });
});

// 移动端菜单切换功能（预留功能）
const menuToggle = document.querySelector('.menu-toggle'); // 菜单按钮
const navLinks = document.querySelector('.nav-links'); // 导航链接

// 如果菜单按钮存在，添加点击事件
if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        // 切换导航链接的显示/隐藏（通过添加/移除active类）
        navLinks.classList.toggle('active');
    });
}

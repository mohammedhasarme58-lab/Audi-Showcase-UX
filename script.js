// دالة التحقق من الدخول باستخدام Arrow Function
const validateLogin = () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Regex واحد طويل للتحقق من كلمة المرور:
    // - طول الكلمة لا يقل عن 8 خانات
    // - يحتوي على حرف كبير واحد على الأقل
    // - يحتوي على رقم واحد على الأقل
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    
    if (!username || !password) {
        window.alert('Please enter username and password');
        return false;
    }
    
    if (!passwordRegex.test(password)) {
        window.alert('Password must be at least 8 characters long, contain at least one uppercase letter and one number');
        return false;
    }
    
    // عند نجاح الدخول، انتقل إلى homepage.html باستخدام location.href
    location.href = 'homepage.html';
    return true;
};

// إضافة مستمع الحدث عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            validateLogin();
        });
    }
});

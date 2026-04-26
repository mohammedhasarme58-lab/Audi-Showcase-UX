/*
================================================================================
تنفيذ وسيط REST وحلقة For...of
المطور: Cascade AI
الوصف: يوضح هذا الملف استخدام وسيط REST وحلقة For...of
الصفحات المستهدفة: جميع صفحات الطرازات (rs6.html, q8.html, a3.html، إلخ)
================================================================================
*/

// مثال على دالة تستخدم وسيط REST
// هذه الدالة توضح استخدام معلمات REST لحساب أسعار السيارات:
// - تستقبل سعرًا أساسيًا وعددًا غير محدود من أسعار الخصائص
// - تستخدم وسيط REST لتجميع جميع الميزات في مصفوفة
// - تحسب التكلفة الإجمالية بإضافة جميع الميزات إلى السعر الأساسي
const calculateTotalCost = (basePrice, ...features) => {
    let totalCost = basePrice;
    console.log(`Base price: $${basePrice}`);
    
    // حلقة For...of للتكرار على مصفوفة الميزات
    for (const feature of features) {
        totalCost += feature;
        console.log(`Added feature: $${feature}`);
    }
    
    console.log(`Total cost: $${totalCost}`);
    return totalCost;
};

// مثال على حلقة For...of مع نماذج السيارات
// هذه الدالة توضح استخدام حلقات For...of مع مصفوفة من الكائنات:
// - تنشئ مصفوفة من نماذج أودي مع الاسم والسعر والفئة
// - تستخدم حلقة For...of للتكرار على كل نموذج
// - تعرض معلومات منسقة لكل طراز سيارة
const displayCarModels = () => {
    const audiModels = [
        { name: 'A3', price: 52000, category: 'Compact' },
        { name: 'A4', price: 63000, category: 'Executive' },
        { name: 'Q5', price: 88000, category: 'SUV' },
        { name: 'RS6', price: 249000, category: 'Performance' },
        { name: 'e-tron', price: 110000, category: 'Electric' }
    ];
    
    console.log('=== Audi Models Information ===');
    
    // حلقة For...of للتكرار على نماذج السيارات
    for (const model of audiModels) {
        console.log(`${model.name}: $${model.price.toLocaleString()} - ${model.category}`);
    }
};

// مثال على الجمع بين وسيط REST وحلقة For...of
// هذه الدالة توضح الجمع بين معلمات REST وحلقات For...of:
// - تستقبل اسم السيارة وعددًا غير محدود من خيارات التكوين
// - تستخدم وسيط REST لتجميع جميع التكوينات
// - تستخدم حلقة For...of لمعالجة كل تكوين
// - تُرجع عدد التكوينات المعالجة
const processConfigurations = (carName, ...configurations) => {
    console.log(`\n=== Processing ${carName} Configurations ===`);
    
    // حلقة For...of للتكرار على مصفوفة معلمات REST
    for (const config of configurations) {
        console.log(`Configuration: ${config}`);
    }
    
    return configurations.length;
};

// الدالة الرئيسية لتنفيذ الأمثلة
// هذه الدالة تنفذ جميع العروض التوضيحية عند تحميل الصفحة:
// - تنفذ مثال مع معلمات REST لأسعار السيارات
// - تنفذ مثال حلقة For...of مع نماذج السيارات
// - توضح الجمع بين المفهومين
// - تعرض إشعارًا مرئيًا للمستخدم مخصص لكل صفحة
const demonstrateRestAndForOf = () => {
    console.log('=== REST Parameter and For...of Loop Demo ===');
    
    // المثال 1: معلمات REST مع ميزات السيارة
    const rs6Total = calculateTotalCost(
        200000,  // السعر الأساسي
        5000,    // نظام الملاحة
        3000,    // الصوت المتميز
        2000,    // حزمة رياضية
        1500     // مقاعد جلدية
    );
    
    // المثال 2: حلقة For...of مع نماذج السيارات
    displayCarModels();
    
    // المثال 3: الجمع بين المفهومين
    const configCount = processConfigurations(
        'RS6',
        'Black exterior',
        'Red interior',
        'Performance tires',
        'Advanced safety'
    );
    
    console.log(`Total configurations processed: ${configCount}`);
    
    // تخصيص الرسالة بناءً على الصفحة الحالية
    const currentPage = window.location.pathname.split('/').pop().replace('.html', '');
    let customMessage = '';
    
    switch (currentPage) {
        case 'a3':
            customMessage = 'تم تحميل صفحة Audi A3 بنجاح! استمتع بالسدأن الكومبكتي.';
            break;
        case 'a4':
            customMessage = 'تم تحميل صفحة Audi A4 بنجاح! سدأن المديرين المثالي.';
            break;
        case 'a6':
            customMessage = 'تم تحميل صفحة Audi A6 بنجاح! سدأن الأعمال الفاخر.';
            break;
        case 'a8':
            customMessage = 'تم تحميل صفحة Audi A8 بنجاح! قمة الفخامة والراحة.';
            break;
        case 'q3':
            customMessage = 'تم تحميل صفحة Audi Q3 بنجاح! SUV كومبكتي متعدد الاستخدامات.';
            break;
        case 'q5':
            customMessage = 'تم تحميل صفحة Audi Q5 بنجاح! SUV عائلي مريح.';
            break;
        case 'q7':
            customMessage = 'تم تحميل صفحة Audi Q7 بنجاح! SUV فاخر لـ7 مقاعد.';
            break;
        case 'q8':
            customMessage = 'تم تحميل صفحة Audi Q8 بنجاح! SUV كوبيه أنيق.';
            break;
        case 'rs6':
            customMessage = 'تم تحميل صفحة Audi RS6 بنجاح! السيارة الرياضية الأسرع في العالم!';
            break;
        case 'etron':
            customMessage = 'تم تحميل صفحة Audi e-tron بنجاح! السيارة الكهربائية المستقبلية.';
            break;
        default:
            customMessage = 'تم تحميل الصفحة بنجاح! تحقق من وحدة التحكم للتفاصيل.';
    }
    
    // عرض إشعار للمستخدم
    showNotification(customMessage, 'success');
};

// دالة بسيطة للإشعارات
// هذه الدالة تعرض رسالة إشعار للمستخدم:
// - تنشئ عنصر إشعار مع تنسيق CSS
// - تعرض الإشعار مع تأثير وتزيله بعد 4 ثوانٍ
// - تمنع ظهور إشعارات مكررة
const showNotification = (message, type = 'info') => {
    if (document.querySelector('.notification')) {
        return;
    }
    
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        color: white;
        border-radius: 8px;
        font-family: Arial, sans-serif;
        font-size: 14px;
        font-weight: bold;
        z-index: 10000;
        background-color: ${type === 'success' ? '#28a745' : '#17a2b8'};
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
        max-width: 300px;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 4000);
};

// تنفيذ العرض عند تحميل الصفحة
// يستمع هذا الحدث لتحميل DOM ثم يستدعي الدالة الرئيسية demonstrateRestAndForOf
document.addEventListener('DOMContentLoaded', function() {
    demonstrateRestAndForOf();
});

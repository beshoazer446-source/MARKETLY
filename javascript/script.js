// 1. البيانات الشاملة (20 سكن ببيانات تواصل كاملة)
const accommodationsData = [
    { id: 1, title: "شقة لوكس للمغتربين", location: "حوض 10", price: "3000 ج.م", img: "IMAGE/sakn1 (2).jpeg", owner: "أحمد علي", phone: "01012345678", area: "120m", rooms: 3, floor: "2" },
    { id: 2, title: "سكن طالبات هادئ", location: "بنزايون", price: "1800 ج.م", img: "IMAGE/sakn21.jpeg", owner: "أم محمد", phone: "01122334455", area: "90m", rooms: 2, floor: "1" },
    { id: 3, title: "شقة شباب مفروشة", location: "مدينه العمال", price: "1200 ج.م", img: "IMAGE/sakn31.webp", owner: "محمود حسن", phone: "01233445566", area: "80m", rooms: 2, floor: "4" },
    { id: 4, title: "دور كامل للإيجار", location: "المساكن", price: "2500 ج.م", img: "IMAGE/sakn41.webp", owner: "إبراهيم خليل", phone: "01099887766", area: "150m", rooms: 4, floor: "أرضي" },
    { id: 5, title: "بيت عائلي قريب من الخدمات", location: "شارع الشيخ محسن", price: "2200 ج.م", img: "IMAGE/sakn51.jpg", owner: "الحاج جابر", phone: "01144556677", area: "130m", rooms: 3, floor: "منزل كامل" },
    { id: 6, title: "استوديو مجهز بالكامل", location: "دردشه", price: "1600 ج.م", img: "IMAGE/sakn61.jpg", owner: "ياسين عبده", phone: "01555667788", area: "50m", rooms: 1, floor: "3" },
    { id: 7, title: "شقة واسعة تشطيب سوبر لوكس", location: "السيد", price: "3500 ج.م", img: "IMAGE/sakn71.jpeg", owner: "أستاذ هاني", phone: "01011223344", area: "160m", rooms: 3, floor: "5" },
    { id: 8, title: "سكن متميز للطالبات", location: "حوض 10", price: "2800 ج.م", img: "IMAGE/sakn81.jpg", owner: "سعاد هانم", phone: "01288776655", area: "110m", rooms: 3, floor: "2" },

    { id: 9, title: "شقة قريبة من المحطة", location: "بنزايون", price: "1900 ج.م", img: "IMAGE/sakn1 (2).jpeg", owner: "مصطفى كامل", phone: "01033445566", area: "95m", rooms: 2, floor: "3" },
    { id: 10, title: "غرفة فردية بمساحة جيدة", location: "مدينه العمال", price: "900 ج.م", img: "IMAGE/sakn21.jpeg", owner: "كريم يوسف", phone: "01155667788", area: "25m", rooms: 1, floor: "2" },
    { id: 11, title: "سكن مشترك للطلاب", location: "المساكن", price: "1100 ج.م", img: "IMAGE/sakn31.webp", owner: "عماد حمدي", phone: "01200998877", area: "100m", rooms: 3, floor: "1" },
    { id: 12, title: "شقة أرضي بمدخل خاص", location: "شارع الشيخ محسن", price: "2100 ج.م", img: "IMAGE/sakn41.webp", owner: "خالد سعيد", phone: "01077665544", area: "125m", rooms: 3, floor: "أرضي" },
    { id: 13, title: "غرفتين وصالة تشطيب حديث", location: "دردشه", price: "1750 ج.م", img: "IMAGE/sakn51.jpg", owner: "عصام فوزي", phone: "01512345678", area: "85m", rooms: 2, floor: "3" },
    { id: 14, title: "سكن عائلات منطقة راقية", location: "السيد", price: "4000 ج.م", img: "IMAGE/sakn61.jpg", owner: "هشام شوقي", phone: "01066554433", area: "180m", rooms: 4, floor: "4" },
    { id: 15, title: "شقة علوية بإطلالة مميزة", location: "حوض 10", price: "2300 ج.م", img: "IMAGE/sakn71.jpeg", owner: "وليد سعد", phone: "01122336677", area: "115m", rooms: 3, floor: "6" },
    { id: 16, title: "غرفة بحمام خاص", location: "بنزايون", price: "1500 ج.م", img: "IMAGE/sakn81.jpg", owner: "مدام عفاف", phone: "01244556699", area: "40m", rooms: 1, floor: "2" },

    { id: 17, title: "شقة قريبة من الجامعة", location: "المساكن", price: "2700 ج.م", img: "IMAGE/sakn1 (2).jpeg", owner: "د. أشرف", phone: "01099885544", area: "135m", rooms: 3, floor: "3" },
    { id: 18, title: "سكن اقتصادي للشباب", location: "مدينه العمال", price: "850 ج.م", img: "IMAGE/sakn21.jpeg", owner: "عبد الله ناصر", phone: "01133221100", area: "70m", rooms: 2, floor: "5" },
    { id: 19, title: "شقة مفروشة مكيفة", location: "السيد", price: "3800 ج.م", img: "IMAGE/sakn31.webp", owner: "رامي صبري", phone: "01599887744", area: "140m", rooms: 3, floor: "2" },
    { id: 20, title: "منزل دورين للإيجار", location: "شارع الشيخ محسن", price: "4500 ج.م", img: "IMAGE/sakn41.webp", owner: "م. طارق", phone: "01022334499", area: "200m", rooms: 5, floor: "كامل" }
];
//dom
let visibleCount = 8;
const grid = document.getElementById('accommodationsGrid');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const searchInput = document.getElementById('searchInput');
const noResults = document.getElementById('noResults');

// وظيفة التوجيه لصفحة التفاصيل مع تخزين البيانات مؤقتاً أو استخدام الـ ID
function goToDetails(id) {
    window.location.href = `details.html?id=${id}`;
}

function renderCards(data, limit) {
    grid.innerHTML = "";
    const subset = data.slice(0, limit);
    
    subset.forEach(acc => {
        const cardHTML = `
            <div class="housing-card" onclick="goToDetails(${acc.id})">
                <div class="card-img-wrapper">
                    <img src="${acc.img}" alt="${acc.title}">
                </div>
                <div class="card-content">
                    <h3>${acc.title}</h3>
                    <p class="card-location">📍 ${acc.location}</p>
                    <p class="card-price">${acc.price}</p>
                    <button class="details-btn">عرض التفاصيل</button>
                </div>
            </div>
        `;
        grid.innerHTML += cardHTML;
    });

    if (limit >= data.length || data.length === 0) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'inline-block';
    }
}

renderCards(accommodationsData, visibleCount);

loadMoreBtn.addEventListener('click', () => {
    visibleCount += 8;
    renderCards(accommodationsData, visibleCount);
});

searchInput.addEventListener('input', (e) => {
    const val = e.target.value.trim().toLowerCase();
    const filtered = accommodationsData.filter(item => 
        item.location.toLowerCase().includes(val) || 
        item.title.toLowerCase().includes(val)
    );
   
    if (filtered.length === 0) {
        grid.innerHTML = "";
        noResults.style.display = "block";
        loadMoreBtn.style.display = "none";
    } else {
        noResults.style.display = "none";
        const limit = val === "" ? 8 : filtered.length;
        renderCards(filtered, limit);
    }
});
function resetSearch() {
    searchInput.value = "";
    noResults.style.display = "none";
    visibleCount = 8;
    renderCards(accommodationsData, visibleCount);
}

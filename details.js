// details bage
const accommodationsDatadetails = [
    { 
        id: 1, 
        title: "شقة لوكس للمغتربين", 
        location: "حوض 10", 
        price: "3000 ج.م",
        images: ["IMAGE/sakn1 (2).jpeg", "IMAGE/sakn1.jpeg", "IMAGE/sakn1.jpg", "IMAGE/sakn1.webp"],
        owner: "أحمد علي", 
        phone: "01012345678",
        area: "120m", 
        rooms: 3, 
        floor: "2" 
    },
    { 
        id: 2, 
        title: "سكن طالبات هادئ", 
        location: "بنزايون", 
        price: "1800 ج.م", 
        images: ["IMAGE/sakn21.jpeg", "IMAGE/sakn2.jpeg", "IMAGE/sakn22.jpeg", "IMAGE/sakn23.jpeg"], 
        owner: "أم محمد", 
        phone: "01122334455", 
        area: "90m", 
        rooms: 2, 
        floor: "1" 
    },
    { 
        id: 3, 
        title: "شقة شباب مفروشة", 
        location: "مدينه العمال", 
        price: "1200 ج.م", 
        images: ["IMAGE/sakn31.webp", "IMAGE/sakn3.webp", "IMAGE/sakn32.webp", "IMAGE/sakn33.webp"], 
        owner: "محمود حسن", 
        phone: "01233445566", 
        area: "80m", 
        rooms: 2, 
        floor: "4" 
    },
    { 
        id: 4, 
        title: "دور كامل للإيجار", 
        location: "المساكن", 
        price: "2500 ج.م", 
        images: ["IMAGE/sakn41.webp", "IMAGE/sakn42.webp", "IMAGE/sakn4.webp", "IMAGE/sakn43.webp"], 
        owner: "إبراهيم خليل", 
        phone: "01099887766", 
        area: "150m", 
        rooms: 4, 
        floor: "أرضي" 
    },
    { 
        id: 5, 
        title: "بيت عائلي قريب من الخدمات", 
        location: "شارع الشيخ محسن", 
        price: "2200 ج.م", 
        images: ["IMAGE/sakn51.jpg", "IMAGE/sakn5.jpg", "IMAGE/sakn51.jpg", "IMAGE/sakn52.jpg"], 
        owner: "الحاج جابر", 
        phone: "01144556677", 
        area: "130m", 
        rooms: 3, 
        floor: "منزل كامل" 
    },
    { 
        id: 6, 
        title: "استوديو مجهز بالكامل", 
        location: "دردشه", 
        price: "1600 ج.م", 
        images: ["IMAGE/sakn61.jpg", "IMAGE/sakn6.jpg", "IMAGE/sakn62.jpg", "IMAGE/sakn63.jpg"], 
        owner: "ياسين عبده", 
        phone: "01555667788", 
        area: "50m", 
        rooms: 1, 
        floor: "3" 
    },
    { 
        id: 7, 
        title: "شقة واسعة تشطيب سوبر لوكس", 
        location: "السيد", 
        price: "3500 ج.م", 
        images: ["IMAGE/sakn71.jpeg", "IMAGE/sakn7.jpeg", "IMAGE/sakn73.jpeg", "IMAGE/sakn72.jpeg"], 
        owner: "أستاذ هاني", 
        phone: "01011223344", 
        area: "160m", 
        rooms: 3, 
        floor: "5" 
    },
    { 
        id: 8, 
        title: "سكن متميز للطالبات", 
        location: "حوض 10", 
        price: "2800 ج.م", 
        images: ["IMAGE/sakn81.jpg", "IMAGE/sakn8.jpg", "IMAGE/sakn82.jpg", "IMAGE/sakn83.jpg"], 
        owner: "سعاد هانم", 
        phone: "01288776655", 
        area: "110m", 
        rooms: 3, 
        floor: "2" 
    },
    { 
        id: 9, 
        title: "شقة قريبة من المحطة", 
        location: "بنزايون", 
        price: "1900 ج.م",
        images: ["IMAGE/sakn1 (2).jpeg", "IMAGE/sakn1.jpeg", "IMAGE/sakn1.jpg", "IMAGE/sakn1.webp"],
        owner: "مصطفى كامل", 
        phone: "01033445566", 
        area: "95m", 
        rooms: 2, 
        floor: "3" 
    },
    { 
        id: 10, 
        title: "غرفة فردية بمساحة جيدة", 
        location: "مدينه العمال", 
        price: "900 ج.م",
        images: ["IMAGE/sakn21.jpeg", "IMAGE/sakn2.jpeg", "IMAGE/sakn22.jpeg", "IMAGE/sakn23.jpeg"],
        owner: "كريم يوسف", 
        phone: "01155667788", 
        area: "25m", 
        rooms: 1, 
        floor: "2" 
    },
    { 
        id: 11, 
        title: "سكن مشترك للطلاب", 
        location: "المساكن", 
        price: "1100 ج.م",
        images: ["IMAGE/sakn31.webp", "IMAGE/sakn3.webp", "IMAGE/sakn32.webp", "IMAGE/sakn33.webp"],
        owner: "عماد حمدي", 
        phone: "01200998877", 
        area: "100m", 
        rooms: 3, 
        floor: "1" 
    },
    { 
        id: 12, 
        title: "شقة أرضي بمدخل خاص", 
        location: "شارع الشيخ محسن", 
        price: "2100 ج.م",
        images: ["IMAGE/sakn41.webp", "IMAGE/sakn42.webp", "IMAGE/sakn4.webp", "IMAGE/sakn43.webp"],
        owner: "خالد سعيد", 
        phone: "01077665544", 
        area: "125m", 
        rooms: 3, 
        floor: "أرضي" 
    },
    { 
        id: 13, 
        title: "غرفتين وصالة تشطيب حديث", 
        location: "دردشه", 
        price: "1750 ج.م",
        images: ["IMAGE/sakn51.jpg", "IMAGE/sakn5.jpg", "IMAGE/sakn51.jpg", "IMAGE/sakn52.jpg"],
        owner: "عصام فوزي", 
        phone: "01512345678", 
        area: "85m", 
        rooms: 2, 
        floor: "3" 
    },
    { 
        id: 14, 
        title: "سكن عائلات منطقة راقية", 
        location: "السيد", 
        price: "4000 ج.م",
        images: ["IMAGE/sakn61.jpg", "IMAGE/sakn6.jpg", "IMAGE/sakn62.jpg", "IMAGE/sakn63.jpg"],
        owner: "هشام شوقي", 
        phone: "01066554433", 
        area: "180m", 
        rooms: 4, 
        floor: "4" 
    },
    { 
        id: 15, 
        title: "شقة علوية بإطلالة مميزة", 
        location: "حوض 10", 
        price: "2300 ج.م",
        images: ["IMAGE/sakn71.jpeg", "IMAGE/sakn7.jpeg", "IMAGE/sakn73.jpeg", "IMAGE/sakn72.jpeg"],
        owner: "وليد سعد", 
        phone: "01122336677", 
        area: "115m", 
        rooms: 3, 
        floor: "6" 
    },
    { 
        id: 16, 
        title: "غرفة بحمام خاص", 
        location: "بنزايون", 
        price: "1500 ج.م",
        images: ["IMAGE/sakn81.jpg", "IMAGE/sakn8.jpg", "IMAGE/sakn82.jpg", "IMAGE/sakn83.jpg"],
        owner: "مدام عفاف", 
        phone: "01244556699", 
        area: "40m", 
        rooms: 1, 
        floor: "2" 
    },
    { 
        id: 17, 
        title: "شقة قريبة من الجامعة", 
        location: "المساكن", 
        price: "2700 ج.م",
        images: ["IMAGE/sakn1 (2).jpeg", "IMAGE/sakn1.jpeg", "IMAGE/sakn1.jpg", "IMAGE/sakn1.webp"],
        owner: "د. أشرف", 
        phone: "01099885544", 
        area: "135m", 
        rooms: 3, 
        floor: "3" 
    },
    { 
        id: 18, 
        title: "سكن اقتصادي للشباب", 
        location: "مدينه العمال", 
        price: "850 ج.م",
        images: ["IMAGE/sakn21.jpeg", "IMAGE/sakn2.jpeg", "IMAGE/sakn22.jpeg", "IMAGE/sakn23.jpeg"],
        owner: "عبد الله ناصر", 
        phone: "01133221100", 
        area: "70m", 
        rooms: 2, 
        floor: "5" 
    },
    { 
        id: 19, 
        title: "شقة مفروشة مكيفة", 
        location: "السيد", 
        price: "3800 ج.م",
        images: ["IMAGE/sakn31.webp", "IMAGE/sakn3.webp", "IMAGE/sakn32.webp", "IMAGE/sakn33.webp"],
        owner: "رامي صبري", 
        phone: "01599887744", 
        area: "140m", 
        rooms: 3, 
        floor: "2" 
    },
    { 
        id: 20, 
        title: "منزل دورين للإيجار", 
        location: "شارع الشيخ محسن", 
        price: "4500 ج.م",
        images: ["IMAGE/sakn41.webp", "IMAGE/sakn42.webp", "IMAGE/sakn4.webp", "IMAGE/sakn43.webp"],
        owner: "م. طارق", 
        phone: "01022334499", 
        area: "200m", 
        rooms: 5, 
        floor: "كامل" 
    }
];
    // 2. استخراج الـ ID من الرابط
const params = new URLSearchParams(window.location.search);
const sakanId = params.get('id');

// 3. البحث عن البيانات
const item = accommodationsDatadetails.find(a => a.id == sakanId);
    if (item) {
        // ملء البيانات النصية
        document.getElementById('sakanTitle').textContent = item.title;
        document.getElementById('sakanLocationHeader').textContent = `📍 ${item.location}`;
        document.getElementById('sakanPrice').textContent = item.price;
        document.getElementById('sakanLocation').textContent = item.location;
        document.getElementById('sakanArea').textContent = item.area;
        document.getElementById('sakanRooms').textContent = item.rooms;
        document.getElementById('sakanFloor').textContent = item.floor;
        document.getElementById('sakanOwner').textContent = item.owner;
        document.getElementById('sakanPhone').textContent = item.phone;

        // تحديث روابط الأزرار
        document.getElementById('whatsappBtn').href = `https://wa.me/2${item.phone}`;
        document.getElementById('callBtn').href = `tel:${item.phone}`;

        // عرض الصورة الرئيسية (أول صورة في المصفوفة)
        const mainImg = document.getElementById('mainImg');
        mainImg.src = (item.images && item.images.length > 0) ? item.images[0] : 'IMAGE/default.jpg';

        // عرض الصور المصغرة
        const thumbContainer = document.getElementById('thumbnailsContainer');
        if (item.images && item.images.length > 1) {
            item.images.forEach(imgUrl => {
                const col = document.createElement('div');
                col.className = 'col-3';
                col.innerHTML = `
                    <img src="${imgUrl}" class="img-fluid rounded thumb-img shadow-sm" 
                         style="cursor:pointer; height:70px; width:100%; object-fit:cover;" 
                         onclick="document.getElementById('mainImg').src='${imgUrl}'">
                `;
                thumbContainer.appendChild(col);
            });
        }
    } else {
        // إذا لم يتم العثور على السكن
        document.getElementById('sakanDetailContent').classList.add('d-none');
        document.getElementById('errorMessage').classList.remove('d-none');
    }
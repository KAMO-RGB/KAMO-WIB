document.addEventListener('DOMContentLoaded', function() {
    // بيانات جميع الشخصيات
    const characters = [
        {
            id: 'sung-jinwoo',
            name: 'سونغ جين-و',
            title: 'الصياد الظل | المستوى: S+',
            image: 'https://i.imgur.com/y7VXqHZ.jpg',
            description: 'البطل الرئيسي، بدأ كأضعف صياد ثم أصبح أقوى مخلوق في العالم بعد حصوله على "النظام". يمتلك جيشًا من الظلال وقدرات خارقة تطورت مع تقدم القصة.'
        },
        {
            id: 'cha-hae-in',
            name: 'تشا هاي-إن',
            title: 'صيادة S-Rank | فرسان الهانوك',
            image: 'https://i.imgur.com/z5QvW9B.jpg',
            description: 'أقوى صيادة في كوريا، تمتلك حاسة شم قوية يمكنها اكتشاف قوة الأعداء. كانت الوحيدة التي شعرت بقوة جين-و الحقيقية منذ البداية.'
        },
        {
            id: 'go-hee-jin',
            name: 'جو هي-جين',
            title: 'صيادة A-Rank | فرسان الهانوك',
            image: 'https://i.imgur.com/XsLmzRr.jpg',
            description: 'صيادة ماهرة ومسؤولة عن تدريب الصيادين الجدد، تلعب دوراً مهماً في تطوير جين-و وتدريبه في البداية.'
        },
        {
            id: 'yoo-jin-ho',
            name: 'يو جين-هو',
            title: 'صياد C-Rank | رفيق جين-و',
            image: 'https://i.imgur.com/p9QvWx2.jpg',
            description: 'صياد شاب غني أصبح تابعاً مخلصاً لجين-و بعد أن أنقذه من بوابة عالية المستوى. يعمل كوسيط أعمال لجين-و.'
        },
        {
            id: 'park-hee-jin',
            name: 'بارك هي-جين',
            title: 'مديرة نقابة الصيادين',
            image: 'https://i.imgur.com/r5vQxLs.jpg',
            description: 'مسؤولة نقابة الصيادين الكورية، تلعب دوراً سياسياً مهماً في عالم الصيادين وتحاول الحفاظ على التوازن بين الصيادين الأقوياء.'
        },
        {
            id: 'baek-yoon-ho',
            name: 'باك يون-هو',
            title: 'صياد S-Rank | النمر الأبيض',
            image: 'https://i.imgur.com/mX3vJyT.jpg',
            description: 'صياد من المستوى S معروف باسم "النمر الأبيض". لديه قدرة التحول إلى نمر عملاق وهو أحد أقوى الصيادين في كوريا.'
        },
        {
            id: 'cha-sil',
            name: 'تشا سيل',
            title: 'قائد فرسان الهانوك',
            image: 'https://i.imgur.com/kL5QvWx.jpg',
            description: 'قائد فرسان الهانوك وأحد أقوى الصيادين في العالم. يمتلك شخصية قوية وهو معروف بشرفه وشجاعته.'
        },
        {
            id: 'thomas-andre',
            name: 'توماس أندريه',
            title: 'الصياد الوطني لأمريكا | المستوى: S+',
            image: 'https://i.imgur.com/nM3vJyT.jpg',
            description: 'أحد أقوى الصيادين في العالم، معروف بقوته الجسدية الهائلة. لديه شخصية متغطرسة لكنه يحترم الأقوياء حقاً مثل جين-و.'
        }
    ];

    // تهيئة عرض الشخصيات
    const characterContainer = document.querySelector('.character-container');
    const thumbnailsContainer = document.querySelector('.character-thumbnails');
    let currentIndex = 0;

    // إنشاء بطاقات الشخصيات
    characters.forEach((character, index) => {
        // إنشاء بطاقة الشخصية
        const card = document.createElement('div');
        card.className = `character-card ${index === 0 ? 'active' : ''}`;
        card.setAttribute('data-character', character.id);
        
        card.innerHTML = `
            <div class="character-image">
                <img src="${character.image}" alt="${character.name}" onerror="this.src='https://i.imgur.com/placeholder.jpg'">
                <div class="character-info">
                    <h3>${character.name}</h3>
                    <p>${character.title}</p>
                    <div class="character-desc">${character.description}</div>
                </div>
            </div>
        `;
        
        characterContainer.appendChild(card);

        // إنشاء الصور المصغرة
        const thumbnail = document.createElement('div');
        thumbnail.className = `thumbnail ${index === 0 ? 'active' : ''}`;
        thumbnail.setAttribute('data-target', character.id);
        
        thumbnail.innerHTML = `<img src="${character.image}" alt="${character.name}">`;
        thumbnail.addEventListener('click', () => showCharacter(index));
        
        thumbnailsContainer.appendChild(thumbnail);
    });

    // أزرار التنقل
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    prevBtn.addEventListener('click', showPrevCharacter);
    nextBtn.addEventListener('click', showNextCharacter);

    // وظيفة عرض الشخصية المحددة
    function showCharacter(index) {
        // تحديث الفهرس الحالي
        currentIndex = index;
        
        // تحديث البطاقات
        const cards = document.querySelectorAll('.character-card');
        cards.forEach((card, i) => {
            card.classList.remove('active', 'prev', 'next');
            
            if (i === index) {
                card.classList.add('active');
            } else if (i < index) {
                card.classList.add('prev');
            } else {
                card.classList.add('next');
            }
        });
        
        // تحديث الصور المصغرة
        const thumbnails = document.querySelectorAll('.thumbnail');
        thumbnails.forEach((thumb, i) => {
            thumb.classList.remove('active');
            if (i === index) thumb.classList.add('active');
        });
    }

    // عرض الشخصية السابقة
    function showPrevCharacter() {
        let newIndex = currentIndex - 1;
        if (newIndex < 0) newIndex = characters.length - 1;
        showCharacter(newIndex);
    }

    // عرض الشخصية التالية
    function showNextCharacter() {
        let newIndex = currentIndex + 1;
        if (newIndex >= characters.length) newIndex = 0;
        showCharacter(newIndex);
    }

    // تبديل الأقسام
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('.section');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            this.classList.add('active');
            
            sections.forEach(section => section.classList.remove('active-section'));
            document.getElementById(this.getAttribute('data-section')).classList.add('active-section');
        });
    });

    // التحكم باللوحة المميزة بالكيبورد
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowRight') {
            showPrevCharacter();
        } else if (e.key === 'ArrowLeft') {
            showNextCharacter();
        }
    });

    // تشغيل التقليب التلقائي
    let autoSlideInterval = setInterval(showNextCharacter, 5000);

    // إيقاف التقليب التلقائي عند التفاعل
    characterContainer.addEventListener('mouseenter', () => {
        clearInterval(autoSlideInterval);
    });

    characterContainer.addEventListener('mouseleave', () => {
        autoSlideInterval = setInterval(showNextCharacter, 5000);
    });
});
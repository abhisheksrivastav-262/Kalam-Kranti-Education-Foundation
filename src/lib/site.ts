export const SITE = {
  name: "Kalam Kranti Education Foundation",
  shortName: "Kalam Kranti",
  tagline: "शिक्षा के लिए एक साझा प्रयास",
  taglineEn: "Empowering Every Child Through Education",
  director: "Er. Akshay Lal Yadav",
  corporateNo: "U85490BR2025NPL079265",
  pan: "AAMCK2270K",
  tan: "RCHK02738B",
  location: "Mahartha Nuaon, Kaimur (Bhabhua), Bihar, India",
  addressShort: "Mahartha Nuaon, Kaimur (Bhabhua), Bihar",
  url: "https://kalamkranti.org",
  email: "info@kalamkranti.org",
  phone: "+91 98765 43210",
  whatsapp: "919876543210",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Gallery", href: "/gallery" },
  { label: "Impact", href: "/impact" },
  { label: "Volunteer", href: "/volunteer" },
  { label: "Contact", href: "/contact" },
];

export const STATS = [
  { value: 12500, suffix: "+", label: "Students Supported", hindi: "छात्र समर्थित" },
  { value: 120, suffix: "+", label: "Villages Reached", hindi: "गाँव तक पहुँच" },
  { value: 850, suffix: "+", label: "Volunteers", hindi: "स्वयंसेवक" },
  { value: 8, suffix: "", label: "Education Programs", hindi: "शिक्षा कार्यक्रम" },
];

// All stock images saved locally in public/images/ — never break, load fast
export const IMAGES = {
  heroMain: "/images/stock-hero-books.jpg",
  heroHands: "/images/stock-hands-up.jpg",
  aboutClass: "/images/stock-study-writing.jpg",
  childrenSmile: "/images/stock-children-smile.jpg",
  classroomEmpty: "/images/stock-classroom-empty.jpg",
  girlStudy: "/images/stock-girls-smile.jpg",
  girlRead: "/images/stock-girl-read.jpg",
  graduation: "/images/stock-ceremony-hall.jpg",
  library: "/images/stock-library.jpg",
  laptopKids: "/images/stock-laptop-kids.jpg",
  onlineLearn: "/images/stock-study-desk.jpg",
  digitalLearn: "/images/stock-computer-learn.jpg",
  lecture: "/images/stock-lecture.jpg",
  volunteers: "/images/stock-volunteers.jpg",
  volunteerGroup: "/images/stock-volunteer-boxes.jpg",
  helping: "/images/stock-seva-packing.jpg",
  campus: "/images/stock-campus.jpg",
  caps: "/images/stock-classroom-students.jpg",
  classroomKids: "/images/stock-classroom-kids.jpg",
};

export const PROGRAMS = [
  {
    slug: "free-education",
    title: "Free Education",
    hindi: "निःशुल्क शिक्षा",
    desc: "Free primary schooling, books, uniforms and exam support for underprivileged children in rural Bihar.",
    image: IMAGES.classroomKids,
    icon: "📚",
  },
  {
    slug: "scholarship",
    title: "Scholarship Support",
    hindi: "छात्रवृत्ति सहायता",
    desc: "Merit & need-based scholarships covering tuition, hostel and coaching for bright students.",
    image: IMAGES.graduation,
    icon: "🎓",
  },
  {
    slug: "digital-learning",
    title: "Digital Learning",
    hindi: "डिजिटल शिक्षा",
    desc: "Smart classrooms, computer labs, tablets and online classes bringing modern learning to villages.",
    image: IMAGES.digitalLearn,
    icon: "💻",
  },
  {
    slug: "girls-education",
    title: "Girls Education",
    hindi: "बेटी पढ़ाओ",
    desc: "Dedicated mission for girl child enrolment, safety, menstrual health and higher-education mentoring.",
    image: IMAGES.girlStudy,
    icon: "👧",
  },
  {
    slug: "library-mission",
    title: "Library Mission",
    hindi: "पुस्तकालय मिशन",
    desc: "Village libraries with 5000+ books, reading rooms and mobile library vans for remote hamlets.",
    image: IMAGES.library,
    icon: "📖",
  },
  {
    slug: "skill-development",
    title: "Skill Development",
    hindi: "कौशल विकास",
    desc: "Vocational training — tailoring, computer, electrician, farming tech — for youth employment.",
    image: IMAGES.lecture,
    icon: "🛠️",
  },
  {
    slug: "rural-education",
    title: "Rural Education",
    hindi: "ग्रामीण शिक्षा",
    desc: "Learning centres, evening pathshalas and bridge courses across 120+ villages of Kaimur.",
    image: IMAGES.heroHands,
    icon: "🏫",
  },
  {
    slug: "career-guidance",
    title: "Career Guidance",
    hindi: "करियर मार्गदर्शन",
    desc: "Counselling, IIT/NEET/UPSC mentoring, job fairs and mentorship from engineers & teachers.",
    image: IMAGES.caps,
    icon: "🧭",
  },
];

export const TESTIMONIALS = [
  {
    name: "Priya Kumari",
    role: "Scholarship Student, Bhabhua",
    text: "Kalam Kranti gave me books, coaching and confidence. Today I am preparing for NEET with full scholarship. Mere gaon ki beti doctor banegi!",
    image: IMAGES.girlRead,
  },
  {
    name: "Ramesh Yadav",
    role: "Parent, Nuaon",
    text: "My two sons study in the free evening pathshala. Their marks doubled in one year. The teachers treat them like family.",
    image: IMAGES.childrenSmile,
  },
  {
    name: "Sunita Devi",
    role: "Volunteer Teacher",
    text: "Volunteering here changed my life. Smart boards, libraries, and the smiles of 200 children — this is real nation building.",
    image: IMAGES.volunteers,
  },
  {
    name: "Amit Kumar",
    role: "Skill Graduate, Electrician",
    text: "After 10th I had no direction. The skill centre trained me as an electrician. Now I earn ₹18,000/month in Patna.",
    image: IMAGES.volunteerGroup,
  },
];

export const GALLERY = [
  { src: IMAGES.heroMain, title: "Library & Books", cat: "Learning" },
  { src: IMAGES.classroomKids, title: "Village Classroom", cat: "Classroom" },
  { src: IMAGES.girlStudy, title: "Girls Education", cat: "Girls" },
  { src: IMAGES.digitalLearn, title: "Computer Lab", cat: "Digital" },
  { src: IMAGES.library, title: "Village Library", cat: "Library" },
  { src: IMAGES.volunteers, title: "Volunteer Drive", cat: "NGO" },
  { src: IMAGES.graduation, title: "Scholarship Ceremony", cat: "Scholarship" },
  { src: IMAGES.laptopKids, title: "Smart Learning", cat: "Digital" },
  { src: IMAGES.childrenSmile, title: "Happy Learners", cat: "Children" },
  { src: IMAGES.heroHands, title: "Hands Up for Education", cat: "Classroom" },
  { src: IMAGES.onlineLearn, title: "Home Learning", cat: "Digital" },
  { src: IMAGES.helping, title: "Seva & Support", cat: "NGO" },
  { src: IMAGES.campus, title: "Learning Centre", cat: "Campus" },
  { src: IMAGES.aboutClass, title: "Study Time", cat: "Learning" },
  { src: IMAGES.classroomEmpty, title: "Smart Classroom", cat: "Classroom" },
];

// Real field photos of the foundation (local files, shown WITHOUT cropping)
export const REAL_PHOTOS = [
  { src: "/images/real-01-cert-girl-yellow.jpg", title: "Certificate Samman — Nuaon", cat: "Samman", w: 1200, h: 1600 },
  { src: "/images/real-02-cert-girl-pink.jpg", title: "Beti ko Certificate", cat: "Beti Padhao", w: 1599, h: 906 },
  { src: "/images/real-03-book-girl-green.jpg", title: "Free Exam Guide Vitran", cat: "Books", w: 1599, h: 906 },
  { src: "/images/real-04-group-certificates.jpg", title: "Medal, Certificate aur School Bag", cat: "Samman", w: 1599, h: 1200 },
  { src: "/images/real-05-bag-distribution.jpg", title: "School Bag Vitran", cat: "Seva", w: 481, h: 272 },
  { src: "/images/real-06-trophy-girl-stage.jpg", title: "Manch par Trophy Samman", cat: "Samman", w: 481, h: 430 },
  { src: "/images/real-07-book-boy-outdoor.jpg", title: "Gaon me Book Vitran", cat: "Seva", w: 481, h: 433 },
  { src: "/images/real-08-team-stage.jpg", title: "Hamari Team — Kaimur", cat: "Team", w: 481, h: 323 },
  { src: "/images/real-09-village-night.jpg", title: "Gaon Chaupal — Night Meeting", cat: "Gaon", w: 1600, h: 900 },
  { src: "/images/real-10-village-night-wide.jpg", title: "Gaon ke Bachche", cat: "Gaon", w: 481, h: 267 },
  { src: "/images/real-11-ncc-award.jpg", title: "NCC Cadets Samman", cat: "Samman", w: 1600, h: 718 },
];

var audio = new Audio('assets/sentmessage.mp3');
var contactString = "<div class='social'> <a target='_blank' href='tel:+919788428428'> <div class='socialItem' id='call'><img class='socialItemI' src='images/phone.svg'/><label class='number'>+91 9788428428</label></div> </a> <a href='mailto:kaviyaspsk@gmail.com'> <div class='socialItem' id='call'><img class='socialItemI' src='images/gmail.svg' alt=''><label class='number'>mail id:kaviyaspsk@gmail.com</label></div> </a> <a href='https://www.linkedin.com/in/kaviya-s-90b6a6257/' target='_blank' rel='noopener noreferrer'> <div class='socialItem' id='call'><img class='socialItemI' src='images/linkedin.svg' alt=''><label class='number'>Kaviya S</label></div> </a> <a target='_blank' href='https://github.com/KaviyaSathasivam'> <div class='socialItem' id='call'><img class='socialItemI' src='images/github.svg' alt=''><label class='number'>KaviyaSathasivam</label></div> </a> <a href='https://leetcode.com/u/kav-beingLeet/' target='_blank' rel='noopener noreferrer'> <div class='socialItem' id='call'><img class='socialItemI' src='images/leetcode.jpg' alt=''><label class='number'>Kaviya S</label></div> </a> <a target='_blank' href='https://wa.me/9788428428'> <div class='socialItem' id='call'><img class='socialItemI' src='images/whatsapp.svg' alt=''><label class='number'>9788428428</label></div> </a> </div>";
var resumeString = "<a href='assets/Kaviya S Resume.pdf' target='_blank' rel='noopener'><img src='images/resume_thumbnaill.png' class='resumeThumbnail'></a><div class='downloadSpace'><div class='pdfname'><img src='images/pdf.svg'><label>Kaviya S_Resume.pdf</label></div><a href='assets/Kaviya S Resume.pdf' download='Kaviya S Resume.pdf'><img class='download' src='images/downloadIcon.svg'></a></div>";
var addressString = "<div class='mapview'><iframe src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d509.03323536435374!2d78.79676593105596!3d10.717711676841173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1750955610565!5m2!1sen!2sin' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe></div><label class='add'><address>No:6/473<br>Nehru Nagar,Poolangudi,Palanganakudi road,HEPF<br>Trichy ,Tamilnadu , India 620025</address>";
function startFunction() {
    setLastSeen();
    waitAndResponce("intro");
}

function setLastSeen() {
    var date = new Date();
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "last seen today at " + date.getHours() + ":" + date.getMinutes()
}


function closeFullDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}

function openFullScreenDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}
document.addEventListener("click", function (event) {
    var fullScreenDP = document.getElementById("fullScreenDP");
    if (fullScreenDP.style.display === 'flex') {
        if (!event.target.closest(".dp") && !event.target.closest(".closeBTN") && event.target.closest("#fullScreenDP")) {
            fullScreenDP.style.display = 'none';
        }
    }
});



function isEnter(event) {
    if (event.keyCode == 13) {
        sendMsg();
    }
}

function sendMsg() {
    var input = document.getElementById("inputMSG");
    var ti = input.value;
    if (input.value == "") {
        return;
    }
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "sent");
    greendiv.setAttribute("class", "green");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = input.value;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    setTimeout(function() { waitAndResponce(ti) }, 1500);
    input.value = "";
    playSound();
}

function waitAndResponce(inputText) {
    console.log("Received input:", inputText);
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "typing...";
    switch (inputText.toLowerCase().trim()) {
        case "intro":
            setTimeout(() => {
                sendTextMessage("Hello there 👋🏻,<br><br>My name is <span class='bold'><a class='alink'>Kaviya S</a></span>.<br><br>I’m a passionate <span class='bold'>Computer Science Engineering</span> student from <span class='bold'>Sri Sairam Engineering College</span>, currently in my Final year.<br><br>My interests lie in <span class='bold'>Web Development</span> and using <span class='bold'>technology for real-world impact</span>. I have hands-on experience with <span class='bold'>C</span>, <span class='bold'>Python</span>, and <span class='bold'>Java</span>, and I enjoy creating solutions that are both functional and meaningful.<br><br>I’ve worked on a project titled <span class='bold'>‘Secure Vote Revolutionizing Democracy through Blockchain Technology’</span>, aiming to revolutionize digital elections using <span class='bold'>Blockchain</span> to ensure transparency and trust.<br><br>I’ve won <span class='bold'>two first prizes in Ideathons</span> and love collaborating with peers across disciplines. These experiences have helped me sharpen my <span class='bold'>problem-solving</span> and <span class='bold'>presentation</span> skills.<br><br>As an active member of <span class='bold'>NDLI</span>, <span class='bold'>IEEE</span>, and <span class='bold'>NSS</span>, I’ve organized and led a wide range of events for school, college, and polytechnic students — blending <span class='bold'>teamwork</span>, <span class='bold'>leadership</span>, and <span class='bold'>creativity</span>.<br><br>I’m also a <span class='bold'>MAGIC Member</span> at Varadharajapuram village, taking part in community outreach, awareness rallies, and educational programs.<br><br>Outside academics, I enjoy <span class='bold'>listening to music</span>, spending time with friends, and participating in <span class='bold'>discus throw</span> — all of which keep me balanced and motivated.<br><br>I strive to grow through <span class='bold'>learning, consistency</span>, and a mindset focused on <span class='bold'>making meaningful contributions</span>.<br><br>Send <span class='bold' id='glow'>'help'</span> to know more about me.<br>");
            }, 2000);
            break;
        case "help":
            sendTextMessage("✨ <span class='sk'>Explore more about me by sending keywords:<br><br>🔹 <span class='bold'>'skills'</span> – Tech & Soft Skills<br>🔹 <span class='bold'>'projects'</span> – My Works<br>🔹 <span class='bold'>'education'</span> – Academic Background<br>🔹 <span class='bold'>'resume'</span> – Download CV<br>🔹 <span class='bold'>'experience'</span> – Internships & Leadership Roles<br>🔹 <span class='bold'>'achievements'</span> – Awards & Recognitions<br>🔹 <span class='bold'>'languages'</span> – Languages I Speak<br>🔹 <span class='bold'>'contact'</span> – Let’s Connect<br>🔹 <span class='bold'>'clear'</span> – Restart Conversation</span>");
            break;
        case "resume":
            sendTextMessage(resumeString);
            break;
        case "experience":
            sendTextMessage("Here’s a detailed overview of my professional and organizational experiences:<br><br><span class='bold'>🖥️ Vulture Lines Tech Management Pvt. Ltd (Jun 9 – Jun 27, 2025)</span><br>Full-Stack Developer Intern – Developed 'Swasthrack', a health tracking system using HTML, CSS, JavaScript, React.js, SQL, and Figma. Improved workflow efficiency by 25% through responsive design and reduced manual errors.<br><br><span class='bold'>🖥️ OneYes Infotech Solutions (Jan 4 – Jan 20, 2025)</span><br>Full-Stack Developer Intern – Built a user-centric College Management System using React.js, Node.js, SQL, and Figma. Achieved a 30% reduction in navigation time with improved usability.<br><br><span class='bold'>🛡️ High Energy Projectile Factory – Defense Sector (Jun 7 – Jun 22, 2024)</span><br>Industrial Training Intern – Learned production flows and security protocols; created an AI assistant that boosted user feedback by 40%.<br><br><span class='bold'>📚 NDLI Club – Student Coordinator (2023 – 2025)</span><br>Organized National Library Week & awareness events across departments. Led literary and academic activities fostering communication and planning skills.<br><br><span class='bold'>🎤 NSS Club – Student Volunteer (2023 – Present)</span><br>RJ for NSS podcasts on themes like education and festivals. Took part in blood donation drives, rallies, and volunteering activities.<br><br><span class='bold'>⚡ IEEE Student Chapter – Active Member (2023 – Present)</span><br>Participated in workshops and seminars. Published a research paper titled ‘Secure Vote’ focused on blockchain in democracy.<br><br><span class='bold'>🌱 Magic Scope – Member (2024 – Present)</span><br>Engaged in community outreach in Varadharajapuram village—educational support, environment awareness, and rural development.<br><br><span class='bold'>👩🏻‍💻 Google Developer Student Club (2024 – Present)</span><br>Actively involved in GDSC activities, cloud learning via Qwiklabs, and collaborative coding sessions."); 
            break;
        case "achievements": sendTextMessage(`🏆 Ideathon Winner (Goal 5 – Gender Equality, 2023): Women’s health app on PCOD/PCOS<br>🏆 Ideathon Winner (Goal 11 – Sustainable Cities, 2023): Anti-food-waste urban solution<br>🏆 Quiz Winner – Convergence Symposium (2023): 1st prize at state-level quiz<br>🥇 Solveathon 3.0 Finalist (Goal 10, 2024): Blockchain voting to reduce inequality<br>🥇 Innovathon 3.0 Finalist (Goal 16, 2025): Secure Vote for Peace & Justice<br>🥈 Maths Club Quiz – IInd Runner-Up (2023): Carbon reduction app + quiz<br>🌟 NPTEL Topper (Top 2%, 2025): Cloud Computing concepts mastered<br>🎙️ RJ & Content Creator – NSS (2023–2024): Hosted podcasts on social themes<br>🎓 UGC NEP SAARTHI (2025): National student ambassador for academic reforms<br>🏅 Best Volunteer – NDLI Club (2025): Led INQUESTA, Library Week, awareness drives<br>📚 INQUESTA 1.0 Coordinator (2025): Led Harry Potter-themed event & valedictory<br>🏅 NPTEL Discipline Star (2025): Completed 8 NPTEL courses with excellence<br>🎯 Synsara 2K24 Volunteer (2025): CSE symposium event coordination<br>📄 Paper Publication – ICCCT (2025): Blockchain-based voting paper in IEEE<br>🥉 Discus Throw – 2nd Runner-Up (2024): Sports Day achiever in athletics`); break;
        case "languages": sendTextMessage(`Languages Known: English (Fluent) <br> Tamil (Fluent) <br> Hindi (Intermediate)`); break;

        case "skills":
            sendTextMessage("<span class='sk'>Here’s a quick overview of my skill set:<br><br><span class='bold'>💻 Programming Languages:</span><br>Java, Python, C, HTML, CSS, JavaScript<br><br><span class='bold'>⚙️ Frameworks & Libraries:</span><br>ReactJS, Android SDK<br><br><span class='bold'>🛠️ Development Tools:</span><br>Android Studio, Visual Studio Code, Git, GitHub, Figma<br><br><span class='bold'>🌐 Backend & Server-Side Basics:</span><br>FastAPI, Node.js, Express.js<br><br><span class='bold'>🧠 Core Soft Skills:</span><br>Problem Solving, Leadership, Communication, Teamwork, Performance Optimization, Time Management, Critical Thinking, Public Speaking<br><br>I'm passionate about combining technical expertise with strong interpersonal skills to build impactful solutions and work effectively in dynamic environments.</span>");
            break;

        case "education":
            sendTextMessage("I’m currently in my final year of <span class='bold'>B.E. Computer Science and Engineering</span> at <span class='bold'>Sri Sairam Engineering College, Chennai</span>, with a strong academic record of <span class='bold'>9.66 CGPA</span> out of 10.<br><br>My schooling journey took place at <span class='bold'>Kendriya Vidyalaya No. 2, HEPF, Trichy</span>, where I secured <span class='bold'>95.8%</span> in Class XII and <span class='bold'>93.7%</span> in Class X under the CBSE curriculum.<br><br>Beyond academics, I proudly served as the <span class='bold'>School Captain</span>, an experience that sharpened my <span class='bold'>leadership, communication, and team coordination skills</span> — traits that still drive me in every role I take on.<br><br>This blend of academic excellence and early leadership has helped shape me into someone who’s both driven and dependable.");
            break;

        case "address":
            sendTextMessage(addressString);
            break;
        case "clear":
            clearChat();
            break;
        case "about":
            sendTextMessage("🛠️💻 This portfolio website is built using HTML, CSS and JavaScript<br><br>👨🏻‍💻 Designed and Developed by <a class='alink' target='_blank' href='https://www.instagram.com/itz_me_kavz_/'><span class='bold'> Kaviya S</a> with ❤️</span>");
            break;
        case "contact":
            sendTextMessage(contactString);
            break;
        case "projects":
            sendTextMessage("Do You want to check my projects? Then just jump into my Github Account.<br><br><div class='social'><a target='_blank' href='https://github.com/KaviyaSathasivam'> <div class='socialItem' id='call'><img class='socialItemI' src='images/github.svg' alt=''><label class='number'>KaviyaSathasivam</label></div> </a></div>");
            break;
        case "new":
            sendTextMessage(addressString);
            break;
        default:
            setTimeout(() => {
                sendTextMessage("Hey I couldn't catch you...😢<br>Send <span class='bold' id='glow'>'help'</span> to know more about usage.");
            }, 2000);
            break;
    }



}

function clearChat() {
    document.getElementById("listUL").innerHTML = "";
    waitAndResponce('intro');
}
// function sendTextMessage() {
//     setTimeout(setLastSeen, 1000);
//     var date = new Date();
//     var myLI = document.createElement("li");
//     var myDiv = document.createElement("div");
//     var greendiv = document.createElement("div");
//     var dateLabel = document.createElement("label");
//     dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
//     myDiv.setAttribute("class", "received");
//     greendiv.setAttribute("class", "grey");
//     dateLabel.setAttribute("class", "dateLabel");
//     greendiv.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ";
//     myDiv.appendChild(greendiv);
//     myLI.appendChild(myDiv);
//     greendiv.appendChild(dateLabel);
//     document.getElementById("listUL").appendChild(myLI);
//     var s = document.getElementById("chatting");
//     s.scrollTop = s.scrollHeight;
//     playSound();
// }
function sendTextMessage(text) {
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");

    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();

    myDiv.setAttribute("class", "recieved");
    greendiv.setAttribute("class", "grey");
    dateLabel.setAttribute("class", "dateLabel");

    greendiv.innerHTML = text;  // Use innerHTML to support <span> and <br>
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);

    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
    setLastSeen();
}


function playSound() {
    audio.play();
}

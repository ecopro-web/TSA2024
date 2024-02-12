(function () {
     
    window.onload = function() {

        let menuMain = `
        <nav>
            <link rel="stylesheet" href="../css/index.css">
            <link rel="stylesheet" href="../css/universal.css">
            <script src="./index.js"></script>
            <script src="universal.js"></script>
            <div id="menu">
                <a href="index.html" class="home menu-button">Home</a>
                <a href="energy.html" class="energy menu-button">Energy</a>
                <a href="solutions.html" class="solutions menu-button">Solutions</a>
                <a href="references.html" class="references menu-button">References</a>
                <a class="menu-button" onclick="contactScroll()" >Contact</a>
            </div>
        </nav>
        `;

        document.getElementById("menu-main").innerHTML = menuMain;

        var src = ''

        let footerMain = `
        <nav>
        <link rel="stylesheet" href="../css/index.css">
        <link rel="stylesheet" href="../css/universal.css">
        <script src="./index.js"></script>
        <script src="universal.js"></script>
        
        <div class="contactdetails">
            <div class="contactdetail" style="margin-left: 150px;">
                <p class="header-title">ECO PRO</p>
                <div class="images">
                    <image src="./assets/images/facebook.png" id="social"></image>
                    <image src="./assets/images/twitter.png" style="margin-left: 10px;" id="social"></image>
                    <image src="./assets/images/youtube.png" style="margin-left: 10px;" id="social"></image>
                </div>
                <p id="footer-subheader">Copyright © 2024 ECO PRO</p>

            </div>
            <div class="contactdetail" >
                <p class="header-subheader">Contact Us</p>
                <div class="contact-form">
        
                    <form>
                        <input type="text" placeholder="Your Name" required>
                        <input type="email" placeholder="Your Email" required>
                        <textarea placeholder="Your Message" required></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>
            <div class="contactdetail" style="margin-right: 150px;">
                <p class="header-subheader">Questions?</p>
                <div id="questions">
                    <p id="footer-subheader"><b>Email:</b> contact@ecopro.com</p>
                    <p id="footer-subheader"><b>Phone:</b> 714-518-5781</p>
                <div>
            </div>
        </div>

        </nav>
    `;
    document.getElementById("footer-main").innerHTML = footerMain;


  }
  
})();


function contactScroll() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
    if (width < 1024) {
        document.getElementById("menu").style.height = "180px";
        openm = false;
        document.getElementById("menubutton").style.transform = "rotate(90deg)";
    }
    
}

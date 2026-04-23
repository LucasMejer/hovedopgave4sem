<script setup>

</script>
<template>
    <footer>
        <div class="footer-main">
            <div class="footer-content">
                <h2>CONTACT</h2>
                <address>
                    <p>Scangrip A/S</p>
                    <p>Rytterhaven 9</p>
                    <p>DK-5700 Svendborg</p>
                    <a href="tel:+4563206320">TEL:(+45)6320 6320</a>
                    <a href="mailto:scangrip.com"><b>scangrip@scangrip.com</b></a>
                    <a href="https://www.scangrip.com/da-dk"><b>scangrip.com</b></a><br>
                    <p>Delivery address: Rytterskoven 12,</p>
                    <p>DK5700 Svendborg</p>
                </address>
            </div>
            <div class="footer-content">
                <h2>PARTNER SUPPORT</h2>
                <p>Productinformation</p>
                <p>Brochures</p>
                <p>Price List</p>
                <p>Sales Guides</p>
                <p>Campaigns</p>
                <p>Business Partner Support Folder</p>
                <p>Privacy policy</p>
                <p>Cookie policy</p>
            </div>
            <div class="footer-content">
                <h2>MAILING LIST</h2>
                <p>Sign up if you would like to receive occassional treats from us.</p>
                <button>Go</button>
            </div>
            <div class="footer-content">
                <h2>SOCIAL LINKS</h2>
                <div class="some-icons">
                    <a href="https://www.instagram.com/scangrip_official/" aria-label="instagram"><img src="/ikoner/some-instagram-ikon.svg" alt="link til scangrips instagram"></a>
                    <a href="https://www.facebook.com/scangrip" aria-label="facebook"><img src="/ikoner/some-facebook-ikon.svg" alt="link til scangrips facebook"></a>
                    <a href="https://www.linkedin.com/company/scangrip" aria-label="linkedin"><img src="/ikoner/some-linkedin-ikon.svg" alt="link til scangrips linkedin"></a>
                    <a href="https://www.linkedin.com/company/scangrip" aria-label="youtubekanal"><img src="/ikoner/some-youtube-ikon.svg" alt="link til scangrips youtubekanal"></a>
                </div>
            </div>
        </div>
        <div class="copyright-notice">
            <p>Copyright © 2026 SCANGRIP A/S. All Rights Reserved</p>
        </div>
    </footer>
</template>
<style lang="scss" scoped>
@use '../assets/colors' as c;
footer{
    background-color: c.$footer-background-color;
    padding: 10px 0px 5px 0px;
}
.footer-content{
margin: 20px 0px 10px 50px;
max-width: 300px;
}
h2{
    color: c.$font-color-secondary;
}
p{
    color: c.$font-color-secondary;
    margin: 5px 0px 5px 0px;
}

a{
    color: c.$font-color-primary;
    text-decoration: none;
    /*font-family: $font-primary;*/
    font-weight: 400;
    font-size: 14px;
}

button{
  background-color: c.$hover-state-inactive;
  border: none;
  min-width: 24px;
  min-height: 24px;
  &:hover{
    color: c.$font-color-secondary;
    background-color: c.$hover-state-active;
    cursor: pointer;
  }
}

.some-icons{
    font-size: small;
}

@media only screen and (min-width: 768px){
    .footer-main{
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    img{
        height: 40px;
        width: 40px;
        margin: 5px;
    }

    .copyright-notice{
        display: flex;
        justify-content: center;
    }
}
</style>
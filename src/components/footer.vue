<script setup>

</script>
<template>
    <div class="footerdiv">
        <div class="footer-content">
            <h2>CONTACT</h2>
        
            <p>Scangrip A/S</p>
            <p>Rytterhaven 9</p>
            <p>DK-5700 Svendborg</p>
            <p>TEL:(+45)6320 6320</p>
            <p><b>scangrip@scangrip.com</b></p>
            <p><b>scangrip.com</b></p><br>
            <p>Delivery address: Rytterskoven 12,</p>
            <p>DK5700 Svendborg</p>
        </div>
        <div class="footer-content">
            <H2>PARTNER SUPPORT</H2>
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
            <h3>MAILING LIST</h3>
            <p>Sign up if you would like to recieve occassional treats from us.</p>
            <button>Go</button>
        </div>
        <div class="footer-content">
            <h2>SOCIAL LINKS</h2>
            <img src="/ikoner/some-instagram-ikon.svg" alt="link til scangrips instagram">
        </div>
    </div>
</template>
<style lang="scss">
@use '../assets/colors' as c;
/*.footerdiv{
    background-color: c.$footer-background-color;
}*/
body{
    background-color: blue;
}
.footer-content{
margin: 20px 0px 10px 50px;
max-width: 300px;
}
p{
    margin: 5px 0px 5px 0px;
}
button{
  background-color: c.$hover-state-inactive;
  border: 0;
  &:hover{
    background-color: c.$hover-state-active;
  }
}
</style>
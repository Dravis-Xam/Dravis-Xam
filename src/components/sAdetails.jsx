import tiktok from "../assets/Tiktok.gif";
import twitter from "../assets/twitter.gif";
import email from "../assets/Email.gif";
import facebook from "../assets/Facebook.gif";
import whatsapp from "../assets/Whatsapp.gif";
import instagram from "../assets/Instagram.gif";
import call from "../assets/call.svg";
import sms from "../assets/sms.svg";

const socialAccDetails = {
    tiktok: {
        accountN: "Tiktok",
        accountL: "",
        accountI: tiktok
    }, 
    twitter: {
        accountN: "Twitter",
        accountL: "",
        accountI: twitter
    }, 
    email: {
        accountN: "Email",
        accountL: "",
        accountI: email
    }, 
    facebook: {
        accountN: "Facebook",
        accountL: "",
        accountI: facebook
    },  
    instagram: {
        accountN: "Instagram",
        accountL: "",
        accountI: instagram
    },
    whatsapp: {
        accountN: "Whatapp",
        accountL: "",
        accountI: whatsapp
    },
    callsNsms: {
        accountN: "Calls/SMS",
        accountNo: "0790269182" || user.getPhoneNumber(),
        accountI: [call, sms]
    }
};

export default socialAccDetails;
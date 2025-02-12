import React from "react";
import Template from "../aboutTemp/aboutTemp";
import "./bodySection.css";
import laptop from "../../assets/laptop.png";
import github from "../../assets/Github.gif";
import pwonLp from "../../assets/pwonLp.png";
import discord from "../../assets/discord.gif";
import design from "../../assets/design.png";
import youtube from "../../assets/Youtube.gif";
import Socials from "../socialmedia/socialMedia";

export default function Main() {
    const titleObjects = [
        {
            title: "Software Developer",
            photo: laptop, 
            description: "I'm an expert in building scalable and high quality web applications, Complex or simple. Check out my Gitbub \u{1F440}",
            account: {
                name: "Github",
                link: "https://github.com/yourusername", 
                icon: github 
            }
        },
        {
            title: "Freelancer",
            photo: pwonLp, 
            description: "I do Freelance web and mobile app development with a lot of completed projects and more still ongoing. Don't miss out on my Discord \u{1F44D}",
            account: {
                name: "Discord",
                link: "https://discord.com/users/yourid", 
                icon: discord
            }
        },{
            title: "Graphic Designer",
            photo: design,
            description: "Passionate about creating visually appealing designs. I've also created tutorials and posted on my YouTube channel. Check 'em out \u{1F60E}",
            account: {
                name: "YouTube",
                link: "https://youtube.com/channel/yourchannel", 
                icon: youtube
            }
        }
        
    ];
    return (
        <section className="main-section">
            {titleObjects.map((item, index) => (
                <Template key={index} item={item} index={index}/>
            ))}
            <Socials />
        </section>
    );
}
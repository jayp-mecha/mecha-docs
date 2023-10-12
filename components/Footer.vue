<script setup lang="ts">
import VPImage from 'vitepress/dist/client/theme-default/components/VPImage.vue'
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue'
import IconLogoMark from '../components/icons/LogoMark.vue';
import { icons } from './icons/SocialIcons'

const footerLinks= [[
    {
        title:"Edge MX",
        link:"#"
    },
    {
        title: "About Mecha",
        link: "#"
    },
    {
        title: "Pilot Program",
        link: "#"

    }
],[
    {
        title:"Observability",
        link:"#"
    },
    {
        title:"Mesh Networking",
        link:"#"
    },
    {
        title:"Workflows",
        link:"#"
    },
    {
        title: "Device SDK",
        link: "#"
    },
    {
        title: "BYOD",
        link: "#"

    }
],[
    {
        title:"Documentation",
        link:"#"
    },
    {
        title:"Community",
        link:"#"
    },
    {
        title:"Blogs",
        link:"#"
    },
    {
        title: "Newsroom",
        link: "#"
    },
    {
        title: "Security",
        link: "#"

    }
],[
    {
        title:"Contact Us",
        link:"#"
    },
    {
        title: "Privacy Policy",
        link: "#"
    },
    {
        title: "Terms Of Use",
        link: "#"

    }
]];

const socialLinks = [
    {
        alt:"github",
        key:"github",
        link:"https://github.com/mecha-org",
        image:{
            dark:"/icons/github.svg",
            light: ""
        }
    },
    {
        alt:"discord",
        key:"discord",
        image:{
            dark:"/icons/discord.svg",
            light: ""
        }
    },
    {
        alt:"reddit",
        key:"reddit",
        image:{
            dark:"/icons/reddit.svg",
            light: ""
        }
    },
    {
        alt:"linkedin",
        key:"linkedin",
        link:"https://www.linkedin.com/company/mecha-systems",
        image:{
            dark:"/icons/linkedin.svg",
            light: ""
        }
    },
    {
        alt:"twitter",
        key:"x",
        link: "https://x.com/mecha_systems",
        image:{
            dark:"/icons/twitter.svg",
            light: ""
        }
    }
];

</script>


<template>
<div class="wrap custom-footer ">
    <div class="flexbox container">
        <div class="first-box">
            <div class="heading">
                <div class="title">
                    <a href="/" data-auto-route="true">
                        <!-- <VPImage 
                            class="site-logo"
                            :image = "'/icons/logomark.svg'"
                            :alt="'logomark'"

                        /> -->
                        <IconLogoMark class="site-logo" aria-label="edit icon"/>
                    </a>
                </div>
            </div>
        </div>
        <div class="second-box">
            <div class="links" >
                <div class="list"  v-for="list in footerLinks">
                    <ul>
                        <li class="footer-section-link-wrapper" v-for="item in list"  :key="item.title">
                           <VPLink
                                v-if="item.title == 'Pilot Program'"
                                class="footer-section-link"
                                :href="item.link"
                                :target="'_blank'"
                                :tag="'a'"
                            >
                            
                            <span style="width:100%">
                                <div class="pilot-bagde">
                                    Pilot
                                    <p class="pilot-icon">
                                        <span role="img" aria-label="Rocket" class="pilot-icon-animate">🚀</span>
                                    </p>
                                </div>
                            </span>
                            </VPLink>
                            <VPLink
                                v-else
                                class="footer-section-link"
                                :href="item.link"
                                :target="'_blank'"
                                :tag="'a'"
                            >
                            {{item.title}}
                            </VPLink>
                            
                        </li>
                        
                    </ul>
                </div>

            </div>
        </div>
        <div class="third-box">
                <div class="social ">
                       <!-- <VPImage 
                            :image = "link.image"
                            :alt="link.alt"

                        /> -->
                        <a
                            class="VPSocialLink no-icon"
                            :href="link.link" v-for="link in socialLinks"
                            :aria-label="'icon'"
                            target="_blank"
                            rel="noopener"
                            v-html="icons[link.key]"
                        >
                        </a>
                </div>
                <div class="footer-address">
                    @2023 Mecha Systems, Inc.
                </div>

        </div>
    </div>
</div>
</template>
<style scoped>
.wrap {
    justify-content: center;
    display: flex;
    padding: 40px 8px 0 24px;
}
.custom-footer .flexbox {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    color: var(--secondary);
    padding: 2em 0 1em 0;
}
.custom-footer {
	 display: flex;
	 flex-wrap: wrap;
	 background: var(--primary);
}
 .custom-footer .wrap {
	 box-sizing: border-box;
	 width: 100%;
}
 .custom-footer .flexbox {
	 width: 100%;
	 display: flex;
	 flex-wrap: wrap;
	 justify-content: space-between;
	 color: var(--secondary);
	 padding: 2em 0 1em 0;
}
 .custom-footer .first-box {
	 width: 15%;
     padding-top: 10px;
}
 .custom-footer .first-box .svg-icon-logo {
	 margin-top: -20px;
	 margin-bottom: -20px;
	 width: 100%;
}
 .custom-footer .first-box .heading {
	 font-size: 16px;
	 font-weight: bold;
	 margin-bottom: 0.5em;
	 display: block;

     
}
.dark .site-logo {
    fill: white
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
 .site-logo {
	 margin-top: -10px;
	 height: 100px;
     fill: currentColor;
}
.site-logo:hover{
    animation: spin 5s linear infinite;
}
 .custom-footer .first-box .heading .title {
	 justify-content: center;
	 align-items: center;
	 display: flex;
}
 
 .custom-footer .second-box {
	 width: 45%;
}
 .custom-footer .second-box .links {
	 display: flex;
	 flex-wrap: wrap;
	 justify-content: flex-start;
}
 .custom-footer .second-box .links ul {
	 list-style: none;
	 margin: 0;
	 min-width: 100px;
}
 .custom-footer .second-box .links li {
	 margin: 0.5em 0;
}
 .custom-footer .third-box {
	 width: 30%;
	 display: flex;
	 align-items: flex-start;
	 gap: 15px;
	 flex-direction: column;
	 padding: 10px 0;
}
 .custom-footer .third-box .social {
	 display: flex;
	 flex-wrap: wrap;
	 align-items: center;
	 justify-content: flex-start;
	 gap: 11px;
	 flex-direction: row;
	 justify-content: flex-start;
}
 .custom-footer .third-box .social .social-link {
	 display: flex;
	 align-items: center;
	 justify-content: center;
	 border-radius: 0.5rem;
	 border: solid 1px var(--primary);
	 width: 30px;
	 height: 30px;
	 color: var(--primary);
}
 .custom-footer .third-box .social .social-link:visited {
	 color: var(--primary);
}
 .custom-footer .third-box .social .social-link .d-icon {
	 color: var(--secondary);
	 min-width: unset;
	 margin: 0;
	 font-size: 16px;
	 opacity: 1;
}
 .custom-footer .third-box .footer-address {
	 margin-top: 12px;
}
 .custom-footer .third-box .small-link {
	 color: var(--secondary-high);
	 margin: 0 0.25em;
	 font-size: 8px;
}
 .custom-footer .footer-links {
	 flex: 1;
}
 .custom-footer .list span {
	 font-weight: 400;
}
 .custom-footer .footer-section-link-wrapper a {
	 color: var(--secondary-high);
}
 .custom-footer .list {
	 margin: 1em;
	 margin-top: 0;
	 font-size: 14px;
}
 .custom-footer .d-icon {
	 margin-right: 5px;
	 opacity: 0.7;
	 min-width: 16px;
	 text-align: center;
}
 @media screen and (max-width: 940px) {
	 .custom-footer .first-box {
		 max-width: 100%;
		 border-bottom: 1px solid rgba(0, 0, 0, );
		 margin-bottom: 1em;
		 padding-bottom: 1em;
	}
	 .custom-footer  img.site-logo {
		 height: 60px;
	}
    .custom-footer .third-box {
		 margin-top: 0.5em;
	}
	 .custom-footer .second-box .links {
		 justify-content: space-between;
	}
	 .custom-footer .list {
		 margin: 0;
		 margin-top: 1em;
	}
	 .custom-footer .first-box, .custom-footer .second-box, .custom-footer .third-box {
		 flex: 1 1 100%;
	}
}
 @media screen and (max-width: 700px) {
	 .custom-footer .first-box {
		 width: 100%;
		 display: none;
	}
	 .custom-footer .list {
		 margin-top: 1em;
		 display: inline-block;
		 vertical-align: top;
		 min-width: 50%;
		 font-size: 14px;
	}
	 .custom-footer .links {
		 display: inline-block;
	}
}
 .static-login .custom-footer {
	 margin-top: 3em;
}
 .custom-footer {
	 background: var(--secondary);
}
 .custom-footer .flexbox {
	 color: var(--quaternary);
}
 .custom-footer .footer-section-link-wrapper a {
	 color: var(--primary);
}

.pilot-bagde{
    display: flex; 
    flex-direction: row; 
    gap: 0.25rem; 
    justify-content: center; 
    align-items: center; 
    border-radius: 0.375rem; 
    font-weight: 700; 
    background-color: #FEDD00;
    padding: 5px 12px;
    color:#05070A;
    width: max-content;
}
.pilot-icon {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms; 

}
.pilot-bagde:hover .pilot-icon {
    transform: translate(0.25rem,-0.25rem);

}


@media (min-width: 1024px) { 
    .pilot-bagde{
        border-radius: 1rem; 
        width: max-content; 
    }
 }
 @media (min-width: 768px){
    .wrap {
        padding: 150px 32px 0px;
    }
 }
 
</style>
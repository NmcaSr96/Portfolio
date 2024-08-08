import { Settings, CropRotate, ViewInAr, PieChart, Code, BarChart, CloudOutlined, FavoriteBorder, Public, PersonOutlined, AddLocationAltOutlined, PhoneIphone, EmailOutlined, Facebook, Twitter, Instagram, YouTube } from "@mui/icons-material"

export const navlink = [
  {
    url: "/",
    text: "Home",
  },
  {
    url: "/about",
    text: "About",
  },
  {
    url: "/services",
    text: "Services",
  },
  {
    url: "/portfolio",
    text: "Portfolio",
  },
  {
    url: "/testimonials",
    text: "Testimonials",
  },
  {
    url: "/blog",
    text: "Blog",
  },
  {
    url: "/contact",
    text: "Contact",
  },
]
export const home = [
  {
    text: "HELLO I'M",
    name: "SRIRAM NARAYANAN",
    post: "WEB DEVELOPER",
    design: "UI / UX DESIGNER",
    desc: "To Work For an Organization which provides me the opportunity to improve my skills and knowledge to growth along with the Organization Objective.",
  },
]
export const about = [
  {
    desc: "I am Sriram . I am From Villupuram. But i am currently stay in chennai. I did my Graduation in B.Sc.Mathematics from Arignar Anna Government Arts & Science College in Villupuram. After I did Front End development Course in Softlogic Institute in Chennai. I Know HTML5, CSS3, JavaScript, TypeScript, ReactJS These well.",
    desc1: "My Strength is my possitive attitude because i never give up and always learn from bad experiences,           My Weakness is i can't sleep till i complete my work properly. sometimes it affect my health as well",
    cover: "./images/mypic.jpg",
  },
]
export const services = [
  {
    id: 1,
    icon:<PieChart /> ,
    title: "Creative Design",
    desc: " UI/UX Design. Illustration. Image editing and much more.",
  },
  {
    id: 2,
    icon: <Code />,
    title: "Clean Code",
    desc: "Learning to write programs stretches your mind, and helps you",
  },
  {
    id: 3,
    icon: <CropRotate />,
    title: "Responsive Design",
    desc: "A responsive web design will automatically adjust for different screen sizes and viewports",
  },
  {
    id: 4,
    icon: <Settings />,
    title: "Web development	",
    desc: " to build latest applications with technologies such as Angular.JS, React.JS, Vue.JS and Node.js with DB",
  },
  {
    id: 5,
    icon:<ViewInAr /> ,
    title: "Material UI Icons",
    desc: " The following npm package, @mui/icons-material, includes the 2,100+ official Material Icons",
  },
  {
    id: 6,
    icon: <BarChart />,
    title: "Awesome Support",
    desc: " A happy customer will return often and is likely to spend more",
  },
]
export const project = [
  {
    id: 1,
    icon: <CloudOutlined />,
    num: "100",
    title: "HAPPY CLIENTS",
  },
  {
    id: 2,
    icon: <FavoriteBorder />,
    num: "231",
    title: "PROJECTS COMPLEATED",
  },
  {
    id: 3,
    icon: <Public />,
    num: "108",
    title: "FILES DOWNLOADED",
  },
  {
    id: 4,
    icon: <PersonOutlined />,
    num: "10446",
    title: "LIENS OF CODE",
  },
]
export const portfolio = [
  {
    id: 1,
    cover: "../images/port/port7.png",
    name: "Portfolio",
    category: "development",
    title: "Myself",
    innerHeight:"100px",
  },
  {
    id: 2,
    cover: "../images/port/port2.png",
    name: "E-Learning",
    category: "E-Commerce",
    title: "Edu-Gate",
  },
  {
    id: 3,
    cover: "../images/port/port3.png",
    name: "Validation",
    category: "development",
    title: "Edu-Gate",
  },
  {
    id: 4,
    cover: "../images/port/port4.png",
    name: "Mobile shop",
    category: "E-Commerce",
    title: "Mobie-C",
  },
  {
    id: 5,
    cover: "../images/port/port5.png",
    name: "Wikipedia",
    category: "design",
    title: "WIKKI",
  },
  {
    id: 6,
    cover: "../images/port/port6.png",
    name: "Calculator",
    category: "development",
    title: "Calc",
  },
]
export const testimonials = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitordapibus dictum.Fusce faucibus ligula scelerisque, eleifend turpis in",
    image: "./images/testimonials/team-1.jpg",
    name: "Vidyasagar",
    post: "Front End Developer",
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitordapibus dictum.Fusce faucibus ligula scelerisque, eleifend turpis in",
    image: "./images/testimonials/team-2.jpg",
    name: "Mohammad Yahya",
    post: "Back End Developer",
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitordapibus dictum.Fusce faucibus ligula scelerisque, eleifend turpis in",
    image: "./images/testimonials/team-3.jpg",
    name: "Kalaiyarasan",
    post: "React Developer",
  },
]
export const blog = [
  {
    id: 1,
    title: "Master These Awesome",
    date: "Jun 27, 2022",
    author: "Dorian Gray",
    desc: "Lorem Ipsum has been standard. Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been",
    cover: "./images/blog/b1.png",
  },
  {
    id: 2,
    title: "Best Design Items to Appeal",
    date: "Jun 27, 2022",
    author: "Dorian Gray",
    desc: "Lorem Ipsum has been standard. Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been",
    cover: "./images/blog/b2.png",
  },
  {
    id: 3,
    title: "The 20 Best Lightroom Presets",
    date: "Jun 27, 2022",
    author: "Dorian Gray",
    desc: "Lorem Ipsum has been standard. Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been",
    cover: "./images/blog/b3.png",
  },
]
export const contact = [
  {
    icon: <AddLocationAltOutlined />,
    text1: "13, Dubai Kurukku santhu,",
    text2: "Dubai main road, Dubai-98101",
  },
  {
    icon: <PhoneIphone />,
    text1: "0123456789",
    text2: "0345627891",
  },
  {
    icon: <EmailOutlined />,
    text1: "itisgmail@thetheme.io",
    text2: "inf0@brex-theme.io",
  },
]
export const social = [
  {
    icon: <Facebook />,
  },
  {
    icon: <Twitter />,
  },
  {
    icon: <Instagram />,
  },
  {
    icon: <YouTube />,
  },
]
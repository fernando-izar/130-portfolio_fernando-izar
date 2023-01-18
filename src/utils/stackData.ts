import imgHTML from "../public/static/img/stack/html.svg";
import imgCSS from "../public/static/img/stack/css.svg";
import imgJS from "../public/static/img/stack/js.svg";
import imgNode from "../public/static/img/stack/node.svg";
import imgStyled from "../public/static/img/stack/styled.svg";
import imgReact from "../public/static/img/stack/react.svg";
import { FaVuejs, FaLinux } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaDocker, FaGitAlt, FaAws } from "react-icons/fa";
import { SiThreedotjs, SiPython, SiDjango, SiMaterialui, SiPostgresql, SiJira, SiTrello} from "react-icons/si"
import { DiSqllite, DiScrum } from "react-icons/di";

export const stackData = [
  { title: "React",img: imgReact },
  { title: "JS", img: imgJS },
  { title: "TypeScript", img: SiTypescript },
  { title: "HTML", img: imgHTML},
  { title: "CSS", img: imgCSS },
  { title: "THREE.js", img: SiThreedotjs },
  { title: "Python", img: SiPython },
  { title: "Node JS",img: imgNode },
  { title: "Docker", img: FaDocker },
  { title: "Django", img: SiDjango },
  { title: "AWS", img: FaAws },
  { title: "Git", img: FaGitAlt },
  { title: "Linux", img: FaLinux },
  { title: "PostgreSQL", img: SiPostgresql },
  { title: "SQLite", img: DiSqllite },
  { title: "Styled Components", img: imgStyled },
  { title: "Material UI", img: SiMaterialui },
  { title: "Scrum", img: DiScrum },
  { title: "Jira", img: SiJira },
  { title: "Trello", img: SiTrello },


];

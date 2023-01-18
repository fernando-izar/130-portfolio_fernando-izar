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
  {
    title: "HTML",
    img: imgHTML,
  },
  {
    title: "CSS",
    img: imgCSS,
  },
  {
    title: "JS",
    img: imgJS,
  },
  {
    title: "Node JS",
    img: imgNode,
  },
  {
    title: "Styled Components",
    img: imgStyled,
  },
  {
    title: "React",
    img: imgReact,
  },
  // { title: "Vuejs", img: FaVuejs },
  { title: "TypeScript", img: SiTypescript },
  { title: "Docker", img: FaDocker },
  { title: "THREE.js", img: SiThreedotjs },
  { title: "Python", img: SiPython },
  { title: "Django", img: SiDjango },
  { title: "Material UI", img: SiMaterialui },
  { title: "Git", img: FaGitAlt },
  { title: "PostgreSQL", img: SiPostgresql },
  { title: "SQLite", img: DiSqllite },
  { title: "Scrum", img: DiScrum },
  { title: "AWS", img: FaAws },
  { title: "Jira", img: SiJira },
  { title: "Trello", img: SiTrello },
  { title: "Linux", img: FaLinux },


];

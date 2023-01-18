// Styles
import { Container } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Button } from "@/styles/Buttons";

// Components
import { Stack } from "@/components/Stack";
import { Project } from "@/components/Project";

// Data
import { stackData } from "@/utils/stackData";
import { userData } from "@/utils/userData";

// Page Style
import {
  Header,
  HeaderContent,
  HeaderButtonsArea,
  StackSection,
  StackCards,
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
  ProjectsAreaContent,
  ProjectAreaWrapperColumns,
  AboutMe,
} from "./style";


export const Home = (): JSX.Element => {
  return (
    <main>
      <Header>
        <Container>
          <HeaderContent>
            <Text as="h1" type="heading1" color="grey5">
              Soluções por meio da tecnologia{" "}
            </Text>
            <Text type="body1" color="grey6">
              Sou desenvolvedor full stack formado na Kenzie Academy Brasil, participei
              de diversos projetos resolvendo problemas de alto nível e
              desenvolvendo habilidades
            </Text>
            <HeaderButtonsArea>
              <Button as="a" href="#projetos">
                Projetos
              </Button>
              <Button as="a" href="#tecnologias" type="btLink" color="grey5">
                Tecnologias
              </Button>
              <Button as="a" href="#sobreMim">
                Sobre mim
              </Button>
            </HeaderButtonsArea>
          </HeaderContent>
        </Container>
      </Header>
      <StackSection id="tecnologias">
        <Container>
          <Text as="h4" type="heading3" color="grey1">
            Ferramentas que domino
          </Text>
          <StackCards>
            {stackData.map((stack, index) => (
              <Stack key={index} title={stack.title} icon={stack.img} />
            ))}
          </StackCards>
        </Container>
      </StackSection>
      <ProjectsArea id="projetos">
        <Container>
          <ProjectAreaWrapperColumns>
            <ProjectsAreaSocialMediaMessage>
              <Text as="h2" type="heading4" color="grey1">
                Vamos conversar?
              </Text>
              <Text as="p" type="body1" color="grey2">
                {/* No linkedIn sempre estou compartilhando meus processos diários
                para desenvolver esses projetos e estou disposto a trocar
                algumas ideias por lá */}
                No linkedIn sempre estou compartilhando meus projetos. Estou disposto a trocar algumas ideias por lá.
              </Text>
              <Button
                type="primary"
                target="_blank"
                as="a"
                href={`https://www.linkedin.com/in/${userData.linkedinUser}`}
              >
                Acessar perfil no LinkedIn
              </Button>
            </ProjectsAreaSocialMediaMessage>
            <ProjectsAreaContent>
              <Text type="body1" color="grey2" css={{ marginBottom: "$2" }}>
                Projetos
              </Text>
              <Text as="h3" type="heading2" color="grey1">
                Originalidade e{" "}
                <Text as="span" color="brand1" type="heading2">
                  dedicação
                </Text>{" "}
                em cada detalhe
              </Text>
              <Project />
            </ProjectsAreaContent>
          </ProjectAreaWrapperColumns>
        </Container>
      </ProjectsArea>
      <AboutMe id="sobreMim"> 
        <Container>
          <Text as="h3" type="heading2" color="grey1">
            Um pouco sobre mim ...
          </Text>
          <Text type="body1" color="grey2">
            <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sou desenvolvedor front-end  formado pela Kenzie Academy Brasil e atualmente estou terminando a formação como desenvolvedor fullstack pela mesma instituição. Já atuei como monitor de React + Typescript na Kenzie Academy Brasil.
            </p>
            <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Na minha carreira como desenvolvedor, tive a oportunidade de participar de projetos interessantes, criei o devduckgame, um jogo criado em React + THREE.js + R3F, e participei como Tech Lead do Alimento Solidário, uma aplicação que facilita o encontro de empresas que querem doar alimentos com instituições que desejam recebê-los. O front-end desta aplicação foi desenvolvido em React + Typescript e o back-end, primeiramente em node.js + express e depois em Django, o primeiro deployado na Heroku e o segundo na AWS. Utilizamos também o docker tanto para o desenvolvimento quanto para produção.
            </p>  
            <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Além disso, tive a oportunidade de atuar como Tech Lead em um e-commerce criado em React + Typescript durante o curso de React da MJV School. Também completei o curso de THREE.js + R3F (React Three Fiber) e atualmente estou cursando o Advanced BIM Frontend Course de IFC.js + React + Typescript.
            </p> 
            <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sou formado em Engenharia Mecatrônica pela Universidade de São Paulo (USP) e possuo pós-graduação em BIM Management pela University of Barcelona, além de MBA pela Fundação Getúlio Vargas (FGV) e tenho especialização em Design Paramétrico e Programação Visual em BIM.
            </p>
          </Text>

        </Container>
      </AboutMe>
    </main>
  );
};

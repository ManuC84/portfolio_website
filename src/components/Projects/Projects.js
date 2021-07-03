import React from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";
import Slider from "react-slick";
import SlideUpWhenVisible from "../../utils/slideUpWhenVisible";

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map(
        ({ title, description, image, tags, source, visit, id }) => (
          <SlideUpWhenVisible key={id}>
            <BlogCard>
              <Img src={image} />
              <TitleContent>
                <HeaderThree title="true">{title}</HeaderThree>
                <Hr />
              </TitleContent>
              <CardInfo>{description}</CardInfo>
              <div>
                <TitleContent>
                  <h4 style={{ marginTop: 10, color: "#d0bb57" }}>Stack</h4>
                  <TagList>
                    {tags.map((tag, i) => (
                      <Tag key={i}>{tag}</Tag>
                    ))}
                  </TagList>
                </TitleContent>
              </div>
              <UtilityList>
                <ExternalLinks href={visit} target="_blank">
                  Visit
                </ExternalLinks>
                <ExternalLinks href={source} target="_blank">
                  Code
                </ExternalLinks>
              </UtilityList>
            </BlogCard>
          </SlideUpWhenVisible>
        )
      )}
    </GridContainer>
  </Section>
);

export default Projects;
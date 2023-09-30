import React from "react";
import Style from "./About.module.scss";
import Terminal from "./Terminal";
import { Box } from "@mui/material";
import { info } from "../../info/Info";

export default function About() {
  const firstName = info.firstName.toLowerCase();

  function aboutMeText() {
    return (
      <>
        <p>
          <span style={{ color: info.baseColor }}>
            {firstName}
            {info.lastName.toLowerCase()} $
          </span>
          {" "} about{" "}{firstName}{" "}
        </p>
        <p>
          <span style={{ color: info.baseColor }}>about </span>{" "}
          <span className={Style.green}>(main)</span> $
        </p>
        <p>{info.bio}</p>
        {/* <br></br>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd cv.doc
            </p>
            <p>
            <a href="url">click to view cv</a>
            </p> */}
      </>
    );
  }

  function skillsText() {
    return (
      <>
        <p>
          <span style={{ color: info.baseColor }}>
            {firstName}
            {info.lastName.toLowerCase()} $
          </span>{" "}
          cd skills
        </p>

        <p>
          <span style={{ color: info.baseColor }}>skills </span>{" "}
          <span className={Style.green}>(main)</span> $
        </p>
        <p style={{ color: info.baseColor }}> languages</p>

        <ul className={Style.skills}>
          {info.skills.languages.map((proficiency, index) => (
            <li key={index}>{proficiency}</li>
          ))}
        </ul>
        <p style={{ color: info.baseColor }}> frameworks</p>
        <ul className={Style.skills}>
          {info.skills.frameworks.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
        <p style={{ color: info.baseColor }}> database</p>
        <ul className={Style.skills}>
          {info.skills.database.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
        <p style={{ color: info.baseColor }}> tools</p>
        <ul className={Style.skills}>
          {info.skills.tools.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </>
    );
  }

  function miscText() {
    return (
      <>
        <p>
          <span style={{ color: info.baseColor }}>
            {firstName}
            {info.lastName.toLowerCase()} $
          </span>{" "}
          cd team_members
        </p>
        <p>
          <span style={{ color: info.baseColor }}>team_members</span>{" "}
          <span className={Style.green}>(main)</span> $
        </p>
        <ul>
          {info.hobbies.map((hobby, index) => (
            <li key={index}>
              <Box component={"span"} mr={"1rem"}>
                {hobby.emoji}
              </Box>
              <a href={hobby.link} target="_blank" rel="noopener noreferrer">
                {hobby.label}
              </a>
            </li>
          ))}
        </ul>
      </>
    );
  }

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      mt={"3rem"}
    >
      <Terminal text={aboutMeText()} />
      <Terminal text={skillsText()} />
      <Terminal text={miscText()} />
    </Box> //r
  );
}

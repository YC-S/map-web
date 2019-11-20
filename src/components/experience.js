import React, {Component} from 'react'
import TopNavBar from "./top-nav-bar";
import StoryCard from "./story-card";
import ExperienceHeader from "./experience-header";

export default class experience extends React.Component {
  render() {
    return (
      <div className="experience">
        <TopNavBar />
        <ExperienceHeader />
        <StoryCard />
      </div>
    )
  }
}
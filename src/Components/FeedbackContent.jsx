import React, { useState, useEffect } from "react";
import LayoutStyles from "./styles/layout.module.css";
import Graphic from "./Profile/Graphic";
import Dropdown from "./Dropdown";

{
  /* <Graphic type="scatter" xLabel="x" yLabel="y" title="Title" />
<Graphic type="timeline" xLabel="x" yLabel="y" title="Title" />
<Graphic type="pie" title="Title" />
<Graphic type="candle" title="Title" />
<Graphic type="quadrant" title="Title" />
<Graphic type="swarm" title="Title" /> */
}

function FeedbackContent(props) {
  const {
    feedbacks,
    graphSettings,
    handleChange,
    yearOptions,
    virtueBucketOptions,
  } = props;

  return (
    <div className={LayoutStyles.main_heading}>
      <h3>DASHBOARD</h3>
      <main className={LayoutStyles.main}>
        <section
          className={LayoutStyles.effect2}
          className={LayoutStyles.main_header}
          className={LayoutStyles.heading}
        >
          <Dropdown
            title="Select Year"
            options={yearOptions}
            onClick={(event) => handleChange("bar", event)}
          />
          {feedbacks.length > 0 && (
            <Graphic
              type="bar"
              xLabel="x"
              yLabel="y"
              title="Feedback"
              feedbacks={feedbacks}
              settings={graphSettings}
            />
          )}
        </section>
        <section
          className={LayoutStyles.effect2}
          className={LayoutStyles.main_header}
          className={LayoutStyles.updates}
        >
          <Dropdown
            title="Select Year"
            options={yearOptions}
            onClick={(event) => handleChange("quadrant", event)}
          />
          {feedbacks.length > 0 && (
            <Graphic
              type="quadrant"
              xLabel="x"
              yLabel="y"
              title="Title"
              feedbacks={feedbacks}
              settings={graphSettings}
            />
          )}
        </section>
        <section
          className={LayoutStyles.effect2}
          className={LayoutStyles.main_header}
          className={LayoutStyles.chart}
        >
          <Dropdown
            title="Select Year"
            options={yearOptions}
            onClick={(event) => handleChange("candle", event)}
          />
          <Dropdown
            title="Select Virtue Bucket"
            options={virtueBucketOptions}
            onClick={(event) => handleChange("candle", event, true)}
          />
          {feedbacks.length > 0 && (
            <Graphic
              type="candle"
              title="Title"
              feedbacks={feedbacks}
              settings={graphSettings}
            />
          )}
        </section>

        <section
          className={LayoutStyles.effect2}
          className={LayoutStyles.main_header}
          className={LayoutStyles.addchart}
        >
          <Dropdown
            title="Select Year"
            options={yearOptions}
            onClick={(event) => handleChange("timeline", event)}
          />
          <Dropdown
            title="Select Virtue Bucket"
            options={virtueBucketOptions}
            onClick={(event) => handleChange("timeline", event, true)}
          />
          {feedbacks.length > 0 && (
            <Graphic
              type="timeline"
              xLabel="x"
              yLabel="y"
              title="Title"
              feedbacks={feedbacks}
              settings={graphSettings}
            />
          )}
        </section>
        <section className={LayoutStyles.feed}>
          <h3>Live Feed</h3>
        </section>
      </main>
    </div>
  );
}

export default FeedbackContent;

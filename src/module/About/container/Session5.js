import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import image1 from "../../../images/one.jpg";
import image2 from "../../../images/three.jpg";
import image3 from "../../../images/four.jpg";
import image4 from "../../../images/five.jpg";
export default function AlternateTimeline() {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot style={{ width: "30px", height: "30px" }} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <img
            src={image1}
            style={{ width: "300px", height: "300px", margin: "center" }}
          />
          <h1 style={{ color: "purple" }}>
            1973: WWP First Wildlife Sanctuary
          </h1>
          <h2>
            World Wildlife Protection was conceived in April, 1961, and set up
            shop in September, 1961, in Singapore.Bernhard became the
            organization's first president.
          </h2>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot style={{ width: "30px", height: "30px" }} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <img
            src={image2}
            style={{ width: "400px", height: "300px", margin: "center" }}
          />
          <h1 style={{ color: "purple" }}>1974: 1st five projects approved</h1>
          <h2 style={{ textAlign: "center" }}>
            In its first year, the Board approves five projects totaling
            $33,500. Early projects include work with the bald eagle, the
            Hawaiian sea bird, the giant grebe of Guatemala, the Tule goose in
            Canada and the red wolf in the southern United States.
          </h2>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot style={{ width: "30px", height: "30px" }} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <img
            src={image3}
            style={{ width: "400px", height: "300px", margin: "center" }}
          />
          <h1 style={{ color: "purple" }}>2000: Sanctuary Expanded</h1>
          <h2 style={{ textAlign: "center" }}>
            During 2000 the Wildlife sanctuary have expanded and formed a
            crucial wildlife corridor between different regions. This cause more
            protected area to be build so to compliment the public national park
            system.
          </h2>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot style={{ width: "30px", height: "30px" }} />
        </TimelineSeparator>
        <TimelineContent>
          <img
            src={image4}
            style={{ width: "400px", height: "300px", margin: "center" }}
          />
          <h1 style={{ color: "purple" }}>
            2022: Adapting the challanges of 2022
          </h1>
          <h2 style={{ textAlign: "center" }}>
            During 2019, Covid erupted and restriction has made many programs to
            change. Despite the challenges, the commitment of SWLC enabled the
            continued delivery of conservation action
          </h2>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

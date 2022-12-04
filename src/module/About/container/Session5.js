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
import "./Session5.css";
export default function AlternateTimeline() {
  return (
    <Timeline position="alternate" style={{ marginLeft: "700px" }}>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot style={{ width: "30px", height: "30px" }} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <div
            class="body"
            style={{
              width: "500px",
              height: "400px",
              margin: "center",
              marginTop: "-40px",
            }}
          >
            <div class="container">
              <div class="box">
                <div class="imgBx">
                  <img
                    src={image1}
                    style={{
                      width: "300px",
                      height: "300px",
                      margin: "center",
                    }}
                  />
                </div>
                <div class="content">
                  <div>
                    <h2 style={{textAlign:"center"}}>First House</h2>
                    <p>
                      Below picture is the first house being build by WWP in
                      April, 1961
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h1
            style={{ color: "purple", fontFamily: "'Baloo Bhai 2', cursive" }}
          >
            1973: WWP First Wildlife Sanctuary
          </h1>
          <h2
            style={{ fontFamily: "'Baloo Bhai 2', cursive", fontSize: "20px" }}
          >
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
          <div
            class="body"
            style={{ width: "500px", height: "400px", margin: "center", marginLeft:"-100px" }}
          >
            <div class="container">
              <div class="box">
                <div class="imgBx">
                  <img src={image2} style={{ width: "300px", height: "300px",}}/>
                </div>
                <div class="content">
                  <div>
                    <h2 style={{textAlign:"center"}}>First Success</h2>
                    <p>
                      First project being conducted By Doctor Albert in national
                      University of Singapore
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h1
            style={{ color: "purple", fontFamily: "'Baloo Bhai 2', cursive" }}
          >
            1974: 1st five projects approved
          </h1>
          <h2
            style={{
              textAlign: "center",
              fontFamily: "Baloo Bhai 2",

              fontSize: "20px",
            }}
          >
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
          <div
            class="body"
            style={{
              width: "500px",
              height: "400px",
              margin: "center",
              marginTop: "-40px",
            }}
          >
            <div class="container">
              <div class="box">
                <div class="imgBx">
                  <img
                    src={image3}
                    style={{
                      width: "300px",
                      height: "300px",
                      margin: "center",
                    }}
                  />
                </div>
                <div class="content">
                  <div>
                    <h2 style={{textAlign:"center"}}>Expansion</h2>
                    <p>
                      This is a picture of the wildlife sanctuary expanded in
                      Bishan April 2000 in Singapore.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h1
            style={{ color: "purple", fontFamily: "'Baloo Bhai 2', cursive" }}
          >
            2000: Sanctuary Expanded
          </h1>
          <h2
            style={{
              textAlign: "center",
              fontFamily: "Baloo Bhai 2",

              fontSize: "20px",
            }}
          >
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
          <div
            class="body"
            style={{
              width: "500px",
              height: "400px",
              margin: "center",
              marginTop: "-40px",
            }}
          >
            <div class="container">
              <div class="box">
                <div class="imgBx">
                  <img
                    src={image4}
                    style={{
                      width: "400px",
                      height: "300px",
                      margin: "center",
                    }}
                  />
                </div>
                <div class="content">
                  <div>
                    <h2 style={{textAlign:"center"}}>Covid</h2>
                    <p>
                      Even though covid have make us lost some profit due to
                      lesser people are coming to WLP. But we sure we can do it
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h1
            style={{ color: "purple", fontFamily: "'Baloo Bhai 2', cursive" }}
          >
            2022: Adapting the challanges of 2022
          </h1>
          <h2
            style={{
              textAlign: "center",
              fontFamily: "Baloo Bhai 2",

              fontSize: "20px",
            }}
          >
            During 2019, Covid erupted and restriction has made many programs to
            change. Despite the challenges, the commitment of SWLC enabled the
            continued delivery of conservation action
          </h2>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

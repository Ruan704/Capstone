import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./FAQ.css";
export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div
      class="containerFluid"
      style={{ width: "1250px", textAlign: "center", maxWidth:"500px"}}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "40px",
          fontWeight: "bold",
          fontFamily: "Baloo Bhai 2",
          maxWidth:"500px"
        }}
      >
        Frequently Asked Questions(FAQs)
      </h2>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        class="accordion"
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          
        >
          {/* */}
          <Typography
            sx={{
              color: "text.secondary",
              fontSize: "20px",
              fontFamily: "Baloo Bhai 2",
              
            }}
          >
            #1 What does it mean that WWF is accredited by GFAS?{" "}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            style={{
              fontSize: "20px",
              marginRight: "120px",
              fontFamily: "Baloo Bhai 2",
            }}
          >
            Accreditation by the Global Federation of Animal Sanctuaries (GFAS)
            is a lengthy and thorough process which only 150 sanctuaries
            worldwide have achieved. This accreditation assures the public that
            the animal residents are cared for with the highest of standards for
            their health and well-being, for the rest of their lives.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography
            sx={{
              color: "text.secondary",
              fontSize: "20px",
              fontFamily: "Baloo Bhai 2",
              
            }}
          >
            #2 Can people pet the animals at WWH?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            style={{
              fontSize: "20px",
              marginRight: "120px",
              fontFamily: "Baloo Bhai 2",
              
            }}
          >
            No. The animal residents live at WWH for refuge and to have a safe
            and caring environment. Interaction with humans can be frightening
            and disruptive to wild and exotic animals. It is also dangerous both
            for the visitor and the animal. The only human interaction sanctuary
            residents have is with the highly skilled keepers who provide care,
            enrichment and medical treatment for <br></br> the animal’s well-
            being.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography
            sx={{
              color: "text.secondary",
              fontSize: "20px",
              fontFamily: "Baloo Bhai 2",
              
            }}
          >
            #3 Can I take photographs?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            style={{
              fontSize: "20px",
              marginRight: "120px",
              fontFamily: "Baloo Bhai 2",
              
            }}
          >
            Yes, but WWH rules require guests turn off their flash, and never
            taunt, yell, or scream at the animal residents for photographs.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography
            sx={{
              color: "text.secondary",
              fontSize: "20px",
              fontFamily: "Baloo Bhai 2",
              
            }}
          >
            #4 Do I need a reservation?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            style={{
              fontSize: "20px",
              marginRight: "120px",
              fontFamily: "Baloo Bhai 2",
              
            }}
          >
            Reservations are not necessary for general visitation on Wednesdays,
            which is available only to Park Pal members, due to COVID 19
            procedures. We recommend calling ahead to make reservations for
            guided and private tours as tour size is limited.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

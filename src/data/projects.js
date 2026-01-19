const assetBase = `${import.meta.env.BASE_URL}assets/`;

const projects = [
  {
    id: "project2",
    title: "Fault Detection in Business Process Logic Systems Using LLMs",
    slug: "bpmn-fault-detection-llm-research",
    category: "Computer Science",
    image: `${assetBase}Software_Dev_Ground.PNG`,
    description:
      "A research pipeline that detects, localizes, and explains BPMN modeling faults with LLMs grounded by structured annotations and RAG.",
    summary:
      "Built and evaluated a workflow that pairs BPMN parsing, JSON annotations, and retrieval-augmented LLM reasoning to flag errors and propose corrections with high precision.",
    details: {
      overview:
        "This research project explored how Large Language Models (LLMs) can detect, localize, and correct faults in BPMN (Business Process Model and Notation) workflows. The system combines structured BPMN parsing, NER-style annotations, and Retrieval-Augmented Generation (RAG) to produce actionable diagnostics that explain what is wrong, where it occurs, and how to fix it. The project was presented at a computer science research showcase and earned third place.",
      highlights: [
        "Defined an error taxonomy for BPMN faults: event, task, link, and logic errors.",
        "Built a multi-domain dataset of faulty vs corrected BPMN workflows for detection and correction.",
        "Designed a structured annotation pipeline that grounds LLM reasoning in BPMN entities.",
        "Implemented a RAG-based loop to retrieve rules/specs and improve fault localization.",
        "Reported strong detection performance (precision 0.92, recall 0.88, F1 0.91)."
      ],
      links: [
        {
          label: "Research poster (PDF, third-place showcase)",
          url: `${assetBase}LLM-Based%20Business%20Process%20Fault%20Detection%20System%20Independent%20Research.pdf`
        },
        {
          label: "Example annotation JSON",
          url: `${assetBase}software_dev_ground_annotation.json`
        },
        {
          label: "Annotated specification file (DOCX)",
          url: `${assetBase}Software_Development_Lifecycle_Specs_File_Annotated.docx`
        }
      ],
      sections: [
        {
          title: "Motivation",
          paragraphs: [
            "BPMN diagrams are visually intuitive but often hide structural and logical mistakes that can cause dead ends, infinite loops, broken approvals, and compliance problems. Traditional validators catch only syntactic issues; semantic errors still require expert review.",
            "LLMs provide strong reasoning about intent and semantics, but without grounding they can be vague or hallucinate. This project uses RAG to anchor the model in BPMN rules, domain specifications, and annotated process elements."
          ]
        },
        {
          title: "Error taxonomy (with examples)",
          paragraphs: [
            "The taxonomy organizes faults into four categories used for dataset construction and evaluation. The examples below are taken from the software development lifecycle workflow."
          ],
          bullets: [
            "Event errors: missing start or end events that make a process non-executable.",
            "Task errors: missing or duplicated tasks, or sequences that omit a required step.",
            "Link errors: broken or incorrect sequence flows that create dead ends or unreachable states.",
            "Logic errors: workflows that contradict the specification or misuse gateways."
          ]
        },
        {
          title: "Dataset construction",
          paragraphs: [
            "A custom dataset of BPMN workflows was assembled across multiple business domains: loan and approval workflows, order and payment processing, restaurant/service operations, supply chain flows, onboarding and internal operations, software development lifecycles, and project management scenarios.",
            "For each domain, paired faulty and corrected BPMN files were created. File variants align with specific fault categories, enabling both detection and correction benchmarking."
          ]
        },
        {
          title: "Annotation & structured representation",
          paragraphs: [
            "BPMN XML is treated like a structured document. The pipeline extracts entities (tasks, events, gateways, flows) and converts them into JSON annotations used for retrieval and LLM grounding.",
            "The annotation workflow combines LLM-assisted entity extraction, manual refinement, and tool-assisted labeling using Doccano and Label Studio. These annotations serve as a graph-like representation of the process."
          ]
        },
        {
          title: "System architecture",
          paragraphs: [
            "The system ingests BPMN XML, extracts entities, embeds them for retrieval, and prompts an LLM with retrieved rules/specification snippets. The output includes the fault type, localized BPMN element references, and correction suggestions.",
            "Corrections are applied to produce revised BPMN files, which are compared against ground truth to calculate detection and correction metrics."
          ]
        },
        {
          title: "RAG pipeline flow",
          bullets: [
            "Load ground-truth and faulty BPMN files.",
            "Extract entities and generate embeddings.",
            "Retrieve relevant BPMN rules and specification text.",
            "Generate fault diagnosis and correction suggestions.",
            "Apply corrections to BPMN files and compare against ground truth.",
            "Compute detection metrics and iterate across LLM variants."
          ]
        },
        {
          title: "Tools & stack",
          bullets: [
            "LLM reasoning: GPT-4o for fault explanation and correction proposals.",
            "Parsing/extraction: BPMN XML parsing and entity labeling.",
            "Retrieval & embeddings: SentenceTransformers for similarity search.",
            "Document processing: pdfplumber and spaCy for text extraction and NLP.",
            "Annotation tools: Doccano and Label Studio for structured labeling."
          ]
        },
        {
          title: "Results",
          paragraphs: [
            "The pipeline achieved strong detection performance with precision 0.92, recall 0.88, and F1 score 0.91. RAG grounding significantly improved localization accuracy and the specificity of correction recommendations."
          ]
        },
        {
          title: "My contributions",
          bullets: [
            "Designed the BPMN fault taxonomy and dataset structure.",
            "Built and curated multi-domain faulty vs corrected BPMN pairs.",
            "Developed the annotation schema and JSON artifact workflow.",
            "Implemented the RAG prompting strategy and evaluation loop.",
            "Documented findings, limitations, and future directions."
          ]
        },
        {
          title: "Limitations",
          bullets: [
            "Ambiguity in natural-language specifications can obscure intent.",
            "Domain-specific rules limit generalization without extra retrieval context.",
            "High-quality annotations require significant human effort.",
            "Proposed fixes still need validation against real business goals."
          ]
        },
        {
          title: "Future directions",
          bullets: [
            "Improve correction accuracy for complex logic faults.",
            "Expand entity coverage for richer workflow semantics.",
            "Benchmark across more LLMs and retrieval strategies.",
            "Incorporate feedback-driven adaptation for enterprise-scale BPMN repositories."
          ]
        }
      ],
      gallery: {
        title: "Error type examples (software development lifecycle BPMN)",
        items: [
          {
            src: `${assetBase}Software_Dev_Event_Error.PNG`,
            alt: "Event error example: missing start event"
          },
          {
            src: `${assetBase}Software_Dev_Task_Error.PNG`,
            alt: "Task error example: missing clarify requirements task"
          },
          {
            src: `${assetBase}Software_Dev_Link_Error.PNG`,
            alt: "Link error example: missing sequence flow between approval and implementation"
          },
          {
            src: `${assetBase}Software_Dev_Logic_Error.PNG`,
            alt: "Logic error example: task instructs not to fix defects"
          }
        ]
      }
    }
  },
  {
    id: "project3",
    title: "Distributed Systems Sandbox",
    slug: "distributed-systems-sandbox",
    category: "Computer Science",
    image: `${assetBase}project3.jpg`,
    description:
      "A sandbox of distributed system prototypes focused on reliability, throughput, and observability.",
    summary:
      "Explores consensus, fault tolerance, and metrics-driven improvements through small-scale prototypes."
  },
  {
    id: "syringe-pump",
    title: "Low-Cost Syringe Pump",
    slug: "syringe-pump",
    category: "Digital Fabrication",
    image: `${assetBase}syringe-pump.jpg`,
    description:
      "A syringe pump prototype that delivers medical-grade performance at a significantly lower cost.",
    summary:
      "Combines precise motion control with printable parts to create an accessible, non-sterile syringe pump solution.",
    details: {
      overview:
        "The syringe pump uses a motor rotating a lead screw, with a nut that drives the plunger forward to push fluid out of the syringe barrel. It offers high accuracy and sterility, but commercial systems are costly. This project shows an affordable alternative that combines Fusion360 CAD models for the motor/syringe mounts and wiring enclosure, 3D printing, and Arduino-based control with a breadboarded driver circuit.",
      highlights: [
        "Lead screw + linear bearing stack for smooth, repeatable motion.",
        "Arduino control with adjustable flow-rate tuning from a potentiometer.",
        "Printable carriage, end support, and enclosure to reduce fabrication cost.",
        "CAD modeled mounts and wiring enclosure for rapid customization."
      ],
      links: [
        {
          label: "Arduino control code",
          url: "https://github.com/Serpenlog/SyringePumpProject/blob/main/SyringePumpCode.cpp"
        }
      ],
      steps: {
        title: "Operating workflow",
        items: [
          "Fill the syringe with the desired volume of liquid.",
          "Plug in the power supply to provide AC input to the board.",
          "Connect the microcontroller to the computer via USB-B and load the Arduino code.",
          "Use the backward motion button to retract the carriage; the LED stays green while moving and can be double-clicked to pause (yellow).",
          "Insert the syringe wings into the end support slit with the syringe facing away from the motor.",
          "Use the forward motion button to align the carriage with the syringe plunger.",
          "Specify syringe size and requested flow rate in the Arduino code.",
          "Press the forward motion button to begin the constant-rate dispense.",
          "Use the potentiometer to update flow rate manually and monitor the exact value on the serial monitor.",
          "When the plunger reaches the end, the limit switch stops motion and the LED turns red.",
          "Remove the syringe and use the backward button to reset the carriage."
        ]
      },
      dataLists: [
        {
          title: "Off-the-shelf parts",
          items: [
            { label: "250 mm lead screw (2 mm pitch/lead)", value: "1" },
            { label: "1/4\" x 8 mm flexible coupling", value: "1" },
            { label: "200 mm linear rod (8 mm)", value: "2" },
            { label: "LM8UU linear bearings", value: "2" },
            { label: "2040 aluminum extrusion (1')", value: "1" },
            { label: "Nema 17 stepper motor", value: "1" },
            {
              label: "MEAN WELL RQ-65D AC-DC power supply (5/12/24V)",
              value: "1"
            },
            { label: "Arduino Uno", value: "1" },
            { label: "A4988 stepper driver", value: "1" },
            { label: "Small breadboard", value: "1" },
            { label: "Panel mount latching push buttons", value: "1" },
            { label: "Panel mount momentary push buttons", value: "1" },
            { label: "Limit switch", value: "1" },
            { label: "RGB common cathode LED", value: "1" },
            { label: "Wires, fasteners, resistors", value: "As needed" }
          ]
        },
        {
          title: "3D-printed parts",
          items: [
            { label: "Carriage", value: "ABS" },
            { label: "End support", value: "ABS" },
            { label: "Motor mounting plate", value: "ABS" },
            { label: "Enclosure base", value: "PLA" },
            { label: "Enclosure lid", value: "PLA" }
          ]
        }
      ],
      sections: [
        {
          title: "Material notes",
          paragraphs: [
            "The motor mounting plate is printed in ABS because of its strength and higher melting point, which better accommodates the weight and operating temperature of the motor. The carriage and end support were also printed in ABS since they were printed together, though they are less temperature-critical compared to the mounting plate."
          ]
        }
      ],
      gallery: {
        title: "Gallery",
        items: [
          { src: `${assetBase}syringe-pump.jpg`, alt: "Finished syringe pump prototype" },
          { src: `${assetBase}syringe-pump-render1.png`, alt: "Syringe pump CAD rendering" },
          { src: `${assetBase}syringe-pump-render2.png`, alt: "Syringe pump CAD rendering detail" }
        ]
      },
      embeds: [
        {
          title: "CAD model demo",
          url: "https://vanderbilt643.autodesk360.com/shares/public/SH286ddQT78850c0d8a4c39d816191a459a7?mode=embed"
        }
      ]
    }
  },
  {
    id: "ufluidic-resin",
    title: "Microfluidic Pinch-Flow Device",
    slug: "microfluidic-pinch-flow-device",
    category: "Digital Fabrication",
    image: `${assetBase}ufluidic-resin-print1.jpg`,
    description:
      "A resin-printed microfluidic device that manipulates tiny volumes of fluid for diagnostic testing.",
    summary:
      "Resin printing enables fine features for controlled fluid manipulation in lab-grade workflows.",
    details: {
      overview:
        "This microfluidic device performs pinched flow fractionation (PFF), a passive technique that aligns particles in a narrow segment and then separates them by size as the channel widens. The workflow combines SLA-printed molds, parylene coating for surface quality, PDMS casting, and plasma bonding to glass.",
      highlights: [
        "Dual inlets with a 0.75 mm pinch section for size-based particle separation.",
        "Parylene coating improves PDMS release and prevents resin inhibition.",
        "Four outlets keep flow balanced for consistent fraction collection.",
        "PDMS casting enables rapid lab-on-a-chip prototyping."
      ],
      sections: [
        {
          title: "Microfluidic basics",
          paragraphs: [
            "Microfluidic devices precisely manipulate microliter to nanoliter volumes inside tiny channels to mix, sort, or analyze fluids. Their scale enables rapid, high-throughput analysis with low reagent consumption, making them useful in diagnostics, biomedical research, drug development, and environmental testing.",
            "Pinched Flow Fractionation introduces a sample stream and a sheath flow into a narrow constriction. The sheath pushes particles against one sidewall; downstream, the channel widens and particles separate based on size because larger particles are offset farther from the wall."
          ]
        },
        {
          title: "Applications",
          paragraphs: [
            "Pinched flow fractionation excels at label-free sorting. It can enrich circulating tumor cells for diagnostics or separate microplastics from environmental samples before spectroscopy or chemical assays."
          ],
          links: [
            {
              label: "Size-based particle separation in pinched channels",
              url: "https://pubs.acs.org/doi/10.1021/ac049863r"
            },
            {
              label: "3D-printed molds for microplastic separation",
              url: "https://pubs.rsc.org/en/content/articlelanding/2021/lc/d1lc00744k"
            }
          ]
        },
        {
          title: "CAD model design features",
          bullets: [
            "Two 1 mm wide inlets (13.2 mm long) feed the pinched segment.",
            "Pinched segment: 3.5 mm long, 0.75 mm wide for particle alignment.",
            "Broadening segment: expands to 18.13 mm for size-based separation.",
            "Four equal 4 mm wide outlets for balanced flow.",
            "Spacing leaves buffer zones for barb fittings and bonding clearance."
          ]
        },
        {
          title: "Print and cure mold",
          paragraphs: [
            "A. Printing the mold: Print with a Formlabs SLA 3D printer using black or high-temperature resin. Use 0.025 mm or 0.05 mm layer thickness for precision. Orient the mold flat on the build plate, ignore cupping warnings, and avoid supports inside channels.",
            "B. Post-processing: Wash in IPA for 5 minutes on the print bed, then 5 minutes in a fresh bath (keep total IPA exposure under 15 minutes). Air-dry upside down for 30 minutes and use compressed air to clear trapped liquid. UV cure for 60 seconds at room temperature. Inspect for shiny uncured areas and repeat washing if needed."
          ]
        },
        {
          title: "Parylene coating",
          paragraphs: [
            "Parylene prevents PDMS curing inhibition from uncured resin, improves mold release, and smooths channel walls. The mold is placed in a parylene deposition chamber, vapor-coated, and inspected for uniform coverage."
          ]
        },
        {
          title: "PDMS casting",
          bullets: [
            "Mix Sylgard 184 at a 10:1 base-to-curing-agent ratio and stir slowly.",
            "Degas in a vacuum chamber for 30 minutes to remove bubbles.",
            "Pour into the mold slowly, tap to release bubbles, and degas another 10–15 minutes.",
            "Cure for 24 hours at room temperature or 4 hours at 65°C (or 1 hour at 100°C if the mold allows).",
            "Demold carefully; flex the mold or use compressed air if sticking occurs."
          ]
        },
        {
          title: "Plasma bonding to glass",
          bullets: [
            "Plasma activate PDMS and a clean glass slide for 30–60 seconds in oxygen plasma.",
            "Align and press the PDMS layer onto the glass immediately to seal the device."
          ]
        },
        {
          title: "Testing",
          bullets: [
            "Leak test with dyed water to check for blockages.",
            "Flow test with particle samples to validate separation.",
            "Tune flow rates and tubing lengths for optimal outlet balance."
          ]
        },
        {
          title: "Discussion: Why parylene?",
          bullets: [
            "Prevents PDMS curing inhibition caused by SLA photoinitiators.",
            "Improves mold release and prevents tearing during demolding.",
            "Smooths microscale layer lines for better flow and fewer bubbles.",
            "Extends mold longevity for repeated casts."
          ]
        },
        {
          title: "Hypothetical applications",
          paragraphs: [
            "Biomedical diagnostics: isolate circulating tumor cells, sort immune cells, and enrich single-cell samples.",
            "Environmental monitoring: separate microplastics or bacteria from water samples.",
            "Pharmaceutical development: isolate drug nanoparticles, liposomes, or exosomes.",
            "Food safety and agriculture: detect pathogenic bacteria or sort pollen grains."
          ]
        },
        {
          title: "Why this geometry works",
          bullets: [
            "Pinch segment (0.75 mm wide, 3.5 mm long) aligns particles to a consistent streamline.",
            "Broadening segment (18.13 mm wide) creates a controlled separation zone without turbulence.",
            "Four 4 mm outlets with symmetric placement keep flow balanced and reduce bias.",
            "Symmetric inlet channels ensure equal sheath flow on entry."
          ]
        },
        {
          title: "Ensuring equal outlet flow",
          bullets: [
            "Match outlet lengths and widths to balance flow resistance.",
            "Keep outlet paths straight and symmetric to reduce pressure imbalance.",
            "Avoid sharp bends and allow downstream tubing to fine-tune resistance.",
            "Use a leveling manifold if needed for precise pressure matching."
          ]
        },
        {
          title: "Potential improvements",
          bullets: [
            "Adjust pinch width if specific particle sizes clog or fail to align.",
            "Refine outlet spacing or angles if separation is uneven.",
            "Add microvalves or resistors to actively tune flow balance.",
            "Modify inlet angles to reduce bubble entrapment."
          ]
        }
      ],
      gallery: {
        title: "Fabrication gallery",
        items: [
          { src: `${assetBase}ufluidic-cad-model.PNG`, alt: "Microfluidic CAD layout" },
          { src: `${assetBase}ufluidic-resin-print2.jpg`, alt: "Resin-printed microfluidic mold" },
          { src: `${assetBase}ufluidic-resin-print1.jpg`, alt: "Resin-printed microfluidic mold close-up" },
          { src: `${assetBase}ufluidic-pdms-cast1.jpg`, alt: "PDMS cast device" },
          { src: `${assetBase}ufluidic-pdms-cast2.jpg`, alt: "PDMS cast device upside down" }
        ]
      },
      embeds: [
        {
          title: "CAD model demo",
          url: "https://vanderbilt643.autodesk360.com/g/shares/SH286ddQT78850c0d8a4a64a410f4e6cb3ae?mode=embed"
        }
      ]
    }
  },
  {
    id: "headphone-holder",
    title: "Generative SLS Headphone Holder",
    slug: "generative-sls-headphone-holder",
    category: "Digital Fabrication",
    image: `${assetBase}headphone_holder_final4.jpg`,
    description:
      "An SLS printed headphone holder optimized through generative design simulations for strength.",
    summary:
      "Simulation-driven geometry minimizes material usage while still handling upper-bound loads.",
    details: {
      overview:
        "This magnetic headphone holder integrates a wire loop and a headphone cradle on a generative-designed spine. The back contains five 60 x 10 x 3 mm magnet slots to attach to any steel surface, and the front includes a wire loop and arc-shaped headphone rest with end barriers so items do not slip off. The wire loop extends 32 mm and wraps into a 20 mm diameter circle, while the headphone cradle also extends 32 mm with an arc-shaped stop. The overall form is compact at roughly 74 mm tall and 70 mm wide, with the back extending about 5.8 mm outward.",
      highlights: [
        "Five 60 x 10 x 3 mm magnets anchor the mount to any steel surface.",
        "Wire loop and headphone cradle extend ~32 mm from the spine for cable/headphone storage.",
        "Load cases include downward weight, side impacts, and torsion on the headphone arm.",
        "Prototype PLA testing validated the shape before SLS printing."
      ],
      sections: [
        {
          title: "Purpose",
          paragraphs: [
            "The magnetic mount makes it easy to place headphones and cables anywhere—on a metal workbench, desktop, or machine enclosure—without tools. Because the mount slides off easily, it can move between workspaces in seconds.",
            "A personal workflow example: while moving between machines or a desktop setup, the magnetic holder lets you quickly dock headphones and keep a charging cable organized, then move the entire mount without needing tools."
          ],
          links: [
            {
              label: "DrDFlo YouTube channel",
              url: "https://www.youtube.com/@DrDFlo"
            }
          ]
        },
        {
          title: "Starting shape + preserve geometry",
          paragraphs: [
            "The starting shape connects the magnet bar to the wire loop and headphone cradle. Preserve geometry locks the magnet bar, the wire loop barrier, and the headphone arc barrier to ensure the generative design retains critical interfaces and stop features.",
            "Magnets are glued into the rectangular slits on the back of the model to keep them from shifting or falling out during use."
          ]
        },
        {
          title: "Obstacle geometry",
          bullets: [
            "Magnet slots: prevent material from blocking magnet placement.",
            "Thin separation bar between wire holder and headphone holder: prevents the software from fusing the two loops.",
            "Large headphone donut: reserves clearance so headphones can rest without interference."
          ]
        },
        {
          title: "Load cases",
          paragraphs: [
            "Forces were derived from real headphone weight (~256 g) and rounded upward for safety."
          ],
          bullets: [
            "Headphone holder: 3 N downward force, 2.2 N side forces, and 0.2 Nm moment.",
            "Wire holder: 1 N downward force and 0.2 Nm moment.",
            "Gravity applied globally to account for self-weight."
          ]
        },
        {
          title: "Structural constraints + testing",
          paragraphs: [
            "Constraints fixed the rear mounting area (excluding magnet slots) to simulate the magnetic mounting surface. A PLA prototype held headphones and multiple cables, surviving push/pull and drop tests. The prototype avoided direct pull-off to prevent magnets from detaching from the surface.",
            "Because the PLA prototype used tight press-fit magnet pockets instead of glue, pulling directly outward could leave the magnets on the steel surface. A future iteration could add a small edge at the top to make direct pull-off easier, though sliding the mount to the edge worked well."
          ]
        },
        {
          title: "Critique of generative design",
          paragraphs: [
            "Generative design was effective for weight reduction while preserving strength and produced forms that would be difficult to model manually. The process required careful definition of preserve/obstacle zones and long solve times; misconfigured obstacles occasionally produced unusable geometry."
          ],
          bullets: [
            "Useful for automotive, aerospace, and consumer products where weight matters.",
            "Less ideal when low cost or traditional manufacturing is preferred.",
            "Complex geometry can increase manufacturing expense."
          ]
        }
      ],
      tables: [
        {
          title: "Table of forces",
          headers: ["Force", "Magnitude", "Location", "Rationale"],
          rows: [
            ["Gravity", "9.807 m/s²", "All parts", "Default"],
            ["Force 2", "3.0 N", "Headphone holder barrier", "Simulate headphone weight"],
            ["Moment 1", "0.2 Nm", "Headphone holder barrier", "Simulate twisting action"],
            [
              "Force 3",
              "2.2 N",
              "Right side of headphone holder",
              "Simulate side bump"
            ],
            [
              "Force 4",
              "2.2 N",
              "Left side of headphone holder",
              "Simulate side bump"
            ],
            ["Force 5", "1.0 N", "Wire holder barrier", "Simulate cable weight"],
            ["Moment 2", "0.2 Nm", "Wire holder barrier", "Simulate twisting" ]
          ]
        }
      ],
      gallery: {
        title: "Generative design journey",
        items: [
          { src: `${assetBase}headphone_holder_gen1.PNG`, alt: "Generative design model view 1" },
          { src: `${assetBase}headphone_holder_gen2.PNG`, alt: "Generative design model view 2" },
          { src: `${assetBase}headphone_holder_gen3.PNG`, alt: "Generative design model view 3" },
          { src: `${assetBase}headphone_holder_gen4.PNG`, alt: "Generative design iterations" },
          { src: `${assetBase}headphone_holder_gen5.PNG`, alt: "Generative design final iteration view 1" },
          { src: `${assetBase}headphone_holder_gen6.PNG`, alt: "Generative design final iteration view 2" },
          { src: `${assetBase}headphone_holder_iterations1.JPG`, alt: "Iteration comparison back" },
          { src: `${assetBase}headphone_holder_iteration3.JPG`, alt: "Iteration comparison details" },
          { src: `${assetBase}headphone_pla_prototype2.jpg`, alt: "PLA prototype" },
          { src: `${assetBase}headphone_pla_protoype1.jpg`, alt: "PLA prototype alternate view" },
          { src: `${assetBase}headphone_holder_obstacle_ignore.jpg`, alt: "Obstacle geometry ignored" },
          { src: `${assetBase}headphone_holder_final2.jpg`, alt: "Final SLS part" },
          { src: `${assetBase}headphone_holder_final1.jpg`, alt: "Final SLS part angled" },
          { src: `${assetBase}headphone_holder_final3.jpg`, alt: "Final SLS part holding several things" },
          { src: `${assetBase}headphone_holder_final4.jpg`, alt: "Final SLS part holding headphones and charger" }
        ]
      },
      embeds: [
        {
          title: "CAD model demo",
          url: "https://vanderbilt643.autodesk360.com/g/shares/SH286ddQT78850c0d8a4d8f10d23ad74e99b?mode=embed"
        }
      ]
    }
  },
  {
    id: "pliers",
    title: "TPU/PLA 3D Printed Pliers",
    slug: "tpu-pla-pliers",
    category: "Digital Fabrication",
    image: `${assetBase}IMG_6752.jpg`,
    description:
      "A flexible and durable 3D printed pliers set combining TPU and PLA for function and grip.",
    summary:
      "Explores multi-material printing to create resilient tools with ergonomic flex.",
    details: {
      overview:
        "These print-in-place-inspired pliers use rigid PLA jaws and handles paired with a TPU spring core. The modular five-part assembly balances stiffness and flexibility while staying snap-fit for quick iteration and easy rework.",
      highlights: [
        "Five-part modular design: two jaws, two handles, one TPU spring.",
        "TPU spring printed with monotonic infill to behave like a compression spring.",
        "Printed on an FDM setup with swapped nozzle sizes for TPU/PLA.",
        "Snap-fit assembly removes the need for adhesives or hardware."
      ],
      sections: [
        {
          title: "Print-in-place basics",
          paragraphs: [
            "Print-in-place means interlocking or movable parts are fabricated as one unified structure so they work immediately after printing without assembly. It reduces manual steps and minimizes alignment errors.",
            "Examples include spring-loaded boxes, collapsible katanas, and gear bearings."
          ],
          links: [
            {
              label: "Print-in-place spring-loaded box",
              url: "https://www.instructables.com/Print-in-Place-Spring-Loaded-Box/"
            },
            {
              label: "Collapsing katana print",
              url: "https://www.printables.com/model/543260-collapsing-katana-v2-print-in-place"
            },
            {
              label: "Print-in-place gear bearing",
              url: "https://www.thingiverse.com/thing:53451"
            }
          ]
        },
        {
          title: "Material selection",
          bullets: [
            "PLA: easy to print but more brittle.",
            "ABS: stronger and more flexible but requires higher temperatures.",
            "TPU: rubber-like flexibility for springs and compliance."
          ]
        },
        {
          title: "Inside the design",
          paragraphs: [
            "The pliers are modular instead of a single print-in-place assembly: two PLA jaws, two PLA handles, and a TPU spring core. The parts snap together with a puzzle-like interlock, enabling disassembly and iteration.",
            "To dial in tolerance, multiple TPU center pieces were printed and the best fit was selected. The spring effect comes from removing top/bottom layers and relying on 13% monotonic infill."
          ]
        },
        {
          title: "Print settings",
          bullets: [
            "Printer: Voron (FDM).",
            "Nozzle: 0.4 mm for PLA, 0.6 mm for TPU.",
            "TPU spring: no top/bottom layers, 13% monotonic infill, 4 perimeters.",
            "TPU core rotated 45° and scaled to 105% in X/Y for the final fit."
          ]
        },
        {
          title: "Build specs",
          bullets: [
            "Jaw length: ~25 mm; handle length: ~70 mm.",
            "Material usage: ~12 g total; print time under 1 hour.",
            "Snap-fit assembly with no adhesives or hardware required."
          ]
        }
      ],
      gallery: {
        title: "Print-in-place gallery",
        items: [
          { src: `${assetBase}IMG_6752.jpg`, alt: "TPU/PLA pliers" },
          { src: `${assetBase}IMG_6740.jpg`, alt: "Pliers angle 1" },
          { src: `${assetBase}IMG_6741.jpg`, alt: "Pliers angle 2" },
          { src: `${assetBase}IMG_6742.jpg`, alt: "Pliers angle 3" },
          { src: `${assetBase}IMG_6743.jpg`, alt: "Pliers angle 4" }
        ]
      },
      embeds: [
        {
          title: "CAD model demo",
          url: "https://vanderbilt643.autodesk360.com/g/shares/SH286ddQT78850c0d8a4b3b90ac2a874adfa?mode=embed"
        }
      ],
      gifEmbeds: [
        {
          url: "https://giphy.com/embed/YAhs3rJPzi5hJgROhP"
        },
        {
          url: "https://giphy.com/embed/gA7QCfl7E8DRRx9t9y"
        },
        {
          url: "https://giphy.com/embed/s9vERsKYhdbtLBrSJH"
        },
        {
          url: "https://giphy.com/embed/FHk67ShcxPJfALXXQQ"
        }
      ]
    }
  },
  {
    id: "bike-mount",
    title: "Functional Bike Mount",
    slug: "functional-bike-mount",
    category: "Digital Fabrication",
    image: `${assetBase}bike_mount_main2.jpg`,
    description:
      "A fully functional bike mount designed for durability and daily use through iterative printing.",
    summary:
      "Field-tested mount design tuned through iterative prototyping for secure and reliable fit.",
    details: {
      overview:
        "The bike phone holder uses top-down modeling to coordinate the clamp, detent rotation mechanism, and phone cradle. A spring-loaded detent system locks the phone in 90° increments for quick portrait/landscape switching while riding.",
      highlights: [
        "Ball detent system provides tactile 90° rotation stops.",
        "Mix of TPU and PLA parts balances grip, strength, and vibration damping.",
        "Generative design iteration informed the final phone cradle geometry.",
        "Printed entirely on accessible FDM/FFF hardware for rapid iteration."
      ],
      sections: [
        {
          title: "Top-down modeling",
          paragraphs: [
            "Top-down modeling starts with a master layout, then derives components from shared geometry. Here, the handlebar, clamp, detent holder, detent mechanism, and phone mount were all designed around the same reference geometry. This ensured alignment between holes, axes, and mating surfaces while allowing global tolerance changes."
          ]
        },
        {
          title: "Design rationale",
          paragraphs: [
            "The rotation mechanism uses a spring-loaded 4 mm steel ball detent that snaps into 90° positions, giving tactile feedback and reliable locking under vibration.",
            "Fillet testing: a 0.5 mm fillet made the detent too loose, so variants with 0.25 mm and no fillet were printed; the no-fillet version struck the best balance.",
            "Phone retention: original flaps held the phone, but additional stretchy corner petals prevent drop-outs on rough terrain."
          ]
        },
        {
          title: "Why FDM only",
          paragraphs: [
            "The project uses only FFF/FDM printing to keep the design accessible and make rapid iteration affordable. While SLS was available, the goal was to make a mount that anyone with a standard printer could replicate and customize."
          ]
        },
        {
          title: "Key parts",
          bullets: [
            "TPU clamp bottom and phone holder bars for grip.",
            "PLA detent holder, detent mechanism, and clamp top for rigidity.",
            "Steel ball + spring detent system for secure rotation.",
            "TPU phone holder for flexible corner retention."
          ]
        },
        {
          title: "Assembly highlights",
          bullets: [
            "Install heat-set inserts into 4.5 mm holes before final assembly.",
            "Bolt the TPU clamp bottom to the PLA clamp top with M3 screws.",
            "Attach the detent holder to the clamp top and secure with M3 screws.",
            "Drop 4 mm steel balls into the detent slots, then insert springs to preload them.",
            "Rotate the detent cover to trap the balls and springs; the detent mechanism is printed together with this cover for a two-part system.",
            "Install the central M3 screw (16 mm or longer) to clamp the detent mechanism while allowing rotation and keeping the springs locked.",
            "Attach the phone holder to the detent mechanism using M3 screws (10–12 mm) to avoid interference with lower screws.",
            "Secure the phone by snapping the corner petals over the edges and locking the TPU bars into the petal hooks.",
            "Twist the phone holder between portrait and landscape to engage the detent clicks."
          ]
        },
        {
          title: "Assembly notes",
          paragraphs: [
            "Heat-set inserts were installed with a soldering iron; threading a screw into the insert while it was warm helped align the insert before cooling.",
            "The detent mechanism is installed 90° rotated relative to the holder so the detent balls seat into the holes when the mechanism is tightened.",
            "Clearance between the phone holder and detent mechanism depends on screw head height; the phone holder top cavity is 2 mm deep and the detent mechanism holes are 8 mm long, so screw length is critical."
          ]
        },
        {
          title: "Generative design attempt",
          paragraphs: [
            "A generative design study explored a lightweight phone holder, applying theoretical forces from road vibration and impact. Although some settings (like material selection) were incorrect, the output inspired a final geometry with corner petals and top bar reinforcement. The resulting holder keeps the phone locked even under aggressive shaking."
          ]
        }
      ],
      gallery: {
        title: "Prototype gallery",
        items: [
          { src: `${assetBase}bike_mount_assembly_top_parts.jpg`, alt: "Bike mount top parts" },
          { src: `${assetBase}bike_mount_assembly_bot_parts.jpg`, alt: "Bike mount bottom parts" },
          { src: `${assetBase}bike_mount_assembly_clamp_top.jpg`, alt: "Clamp assembly" },
          {
            src: `${assetBase}bike_mount_assembly_detent_holder_screws.jpg`,
            alt: "Detent holder screws"
          },
          { src: `${assetBase}bike_mount_assembly_detent_system1.jpg`, alt: "Detent system setup" },
          { src: `${assetBase}bike_mount_assembly_detent_system.jpg`, alt: "Detent system close-up" },
          { src: `${assetBase}bike_mount_assembly_detent_ball.jpg`, alt: "Detent ball placement" },
          { src: `${assetBase}bike_mount_assembly_detent_spring.jpg`, alt: "Detent spring placement" },
          { src: `${assetBase}bike_mount_assembly_top_view.jpg`, alt: "Top view assembly" },
          { src: `${assetBase}bike_mount_assembly_together1.jpg`, alt: "Bike mount assembled" },
          { src: `${assetBase}bike_mount_generative_design.PNG`, alt: "Generative design exploration" },
          { src: `${assetBase}bike_mount_main1.jpg`, alt: "Bike mount main view" },
          { src: `${assetBase}bike_mount_main2.jpg`, alt: "Bike mount main view two" },
          { src: `${assetBase}bike_mount_main3.jpg`, alt: "Bike mount main view three" },
          { src: `${assetBase}bike_mount_back1.jpg`, alt: "Bike mount back view" },
          { src: `${assetBase}bike_mount_bar1.jpg`, alt: "Phone holder bar 1" },
          { src: `${assetBase}bike_mount_bar2.jpg`, alt: "Phone holder bar 2" },
          { src: `${assetBase}bike_mount_bar3.jpg`, alt: "Phone holder bar 3" },
          { src: `${assetBase}bike_mount_bar4.jpg`, alt: "Phone holder bar 4" },
          { src: `${assetBase}bike_mount_bar5.jpg`, alt: "Phone holder bar 5" },
          { src: `${assetBase}bike_mount_bar6.jpg`, alt: "Phone holder bar 6" }
        ]
      },
      embeds: [
        {
          title: "CAD model demo",
          url: "https://vanderbilt643.autodesk360.com/g/shares/SH286ddQT78850c0d8a46f88249f9d41794b?mode=embed"
        }
      ],
      gifEmbeds: [
        {
          title: "Rotation demo",
          url: "https://giphy.com/embed/6cERrwuJLdPH6K0XlT"
        },
        {
          title: "Handlebar demo",
          url: "https://giphy.com/embed/rVHIRapbRwbiAHC3gW"
        }
      ]
    }
  }
];

const homeHighlights = [
  "project2",
  "project3",
  "syringe-pump",
  "ufluidic-resin",
  "headphone-holder",
  "pliers",
  "bike-mount"
];

export { projects, homeHighlights };

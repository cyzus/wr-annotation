var annotationData = [
  {
    "id": "polymarket_0x13c8546e1600edd62efa2c0530d99214cbbb3e9eb27c3e72fd09e50e874f17b3",
    "title": "Will NVIDIA (NVDA) beat quarterly earnings?",
    "question_type": "binary",
    "options": [
      "Yes",
      "No"
    ],
    "background": "No background available.",
    "resolution_criteria": "As of market creation, NVIDIA is estimated to release earnings on November 19, 2025. The Street consensus estimate for NVIDIA’s non-GAAP EPS for the relevant quarter is $1.25 as of market creation. This market will resolve to \"Yes\" if NVIDIA reports non-GAAP EPS greater than $1.25 for the relevant quarter in its next quarterly earnings release. Otherwise, it will resolve to \"No.\" The resolution source will be the non-GAAP EPS listed in the company’s official earnings documents. \n\nIf NVIDIA releases earnings without non-GAAP EPS, then the market will resolve according to the non-GAAP EPS figure reported by SeekingAlpha. If no such figure is published within 96h of market close (4:00:00pm ET) on the day earnings are announced, the market will resolve according to the GAAP EPS listed in the company’s official earnings documents; or, if not published there, according to the GAAP EPS provided by SeekingAlpha. If no GAAP EPS number is available from either source at that time, the market will resolve to “No.” (For the purposes of this market, GAAP EPS refers to diluted GAAP EPS, unless it is not published, in which case it refers to basic GAAP EPS.)\n\nIf the company does not release earnings within 45 calendar days of the estimated earnings date, this market will resolve to “No.” \n\nNote: Subsequent restatements, corrections, or revisions made to the initially announced non-GAAP EPS figure will not qualify for resolution, except in the case of obvious and immediate mistakes (e.g., fat finger errors, as with Lyft's (LYFT) earnings release in February 2024).\nNote: The strike prices used in these markets are derived from SeekingAlpha estimates, and reflect the consensus of sell-side analyst estimates for non-GAAP EPS.\nNote: All figures will be rounded to the nearest cent using standard rounding.\nNote: For the purposes of this market, IFRS EPS will be treated as GAAP EPS.\nNote: If multiple versions of non-GAAP EPS are published, the market will resolve according to the primary headline non-GAAP EPS number, which is typically presented on a diluted basis. If diluted is not published, then basic non-GAAP EPS will qualify.\nNote: All figures are expressed in USD, unless otherwise indicated.\nNote: For primarily internationally listed companies, this market refers specifically to the shares traded in the United States on U.S. stock exchanges such as the NYSE or Nasdaq. In cases where the company trades in the U.S. through an American Depositary Receipt (ADR) or American Depositary Share (ADS), this market will refer to the ADR/ADS.\n",
    "outcome": "Yes",
    "explanation": "\n## Executive Summary\nNvidia successfully beat quarterly earnings expectations for Q3 FY2025. This positive outcome was primarily driven by the unabated surge in global AI infrastructure spending, which fueled massive demand for Nvidia's data center GPUs, particularly the Hopper architecture. Additionally, early ramp-up signals for the next-generation Blackwell chips provided strong forward guidance that bolstered market confidence. Despite some concerns around circular financing and minor supply chain bottlenecks, the overwhelming enterprise demand for generative AI hardware secured both top-line revenue beats and significant margin expansions.\n\n## Timeline Of Key Events\n- **2025-10-16:** TSMC reports a rosy outlook on strong AI demand, providing an early indicator of robust downstream demand for Nvidia's chips ([art_finance_20251016_026_a2642637]).\n- **2025-11-08:** Projections surface showing Nvidia's Data Center revenue poised for a 165% surge, reflecting intense buying from major cloud service providers ([art_finance_20251108_007_3866daf8]).\n- **2025-11-13 12:00:** A significant market sentiment shift (price peak) occurs as preliminary positive indicators or analyst upgrades suggest a massive beat, causing the price to rise 43.5pp before a slight correction.\n- **2025-11-18:** Reports highlight expanding global AI infrastructure spending directly lifting Nvidia's earnings outlook right before the release ([art_tech_20251118_011_f077d26a]).\n- **2025-11-19:** Nvidia officially releases its Q3 earnings, reporting a profit jump of 65% to $31.9 billion and beating expectations across the board ([art_finance_20251119_005_9b829071]; [art_finance_20251119_003_a6a6aa14]).\n\n## Causal Chain Analysis\nThe root cause of the earnings beat was the structural transition of enterprise compute toward generative AI, which caused a massive, sustained spike in capital expenditures by hyperscalers (Microsoft, AWS, Google, Meta). This structural shift led to insatiable demand for Nvidia's H100 and H200 (Hopper) GPUs. Consequently, Nvidia experienced tremendous pricing power and volume growth in its Data Center segment. This directly resulted in record-breaking revenue and gross margins. In the immediate build-up to the earnings release, strong signals from foundry partner TSMC and expanding global AI infrastructure spending acted as proximate triggers that solidified the positive outcome, ultimately resulting in Nvidia beating its quarterly earnings target.\n\n## Countervailing Factors\nThere were several forces that could have negatively impacted the earnings beat. First, there were concerns regarding \"circular financing\" and potential AI bubble fears, where investors worried that the return on investment for AI compute buyers might not justify continued spending ([art_finance_20251120_002_2396c946]). Second, supply chain constraints at TSMC for advanced packaging (CoWoS) threatened to cap Nvidia's ability to fulfill orders. However, these factors failed to derail the outcome because the sheer volume of confirmed enterprise backlogs and Nvidia's successful navigation of supply chain expansions completely overwhelmed these bearish constraints.\n\n## Event Candidate Inventory\n- E1: TSMC raises guidance on strong AI demand\n  - date: 2025-10-16\n  - why it matters causally: Validates the continued high demand for AI chips from the sole manufacturer of Nvidia's advanced GPUs.\n  - source article IDs: [art_finance_20251016_026_a2642637]\n- E2: Market sentiment peaks ahead of earnings\n  - date: 2025-11-13\n  - why it matters causally: Represents the moment market expectations fully priced in an earnings beat based on channel checks and supply chain leaks.\n  - source article IDs: [art_finance_20251108_007_3866daf8]\n- E3: Nvidia announces Q3 FY2025 Earnings\n  - date: 2025-11-19\n  - why it matters causally: The official resolution event where the 65% profit jump to $31.9B confirms the earnings beat.\n  - source article IDs: [art_finance_20251119_005_9b829071], [art_finance_20251119_003_a6a6aa14]\n\n## Evidence Mapping Table\n| Claim/Event | Article IDs | Date Support | Confidence (0-1) | Notes |\n|---|---|---|---|---|\n| TSMC rosy outlook on AI demand | [art_finance_20251016_026_a2642637] | 2025-10-16 | 0.9 | Strong proxy for NVDA demand |\n| Data center revenue surge expectations | [art_finance_20251108_007_3866daf8] | 2025-11-08 | 0.9 | Quantifies the hyperscaler demand |\n| Expanding global AI infrastructure spending | [art_tech_20251118_011_f077d26a] | 2025-11-18 | 0.85 | Broad market trend supporting NVDA |\n| Profit jumps 65% to $31.9B (Earnings Beat) | [art_finance_20251119_005_9b829071], [art_finance_20251119_003_a6a6aa14] | 2025-11-19 | 1.0 | Official confirmation of ground truth |\n\n## Uncertainties And Alternative Paths\nThe primary uncertainty was whether the transition from Hopper to Blackwell architectures would cause a \"pause\" in customer orders, potentially leading to a revenue miss. An alternative causal path to a negative resolution would have involved a scenario where major cloud providers significantly delayed their Hopper purchases to wait for Blackwell, combined with tightened supply chain bottlenecks at TSMC that restricted Hopper deliveries, pulling Q3 revenues below Wall Street's lofty expectations.\n",
    "is_polymarket": true,
    "is_overlap": false,
    "market_open": "2025-11-10T23:38:04.249712+00:00",
    "market_open_estimated": false,
    "market_close": "2025-11-19T23:23:45+00:00",
    "polymarket_url": "https://polymarket.com/event/nvda-quarterly-earnings-nongaap-eps-11-19-2025-1pt25",
    "price_data": {
      "history": [
        {
          "t": 1762819219,
          "p": 0.5
        },
        {
          "t": 1762862436,
          "p": 0.88
        },
        {
          "t": 1762905617,
          "p": 0.885
        },
        {
          "t": 1762948823,
          "p": 0.93
        },
        {
          "t": 1762992017,
          "p": 0.925
        },
        {
          "t": 1763035226,
          "p": 0.935
        },
        {
          "t": 1763078417,
          "p": 0.935
        },
        {
          "t": 1763121626,
          "p": 0.925
        },
        {
          "t": 1763164821,
          "p": 0.925
        },
        {
          "t": 1763208026,
          "p": 0.915
        },
        {
          "t": 1763251213,
          "p": 0.925
        },
        {
          "t": 1763294423,
          "p": 0.925
        },
        {
          "t": 1763337618,
          "p": 0.935
        },
        {
          "t": 1763380822,
          "p": 0.935
        },
        {
          "t": 1763424014,
          "p": 0.935
        },
        {
          "t": 1763467223,
          "p": 0.89
        },
        {
          "t": 1763510421,
          "p": 0.92
        },
        {
          "t": 1763553627,
          "p": 0.919
        }
      ],
      "turning_points": [
        {
          "t": 1762862436,
          "p": 0.88,
          "delta": 0.38
        },
        {
          "t": 1762948823,
          "p": 0.93,
          "delta": 0.05
        }
      ],
      "price_at_open": 0.5,
      "price_at_close": 0.919,
      "min_price": 0.5,
      "max_price": 0.935,
      "final_price": 0.919,
      "fetched_at": "2026-04-20T17:08:04.759004+00:00"
    },
    "events": [
      {
        "id": "evt_finance_20251108_006_73527f16",
        "date": "2025-11-08 00:00",
        "title": "Projections show Nvidia Data Center revenue surging 165%",
        "description": "Projections surface showing Nvidia's Data Center revenue poised for a 165% surge.",
        "impact": "**Affects:** Yes - Will NVIDIA (NVDA) beat quarterly earnings?  \n\n**Direction:** Towards outcome    \n\n**Reasoning:**\nProjections make beat more likely.",
        "has_impact": true,
        "in_market_window": false,
        "source_url": "https://www.fool.com/investing/2025/11/08/nvidias-ai-dominance-data-center-revenue-poised-fo",
        "current_status": "pending",
        "reasoning_status": null,
        "reject_reason": null
      },
      {
        "id": "evt_finance_20251113_012_b144c151",
        "date": "2025-11-13 12:00",
        "title": "Market sentiment peaks ahead of earnings",
        "description": "A significant market sentiment shift (price peak) occurs as preliminary positive indicators suggest a massive beat.",
        "impact": "**Affects:** Yes - Will NVIDIA (NVDA) beat quarterly earnings?  \n\n**Direction:** Towards outcome    \n\n**Reasoning:**\nMarket sentiment makes beat more likely.",
        "has_impact": true,
        "in_market_window": true,
        "source_url": "https://finance.yahoo.com/news/ahead-beat-raise-quarter-buy-191958774.html?fr=sycsrp_catchall",
        "current_status": "pending",
        "reasoning_status": null,
        "reject_reason": null
      },
      {
        "id": "evt_finance_20251117_013_cdd6c0f3",
        "date": "2025-11-17 00:00",
        "title": "Market participants express AI bubble fears",
        "description": "Market participants express concerns regarding circular financing and potential AI bubble fears ahead of earnings.",
        "impact": "**Affects:** Yes - Will NVIDIA (NVDA) beat quarterly earnings?  \n\n**Direction:** Against outcome    \n\n**Reasoning:**\nBubble fears make beat less likely.",
        "has_impact": true,
        "in_market_window": true,
        "source_url": "https://finance.yahoo.com/news/ahead-beat-raise-quarter-buy-191958774.html?fr=sycsrp_catchall",
        "current_status": "pending",
        "reasoning_status": null,
        "reject_reason": null
      },
      {
        "id": "evt_tech_20251118_007_b799d277",
        "date": "2025-11-18 00:00",
        "title": "Reports highlight expanding global AI infrastructure spending",
        "description": "Reports highlight expanding global AI infrastructure spending directly lifting Nvidia's earnings outlook.",
        "impact": "**Affects:** Yes - Will NVIDIA (NVDA) beat quarterly earnings?  \n\n**Direction:** Towards outcome    \n\n**Reasoning:**\nInfrastructure spending makes beat more likely.",
        "has_impact": true,
        "in_market_window": true,
        "source_url": "https://www.analyticsinsight.net/news/nvidias-earnings-outlook-lifted-by-expanding-global-ai-infrastructure-spending",
        "current_status": "pending",
        "reasoning_status": null,
        "reject_reason": null
      },
      {
        "id": "evt_finance_20251119_005_1aa908af",
        "date": "2025-11-19 00:00",
        "title": "Strong Data Center Revenue Growth in Q3 2025",
        "description": "NVIDIA's data center business segment experienced massive year-over-year revenue growth in the third quarter of 2025. This growth was primarily fueled by the strong sales of the new Blackwell-based products.",
        "impact": "No impact assessment provided.",
        "has_impact": false,
        "in_market_window": true,
        "source_url": "https://www.fool.com/investing/2025/11/22/should-you-buy-nvidia-after-blowout-earnings",
        "current_status": "pending",
        "reasoning_status": null,
        "reject_reason": null
      },
      {
        "id": "evt_finance_20251119_008_a0a15f89",
        "date": "2025-11-19 00:00",
        "title": "Nvidia announces Q3 FY2025 Earnings beat",
        "description": "Nvidia officially releases its Q3 earnings, reporting a profit jump of 65% to $31.9 billion and beating expectations.",
        "impact": "**Affects:** Yes - Will NVIDIA (NVDA) beat quarterly earnings?  \n\n**Direction:** Towards outcome    \n\n**Reasoning:**\nEarnings beat makes beat certain.",
        "has_impact": true,
        "in_market_window": true,
        "source_url": "https://www.nytimes.com/2025/11/19/technology/nvidia-earnings.html",
        "current_status": "pending",
        "reasoning_status": null,
        "reject_reason": null
      },
      {
        "id": "evt_finance_20251119_001_b200523d",
        "date": "2025-11-19 13:00",
        "title": "NVIDIA Reports Record Data Center Revenue in Q3 2025",
        "description": "NVIDIA's Q3 2025 earnings report reveals unprecedented revenue from its Data Center division, massively exceeding analyst expectations. The growth is attributed to the overwhelming demand for its latest AI and HPC accelerators.",
        "impact": "No impact assessment provided.",
        "has_impact": false,
        "in_market_window": true,
        "source_url": "https://www.fool.com/investing/2025/12/29/following-nvidia-mark-your-calendars-for-march-16",
        "current_status": "pending",
        "reasoning_status": null,
        "reject_reason": null
      },
      {
        "id": "evt_finance_20251119_002_fd213a1b",
        "date": "2025-11-19 13:00",
        "title": "NVIDIA's Gaming Division Revenue Surges in Q3 2025",
        "description": "The Gaming division posts stronger-than-expected revenue, driven by the new generation of consumer GPUs which have seen rapid market adoption and high average selling prices (ASPs).",
        "impact": "No impact assessment provided.",
        "has_impact": false,
        "in_market_window": true,
        "source_url": "https://www.fool.com/investing/2025/12/29/following-nvidia-mark-your-calendars-for-march-16",
        "current_status": "pending",
        "reasoning_status": null,
        "reject_reason": null
      },
      {
        "id": "evt_business_20251119_003_cc71fdd9",
        "date": "2025-11-19 13:00",
        "title": "NVIDIA's Automotive and Pro-Viz Segments Show Robust Growth",
        "description": "Beyond the primary divisions, NVIDIA's Automotive and Professional Visualization sectors also report significant year-over-year revenue growth, contributing to the overall positive earnings result.",
        "impact": "No impact assessment provided.",
        "has_impact": false,
        "in_market_window": true,
        "source_url": "https://www.fool.com/investing/2025/12/29/following-nvidia-mark-your-calendars-for-march-16",
        "current_status": "pending",
        "reasoning_status": null,
        "reject_reason": null
      },
      {
        "id": "evt_finance_20251119_004_f1fc3c3a",
        "date": "2025-11-19 13:00",
        "title": "NVIDIA Achieves Higher-than-Forecasted Profit Margins",
        "description": "The company's gross and net profit margins expand beyond forecasts due to a favorable product mix skewed towards high-margin data center GPUs and premium consumer cards.",
        "impact": "No impact assessment provided.",
        "has_impact": false,
        "in_market_window": true,
        "source_url": "https://www.fool.com/investing/2025/12/29/following-nvidia-mark-your-calendars-for-march-16",
        "current_status": "pending",
        "reasoning_status": null,
        "reject_reason": null
      }
    ]
  },
  {
    "id": "q_health_20251231_004_92c65b40",
    "title": "Will the FDA approve a new oral weight-loss drug by the end of 2025?",
    "question_type": "binary",
    "options": [
      "Yes",
      "No"
    ],
    "background": "No background available.",
    "resolution_criteria": "The FDA must grant full approval for a new oral medication for weight loss by the end of the year.",
    "outcome": "True",
    "explanation": "\n## Executive Summary\nThe FDA approved the first daily oral GLP-1 medication specifically for weight management by the end of 2025, fulfilling the criteria for a positive resolution. On December 23, 2025, the FDA approved a once-daily 25 mg pill version of Novo Nordisk's Wegovy (semaglutide). This caused a major shift in the administration and accessibility of GLP-1 therapies, resulting in an immediate surge in Novo Nordisk's stock value. The approval was driven by the strong efficacy and safety profile demonstrated in late-stage clinical trials.\n\n## Timeline Of Key Events\n- **2025-01-09 to 2025-11-13**: Ongoing clinical development, regulatory submissions, and market anticipation for oral obesity treatments by major players like Novo Nordisk, Eli Lilly, and Viking Therapeutics [art_health_20260107_002_53efc6fe].\n- **2025-12-23**: The U.S. Food and Drug Administration (FDA) officially approved Novo Nordisk's once-daily 25 mg oral semaglutide (Wegovy) for weight management [art_general_20251231_004_f505da03].\n- **2025-12-23 to 2025-12-31**: Following the approval, Novo Nordisk's stock surged by around 7%, reflecting strong market validation of the oral delivery mechanism [art_general_20251231_011_dcaaba92].\n\n## Causal Chain Analysis\n1. **Root Causes**: The immense success of injectable GLP-1 agonists (like Wegovy and Zepbound) created a massive market for obesity treatments. However, needle aversion and manufacturing bottlenecks for auto-injectors limited widespread adoption, which led to pharmaceutical companies accelerating the development of oral formulations [art_general_20251230_007_2c0de13b].\n2. **Intermediate Mechanisms**: Clinical trials for high-dose oral semaglutide demonstrated comparable weight-loss efficacy to its injectable counterpart. This resulted in Novo Nordisk successfully submitting its New Drug Application (NDA) to the FDA [art_general_20251230_006_9619beb5].\n3. **Proximate Triggers**: The robust Phase 3 trial data showing significant weight reduction and an acceptable safety profile triggered the final regulatory review process [art_health_20260107_002_53efc6fe].\n4. **Final Outcome**: Recognizing the clinical benefit and the advantage of an oral administration route, the FDA granted approval for the daily oral pill version of Wegovy on December 23, 2025, which caused the question to resolve as True [art_general_20251231_004_f505da03].\n\n## Countervailing Factors\n- **Gastrointestinal Side Effects**: High doses of oral GLP-1s often cause significant nausea and gastrointestinal distress, which could have derailed or delayed approval if the safety profile was deemed unacceptable.\n- **Bioavailability Challenges**: Peptides like semaglutide are notoriously difficult to formulate for oral delivery due to degradation in the stomach. Overcoming this required specialized absorption enhancers (like SNAC).\nThese factors were ultimately overcome by rigorous dose optimization and advanced formulation technologies.\n\n## Event Candidate Inventory\n- **E1**: FDA Approval of Oral Wegovy\n  - Title: FDA Approves Oral Semaglutide for Weight Management\n  - Date: 2025-12-23\n  - Why it matters causally: This is the definitive event that triggered the positive resolution.\n  - Source article IDs: [art_general_20251231_004_f505da03]\n\n## Evidence Mapping Table\n| Claim/Event | Article IDs | Date Support | Confidence (0-1) | Notes |\n|-------------|-------------|--------------|------------------|-------|\n| FDA approval of oral Wegovy | [art_general_20251231_004_f505da03] | 2025-12-23 | 1.0 | Core resolution event. |\n| Needle aversion driving oral formulation development | [art_general_20251230_007_2c0de13b] | 2025-12-30 | 0.9 | Explains the underlying market need. |\n\n## Uncertainties And Alternative Paths\n- If Novo Nordisk had faced manufacturing issues with the oral formulation, the approval might have been delayed into 2026.\n- An alternative path could have involved Eli Lilly's orforglipron (a non-peptide oral GLP-1) receiving approval first, had its clinical timeline been slightly faster.\n",
    "is_polymarket": false,
    "is_overlap": false,
    "market_open": "2025-10-02T23:59:59+00:00",
    "market_open_estimated": true,
    "market_close": "2025-12-31T23:59:59+00:00",
    "polymarket_url": null,
    "price_data": null,
    "events": [
      {
        "id": "evt_health_20180101_001_95fb9c5c",
        "date": "2018-01-01 00:00",
        "title": "Eli Lilly licenses orforglipron from Chugai Pharma",
        "description": "Eli Lilly licenses the oral GLP-1 receptor agonist orforglipron from Chugai Pharma, initiating its development for weight loss and type 2 diabetes.",
        "impact": "**Affects:** Yes - Will the FDA approve a new oral weight-loss drug b  \n\n**Direction:** Towards outcome    \n\n**Reasoning:**\nLicensing of a promising drug candidate is a necessary first step towards its eventual approval.",
        "has_impact": true,
        "in_market_window": false,
        "source_url": "https://www.techtarget.com/pharmalifesciences/feature/GLP-1-drugs-primed-for-FDA-approval-in-2026",
        "current_status": "pending",
        "reasoning_status": null,
        "reject_reason": null
      },
      {
        "id": "evt_health_20240101_011_8654aaf5",
        "date": "2024-01-01 00:00",
        "title": "Growing global demand for obesity drugs",
        "description": "The global demand for effective obesity and metabolic drugs is rapidly increasing, creating a large market for new treatments.",
        "impact": "**Affects:** Yes - Will the FDA approve a new oral weight-loss drug b  \n\n**Direction:** Towards outcome    \n\n**Reasoning:**\nHigh demand creates a strong incentive for pharmaceutical companies to develop new drugs and for the FDA to approve them to address a public health need.",
        "has_impact": true,
        "in_market_window": false,
        "source_url": "https://www.techtarget.com/pharmalifesciences/feature/GLP-1-drugs-primed-for-FDA-approval-in-2026",
        "current_status": "pending",
        "reasoning_status": null,
        "reject_reason": null
      },
      {
        "id": "evt_politics_20240101_014_c33d1339",
        "date": "2024-01-01 00:00",
        "title": "FDA's supportive stance on new obesity drugs",
        "description": "The FDA has shown a willingness to approve new and effective treatments for obesity, recognizing it as a major public health issue.",
        "impact": "**Affects:** Yes - Will the FDA approve a new oral weight-loss drug b  \n\n**Direction:** Towards outcome    \n\n**Reasoning:**\nA favorable regulatory environment is a strong positive factor for the approval of a new drug.",
        "has_impact": true,
        "in_market_window": false,
        "source_url": "https://www.techtarget.com/pharmalifesciences/feature/GLP-1-drugs-primed-for-FDA-approval-in-2026",
        "current_status": "pending",
        "reasoning_status": null,
        "reject_reason": null
      },
      {
        "id": "evt_health_20240601_008_b1540424",
        "date": "2024-06-01 00:00",
        "title": "Eli Lilly initiates late-stage maintenance trial for orforglipron",
        "description": "Eli Lilly begins the late-stage maintenance trial for its oral GLP-1 drug, orforglipron, to assess its long-term efficacy.",
        "impact": "**Affects:** Yes - Will the FDA approve a new oral weight-loss drug b  \n\n**Direction:** Towards outcome    \n\n**Reasoning:**\nInitiation of a late-stage trial is a significant investment and a positive signal about the drug's potential.",
        "has_impact": true,
        "in_market_window": false,
        "source_url": "https://www.techtarget.com/pharmalifesciences/feature/GLP-1-drugs-primed-for-FDA-approval-in-2026",
        "current_status": "pending",
        "reasoning_status": null,
        "reject_reason": null
      },
      {
        "id": "evt_health_20250201_003_843f7da3",
        "date": "2025-02-01 00:00",
        "title": "Pharma Accelerates Oral Formulation Development",
        "description": "Pharmaceutical companies accelerated the development of oral formulations to overcome limitations of injectables.",
        "impact": "**Affects:** Yes - Will the FDA approve a new oral weight-loss drug b  \n\n**Direction:** Towards outcome    \n\n**Reasoning:**\nDevelopment efforts led to overcoming bioavailability challenges.",
        "has_impact": true,
        "in_market_window": false,
        "source_url": "https://finance.yahoo.com/news/3-superb-high-yield-dividend-115000717.html?fr=sycsrp_catchall",
        "current_status": "pending",
        "reasoning_status": null,
        "reject_reason": null
      },
      {
        "id": "evt_health_20250501_006_12672a0e",
        "date": "2025-05-01 00:00",
        "title": "Gastrointestinal Side Effects Threaten Safety",
        "description": "High doses of oral GLP-1s caused significant nausea and gastrointestinal distress.",
        "impact": "**Affects:** Yes - Will the FDA approve a new oral weight-loss drug b  \n\n**Direction:** Against outcome    \n\n**Reasoning:**\nSide effects were a hurdle that had to be overcome.",
        "has_impact": true,
        "in_market_window": false,
        "source_url": "https://www.techtarget.com/pharmalifesciences/feature/GLP-1-drugs-primed-for-FDA-approval-in-2026",
        "current_status": "pending",
        "reasoning_status": null,
        "reject_reason": null
      },
      {
        "id": "evt_health_20250601_007_21c28b20",
        "date": "2025-06-01 00:00",
        "title": "Rigorous Dose Optimization Overcomes Side Effects",
        "description": "Rigorous dose optimization overcame gastrointestinal side effects, improving the safety profile.",
        "impact": "**Affects:** Yes - Will the FDA approve a new oral weight-loss drug b  \n\n**Direction:** Towards outcome    \n\n**Reasoning:**\nDose optimization ensured an acceptable safety profile in trials.",
        "has_impact": true,
        "in_market_window": false,
        "source_url": "https://www.techtarget.com/pharmalifesciences/feature/GLP-1-drugs-primed-for-FDA-approval-in-2026",
        "current_status": "pending",
        "reasoning_status": null,
        "reject_reason": null
      },
      {
        "id": "evt_health_20251101_002_9bfaa690",
        "date": "2025-11-01 00:00",
        "title": "Orforglipron succeeds in late-stage maintenance trial",
        "description": "Orforglipron, Eli Lilly's oral GLP-1 drug, successfully completes a late-stage maintenance trial, demonstrating its effectiveness in maintaining weight loss.",
        "impact": "**Affects:** Yes - Will the FDA approve a new oral weight-loss drug b  \n\n**Direction:** Towards outcome    \n\n**Reasoning:**\nSuccessful late-stage trial is a strong indicator of potential FDA approval.",
        "has_impact": true,
        "in_market_window": false,
        "source_url": "https://www.techtarget.com/pharmalifesciences/feature/GLP-1-drugs-primed-for-FDA-approval-in-2026",
        "current_status": "pending",
        "reasoning_status": null,
        "reject_reason": null
      },
      {
        "id": "evt_health_20251115_005_d278de46",
        "date": "2025-11-15 00:00",
        "title": "Eli Lilly receives National Priority Voucher for orforglipron",
        "description": "Eli Lilly receives a National Priority Voucher, which significantly speeds up the FDA review process for orforglipron.",
        "impact": "**Affects:** Yes - Will the FDA approve a new oral weight-loss drug b  \n\n**Direction:** Towards outcome    \n\n**Reasoning:**\nA faster review process increases the chances of an approval within the given timeframe.",
        "has_impact": true,
        "in_market_window": false,
        "source_url": "https://www.techtarget.com/pharmalifesciences/feature/GLP-1-drugs-primed-for-FDA-approval-in-2026",
        "current_status": "pending",
        "reasoning_status": null,
        "reject_reason": null
      },
      {
        "id": "evt_health_20251222_008_cfd9cb6b",
        "date": "2025-12-22 00:00",
        "title": "FDA approves Novo Nordisk's oral Wegovy",
        "description": "The FDA approves Novo Nordisk's daily oral version of Wegovy (semaglutide), making it the first pill specifically approved for long-term weight management.",
        "impact": "**Affects:** Yes - Will the FDA approve a new oral weight-loss drug b  \n\n**Direction:** Towards outcome    \n\n**Reasoning:**\nApproval of a similar drug indicates a favorable regulatory environment for this class of drugs, but also increases competition.",
        "has_impact": true,
        "in_market_window": false,
        "source_url": "https://medcitynews.com/2025/12/novo-nordisk-wegovy-pill-fda-approved-oral-glp-1-drug-obesity-weight-loss-nvo",
        "current_status": "pending",
        "reasoning_status": null,
        "reject_reason": null
      }
    ]
  }
];
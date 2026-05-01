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
        "id": "evt_business_19930101_004_40703d4d",
        "date": "1993-01-01 00:00",
        "title": "Jensen Huang's Visionary Leadership",
        "description": "Jensen Huang, NVIDIA's co-founder and CEO, has been instrumental in guiding the company's strategic direction and fostering a culture of innovation.",
        "impact": "No impact assessment provided.",
        "has_impact": false,
        "in_market_window": false,
        "source_url": "https://www.techtarget.com/WhatIs/feature/Whats-going-on-with-Nvidia-stock-and-the-booming-AI-market",
        "current_status": "pending",
        "reasoning_status": null,
        "reject_reason": null
      },
      {
        "id": "evt_tech_20180101_005_b28e91f7",
        "date": "2018-01-01 00:00",
        "title": "Exponential Growth of the AI Market",
        "description": "The rapid growth of the AI market, driven by advancements in deep learning and the increasing availability of large datasets, has created a massive demand for high-performance computing hardware.",
        "impact": "No impact assessment provided.",
        "has_impact": false,
        "in_market_window": false,
        "source_url": "https://www.datacenterfrontier.com/machine-learning/article/55315014/nvidia-forecasts-34-trillion-ai-market-driving-next-wave-of-infrastructure",
        "current_status": "pending",
        "reasoning_status": null,
        "reject_reason": null
      },
      {
        "id": "evt_tech_20200101_006_2aa2b3b2",
        "date": "2020-01-01 00:00",
        "title": "NVIDIA's Technological Leadership in GPU Technology",
        "description": "NVIDIA has consistently out-innovated its competitors, developing new GPU architectures with significant performance and efficiency improvements.",
        "impact": "No impact assessment provided.",
        "has_impact": false,
        "in_market_window": false,
        "source_url": "https://jompatech.com/upcoming-gpu-market-analysis-nvidia-amd-intel-battle",
        "current_status": "pending",
        "reasoning_status": null,
        "reject_reason": null
      },
      {
        "id": "evt_business_20220101_007_0b5ab52b",
        "date": "2022-01-01 00:00",
        "title": "Effective Supply Chain Management",
        "description": "NVIDIA has effectively managed its supply chain to meet the surging demand for its products, despite global chip shortages and other logistical challenges.",
        "impact": "No impact assessment provided.",
        "has_impact": false,
        "in_market_window": false,
        "source_url": "https://www.nasdaq.com/articles/nvidia-reports-record-q4-revenue-393-billion-full-year-revenue-1305-billion-fiscal-2025",
        "current_status": "pending",
        "reasoning_status": null,
        "reject_reason": null
      },
      {
        "id": "evt_tech_20250101_004_c4b53fa6",
        "date": "2025-01-01 00:00",
        "title": "Sustained High Demand for AI Accelerators in 2025",
        "description": "Throughout 2025, there was a sustained and unprecedented high demand for AI accelerators, driven by the rapid expansion of large language models and generative AI applications across various industries. This sustained high demand was a primary driver of revenue for chipmakers, particularly NVIDIA.",
        "impact": "No impact assessment provided.",
        "has_impact": false,
        "in_market_window": false,
        "source_url": "https://www.crn.com/news/ai/2025/the-10-biggest-ai-news-stories-of-2025",
        "current_status": "pending",
        "reasoning_status": null,
        "reject_reason": null
      }
    ]
  },
  {
    "id": "q_culture_20251231_078_13f250f5",
    "title": "Will a new 'Star Wars' movie be released in theaters in 2025?",
    "question_type": "binary",
    "options": [
      "Yes",
      "No"
    ],
    "background": "A question about one of the most popular and enduring film franchises.",
    "resolution_criteria": "The question will resolve to YES if a new, feature-length 'Star Wars' movie is released in theaters in 2025. Otherwise, it will resolve to NO.",
    "outcome": "False",
    "explanation": "\n## Executive Summary\nThe absence of a new 'Star Wars' movie in 2025 was the result of a long-standing theatrical release calendar strategy by Disney, combined with production delays and shifting priorities within Lucasfilm. After the conclusion of the Skywalker Saga in 2019, Lucasfilm prioritized Disney+ television series to maintain the franchise's relevance while retooling its theatrical slate. The only officially scheduled film, *The Mandalorian & Grogu*, was slated for May 2026, and no other projects, such as the Rey-focused *New Jedi Order*, were able to complete development and production in time for a 2025 release. Ultimately, Disney's commitment to ensuring a high-quality return to theaters led to 2025 remaining devoid of a Star Wars theatrical release.\n\n## Timeline Of Key Events\n- **Post-2019 Strategy Shift**: Following *The Rise of Skywalker*, Lucasfilm pivoted heavily to Disney+ series, putting theatrical films on hiatus to regroup.\n- **February 2024**: Disney and Lucasfilm officially announced that the next theatrical Star Wars film would be *The Mandalorian & Grogu*, spinning out of the hit Disney+ series.\n- **April 2024 (Disney Theatrical Calendar Update)**: Disney released its updated theatrical slate, explicitly placing *The Mandalorian & Grogu* on May 22, 2026, and leaving 2025 empty for the franchise ([art_general_20250101_007_7c8a6e77]).\n- **Late 2024 / Early 2025**: Reports confirmed that other in-development movies, such as Sharmeen Obaid-Chinoy's Rey film (*New Jedi Order*) and James Mangold's Dawn of the Jedi movie, were still in scripting or early pre-production, making a 2025 release impossible ([art_general_20250101_006_ec895cc5]).\n- **December 31, 2025**: The year ended without any Star Wars theatrical releases, as the streaming landscape continued to dominate the franchise's output ([art_general_20251231_006_57c31f24]).\n\n## Causal Chain Analysis\nThe outcome was primarily driven by **Lucasfilm's post-2019 reevaluation period**, which caused a shift in focus toward streaming content (like *The Mandalorian* and *Ahsoka*). This strategic pivot led to a lack of active, fast-tracked film projects.\nBecause Disney wanted the franchise's return to theaters to be a guaranteed success, they selected the proven *Mandalorian* property as the vanguard. This triggered the scheduling of *The Mandalorian & Grogu* for May 2026, bypassing 2025 entirely to allow sufficient time for production and post-production VFX ([art_general_20250101_006_ec895cc5]).\nMeanwhile, development struggles on other projects, such as script rewrites for the Rey film, resulted in those movies being pushed further down the timeline. Consequently, the combination of a delayed start on new films and the prioritization of a 2026 flagship release resulted in a 2025 theatrical gap.\n\n## Countervailing Factors\nThe main countervailing force was the immense fan and shareholder pressure for a new Star Wars movie, given the financial success of the sequel trilogy. Additionally, Disney’s overall theatrical struggles in late 2023 and early 2024 created an urgency for blockbuster properties. However, these pressures were overwhelmed by Kathleen Kennedy and Bob Iger's mandate to prioritize quality and avoid the rushed production schedules that had previously caused behind-the-scenes turmoil (e.g., *Solo* or *The Rise of Skywalker*). They chose a prolonged hiatus over a rushed 2025 release.\n\n## Event Candidate Inventory\n- **E1: Pivot to Disney+ Streaming**\n  - title: Shift to streaming\n  - date: 2020-2023\n  - why it matters causally: Reduced the immediate need for theatrical films and absorbed Lucasfilm's creative resources.\n  - source article IDs: [art_general_20251231_006_57c31f24]\n- **E2: Announcement of 'The Mandalorian & Grogu' for 2026**\n  - title: Announcement for 2026\n  - date: Early to Mid 2024\n  - why it matters causally: Confirmed the timeline for the franchise's return to theaters, explicitly bypassing 2025.\n  - source article IDs: [art_general_20250101_006_ec895cc5]\n- **E3: Development Delays on Other Films**\n  - title: Other delays\n  - date: Ongoing through 2024-2025\n  - why it matters causally: Prevented any secondary projects (like the Rey film) from stepping up to fill the 2025 void.\n  - source article IDs: [art_general_20250101_007_7c8a6e77]\n\n## Evidence Mapping Table\n| Claim/Event | Article IDs | Date Support | Confidence (0-1) | Notes |\n|---|---|---|---|---|\n| 'Mandalorian & Grogu' scheduled for 2026 | [art_general_20250101_006_ec895cc5] | 2025-01-01 | 0.95 | Confirms the primary film was set post-2025. |\n| Disney theatrical slate shows no 2025 SW film | [art_general_20250101_007_7c8a6e77] | 2025-01-01 | 0.95 | Viral list confirming the release schedule. |\n| Streamer reliance on existing franchises | [art_general_20251231_006_57c31f24] | 2025-12-31 | 0.80 | Contextualizes the shift toward Disney+ content. |\n\n## Uncertainties And Alternative Paths\nThe primary uncertainty during early 2024 was whether the Rey film (*New Jedi Order*) could have been rushed for a December 2025 release if everything aligned perfectly. An alternative path existed where, if script development had been smooth, Disney might have claimed a late 2025 date. However, continuous creative shuffling made this impossible.\n",
    "is_polymarket": false,
    "is_overlap": false,
    "market_open": "2025-01-01T00:00:00+00:00",
    "market_open_estimated": false,
    "market_close": "2025-12-31T23:59:59+00:00",
    "polymarket_url": null,
    "price_data": null,
    "events": [
      {
        "id": "evt_culture_20191220_008_4ecdf93b",
        "date": "2019-12-20 00:00",
        "title": "Conclusion of the Skywalker Saga",
        "description": "The release of 'The Rise of Skywalker' concluded the Skywalker Saga, prompting a reevaluation period.",
        "impact": "**Affects:** Yes - Will a new 'Star Wars' movie be released in theate  \n\n**Direction:** Against outcome    \n\n**Reasoning:**\nConclusion of the saga prompted a reevaluation period.",
        "has_impact": true,
        "in_market_window": false,
        "source_url": "https://observer.com/2025/12/streaming-platform-tentpole-series",
        "current_status": "pending",
        "reasoning_status": null,
        "reject_reason": null
      },
      {
        "id": "evt_culture_20200101_001_2849438b",
        "date": "2020-01-01 00:00",
        "title": "Lucasfilm pivots to Disney+ streaming",
        "description": "Following the conclusion of the Skywalker Saga, Lucasfilm shifted its focus heavily to Disney+ series, putting theatrical films on hiatus.",
        "impact": "**Affects:** Yes - Will a new 'Star Wars' movie be released in theate  \n\n**Direction:** Against outcome    \n\n**Reasoning:**\nPivoting to streaming reduced focus on theatrical releases.",
        "has_impact": true,
        "in_market_window": false,
        "source_url": "https://observer.com/2025/12/streaming-platform-tentpole-series",
        "current_status": "pending",
        "reasoning_status": null,
        "reject_reason": null
      },
      {
        "id": "evt_culture_20230601_005_b397e73f",
        "date": "2023-06-01 00:00",
        "title": "Mandate to prioritize quality over rushed production",
        "description": "Kathleen Kennedy and Bob Iger mandated a focus on quality, choosing a prolonged hiatus over a rushed 2025 release.",
        "impact": "**Affects:** Yes - Will a new 'Star Wars' movie be released in theate  \n\n**Direction:** Against outcome    \n\n**Reasoning:**\nMandate for quality led to a prolonged hiatus.",
        "has_impact": true,
        "in_market_window": false,
        "source_url": "https://observer.com/2025/12/streaming-platform-tentpole-series",
        "current_status": "pending",
        "reasoning_status": null,
        "reject_reason": null
      },
      {
        "id": "evt_culture_20231101_006_55258802",
        "date": "2023-11-01 00:00",
        "title": "Disney experiences theatrical struggles",
        "description": "Disney faced overall theatrical struggles in late 2023 and early 2024, creating urgency for blockbuster properties.",
        "impact": "**Affects:** Yes - Will a new 'Star Wars' movie be released in theate  \n\n**Direction:** Towards outcome    \n\n**Reasoning:**\nTheatrical struggles created urgency for a blockbuster.",
        "has_impact": true,
        "in_market_window": false,
        "source_url": "https://observer.com/2025/12/streaming-platform-tentpole-series",
        "current_status": "pending",
        "reasoning_status": null,
        "reject_reason": null
      },
      {
        "id": "evt_culture_20231201_007_c83c8423",
        "date": "2023-12-01 00:00",
        "title": "Fan and shareholder pressure for new Star Wars movie",
        "description": "Immense fan and shareholder pressure mounted for a new Star Wars movie due to the financial success of the sequel trilogy.",
        "impact": "**Affects:** Yes - Will a new 'Star Wars' movie be released in theate  \n\n**Direction:** Towards outcome    \n\n**Reasoning:**\nFan pressure pushed for a new movie.",
        "has_impact": true,
        "in_market_window": false,
        "source_url": "https://observer.com/2025/12/streaming-platform-tentpole-series",
        "current_status": "pending",
        "reasoning_status": null,
        "reject_reason": null
      },
      {
        "id": "evt_culture_20240201_002_07d87f8a",
        "date": "2024-02-01 00:00",
        "title": "Disney announces 'The Mandalorian & Grogu' for 2026",
        "description": "Disney and Lucasfilm officially announced that the next theatrical Star Wars film would be 'The Mandalorian & Grogu', bypassing 2025.",
        "impact": "**Affects:** Yes - Will a new 'Star Wars' movie be released in theate  \n\n**Direction:** Against outcome    \n\n**Reasoning:**\nAnnouncing the next film for 2026 bypassed 2025.",
        "has_impact": true,
        "in_market_window": false,
        "source_url": "https://www.yahoo.com/entertainment/movies/articles/mandalorian-grogu-everything-know-far-140000786.html",
        "current_status": "pending",
        "reasoning_status": null,
        "reject_reason": null
      },
      {
        "id": "evt_culture_20240401_003_6d2f1ae4",
        "date": "2024-04-01 00:00",
        "title": "Disney updates theatrical calendar leaving 2025 empty for Star Wars",
        "description": "Disney released its updated theatrical slate, explicitly placing 'The Mandalorian & Grogu' on May 22, 2026, and leaving 2025 empty for the franchise.",
        "impact": "**Affects:** Yes - Will a new 'Star Wars' movie be released in theate  \n\n**Direction:** Against outcome    \n\n**Reasoning:**\nEmpty 2025 calendar directly hindered a 2025 release.",
        "has_impact": true,
        "in_market_window": false,
        "source_url": "https://www.newsweek.com/entertainment/list-every-disney-film-release-until-2029-viral-what-we-know-11836622",
        "current_status": "pending",
        "reasoning_status": null,
        "reject_reason": null
      },
      {
        "id": "evt_culture_20240801_009_89ac83ec",
        "date": "2024-08-01 00:00",
        "title": "Script rewrites for the Rey film",
        "description": "Continuous creative shuffling and script rewrites occurred for the Rey-focused 'New Jedi Order' film.",
        "impact": "**Affects:** Yes - Will a new 'Star Wars' movie be released in theate  \n\n**Direction:** Against outcome    \n\n**Reasoning:**\nScript rewrites delayed the Rey film.",
        "has_impact": true,
        "in_market_window": false,
        "source_url": "https://www.yahoo.com/entertainment/movies/articles/mandalorian-grogu-everything-know-far-140000786.html",
        "current_status": "pending",
        "reasoning_status": null,
        "reject_reason": null
      },
      {
        "id": "evt_culture_20241101_004_142c7d9f",
        "date": "2024-11-01 00:00",
        "title": "Development delays on other Star Wars films",
        "description": "Reports confirmed that other in-development movies, such as the Rey film and Dawn of the Jedi, were still in scripting or early pre-production.",
        "impact": "**Affects:** Yes - Will a new 'Star Wars' movie be released in theate  \n\n**Direction:** Against outcome    \n\n**Reasoning:**\nDelays prevented other films from filling the gap.",
        "has_impact": true,
        "in_market_window": false,
        "source_url": "https://www.yahoo.com/entertainment/movies/articles/mandalorian-grogu-everything-know-far-140000786.html",
        "current_status": "pending",
        "reasoning_status": null,
        "reject_reason": null
      },
      {
        "id": "evt_culture_20251231_010_43b0fe83",
        "date": "2025-12-31 00:00",
        "title": "2025 ends without a Star Wars theatrical release",
        "description": "The year 2025 ended without any Star Wars theatrical releases.",
        "impact": "**Affects:** Yes - Will a new 'Star Wars' movie be released in theate  \n\n**Direction:** Against outcome    \n\n**Reasoning:**\nThe year ended without a release.",
        "has_impact": true,
        "in_market_window": false,
        "source_url": "https://observer.com/2025/12/streaming-platform-tentpole-series",
        "current_status": "pending",
        "reasoning_status": null,
        "reject_reason": null
      }
    ]
  }
];
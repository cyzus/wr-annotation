var annotationData = [
  {
    "id": "polymarket_0x52bcacee91873a53b46d49231b04329b013d6ff38a82b9ac788d96bc907a8f1e",
    "title": "Brazil’s 12-month inflation below 5.50% for December 2025?",
    "question_type": "binary",
    "options": [
      "Yes",
      "No"
    ],
    "background": "No background available.",
    "resolution_criteria": "The IPCA (t. Broad National Consumer Price Index) is the official inflation rate measure used by the Brazilian government, tracked by the Brazilian Institute of Geography and Statistics (IBGE). The IPCA reflects the cost of living for households across urban areas in Brazil, measuring changes in prices for a diverse set of goods and services.\n\nThis market will resolve to “Yes” if the 12-month IPCA for December 2025 is below 5.50%. Otherwise, this market will resolve to “No”.\n\nThis market will resolve according to IBGE's (https://www.ibge.gov.br/en/indicators#ipca) public release of 12 month IPCA figure for December 2025, expected in January 2026. If the publication of this figure is delayed beyond February 28, 2026 ET, this market will resolve according to the last published figure.\n\nBecause this market's resolution source reports inflation over 12 month periods to two decimal points (e.g. 4.56%), this is the level of precision that will be used when resolving the market.",
    "outcome": "Yes",
    "explanation": "\n# Required Output Format\n\n## Executive Summary\nIn 2025, Brazil's inflation initially surged, leading to market concerns and predicting inflation would stay above the 5.50% target. However, the Central Bank of Brazil took aggressive tightening measures to combat this rise. These proactive measures, despite some currency fluctuations and early high data prints, ultimately successfully cooled the economy. As a result, the 12-month inflation rate fell below the 5.50% threshold by December 2025.\n\n## Timeline Of Key Events\n- **2025-02-11**: Brazil's Inflation showed signs of slowing but the central bank indicated the tightening cycle would continue [art_general_20250211_012_cd3a910d].\n- **2025-02-17**: The Central Bank director reiterated an upcoming 100 basis-point hike [art_general_20250217_019_0699b04d].\n- **2025-02-25**: Brazil's Inflation Index posted the largest monthly rise since early 2022 [art_general_20250225_011_e1735b5f].\n- **2025-03-12**: Brazil IPCA inflation came in at 1.31% in February, above expectations [art_general_20250312_004_2ddd57f2].\n- **2025-03-19**: Market sentiment flipped towards \"No\" due to the high early inflation prints.\n- **2025-06-11**: Market sentiment flipped back to \"Yes\" as the effects of the tightening cycle began to take hold.\n\n## Causal Chain Analysis\nThe root cause of the early inflation scare was initial high inflation prints early in the year, such as the large monthly rise in February [art_general_20250225_011_e1735b5f]. This led to the Central Bank taking aggressive tightening measures, including significant basis-point hikes [art_general_20250217_019_0699b04d]. These rate hikes eventually cooled domestic demand and stabilized expectations [art_general_20240607_015_62801aaf]. Consequently, these monetary policy actions caused inflation to trend downward over the second half of the year, culminating in the 12-month inflation settling below the 5.50% threshold by December 2025.\n\n## Countervailing Factors\nThe main force pushing against this outcome was the higher-than-expected inflation data early in the year, particularly the strong IPCA print in February [art_general_20250312_004_2ddd57f2]. There were also general market concerns about worsening projections for 2025 [art_general_20241230_002_698747de]. However, these factors were overwhelmed by the central bank's firm commitment to high interest rates, which successfully suppressed long-term inflationary pressures.\n\n## Event Candidate Inventory\n- E1\n    - title: Brazil IPCA inflation exceeds expectations in February\n    - date: 2025-03-12\n    - why it matters causally: Spiked market fears of runaway inflation and caused the temporary \"No\" sentiment.\n    - source article IDs: art_general_20250312_004_2ddd57f2\n- E2\n    - title: Brazil Central Bank commits to rate hikes\n    - date: 2025-02-17\n    - why it matters causally: Showed early commitment to tightening, which eventually cooled inflation.\n    - source article IDs: art_general_20250217_019_0699b04d\n\n## Evidence Mapping Table\n| Claim/Event | Article IDs | Date Support | Confidence (0-1) | Notes |\n|---|---|---|---|---|\n| Central bank tightening cycle | art_general_20250217_019_0699b04d, art_general_20250211_012_cd3a910d | Early 2025 | 0.9 | Strong commitment to rate hikes |\n| Early 2025 inflation spikes | art_general_20250225_011_e1735b5f, art_general_20250312_004_2ddd57f2 | Feb-Mar 2025 | 0.95 | Above-expectation prints caused initial panic |\n\n## Uncertainties And Alternative Paths\nThe major uncertainty was whether the central bank would maintain rates high enough for long enough without breaking the economy. An alternative path would have seen external factors (like global energy prices or severe currency depreciation) overpowering the interest rate hikes, leading to an inflation rate above 5.50%.\n",
    "is_polymarket": true,
    "is_overlap": false,
    "market_open": "2025-03-18T17:12:16.210792+00:00",
    "market_open_estimated": false,
    "market_close": "2026-01-09T21:55:42+00:00",
    "polymarket_url": "https://polymarket.com/event/brazils-12-month-inflation-below-5pt50-for-december-2025",
    "price_data": {
      "history": [
        {
          "t": 1742342405,
          "p": 0.525
        },
        {
          "t": 1742515205,
          "p": 0.33
        },
        {
          "t": 1742731205,
          "p": 0.285
        },
        {
          "t": 1742947205,
          "p": 0.275
        },
        {
          "t": 1743163206,
          "p": 0.24
        },
        {
          "t": 1743379205,
          "p": 0.24
        },
        {
          "t": 1743595205,
          "p": 0.235
        },
        {
          "t": 1743811205,
          "p": 0.37
        },
        {
          "t": 1744027205,
          "p": 0.375
        },
        {
          "t": 1744243205,
          "p": 0.365
        },
        {
          "t": 1744459205,
          "p": 0.37
        },
        {
          "t": 1744675205,
          "p": 0.375
        },
        {
          "t": 1744891205,
          "p": 0.375
        },
        {
          "t": 1745107206,
          "p": 0.355
        },
        {
          "t": 1745323207,
          "p": 0.36
        },
        {
          "t": 1745539206,
          "p": 0.355
        },
        {
          "t": 1745755206,
          "p": 0.365
        },
        {
          "t": 1745971206,
          "p": 0.38
        },
        {
          "t": 1746187206,
          "p": 0.365
        },
        {
          "t": 1746403205,
          "p": 0.37
        },
        {
          "t": 1746619206,
          "p": 0.37
        },
        {
          "t": 1746792007,
          "p": 0.395
        },
        {
          "t": 1747008006,
          "p": 0.38
        },
        {
          "t": 1747224007,
          "p": 0.39
        },
        {
          "t": 1747440007,
          "p": 0.435
        },
        {
          "t": 1747656005,
          "p": 0.435
        },
        {
          "t": 1747872007,
          "p": 0.425
        },
        {
          "t": 1748088006,
          "p": 0.42
        },
        {
          "t": 1748304006,
          "p": 0.445
        },
        {
          "t": 1748520007,
          "p": 0.475
        },
        {
          "t": 1748736007,
          "p": 0.455
        },
        {
          "t": 1748952006,
          "p": 0.455
        },
        {
          "t": 1749168006,
          "p": 0.465
        },
        {
          "t": 1749384007,
          "p": 0.465
        },
        {
          "t": 1749600007,
          "p": 0.455
        },
        {
          "t": 1749816008,
          "p": 0.61
        },
        {
          "t": 1750032007,
          "p": 0.585
        },
        {
          "t": 1750248007,
          "p": 0.56
        },
        {
          "t": 1750464008,
          "p": 0.53
        },
        {
          "t": 1750680007,
          "p": 0.555
        },
        {
          "t": 1750896008,
          "p": 0.545
        },
        {
          "t": 1751068807,
          "p": 0.56
        },
        {
          "t": 1751284807,
          "p": 0.555
        },
        {
          "t": 1751500808,
          "p": 0.61
        },
        {
          "t": 1751716808,
          "p": 0.6
        },
        {
          "t": 1751932808,
          "p": 0.635
        },
        {
          "t": 1752148808,
          "p": 0.725
        },
        {
          "t": 1752364808,
          "p": 0.685
        },
        {
          "t": 1752580808,
          "p": 0.69
        },
        {
          "t": 1752796808,
          "p": 0.725
        },
        {
          "t": 1753012808,
          "p": 0.805
        },
        {
          "t": 1753228809,
          "p": 0.76
        },
        {
          "t": 1753444809,
          "p": 0.77
        },
        {
          "t": 1753660809,
          "p": 0.74
        },
        {
          "t": 1753876809,
          "p": 0.77
        },
        {
          "t": 1754092809,
          "p": 0.74
        },
        {
          "t": 1754308808,
          "p": 0.795
        },
        {
          "t": 1754524808,
          "p": 0.79
        },
        {
          "t": 1754740803,
          "p": 0.785
        },
        {
          "t": 1754956802,
          "p": 0.77
        },
        {
          "t": 1755172809,
          "p": 0.77
        },
        {
          "t": 1755345619,
          "p": 0.775
        },
        {
          "t": 1755561602,
          "p": 0.76
        },
        {
          "t": 1755777614,
          "p": 0.8
        },
        {
          "t": 1755993611,
          "p": 0.77
        },
        {
          "t": 1756209612,
          "p": 0.75
        },
        {
          "t": 1756425606,
          "p": 0.775
        },
        {
          "t": 1756641602,
          "p": 0.78
        },
        {
          "t": 1756857612,
          "p": 0.825
        },
        {
          "t": 1757073625,
          "p": 0.84
        },
        {
          "t": 1757289616,
          "p": 0.855
        },
        {
          "t": 1757505603,
          "p": 0.85
        },
        {
          "t": 1757721608,
          "p": 0.825
        },
        {
          "t": 1757937632,
          "p": 0.845
        },
        {
          "t": 1758153604,
          "p": 0.845
        },
        {
          "t": 1758369626,
          "p": 0.845
        },
        {
          "t": 1758585608,
          "p": 0.885
        },
        {
          "t": 1758801614,
          "p": 0.87
        },
        {
          "t": 1759017608,
          "p": 0.855
        },
        {
          "t": 1759233609,
          "p": 0.865
        },
        {
          "t": 1759449608,
          "p": 0.9
        },
        {
          "t": 1759622404,
          "p": 0.88
        },
        {
          "t": 1759838416,
          "p": 0.915
        },
        {
          "t": 1760054414,
          "p": 0.865
        },
        {
          "t": 1760270402,
          "p": 0.88
        },
        {
          "t": 1760486408,
          "p": 0.885
        },
        {
          "t": 1760702423,
          "p": 0.92
        },
        {
          "t": 1760918422,
          "p": 0.9
        },
        {
          "t": 1761134410,
          "p": 0.92
        },
        {
          "t": 1761350409,
          "p": 0.9
        },
        {
          "t": 1761566408,
          "p": 0.92
        },
        {
          "t": 1761825608,
          "p": 0.94
        },
        {
          "t": 1762041608,
          "p": 0.95
        },
        {
          "t": 1762257609,
          "p": 0.955
        },
        {
          "t": 1762473607,
          "p": 0.935
        },
        {
          "t": 1762689608,
          "p": 0.935
        },
        {
          "t": 1762905610,
          "p": 0.9795
        },
        {
          "t": 1763121610,
          "p": 0.979
        },
        {
          "t": 1763337608,
          "p": 0.9715
        },
        {
          "t": 1763553610,
          "p": 0.9645
        },
        {
          "t": 1763769608,
          "p": 0.9745
        },
        {
          "t": 1763942410,
          "p": 0.976
        },
        {
          "t": 1764158424,
          "p": 0.9685
        },
        {
          "t": 1764374411,
          "p": 0.966
        },
        {
          "t": 1764590421,
          "p": 0.9625
        },
        {
          "t": 1764806409,
          "p": 0.9715
        },
        {
          "t": 1765022410,
          "p": 0.971
        },
        {
          "t": 1765238419,
          "p": 0.9515
        },
        {
          "t": 1765454410,
          "p": 0.9825
        },
        {
          "t": 1765670410,
          "p": 0.9705
        },
        {
          "t": 1765886420,
          "p": 0.9925
        },
        {
          "t": 1766059209,
          "p": 0.9935
        },
        {
          "t": 1766275209,
          "p": 0.9915
        },
        {
          "t": 1766491210,
          "p": 0.9905
        },
        {
          "t": 1766707208,
          "p": 0.9895
        },
        {
          "t": 1766923211,
          "p": 0.9885
        },
        {
          "t": 1767139210,
          "p": 0.9905
        },
        {
          "t": 1767355210,
          "p": 0.9965
        },
        {
          "t": 1767571212,
          "p": 0.995
        },
        {
          "t": 1767787215,
          "p": 0.996
        }
      ],
      "turning_points": [
        {
          "t": 1742385605,
          "p": 0.355,
          "delta": -0.17
        },
        {
          "t": 1742601606,
          "p": 0.275,
          "delta": -0.08
        },
        {
          "t": 1743724805,
          "p": 0.375,
          "delta": 0.1
        },
        {
          "t": 1747051206,
          "p": 0.43,
          "delta": 0.055
        },
        {
          "t": 1749643207,
          "p": 0.605,
          "delta": 0.175
        },
        {
          "t": 1750291207,
          "p": 0.535,
          "delta": -0.07
        },
        {
          "t": 1751328008,
          "p": 0.655,
          "delta": 0.12
        },
        {
          "t": 1751414407,
          "p": 0.585,
          "delta": -0.07
        },
        {
          "t": 1751932808,
          "p": 0.635,
          "delta": 0.05
        },
        {
          "t": 1752019207,
          "p": 0.715,
          "delta": 0.08
        },
        {
          "t": 1752235209,
          "p": 0.605,
          "delta": -0.11
        },
        {
          "t": 1752278409,
          "p": 0.695,
          "delta": 0.09
        },
        {
          "t": 1752840008,
          "p": 0.765,
          "delta": 0.07
        },
        {
          "t": 1754352008,
          "p": 0.82,
          "delta": 0.055
        },
        {
          "t": 1754611202,
          "p": 0.7,
          "delta": -0.12
        },
        {
          "t": 1754697613,
          "p": 0.785,
          "delta": 0.085
        },
        {
          "t": 1756036810,
          "p": 0.735,
          "delta": -0.05
        },
        {
          "t": 1756080014,
          "p": 0.8,
          "delta": 0.065
        },
        {
          "t": 1756209612,
          "p": 0.75,
          "delta": -0.05
        },
        {
          "t": 1756339202,
          "p": 0.8,
          "delta": 0.05
        },
        {
          "t": 1757030404,
          "p": 0.86,
          "delta": 0.06
        },
        {
          "t": 1759795206,
          "p": 0.915,
          "delta": 0.055
        },
        {
          "t": 1760054414,
          "p": 0.865,
          "delta": -0.05
        },
        {
          "t": 1760659210,
          "p": 0.925,
          "delta": 0.06
        },
        {
          "t": 1761436808,
          "p": 0.86,
          "delta": -0.065
        },
        {
          "t": 1761523208,
          "p": 0.92,
          "delta": 0.06
        },
        {
          "t": 1762732806,
          "p": 0.9755,
          "delta": 0.0555
        },
        {
          "t": 1763424007,
          "p": 0.891,
          "delta": -0.0845
        },
        {
          "t": 1763510409,
          "p": 0.9645,
          "delta": 0.0735
        },
        {
          "t": 1766404808,
          "p": 0.88,
          "delta": -0.0845
        },
        {
          "t": 1766448010,
          "p": 0.9905,
          "delta": 0.1105
        }
      ],
      "price_at_open": 0.525,
      "price_at_close": 0.9985,
      "min_price": 0.235,
      "max_price": 0.9985,
      "final_price": 0.9985,
      "fetched_at": "2026-04-27T07:57:53.235835+00:00"
    },
    "events": [
      {
        "id": "evt_finance_20250826_007_0b276b90",
        "date": "2025-08-26 12:53",
        "title": "Brazil's Mid-Month Inflation Index Posts First Drop in Two Years",
        "description": "Brazil's Mid-Month Inflation Index Posts First Drop in Two Years.",
        "impact": "**Affects:** Yes - Brazil’s 12-month inflation below 5.50% for Decemb  \n\n**Direction:** Towards outcome    \n\n**Reasoning:**\nInflation dropping made the outcome more likely.",
        "has_impact": true,
        "in_market_window": true,
        "source_url": "https://money.usnews.com/investing/news/articles/2025-08-26/brazils-mid-month-inflation-index-posts-first-drop-in-two-years",
        "current_status": "pending",
        "reasoning_status": null,
        "reject_reason": null
      },
      {
        "id": "evt_finance_20251230_008_10c58b8f",
        "date": "2025-12-30 13:59",
        "title": "Brazil inflation forecasts ease as central bank holds rates high",
        "description": "Brazil inflation forecasts ease as central bank holds rates high.",
        "impact": "**Affects:** Yes - Brazil’s 12-month inflation below 5.50% for Decemb  \n\n**Direction:** Towards outcome    \n\n**Reasoning:**\nEasing forecasts made the outcome more likely.",
        "has_impact": true,
        "in_market_window": true,
        "source_url": "https://www.msn.com/en-us/money/economy/brazil-inflation-forecasts-ease-as-central-bank-holds-rates-high-report/ar-AA1ThQzp",
        "current_status": "pending",
        "reasoning_status": null,
        "reject_reason": null
      },
      {
        "id": "evt_finance_20240607_006_bfaeee43",
        "date": "2024-06-07 16:44",
        "title": "Central Bank aligned over concern about market inflation expectations",
        "description": "Central Bank aligned over concern about market inflation expectations.",
        "impact": "**Affects:** Yes - Brazil’s 12-month inflation below 5.50% for Decemb  \n\n**Direction:** Towards outcome    \n\n**Reasoning:**\nCentral Bank concern aligned with tightening, making outcome more likely.",
        "has_impact": true,
        "in_market_window": false,
        "source_url": "https://money.usnews.com/investing/news/articles/2024-06-07/brazil-central-bank-aligned-over-concern-about-market-inflation-expectations",
        "current_status": "pending",
        "reasoning_status": null,
        "reject_reason": null
      },
      {
        "id": "evt_finance_20241230_001_5f3f2dad",
        "date": "2024-12-30 00:00",
        "title": "Financial markets adjust 2025 projections for the worse",
        "description": "Brazil's financial markets adjust 2025 projections for the worse, raising concerns about inflation.",
        "impact": "**Affects:** Yes - Brazil’s 12-month inflation below 5.50% for Decemb  \n\n**Direction:** Against outcome    \n\n**Reasoning:**\nWorsening projections made the outcome less likely.",
        "has_impact": true,
        "in_market_window": false,
        "source_url": "https://en.mercopress.com/2024/12/30/brazil-s-financial-markets-adjust-2025-projections-for-the-worse",
        "current_status": "pending",
        "reasoning_status": null,
        "reject_reason": null
      },
      {
        "id": "evt_finance_20250211_002_cd508cc3",
        "date": "2025-02-11 13:58",
        "title": "Brazil's inflation shows signs of slowing but tightening cycle to continue",
        "description": "Brazil's inflation showed signs of slowing but the central bank indicated the tightening cycle would continue.",
        "impact": "**Affects:** Yes - Brazil’s 12-month inflation below 5.50% for Decemb  \n\n**Direction:** Towards outcome    \n\n**Reasoning:**\nSigns of slowing inflation made the outcome more likely.",
        "has_impact": true,
        "in_market_window": false,
        "source_url": "https://money.usnews.com/investing/news/articles/2025-02-11/brazils-inflation-slows-in-january-but-tightening-cycle-to-continue",
        "current_status": "pending",
        "reasoning_status": null,
        "reject_reason": null
      },
      {
        "id": "evt_finance_20250217_003_3a1d7528",
        "date": "2025-02-17 15:19",
        "title": "Central Bank director reiterates upcoming 100 basis-point hike",
        "description": "The Central Bank director reiterated an upcoming 100 basis-point hike.",
        "impact": "**Affects:** Yes - Brazil’s 12-month inflation below 5.50% for Decemb  \n\n**Direction:** Towards outcome    \n\n**Reasoning:**\nCommitment to rate hikes made the outcome more likely.",
        "has_impact": true,
        "in_market_window": false,
        "source_url": "https://money.usnews.com/investing/news/articles/2025-02-17/brazil-central-bank-director-reiterates-upcoming-100-basis-point-hike",
        "current_status": "pending",
        "reasoning_status": null,
        "reject_reason": null
      },
      {
        "id": "evt_finance_20250217_010_f1cc9c56",
        "date": "2025-02-17 15:19",
        "title": "Market sentiment flips back to Yes as effects of tightening cycle take hold",
        "description": "Market sentiment flipped back to Yes as the effects of the tightening cycle began to take hold.",
        "impact": "**Affects:** Yes - Brazil’s 12-month inflation below 5.50% for Decemb  \n\n**Direction:** Towards outcome    \n\n**Reasoning:**\nMarket sentiment flipping to Yes made the outcome more likely.",
        "has_impact": true,
        "in_market_window": false,
        "source_url": "https://money.usnews.com/investing/news/articles/2025-02-17/brazil-central-bank-director-reiterates-upcoming-100-basis-point-hike",
        "current_status": "pending",
        "reasoning_status": null,
        "reject_reason": null
      },
      {
        "id": "evt_finance_20250225_004_1760598f",
        "date": "2025-02-25 12:38",
        "title": "Brazil's Inflation Index posts largest monthly rise since early 2022",
        "description": "Brazil's Inflation Index posted the largest monthly rise since early 2022.",
        "impact": "**Affects:** Yes - Brazil’s 12-month inflation below 5.50% for Decemb  \n\n**Direction:** Against outcome    \n\n**Reasoning:**\nLargest monthly rise made the outcome less likely.",
        "has_impact": true,
        "in_market_window": false,
        "source_url": "https://money.usnews.com/investing/news/articles/2025-02-25/brazils-inflation-index-posts-largest-monthly-rise-since-early-2022",
        "current_status": "pending",
        "reasoning_status": null,
        "reject_reason": null
      },
      {
        "id": "evt_finance_20250312_005_18b149bd",
        "date": "2025-03-12 12:01",
        "title": "Brazil IPCA inflation comes in at 1.31% in February",
        "description": "Brazil IPCA inflation came in at 1.31% in February, above expectations.",
        "impact": "**Affects:** Yes - Brazil’s 12-month inflation below 5.50% for Decemb  \n\n**Direction:** Against outcome    \n\n**Reasoning:**\nHigh IPCA inflation made the outcome less likely.",
        "has_impact": true,
        "in_market_window": false,
        "source_url": "https://www.fxstreet.com/news/brazil-ipca-inflation-came-in-at-131-above-expectations-13-in-february-202503121200",
        "current_status": "pending",
        "reasoning_status": null,
        "reject_reason": null
      },
      {
        "id": "evt_finance_20250312_009_dd07e241",
        "date": "2025-03-12 12:01",
        "title": "Market sentiment flips towards No due to high early inflation prints",
        "description": "Market sentiment flipped towards No due to the high early inflation prints.",
        "impact": "**Affects:** Yes - Brazil’s 12-month inflation below 5.50% for Decemb  \n\n**Direction:** Against outcome    \n\n**Reasoning:**\nMarket sentiment flipping to No made the outcome less likely.",
        "has_impact": true,
        "in_market_window": false,
        "source_url": "https://www.fxstreet.com/news/brazil-ipca-inflation-came-in-at-131-above-expectations-13-in-february-202503121200",
        "current_status": "pending",
        "reasoning_status": null,
        "reject_reason": null
      }
    ]
  },
  {
    "id": "polymarket_0x568d8473306b30e9e6251244328311c55219febd03debbbd86ba5a8dc6be3eb5",
    "title": "Will the new U.S. Air Force One (VC-25B) aircraft be delivered and enter service during 2025?",
    "question_type": "binary",
    "options": [
      "Yes",
      "No"
    ],
    "background": "No background available.",
    "resolution_criteria": "This market will resolve to \"Yes\" if a new Air Force One aircraft is put into official service by the US Air Force between February 19 and December 31, 2025, 11:59 PM ET. Otherwise, this market will resolve to \"No\".\n\n\"Air Force One\" refers to any aircraft built to replace one or both of the VC-25s presently used as the primary presidential aircrafts.\n\nThe primary resolution source for this market will be official information from the US government, however a consensus of credible reporting will also be used.",
    "outcome": "No",
    "explanation": "\n# Executive Summary\nThe U.S. Air Force One (VC-25B) aircraft failed to be delivered and enter service during 2025 due to massive, cascading delays in Boeing's production pipeline. Root causes included severe supply chain constraints, workforce shortages, and significant design failures that compounded into billions of dollars in cost overruns on their fixed-price contract. The delivery timeline was officially pushed to 2027 or 2028, completely ruling out 2025. Consequently, the US administration was forced to pivot to interim alternatives, including accepting a gifted Boeing 747-8 from Qatar and purchasing commercial jets from Lufthansa to bridge the capability gap.\n\n# Timeline Of Key Events\n- **March 24, 2025:** Reports emerge from the White House indicating that Boeing's Air Force One program could face catastrophic delays, potentially pushing delivery to 2029 or later ([art_general_20250324_036_48cb8662]).\n- **May 9, 2025:** Boeing officially updates its schedule, announcing it plans to deliver the new Air Force One jets in 2027 at the earliest, and even then, only if certain stringent requirements are relaxed ([art_business_20250509_002_04837817], [art_politics_20250509_003_5344113d]). This announcement triggers a decisive market shift against a 2025 delivery.\n- **May 11, 2025:** In response to the confirmed delays, the Trump administration signals it will accept a gifted Boeing 747-8 from Qatar to serve as an interim 'palace in the sky' ([art_general_20250511_012_3f5f0282]).\n- **December 24, 2025:** Confirming the long-term nature of the delay, it is widely reported that Boeing's revised expectation for delivery is 2028. Meanwhile, the Air Force purchases two additional 747-800 planes from Lufthansa to undergo modifications for backup presidential transport ([art_general_20251224_034_036a3ebc]).\n\n# Causal Chain Analysis\n- **Root Causes:** Boeing suffered from deep-seated, systemic manufacturing challenges, encompassing severe supply chain constraints, workforce woes, and design failures that stemmed from broader company-wide production and quality control issues ([art_general_20251224_034_036a3ebc]).\n- **Intermediate Mechanisms:** Because the VC-25B program operates under a firm fixed-price contract, these manufacturing bottlenecks resulted in staggering financial losses for Boeing's defense unit, slowing down development, retrofitting, and testing of the highly customized presidential aircraft.\n- **Proximate Triggers:** By May 2025, Boeing and the Air Force acknowledged that completing the extensive security, navigation, and countermeasure modifications by 2025 was a physical impossibility. Boeing publicly shifted the timeline to 2027/2028 ([art_business_20250509_002_04837817]).\n- **Final Outcome:** With the VC-25B delivery in 2025 completely ruled out, the administration pivoted to stop-gap measures (acquiring the Qatari and Lufthansa jets) to ensure presidential transport needs were met, definitively resolving the question in the negative.\n\n# Countervailing Factors\n- **Presidential Pressure:** Early in 2025, President Trump exerted significant public pressure on Boeing, expressing deep dissatisfaction with the delays and attempting to force an accelerated timeline. However, this pressure failed to overcome the stubborn engineering realities, complex security modification requirements, and supply chain physics governing the program.\n\n# Event Candidate Inventory\n- **E1:** Boeing announces official delay of VC-25B delivery to 2027 or 2028.\n  - Date: May 9, 2025\n  - Why it matters causally: This was the definitive public admission that a 2025 delivery was impossible, serving as the proximate trigger that shifted market sentiment.\n  - Source article IDs: [art_business_20250509_002_04837817], [art_politics_20250509_003_5344113d]\n- **E2:** Trump administration accepts Qatari 747-8 as an interim aircraft.\n  - Date: May 11, 2025\n  - Why it matters causally: Confirmed the administration's acceptance that the VC-25B would not be ready, prompting them to seek alternative aircraft.\n  - Source article IDs: [art_general_20250511_012_3f5f0282]\n- **E3:** US Air Force purchases two Lufthansa 747-8s for backup.\n  - Date: Late 2025 (Dec 24, 2025)\n  - Why it matters causally: Represents the final institutional workaround to cope with the reality of a multi-year delay pushing delivery to 2028.\n  - Source article IDs: [art_general_20251224_034_036a3ebc]\n\n# Evidence Mapping Table\n| Claim/Event | Article IDs | Date Support | Confidence (0-1) | Notes |\n| --- | --- | --- | --- | --- |\n| Boeing announces delay to 2027/2028 | [art_business_20250509_002_04837817], [art_politics_20250509_003_5344113d] | May 9, 2025 | 1.0 | Key market turning point. |\n| Administration accepts Qatari 747 gift | [art_general_20250511_012_3f5f0282] | May 11, 2025 | 0.95 | Stopgap measure. |\n| Air Force buys Lufthansa planes; delivery pushed to 2028 | [art_general_20251224_034_036a3ebc] | Dec 24, 2025 | 1.0 | Final confirmation of long-term delay. |\n\n# Uncertainties And Alternative Paths\n- **Unresolved uncertainty:** The exact final delivery date remains uncertain, with estimates ranging from 2027 to 2029 depending on whether the Air Force relaxes certain technical requirements.\n- **Plausible alternative path:** Had Boeing successfully managed to streamline its supply chain and mitigate its workforce issues, or had the Air Force dramatically reduced its highly classified security requirements earlier, the original timeline could have theoretically been maintained.\n",
    "is_polymarket": true,
    "is_overlap": false,
    "market_open": "2025-02-20T20:36:04.988817+00:00",
    "market_open_estimated": false,
    "market_close": "2026-01-01T08:44:47+00:00",
    "polymarket_url": "https://polymarket.com/event/new-air-force-one-in-2025",
    "price_data": {
      "history": [
        {
          "t": 1740096005,
          "p": 0.15
        },
        {
          "t": 1740312004,
          "p": 0.145
        },
        {
          "t": 1740528005,
          "p": 0.125
        },
        {
          "t": 1740744005,
          "p": 0.115
        },
        {
          "t": 1740960005,
          "p": 0.115
        },
        {
          "t": 1741219205,
          "p": 0.115
        },
        {
          "t": 1741435204,
          "p": 0.115
        },
        {
          "t": 1741651205,
          "p": 0.115
        },
        {
          "t": 1741867205,
          "p": 0.095
        },
        {
          "t": 1742126404,
          "p": 0.09
        },
        {
          "t": 1742342405,
          "p": 0.1
        },
        {
          "t": 1742558406,
          "p": 0.1
        },
        {
          "t": 1742774405,
          "p": 0.1
        },
        {
          "t": 1743033606,
          "p": 0.1
        },
        {
          "t": 1743249606,
          "p": 0.1
        },
        {
          "t": 1743465605,
          "p": 0.1
        },
        {
          "t": 1743681606,
          "p": 0.1
        },
        {
          "t": 1743940805,
          "p": 0.1
        },
        {
          "t": 1744156806,
          "p": 0.1
        },
        {
          "t": 1744372806,
          "p": 0.1
        },
        {
          "t": 1744588805,
          "p": 0.1
        },
        {
          "t": 1744848006,
          "p": 0.1
        },
        {
          "t": 1745064006,
          "p": 0.1
        },
        {
          "t": 1745280006,
          "p": 0.1
        },
        {
          "t": 1745496006,
          "p": 0.1
        },
        {
          "t": 1745755206,
          "p": 0.105
        },
        {
          "t": 1745971206,
          "p": 0.105
        },
        {
          "t": 1746187206,
          "p": 0.105
        },
        {
          "t": 1746403205,
          "p": 0.105
        },
        {
          "t": 1746662406,
          "p": 0.105
        },
        {
          "t": 1746878406,
          "p": 0.415
        },
        {
          "t": 1747094406,
          "p": 0.29
        },
        {
          "t": 1747310407,
          "p": 0.285
        },
        {
          "t": 1747526406,
          "p": 0.24
        },
        {
          "t": 1747785606,
          "p": 0.285
        },
        {
          "t": 1748001607,
          "p": 0.18
        },
        {
          "t": 1748217607,
          "p": 0.19
        },
        {
          "t": 1748433607,
          "p": 0.155
        },
        {
          "t": 1748692807,
          "p": 0.175
        },
        {
          "t": 1748908807,
          "p": 0.17
        },
        {
          "t": 1749124806,
          "p": 0.165
        },
        {
          "t": 1749340807,
          "p": 0.165
        },
        {
          "t": 1749600007,
          "p": 0.165
        },
        {
          "t": 1749816008,
          "p": 0.165
        },
        {
          "t": 1750032007,
          "p": 0.165
        },
        {
          "t": 1750248007,
          "p": 0.16
        },
        {
          "t": 1750507208,
          "p": 0.12
        },
        {
          "t": 1750723207,
          "p": 0.12
        },
        {
          "t": 1750939207,
          "p": 0.115
        },
        {
          "t": 1751155208,
          "p": 0.09
        },
        {
          "t": 1751414407,
          "p": 0.09
        },
        {
          "t": 1751630407,
          "p": 0.085
        },
        {
          "t": 1751846407,
          "p": 0.09
        },
        {
          "t": 1752062408,
          "p": 0.08
        },
        {
          "t": 1752321608,
          "p": 0.09
        },
        {
          "t": 1752537608,
          "p": 0.09
        },
        {
          "t": 1752753607,
          "p": 0.09
        },
        {
          "t": 1752969608,
          "p": 0.09
        },
        {
          "t": 1753228809,
          "p": 0.09
        },
        {
          "t": 1753444809,
          "p": 0.085
        },
        {
          "t": 1753660809,
          "p": 0.21
        },
        {
          "t": 1753876809,
          "p": 0.15
        },
        {
          "t": 1754092809,
          "p": 0.115
        },
        {
          "t": 1754352008,
          "p": 0.135
        },
        {
          "t": 1754568007,
          "p": 0.135
        },
        {
          "t": 1754784002,
          "p": 0.135
        },
        {
          "t": 1755000008,
          "p": 0.13
        },
        {
          "t": 1755259214,
          "p": 0.13
        },
        {
          "t": 1755475203,
          "p": 0.13
        },
        {
          "t": 1755691211,
          "p": 0.13
        },
        {
          "t": 1755907206,
          "p": 0.125
        },
        {
          "t": 1756166407,
          "p": 0.12
        },
        {
          "t": 1756382421,
          "p": 0.12
        },
        {
          "t": 1756598409,
          "p": 0.12
        },
        {
          "t": 1756814416,
          "p": 0.12
        },
        {
          "t": 1757073623,
          "p": 0.115
        },
        {
          "t": 1757289602,
          "p": 0.12
        },
        {
          "t": 1757505609,
          "p": 0.085
        },
        {
          "t": 1757721610,
          "p": 0.085
        },
        {
          "t": 1757980817,
          "p": 0.085
        },
        {
          "t": 1758196802,
          "p": 0.085
        },
        {
          "t": 1758412806,
          "p": 0.085
        },
        {
          "t": 1758628812,
          "p": 0.085
        },
        {
          "t": 1758888003,
          "p": 0.085
        },
        {
          "t": 1759104009,
          "p": 0.085
        },
        {
          "t": 1759320014,
          "p": 0.06
        },
        {
          "t": 1759536009,
          "p": 0.06
        },
        {
          "t": 1759795210,
          "p": 0.06
        },
        {
          "t": 1760011202,
          "p": 0.07
        },
        {
          "t": 1760227217,
          "p": 0.075
        },
        {
          "t": 1760443214,
          "p": 0.075
        },
        {
          "t": 1760659207,
          "p": 0.075
        },
        {
          "t": 1760918409,
          "p": 0.08
        },
        {
          "t": 1761134425,
          "p": 0.075
        },
        {
          "t": 1761350415,
          "p": 0.075
        },
        {
          "t": 1761566419,
          "p": 0.075
        },
        {
          "t": 1761868812,
          "p": 0.065
        },
        {
          "t": 1762084820,
          "p": 0.065
        },
        {
          "t": 1762300818,
          "p": 0.065
        },
        {
          "t": 1762516823,
          "p": 0.055
        },
        {
          "t": 1762776020,
          "p": 0.0415
        },
        {
          "t": 1762992017,
          "p": 0.037
        },
        {
          "t": 1763208026,
          "p": 0.0365
        },
        {
          "t": 1763424014,
          "p": 0.045
        },
        {
          "t": 1763683222,
          "p": 0.045
        },
        {
          "t": 1763899214,
          "p": 0.0365
        },
        {
          "t": 1764115215,
          "p": 0.0365
        },
        {
          "t": 1764331227,
          "p": 0.031
        },
        {
          "t": 1764590435,
          "p": 0.031
        },
        {
          "t": 1764806414,
          "p": 0.0565
        },
        {
          "t": 1765022418,
          "p": 0.046
        },
        {
          "t": 1765238426,
          "p": 0.0585
        },
        {
          "t": 1765497615,
          "p": 0.043
        },
        {
          "t": 1765713617,
          "p": 0.0095
        },
        {
          "t": 1765929613,
          "p": 0.007
        },
        {
          "t": 1766102415,
          "p": 0.007
        },
        {
          "t": 1766361615,
          "p": 0.0065
        },
        {
          "t": 1766577617,
          "p": 0.0065
        },
        {
          "t": 1766793616,
          "p": 0.006
        },
        {
          "t": 1767009617,
          "p": 0.0045
        }
      ],
      "turning_points": [
        {
          "t": 1741867205,
          "p": 0.095,
          "delta": -0.055
        },
        {
          "t": 1746792007,
          "p": 0.5,
          "delta": 0.405
        },
        {
          "t": 1746878406,
          "p": 0.415,
          "delta": -0.085
        },
        {
          "t": 1746964807,
          "p": 0.295,
          "delta": -0.12
        },
        {
          "t": 1747008006,
          "p": 0.35,
          "delta": 0.055
        },
        {
          "t": 1747051206,
          "p": 0.245,
          "delta": -0.105
        },
        {
          "t": 1747137607,
          "p": 0.35,
          "delta": 0.105
        },
        {
          "t": 1747310407,
          "p": 0.285,
          "delta": -0.065
        },
        {
          "t": 1747440007,
          "p": 0.39,
          "delta": 0.105
        },
        {
          "t": 1747526406,
          "p": 0.24,
          "delta": -0.15
        },
        {
          "t": 1747569607,
          "p": 0.385,
          "delta": 0.145
        },
        {
          "t": 1747612806,
          "p": 0.315,
          "delta": -0.07
        },
        {
          "t": 1747915206,
          "p": 0.195,
          "delta": -0.12
        },
        {
          "t": 1750507208,
          "p": 0.12,
          "delta": -0.075
        },
        {
          "t": 1753488009,
          "p": 0.305,
          "delta": 0.185
        },
        {
          "t": 1753531210,
          "p": 0.225,
          "delta": -0.08
        },
        {
          "t": 1753790408,
          "p": 0.165,
          "delta": -0.06
        },
        {
          "t": 1754092809,
          "p": 0.115,
          "delta": -0.05
        },
        {
          "t": 1759233615,
          "p": 0.065,
          "delta": -0.05
        },
        {
          "t": 1764201618,
          "p": 0.014,
          "delta": -0.051
        },
        {
          "t": 1764374423,
          "p": 0.0645,
          "delta": 0.0505
        },
        {
          "t": 1765584017,
          "p": 0.0125,
          "delta": -0.052
        }
      ],
      "price_at_open": 0.15,
      "price_at_close": 0.0025,
      "min_price": 0.0025,
      "max_price": 0.5,
      "final_price": 0.0025,
      "fetched_at": "2026-04-20T17:08:06.242808+00:00"
    },
    "events": [
      {
        "id": "evt_business_20250508_007_2eafdb7e",
        "date": "2025-05-08 12:00",
        "title": "Boeing announces official delay of VC-25B delivery to 2027 or 2028",
        "description": "Boeing officially updates its schedule, announcing it plans to deliver the new Air Force One jets in 2027 at the earliest.",
        "impact": "**Affects:** Yes - Will the new U.S. Air Force One (VC-25B) aircraft   \n\n**Direction:** Against outcome    \n\n**Reasoning:**\nOfficial delay completely ruled out 2025 delivery.",
        "has_impact": true,
        "in_market_window": true,
        "source_url": "https://www.cnn.com/2025/05/08/business/boeing-trump-air-force-one",
        "current_status": "pending",
        "reasoning_status": null,
        "reject_reason": null
      },
      {
        "id": "evt_politics_20250511_008_84edb842",
        "date": "2025-05-11 10:00",
        "title": "Trump administration accepts Qatari 747-8 as an interim aircraft",
        "description": "The Trump administration signals it will accept a gifted Boeing 747-8 from Qatar to serve as an interim aircraft.",
        "impact": "**Affects:** Yes - Will the new U.S. Air Force One (VC-25B) aircraft   \n\n**Direction:** Against outcome    \n\n**Reasoning:**\nAccepting interim aircraft confirms 2025 delivery won't happen.",
        "has_impact": true,
        "in_market_window": true,
        "source_url": "https://abcnews.go.com/Politics/trump-administration-poised-accept-palace-sky-gift-trump/story?id=121680511",
        "current_status": "pending",
        "reasoning_status": null,
        "reject_reason": null
      },
      {
        "id": "evt_business_20250324_002_1a28bb9d",
        "date": "2025-03-24 12:00",
        "title": "Boeing suffers from severe supply chain constraints",
        "description": "Boeing suffers from deep-seated, systemic manufacturing challenges, encompassing severe supply chain constraints.",
        "impact": "**Affects:** Yes - Will the new U.S. Air Force One (VC-25B) aircraft   \n\n**Direction:** Against outcome    \n\n**Reasoning:**\nSupply chain constraints hindered timely delivery.",
        "has_impact": true,
        "in_market_window": true,
        "source_url": "https://www.yahoo.com/news/boeings-air-force-one-program-184242644.html?fr=sycsrp_catchall",
        "current_status": "pending",
        "reasoning_status": null,
        "reject_reason": null
      },
      {
        "id": "evt_business_20250324_003_805814d0",
        "date": "2025-03-24 12:00",
        "title": "Boeing experiences workforce shortages",
        "description": "Boeing suffers from workforce woes.",
        "impact": "**Affects:** Yes - Will the new U.S. Air Force One (VC-25B) aircraft   \n\n**Direction:** Against outcome    \n\n**Reasoning:**\nWorkforce shortages hindered timely delivery.",
        "has_impact": true,
        "in_market_window": true,
        "source_url": "https://www.yahoo.com/news/boeings-air-force-one-program-184242644.html?fr=sycsrp_catchall",
        "current_status": "pending",
        "reasoning_status": null,
        "reject_reason": null
      },
      {
        "id": "evt_business_20250324_004_798c7e55",
        "date": "2025-03-24 12:00",
        "title": "Boeing experiences significant design failures",
        "description": "Boeing suffers from design failures that stemmed from broader company-wide production and quality control issues.",
        "impact": "**Affects:** Yes - Will the new U.S. Air Force One (VC-25B) aircraft   \n\n**Direction:** Against outcome    \n\n**Reasoning:**\nDesign failures hindered timely delivery.",
        "has_impact": true,
        "in_market_window": true,
        "source_url": "https://www.yahoo.com/news/boeings-air-force-one-program-184242644.html?fr=sycsrp_catchall",
        "current_status": "pending",
        "reasoning_status": null,
        "reject_reason": null
      },
      {
        "id": "evt_finance_20250324_009_10f7d23d",
        "date": "2025-03-24 12:00",
        "title": "Boeing's defense unit suffers staggering financial losses",
        "description": "Manufacturing bottlenecks resulted in staggering financial losses for Boeing's defense unit on the fixed-price contract.",
        "impact": "**Affects:** Yes - Will the new U.S. Air Force One (VC-25B) aircraft   \n\n**Direction:** Against outcome    \n\n**Reasoning:**\nFinancial losses slowed down the project.",
        "has_impact": true,
        "in_market_window": true,
        "source_url": "https://www.yahoo.com/news/boeings-air-force-one-program-184242644.html?fr=sycsrp_catchall",
        "current_status": "pending",
        "reasoning_status": null,
        "reject_reason": null
      },
      {
        "id": "evt_tech_20250324_010_c2568ed9",
        "date": "2025-03-24 12:00",
        "title": "Development, retrofitting, and testing of the VC-25B slows down",
        "description": "Financial losses and manufacturing bottlenecks slow down development, retrofitting, and testing of the highly customized presidential aircraft.",
        "impact": "**Affects:** Yes - Will the new U.S. Air Force One (VC-25B) aircraft   \n\n**Direction:** Against outcome    \n\n**Reasoning:**\nSlow development directly delayed the delivery.",
        "has_impact": true,
        "in_market_window": true,
        "source_url": "https://www.yahoo.com/news/boeings-air-force-one-program-184242644.html?fr=sycsrp_catchall",
        "current_status": "pending",
        "reasoning_status": null,
        "reject_reason": null
      },
      {
        "id": "evt_politics_20250501_005_56693bf1",
        "date": "2025-05-01 12:00",
        "title": "Boeing and the Air Force acknowledge completing modifications by 2025 is impossible",
        "description": "Boeing and the Air Force acknowledge that completing the extensive security, navigation, and countermeasure modifications by 2025 was a physical impossibility.",
        "impact": "**Affects:** Yes - Will the new U.S. Air Force One (VC-25B) aircraft   \n\n**Direction:** Against outcome    \n\n**Reasoning:**\nAcknowledgment of impossibility confirmed the delay.",
        "has_impact": true,
        "in_market_window": true,
        "source_url": "https://www.cnn.com/2025/05/08/business/boeing-trump-air-force-one",
        "current_status": "pending",
        "reasoning_status": null,
        "reject_reason": null
      },
      {
        "id": "evt_politics_20251224_001_275158f0",
        "date": "2025-12-24 12:00",
        "title": "US Air Force purchases two Lufthansa 747-8s for backup",
        "description": "The Air Force purchases two additional 747-800 planes from Lufthansa to undergo modifications for backup presidential transport.",
        "impact": "**Affects:** Yes - Will the new U.S. Air Force One (VC-25B) aircraft   \n\n**Direction:** Against outcome    \n\n**Reasoning:**\nPurchasing backup aircraft confirms long-term delay.",
        "has_impact": true,
        "in_market_window": true,
        "source_url": "https://www.yahoo.com/news/articles/boeings-long-delayed-air-force-204500690.html?fr=sycsrp_catchall",
        "current_status": "pending",
        "reasoning_status": null,
        "reject_reason": null
      },
      {
        "id": "evt_politics_20250215_006_6c2fb9d1",
        "date": "2025-02-15 12:00",
        "title": "President Trump exerts significant public pressure on Boeing",
        "description": "President Trump exerts significant public pressure on Boeing, expressing deep dissatisfaction with the delays.",
        "impact": "**Affects:** Yes - Will the new U.S. Air Force One (VC-25B) aircraft   \n\n**Direction:** Towards outcome    \n\n**Reasoning:**\nPresidential pressure attempted to accelerate the timeline, pushing towards a 2025 delivery.",
        "has_impact": true,
        "in_market_window": false,
        "source_url": "https://www.yahoo.com/news/boeings-air-force-one-program-184242644.html?fr=sycsrp_catchall",
        "current_status": "pending",
        "reasoning_status": null,
        "reject_reason": null
      }
    ]
  }
];
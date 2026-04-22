(() => {
  const ownShipNames = [
    "MV Solway Crest",
    "MT Calder Vale",
    "MV Rowan",
    "MV Cormorant",
    "MV Brora",
    "MV Haven Point",
    "MV Kestrel Dawn",
    "MV Tern Point",
    "MV Forth Trader",
    "MV Petrel",
    "MV Seaward",
    "MV Moorland",
    "MV Northgate",
    "MV Alder Reach",
    "MV Cairnmore",
    "MV Islay Dawn",
    "MV Hartwell",
    "MV Lydford",
    "MV Stroma",
    "MV Pennant",
  ];

  const targetShipNames = [
    "FV Lantern Rock",
    "SY Sea Mist",
    "MV Atlantic Shore",
    "Coaster Bluehaven",
    "Rescue tug Valiant",
    "MV Harbor Light",
    "SY Westerly",
    "FV Mistral",
    "Pilot boat Seaforth",
    "Workboat Kestrel",
    "MV Northcross",
    "SY Bright Star",
    "FV Canna",
    "MV Distant Bay",
    "Tug Humber Star",
    "Survey vessel Oriole",
    "Rescue boat Defender",
    "MV Avon Reach",
    "SY Dawn Tide",
    "FV Grebe",
  ];

  const maydayTransmitTemplates = [
    { title: "Engine Room Fire With Smoke Spread", story: "A fire has broken out in the engine room and smoke is now spreading toward the lower accommodation. Propulsion is affected and the master believes outside assistance may be needed immediately if boundary cooling fails.", hazard: "fire", people: 11, nature: "ENGINE ROOM FIRE, HEAVY SMOKE SPREADING TO LOWER ACCOMMODATION, PROPULSION AFFECTED", assistance: "IMMEDIATE FIREFIGHTING ASSISTANCE AND STANDBY FOR POSSIBLE EVACUATION" },
    { title: "Collision Damage And Rapid Forepeak Flooding", story: "At night your vessel strikes a hard floating object. The forepeak is flooding rapidly, the vessel is developing a heavy list, and watertight integrity is uncertain while damage-control teams are still assessing the breach.", hazard: "sinking", people: 26, nature: "COLLISION DAMAGE, RAPID FOREPEAK FLOODING, HEAVY LIST DEVELOPING", assistance: "IMMEDIATE ASSISTANCE, PUMPS, AND STANDBY FOR POSSIBLE EVACUATION" },
    { title: "Paint Locker Fire Reaching Adjacent Stores", story: "A severe fire in the paint locker has spread into adjoining stores. Dense smoke has forced crew out of the space and the heat is rising against a bulkhead close to additional combustibles.", hazard: "fire", people: 14, nature: "PAINT LOCKER FIRE SPREADING, DENSE SMOKE, CREW DRIVEN BACK BY HEAT", assistance: "IMMEDIATE FIREFIGHTING SUPPORT AND RESCUE COVER" },
    { title: "Battery Room Explosion With Toxic Smoke", story: "An explosion in the battery room has injured a crew member and filled nearby spaces with corrosive smoke. Ventilation is shut down and the vessel is losing critical electrical services.", hazard: "fire", people: 9, nature: "BATTERY ROOM EXPLOSION, TOXIC SMOKE, ELECTRICAL SERVICES FAILING", assistance: "IMMEDIATE ASSISTANCE AND MEDICAL SUPPORT" },
    { title: "Hull Crack Near Bow In Heavy Head Sea", story: "Heavy pounding in a head sea has opened a crack forward. Water is entering faster than the portable pumps can keep pace and the master expects the vessel may have to be abandoned if the rate increases.", hazard: "sinking", people: 13, nature: "HULL CRACK FORWARD, UNCONTROLLED FLOODING, PUMPING NOT HOLDING", assistance: "IMMEDIATE RESCUE STANDBY AND DAMAGE CONTROL SUPPORT" },
    { title: "Vehicle Deck Fire On Ro-Ro Ferry", story: "A fire has started among vehicles on the enclosed deck of your ferry. Fire parties cannot yet reach the seat of the fire and smoke is moving toward passenger spaces while the vessel remains underway.", hazard: "fire", people: 82, nature: "VEHICLE DECK FIRE, FIRE PARTIES UNABLE TO REACH SEAT OF FIRE, SMOKE SPREADING", assistance: "IMMEDIATE FIREFIGHTING ASSISTANCE AND POSSIBLE PASSENGER EVACUATION SUPPORT" },
    { title: "Grounding On Reef With Water Rising In Two Compartments", story: "Your vessel has grounded hard on a reef. Two forward compartments are flooding and the tide is falling, leaving the hull under severe strain as the list slowly increases.", hazard: "sinking", people: 17, nature: "HARD GROUNDING, TWO COMPARTMENTS FLOODING, VESSEL LISTING", assistance: "IMMEDIATE ASSISTANCE AND RESCUE STANDBY" },
    { title: "Fuel Line Rupture And Flash Fire", story: "A ruptured fuel line has caused a flash fire in the machinery space. The fire appears to be spreading along lagging and the vessel has lost propulsion in a busy shipping lane.", hazard: "fire", people: 16, nature: "MACHINERY SPACE FIRE AFTER FUEL LINE RUPTURE, PROPULSION LOST", assistance: "IMMEDIATE FIREFIGHTING ASSISTANCE AND TRAFFIC PROTECTION" },
    { title: "Passenger Launch Capsizing In Squall", story: "A sharp squall has rolled your small passenger launch during a turn. The vessel is heavily over, water is pouring in, and several passengers are already in immersion suits on the exposed side.", hazard: "sinking", people: 24, nature: "VESSEL CAPSIZING AFTER SQUALL, WATER ENTERING RAPIDLY, PASSENGERS AT RISK", assistance: "IMMEDIATE RESCUE ASSISTANCE" },
    { title: "Fishing Vessel Flooding After Gear Tears Hull Plating", story: "After hauling in heavy gear, the crew discovers torn plating aft. Flooding is now beyond control and the stern is settling as the weather freshens.", hazard: "sinking", people: 7, nature: "HULL DAMAGE AFT, FLOODING BEYOND CONTROL, STERN SETTLING", assistance: "IMMEDIATE ASSISTANCE AND POSSIBLE SURVIVOR RECOVERY" },
    { title: "Cargo Shift And Severe Starboard List", story: "Heavy seas have shifted deck cargo and your vessel now has a severe starboard list. Lashings are parting, freeing more weight, and the master is concerned the ship may capsize before the sea state eases.", hazard: "sinking", people: 18, nature: "CARGO SHIFT, SEVERE STARBOARD LIST, RISK OF CAPSIZE", assistance: "IMMEDIATE ASSISTANCE AND STANDBY FOR EVACUATION" },
    { title: "Generator Room Fire With Burn Casualty", story: "A fire in the generator room has injured one of the engineering crew and disabled the main switchboard. Emergency power is running but fire boundaries are heating up and the vessel has little reserve capability left.", hazard: "fire", people: 12, nature: "GENERATOR ROOM FIRE, MAIN SWITCHBOARD DISABLED, ONE CREW MEMBER BURNED", assistance: "IMMEDIATE FIREFIGHTING AND MEDICAL ASSISTANCE" },
    { title: "Passenger Catamaran Strikes Debris And Floods Fast", story: "Your high-speed catamaran has struck submerged debris at speed. The port hull is flooding fast, alarms are active, and passengers are being moved away from the affected side.", hazard: "sinking", people: 61, nature: "HIGH SPEED COLLISION WITH DEBRIS, PORT HULL FLOODING RAPIDLY", assistance: "IMMEDIATE ASSISTANCE AND PASSENGER EVACUATION SUPPORT" },
    { title: "Trawler Fire Running Toward Fuel Manifold", story: "An engine-room fire on your trawler is now spreading toward the fuel manifold. The crew has exhausted initial extinguishers and the compartment cannot be safely re-entered.", hazard: "fire", people: 6, nature: "ENGINE ROOM FIRE SPREADING TOWARD FUEL MANIFOLD", assistance: "IMMEDIATE FIREFIGHTING ASSISTANCE" },
    { title: "Pump Room Explosion On Product Tanker", story: "A small explosion in the pump room has been followed by smoke and rising temperature alarms. The master believes there is a serious risk of escalation and wants immediate outside help in case further ignition occurs.", hazard: "fire", people: 21, nature: "PUMP ROOM EXPLOSION, SMOKE AND HEAT ALARMS, ESCALATION RISK", assistance: "IMMEDIATE EMERGENCY ASSISTANCE AND FIRE COVER" },
    { title: "Research Vessel Taking Water After Ice Damage", story: "After contact with ice, a compartment on your research vessel is flooding and the ship is losing trim forward. Pumps are running continuously but the water level still rises with every report.", hazard: "sinking", people: 28, nature: "ICE DAMAGE, COMPARTMENT FLOODING, TRIM FORWARD INCREASING", assistance: "IMMEDIATE ASSISTANCE AND RESCUE PREPARATION" },
    { title: "Coaster Aground On Falling Tide With Hull Breach", story: "Your coaster is hard aground on a shoal and the tide is already falling away. Soundings show water entering through a lower-hull breach and the ship is twisting on the bank.", hazard: "sinking", people: 10, nature: "VESSEL HARD AGROUND, HULL BREACH, FLOODING AND HULL STRESS", assistance: "IMMEDIATE ASSISTANCE AND RESCUE STANDBY" },
    { title: "Bulk Carrier Flooding After Hatch Cover Failure", story: "One hatch cover has failed in extreme weather and seawater is entering the hold. Cargo movement is increasing the list and the master no longer expects the ship to stabilize without prompt help.", hazard: "sinking", people: 23, nature: "HATCH COVER FAILURE, HOLD FLOODING, CARGO MOVEMENT AND LIST", assistance: "IMMEDIATE ASSISTANCE AND STANDBY FOR POSSIBLE EVACUATION" },
    { title: "Dismasted Yacht In Storm With Water Ingress", story: "Your sailing yacht has lost its mast in storm force weather. Rigging has damaged the deck, water is entering the cabin, and one crew member is injured while the vessel drifts beam-on to the sea.", hazard: "sinking", people: 4, nature: "DISMASTED IN STORM, WATER ENTERING, ONE CREW MEMBER INJURED", assistance: "IMMEDIATE RESCUE ASSISTANCE" },
    { title: "Smoke And Blackout Near Rocky Shore", story: "A widespread electrical failure has left your vessel with emergency lighting only, while smoke is spreading from a switchboard flat. The ship is close to a rocky shore and maneuvering safety is deteriorating fast.", hazard: "fire", people: 15, nature: "BLACKOUT AND SWITCHBOARD SMOKE, VESSEL CLOSE TO ROCKY SHORE", assistance: "IMMEDIATE ASSISTANCE AND NAVIGATIONAL SUPPORT" },
  ];

  const panPanTransmitTemplates = [
    { title: "Crew Member With Suspected Fracture", story: "A crew member has fallen down a ladder and suffered a badly deformed forearm. Bleeding is controlled, the airway is clear, and the master wants urgent medical advice and a possible rendezvous.", hazard: "medical", people: 18, nature: "CREW MEMBER WITH SUSPECTED FRACTURE, BLEEDING CONTROLLED, PATIENT CONSCIOUS", assistance: "URGENT MEDICAL ADVICE AND POSSIBLE RENDEZVOUS" },
    { title: "Steering Failure In Dense Traffic", story: "Your cargo ship has suffered a total steering failure in a busy coastal route. Engines and anchors are still available and there is sea room, but traffic awareness and tug support are needed quickly before the situation worsens.", hazard: "sar", people: 19, nature: "TOTAL STEERING FAILURE, RESTRICTED IN MANEUVERABILITY", assistance: "TRAFFIC WARNING AND TUG ASSISTANCE" },
    { title: "Heart Attack Symptoms But Patient Stable", story: "A senior engineer is showing classic heart attack symptoms. The patient is conscious and breathing, oxygen is on hand, and the master needs urgent medical advice while planning the quickest handover ashore.", hazard: "medical", people: 14, nature: "SUSPECTED CARDIAC EVENT, PATIENT CONSCIOUS, OXYGEN ADMINISTERED", assistance: "URGENT MEDICAL ADVICE AND MEDEVAC PREPARATION" },
    { title: "Main Engine Failure With Sea Room Remaining", story: "Your vessel has lost main propulsion in poor visibility. There is still sea room and the anchors are ready, but the ship is drifting in a commercial route and needs priority traffic awareness and tug assistance.", hazard: "sar", people: 12, nature: "MAIN ENGINE FAILURE, DRIFTING IN TRAFFIC, ANCHORS READY", assistance: "TRAFFIC WARNING AND TUG SUPPORT" },
    { title: "Controlled Flooding In Steering Flat", story: "A leak in the steering flat is being controlled by pumps, but the compartment cannot be left unattended and the spare steering system is degraded. The ship remains afloat and maneuverable for now.", hazard: "sinking", people: 17, nature: "CONTROLLED FLOODING IN STEERING FLAT, SPARE STEERING DEGRADED", assistance: "TECHNICAL ASSISTANCE AND STANDBY SUPPORT" },
    { title: "Propeller Fouled By Heavy Warp", story: "A workboat has wrapped a heavy warp around the propeller while operating close to a fairway. The vessel is drifting safely for the moment but cannot clear the area without help.", hazard: "obstruction", people: 5, nature: "PROPELLER FOULING, VESSEL DISABLED, DRIFTING NEAR FAIRWAY", assistance: "TRAFFIC WARNING AND TOW ASSISTANCE" },
    { title: "Galley Flash Fire Leaves Severe Burns", story: "A small galley flare-up has been extinguished, but one crew member has deep burns to both hands and forearms. The vessel itself is not in immediate danger, but urgent medical advice is needed at once.", hazard: "medical", people: 9, nature: "SEVERE BURNS TO CREW MEMBER AFTER FIRE EXTINGUISHED", assistance: "URGENT MEDICAL ADVICE" },
    { title: "Rudder Jammed Hard To Port", story: "The rudder has jammed hard over and the ship can only circle slowly. Engines remain available and there is no immediate collision risk yet, but the bridge needs urgent traffic separation and tug help.", hazard: "sar", people: 21, nature: "RUDDER JAMMED HARD TO PORT, RESTRICTED IN MANEUVERABILITY", assistance: "TRAFFIC WARNING AND TUG ASSISTANCE" },
    { title: "Loss Of Cooling Water To Main Engine", story: "An engineering defect has removed cooling water flow to the main engine. Power has been reduced sharply and the ship is limping toward shelter, needing priority communication before it loses propulsion entirely.", hazard: "sar", people: 16, nature: "MAIN ENGINE COOLING FAILURE, POWER SEVERELY REDUCED", assistance: "TRAFFIC AWARENESS AND TECHNICAL SUPPORT" },
    { title: "Passenger With Suspected Stroke Symptoms", story: "A passenger has sudden speech difficulty and arm weakness. The person is conscious and being monitored, and the master wants urgent medical advice and help arranging the fastest transfer ashore.", hazard: "medical", people: 37, nature: "PASSENGER WITH SUSPECTED STROKE SYMPTOMS, CONSCIOUS", assistance: "URGENT MEDICAL ADVICE AND SHORE RENDEZVOUS" },
    { title: "Anchor Dragging Near Harbor Entrance", story: "Strong gusts are causing your vessel to drag anchor toward a harbor entrance. Engines are ready and the situation is not yet a distress case, but urgent traffic warning and tug support are needed.", hazard: "weather", people: 13, nature: "ANCHOR DRAGGING TOWARD HARBOR ENTRANCE IN STRONG GUSTS", assistance: "TRAFFIC WARNING AND TUG SUPPORT" },
    { title: "Contaminated Fuel Causing Intermittent Power Loss", story: "Fuel contamination is causing repeated engine misfires and brief power losses. The ship is still making way, but the master wants priority traffic handling before the machinery fails completely in a narrow route.", hazard: "sar", people: 22, nature: "FUEL CONTAMINATION CAUSING INTERMITTENT POWER LOSS", assistance: "TRAFFIC WARNING AND ENGINEERING ASSISTANCE" },
    { title: "Deck Officer Injured During Heavy Weather Securing", story: "A deck officer has suffered a deep scalp wound and possible concussion while securing loose gear. Bleeding is controlled, the patient is responsive, and the vessel requires urgent medical advice.", hazard: "medical", people: 20, nature: "DEEP HEAD WOUND AND POSSIBLE CONCUSSION, PATIENT RESPONSIVE", assistance: "URGENT MEDICAL ADVICE" },
    { title: "Bow Thruster Fire Out But Vessel Disabled", story: "A small electrical fire around the bow thruster cabinet has been extinguished, but the ship has lost maneuvering support while approaching harbor in strong crosswind. The problem is urgent but not yet distress.", hazard: "fire", people: 11, nature: "BOW THRUSTER ELECTRICAL DAMAGE, MANEUVERABILITY REDUCED", assistance: "TRAFFIC WARNING AND TUG ASSISTANCE" },
    { title: "Autopilot Failure Leaving Wide Course Swings", story: "A sudden steering-control fault is causing large course swings. Hand steering is only partly effective and the ship needs urgent traffic separation in a busy channel before a close-quarters situation develops.", hazard: "sar", people: 15, nature: "STEERING CONTROL FAULT, LARGE COURSE SWINGS IN BUSY CHANNEL", assistance: "TRAFFIC WARNING AND NAVIGATIONAL SUPPORT" },
    { title: "Crewman Crushed Fingers In Winch", story: "A crewman has severely crushed two fingers in a mooring winch. Bleeding has been stemmed and the patient is stable, but urgent medical advice is required on pain control and further treatment.", hazard: "medical", people: 8, nature: "SEVERE HAND INJURY, PATIENT STABLE", assistance: "URGENT MEDICAL ADVICE" },
    { title: "Low-Speed Flooding Held By Pumps", story: "Your vessel has minor shell damage and a slow ingress of water that is being held by pumps. The situation is not yet grave, but the master wants priority communications while arranging escort into shelter.", hazard: "sinking", people: 12, nature: "SLOW FLOODING HELD BY PUMPS, ESCORT INTO SHELTER REQUIRED", assistance: "ESCORT AND DAMAGE CONTROL SUPPORT" },
    { title: "Fuel Transfer Injury And Possible Chemical Exposure", story: "During bunkering, a crew member is splashed with fuel and may have inhaled vapors. The patient is conscious and out of danger for the moment, but urgent medical advice is required.", hazard: "medical", people: 10, nature: "POSSIBLE CHEMICAL EXPOSURE, PATIENT CONSCIOUS", assistance: "URGENT MEDICAL ADVICE" },
    { title: "Towline Jammed Under Own Bow", story: "While preparing to take a tow, a line has jammed under your bow and left the vessel restricted in maneuverability near commercial traffic. There is sea room, but urgent traffic management is needed.", hazard: "obstruction", people: 7, nature: "LINE JAMMED UNDER BOW, RESTRICTED IN MANEUVERABILITY", assistance: "TRAFFIC WARNING AND TUG SUPPORT" },
    { title: "High Fever And Breathing Difficulty Offshore", story: "A crew member has a high fever and increasing breathing difficulty. The airway is clear and oxygen is available, but the master wants immediate professional advice before the condition worsens.", hazard: "medical", people: 23, nature: "CREW MEMBER WITH FEVER AND BREATHING DIFFICULTY, OXYGEN AVAILABLE", assistance: "URGENT MEDICAL ADVICE AND POSSIBLE MEDEVAC" },
  ];

  const securiteTransmitTemplates = [
    { title: "Semi-Submerged Container In Approach Lane", story: "After heavy weather your bridge team spots a semi-submerged container drifting close to a busy approach lane. No vessel is currently in distress, but the object could easily cause a collision.", hazard: "obstruction", warning: "SEMI-SUBMERGED CONTAINER DRIFTING IN APPROACH LANE", advice: "VESSELS KEEP SHARP LOOKOUT AND KEEP CLEAR" },
    { title: "Unlit Buoy Off Station Near Shoal Water", story: "You find a navigation buoy well off station near shoal water at first light. Traffic using the charted buoy position could be misled into danger unless warned promptly.", hazard: "obstruction", warning: "LATERAL BUOY OBSERVED OFF STATION NEAR SHOAL WATER", advice: "VESSELS NAVIGATE WITH CAUTION AND DO NOT RELY ON CHARTED BUOY POSITION" },
    { title: "Dense Fog Bank Crossing Headland Route", story: "Your vessel has just entered a dense fog bank extending across a narrow route around a headland. Visibility is near zero and other traffic is still approaching in clear air from both sides.", hazard: "weather", warning: "DENSE FOG BANK ACROSS HEADLAND ROUTE, VISIBILITY NEAR ZERO", advice: "VESSELS REDUCE SPEED AND KEEP SHARP LOOKOUT" },
    { title: "Large Timber Debris Field After Storm", story: "You encounter a wide field of floating timber after overnight gales. The debris is difficult to see in the sea clutter and lies directly across a common coastal track.", hazard: "obstruction", warning: "FLOATING TIMBER DEBRIS FIELD REPORTED ACROSS COASTAL TRACK", advice: "VESSELS PROCEED WITH EXTREME CAUTION" },
    { title: "Local Squall Line With Waterspout Sighted", story: "A rapidly developing squall line is moving across your area and a waterspout has just been sighted ahead of the front. Nearby traffic would benefit from an immediate safety warning.", hazard: "weather", warning: "SEVERE SQUALL LINE WITH WATER SPOUT SIGHTED", advice: "VESSELS AVOID AREA IF POSSIBLE AND PREPARE FOR VIOLENT GUSTS" },
    { title: "Derelict Fishing Gear Across Inshore Track", story: "A long section of abandoned fishing gear is stretching across an inshore route used by small craft. It is mostly awash and could foul propellers before being seen.", hazard: "obstruction", warning: "DERELICT FISHING GEAR AWASH ACROSS INSHORE TRACK", advice: "VESSELS KEEP CLEAR AND PASS WITH CAUTION" },
    { title: "Strong Tide Rip And Breaking Seas Over Bar", story: "As you approach a river bar, the tide rip becomes severe and breaking seas are forming across the entrance. Smaller craft still heading that way need a clear safety broadcast.", hazard: "weather", warning: "BREAKING SEAS OVER BAR ENTRANCE AND SEVERE TIDE RIP", advice: "SMALL CRAFT USE EXTREME CAUTION OR DELAY ENTRY" },
    { title: "Partly Submerged Pallet Load In Fairway", story: "A large load of palletized cargo is drifting low in the water near the edge of the fairway. It is difficult to pick up visually and may not show well on small-craft radar.", hazard: "obstruction", warning: "PARTLY SUBMERGED CARGO PALLETS DRIFTING NEAR FAIRWAY EDGE", advice: "VESSELS KEEP CLEAR AND MAINTAIN EXTRA LOOKOUT" },
    { title: "Thunderstorm Outflow Hitting Anchorage", story: "You observe an intense thunderstorm outflow line reaching a local anchorage. Gusts are rising quickly and multiple anchored vessels are beginning to sheer violently.", hazard: "weather", warning: "SEVERE THUNDERSTORM OUTFLOW APPROACHING LOCAL ANCHORAGE", advice: "VESSELS PREPARE FOR STRONG GUSTS AND CHECK ANCHOR HOLDING" },
    { title: "Broken Beacon Light On Harbor Mole", story: "The sector light on the harbor mole is unlit and traffic entering after dark may be misled. You have confirmed the failure visually from close range.", hazard: "obstruction", warning: "HARBOR MOLE SECTOR LIGHT UNLIT", advice: "VESSELS ENTER WITH CAUTION AND DO NOT RELY ON LIGHT" },
    { title: "Floating Refrigerator Unit In Traffic Lane", story: "A detached refrigerated trailer unit is floating almost awash in a traffic lane after container loss in bad weather. It presents a serious hazard to navigation.", hazard: "obstruction", warning: "FLOATING TRAILER UNIT ALMOST AWASH IN TRAFFIC LANE", advice: "VESSELS KEEP WELL CLEAR" },
    { title: "Fast-Forming Sea Smoke Reducing Visibility", story: "Rapid sea smoke is forming over a cold estuary and visibility is collapsing by the minute. Traffic entering the estuary would benefit from an immediate safety message.", hazard: "weather", warning: "SEA SMOKE FORMING RAPIDLY IN ESTUARY, VISIBILITY FALLING FAST", advice: "VESSELS REDUCE SPEED AND SOUND APPROPRIATE SIGNALS" },
    { title: "Dredger Pipeline Marker Missing", story: "A marker for a dredger pipeline is missing and the exposed pipeline now lies close to a route used by coasters and tugs. Passing traffic needs to be warned clearly.", hazard: "obstruction", warning: "DREDGER PIPELINE MARKER MISSING, PIPELINE CLOSE TO NAVIGABLE WATER", advice: "VESSELS KEEP CLEAR OF DREDGING AREA" },
    { title: "Freezing Spray Building On Superstructures", story: "You are experiencing rapid freezing spray and accumulating ice on exposed structures. Other vessels in the same sea area should be warned of the deteriorating conditions.", hazard: "weather", warning: "HEAVY FREEZING SPRAY REPORTED IN SEA AREA", advice: "VESSELS TAKE ICING PRECAUTIONS AND REDUCE TOPSIDE EXPOSURE" },
    { title: "Drifting Liferaft Canister In Channel", story: "A floating liferaft canister is drifting down a narrow channel after breaking free from an unknown source. It is low in the water and dangerous to small craft propellers.", hazard: "obstruction", warning: "DRIFTING LIFERAFT CANISTER IN NARROW CHANNEL", advice: "VESSELS KEEP CLEAR AND NAVIGATE WITH CAUTION" },
    { title: "Severe Katabatic Gusts Off High Ground", story: "You experience repeated severe downdraft gusts off high ground lining a fjord-like inlet. The localized wind is much stronger than forecast and affects steerage in confined water.", hazard: "weather", warning: "SEVERE LOCALIZED DOWNDRAFT GUSTS OFF HIGH GROUND", advice: "VESSELS TAKE EXTRA CARE IN CONFINED WATER" },
    { title: "Missing Wreck Marker After Tidal Shift", story: "A temporary wreck marker has disappeared after a strong tidal shift, leaving only an unmarked hazard in a route frequently used by fishing vessels and coasters.", hazard: "obstruction", warning: "TEMPORARY WRECK MARKER MISSING, WRECK POSITION STILL DANGEROUS", advice: "VESSELS KEEP CLEAR OF WRECK AREA" },
    { title: "Exceptional Cross Sea At Harbor Entrance", story: "A strong cross sea is breaking unpredictably across a harbor entrance due to wind against tide. The condition is not obvious from offshore and needs a prompt warning.", hazard: "weather", warning: "STRONG CROSS SEA BREAKING ACROSS HARBOR ENTRANCE", advice: "VESSELS USE CAUTION AND CONSIDER DELAYING ENTRY" },
    { title: "Partly Awash Buoy Mooring Chain", story: "A heavy buoy mooring chain has surfaced and is snaking across a tidal stream. It lies almost invisible in the water and could foul passing craft.", hazard: "obstruction", warning: "HEAVY BUOY MOORING CHAIN PARTLY AWAKE IN TIDAL STREAM", advice: "VESSELS AVOID AREA AND PROCEED WITH CAUTION" },
    { title: "Violent Williwaw In Mountain Gap", story: "You observe sudden violent williwaw gusts descending through a mountain gap onto the waterway. Smaller craft heading toward the gap need a fast meteorological warning.", hazard: "weather", warning: "VIOLENT LOCAL GUSTS DESCENDING THROUGH MOUNTAIN GAP", advice: "SMALL CRAFT KEEP CLEAR OF GAP AND SEEK SHELTER" },
  ];

  const maydayReceiveTemplates = [
    { title: "Unanswered Sinking Fishing Vessel Nearby", story: "You hear a broken but readable distress call from a fishing vessel reporting rapid flooding after striking an object. No coast station acknowledgment follows and your ship is close enough to help.", hazard: "sinking", support: "PROCEEDING TO YOUR POSITION TO STANDBY AND RECOVER SURVIVORS", eta: "22 MINUTES", nature: "RAPID FLOODING AFTER STRIKING AN OBJECT" },
    { title: "Burning Yacht With No Coastguard Reply", story: "A yacht transmits Mayday for an engine-space fire that is spreading toward fuel stores. The call is readable but weak, and after a short pause no shore station has answered.", hazard: "fire", support: "PROCEEDING TO ASSIST AND STANDBY DOWNWIND", eta: "18 MINUTES", nature: "ONBOARD FIRE SPREADING, CASUALTY REPORTS HEAVY SMOKE" },
    { title: "Passenger Launch Taking Water In Estuary", story: "You copy a Mayday from a small passenger launch that has struck a bank and is taking water fast. Nearby traffic is confused and no formal acknowledgment has yet been heard.", hazard: "sinking", support: "PROCEEDING TO YOUR POSITION AND READY TO RECOVER PASSENGERS", eta: "12 MINUTES", nature: "GROUNDING WITH RAPID WATER INGRESS" },
    { title: "Mayday From Trawler On Fire In Fog", story: "A trawler calls Mayday because of an uncontrolled machinery-space fire in dense fog. The message is intelligible but fragmented and there is still no answer from a shore station.", hazard: "fire", support: "PROCEEDING TO ASSIST AND WILL MAINTAIN RADAR WATCH FOR YOU", eta: "25 MINUTES", nature: "MACHINERY SPACE FIRE IN LOW VISIBILITY" },
    { title: "Small Craft Capsize Reported By Distressed Vessel", story: "A small craft reports in a Mayday that it has rolled over in breaking seas near rocks. The signal is weak and repeated, but no rescue coordination answer is heard after a short interval.", hazard: "sinking", support: "PROCEEDING TO SCENE TO RECOVER PERSONS FROM WATER", eta: "16 MINUTES", nature: "VESSEL CAPSIZED IN BREAKING SEAS" },
    { title: "Coaster Aground And Flooding Without Acknowledgment", story: "A coaster on a falling tide reports Mayday after grounding and opening a hull breach. Your ship is near enough to stand by while no official acknowledgment is yet heard.", hazard: "sinking", support: "PROCEEDING TO STANDBY AND WILL RELAY DISTRESS TRAFFIC", eta: "20 MINUTES", nature: "GROUNDING WITH HULL BREACH AND FLOODING" },
    { title: "Dismasted Yacht Reporting Crew Injury", story: "You hear a Mayday from a dismasted yacht in heavy weather. One crew member is injured and the vessel is taking water, but the distress call remains unanswered after a short listening pause.", hazard: "sinking", support: "PROCEEDING TO YOUR POSITION AND READY TO TAKE SURVIVORS", eta: "27 MINUTES", nature: "DISMASTED, TAKING WATER, CREW INJURED" },
    { title: "Engine-Room Explosion On Tanker", story: "A tanker broadcasts Mayday for an explosion and smoke in the engine room. The message includes a position but no coast station reply follows and your vessel can render assistance.", hazard: "fire", support: "PROCEEDING TO ASSIST AND READY TO STANDBY OUTSIDE DANGER AREA", eta: "24 MINUTES", nature: "ENGINE ROOM EXPLOSION AND SMOKE" },
    { title: "Man Overboard Search Escalated To Distress", story: "A vessel searching for a person overboard now transmits Mayday after losing visual contact in darkness and rough weather. You hear the call clearly but no acknowledgment comes back.", hazard: "sar", support: "PROCEEDING TO SEARCH AREA AND WILL ASSIST IN SEARCH PATTERN", eta: "14 MINUTES", nature: "PERSON OVERBOARD LOST FROM SIGHT IN DARKNESS" },
    { title: "Catamaran Taking Water Near Breakwater", story: "A small catamaran calls Mayday after hitting the breakwater entrance and flooding quickly. Your vessel is only a few miles away and there is no sign that the call has been answered.", hazard: "sinking", support: "PROCEEDING TO YOUR POSITION AND PREPARING TO RECOVER CASUALTIES", eta: "10 MINUTES", nature: "BREAKWATER COLLISION AND RAPID FLOODING" },
    { title: "Fire On Car Carrier With Passengers Mustered", story: "A car carrier transmits Mayday due to an enclosed deck fire with passengers mustered. The distress call is clear, but after a short interval no shore authority has yet acknowledged.", hazard: "fire", support: "PROCEEDING TO ASSIST AND READY TO RECEIVE EVACUEES", eta: "26 MINUTES", nature: "ENCLOSED VEHICLE DECK FIRE WITH PASSENGERS MUSTERED" },
    { title: "Research Vessel Flooding After Collision", story: "A research vessel reports Mayday after colliding with floating metal and flooding below the waterline. You are within range to help while the distress call still lacks an official answer.", hazard: "sinking", support: "PROCEEDING TO ASSIST AND CAN PROVIDE DEWATERING SUPPORT", eta: "19 MINUTES", nature: "UNDERWATER COLLISION DAMAGE AND FLOODING" },
    { title: "Motor Cruiser Burning At Anchorage", story: "A motor cruiser anchored nearby calls Mayday for a fire spreading through the saloon. The signal is strong locally, but no coast station acknowledgment follows the call.", hazard: "fire", support: "PROCEEDING TO SCENE AND READY TO RECOVER PERSONS FROM WATER", eta: "8 MINUTES", nature: "FIRE SPREADING THROUGH ACCOMMODATION" },
    { title: "Fishing Boat Reporting Capsize Risk In Breaking Bar", story: "A fishing boat calls Mayday from the edge of a breaking river bar, reporting a dangerous list and water ingress. The call remains unanswered after a short pause and your ship can assist.", hazard: "sinking", support: "PROCEEDING TO STANDBY SEAWARD OF YOUR POSITION", eta: "17 MINUTES", nature: "DANGEROUS LIST AND WATER INGRESS IN BREAKING BAR" },
    { title: "Chemical Smoke Event On Workboat", story: "A workboat broadcasts Mayday after a chemical reaction causes smoke and breathing difficulty on deck. No coast or control station has yet acknowledged the distress call.", hazard: "fire", support: "PROCEEDING TO ASSIST AND READY WITH MEDICAL SUPPORT", eta: "13 MINUTES", nature: "CHEMICAL SMOKE EVENT WITH PERSONNEL AFFECTED" },
    { title: "Towboat Flooding After Hull Contact", story: "A towboat reports a hull puncture and uncontrollable flooding after contact with submerged steel. Your vessel is close and no shore station answers immediately.", hazard: "sinking", support: "PROCEEDING TO YOUR POSITION AND WILL RELAY DISTRESS TO SHORE", eta: "21 MINUTES", nature: "HULL PUNCTURE AND UNCONTROLLED FLOODING" },
    { title: "Pilot Launch Fire With Crew Preparing To Abandon", story: "A pilot launch issues a Mayday for an uncontrollable engine-room fire and reports the crew preparing survival craft. The message remains unanswered by shore for the first short interval.", hazard: "fire", support: "PROCEEDING TO ASSIST AND READY TO RECOVER CREW", eta: "9 MINUTES", nature: "UNCONTROLLED ENGINE ROOM FIRE, CREW PREPARING TO ABANDON" },
    { title: "Yacht Mayday In Breaking Following Sea", story: "A small yacht reports Mayday after broaching repeatedly in a breaking following sea and taking water below. You hear the call clearly but no coordinator has responded yet.", hazard: "sinking", support: "PROCEEDING TO STANDBY AND ASSIST IN SURVIVOR RECOVERY", eta: "23 MINUTES", nature: "BROACHING IN BREAKING SEA WITH WATER INGRESS" },
    { title: "Cargo Vessel Blackout Near Shoal Coast", story: "A cargo vessel calls Mayday after a blackout and loss of steerage near a shoal coast. The message includes position and intention, but still has no official acknowledgment.", hazard: "fire", support: "PROCEEDING TO ASSIST AND CAN STANDBY AS NAVIGATIONAL GUARD", eta: "15 MINUTES", nature: "BLACKOUT AND LOSS OF STEERAGE NEAR SHOAL COAST" },
    { title: "Mayday From Ferry With Vehicle Deck Smoke", story: "A ferry transmits Mayday reporting vehicle deck smoke, alarms, and passengers mustered. You can assist and the distress call remains unanswered after a short pause.", hazard: "fire", support: "PROCEEDING TO YOUR POSITION AND READY TO SUPPORT EVACUATION", eta: "28 MINUTES", nature: "VEHICLE DECK SMOKE AND PASSENGER MUSTER" },
  ];

  const securiteReceiveTemplates = [
    { title: "Coastguard Gale Warning And Visibility Drop", story: "Coastguard broadcasts Securite and directs all stations to a working channel for a gale warning, poor visibility, and sea-state update affecting your route within the next two hours.", hazard: "weather", warning: "GALE WARNING, POOR VISIBILITY, AND ROUGH SEA STATE FOR YOUR AREA", bridgeAction: "copy the warning, log it, reduce speed if needed, secure decks, and amend the passage plan" },
    { title: "Safety Broadcast For SAR Exclusion Zone", story: "Coastguard issues a Securite call for a helicopter rescue and establishes a temporary exclusion zone around the casualty position. Your planned track would pass near the zone later this watch.", hazard: "sar", warning: "TEMPORARY EXCLUSION ZONE AROUND ACTIVE SAR SCENE", bridgeAction: "plot the exclusion area, alter course to keep clear, and maintain listening watch for updates" },
    { title: "Firing Practice Area Activated Unexpectedly", story: "A coast station broadcasts Securite for live firing activity in an area you had expected to be clear. Your present track would skim the southern edge of the active zone.", hazard: "sar", warning: "LIVE FIRING ACTIVITY IN PROGRESS IN DECLARED AREA", bridgeAction: "plot the limits, keep clear of the zone, and brief the bridge team on the diversion" },
    { title: "Dense Fog Advisory For Narrow Channel", story: "A harbor authority issues Securite for dense fog reducing visibility below one cable in a narrow channel ahead. Several vessels are still inbound and outbound through the same water.", hazard: "weather", warning: "DENSE FOG IN NARROW CHANNEL, VISIBILITY BELOW ONE CABLE", bridgeAction: "prepare fog navigation, reduce speed, post additional lookout, and keep the working channel monitored" },
    { title: "Navigation Warning For Temporary Light Failure", story: "A safety broadcast reports that a key leading light is extinguished on the route you plan to use after dark. The rest of the transit remains available if navigated carefully.", hazard: "obstruction", warning: "IMPORTANT LEADING LIGHT EXTINGUISHED ON APPROACH ROUTE", bridgeAction: "note the failure, brief the bridge team, and adjust the pilotage plan to avoid relying on that light" },
    { title: "Strong Tidal Stream Warning Around Headland", story: "Securite traffic reports abnormally strong tidal streams and overfalls around a headland you are approaching. The warning includes a recommended offing for larger vessels.", hazard: "weather", warning: "ABNORMALLY STRONG TIDAL STREAMS AND OVERFALLS AROUND HEADLAND", bridgeAction: "adjust the track to the recommended offing and brief the watch on likely set and drift" },
    { title: "Drifting Mine-Like Object Warning", story: "A coast station broadcasts a Securite warning for a drifting mine-like object sighted by another vessel. Your route is not directly through the last known position but remains nearby.", hazard: "obstruction", warning: "DRIFTING MINE-LIKE OBJECT IN GENERAL AREA", bridgeAction: "copy the warning, increase lookout, and keep clear of the reported area" },
    { title: "Exceptional Icing Warning For Sea Area", story: "A weather station issues Securite for exceptional icing conditions in your sea area. Your ship is not yet in trouble, but the warning affects deck work and topweight planning.", hazard: "weather", warning: "EXCEPTIONAL ICING CONDITIONS IN SEA AREA", bridgeAction: "log the warning, restrict deck exposure, and prepare anti-icing precautions" },
    { title: "Navigation Closure Around Diving Operations", story: "Port control broadcasts Securite for diving operations extending farther into the channel than charted. Passing traffic is being routed around the work site.", hazard: "sar", warning: "DIVING OPERATIONS EXTENDING INTO CHANNEL", bridgeAction: "copy the routing instructions, slow as required, and pass well clear of the dive site" },
    { title: "Breaking Bar Advisory On Local Entrance", story: "A local coast station sends Securite for breaking surf across a harbor bar. You are planning to approach the entrance later, but conditions may worsen before arrival.", hazard: "weather", warning: "BREAKING SURF ACROSS HARBOR BAR", bridgeAction: "reassess entry timing, monitor updates, and prepare an alternate waiting area if needed" },
  ];

  const panPanReceiveTemplates = [
    { title: "Disabled Yacht Drifting Toward Lee Shore", story: "You hear a yacht transmit Pan Pan after losing propulsion in thick fog. Coastguard acknowledges the urgency traffic and moves it to a working channel while the yacht drifts toward a lee shore.", hazard: "sinking", support: "CAN STANDBY TO LEEWARD AND PASS A TOW IF REQUESTED", eta: "15 MINUTES" },
    { title: "Towline Parted Near Busy Fairway", story: "A tug reports Pan Pan after parting a towline near a busy fairway. The disabled tow is still clear of immediate danger, but escort help would be useful if you can provide it safely.", hazard: "obstruction", support: "CAN STANDBY CLEAR OF THE TOW AND WARN TRAFFIC", eta: "18 MINUTES" },
    { title: "Urgent Medical Advice Requested By Fishing Boat", story: "A fishing boat sends Pan Pan for a crew member with suspected appendicitis. Coastguard has acknowledged and shifted the traffic to a working channel for medical coordination.", hazard: "medical", support: "CAN STANDBY AND RELAY IF REQUIRED", eta: "20 MINUTES" },
    { title: "Pilot Boat With Steering Defect", story: "A pilot boat transmits Pan Pan after developing a steering defect in restricted water. The urgency traffic is organized on another channel and your ship can stand by to give it room.", hazard: "sar", support: "CAN STANDBY AND GIVE THE CASUALTY SEA ROOM", eta: "11 MINUTES" },
    { title: "Sailing Vessel With Propeller Foul In Tidal Stream", story: "A sailing vessel has fouled its propeller and transmits Pan Pan while drifting in a strong tidal stream. The situation is urgent but not yet distress, and the working channel is already established.", hazard: "obstruction", support: "CAN STANDBY TO LEEWARD AND ASSIST WITH RECOVERY", eta: "14 MINUTES" },
    { title: "Coaster With Engine Alarms Near Separation Scheme", story: "A coaster broadcasts Pan Pan due to repeated engine shutdown alarms while approaching a separation scheme. Coastguard has acknowledged and is coordinating traffic on a working channel.", hazard: "sar", support: "CAN STANDBY AS NAVIGATIONAL GUARD", eta: "17 MINUTES" },
    { title: "Workboat With Burn Casualty And Stable Vessel", story: "A nearby workboat sends Pan Pan for a serious burn casualty. The boat itself is safe, Coastguard has taken the case on a working channel, and your vessel could offer practical support if asked.", hazard: "medical", support: "CAN STANDBY AND ASSIST WITH TRANSFER IF DIRECTED", eta: "9 MINUTES" },
    { title: "Anchor Dragging Vessel Seeking Escort", story: "A small coastal tanker reports Pan Pan after dragging anchor and re-establishing control under power. The tanker needs local traffic to stay clear while it repositions to safer anchorage.", hazard: "weather", support: "CAN WARN TRAFFIC AND STANDBY OFF THE TANKER'S QUARTER", eta: "13 MINUTES" },
    { title: "Survey Vessel With Rudder Limitation", story: "A survey vessel transmits Pan Pan after losing full rudder angle while near crossing traffic. The urgency call has been acknowledged and further details are passing on a working channel.", hazard: "sar", support: "CAN MONITOR THE WORKING CHANNEL AND OFFER STANDBY ASSISTANCE", eta: "16 MINUTES" },
    { title: "Passenger Boat With Suspected Stroke Case", story: "A passenger boat broadcasts Pan Pan because one passenger shows suspected stroke symptoms. Medical coordination is under way on the nominated channel and your ship could help with rendezvous if requested.", hazard: "medical", support: "CAN STANDBY FOR MEDICAL TRANSFER IF DIRECTED", eta: "19 MINUTES" },
  ];

  function typeConfig(key) {
    return {
      MAYDAY_TRANSMIT: {
        signal: "MAYDAY",
        mode: "Transmit",
        roleBadge: "Own ship in distress",
        question: "Which radio action best matches the correct protocol right now?",
        coaching: "Exam cue: grave and imminent danger requiring immediate assistance is distress traffic.",
      },
      PANPAN_TRANSMIT: {
        signal: "PAN PAN",
        mode: "Transmit",
        roleBadge: "Own ship requesting help",
        question: "Which radio action best matches the correct protocol right now?",
        coaching: "Exam cue: urgent situations that are serious but not yet grave and imminent belong under Pan Pan.",
      },
      SECURITE_TRANSMIT: {
        signal: "SECURITE",
        mode: "Transmit",
        roleBadge: "Own ship passing safety information",
        question: "What is the best protocol and message style to use first?",
        coaching: "Exam cue: use Securite for navigational or meteorological safety information affecting other vessels.",
      },
      MAYDAY_RECEIVE: {
        signal: "MAYDAY",
        mode: "Receive",
        roleBadge: "Own ship responding",
        question: "What is the best next action for your ship after a short listening pause?",
        coaching: "Exam cue: on hearing an unanswered distress call, acknowledge if you can assist and relay it onward if needed.",
      },
      SECURITE_RECEIVE: {
        signal: "SECURITE",
        mode: "Receive",
        roleBadge: "Own ship receiving safety traffic",
        question: "What is the best action for your bridge team?",
        coaching: "Exam cue: safety traffic may not need a reply, but it does require disciplined watchkeeping and navigation decisions.",
      },
      PANPAN_RECEIVE: {
        signal: "PAN PAN",
        mode: "Receive",
        roleBadge: "Own ship monitoring urgency traffic",
        question: "What is the best response from your ship now?",
        coaching: "Exam cue: once urgency traffic is acknowledged, keep the calling channel clear and offer practical help only if you can give it safely.",
      },
    }[key];
  }

  function shipName(list, index) {
    return list[index % list.length];
  }

  function callSign(index) {
    const letters = "ABCDEFGHJKLMNPQRSTUVWXYZ";
    const first = letters[index % letters.length];
    const second = letters[(index * 3 + 5) % letters.length];
    const third = letters[(index * 5 + 11) % letters.length];
    return `2${first}${second}${third}${(index % 9) + 1}`;
  }

  function mmsi(index) {
    return `235${String(100000 + index * 73).slice(-6)}`;
  }

  function distanceFor(level, slot) {
    const value = 3.8 + ((level * 1.7 + slot * 2.1) % 18);
    return `${value.toFixed(1)} NM`;
  }

  function positionFor(level, slot) {
    const latDeg = 49 + ((level + slot) % 10);
    const latMin = ((level * 7 + slot * 5) % 60) + 0.4;
    const lonDeg = (level * 2 + slot) % 9;
    const lonMin = ((level * 9 + slot * 4) % 60) + 0.2;
    const ew = (level + slot) % 2 === 0 ? "WEST" : "EAST";
    return `${latDeg} DEGREES ${latMin.toFixed(1)} MINUTES NORTH 00${lonDeg} DEGREES ${lonMin.toFixed(1)} MINUTES ${ew}`;
  }

  function stagePositions(globalIndex, mode) {
    const layouts = [
      { own: [28, 62], target: [77, 24] },
      { own: [74, 32], target: [30, 66] },
      { own: [35, 58], target: [72, 30] },
      { own: [64, 30], target: [26, 72] },
      { own: [30, 64], target: [72, 26] },
      { own: [70, 24], target: [34, 68] },
      { own: [40, 60], target: [76, 24] },
      { own: [68, 36], target: [28, 70] },
      { own: [33, 52], target: [74, 28] },
      { own: [72, 40], target: [31, 64] },
    ];

    const layout = layouts[globalIndex % layouts.length];
    if (mode === "Transmit") {
      return layout;
    }
    return { own: layout.target, target: layout.own };
  }

  function hazardClass(hazard) {
    return {
      fire: "hazard-fire",
      medical: "hazard-medical",
      sinking: "hazard-sinking",
      weather: "hazard-weather",
      obstruction: "hazard-obstruction",
      sar: "hazard-sar",
    }[hazard] || "hazard-sar";
  }

  function stageFor(template, context, globalIndex) {
    const layout = stagePositions(globalIndex, context.mode);
    const shipInTrouble = context.mode === "Transmit" ? "own" : "target";
    const ownClasses = [];
    const targetClasses = [];

    if (context.signal === "MAYDAY") {
      if (shipInTrouble === "own") {
        ownClasses.push("distress");
      } else {
        targetClasses.push("distress");
      }
    }

    if (template.hazard === "sinking") {
      if (shipInTrouble === "own") {
        ownClasses.push("listing");
      } else {
        targetClasses.push("listing");
      }
    }

    const hazardAnchor = shipInTrouble === "own" ? layout.own : layout.target;
    const hazardX = template.hazard === "weather" || template.hazard === "sar"
      ? (layout.own[0] + layout.target[0]) / 2
      : hazardAnchor[0] + (shipInTrouble === "own" ? 2 : 1);
    const hazardY = template.hazard === "weather" || template.hazard === "sar"
      ? (layout.own[1] + layout.target[1]) / 2
      : hazardAnchor[1] + (template.hazard === "sinking" ? 7 : -6);

    return {
      distance: context.distance,
      ownShip: {
        name: `${context.ownShipName}${context.mode === "Transmit" ? " (Own ship)" : " (Own ship)"}`,
        x: layout.own[0],
        y: layout.own[1],
        classes: ownClasses,
      },
      targetShip: {
        name: context.targetShipName,
        x: layout.target[0],
        y: layout.target[1],
        classes: targetClasses,
      },
      hazard: {
        x: Math.max(14, Math.min(86, hazardX)),
        y: Math.max(16, Math.min(82, hazardY)),
        classes: [hazardClass(template.hazard)],
      },
    };
  }

  function correctChoice(typeKey, template, context) {
    if (typeKey === "MAYDAY_TRANSMIT") {
      return {
        title: "Send a Mayday distress call with identity, position, nature of distress, assistance required, and persons on board.",
        meta: "Immediate outside help is required",
        actions: [
          "If fitted and connected, send the DSC distress alert first.",
          "Transmit the distress call and message on Channel 16.",
          "Maintain listening watch and update rescuers as the situation changes.",
        ],
        transmission: `MAYDAY MAYDAY MAYDAY
THIS IS ${context.ownShipName}, ${context.ownShipName}, ${context.ownShipName}
CALL SIGN ${context.callSign}, MMSI ${context.mmsi}
MAYDAY ${context.ownShipName}
POSITION ${context.position}
${template.nature}
REQUIRE ${template.assistance}
${template.people} PERSONS ON BOARD
OVER`,
        why: `Correct. ${template.story.split(".")[0]}. This is grave and imminent danger requiring immediate assistance.`,
        correct: true,
      };
    }

    if (typeKey === "PANPAN_TRANSMIT") {
      return {
        title: "Make a Pan Pan urgency announcement and request the urgent assistance or traffic priority needed.",
        meta: "Urgent but not yet distress",
        actions: [
          "Use the urgency signal on Channel 16.",
          "Pass the position, nature of the urgent problem, and what help is needed.",
          "Be ready to escalate to Mayday if the situation becomes grave and imminent.",
        ],
        transmission: `PAN PAN PAN PAN PAN PAN
ALL STATIONS ALL STATIONS ALL STATIONS
THIS IS ${context.ownShipName}, ${context.ownShipName}, ${context.ownShipName}
CALL SIGN ${context.callSign}, MMSI ${context.mmsi}
POSITION ${context.position}
${template.nature}
REQUEST ${template.assistance}
${template.people} PERSONS ON BOARD
OVER`,
        why: "Correct. The case is urgent and deserves priority traffic, but on the stated facts it is not yet grave and imminent distress.",
        correct: true,
      };
    }

    if (typeKey === "SECURITE_TRANSMIT") {
      return {
        title: "Issue a Securite safety announcement with the hazard or advisory and the precaution other vessels should take.",
        meta: "Navigational or meteorological safety traffic",
        actions: [
          "Use the safety signal for important navigation or weather information.",
          "State the hazard or advisory clearly with its position or affected area.",
          "Advise nearby traffic what precaution to take.",
        ],
        transmission: `SECURITE SECURITE SECURITE
ALL STATIONS ALL STATIONS ALL STATIONS
THIS IS ${context.ownShipName}, ${context.ownShipName}, ${context.ownShipName}
${template.warning}
POSITION ${context.position}
${template.advice}
OUT`,
        why: "Correct. This is safety information affecting navigation or weather awareness, not a distress or urgency case involving immediate rescue.",
        correct: true,
      };
    }

    if (typeKey === "MAYDAY_RECEIVE") {
      return {
        title: "Acknowledge the Mayday, state the assistance you can give and ETA, then relay it onward if needed.",
        meta: "Receive distress correctly",
        actions: [
          "Cease any traffic that could interfere with distress communications.",
          "Answer the casualty if no shore station acknowledges after a short interval.",
          "State what help you can give and relay the distress to shore if necessary.",
        ],
        transmission: `MAYDAY
${context.targetShipName}
THIS IS ${context.ownShipName}, ${context.ownShipName}, ${context.ownShipName}
RECEIVED MAYDAY
${template.support}
ETA ${template.eta}
WILL RELAY TO COASTGUARD
OVER`,
        why: "Correct. An unanswered distress call should be acknowledged by a ship able to assist, with practical help offered and relay action taken if required.",
        correct: true,
      };
    }

    if (typeKey === "PANPAN_RECEIVE") {
      return {
        title: "Follow the urgency traffic to the working channel, monitor it closely, and offer practical help if you can provide it safely.",
        meta: "Support without clogging the calling channel",
        actions: [
          "Keep the calling channel clear once the urgency traffic is organized.",
          "Plot the casualty and assess what help you can safely provide.",
          "Offer specific assistance, such as standing by or escorting, only if useful and practical.",
        ],
        transmission: `PAN PAN ${context.targetShipName}
THIS IS ${context.ownShipName}
${template.support}
ETA ${template.eta}
OVER`,
        why: "Correct. Once urgency traffic is acknowledged and moved, you should monitor it properly and offer useful help without cluttering the priority calling channel.",
        correct: true,
      };
    }

    return {
      title: "Copy the safety traffic, adjust navigation or watchkeeping as needed, and keep the calling channel clear unless a reply is required.",
      meta: "Correct safety response",
      actions: [
        "Listen out for the full details of the warning or advisory.",
        "Log the information and adjust route, speed, lookout, or bridge briefing as required.",
        "Avoid unnecessary transmissions on the calling channel.",
      ],
      transmission: `No routine reply is required unless your vessel is specifically called.
Bridge action: ${template.bridgeAction}.`,
      why: "Correct. Safety traffic is there to inform bridge decisions and watchkeeping discipline rather than invite unnecessary acknowledgments.",
      correct: true,
    };
  }

  function wrongChoices(typeKey, context) {
    if (typeKey === "MAYDAY_TRANSMIT") {
      return [
        {
          title: "Transmit Pan Pan because the crew is still trying to control the situation onboard.",
          meta: "Urgency traffic",
          actions: ["Stay on Channel 16 and request monitoring only.", "Avoid using distress wording until the damage becomes totally uncontrollable.", "Escalate later if abandonment becomes certain."],
          transmission: `PAN PAN PAN PAN PAN PAN
ALL STATIONS ALL STATIONS ALL STATIONS
THIS IS ${context.ownShipName}
URGENT PROBLEM ON BOARD
OUT`,
          why: "Too low a priority. A Mayday case should not be downgraded just because the crew is still fighting the emergency.",
          correct: false,
        },
        {
          title: "Send Securite to warn nearby traffic to keep clear of your ship.",
          meta: "Safety warning only",
          actions: ["Issue a short warning about your position.", "Avoid the distress vocabulary so the channel stays open.", "Update later if the emergency becomes worse."],
          transmission: `SECURITE SECURITE SECURITE
ALL STATIONS
THIS IS ${context.ownShipName}
KEEP CLEAR OF OUR POSITION
OUT`,
          why: "Not enough. Securite is for navigational or meteorological safety information, not a vessel in grave and imminent danger needing rescue.",
          correct: false,
        },
        {
          title: "Call a port or company working channel first and ask whether they think Coastguard help is necessary.",
          meta: "Routine working traffic",
          actions: ["Move off the priority channel immediately.", "Describe the emergency only to the working station.", "Wait for advice before raising a distress call."],
          transmission: `PORT CONTROL, PORT CONTROL, THIS IS ${context.ownShipName}, REQUEST ADVICE ONBOARD EMERGENCY.`,
          why: "Wrong priority and sequence. Distress traffic should not be delayed while routine advice is sought.",
          correct: false,
        },
        {
          title: "Wait until the master orders abandon ship before sending any priority call.",
          meta: "Delays transmission",
          actions: ["Focus entirely on internal actions first.", "Use the radio only once survival craft are ready.", "Conserve the battery until the last moment."],
          transmission: "No transmission.",
          why: "Waiting wastes valuable response time. Distress traffic exists so help can start moving before the emergency becomes irrecoverable.",
          correct: false,
        },
      ];
    }

    if (typeKey === "PANPAN_TRANSMIT") {
      return [
        {
          title: "Transmit Mayday because any serious onboard problem should automatically be distress traffic.",
          meta: "Too high a priority",
          actions: ["Raise full distress immediately.", "Assume rescue is required before reassessment.", "Stay on the distress channel until directed otherwise."],
          transmission: `MAYDAY MAYDAY MAYDAY
THIS IS ${context.ownShipName}
URGENT PROBLEM ON BOARD
OVER`,
          why: "Too high. Pan Pan exists for urgent cases that are serious but not yet grave and imminent distress.",
          correct: false,
        },
        {
          title: "Use Securite because the issue affects safety and other vessels should know about it.",
          meta: "Wrong category",
          actions: ["Broadcast a safety announcement only.", "Avoid asking directly for urgent help.", "Treat the event as general safety traffic."],
          transmission: `SECURITE SECURITE SECURITE
ALL STATIONS
THIS IS ${context.ownShipName}
URGENT ASSISTANCE REQUIRED
OUT`,
          why: "Incorrect. Securite is not the right category for an urgent operational or medical problem on a vessel.",
          correct: false,
        },
        {
          title: "Make only a routine coast station call because the vessel is still afloat and functioning in some way.",
          meta: "Too low a priority",
          actions: ["Use standard calling procedure.", "Wait in routine order for the station to reply.", "Escalate only if conditions worsen much later."],
          transmission: `COASTGUARD, COASTGUARD, THIS IS ${context.ownShipName}, REQUEST ROUTINE ASSISTANCE.`,
          why: "Not ideal. The stated problem is urgent enough to justify urgency priority rather than routine traffic.",
          correct: false,
        },
        {
          title: "Wait to see whether the situation deteriorates into clear distress before using any priority signal at all.",
          meta: "Dangerous delay",
          actions: ["Handle it entirely internally for now.", "Avoid using Channel 16 yet.", "Reassess later if the symptoms worsen."],
          transmission: "No transmission.",
          why: "Waiting defeats the purpose of Pan Pan, which exists so help and traffic protection can begin before the case turns into distress.",
          correct: false,
        },
      ];
    }

    if (typeKey === "SECURITE_TRANSMIT") {
      return [
        {
          title: "Transmit Mayday because another vessel might be endangered if the hazard is not reported quickly.",
          meta: "Too high a priority",
          actions: ["Treat the navigation hazard itself as distress traffic.", "Call for rescue units immediately.", "Hold the distress channel until the hazard is removed."],
          transmission: `MAYDAY MAYDAY MAYDAY
HAZARD TO NAVIGATION REPORTED
OVER`,
          why: "Too high. There is no specific vessel presently in grave and imminent danger requiring rescue.",
          correct: false,
        },
        {
          title: "Transmit Pan Pan because the matter is urgent and concerns vessel safety in the area.",
          meta: "Wrong priority signal",
          actions: ["Class the warning as urgency traffic.", "Move it to a working channel as if it were a casualty case.", "Request acknowledgments from nearby ships."],
          transmission: `PAN PAN PAN PAN PAN PAN
ALL STATIONS
HAZARD REPORTED IN POSITION ${context.position}
OUT`,
          why: "Not the best choice. A navigation or weather warning belongs under Securite rather than Pan Pan.",
          correct: false,
        },
        {
          title: "Call one nearby vessel privately and let that ship pass the word informally.",
          meta: "Too limited",
          actions: ["Avoid a wider broadcast.", "Pass the information ship-to-ship only.", "Inform shore later if time allows."],
          transmission: `${context.targetShipName}, ${context.targetShipName}, THIS IS ${context.ownShipName}, THERE IS A HAZARD AHEAD.`,
          why: "Insufficient. A broad safety hazard affecting multiple vessels should be passed using formal safety traffic, not only private routine traffic.",
          correct: false,
        },
        {
          title: "Wait until a second sensor or another ship confirms the hazard before warning anyone.",
          meta: "Unnecessary delay",
          actions: ["Hold the report for more confirmation.", "Continue normal watch only.", "Warn traffic only after you are completely sure."],
          transmission: "No transmission.",
          why: "Delay increases risk. If you have a credible sighting of an immediate navigation or weather hazard, warning traffic promptly is the safer move.",
          correct: false,
        },
      ];
    }

    if (typeKey === "MAYDAY_RECEIVE") {
      return [
        {
          title: "Reply with Pan Pan because your own ship is not in distress and you are only offering support.",
          meta: "Wrong signal on response",
          actions: ["Use urgency wording to avoid taking charge of the distress traffic.", "Tell the casualty you might be able to help.", "Wait for shore before giving details."],
          transmission: `PAN PAN PAN PAN PAN PAN
${context.targetShipName}
THIS IS ${context.ownShipName}
WE MAY BE ABLE TO ASSIST
OVER`,
          why: "Incorrect phraseology. You do not downgrade a distress call to urgency traffic when responding to it.",
          correct: false,
        },
        {
          title: "Stay silent because only coast stations should acknowledge a distress call.",
          meta: "Passive response",
          actions: ["Continue normal watch only.", "Assume coordination is already underway.", "Wait until the casualty calls your ship directly."],
          transmission: "No transmission.",
          why: "Wrong. Ships able to assist can and should answer an unanswered distress call.",
          correct: false,
        },
        {
          title: "Move the casualty to a working channel immediately so Channel 16 stays clear.",
          meta: "Leaves distress frequency",
          actions: ["Switch away from the distress channel at once.", "Discuss assistance privately.", "Return later if needed."],
          transmission: `${context.targetShipName}, SWITCH CHANNEL 72 FOR ASSISTANCE DETAILS.`,
          why: "Incorrect. Live distress traffic should not be moved casually off the distress or calling frequency.",
          correct: false,
        },
        {
          title: "Send Mayday Relay immediately before checking whether another station is about to answer.",
          meta: "Premature relay",
          actions: ["Assume the original call was not heard ashore.", "Repeat the distress straight away.", "Skip direct contact with the casualty."],
          transmission: `MAYDAY RELAY MAYDAY RELAY MAYDAY RELAY
THIS IS ${context.ownShipName}
DISTRESS REPORTED BY ${context.targetShipName}
OVER`,
          why: "A relay may become necessary, but first you should allow a short interval and acknowledge directly if you can assist.",
          correct: false,
        },
      ];
    }

    if (typeKey === "PANPAN_RECEIVE") {
      return [
        {
          title: "Interrupt Channel 16 with a long message describing everything you could do for the casualty.",
          meta: "Clutters the calling channel",
          actions: ["Stay on the calling channel to keep your message high priority.", "Explain your approach plan in full detail.", "Do not wait for the existing coordination to continue."],
          transmission: `ALL STATIONS, THIS IS ${context.ownShipName}, WE ARE AVAILABLE TO ASSIST ${context.targetShipName}.`,
          why: "Poor radio discipline. Once urgency traffic is acknowledged and moved, the calling channel should be kept clear.",
          correct: false,
        },
        {
          title: "Escalate the urgency case to Mayday Relay immediately without evidence that it has become distress traffic.",
          meta: "Premature escalation",
          actions: ["Assume the casualty under-called the emergency.", "Take over the traffic yourself.", "Broadcast a relay without consultation."],
          transmission: `MAYDAY RELAY MAYDAY RELAY MAYDAY RELAY
URGENT CASE INVOLVING ${context.targetShipName}
OVER`,
          why: "Not yet justified. An acknowledged urgency case should remain urgency traffic unless the facts clearly escalate into distress.",
          correct: false,
        },
        {
          title: "Ignore the traffic because a coast station is already coordinating it.",
          meta: "No practical support offered",
          actions: ["Continue passage as normal.", "Assume your help will not be needed.", "Do not plot the casualty position."],
          transmission: "No transmission.",
          why: "Incorrect. Even when a coast station is coordinating, nearby ships should still assess whether they can provide useful practical assistance.",
          correct: false,
        },
        {
          title: "Switch the casualty to a different private channel of your own choosing.",
          meta: "Breaks established coordination",
          actions: ["Move the urgency traffic onto a random channel.", "Bypass the nominated working channel.", "Coordinate outside the recognized framework."],
          transmission: `${context.targetShipName}, SWITCH TO CHANNEL 13 FOR HELP.`,
          why: "Incorrect. Once a working channel is designated, you should use that channel unless instructed otherwise by the coordinating station.",
          correct: false,
        },
      ];
    }

    return [
      {
        title: "Acknowledge the safety message with Mayday so the station knows you have copied it.",
        meta: "Misuses distress",
        actions: ["Treat the broadcast as your own distress traffic.", "Reply on the calling channel immediately.", "Ask for rescue units to remain on standby for your ship."],
        transmission: `MAYDAY, THIS IS ${context.ownShipName}, RECEIVED SAFETY MESSAGE.`,
        why: "Incorrect. A safety broadcast does not put your vessel into distress traffic.",
        correct: false,
      },
      {
        title: "Ignore the message because Securite is only advisory and your ship is not yet in trouble.",
        meta: "Unsafe complacency",
        actions: ["Continue unchanged.", "Do not note the warning.", "Assume the advisory is for someone else."],
        transmission: "No transmission.",
        why: "Unsafe. Safety traffic exists so ships can adjust before a problem becomes an emergency.",
        correct: false,
      },
      {
        title: "Use Pan Pan to ask all other ships what they plan to do about the warning.",
        meta: "Wrong priority and poor discipline",
        actions: ["Start an urgency discussion on the calling channel.", "Collect route opinions from other traffic.", "Keep the channel busy with nonessential discussion."],
        transmission: `PAN PAN ALL STATIONS, WHAT ARE YOUR INTENTIONS REGARDING THE WARNING?`,
        why: "Incorrect. This would clutter the calling channel and misuse Pan Pan.",
        correct: false,
      },
      {
        title: "Switch off the VHF after copying the message so the bridge can concentrate on ship handling.",
        meta: "Breaks listening watch",
        actions: ["Silence the radio.", "Rely on visual lookout only.", "Reconnect later when convenient."],
        transmission: "No transmission.",
        why: "Wrong. A listening watch should be maintained, especially when active safety traffic affects your area.",
        correct: false,
      },
    ];
  }

  function buildScenario(typeKey, template, level, slot, globalIndex) {
    const config = typeConfig(typeKey);
    const ownShipName = shipName(ownShipNames, globalIndex);
    const targetShipName = shipName(targetShipNames, globalIndex + 3);
    const context = {
      ...config,
      ownShipName,
      targetShipName,
      callSign: callSign(globalIndex),
      mmsi: mmsi(globalIndex),
      position: positionFor(level, slot),
      distance: distanceFor(level, slot),
    };

    return {
      id: `level-${level}-${slot}-${typeKey.toLowerCase()}`,
      level,
      signal: config.signal,
      mode: config.mode,
      roleBadge: config.roleBadge,
      title: template.title,
      story: template.story,
      question: config.question,
      coaching: config.coaching,
      stage: stageFor(template, context, globalIndex),
      choices: [correctChoice(typeKey, template, context), ...wrongChoices(typeKey, context)],
    };
  }

  function buildScenarioBank() {
    const bank = [];

    for (let level = 1; level <= 10; level += 1) {
      const baseIndex = level - 1;
      const advancedIndex = baseIndex + 10;

      bank.push(buildScenario("MAYDAY_TRANSMIT", maydayTransmitTemplates[baseIndex], level, 1, bank.length));
      bank.push(buildScenario("PANPAN_TRANSMIT", panPanTransmitTemplates[baseIndex], level, 2, bank.length));
      bank.push(buildScenario("SECURITE_TRANSMIT", securiteTransmitTemplates[baseIndex], level, 3, bank.length));
      bank.push(buildScenario("MAYDAY_RECEIVE", maydayReceiveTemplates[baseIndex], level, 4, bank.length));
      bank.push(buildScenario("SECURITE_RECEIVE", securiteReceiveTemplates[baseIndex], level, 5, bank.length));
      bank.push(buildScenario("PANPAN_RECEIVE", panPanReceiveTemplates[baseIndex], level, 6, bank.length));
      bank.push(buildScenario("MAYDAY_TRANSMIT", maydayTransmitTemplates[advancedIndex], level, 7, bank.length));
      bank.push(buildScenario("PANPAN_TRANSMIT", panPanTransmitTemplates[advancedIndex], level, 8, bank.length));
      bank.push(buildScenario("SECURITE_TRANSMIT", securiteTransmitTemplates[advancedIndex], level, 9, bank.length));
      bank.push(buildScenario("MAYDAY_RECEIVE", maydayReceiveTemplates[advancedIndex], level, 10, bank.length));
    }

    return bank;
  }

  window.buildScenarioBank = buildScenarioBank;
})();

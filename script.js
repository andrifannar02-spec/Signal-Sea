const scenarios = [
  {
    id: "mayday-fire-transmit",
    signal: "MAYDAY",
    mode: "Transmit",
    roleBadge: "Own ship in distress",
    title: "Engine Room Fire With Smoke Spread",
    story:
      "You are the radio operator on MV Solway Crest. A fire has broken out in the engine room, smoke is spreading to the lower accommodation, and the vessel has started to lose propulsion. Fire teams are engaged, but the master believes external assistance may be needed immediately.",
    question:
      "Which radiotelephony action best matches the correct protocol right now?",
    coaching:
      "Exam cue: a fire threatening the vessel and requiring immediate outside assistance is distress traffic, not urgency traffic.",
    stage: {
      distance: "12.6 NM",
      ownShip: {
        name: "MV Solway Crest (Own ship)",
        x: 28,
        y: 62,
        classes: ["distress"],
      },
      targetShip: {
        name: "MV Atlantic Shore",
        x: 77,
        y: 24,
        classes: [],
      },
      hazard: {
        x: 29,
        y: 55,
        classes: ["hazard-fire"],
      },
    },
    choices: [
      {
        title:
          "Send a Mayday distress call with identity, position, nature of distress, assistance required, and persons on board.",
        meta: "Immediate outside help is required",
        actions: [
          "If fitted and connected, send the DSC distress alert first.",
          "Transmit the distress call and message on Channel 16.",
          "Keep listening watch and update rescuers as the situation changes.",
        ],
        transmission: `MAYDAY MAYDAY MAYDAY
THIS IS MV SOLWAY CREST, MV SOLWAY CREST, MV SOLWAY CREST
CALL SIGN 2GSC7, MMSI 235991240
MAYDAY MV SOLWAY CREST
POSITION 50 DEGREES 42.5 MINUTES NORTH 001 DEGREES 18.2 MINUTES WEST
ENGINE ROOM FIRE, HEAVY SMOKE, PROPULSION AFFECTED
REQUIRE IMMEDIATE FIREFIGHTING ASSISTANCE AND STANDBY FOR POSSIBLE EVACUATION
11 PERSONS ON BOARD
OVER`,
        why:
          "Correct. This is grave and imminent danger with immediate assistance required, so Mayday is the right signal. The key elements are the vessel's identity, position, nature of distress, assistance needed, and persons on board.",
        correct: true,
      },
      {
        title:
          "Transmit Pan Pan because the crew is still fighting the fire and the vessel has not yet been abandoned.",
        meta: "Urgency traffic",
        actions: [
          "Stay on Channel 16 and request monitoring only.",
          "Do not describe the full distress details until the fire worsens.",
          "Call Mayday only if abandoning ship becomes certain.",
        ],
        transmission: `PAN PAN PAN PAN PAN PAN
ALL STATIONS ALL STATIONS ALL STATIONS
THIS IS MV SOLWAY CREST
ENGINE ROOM FIRE UNDER CONTROL FOR NOW
STANDING BY
OUT`,
        why:
          "Too low a priority. A serious onboard fire threatening the vessel and requiring prompt outside help is distress traffic, even if the crew is still fighting it.",
        correct: false,
      },
      {
        title:
          "Send Securite to warn nearby traffic that your vessel has reduced maneuverability.",
        meta: "Safety warning only",
        actions: [
          "Give a short warning about smoke on board.",
          "Avoid using distress wording so Channel 16 stays open.",
          "Update traffic later if the vessel actually needs rescue.",
        ],
        transmission: `SECURITE SECURITE SECURITE
ALL STATIONS ALL STATIONS ALL STATIONS
THIS IS MV SOLWAY CREST
VESSEL WITH ENGINE PROBLEMS AND SOME SMOKE IN POSITION 50 42.5 NORTH 001 18.2 WEST
KEEP CLEAR
OUT`,
        why:
          "Not enough. Securite is for navigation or meteorological safety information, not for a vessel in immediate danger from fire.",
        correct: false,
      },
      {
        title:
          "Call the nearest port operations channel first and ask whether they think Coastguard assistance is necessary.",
        meta: "Routine working traffic",
        actions: [
          "Move off Channel 16 immediately.",
          "Describe the fire only to the port authority.",
          "Wait for instructions before raising a distress call.",
        ],
        transmission: `PORT CONTROL, PORT CONTROL, PORT CONTROL
THIS IS MV SOLWAY CREST
WE HAVE AN ENGINE ROOM FIRE AND REQUEST ADVICE
OVER`,
        why:
          "Incorrect priority and sequence. Distress traffic should not be delayed while you seek routine advice from port operations.",
        correct: false,
      },
      {
        title:
          "Keep radio silence until the master orders abandon ship, then send a single distress message with liferaft details.",
        meta: "Delay transmission",
        actions: [
          "Focus entirely on internal firefighting first.",
          "Use the radio only once the situation becomes uncontrollable.",
          "Conserve battery power until the last possible moment.",
        ],
        transmission: `MAYDAY
ABANDONING SHIP NOW
REQUIRE IMMEDIATE PICKUP
OVER`,
        why:
          "Waiting wastes time. Distress traffic is intended to summon help early enough for it to arrive before the emergency becomes unrecoverable.",
        correct: false,
      },
    ],
  },
  {
    id: "mayday-receive-sinking",
    signal: "MAYDAY",
    mode: "Receive",
    roleBadge: "Own ship responding",
    title: "Unanswered Sinking Vessel Nearby",
    story:
      "On Channel 16 you hear FV Lantern Rock transmit a broken but readable Mayday. The fishing vessel reports rapid flooding after striking an object and lists heavily to port. No coast station acknowledgment follows, and your ship is 8.4 nautical miles away and able to assist.",
    question:
      "What is the best next action for your ship after a short listening pause?",
    coaching:
      "Exam cue: on hearing an unanswered distress call, keep distress traffic clear, acknowledge if you can assist, and relay if necessary.",
    stage: {
      distance: "8.4 NM",
      ownShip: {
        name: "MV Norham (Own ship)",
        x: 74,
        y: 32,
        classes: [],
      },
      targetShip: {
        name: "FV Lantern Rock",
        x: 30,
        y: 66,
        classes: ["distress", "listing"],
      },
      hazard: {
        x: 31,
        y: 72,
        classes: ["hazard-sinking"],
      },
    },
    choices: [
      {
        title:
          "Acknowledge the Mayday, state the assistance you can give and ETA, then relay the distress to an appropriate coast station by any available means.",
        meta: "Receive distress correctly",
        actions: [
          "Cease any traffic that could interfere with distress communications.",
          "Answer the casualty if no one else acknowledges after a short interval.",
          "State what help you can provide and pass the distress onward if needed.",
        ],
        transmission: `MAYDAY
FV LANTERN ROCK
THIS IS MV NORHAM, MV NORHAM, MV NORHAM
CALL SIGN 2BNH9
RECEIVED MAYDAY
PROCEEDING TO YOUR POSITION, ETA 22 MINUTES
WILL RELAY TO COASTGUARD
OVER`,
        why:
          "Correct. When a distress call is unanswered and you can assist, you should acknowledge it, keep distress traffic clear, and relay it to shore if necessary.",
        correct: true,
      },
      {
        title:
          "Reply with Pan Pan because your own ship is not in distress and you are only offering support.",
        meta: "Wrong signal on response",
        actions: [
          "Use urgency wording to avoid taking control of the distress traffic.",
          "Tell the casualty you are available to help.",
          "Wait for Coastguard before giving ETA.",
        ],
        transmission: `PAN PAN PAN PAN PAN PAN
FV LANTERN ROCK
THIS IS MV NORHAM
WE MAY BE ABLE TO ASSIST
OVER`,
        why:
          "Incorrect phraseology. You respond to a Mayday using the distress context, not by downgrading the traffic to Pan Pan.",
        correct: false,
      },
      {
        title:
          "Stay silent because only coast stations are allowed to acknowledge a distress call.",
        meta: "Passive response",
        actions: [
          "Continue normal watch only.",
          "Assume rescue coordination is already under way.",
          "Wait until the casualty calls your ship specifically.",
        ],
        transmission: `No transmission.`,
        why:
          "Wrong. Ships can and should answer an unanswered distress call when able to assist.",
        correct: false,
      },
      {
        title:
          "Move to a working channel immediately and try to contact the casualty privately so Channel 16 stays clear.",
        meta: "Leaves distress frequency",
        actions: [
          "Switch away from Channel 16 at once.",
          "Discuss towing options on a quieter channel.",
          "Return to 16 once a plan is agreed.",
        ],
        transmission: `FV LANTERN ROCK, SWITCH CHANNEL 72 FOR ASSISTANCE DETAILS.`,
        why:
          "Incorrect. Distress traffic should remain clear and controlled, and you should not casually move a live distress situation off the distress frequency.",
        correct: false,
      },
      {
        title:
          "Transmit Mayday Relay immediately before checking whether another station is already about to answer.",
        meta: "Premature relay",
        actions: [
          "Assume the original signal was too weak to be heard ashore.",
          "Repeat the message word for word straight away.",
          "Do not attempt direct contact with the casualty first.",
        ],
        transmission: `MAYDAY RELAY MAYDAY RELAY MAYDAY RELAY
THIS IS MV NORHAM
DISTRESS REPORTED BY FV LANTERN ROCK
OVER`,
        why:
          "A relay may become necessary, but first you should keep watch, allow a short interval, and acknowledge directly if you can assist. This option skips that sequence.",
        correct: false,
      },
    ],
  },
  {
    id: "panpan-medical-transmit",
    signal: "PAN PAN",
    mode: "Transmit",
    roleBadge: "Own ship requesting help",
    title: "Crew Injury Requiring Urgent Medical Advice",
    story:
      "A crew member on board coastal tanker MT Calder Vale has fallen down a ladder and suffered a badly broken forearm. Bleeding is controlled, the patient is breathing normally, and the master wants urgent medical advice and a possible rendezvous, but there is no immediate grave danger to the vessel or the casualty's airway.",
    question:
      "What is the best protocol to initiate first?",
    coaching:
      "Exam cue: if the matter is urgent but not grave and imminent, Pan Pan is the right level.",
    stage: {
      distance: "16.1 NM",
      ownShip: {
        name: "MT Calder Vale (Own ship)",
        x: 34,
        y: 58,
        classes: [],
      },
      targetShip: {
        name: "Rescue vessel Humber Star",
        x: 72,
        y: 30,
        classes: [],
      },
      hazard: {
        x: 36,
        y: 49,
        classes: ["hazard-medical"],
      },
    },
    choices: [
      {
        title:
          "Make a Pan Pan urgency announcement, move the traffic to a working channel, and request urgent medical advice.",
        meta: "Urgent but not distress",
        actions: [
          "Use the urgency signal on Channel 16 to alert stations.",
          "Nominate or accept a working channel for the detailed medical traffic.",
          "Pass the patient's condition, position, and what assistance is requested.",
        ],
        transmission: `PAN PAN PAN PAN PAN PAN
ALL STATIONS ALL STATIONS ALL STATIONS
THIS IS MT CALDER VALE, MT CALDER VALE, MT CALDER VALE
CALL SIGN 2CVL6, MMSI 235770145
PLEASE GO TO CHANNEL 67
OUT

CHANNEL 67:
PAN PAN
THIS IS MT CALDER VALE
POSITION 54 DEGREES 12.8 MINUTES NORTH 000 DEGREES 45.1 MINUTES EAST
CREW MEMBER WITH SUSPECTED FRACTURE, BLEEDING CONTROLLED, PATIENT CONSCIOUS
REQUEST URGENT MEDICAL ADVICE AND POSSIBLE RENDEZVOUS
18 PERSONS ON BOARD
OVER`,
        why:
          "Correct. The situation needs prompt assistance and communication priority, but it is not yet a grave and imminent danger requiring Mayday.",
        correct: true,
      },
      {
        title:
          "Transmit Mayday because any serious injury automatically counts as distress traffic.",
        meta: "Too high a priority",
        actions: [
          "Raise full distress immediately.",
          "Request helicopter evacuation without further assessment.",
          "Stay on Channel 16 until responders decide otherwise.",
        ],
        transmission: `MAYDAY MAYDAY MAYDAY
THIS IS MT CALDER VALE
MEDICAL EMERGENCY ON BOARD
OVER`,
        why:
          "Too high. Mayday is reserved for grave and imminent danger. A stable casualty needing urgent advice is typically urgency traffic unless the condition becomes immediately life threatening.",
        correct: false,
      },
      {
        title:
          "Use Securite because the information is important to the safety of the person on board.",
        meta: "Wrong category",
        actions: [
          "Broadcast to all ships that a casualty exists.",
          "Ask if any doctor is nearby.",
          "Leave the rest to routine traffic.",
        ],
        transmission: `SECURITE SECURITE SECURITE
ALL STATIONS
THIS IS MT CALDER VALE
REQUEST MEDICAL HELP
OUT`,
        why:
          "Incorrect. Securite is for navigation and weather safety information, not an urgent onboard casualty case.",
        correct: false,
      },
      {
        title:
          "Send a routine call to Coastguard because the patient is conscious and the ship itself is not in danger.",
        meta: "Too low a priority",
        actions: [
          "Use standard coast station calling procedure.",
          "Wait in the queue for a routine response.",
          "Escalate only if the pain worsens.",
        ],
        transmission: `COASTGUARD, COASTGUARD, THIS IS MT CALDER VALE REQUEST ROUTINE MEDICAL ADVICE.`,
        why:
          "Not ideal. The matter is urgent enough to justify urgency priority rather than routine traffic.",
        correct: false,
      },
      {
        title:
          "Wait until the patient loses consciousness before using a priority signal, to avoid over-calling the emergency.",
        meta: "Dangerous delay",
        actions: [
          "Continue first aid only.",
          "Do not use Channel 16 yet.",
          "Reassess in thirty minutes.",
        ],
        transmission: `No transmission.`,
        why:
          "Waiting is unsafe. Urgency traffic exists specifically so ships can request timely help before the situation deteriorates into distress.",
        correct: false,
      },
    ],
  },
  {
    id: "panpan-receive-drifting",
    signal: "PAN PAN",
    mode: "Receive",
    roleBadge: "Own ship monitoring urgency traffic",
    title: "Disabled Yacht Drifting Toward Lee Shore",
    story:
      "You hear SY Sea Mist transmit Pan Pan after losing propulsion in thick fog. Coastguard acknowledges the urgency traffic, nominates Channel 67, and the yacht reports it is drifting toward a rocky lee shore. Your ship is close enough to stand by but has not yet been asked directly to tow.",
    question:
      "What is the best response from your ship now?",
    coaching:
      "Exam cue: once urgency traffic is acknowledged and moved, keep Channel 16 clear and only join the working traffic if you can offer useful assistance.",
    stage: {
      distance: "5.9 NM",
      ownShip: {
        name: "MV Petrel (Own ship)",
        x: 72,
        y: 26,
        classes: [],
      },
      targetShip: {
        name: "SY Sea Mist",
        x: 36,
        y: 66,
        classes: [],
      },
      hazard: {
        x: 24,
        y: 78,
        classes: ["hazard-sinking"],
      },
    },
    choices: [
      {
        title:
          "Shift with the traffic to the nominated working channel, monitor the urgency message, and offer assistance only if you can genuinely help.",
        meta: "Support without clogging Channel 16",
        actions: [
          "Keep Channel 16 free once the urgency traffic is moved.",
          "Plot the casualty's position and assess your ability to assist safely.",
          "Offer specific help, such as standing by, towing, or escorting, only if capable.",
        ],
        transmission: `CHANNEL 67:
PAN PAN SY SEA MIST
THIS IS MV PETREL
WE ARE 5 MILES NORTH-EAST OF YOUR POSITION AND CAN STANDBY TO LEEWARD
ETA 15 MINUTES
OVER`,
        why:
          "Correct. Once the urgency call has been acknowledged and moved, you should follow it to the working channel, monitor, and offer practical help if you can provide it.",
        correct: true,
      },
      {
        title:
          "Interrupt Channel 16 with your own long report so every vessel in the area knows you are available to tow.",
        meta: "Clutters priority channel",
        actions: [
          "Stay on 16 to keep your message high priority.",
          "Describe your towing gear and approach plan in detail.",
          "Do not wait for Coastguard direction.",
        ],
        transmission: `ALL STATIONS, THIS IS MV PETREL, WE ARE GOING TO TOW SY SEA MIST.`,
        why:
          "Poor radio discipline. Once the traffic is acknowledged and moved, Channel 16 should be kept clear for distress, safety, and calling.",
        correct: false,
      },
      {
        title:
          "Escalate the yacht's Pan Pan to a Mayday Relay immediately because a lee shore is always distress traffic.",
        meta: "Premature escalation",
        actions: [
          "Assume the yacht under-called the emergency.",
          "Take control of the traffic on behalf of the casualty.",
          "Broadcast the relay without consulting Coastguard.",
        ],
        transmission: `MAYDAY RELAY MAYDAY RELAY MAYDAY RELAY
SY SEA MIST DRIFTING TO A LEE SHORE
OVER`,
        why:
          "Not yet justified. The urgency traffic is already active and acknowledged, so you should monitor and assist within that framework unless the situation clearly escalates.",
        correct: false,
      },
      {
        title:
          "Ignore the traffic because only coast stations should respond to Pan Pan communications.",
        meta: "No assistance offered",
        actions: [
          "Continue passage as normal.",
          "Assume rescue assets are closer.",
          "Do not plot the casualty's position.",
        ],
        transmission: `No transmission.`,
        why:
          "Incorrect. Ships may assist during urgency traffic when they are able to do so safely and usefully.",
        correct: false,
      },
      {
        title:
          "Reply on Channel 13 because it is the bridge-to-bridge channel and more suitable for navigation matters.",
        meta: "Wrong channel",
        actions: [
          "Move the yacht off the nominated working channel.",
          "Coordinate the tow on Channel 13 immediately.",
          "Leave Coastguard out of the conversation.",
        ],
        transmission: `SY SEA MIST, SWITCH TO CHANNEL 13 FOR TOW INSTRUCTIONS.`,
        why:
          "Incorrect. The urgency traffic has already been organized on a nominated working channel, and that channel should be used unless instructed otherwise.",
        correct: false,
      },
    ],
  },
  {
    id: "securite-transmit-container",
    signal: "SECURITE",
    mode: "Transmit",
    roleBadge: "Own ship passing safety information",
    title: "Semi-Submerged Container In The Fairway",
    story:
      "After a night of heavy weather, your bridge team spots a semi-submerged freight container drifting close to a busy approach lane. There is no vessel currently in distress, but the hazard could cause a serious collision if traffic is not warned quickly.",
    question:
      "What is the best protocol and message style to use first?",
    coaching:
      "Exam cue: an immediate navigational hazard is safety traffic. Pass the warning clearly and direct ships to the detailed information channel if needed.",
    stage: {
      distance: "3.2 NM",
      ownShip: {
        name: "MV Tern Point (Own ship)",
        x: 64,
        y: 30,
        classes: [],
      },
      targetShip: {
        name: "Coaster Bluehaven",
        x: 26,
        y: 72,
        classes: [],
      },
      hazard: {
        x: 44,
        y: 50,
        classes: ["hazard-obstruction"],
      },
    },
    choices: [
      {
        title:
          "Issue a Securite safety announcement and pass the navigational warning to Coastguard with the hazard position and advice to keep clear.",
        meta: "Navigational safety traffic",
        actions: [
          "Use the safety signal for an important hazard to navigation.",
          "State the position of the drifting object clearly.",
          "Advise nearby traffic to keep sharp lookout and keep clear.",
        ],
        transmission: `SECURITE SECURITE SECURITE
ALL STATIONS ALL STATIONS ALL STATIONS
THIS IS MV TERN POINT, MV TERN POINT, MV TERN POINT
DRIFTING SEMI-SUBMERGED CONTAINER IN POSITION 51 DEGREES 28.4 MINUTES NORTH 001 DEGREES 02.6 MINUTES EAST
HAZARD TO NAVIGATION IN THE APPROACH LANE
VESSELS KEEP SHARP LOOKOUT AND KEEP CLEAR
OUT`,
        why:
          "Correct. This is a safety warning about a navigation hazard, not distress or urgency traffic from a vessel needing rescue.",
        correct: true,
      },
      {
        title:
          "Transmit Mayday because another ship might hit the container if traffic is not warned immediately.",
        meta: "Too high a priority",
        actions: [
          "Treat the hazard itself as a distress case.",
          "Request rescue units to guard the position.",
          "Stay on Channel 16 until the hazard is recovered.",
        ],
        transmission: `MAYDAY MAYDAY MAYDAY
DRIFTING CONTAINER IN FAIRWAY
OVER`,
        why:
          "Too high. There is no current grave and imminent danger to your vessel or another identified casualty requiring immediate rescue.",
        correct: false,
      },
      {
        title:
          "Transmit Pan Pan because the hazard is urgent and could affect the safety of vessels in the area.",
        meta: "Wrong category",
        actions: [
          "Class the drifting object as urgency traffic.",
          "Move the warning to a working channel.",
          "Ask nearby vessels to acknowledge.",
        ],
        transmission: `PAN PAN PAN PAN PAN PAN
ALL STATIONS
DRIFTING CONTAINER IN POSITION 51 28.4 NORTH 001 02.6 EAST
OUT`,
        why:
          "Not the best choice. A drifting container is primarily a navigational safety warning, which fits Securite.",
        correct: false,
      },
      {
        title:
          "Call the nearest ship privately on a working channel and let them spread the warning by word of mouth.",
        meta: "Too limited",
        actions: [
          "Avoid a broadcast.",
          "Pass the information vessel to vessel only.",
          "Inform Coastguard later if time permits.",
        ],
        transmission: `BLUEHAVEN, BLUEHAVEN, THIS IS TERN POINT, THERE IS DEBRIS AHEAD OF YOU.`,
        why:
          "Insufficient. A broad navigational hazard affecting multiple ships should be passed using safety traffic, not only by private routine calls.",
        correct: false,
      },
      {
        title:
          "Wait to see whether radar confirms the container before making any safety call, even though it is clearly visible by eye.",
        meta: "Unnecessary delay",
        actions: [
          "Hold the report until more sensors agree.",
          "Continue normal watch only.",
          "Reassess after passing the object.",
        ],
        transmission: `No transmission.`,
        why:
          "Delay increases risk to other vessels. If you have a clear sighting of a serious navigation hazard, warn traffic promptly.",
        correct: false,
      },
    ],
  },
  {
    id: "securite-receive-gale",
    signal: "SECURITE",
    mode: "Receive",
    roleBadge: "Own ship receiving safety traffic",
    title: "Coastguard Gale Warning And Visibility Drop",
    story:
      "Coastguard broadcasts Securite on Channel 16 and directs all stations to a working channel for a gale warning, poor visibility, and sea-state update for your sea area. Your own vessel is not in distress, but your route crosses an exposed headland within the next two hours.",
    question:
      "What is the best action for your bridge team?",
    coaching:
      "Exam cue: safety traffic often does not require an immediate reply, but it does require active navigation decisions and radio discipline.",
    stage: {
      distance: "14.8 NM",
      ownShip: {
        name: "MV Brora (Own ship)",
        x: 30,
        y: 64,
        classes: [],
      },
      targetShip: {
        name: "Harbor tug Aln",
        x: 72,
        y: 26,
        classes: [],
      },
      hazard: {
        x: 54,
        y: 42,
        classes: ["hazard-weather"],
      },
    },
    choices: [
      {
        title:
          "Copy the safety message on the announced channel, update the bridge team's passage plan, and keep Channel 16 clear unless you need clarification.",
        meta: "Correct receive procedure",
        actions: [
          "Listen out for the full meteorological and navigational details.",
          "Record the warning and reassess route, speed, and deck readiness.",
          "Do not clutter Channel 16 with unnecessary acknowledgments.",
        ],
        transmission: `No routine reply is required unless your vessel is specifically called.
Bridge action: copy warning, log it, reduce speed if needed, secure weather deck, and amend passage plan.`,
        why:
          "Correct. Securite traffic is there to inform navigation and safety decisions. The bridge team should act on the content, not answer with unnecessary radio traffic.",
        correct: true,
      },
      {
        title:
          "Acknowledge with Mayday because gale-force conditions automatically create distress traffic for all vessels in the area.",
        meta: "Misuses distress",
        actions: [
          "Treat the weather bulletin as a distress declaration.",
          "Call Channel 16 to say you have received it.",
          "Request rescue units to stand by for your ship.",
        ],
        transmission: `MAYDAY, THIS IS MV BRORA, RECEIVED GALE WARNING.`,
        why:
          "Incorrect. A weather warning does not automatically put your ship into distress traffic.",
        correct: false,
      },
      {
        title:
          "Ignore the message because Securite is advisory and not relevant unless your ship has already suffered damage.",
        meta: "Unsafe complacency",
        actions: [
          "Continue passage unchanged.",
          "Do not note the warning in the log.",
          "Return to routine bridge conversations.",
        ],
        transmission: `No transmission.`,
        why:
          "Unsafe. Safety traffic is intended to influence navigation decisions before damage or distress occurs.",
        correct: false,
      },
      {
        title:
          "Respond on Channel 16 with Pan Pan to ask whether other ships intend to continue past the headland.",
        meta: "Wrong priority and poor discipline",
        actions: [
          "Use urgency to start a traffic discussion.",
          "Seek route planning advice from other ships.",
          "Stay on 16 to collect opinions.",
        ],
        transmission: `PAN PAN ALL STATIONS, WHAT ARE YOUR INTENTIONS NEAR THE HEADLAND?`,
        why:
          "Incorrect. This would clutter priority channels and misuse Pan Pan.",
        correct: false,
      },
      {
        title:
          "Switch off the VHF after copying the message so the bridge can focus on heavy-weather preparations without distraction.",
        meta: "Breaks listening watch",
        actions: [
          "Silence the receiver.",
          "Rely on visual lookout only.",
          "Reconnect later when conditions improve.",
        ],
        transmission: `No transmission.`,
        why:
          "Wrong. A listening watch should be maintained, especially when safety traffic is active and conditions are deteriorating.",
        correct: false,
      },
    ],
  },
  {
    id: "mayday-collision-listing",
    signal: "MAYDAY",
    mode: "Transmit",
    roleBadge: "Own ship in distress",
    title: "Collision Damage, Flooding, And Heavy List",
    story:
      "At night your ro-ro vessel strikes a partially submerged object. The forepeak is flooding, the ship has developed a 20-degree list to starboard, and watertight integrity is in doubt. The master orders immediate distress communication while damage control teams assess the rate of flooding.",
    question:
      "Which answer shows the correct radio action and message priority?",
    coaching:
      "Exam cue: progressive flooding and heavy list with possible loss of the ship is classic Mayday territory.",
    stage: {
      distance: "18.3 NM",
      ownShip: {
        name: "MV Kestrel Dawn (Own ship)",
        x: 42,
        y: 58,
        classes: ["distress", "listing"],
      },
      targetShip: {
        name: "Rescue tug Valiant",
        x: 76,
        y: 24,
        classes: [],
      },
      hazard: {
        x: 44,
        y: 66,
        classes: ["hazard-sinking"],
      },
    },
    choices: [
      {
        title:
          "Transmit Mayday with the vessel's position, flooding and heavy list, assistance required, and persons on board.",
        meta: "Full distress message",
        actions: [
          "Send DSC distress alert if available.",
          "Call and message on Channel 16 without delay.",
          "Update rescue authorities as the damage-control picture changes.",
        ],
        transmission: `MAYDAY MAYDAY MAYDAY
THIS IS MV KESTREL DAWN, MV KESTREL DAWN, MV KESTREL DAWN
CALL SIGN 2KDA4, MMSI 235442190
MAYDAY MV KESTREL DAWN
POSITION 56 DEGREES 03.7 MINUTES NORTH 002 DEGREES 51.9 MINUTES EAST
COLLISION DAMAGE, FOREPEAK FLOODING, VESSEL LISTING 20 DEGREES STARBOARD
REQUIRE IMMEDIATE ASSISTANCE, PUMPS, AND STANDBY FOR POSSIBLE EVACUATION
26 PERSONS ON BOARD
OVER`,
        why:
          "Correct. Flooding with a heavy list and possible loss of watertight integrity is grave and imminent danger requiring distress traffic.",
        correct: true,
      },
      {
        title:
          "Use Pan Pan first because the vessel is still afloat and the crew has not yet prepared liferafts.",
        meta: "Too low",
        actions: [
          "Downgrade the message until the list worsens.",
          "Ask nearby traffic to monitor only.",
          "Escalate later if abandon-ship stations are called.",
        ],
        transmission: `PAN PAN PAN PAN PAN PAN
THIS IS MV KESTREL DAWN
TAKING WATER BUT STILL UNDER ASSESSMENT
OUT`,
        why:
          "Incorrect. Being still afloat does not stop it being distress traffic if the danger is already grave and imminent.",
        correct: false,
      },
      {
        title:
          "Use Securite to advise vessels that you may be drifting and that the area is unsafe.",
        meta: "Wrong category",
        actions: [
          "Warn ships to keep clear.",
          "Do not mention the severity of the flooding yet.",
          "Keep the message short to avoid alarm.",
        ],
        transmission: `SECURITE SECURITE SECURITE
THIS IS MV KESTREL DAWN
VESSEL DAMAGED IN POSITION 56 03.7 NORTH 002 51.9 EAST
KEEP CLEAR
OUT`,
        why:
          "This misses the emergency entirely. The ship itself needs immediate assistance, so the traffic is distress, not safety.",
        correct: false,
      },
      {
        title:
          "Send a routine call to the company operations desk first so they can decide whether the situation justifies a distress call.",
        meta: "Delays emergency response",
        actions: [
          "Use commercial traffic before emergency traffic.",
          "Wait for company authorization.",
          "Keep radio logs ready for later.",
        ],
        transmission: `COMPANY OPS, COMPANY OPS, THIS IS MV KESTREL DAWN, PLEASE ADVISE ON COLLISION DAMAGE.`,
        why:
          "Unsafe sequence. Distress communication should not be delayed while waiting for company input.",
        correct: false,
      },
      {
        title:
          "Transmit Mayday only after you can confirm exactly which compartment has been breached.",
        meta: "Over-delays detail",
        actions: [
          "Hold the message until damage control reports back.",
          "Avoid any partial information on air.",
          "Use internal comms only for now.",
        ],
        transmission: `No transmission until compartment status is known.`,
        why:
          "Wrong. You can send the distress message with the best available information and update it as more details are confirmed.",
        correct: false,
      },
    ],
  },
  {
    id: "panpan-steering-failure",
    signal: "PAN PAN",
    mode: "Transmit",
    roleBadge: "Own ship requesting priority traffic",
    title: "Steering Failure In Dense Traffic",
    story:
      "General cargo ship MV Rowan has suffered a total steering failure in a busy coastal route. Main engine and anchors remain available, there is still sea room, and there is no collision yet, but the vessel is restricted in maneuverability and urgently needs traffic awareness and tug assistance before the situation worsens.",
    question:
      "Which choice best fits the correct message priority right now?",
    coaching:
      "Exam cue: serious maneuvering failure with immediate concern but not yet grave and imminent danger is usually urgency traffic unless conditions worsen.",
    stage: {
      distance: "7.7 NM",
      ownShip: {
        name: "MV Rowan (Own ship)",
        x: 36,
        y: 60,
        classes: [],
      },
      targetShip: {
        name: "Fast ferry Northcross",
        x: 76,
        y: 30,
        classes: [],
      },
      hazard: {
        x: 54,
        y: 44,
        classes: ["hazard-sar"],
      },
    },
    choices: [
      {
        title:
          "Transmit Pan Pan, state the steering failure, position, and assistance needed, and request traffic warning / tug support.",
        meta: "Urgent but not yet distress",
        actions: [
          "Use urgency priority because the situation needs prompt help and traffic awareness.",
          "State that the vessel is restricted in maneuverability.",
          "Be ready to escalate to Mayday if collision or grounding becomes imminent.",
        ],
        transmission: `PAN PAN PAN PAN PAN PAN
ALL STATIONS ALL STATIONS ALL STATIONS
THIS IS MV ROWAN, MV ROWAN, MV ROWAN
CALL SIGN 2ROW6, MMSI 235660814
POSITION 53 DEGREES 44.2 MINUTES NORTH 000 DEGREES 18.9 MINUTES EAST
TOTAL STEERING FAILURE, RESTRICTED IN MANEUVERABILITY
REQUEST TRAFFIC WARNING AND TUG ASSISTANCE
19 PERSONS ON BOARD
OVER`,
        why:
          "Correct. This is an urgent situation affecting the vessel's safety, but the facts as given do not yet make it a grave and imminent distress case.",
        correct: true,
      },
      {
        title:
          "Transmit Mayday immediately because any steering failure in traffic is automatically distress traffic.",
        meta: "May be too high at this stage",
        actions: [
          "Use distress to guarantee silence on the channel.",
          "Assume collision is unavoidable.",
          "Prepare abandonment wording.",
        ],
        transmission: `MAYDAY MAYDAY MAYDAY
THIS IS MV ROWAN
STEERING FAILURE
OVER`,
        why:
          "Not the best fit on the stated facts. The situation is serious and may escalate, but with sea room and no immediate collision or grounding yet, urgency is the better initial level.",
        correct: false,
      },
      {
        title:
          "Use Securite because the main purpose is to warn other traffic to keep clear of your vessel.",
        meta: "Wrong level",
        actions: [
          "Issue a navigation warning only.",
          "Do not request direct assistance yet.",
          "Handle tug arrangements later by routine traffic.",
        ],
        transmission: `SECURITE SECURITE SECURITE
ALL STATIONS
THIS IS MV ROWAN
KEEP CLEAR OF US
OUT`,
        why:
          "Too low. The ship itself has an urgent operational problem and requires priority assistance and traffic awareness, so Pan Pan is more appropriate.",
        correct: false,
      },
      {
        title:
          "Make a routine bridge-to-bridge call on Channel 13 to whichever ship seems closest and ask them to spread the word.",
        meta: "Too narrow and informal",
        actions: [
          "Coordinate informally with one ship at a time.",
          "Leave tug arrangements for later.",
          "Avoid using priority calls altogether.",
        ],
        transmission: `NORTHCROSS, THIS IS MV ROWAN, WE HAVE NO STEERING, PLEASE ADVISE OTHER TRAFFIC.`,
        why:
          "Insufficient. The problem deserves priority traffic, not a series of informal routine calls.",
        correct: false,
      },
      {
        title:
          "Wait until the master decides whether to anchor before sending any priority message at all.",
        meta: "Delays support",
        actions: [
          "Assess internally first.",
          "Avoid alarming nearby vessels.",
          "Send a call only if anchoring fails.",
        ],
        transmission: `No transmission.`,
        why:
          "Delaying the urgency call removes valuable time for traffic management and assistance.",
        correct: false,
      },
    ],
  },
  {
    id: "securite-receive-exclusion-zone",
    signal: "SECURITE",
    mode: "Receive",
    roleBadge: "Own ship adjusting navigation",
    title: "Safety Broadcast For SAR Exclusion Zone",
    story:
      "Coastguard broadcasts Securite for a search-and-rescue helicopter operation and asks all traffic to keep clear of a temporary exclusion zone around a casualty position. Your ship's planned track would pass near the zone in forty minutes.",
    question:
      "What is the best bridge response to this safety traffic?",
    coaching:
      "Exam cue: a Securite broadcast often demands immediate navigation changes even though it is not distress traffic for your ship.",
    stage: {
      distance: "10.2 NM",
      ownShip: {
        name: "MV Cormorant (Own ship)",
        x: 28,
        y: 70,
        classes: [],
      },
      targetShip: {
        name: "SAR cutter Defender",
        x: 72,
        y: 24,
        classes: [],
      },
      hazard: {
        x: 54,
        y: 42,
        classes: ["hazard-sar"],
      },
    },
    choices: [
      {
        title:
          "Copy the coordinates, alter the passage plan to keep clear, maintain listening watch, and only call if you need clarification.",
        meta: "Correct safety response",
        actions: [
          "Plot the exclusion area accurately.",
          "Keep clear of the SAR scene and watch for further instructions.",
          "Avoid unnecessary transmissions on Channel 16.",
        ],
        transmission: `No routine reply required.
Bridge action: plot exclusion zone, amend track, inform master and OOW team, maintain watch for further safety traffic.`,
        why:
          "Correct. Safety traffic is there to protect navigation and operations in the area, and your response should be a navigation adjustment plus disciplined watchkeeping.",
        correct: true,
      },
      {
        title:
          "Respond with Pan Pan to tell Coastguard that your ETA near the scene is in forty minutes.",
        meta: "Wrong priority",
        actions: [
          "Use urgency to advertise your passage.",
          "Request guidance immediately.",
          "Stay on Channel 16 until they answer.",
        ],
        transmission: `PAN PAN COASTGUARD, THIS IS MV CORMORANT, OUR ETA NEAR YOUR SCENE IS FOUR ZERO MINUTES.`,
        why:
          "Incorrect. Your ship is not in urgency traffic just because a safety broadcast affects your route.",
        correct: false,
      },
      {
        title:
          "Ignore the message unless the exclusion zone directly overlaps your next waypoint.",
        meta: "Fails to manage risk",
        actions: [
          "Continue passage unless forced to deviate.",
          "Assume the helicopter will avoid you.",
          "Do not brief the bridge team.",
        ],
        transmission: `No transmission.`,
        why:
          "Unsafe. Safety broadcasts are intended to be acted on early, not only once the danger is directly on top of the vessel.",
        correct: false,
      },
      {
        title:
          "Call Mayday because the presence of an exclusion zone means a distress incident already exists in your operating area.",
        meta: "Misuses distress",
        actions: [
          "Treat the scene as your own distress problem.",
          "Ask for clearance to pass close aboard.",
          "Hold Channel 16 for priority access.",
        ],
        transmission: `MAYDAY, THIS IS MV CORMORANT, REQUEST PASSAGE THROUGH SAR ZONE.`,
        why:
          "Incorrect. Distress exists for the casualty being rescued, not for your ship merely hearing the safety traffic.",
        correct: false,
      },
      {
        title:
          "Switch to a private ship-to-ship channel with nearby traffic and negotiate among yourselves who will alter course, without involving Coastguard.",
        meta: "Breaks coordination",
        actions: [
          "Manage the exclusion informally.",
          "Do not monitor further safety traffic.",
          "Assume all other ships heard the same message clearly.",
        ],
        transmission: `ALL SHIPS NEAR ME, SWITCH CHANNEL 72 TO DISCUSS WHO WILL GO WHERE.`,
        why:
          "Poor practice. Safety traffic involving SAR coordination should remain under the announced framework, with continued listening watch for updates.",
        correct: false,
      },
    ],
  },
];

const signalFlags = [
  {
    id: "alpha",
    letter: "A",
    phonetic: "Alfa",
    meaning: "I have a diver down; keep well clear at slow speed.",
    visualCue: "Swallowtail split white and blue.",
  },
  {
    id: "bravo",
    letter: "B",
    phonetic: "Bravo",
    meaning: "I am taking in, discharging, or carrying dangerous goods.",
    visualCue: "Solid red swallowtail.",
  },
  {
    id: "hotel",
    letter: "H",
    phonetic: "Hotel",
    meaning: "I have a pilot on board.",
    visualCue: "White half, red half.",
  },
  {
    id: "lima",
    letter: "L",
    phonetic: "Lima",
    meaning: "You should stop your vessel instantly.",
    visualCue: "Yellow and black quartered blocks.",
  },
  {
    id: "mike",
    letter: "M",
    phonetic: "Mike",
    meaning: "My vessel is stopped and making no way through the water.",
    visualCue: "White X on blue.",
  },
  {
    id: "november",
    letter: "N",
    phonetic: "November",
    meaning: "No, or negative.",
    visualCue: "Blue and white checkerboard.",
  },
  {
    id: "oscar",
    letter: "O",
    phonetic: "Oscar",
    meaning: "Man overboard.",
    visualCue: "Diagonal red over yellow.",
  },
  {
    id: "papa",
    letter: "P",
    phonetic: "Papa",
    meaning: "All persons should report on board as the vessel is about to proceed to sea.",
    visualCue: "Blue field with a white central square.",
  },
  {
    id: "quebec",
    letter: "Q",
    phonetic: "Quebec",
    meaning: "My vessel is healthy and I request permission to proceed into port.",
    visualCue: "Solid yellow.",
  },
  {
    id: "victor",
    letter: "V",
    phonetic: "Victor",
    meaning: "I require assistance.",
    visualCue: "Red X on white.",
  },
  {
    id: "whiskey",
    letter: "W",
    phonetic: "Whiskey",
    meaning: "I require medical assistance.",
    visualCue: "Blue with a white square and red center.",
  },
  {
    id: "xray",
    letter: "X",
    phonetic: "X-ray",
    meaning: "Stop carrying out your intentions and watch for my signals.",
    visualCue: "Blue cross on white.",
  },
];

const scenarioBank = window.buildScenarioBank ? window.buildScenarioBank() : scenarios;

const elements = {
  appShell: document.querySelector(".app-shell"),
  levelValue: document.getElementById("levelValue"),
  scoreValue: document.getElementById("scoreValue"),
  streakValue: document.getElementById("streakValue"),
  progressValue: document.getElementById("progressValue"),
  levelRow: document.getElementById("levelRow"),
  scenarioPanel: document.querySelector(".scenario-panel"),
  scenarioMode: document.getElementById("scenarioMode"),
  scenarioTitle: document.getElementById("scenarioTitle"),
  signalBadge: document.getElementById("signalBadge"),
  roleBadge: document.getElementById("roleBadge"),
  ownShip: document.getElementById("ownShip"),
  ownShipLabel: document.getElementById("ownShipLabel"),
  targetShip: document.getElementById("targetShip"),
  targetShipLabel: document.getElementById("targetShipLabel"),
  hazardMarker: document.getElementById("hazardMarker"),
  distancePill: document.getElementById("distancePill"),
  rangeLine: document.getElementById("rangeLine"),
  scenarioStory: document.getElementById("scenarioStory"),
  scenarioQuestion: document.getElementById("scenarioQuestion"),
  answersList: document.getElementById("answersList"),
  feedbackPanel: document.getElementById("feedbackPanel"),
  resultPill: document.getElementById("resultPill"),
  feedbackHeadline: document.getElementById("feedbackHeadline"),
  feedbackBody: document.getElementById("feedbackBody"),
  actionList: document.getElementById("actionList"),
  transmissionText: document.getElementById("transmissionText"),
  correctAnswerNote: document.getElementById("correctAnswerNote"),
  nextButton: document.getElementById("nextButton"),
  restartButton: document.getElementById("restartButton"),
  flagReferenceGrid: document.getElementById("flagReferenceGrid"),
  flagScoreValue: document.getElementById("flagScoreValue"),
  flagProgressValue: document.getElementById("flagProgressValue"),
  flagDisplayCard: document.getElementById("flagDisplayCard"),
  flagQuizVisual: document.getElementById("flagQuizVisual"),
  flagPrompt: document.getElementById("flagPrompt"),
  flagAnswersList: document.getElementById("flagAnswersList"),
  flagFeedbackPanel: document.getElementById("flagFeedbackPanel"),
  flagResultPill: document.getElementById("flagResultPill"),
  flagFeedbackHeadline: document.getElementById("flagFeedbackHeadline"),
  flagFeedbackBody: document.getElementById("flagFeedbackBody"),
  flagDetailList: document.getElementById("flagDetailList"),
  flagMemoryText: document.getElementById("flagMemoryText"),
  flagCorrectAnswerNote: document.getElementById("flagCorrectAnswerNote"),
  flagNextButton: document.getElementById("flagNextButton"),
  flagRestartButton: document.getElementById("flagRestartButton"),
};

const state = {
  level: 1,
  deck: [],
  index: 0,
  score: 0,
  streak: 0,
  bestStreak: 0,
  answered: false,
  results: [],
  currentChoices: [],
};

const flagQuizState = {
  deck: [],
  index: 0,
  score: 0,
  answered: false,
};

function scrollIntoMobileView(target) {
  if (!target || window.innerWidth > 760) {
    return;
  }

  window.requestAnimationFrame(() => {
    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

function shuffle(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

function flagSvg(flag) {
  const common = 'xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 120" role="img" aria-hidden="true"';

  if (flag.id === "alpha") {
    return `<svg ${common}><polygon points="0,0 132,0 160,60 132,120 0,120" fill="#ffffff"/><polygon points="66,0 132,0 160,60 132,120 66,120" fill="#155eef"/></svg>`;
  }
  if (flag.id === "bravo") {
    return `<svg ${common}><polygon points="0,0 132,0 160,60 132,120 0,120" fill="#d93535"/></svg>`;
  }
  if (flag.id === "hotel") {
    return `<svg ${common}><rect width="80" height="120" fill="#ffffff"/><rect x="80" width="80" height="120" fill="#d93535"/></svg>`;
  }
  if (flag.id === "lima") {
    return `<svg ${common}><rect width="80" height="60" fill="#f2cf36"/><rect x="80" width="80" height="60" fill="#111111"/><rect y="60" width="80" height="60" fill="#111111"/><rect x="80" y="60" width="80" height="60" fill="#f2cf36"/></svg>`;
  }
  if (flag.id === "mike") {
    return `<svg ${common}><rect width="160" height="120" fill="#1658b6"/><line x1="0" y1="0" x2="160" y2="120" stroke="#ffffff" stroke-width="26"/><line x1="160" y1="0" x2="0" y2="120" stroke="#ffffff" stroke-width="26"/></svg>`;
  }
  if (flag.id === "november") {
    return `<svg ${common}><rect width="80" height="60" fill="#1658b6"/><rect x="80" width="80" height="60" fill="#ffffff"/><rect y="60" width="80" height="60" fill="#ffffff"/><rect x="80" y="60" width="80" height="60" fill="#1658b6"/></svg>`;
  }
  if (flag.id === "oscar") {
    return `<svg ${common}><polygon points="0,0 160,0 160,120" fill="#d93535"/><polygon points="0,0 0,120 160,120" fill="#f2cf36"/></svg>`;
  }
  if (flag.id === "papa") {
    return `<svg ${common}><rect width="160" height="120" fill="#1658b6"/><rect x="46" y="26" width="68" height="68" fill="#ffffff"/></svg>`;
  }
  if (flag.id === "quebec") {
    return `<svg ${common}><rect width="160" height="120" fill="#f2cf36"/></svg>`;
  }
  if (flag.id === "victor") {
    return `<svg ${common}><rect width="160" height="120" fill="#ffffff"/><line x1="0" y1="0" x2="160" y2="120" stroke="#d93535" stroke-width="24"/><line x1="160" y1="0" x2="0" y2="120" stroke="#d93535" stroke-width="24"/></svg>`;
  }
  if (flag.id === "whiskey") {
    return `<svg ${common}><rect width="160" height="120" fill="#1658b6"/><rect x="44" y="24" width="72" height="72" fill="#ffffff"/><rect x="62" y="42" width="36" height="36" fill="#d93535"/></svg>`;
  }
  return `<svg ${common}><rect width="160" height="120" fill="#ffffff"/><rect x="58" width="44" height="120" fill="#1658b6"/><rect y="38" width="160" height="44" fill="#1658b6"/></svg>`;
}

function flagFaceMarkup(flag) {
  return `<div class="flag-face">${flagSvg(flag)}</div>`;
}

function updateFlagHud() {
  elements.flagScoreValue.textContent = String(flagQuizState.score);

  if (flagQuizState.index >= flagQuizState.deck.length) {
    elements.flagProgressValue.textContent = "Completed";
    return;
  }

  elements.flagProgressValue.textContent = `${flagQuizState.index + 1} / ${flagQuizState.deck.length}`;
}

function renderFlagReference() {
  elements.flagReferenceGrid.innerHTML = signalFlags
    .map(
      (flag) => `
        <article class="flag-reference-card">
          ${flagFaceMarkup(flag)}
          <div class="flag-reference-meta">
            <h3>${flag.letter} · ${flag.phonetic}</h3>
            <p>${flag.meaning}</p>
          </div>
        </article>
      `
    )
    .join("");
}

function flagChoices(flag) {
  const distractors = shuffle(
    signalFlags.filter((entry) => entry.letter !== flag.letter)
  ).slice(0, 4);

  return shuffle([flag, ...distractors]);
}

function resetFlagFeedback() {
  elements.flagFeedbackPanel.classList.add("hidden");
  elements.flagResultPill.className = "result-pill";
  elements.flagDetailList.innerHTML = "";
  elements.flagMemoryText.textContent = "";
  elements.flagCorrectAnswerNote.textContent = "";
  elements.flagNextButton.textContent = "Next flag";
}

function startFlagQuiz() {
  flagQuizState.deck = shuffle(signalFlags);
  flagQuizState.index = 0;
  flagQuizState.score = 0;
  flagQuizState.answered = false;
  updateFlagHud();
  renderFlagQuestion();
}

function renderFlagQuestion() {
  resetFlagFeedback();

  if (flagQuizState.index >= flagQuizState.deck.length) {
    renderFlagSummary();
    return;
  }

  flagQuizState.answered = false;
  const flag = flagQuizState.deck[flagQuizState.index];
  const choices = flagChoices(flag);

  elements.flagQuizVisual.innerHTML = flagFaceMarkup(flag);
  elements.flagPrompt.textContent =
    "Which letter does this International Code of Signals flag represent?";

  elements.flagAnswersList.innerHTML = "";
  choices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-button";
    button.dataset.letter = choice.letter;

    const title = document.createElement("span");
    title.className = "answer-title";
    title.textContent = `${index + 1}. ${choice.letter}`;

    const meta = document.createElement("span");
    meta.className = "answer-meta";
    meta.textContent = choice.phonetic;

    button.append(title, meta);
    button.addEventListener("click", () => chooseFlagAnswer(choice.letter));
    elements.flagAnswersList.appendChild(button);
  });

  updateFlagHud();
}

function chooseFlagAnswer(letter) {
  if (flagQuizState.answered || flagQuizState.index >= flagQuizState.deck.length) {
    return;
  }

  const flag = flagQuizState.deck[flagQuizState.index];
  const correct = letter === flag.letter;
  flagQuizState.answered = true;

  if (correct) {
    flagQuizState.score += 1;
  }

  [...elements.flagAnswersList.querySelectorAll(".answer-button")].forEach((button) => {
    button.disabled = true;
    if (button.dataset.letter === flag.letter) {
      button.classList.add("correct");
    } else if (button.dataset.letter === letter) {
      button.classList.add("incorrect");
    } else {
      button.classList.add("dimmed");
    }
  });

  elements.flagFeedbackPanel.classList.remove("hidden");
  elements.flagResultPill.classList.add(correct ? "correct" : "incorrect");
  elements.flagResultPill.textContent = correct ? "Correct" : "Not quite";
  elements.flagFeedbackHeadline.textContent = correct
    ? "Flag recognized"
    : "Best match";
  elements.flagFeedbackBody.textContent = correct
    ? `Yes. That flag is ${flag.letter}, spoken as ${flag.phonetic}.`
    : `This flag is ${flag.letter}, spoken as ${flag.phonetic}.`;

  elements.flagDetailList.innerHTML = "";
  [
    `Letter: ${flag.letter}`,
    `Spoken name: ${flag.phonetic}`,
    `Single-flag meaning: ${flag.meaning}`,
  ].forEach((detail) => {
    const item = document.createElement("li");
    item.textContent = detail;
    elements.flagDetailList.appendChild(item);
  });

  elements.flagMemoryText.textContent = `${flag.visualCue}

Memory link: ${flag.letter} for ${flag.phonetic}.`;
  elements.flagCorrectAnswerNote.textContent = correct
    ? "Nice read. Keep linking the color pattern to the letter before you think about the meaning."
    : `Correct answer: ${flag.letter} for ${flag.phonetic}. ${flag.visualCue}`;

  if (flagQuizState.index === flagQuizState.deck.length - 1) {
    elements.flagNextButton.textContent = "See score";
  }

  updateFlagHud();
  scrollIntoMobileView(elements.flagFeedbackPanel);
}

function renderFlagSummary() {
  resetFlagFeedback();
  elements.flagQuizVisual.innerHTML = flagFaceMarkup(signalFlags[7]);
  elements.flagPrompt.textContent = `Flag round complete: ${flagQuizState.score} / ${flagQuizState.deck.length} correct.`;
  elements.flagAnswersList.innerHTML = `
    <div class="scenario-story">
      <p class="label">Round review</p>
      <p>Keep revising the flag face first, then the spoken name, then the single-flag meaning. That order usually sticks better under exam pressure.</p>
      <button class="next-button" type="button" data-flag-action="restart">Restart flags</button>
    </div>
  `;
  updateFlagHud();
}

function buildDeck(level) {
  return scenarioBank.filter((scenario) => scenario.level === level);
}

function startRound(level = state.level) {
  state.level = level;
  state.deck = buildDeck(level);
  state.index = 0;
  state.score = 0;
  state.streak = 0;
  state.bestStreak = 0;
  state.answered = false;
  state.results = [];
  state.currentChoices = [];
  updateLevelButtons();
  updateHud();
  renderCurrent();
  scrollIntoMobileView(elements.appShell);
}

function updateLevelButtons() {
  const buttons = elements.levelRow.querySelectorAll(".filter-button");
  buttons.forEach((button) => {
    button.classList.toggle("active", Number(button.dataset.level) === state.level);
  });
}

function updateHud() {
  elements.levelValue.textContent = `${state.level} / 10`;
  elements.scoreValue.textContent = String(state.score);
  elements.streakValue.textContent = String(state.streak);

  if (state.index >= state.deck.length) {
    elements.progressValue.textContent = "Completed";
    return;
  }

  elements.progressValue.textContent = `${state.index + 1} / ${state.deck.length}`;
}

function setShipPosition(shipElement, shipData) {
  shipElement.style.left = `${shipData.x}%`;
  shipElement.style.top = `${shipData.y}%`;
}

function updateStage(scenario) {
  const { ownShip, targetShip, hazard, distance } = scenario.stage;

  elements.ownShip.className = `ship own ${ownShip.classes.join(" ")}`.trim();
  elements.targetShip.className = `ship target ${targetShip.classes.join(" ")}`.trim();
  elements.hazardMarker.className = `hazard-marker ${hazard.classes.join(" ")}`.trim();

  setShipPosition(elements.ownShip, ownShip);
  setShipPosition(elements.targetShip, targetShip);

  elements.hazardMarker.style.left = `${hazard.x}%`;
  elements.hazardMarker.style.top = `${hazard.y}%`;

  elements.ownShipLabel.textContent = ownShip.name;
  elements.targetShipLabel.textContent = targetShip.name;
  elements.distancePill.textContent = distance;

  const midX = (ownShip.x + targetShip.x) / 2;
  const midY = (ownShip.y + targetShip.y) / 2;
  elements.distancePill.style.left = `${midX}%`;
  elements.distancePill.style.top = `${midY}%`;

  elements.rangeLine.setAttribute("x1", ownShip.x);
  elements.rangeLine.setAttribute("y1", ownShip.y);
  elements.rangeLine.setAttribute("x2", targetShip.x);
  elements.rangeLine.setAttribute("y2", targetShip.y);
}

function renderAnswers(scenario) {
  elements.answersList.innerHTML = "";
  state.currentChoices = shuffle(scenario.choices);

  state.currentChoices.forEach((choice, choiceIndex) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-button";
    button.dataset.index = String(choiceIndex);

    const title = document.createElement("span");
    title.className = "answer-title";
    title.textContent = `${choiceIndex + 1}. ${choice.title}`;

    const meta = document.createElement("span");
    meta.className = "answer-meta";
    meta.textContent = choice.meta;

    button.append(title, meta);
    button.addEventListener("click", () => chooseAnswer(choiceIndex));
    elements.answersList.appendChild(button);
  });
}

function resetFeedback() {
  elements.feedbackPanel.classList.add("hidden");
  elements.resultPill.className = "result-pill";
  elements.actionList.innerHTML = "";
  elements.transmissionText.textContent = "";
  elements.correctAnswerNote.textContent = "";
}

function renderCurrent() {
  resetFeedback();
  state.answered = false;

  if (state.index >= state.deck.length) {
    renderSummary();
    return;
  }

  const scenario = state.deck[state.index];
  elements.scenarioMode.textContent = scenario.mode;
  elements.scenarioTitle.textContent = scenario.title;
  elements.signalBadge.textContent = scenario.signal;
  elements.roleBadge.textContent = scenario.roleBadge;
  elements.signalBadge.style.background = badgeColor(scenario.signal);
  elements.signalBadge.style.color = "#04101a";
  elements.scenarioStory.textContent = scenario.story;
  elements.scenarioQuestion.textContent = scenario.question;

  updateStage(scenario);
  renderAnswers(scenario);
  updateHud();
}

function badgeColor(signal) {
  if (signal === "MAYDAY") {
    return "rgba(255, 107, 74, 0.92)";
  }
  if (signal === "PAN PAN") {
    return "rgba(255, 179, 65, 0.92)";
  }
  return "rgba(94, 210, 195, 0.92)";
}

function chooseAnswer(choiceIndex) {
  if (state.answered || state.index >= state.deck.length) {
    return;
  }

  const scenario = state.deck[state.index];
  const choice = state.currentChoices[choiceIndex];
  const correctChoice = scenario.choices.find((option) => option.correct);
  const buttons = [...elements.answersList.querySelectorAll(".answer-button")];

  state.answered = true;
  state.results.push({
    id: scenario.id,
    signal: scenario.signal,
    correct: choice.correct,
  });

  if (choice.correct) {
    state.score += 1;
    state.streak += 1;
    state.bestStreak = Math.max(state.bestStreak, state.streak);
  } else {
    state.streak = 0;
  }

  buttons.forEach((button, index) => {
    button.disabled = true;
    const option = state.currentChoices[index];
    if (option.correct) {
      button.classList.add("correct");
    } else if (index === choiceIndex) {
      button.classList.add("incorrect");
    } else {
      button.classList.add("dimmed");
    }
  });

  elements.feedbackPanel.classList.remove("hidden");
  elements.resultPill.classList.add(choice.correct ? "correct" : "incorrect");
  elements.resultPill.textContent = choice.correct ? "Correct" : "Try again mentally";
  elements.feedbackHeadline.textContent = choice.correct
    ? "Good protocol choice"
    : "Why this answer falls short";
  elements.feedbackBody.textContent = choice.why;

  elements.actionList.innerHTML = "";
  choice.actions.forEach((action) => {
    const item = document.createElement("li");
    item.textContent = action;
    elements.actionList.appendChild(item);
  });

  elements.transmissionText.textContent = choice.transmission;
  elements.correctAnswerNote.textContent = choice.correct
    ? scenario.coaching
    : `Best answer: ${correctChoice.title} ${scenario.coaching}`;

  updateHud();
  scrollIntoMobileView(elements.feedbackPanel);
}

function levelResultData() {
  const total = state.deck.length || 10;
  const ratio = state.score / total;

  if (ratio === 1) {
    return {
      tier: "perfect",
      badge: "Captain ecstatic",
      headline: "Perfect 10",
      sceneBody:
        "Full marks. The sailor is cheering, the trophy is up, and the whole harbor is celebrating.",
      summary:
        "Outstanding. You separated Mayday, Pan Pan, and Securite cleanly all the way through this level.",
    };
  }

  if (ratio >= 0.9) {
    return {
      tier: "great",
      badge: "Very happy sailor",
      headline: "Excellent run",
      sceneBody:
        "Just one slip. The sailor is celebrating hard and the confetti is already flying.",
      summary:
        "Excellent. Your first-call decisions are sharp and consistent. One more point would have made it a perfect run.",
    };
  }

  if (ratio >= 0.8) {
    return {
      tier: "happy",
      badge: "Happy sailor",
      headline: "Level passed",
      sceneBody:
        "Solid pass. The sailor made it back smiling, waving from the deck after a good watch.",
      summary:
        "Pass. You are reading the priority ladder well. Tighten up the edge cases and you will start hitting 9s and 10s.",
    };
  }

  return {
    tier: "fail",
    badge: "Ship taking water",
    headline: "Level failed",
    sceneBody:
      "This run needs another try. The ship is going down, so it is time to regroup and come back sharper.",
    summary:
      "This level did not pass. Revisit the split between distress, urgency, and safety traffic, then run the level again.",
  };
}

function celebrationBurstMarkup(count) {
  return Array.from({ length: count }, (_, index) => {
    const left = 8 + ((index * 11) % 78);
    const delay = (index % 5) * 0.18;
    const drift = index % 2 === 0 ? -12 : 12;
    const rotation = 8 + ((index * 17) % 34);
    const color = ["#ff6b4a", "#ffe08a", "#5ed2c3", "#57b7ff", "#f3f7fb"][index % 5];
    return `<span class="confetti-piece" style="--left:${left}%; --delay:${delay}s; --drift:${drift}px; --rotation:${rotation}deg; --piece:${color};"></span>`;
  }).join("");
}

function levelResultMarkup(result) {
  if (result.tier === "fail") {
    return `
      <article class="level-result-card level-tier-fail">
        <div class="level-result-scene">
          <div class="result-cloud cloud-left"></div>
          <div class="result-cloud cloud-right"></div>
          <div class="result-sea sea-back"></div>
          <div class="result-sea sea-front"></div>
          <div class="wreck-ship">
            <div class="wreck-cabin"></div>
            <div class="wreck-mast"></div>
            <div class="wreck-hull"></div>
          </div>
          <span class="bubble bubble-1"></span>
          <span class="bubble bubble-2"></span>
          <span class="bubble bubble-3"></span>
          <span class="bubble bubble-4"></span>
        </div>
        <div class="level-result-copy">
          <p class="label">Harbor report</p>
          <h3>${result.headline}</h3>
          <p>${result.sceneBody}</p>
        </div>
      </article>
    `;
  }

  const confettiCount = result.tier === "perfect" ? 12 : result.tier === "great" ? 7 : 2;
  const fireworkMarkup =
    result.tier === "perfect"
      ? `
        <span class="firework firework-left"></span>
        <span class="firework firework-right"></span>
      `
      : "";
  const trophyMarkup =
    result.tier === "perfect"
      ? '<div class="sailor-trophy"><span class="trophy-cup"></span><span class="trophy-base"></span></div>'
      : "";

  return `
    <article class="level-result-card level-tier-${result.tier}">
      <div class="level-result-scene">
        <div class="result-sun"></div>
        <div class="result-sea sea-back"></div>
        <div class="result-sea sea-front"></div>
        <div class="celebration-boat">
          <div class="celebration-cabin"></div>
          <div class="celebration-hull"></div>
          <div class="sailor sailor-${result.tier}">
            <div class="sailor-head"></div>
            <div class="sailor-body"></div>
            <div class="sailor-arm arm-wave"></div>
            <div class="sailor-arm arm-rest"></div>
            <div class="sailor-leg leg-left"></div>
            <div class="sailor-leg leg-right"></div>
            ${trophyMarkup}
          </div>
        </div>
        <div class="confetti-layer">${celebrationBurstMarkup(confettiCount)}</div>
        <span class="sparkle sparkle-a"></span>
        <span class="sparkle sparkle-b"></span>
        ${fireworkMarkup}
      </div>
      <div class="level-result-copy">
        <p class="label">Harbor report</p>
        <h3>${result.headline}</h3>
        <p>${result.sceneBody}</p>
      </div>
    </article>
  `;
}

function renderSummary() {
  const result = levelResultData();
  elements.scenarioMode.textContent = `Level ${state.level} complete`;
  elements.scenarioTitle.textContent = `${state.score} / ${state.deck.length} correct`;
  elements.signalBadge.textContent = `Level ${state.level}`;
  elements.signalBadge.style.background = "rgba(255, 255, 255, 0.16)";
  elements.signalBadge.style.color = "#f3f7fb";
  elements.roleBadge.textContent = result.badge;
  elements.scenarioStory.textContent =
    "Use restart to replay this level, or tap another level above to jump into a different mixed set of Mayday, Pan Pan, and Securite scenarios.";
  elements.scenarioQuestion.textContent =
    "Focus on the first decision: Is this grave and imminent danger, urgent but not yet distress, or navigational / meteorological safety information?";

  const calmScene = {
    ownShip: { x: 34, y: 62, classes: [] },
    targetShip: { x: 72, y: 30, classes: [] },
    hazard: { x: 54, y: 46, classes: ["hazard-sar"] },
    distance: "Review set",
  };

  elements.ownShip.className = "ship own";
  elements.targetShip.className = "ship target";
  elements.hazardMarker.className = "hazard-marker hazard-sar";
  setShipPosition(elements.ownShip, calmScene.ownShip);
  setShipPosition(elements.targetShip, calmScene.targetShip);
  elements.hazardMarker.style.left = `${calmScene.hazard.x}%`;
  elements.hazardMarker.style.top = `${calmScene.hazard.y}%`;
  elements.ownShipLabel.textContent = "Own ship";
  elements.targetShipLabel.textContent = "Training contact";
  elements.distancePill.textContent = `Best streak ${state.bestStreak}`;
  elements.distancePill.style.left = "53%";
  elements.distancePill.style.top = "46%";
  elements.rangeLine.setAttribute("x1", calmScene.ownShip.x);
  elements.rangeLine.setAttribute("y1", calmScene.ownShip.y);
  elements.rangeLine.setAttribute("x2", calmScene.targetShip.x);
  elements.rangeLine.setAttribute("y2", calmScene.targetShip.y);

  elements.answersList.innerHTML = "";
  const animationCard = document.createElement("div");
  animationCard.innerHTML = levelResultMarkup(result);
  elements.answersList.appendChild(animationCard.firstElementChild);
  const summaryCard = document.createElement("div");
  summaryCard.className = "scenario-story";
  const missedSignals = signalBreakdown();
  summaryCard.innerHTML = `
    <p class="label">Round review</p>
    <p>${result.summary}</p>
    <p>Signal breakdown: ${missedSignals}</p>
  `;
  elements.answersList.appendChild(summaryCard);
  resetFeedback();
  updateHud();
  scrollIntoMobileView(elements.answersList);
}

function summaryMessage() {
  return levelResultData().summary;
}

function signalBreakdown() {
  const grouped = ["MAYDAY", "PAN PAN", "SECURITE"].map((signal) => {
    const matching = state.results.filter((item) => item.signal === signal);
    if (!matching.length) {
      return null;
    }
    const correct = matching.filter((item) => item.correct).length;
    return `${signal} ${correct}/${matching.length}`;
  });

  return grouped.filter(Boolean).join(" | ");
}

elements.levelRow.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLButtonElement)) {
    return;
  }
  const level = Number(target.dataset.level);
  if (!level) {
    return;
  }
  startRound(level);
});

elements.nextButton.addEventListener("click", () => {
  if (!state.answered) {
    return;
  }
  state.index += 1;
  renderCurrent();
  const nextTarget =
    state.index >= state.deck.length ? elements.answersList : elements.scenarioPanel;
  scrollIntoMobileView(nextTarget);
});

elements.restartButton.addEventListener("click", () => {
  startRound(state.level);
});

elements.flagAnswersList.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) {
    return;
  }

  const restartButton = target.closest("[data-flag-action='restart']");
  if (!restartButton) {
    return;
  }

  startFlagQuiz();
  scrollIntoMobileView(elements.flagDisplayCard);
});

elements.flagNextButton.addEventListener("click", () => {
  if (!flagQuizState.answered) {
    return;
  }

  flagQuizState.index += 1;
  renderFlagQuestion();
  scrollIntoMobileView(elements.flagDisplayCard);
});

elements.flagRestartButton.addEventListener("click", () => {
  startFlagQuiz();
  scrollIntoMobileView(elements.flagDisplayCard);
});

document.addEventListener("keydown", (event) => {
  if (state.index >= state.deck.length || state.answered) {
    return;
  }

  const numeric = Number.parseInt(event.key, 10);
  if (!Number.isNaN(numeric) && numeric >= 1 && numeric <= 5) {
    if (state.currentChoices[numeric - 1]) {
      chooseAnswer(numeric - 1);
    }
  }
});

function shouldRegisterServiceWorker() {
  return (
    "serviceWorker" in navigator &&
    (window.location.protocol === "https:" ||
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1")
  );
}

if (shouldRegisterServiceWorker()) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {
      // The game still works without offline caching.
    });
  });
}

renderFlagReference();
startFlagQuiz();
startRound(1);

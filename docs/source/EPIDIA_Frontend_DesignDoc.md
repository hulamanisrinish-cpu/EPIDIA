**EPIDIA**

**Frontend Design Document**

Dashboard UI × Anime.js Animation System

*Inspired by: Dribbble Reference Dashboard Aesthetic*

Stack: HTML5 + CSS3 + Vanilla JS + Anime.js CDN \| Single File \| Zero
Setup

  -----------------------------------------------------------------------
  **Field**             **Detail**
  --------------------- -------------------------------------------------
  Aesthetic Direction   Dark glassmorphism --- deep navy bg, teal accent,
                        card-based grid

  Animation Library     Anime.js v3.2.1 (CDN)

  Tech Stack            HTML5 + CSS3 + Vanilla JS --- single index.html
                        file

  Fonts                 Syne (display/headings) + JetBrains Mono
                        (data/labels)

  Primary Colors        Teal #00D4B1 \| Dark #07090F \| Purple #7B5EF6

  Risk Colors           Safe #22D06A \| Warning #F5C400 \| Critical
                        #F94060

  Total Animations      14 distinct Anime.js animations

  Deliverable           Single index.html --- open in browser, works
                        immediately
  -----------------------------------------------------------------------

**1. Design Concept & Aesthetic Direction**

  -----------------------------------------------------------------------
  *Aesthetic: Dark Intelligence Terminal. Deep navy background with teal
  electric accents. Glassmorphic cards with razor-thin borders.
  Typography that feels military-grade --- data-dense but never
  cluttered.*

  -----------------------------------------------------------------------

The dashboard is inspired by a Dribbble reference showing a modern dark
analytics interface with sidebar navigation, hero metrics, a data
visualization area, and a card-based module grid. EPIDIA adapts this
aesthetic for civilizational-scale intelligence data.

The one thing someone will remember: a pulsing red glow on critical risk
cards while a world map shows live crisis hotspots --- all in one
glance. It feels like the dashboard a government minister would actually
use.

  -----------------------------------------------------------------------
  **Design Principle**  **Implementation**
  --------------------- -------------------------------------------------
  Dark Intelligence     Deep #07090F background with #0D1117 sidebar ---
  Terminal              not pure black, has depth

  Teal as trust         #00D4B1 teal signals reliability and active data
                        --- used for all active states

  Risk color spectrum   Green (safe) → Yellow (warning) → Red (critical)
                        --- universally understood

  Glassmorphic cards    rgba(255,255,255,0.03) backgrounds with thin rgba
                        borders --- depth without weight

  Data typography       JetBrains Mono for all numbers, timestamps,
                        labels --- technical credibility

  Syne for impact       Syne 800 weight for scores and headings ---
                        powerful without being aggressive

  Ambient glows         Subtle radial gradients behind cards --- adds
                        warmth to cold data

  Noise texture         Subtle SVG noise overlay on body --- prevents
                        flat \"digital\" feel
  -----------------------------------------------------------------------

**2. File & Folder Structure**

**2.1 Single File Delivery**

The entire dashboard is one file: index.html. All CSS is inline in a
\<style\> block. All JavaScript is inline before \</body\>. Anime.js is
loaded from CDN. Open the file in any modern browser --- it works
immediately.

  -----------------------------------------------------------------------
  epidia_dashboard.html ← THE ONLY FILE YOU NEED Internally structured
  as: ├── \<head\> │ ├── Google Fonts CDN (Syne + JetBrains Mono) │ └──
  \<style\> ← ALL CSS inline here │ ├── \<body\> │ ├── .glow-teal /
  .glow-purple ← ambient background glows │ ├── #alertBanner ← fixed
  critical alert (hidden default) │ ├── #modalOverlay ← GitLab scan modal
  │ ├── .sidebar ← left nav + GCRI pill │ └── .main-area │ ├── .topbar ←
  nav bar with clock + buttons │ └── .content │ ├── .row1 ← GCRI card +
  world map + feed │ ├── .modules-row ← 5 module cards │ └── .stats-row ←
  4 bottom stat cards │ └── \<script\> ├── Anime.js CDN └── app.js inline
  ├── DATA constants ├── Sparkline builder ├── Clock updater ├── 14
  animation functions └── runEntrance() entry point

  -----------------------------------------------------------------------

**3. Color & Typography System**

**3.1 CSS Custom Properties**

  -----------------------------------------------------------------------
  :root { \--bg: #07090F; /\* Page background --- deepest dark \*/
  \--bg2: #0D1117; /\* Sidebar + topbar \*/ \--bg3: #121820; /\* Card
  backgrounds \*/ \--glass: rgba(255,255,255,0.03); /\* Card fills \*/
  \--glass-b: rgba(255,255,255,0.06); /\* Hover card fills \*/ \--teal:
  #00D4B1; /\* Primary brand --- active states \*/ \--teal-g:
  rgba(0,212,177,0.12); /\* Teal backgrounds \*/ \--teal-glo:
  rgba(0,212,177,0.30); /\* Teal glow/shadow \*/ \--purple: #7B5EF6; /\*
  Accent --- badges, secondary \*/ \--pur-g: rgba(123,94,246,0.12); /\*
  Purple backgrounds \*/ \--safe: #22D06A; /\* Score 0--40 \*/ \--warn:
  #F5C400; /\* Score 41--70 \*/ \--crit: #F94060; /\* Score 71--100 \*/
  \--crit-g: rgba(249,64,96,0.12); /\* Critical backgrounds \*/ \--txt:
  #D8E4F0; /\* Primary text \*/ \--sub: #4A6070; /\* Secondary / label
  text \*/ \--bdr: rgba(255,255,255,0.055); /\* All borders \*/ \--fn:
  \'Syne\', sans-serif; \--mono: \'JetBrains Mono\', monospace; }

  -----------------------------------------------------------------------

**3.2 Typography Scale**

  --------------------------------------------------------------------------------
  **Element**      **Font**    **Size**   **Weight**   **Color Variable**
  ---------------- ----------- ---------- ------------ ---------------------------
  Logo EPIDIA      Syne        26px       800          \--teal

  Hero GCRI score  Syne        46px       800          \--warn

  Module score     Syne        50px       800          \--ac (per card)

  Stat value       Syne        36px       800          per stat color

  Section headings Syne        14px       700          \--txt

  Module name      Syne        12px       700          \--txt

  Card labels      JetBrains   9px        400          \--sub (uppercase)
                   Mono                                

  Alert feed text  Syne        11px       400          \--txt

  Timestamps /     JetBrains   9-11px     400          \--sub
  data             Mono                                

  Badges           JetBrains   8px        400          risk color (uppercase)
                   Mono                                
  --------------------------------------------------------------------------------

**4. Layout Architecture**

**4.1 Page Grid**

  -----------------------------------------------------------------------
  body ├── .sidebar (220px fixed width, full height) └── .main-area
  (flex:1, flex-column) ├── .topbar (height:60px, flex-shrink:0) └──
  .content (flex:1, overflow-y:auto, padding:22px 28px) ├── .row1 (grid:
  240px \| 1fr \| 240px, gap:16px) ├── .modules-row (grid: repeat(5,1fr),
  gap:14px) └── .stats-row (grid: repeat(4,1fr), gap:14px)

  -----------------------------------------------------------------------

**4.2 Sidebar Structure**

  -----------------------------------------------------------------------
  **Section**      **Content**                       **Height**
  ---------------- --------------------------------- --------------------
  Logo area        EPIDIA wordmark + tagline         \~80px + border

  Nav group 1      Platform: Overview, FoodSight,    \~230px
                   ClimaRisk, DemoHealth, AIWatch,   
                   WealthFlow                        

  Nav group 2      Tools: Alerts, Data Sources,      \~120px
                   Settings                          

  Sidebar footer   GCRI mini pill with animated bar  \~100px + border
  -----------------------------------------------------------------------

**4.3 Row 1 --- Hero Row**

  -----------------------------------------------------------------------------
  **Column**   **Component**    **Width**    **Key Content**
  ------------ ---------------- ------------ ----------------------------------
  Left         GCRI Ring Card   240px        SVG ring animation + large score
                                             counter

  Center       World Map Card   1fr          SVG continents + 5 pulsing crisis
                                (flexible)   hotspots

  Right        Live Alert Feed  240px        Scrolling intelligence alerts with
                                             slide-in animation
  -----------------------------------------------------------------------------

**4.4 Module Cards Row**

Five equal-width cards in a single row using CSS Grid repeat(5, 1fr).
Each card has identical structure but unique accent color (\--ac CSS
variable) allowing one component definition to serve all five modules.

**4.5 Stats Row**

Four equal-width stat cards below the module grid: Crises Monitored,
Data Sources, Alerts Sent, and Prediction Accuracy. Each has an animated
counter and a trend indicator.

**5. Component Specifications**

**5.1 Navigation Sidebar**

  -----------------------------------------------------------------------------
  **Element**   **CSS Classes**    **Key Styles**           **Anime.js**
  ------------- ------------------ ------------------------ -------------------
  Sidebar       .sidebar           bg2 bg, border-right,    Slide in from left
  container                        sticky, z-index:2        on load

  Logo          Syne 800 26px      color:\--teal,           Part of sidebar
                                   letter-spacing:4px       entrance

  Nav item      .nav-item          hover: bg glass-b.       None --- CSS
                                   Active: teal-g bg + teal transitions only
                                   border                   

  Active        .nav-item.active   teal text + teal-dim     None
  indicator                        bg + 1px rgba border     

  Live pip      .nav-pip           5px circle,              None
                                   color:currentColor,      
                                   margin-left:auto         

  GCRI pill     .gcri-pill         bg3, border,             Bar animates from
                                   border-radius:10px       0% to GCRI% on load
  -----------------------------------------------------------------------------

**5.2 GCRI Ring Hero Card**

  -----------------------------------------------------------------------
  **Element**           **Specification**
  --------------------- -------------------------------------------------
  Ring SVG              viewBox 0 0 120 120. Two circles: .ring-bg
                        (track) + .ring-fill (progress)

  Ring radius           r=52. Circumference = 2π×52 = 326.7px

  Ring fill stroke      stroke:\--warn, stroke-width:7,
                        stroke-linecap:round, drop-shadow filter

  Stroke offset math    stroke-dasharray:326. stroke-dashoffset: 326 ×
                        (1 - GCRI/100)

  Score counter         Font: Syne 800 46px, color:\--warn, animates from
                        0 to GCRI

  Background glow       radial-gradient at 50% 0% using teal-g ---
                        positioned via ::before pseudo
  -----------------------------------------------------------------------

**5.3 World Map**

The world map is an inline SVG with simplified continent path outlines
(d attributes) colored with a near-invisible fill. Five hotspot groups
are positioned at geographic coordinates corresponding to each EPIDIA
module region.

  -------------------------------------------------------------------------
  **Module**   **Region**    **SVG   **SVG   **Dot Color**
                             cx**    cy**    
  ------------ ------------- ------- ------- ------------------------------
  FoodSight    East Africa   490     230     #F94060 (critical)

  ClimaRisk    Southeast     735     185     #F5C400 (warning)
               Asia                          

  DemoHealth   Eastern       510     90      #F5C400 (warning)
               Europe                        

  AIWatch      Global        570     130     #F94060 (critical)
               (center)                      

  WealthFlow   Latin America 200     310     #22D06A (safe)
  -------------------------------------------------------------------------

Each hotspot group contains three SVG elements: .hs-outer (pulsing
ring), .hs-inner (filled dot), .hs-pulse (secondary pulse ring). The map
also includes a tooltip group (#mapTooltip) that repositions on
mouseenter.

**5.4 Module Cards**

  -----------------------------------------------------------------------
  .mod-card anatomy: .mod-card ← container, position:relative, \--ac CSS
  var ::before ← top shimmer line using \--ac color .mod-top ← flex row:
  icon left, badge right .mod-icon ← 34×34 rounded, background uses \--ac
  at 10% opacity .badge ← .b-safe / .b-warn / .b-crit classes .mod-score
  ← Syne 800 50px, color:\--ac .mod-name ← Syne 700 12px .mod-region ←
  JetBrains Mono 9px, \--sub color .sparkline ← flex row of .sb bars,
  heights from trend data

  -----------------------------------------------------------------------

  ------------------------------------------------------------------------------------
  **Property**    **Safe (0--40)**       **Warning (41--70)**  **Critical (71--100)**
  --------------- ---------------------- --------------------- -----------------------
  \--ac color     #22D06A                #F5C400               #F94060

  Badge class     .b-safe                .b-warn               .b-crit

  Ambient glow    rgba(34,208,106,.05)   rgba(245,196,0,.05)   rgba(249,64,96,.07)

  Continuous      None                   None                  Box shadow pulse loop
  Anime                                                        (A6)
  ------------------------------------------------------------------------------------

**5.5 Alert Feed**

The feed is a flex column of .feed-item elements. Each item has a 2px
left border colored by severity (\--crit, \--warn, \--safe). Items are
prepended on new alerts and old items fade+collapse out when the list
exceeds 6 items.

**5.6 GitLab Scan Modal**

The modal opens on \"Connect GitLab\" click. It shows a progress bar and
6 scan steps that animate in one by one with a 620ms interval. Steps
start with a spinner icon and update to a teal checkmark when complete.
The overlay is semi-transparent with backdrop-filter:blur(10px).

**6. Complete Anime.js Animation Catalogue**

  -----------------------------------------------------------------------
  *14 animations total. Each is defined with exact targets, properties,
  duration, easing, delay, and loop settings. All code is copy-paste
  ready.*

  -----------------------------------------------------------------------

**A1 --- Sidebar Entrance**

  -----------------------------------------------------------------------
  **Parameter**   **Value**
  --------------- -------------------------------------------------------
  targets         #sidebar

  translateX      \[-30, 0\]

  opacity         \[0, 1\]

  duration        800

  easing          easeOutExpo

  delay           0
  -----------------------------------------------------------------------

  -----------------------------------------------------------------------
  anime({ targets:\'#sidebar\', translateX:\[-30,0\], opacity:\[0,1\],
  duration:800, easing:\'easeOutExpo\' });

  -----------------------------------------------------------------------

**A2 --- Module Cards Staggered Entrance**

  -----------------------------------------------------------------------
  **Parameter**   **Value**
  --------------- -------------------------------------------------------
  targets         .mod-card

  translateY      \[28, 0\]

  opacity         \[0, 1\]

  duration        700

  easing          easeOutExpo

  delay           anime.stagger(100, {start:620})
  -----------------------------------------------------------------------

  -----------------------------------------------------------------------
  anime({ targets:\'.mod-card\', translateY:\[28,0\], opacity:\[0,1\],
  duration:700, easing:\'easeOutExpo\',
  delay:anime.stagger(100,{start:620}) });

  -----------------------------------------------------------------------

**A3 --- Score Counter Animation (per module)**

  -----------------------------------------------------------------------
  **Parameter**   **Value**
  --------------- -------------------------------------------------------
  Method          anime() with update callback on plain object

  From            0

  To              module.score (73, 67, 45, 82, 38)

  duration        2000

  easing          easeOutExpo

  delay           720 + (index × 120)
  -----------------------------------------------------------------------

  -----------------------------------------------------------------------
  const obj = { val:0 }; anime({ targets:obj, val:moduleScore,
  duration:2000, easing:\'easeOutExpo\', delay:720 + i\*120,
  update:()=\>{ scoreEl.textContent = Math.round(obj.val); } });

  -----------------------------------------------------------------------

**A4 --- GCRI Ring Fill Animation**

  -----------------------------------------------------------------------
  **Parameter**   **Value**
  --------------- -------------------------------------------------------
  targets         #ringFill (SVG circle)

  property        strokeDashoffset

  from            326 (full circumference --- empty ring)

  to              326 × (1 − GCRI÷100) → for GCRI=64: 326×0.36 = 117

  duration        2600

  easing          easeOutCubic

  delay           500
  -----------------------------------------------------------------------

  -----------------------------------------------------------------------
  const circ = 2 \* Math.PI \* 52; // = 326.7 const offset = circ \* (1 -
  GCRI/100); anime({ targets:\'#ringFill\',
  strokeDashoffset:\[circ,offset\], duration:2600,
  easing:\'easeOutCubic\', delay:500 });

  -----------------------------------------------------------------------

**A5 --- Map Hotspot Pulse (continuous loop)**

  -----------------------------------------------------------------------
  **Parameter**   **Value**
  --------------- -------------------------------------------------------
  targets outer   .hs-outer --- pulsing ring

  scale           \[1, 1.6\]

  opacity         \[0.5, 0.12\]

  targets inner   .hs-inner --- filled dot

  scale inner     \[1, 1.15\]

  opacity inner   \[0.85, 0.4\]

  duration        2000 (outer) / 1600 (inner)

  easing          easeOutSine / easeInOutSine

  loop            true (both)

  direction       normal / alternate

  delay           anime.stagger(380) --- staggered so hotspots pulse
                  independently
  -----------------------------------------------------------------------

  -----------------------------------------------------------------------
  // Outer rings anime({ targets:\'.hs-outer\', opacity:\[0.5,0.12\],
  scale:\[1,1.6\], duration:2000, easing:\'easeOutSine\', loop:true,
  delay:anime.stagger(380) }); // Inner dots anime({
  targets:\'.hs-inner\', opacity:\[0.85,0.4\], scale:\[1,1.15\],
  duration:1600, easing:\'easeInOutSine\', loop:true,
  direction:\'alternate\', delay:anime.stagger(380) });

  -----------------------------------------------------------------------

**A6 --- Critical Card Box-Shadow Pulse (continuous)**

  -----------------------------------------------------------------------
  **Parameter**   **Value**
  --------------- -------------------------------------------------------
  targets         #m0, #m3 (FoodSight + AIWatch --- score \> 70)

  boxShadow       \[\"0 0 0px rgba(249,64,96,0)\", \"0 0 22px
                  rgba(249,64,96,0.28)\"\]

  duration        1300

  easing          easeInOutSine

  loop            true

  direction       alternate
  -----------------------------------------------------------------------

  -----------------------------------------------------------------------
  anime({ targets:\'#m0, #m3\', boxShadow:\[\'0 0 0px
  rgba(249,64,96,0)\',\'0 0 22px rgba(249,64,96,0.28)\'\], duration:1300,
  easing:\'easeInOutSine\', loop:true, direction:\'alternate\' });

  -----------------------------------------------------------------------

**A7 --- Live Dot Blink (continuous)**

  -----------------------------------------------------------------------
  **Parameter**   **Value**
  --------------- -------------------------------------------------------
  targets         #liveDot

  opacity         \[1, 0.12\]

  duration        780

  easing          easeInOutSine

  loop            true

  direction       alternate
  -----------------------------------------------------------------------

  -----------------------------------------------------------------------
  anime({ targets:\'#liveDot\', opacity:\[1,0.12\], duration:780,
  easing:\'easeInOutSine\', loop:true, direction:\'alternate\' });

  -----------------------------------------------------------------------

**A8 --- Card Hover Lift**

  -----------------------------------------------------------------------
  **Parameter**   **Value**
  --------------- -------------------------------------------------------
  Trigger         mouseenter / mouseleave on .mod-card

  enter ---       0 to -7
  translateY      

  enter ---       280
  duration        

  enter ---       easeOutQuad
  easing          

  leave ---       -7 to 0
  translateY      

  leave ---       280
  duration        

  leave ---       easeOutQuad
  easing          
  -----------------------------------------------------------------------

  -----------------------------------------------------------------------
  card.addEventListener(\'mouseenter\',()=\>{ anime({ targets:card,
  translateY:-7, duration:280, easing:\'easeOutQuad\' }); });
  card.addEventListener(\'mouseleave\',()=\>{ anime({ targets:card,
  translateY:0, duration:280, easing:\'easeOutQuad\' }); });

  -----------------------------------------------------------------------

**A9 --- Module Icon Rotation on Hover**

  -----------------------------------------------------------------------
  **Parameter**   **Value**
  --------------- -------------------------------------------------------
  targets         .mod-icon inside hovered card

  rotate          360

  duration        580

  easing          easeOutBack

  Trigger         mouseenter on .mod-card
  -----------------------------------------------------------------------

  -----------------------------------------------------------------------
  card.addEventListener(\'mouseenter\',()=\>{ anime({
  targets:card.querySelector(\'.mod-icon\'), rotate:360, duration:580,
  easing:\'easeOutBack\' }); });

  -----------------------------------------------------------------------

**A10 --- Critical Alert Banner Entrance**

  -----------------------------------------------------------------------
  **Parameter**   **Value**
  --------------- -------------------------------------------------------
  targets         #alertBanner

  translateY      \[\"-100%\", \"0%\"\]

  duration        600

  easing          easeOutBounce

  complete        Triggers A11 (shake) immediately after landing
  callback        
  -----------------------------------------------------------------------

  -----------------------------------------------------------------------
  anime({ targets:\'#alertBanner\', translateY:\[\'-100%\',\'0%\'\],
  duration:600, easing:\'easeOutBounce\', complete:()=\>shakeBanner() });

  -----------------------------------------------------------------------

**A11 --- Alert Banner Shake**

  -----------------------------------------------------------------------
  **Parameter**   **Value**
  --------------- -------------------------------------------------------
  targets         #alertBanner

  translateX      \[0, -10, 10, -7, 7, -4, 4, 0\]
  keyframes       

  duration        580

  easing          easeInOutSine

  Plays           Once, after A10 completes
  -----------------------------------------------------------------------

  -----------------------------------------------------------------------
  anime({ targets:\'#alertBanner\', translateX:\[0,-10,10,-7,7,-4,4,0\],
  duration:580, easing:\'easeInOutSine\' });

  -----------------------------------------------------------------------

**A12 --- Feed Item Slide-In**

  -----------------------------------------------------------------------
  **Parameter**   **Value**
  --------------- -------------------------------------------------------
  targets         Newly prepended .feed-item

  translateX      \[\"120%\", \"0%\"\]

  opacity         \[0, 1\]

  duration        380

  easing          easeOutExpo

  Trigger         addFeedItem() function called every 8 seconds
  -----------------------------------------------------------------------

  -----------------------------------------------------------------------
  feedList.prepend(el); anime({ targets:el,
  translateX:\[\'120%\',\'0%\'\], opacity:\[0,1\], duration:380,
  easing:\'easeOutExpo\' });

  -----------------------------------------------------------------------

**A13 --- Score Refresh Every 30 Seconds**

  -----------------------------------------------------------------------
  **Parameter**   **Value**
  --------------- -------------------------------------------------------
  Trigger         setInterval every 30,000ms

  Score delta     Random ±3 applied to each module score

  Animation       Counter from old to new value, 1200ms easeOutExpo

  Visual          Card backgroundColor flash --- rgba(255,255,255,0.04) →
                  0.08 → 0.04

  GCRI update     Recalculated and animated with 1400ms counter
  -----------------------------------------------------------------------

  -----------------------------------------------------------------------
  setInterval(()=\>{ MODULES.forEach((m,i)=\>{ const newScore =
  Math.min(100,Math.max(0, m.score + Math.round((Math.random()-.5)\*6)));
  const obj = { val:m.score }; anime({ targets:obj, val:newScore,
  duration:1200, easing:\'easeOutExpo\', update:()=\>{
  document.getElementById(\'s\'+i).textContent = Math.round(obj.val); }
  }); m.score = newScore; }); }, 30000);

  -----------------------------------------------------------------------

**A14 --- GCRI Hero Counter (page load)**

  -----------------------------------------------------------------------
  **Parameter**   **Value**
  --------------- -------------------------------------------------------
  targets         Plain object { val:0 } with update callback to #gcriNum

  from            0

  to              Calculated GCRI (default: 64)

  duration        2600

  easing          easeOutExpo

  delay           500
  -----------------------------------------------------------------------

  -----------------------------------------------------------------------
  const gObj = { val:0 }; anime({ targets:gObj, val:GCRI, duration:2600,
  easing:\'easeOutExpo\', delay:500, update:()=\>{
  document.getElementById(\'gcriNum\').textContent =
  Math.round(gObj.val); } });

  -----------------------------------------------------------------------

**6.1 Animation Summary**

  -------------------------------------------------------------------------------------------
  **ID**   **Name**           **Trigger**        **Loop**   **Duration**   **Key Easing**
  -------- ------------------ ------------------ ---------- -------------- ------------------
  A1       Sidebar Entrance   Page load          No         800ms          easeOutExpo

  A2       Cards Stagger      Page load          No         700ms          easeOutExpo
           Entrance                                                        

  A3       Score Counters     Page load          No         2000ms         easeOutExpo

  A4       GCRI Ring Fill     Page load          No         2600ms         easeOutCubic

  A5       Map Hotspot Pulse  Page load          Yes (loop) 2000ms         easeOutSine

  A6       Critical Card Glow Page load          Yes (alt)  1300ms         easeInOutSine

  A7       Live Dot Blink     Page load          Yes (alt)  780ms          easeInOutSine

  A8       Card Hover Lift    mouseenter/leave   No         280ms          easeOutQuad

  A9       Icon Rotation      mouseenter         No         580ms          easeOutBack

  A10      Alert Banner Enter Score \> 80        No         600ms          easeOutBounce

  A11      Alert Banner Shake After A10          No         580ms          easeInOutSine

  A12      Feed Item Slide    Every 8s           Via        380ms          easeOutExpo
                                                 interval                  

  A13      Score Refresh      Every 30s          Via        1200ms         easeOutExpo
                                                 interval                  

  A14      GCRI Hero Counter  Page load          No         2600ms         easeOutExpo
  -------------------------------------------------------------------------------------------

**7. Mock Data**

  -----------------------------------------------------------------------
  const MODULES = \[ { id:0, name:\'FoodSight\', score:73,
  color:\'#F94060\', trend:\[45,52,58,61,68,71,73\], region:\'East Africa
  · FAO+NASA\' }, { id:1, name:\'ClimaRisk\', score:67,
  color:\'#F5C400\', trend:\[55,58,60,62,63,65,67\], region:\'SE Asia ·
  ESA Copernicus\' }, { id:2, name:\'DemoHealth\', score:45,
  color:\'#F5C400\', trend:\[60,58,55,52,50,47,45\], region:\'Eastern
  Europe · V-Dem\' }, { id:3, name:\'AIWatch\', score:82,
  color:\'#F94060\', trend:\[40,50,58,65,71,77,82\], region:\'Global · AI
  Registries\' }, { id:4, name:\'WealthFlow\', score:38,
  color:\'#22D06A\', trend:\[42,41,40,39,38,38,38\], region:\'Latin
  America · World Bank\'} \]; // GCRI = 0.3×73 + 0.25×67 + 0.20×45 +
  0.15×82 + 0.10×38 // = 21.9 + 16.75 + 9.0 + 12.3 + 3.8 = 63.75 → 64

  -----------------------------------------------------------------------

**8. Delivery & Usage**

**8.1 Files Delivered**

  -------------------------------------------------------------------------
  **File**                 **Description**
  ------------------------ ------------------------------------------------
  epidia_dashboard.html    Complete dashboard --- open in any modern
                           browser, works immediately

  EPIDIA_Design_Doc.docx   This document --- full specification for
                           Antigravity IDE or any dev
  -------------------------------------------------------------------------

**8.2 How to Use With Google Antigravity IDE**

Paste this into Antigravity to regenerate or extend the dashboard:

  -----------------------------------------------------------------------
  *Build the EPIDIA dashboard from the attached design document. Single
  HTML file. Anime.js from CDN at
  https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js.
  Implement all 14 animations from Section 6 with exact parameters. Use
  colors from Section 3. Layout from Section 4. Mock data from Section 7.
  Fonts: Syne + JetBrains Mono from Google Fonts. Deliver one
  production-ready index.html.*

  -----------------------------------------------------------------------

**8.3 Browser Support**

  -----------------------------------------------------------------------
  **Browser**            **Support**
  ---------------------- ------------------------------------------------
  Chrome 90+             Full --- primary target

  Firefox 88+            Full

  Safari 14+             Full

  Edge 90+               Full

  Mobile Chrome          Responsive --- touch friendly
  -----------------------------------------------------------------------

+:---------------------------------------------------------------------:+
| **EPIDIA**                                                            |
|                                                                       |
| 14 Animations. 5 Modules. One File. Zero Setup.                       |
|                                                                       |
| *\"We Don\'t Predict the Future. We Protect It.\"*                    |
+-----------------------------------------------------------------------+

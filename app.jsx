/* ==========================================================
   NIGGLET · POKÉMON GANGSTER · app.jsx
   1st Edition Holographic TCG Binder · Burnt Sunset Gold
   ========================================================== */

const { useEffect } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "holoShimmer": true,
  "binderBg": true,
  "filmGrain": true,
  "marquee": true,
  "logoBob": true,
  "stickyChip": true
}/*EDITMODE-END*/;

const TG  = "https://t.me/niggletonpump";
const X   = "https://x.com/niggletonpump";
const PF  = "https://pump.fun";
const LOGO = "assets/nigglet.png";
const CARD_CHAMO = "assets/chamo.jpg";
const CARD_NIGLET = "assets/niglet-card.jpg";

/* ---------- atoms ---------- */
function Energy({ kind = "dark" }) { return <span className={"energy " + kind} aria-hidden="true"></span>; }
function Stars({ n = 5 }) {
  return <span>{"★".repeat(n)}{"☆".repeat(5 - n)}</span>;
}

/* ====================== TOP MARQUEE ====================== */
function TopMarquee({ on }) {
  if (!on) return null;
  const item = (
    <span>
      <b>1ST EDITION · HOLOFOIL</b> <i className="dot">●</i> PRE-LAUNCH ON PUMP.FUN <i className="dot">●</i> NO CONTRACT YET <i className="dot">●</i> STAY UNDERGROUND <i className="dot">●</i> STACK CHIPS <i className="dot">●</i> NEVER SNITCH <i className="dot">●</i> FAIR LAUNCH <i className="dot">●</i> 100% COMMUNITY <i className="dot">●</i> LP BURNED ON DAY ONE <i className="dot">●</i>
    </span>
  );
  return (
    <div className="top-marquee" role="presentation">
      <div className="track">{item}{item}</div>
    </div>
  );
}

/* ====================== HERO · giant TCG card ====================== */
function Hero({ bob, holo }) {
  return (
    <section className="hero" id="top">
      <div className="frame">
        <div className={"hero-card tcg-frame " + (holo ? "holo" : "")}>
          <div className="tcg-inner">
            <div className="card-top">
              <span className="basic-tag">BASIC</span>
              <span className="card-name">
                NIGGLETT
                <span className="ticker">$NIG</span>
              </span>
              <span className="card-hp"><span className="hp-label">HP</span>999</span>
              <span className="type-orb" title="Underground / Dark"></span>
            </div>
            <div className="subname">▸ THE UNDERGROUND HUSTLER · POKÉMON GANGSTER</div>

            <div className="card-art">
              <div className="first-ed">★ 1st Ed · Holofoil</div>
              <div className="medallion">
                <div className="ring"></div>
                <div className="inner-ring"></div>
              </div>
              <img className="hero-mole"
                   src={LOGO} alt="Nigglet"
                   style={{ animationPlayState: bob ? "running" : "paused" }} />
              <div className="city" aria-hidden="true"></div>
            </div>

            <div className="dex-strip">
              NO. 051½ &nbsp; <b>Gangster Pokémon</b> &nbsp; HT: 0'8" &nbsp; WT: 10.1 lbs &nbsp; TYPE: UNDERGROUND
            </div>

            <div className="attacks">
              <div className="ability">
                <span className="tag">Ability</span>
                <div className="body">
                  <b>Rug Pull Immunity</b>
                  This Pokémon is immune to rug pulls, scams, and weak hands. Liquidity stays burned. No door for the team to walk out of.
                </div>
              </div>

              <div className="attack">
                <div className="energy-row">
                  <Energy kind="dark" /><Energy kind="colorless" />
                </div>
                <div className="at-name">
                  <b>Tunnel Vision</b>
                  <span className="flavor">Burrow straight through the chart. Ignore all FUD and influencer noise this turn.</span>
                </div>
                <div className="dmg">120</div>
              </div>

              <div className="attack">
                <div className="energy-row">
                  <Energy kind="fire" /><Energy kind="dark" /><Energy kind="colorless" />
                </div>
                <div className="at-name">
                  <b>SOL Blaster</b>
                  <span className="flavor">Unleash a devastating blast powered by pure degen energy. Always hits.</span>
                </div>
                <div className="dmg">666</div>
              </div>
            </div>

            <div className="wrr">
              <div className="pill">weakness <Energy kind="gold" /> <b>×0</b></div>
              <div className="pill">resistance <Energy kind="dark" /> <b>−69</b></div>
              <div className="pill">retreat <Energy kind="colorless" /><Energy kind="colorless" /></div>
            </div>

            <div className="card-foot">
              <span className="nm">Illus. The Burrow</span>
              <span className="num">
                <span className="nig-pill">NIG</span> 051/420
                <Stars n={5} />
              </span>
              <span className="rarity">★ HOLO RARE ★</span>
            </div>
          </div>
        </div>

        <div className="hero-cta">
          <div className="hero-blurb">
            Real moles don't tweet. They <b>tunnel</b>. He came up from the dirt, kept his head down, and started running tunnels under the Solana chain. <b>Pre-launch on pump.fun.</b> No CA yet. No presale. No team bag. The burrow's open if you're real about it.
          </div>
          <div className="hero-actions">
            <a className="btn red" href={TG} target="_blank" rel="noreferrer">▸ Join the Burrow</a>
            <a className="btn" href={X} target="_blank" rel="noreferrer">Follow on X</a>
            <a className="btn ghost" href="#binder">See the Cards ↓</a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ====================== POKÉDEX ENTRY ====================== */
function Pokedex() {
  return (
    <section className="bay" id="dex">
      <div className="frame">
        <div className="section-head">
          <span className="section-stamp">▸ Pokédex Entry · No. 051½</span>
          <h2 className="section-title">The <span className="gold">Bootleg</span> Pokédex</h2>
          <p className="section-deck">Underground type. Habitat: tunnels, basements, abandoned subway shafts. Diet: dirt and dividends. Approach with respect.</p>
        </div>

        <div className="tcg-frame">
          <div className="tcg-inner">
            <div className="dex-wrap">
              <div className="dex-device">
                <div className="led-row">
                  <div className="led"></div>
                  <div className="led-sm r"></div>
                  <div className="led-sm y"></div>
                  <div className="led-sm g"></div>
                  <div style={{ flex: 1, height: 10, background: "var(--ink)", marginLeft: 6, borderRadius: 2 }}></div>
                </div>
                <div className="screen">
                  <div className="no">▸ ENTRY No. 051½</div>
                  <div className="nm">NIGGLETT</div>
                  <div className="ty">TYPE: UNDERGROUND</div>
                  <div style={{ marginTop: 6 }}>HT: 0'8" &nbsp; WT: 10.1 lbs</div>
                  <div>HAB: TUNNELS, BASEMENTS</div>
                  <div className="cry">► CRY: "nigg ── LETT <span className="blink">_</span>"</div>
                </div>
                <div className="pad">
                  <span></span><b></b><span></span>
                  <b></b><span></span><b></b>
                  <span></span><b></b><span></span>
                </div>
              </div>

              <div className="dex-card">
                <div className="meta">▸ FIELD NOTES · BURROW DIVISION</div>
                <h3>The Underground Hustler</h3>
                <p>Surfaces only when the chart looks ripe. Burrows in groups of three. One to scout, one to dig, one to count the chips. If you see a clean mound of dirt, walk around it. <i>That ain't a mound — that's a stash.</i></p>
                <p><b>Abilities:</b> Rug Pull Immunity · Tunnel Vision · SOL Blaster.<br /><b>Weakness:</b> none (×0). <b>Resistance:</b> FUD (−69).</p>

                <div className="stat-bars">
                  <div className="stat-row"><div className="l">Hustle</div><div className="bar"><i style={{ width: "94%" }}></i></div><div className="v">94</div></div>
                  <div className="stat-row"><div className="l">Loot</div><div className="bar y"><i style={{ width: "88%" }}></i></div><div className="v">88</div></div>
                  <div className="stat-row"><div className="l">Charisma</div><div className="bar p"><i style={{ width: "76%" }}></i></div><div className="v">76</div></div>
                  <div className="stat-row"><div className="l">Dig speed</div><div className="bar g"><i style={{ width: "82%" }}></i></div><div className="v">82</div></div>
                  <div className="stat-row"><div className="l">Snitch resist</div><div className="bar"><i style={{ width: "99%" }}></i></div><div className="v">99</div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ====================== LEGEND · evolution chain ====================== */
function Legend() {
  return (
    <section className="bay" id="legend">
      <div className="frame">
        <div className="section-head">
          <span className="section-stamp">▸ Three-Stage Evolution</span>
          <h2 className="section-title">The <span className="gold">Legend</span></h2>
          <p className="section-deck">How a mole from the tunnels became a blockchain hustler. Three stages. No shortcuts.</p>
        </div>

        <div className="evo-chain">
          <div className="evo-card tcg-frame">
            <div className="tcg-inner">
              <div className="stage-tag">▸ STAGE I · ORIGINS</div>
              <div className="pic"><span className="glyph">⛏</span></div>
              <h3>From the Tunnels</h3>
              <div className="flavor">"Born under the F train. Raised by the dirt."</div>
              <div className="body">While the other rookies were out battling in the tall grass, Nigglett was three feet under the platform, learning how the chips fall and which faces to remember.</div>
            </div>
          </div>

          <div className="evo-arrow">▸</div>

          <div className="evo-card tcg-frame holo">
            <div className="tcg-inner">
              <div className="stage-tag">▸ STAGE II · THE COME UP</div>
              <div className="pic"><span className="glyph">◇</span></div>
              <h3>To the Blockchain</h3>
              <div className="flavor">"Fast transactions. Low fees. Tunnel talk."</div>
              <div className="body">Heard about Solana. Set up shop on the chain, brought the whole crew above ground for the first time, and put a flag in the dirt at pump.fun. No presale, no insiders.</div>
            </div>
          </div>

          <div className="evo-arrow">▸</div>

          <div className="evo-card tcg-frame">
            <div className="tcg-inner">
              <div className="stage-tag">▸ STAGE III · THE CODE</div>
              <div className="pic"><span className="glyph">$</span></div>
              <h3>How We Move</h3>
              <div className="flavor">"Stay low. Stack chips. Never snitch."</div>
              <div className="body">Three rules in the burrow. Don't talk about plays you haven't made. Every bag, every brick, every block. And never sell out the team, on the floor or on the chart.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ====================== BINDER SPREAD · the cards ====================== */
function Binder() {
  return (
    <section className="bay" id="binder">
      <div className="frame">
        <div className="section-head">
          <span className="section-stamp">▸ The Trading Cards · Bootleg Set</span>
          <h2 className="section-title">The <span className="gold">Binder</span></h2>
          <p className="section-deck">Open the sleeve. Limited bootleg set, printed in the burrow, not sanctioned by any league. <b>Three more pulls coming soon.</b></p>
        </div>

        <div className="binder">
          <div className="sleeves">
            <div className="sleeve">
              <img src={CARD_NIGLET} alt="Nigglett · Pokémon Gangster" />
              <div className="caption"><span>Nigglett · Gangster</span><span className="num">050/420</span></div>
            </div>
            <div className="sleeve">
              <img src={CARD_CHAMO} alt="Chamo · El Squirtle Chamaco" />
              <div className="caption"><span>Chamo · El Chamaco</span><span className="num">007/420</span></div>
            </div>
            <div className="sleeve placeholder"><div className="back"></div></div>
            <div className="sleeve placeholder"><div className="back"></div></div>
            <div className="sleeve placeholder"><div className="back"></div></div>
            <div className="sleeve placeholder"><div className="back"></div></div>
          </div>

          <div className="binder-foot">
            <span className="l">▸ Set: BOOTLEG ED. · 6 of ?? cards revealed</span>
            <span>1ST EDITION · HOLOFOIL · COMMUNITY PRINT</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ====================== FIVE FAMILIES ====================== */
const FAMILIES = [
  { cls:"f1", crest:"I",   name:"The Foundation", role:"Phase I · Open the burrow", items:[
    "Fair launch on pump.fun", "Open the Telegram burrow",
    "Plant the flag, no presale, no insiders", "Word travels through the tunnels"
  ]},
  { cls:"f2", crest:"II",  name:"The Block",      role:"Phase II · Hold the corner", items:[
    "Community grows organically", "Memes hit the street",
    "Daily check-ins in the TG", "Diamond hands take the corner"
  ]},
  { cls:"f3", crest:"III", name:"The Tunnels",    role:"Phase III · Move the weight", items:[
    "CEX listings if the chart earns it", "Collabs with based crews only",
    "Trading-card giveaways", "Liquidity stays burned"
  ]},
  { cls:"f4", crest:"IV",  name:"The Empire",     role:"Phase IV · Sit at the table", items:[
    "Bootleg merch drop", "Sticker pack for the burrow",
    "Community treasury votes", "IRL burrow meet-ups"
  ]},
  { cls:"f5", crest:"V",   name:"The Legacy",     role:"Phase V · Pass it down", items:[
    "Whatever the burrow votes on", "Bootleg TCG IRL printing",
    "Doors stay open to new digs", "Real ones keep eating"
  ]},
];
function Families() {
  return (
    <section className="bay" id="roadmap">
      <div className="frame">
        <div className="section-head">
          <span className="section-stamp">▸ Five Families · Blueprint</span>
          <h2 className="section-title">The <span className="gold">Five</span> Families</h2>
          <p className="section-deck">A roadmap is a promise on paper. A blueprint is a promise on the floor. Five crews. Opened one at a time, only after the last one is real.</p>
        </div>

        <div className="families">
          {FAMILIES.map((f, i) => (
            <div key={i} className={"family tcg-frame " + f.cls}>
              <div className="tcg-inner">
                <div className="roman">{f.crest}</div>
                <div className="nm">{f.name}</div>
                <div className="role">{f.role}</div>
                <ul>{f.items.map((it, j) => <li key={j}>{it}</li>)}</ul>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 16, fontFamily: "Cabin", fontSize: 14, letterSpacing: "0.04em", color: "var(--tan-1)", fontStyle: "italic", opacity: 0.85 }}>
          ▸ No timelines. The burrow moves when the burrow eats.
        </div>
      </div>
    </section>
  );
}

/* ====================== TOKENOMICS · cardback + notice ====================== */
function Tokenomics() {
  return (
    <section className="bay" id="token">
      <div className="frame">
        <div className="section-head">
          <span className="section-stamp">▸ Tokenomics · The Plan</span>
          <h2 className="section-title">$NIG <span className="gold">Tokenomics</span></h2>
          <p className="section-deck">No deck. No projections. Just the plan, the supply, and a pokeball printed on the back.</p>
        </div>

        <div className="token-wrap">
          <div className="cardback">
            <div className="pstamp">▸ PLANNED</div>
            <h3>$NIG · The Plan<small>SOLANA · PUMP.FUN · FAIR LAUNCH</small></h3>
            <div className="tline"><span>Total supply</span><b>1,000,000,000</b></div>
            <div className="tline"><span>Buy / sell tax</span><b>0 % / 0 %</b></div>
            <div className="tline"><span>Liquidity</span><b>burned on day one</b></div>
            <div className="tline"><span>Mint authority</span><b>revoked</b></div>
            <div className="tline"><span>Freeze authority</span><b>revoked</b></div>
            <div className="tline"><span>Team allocation</span><b>0 · fair launch</b></div>
            <div className="tline"><span>Presale</span><b className="red">none. never.</b></div>
            <div className="tline"><span>Launchpad</span><b>pump.fun</b></div>
            <div className="tline"><span>Chain</span><b>solana</b></div>
          </div>

          <div className="notice-card tcg-frame">
            <div className="tcg-inner">
              <h4>Pre-launch · What's real today</h4>
              <div className="row"><span>Project status</span><b>PRE-LAUNCH</b></div>
              <div className="row"><span>Token contract</span><b>NOT DEPLOYED</b></div>
              <div className="row"><span>Trading</span><b>NOT OPEN</b></div>
              <div className="row"><span>Liquidity pool</span><b>NOT SEEDED</b></div>
              <div className="row"><span>Holder count</span><b>n/a</b></div>
              <div className="row"><span>Market cap</span><b>n/a</b></div>
              <div className="row"><span>Launchpad</span><b>PUMP.FUN</b></div>
              <div className="row"><span>Chain</span><b>SOLANA</b></div>
              <span className="red-stamp">▸ no CA · no price · don't trust links yet</span>
              <p style={{ fontFamily: "Cabin", fontSize: 14, marginTop: 14, lineHeight: 1.55, color: "var(--ink)" }}>
                ▸ When the contract drops, it drops in the <b>Telegram first</b>, then on X. Nowhere else. Anyone DMing you a contract before that is a fed or a fraud. Probably both.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ====================== HOW TO COP ====================== */
const STEPS = [
  { n:"01", t:"Get a Wallet",      p:<>Download <a href="https://phantom.app" target="_blank" rel="noreferrer">Phantom</a>, Solflare or Backpack. That's your tunnel entrance. Write the seed phrase on paper, never type it anywhere.</> },
  { n:"02", t:"Load up SOL",       p:<>Send a little SOL from any exchange. You need gas to move through the tunnels. <b>Only what you can lose.</b> This is a memecoin, not a retirement plan.</> },
  { n:"03", t:"Wait for the Drop", p:<>Watch the <a href={TG} target="_blank" rel="noreferrer">Telegram</a> and <a href={X} target="_blank" rel="noreferrer">X</a>. When the contract goes live, it goes there <b>first</b>. Nowhere else. Anyone DMing a CA early is lying.</> },
  { n:"04", t:"Cop on Pump.fun",   p:<>Paste the real CA into <a href={PF} target="_blank" rel="noreferrer">pump.fun</a>, swap your SOL for $NIG, set slippage like a person who's done this before. Then hop in the burrow.</> },
];
function HowToCop() {
  return (
    <section className="bay" id="how">
      <div className="frame">
        <div className="section-head">
          <span className="section-stamp">▸ How to Cop $NIG</span>
          <h2 className="section-title">How to <span className="gold">Cop</span></h2>
          <p className="section-deck">Read it twice. The streets don't refund tuition. Printed on the back of every booster sold under the awning, 1996 to forever.</p>
        </div>

        <div className="cop-row">
          {STEPS.map((s, i) => (
            <div key={i} className="step tcg-frame">
              <div className="tcg-inner">
                <div className="n">{s.n}</div>
                <h5>{s.t}</h5>
                <p>{s.p}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 22 }}>
          <a className="btn red" href={TG} target="_blank" rel="noreferrer">▸ Get in the Burrow first</a>
        </div>
      </div>
    </section>
  );
}

/* ====================== WANTED ====================== */
function Wanted() {
  return (
    <section className="bay">
      <div className="frame">
        <div className="wanted-frame tcg-frame holo">
          <div className="wanted tcg-inner">
            <div className="topline">★ UNDERGROUND BUREAU · BURROW DIVISION ★</div>
            <h3 className="word">WANTED <span className="gold">REAL ONES</span></h3>
            <div className="crime">FOR: <b>JOINING THE BURROW EARLY</b></div>
            <div className="reward">REWARD · GLORY IN THE TUNNELS</div>
            <div className="smallprint">diamond hands only · paper hands need not apply</div>

            <div className="frames" aria-hidden="true">
              <div className="ph">?</div>
              <div className="ph">?</div>
              <div className="ph">?</div>
              <div className="ph">?</div>
            </div>

            <div className="smallprint">
              ▸ Suspect known to: hold through dips, post bootleg memes, recruit real ones, and refuse all jeet propaganda. Last seen burrowing into the Telegram. Approach with respect.
            </div>

            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginTop: 14 }}>
              <a className="btn red" href={TG} target="_blank" rel="noreferrer">Turn Yourself In ▸ TG</a>
              <a className="btn" href={X} target="_blank" rel="noreferrer">Follow on X</a>
            </div>
            <div className="sig">signed, the burrow</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ====================== FAQ ====================== */
const FAQ = [
  { q: "Is the token live yet?", a: "No. Pre-launch. There is no contract address, no price, no chart. When it drops, it drops in the Telegram and on X first. Trust nothing else." },
  { q: "When is launch?", a: "When the burrow's ready. No countdown, no fake date. We don't promise dates we can't keep. That's how rugs talk. Stay in the TG, you'll know first." },
  { q: "Presale or whitelist?", a: "Neither. No team allocation either. Fair launch on pump.fun. Everyone digs from the same dirt. That's the whole code." },
  { q: "Where do I buy it?", a: "Only on pump.fun, after launch, using the contract address posted in the official Telegram and X. Anywhere else, anyone DMing you, it's a scam. Always." },
  { q: "What chain?", a: "Solana. Fast, cheap, the tunnels run smooth. Phantom / Solflare / Backpack wallet, a little SOL for gas, you're in." },
  { q: "Will it 100×?", a: "It's a meme coin about a gangster mole. We don't make price predictions and you shouldn't trust anyone who does. Buy what you can lose, hold like family." },
  { q: "Affiliated with Pokémon / Nintendo?", a: "No. Bootleg ed. Parody. Community-made. Nigglett is not endorsed by, affiliated with, or licensed by Nintendo, Game Freak, or The Pokémon Company." },
  { q: "What can I do right now?", a: "Three things. Join the Telegram. Follow on X. Tell a real one. That's it. No mint, no claim, no airdrop forms. If a site asks you to connect a wallet, it's not us." },
];
function StreetCode() {
  return (
    <section className="bay" id="faq">
      <div className="frame">
        <div className="section-head">
          <span className="section-stamp">▸ Street Code · Eight Questions</span>
          <h2 className="section-title">The <span className="gold">Street</span> Code</h2>
          <p className="section-deck">What the burrow gets asked every day. Printed in the back of every booster, every mixtape, every flyer stapled to the lamppost.</p>
        </div>

        <div className="code-grid">
          {FAQ.map((f, i) => (
            <div key={i} className="code-q tcg-frame">
              <div className="tcg-inner">
                <div className="q">{f.q}</div>
                <div className="a">{f.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ====================== FOOTER · card-number strip ====================== */
function Receipt() {
  return (
    <section className="bay" style={{ paddingBottom: 110 }}>
      <div className="frame">
        <div className="footer-card tcg-frame">
          <div className="tcg-inner">
            <h4>NIGGLETT · POKÉMON GANGSTER</h4>
            <div className="sub">▸ BOOTLEG EDITION · 1ST PRINT · 1996 / {new Date().getFullYear()}</div>

            <div className="grid">
              <div className="r"><span>Project</span><b>NIGGLETT ($NIG)</b></div>
              <div className="r"><span>Status</span><b>PRE-LAUNCH</b></div>
              <div className="r"><span>Chain</span><b>SOLANA</b></div>
              <div className="r"><span>Launchpad</span><b>PUMP.FUN</b></div>
              <div className="r"><span>Token contract</span><b>not deployed</b></div>
              <div className="r"><span>Bootleg date</span><b>{new Date().getFullYear()}</b></div>
              <div className="r"><span>Telegram</span><b><a href={TG} target="_blank" rel="noreferrer">t.me/niggletonpump</a></b></div>
              <div className="r"><span>X</span><b><a href={X} target="_blank" rel="noreferrer">@niggletonpump</a></b></div>
            </div>

            <div className="disclaim">
              <b>Disclaimer.</b> $NIG is a meme coin with no intrinsic value or expectation of financial return. The token is for entertainment and culture only. This site is pre-launch and no token has been deployed. Always DYOR and only ever spend what you can afford to lose. Not financial advice; just street wisdom.
              <br /><br />
              <b>Not affiliated.</b> Nigglett is a parody / fan-made meme. Not endorsed by, affiliated with, or licensed by Nintendo, Game Freak, or The Pokémon Company. All trademarks belong to their respective owners.
            </div>

            <div className="footstrip">
              <span className="nm">Illus. The Burrow</span>
              <span className="num"><span className="nig-pill">NIG</span> 051/420 <Stars n={5} /></span>
              <span className="rarity">★ HOLO RARE · 1ST ED ★</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ====================== STICKY BURROW CHIP ====================== */
function BurrowChip({ show }) {
  if (!show) return null;
  return (
    <div className="burrow-chip" role="complementary" aria-label="Join the burrow">
      <div className="hd"><span>▸ BURROW STATUS</span><span>OPEN</span></div>
      <div className="bd">
        <div className="big">Pre-launch.<br />Get in early.</div>
        <div className="sm">No CA yet. The real one drops in the TG first.</div>
        <a href={TG} target="_blank" rel="noreferrer">Join Telegram ▸</a>
      </div>
    </div>
  );
}

/* ====================== TWEAKS ====================== */
function Tweaks({ t, setTweak }) {
  return (
    <window.TweaksPanel title="Tweaks">
      <window.TweakSection title="Foil & Light">
        <window.TweakToggle label="Holo shimmer on cards" value={t.holoShimmer} onChange={v => setTweak("holoShimmer", v)} />
        <window.TweakToggle label="Sunset binder backdrop" value={t.binderBg} onChange={v => setTweak("binderBg", v)} />
        <window.TweakToggle label="Film grain overlay" value={t.filmGrain} onChange={v => setTweak("filmGrain", v)} />
      </window.TweakSection>
      <window.TweakSection title="Motion">
        <window.TweakToggle label="Top marquee" value={t.marquee} onChange={v => setTweak("marquee", v)} />
        <window.TweakToggle label="Logo bob animation" value={t.logoBob} onChange={v => setTweak("logoBob", v)} />
      </window.TweakSection>
      <window.TweakSection title="UI">
        <window.TweakToggle label="Sticky Burrow chip" value={t.stickyChip} onChange={v => setTweak("stickyChip", v)} />
      </window.TweakSection>
    </window.TweaksPanel>
  );
}

/* ====================== APP ====================== */
function App() {
  const [tweaks, setTweak] = window.useTweaks(TWEAK_DEFAULTS);

  useEffect(() => {
    document.body.classList.toggle("no-binder", !tweaks.binderBg);
    document.body.classList.toggle("no-grain",  !tweaks.filmGrain);
  }, [tweaks.binderBg, tweaks.filmGrain]);

  return (
    <>
      <TopMarquee on={tweaks.marquee} />
      <div className="shimmer-band" aria-hidden="true"></div>

      <Hero bob={tweaks.logoBob} holo={tweaks.holoShimmer} />
      <Pokedex />
      <Legend />
      <Binder />
      <Families />
      <Tokenomics />
      <HowToCop />
      <Wanted />
      <StreetCode />
      <Receipt />

      <BurrowChip show={tweaks.stickyChip} />
      <Tweaks t={tweaks} setTweak={setTweak} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

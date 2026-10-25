// Karlee's Zoroliq booking link (app.zoroliq.com/book/<her slug>).
const BOOK_BASE = "https://app.zoroliq.com/book/ks-beauty-bar-71e2ab72d513";

// Zoroliq service ids, set by docs/clients/ks-beautybar/seed_ks_beautybar_services.sql
// in the Zoroliq repo. A Book link with ?service=<id> opens with that service picked.
// Nail sets link to their Short option; the booking page then asks for the length.
// (Add-ons can't be booked alone, so their links open the full menu.)
const SERVICE_IDS = {
  "gelx-full-set": "84282a24-35d4-47d7-a741-fa43372463fb",
  "builder-gel-full-set": "59db0321-606f-4e5e-bbc6-29b84431a6f2",
  "gel-fill-2-3-weeks": "80244918-6254-43dd-ae09-85913c213e31",
  "gel-fill-4-weeks-rebalance": "1aee0120-c4d7-4057-974f-13a070100e7d",
  "gel-polish-only": "b022655f-80f8-4924-b9c8-470ca5979f35",
  "gel-polish-and-removal": "0681e0fd-370c-4419-8763-086200081188",
  "soak-off": "d509b90c-0082-4de1-a81f-3b8dff7af40d",
  "brow-wax-and-tint": "b8a9f9dd-3c96-4dcc-b5ce-c9f0ac849023",
  "brow-wax": "725ec14b-410b-41a6-97cf-71da14bc5adb",
  "brazilian-wax": "f2139ec7-287a-4018-a222-0a126ca851da",
  "bikini-wax": "7185cdb5-1e14-4e1a-b739-491483ddc0c3",
  "half-leg-wax": "9891470e-94c1-4503-8784-95964e7933a2",
  "arm-wax": "0c2d71df-caa5-43d4-9b6d-b4741bbd50ae",
  "underarm-wax": "55dcfe96-6752-429a-bb80-0b918027e21c",
  "upper-lip-wax": "8b29db9f-2b02-41a5-8866-7de03e0e45c4",
  "custom-spray-tan": "34b7d8ab-0daa-45d1-9298-812709b5ff3d"
};

const link = slug => SERVICE_IDS[slug] ? `${BOOK_BASE}?service=${SERVICE_IDS[slug]}` : BOOK_BASE;

const SET_HINT = "When you book, you'll pick your length and your nail art: solid colour, minimal, moderate or advanced.";
const FILL_HINT = "Fill on a set done somewhere else? Add a foreign fill (+$5) when you book.";
const EXFOLIATE = " Please exfoliate before your appointment for the smoothest result.";

// {slug, name, desc, price, time, lengths?: [[label, price, time]], hints?: []}
const MENU = [
  {cat:"Nails", items:[
    {slug:"gelx-full-set", name:"Gel-X full set", price:"$65+", time:"1 hr 15 min+",
     desc:"Gel-X nails are pre-shaped soft gel extensions applied to the natural nail with extend gel. They're lightweight and natural-looking.",
     lengths:[["Short","$65","1 hr 15 min"],["Medium","$75","1 hr 20 min"],["Long","$80","1 hr 35 min"]], hints:[SET_HINT]},
    {slug:"builder-gel-full-set", name:"Builder gel full set", price:"$60+", time:"1 hr 15 min+",
     desc:"A structured gel set designed for adding strength and durability to natural nails. Includes nail prep and cuticle care.",
     lengths:[["Short","$60","1 hr 15 min"],["Medium","$65","1 hr 30 min"],["Long","$70","1 hr 45 min"]], hints:[SET_HINT]},
    {slug:"gel-fill-2-3-weeks", name:"Gel fill, 2–3 weeks", price:"$55+", time:"1 hr 15 min+",
     desc:"Maintenance service for existing gel sets.",
     lengths:[["Short","$55","1 hr 15 min"],["Medium","$60","1 hr 15 min"],["Long","$65","1 hr 30 min"]],
     hints:["Pick this if your last appointment was 2–3 weeks ago.", FILL_HINT]},
    {slug:"gel-fill-4-weeks-rebalance", name:"Gel fill, 4+ weeks (rebalance)", price:"$60+", time:"1 hr 20 min+",
     desc:"For grown-out sets that need extra structure correction.",
     lengths:[["Short","$60","1 hr 20 min"],["Medium","$65","1 hr 25 min"],["Long","$75","1 hr 35 min"]],
     hints:["Pick this if it's been 4 weeks or more since your last appointment.", FILL_HINT]},
    {slug:"gel-polish-only", name:"Gel polish only", price:"$35", time:"1 hr",
     desc:"A classic gel polish manicure designed for long-lasting wear and a clean, polished finish."},
    {slug:"gel-polish-and-removal", name:"Gel polish and removal", price:"$35", time:"1 hr 15 min",
     desc:"A classic gel polish manicure, with removal of your current gel polish included. Removal is for gel polish only, not builder gel or hard gel.",
     hints:["Gel polish done by another artist? Add a foreign removal (+$5) when you book."]},
    {slug:"soak-off", name:"Soak off", price:"$35", time:"40 min",
     desc:"Removal of builder gel or Gel-X only, with no new set.",
     hints:["Product done by another artist? Add a foreign removal (+$5) when you book."]}
  ]},
  {cat:"Add-ons", items:[
    {slug:"nail-art", name:"Nail art", price:"Quoted at appointment", time:"15–40 min",
     desc:"Choose solid colour (no art), minimal, moderate or advanced when you book a nail set or fill. Art is priced at your appointment.",
     lengths:[["Solid colour","No art","no extra time"],["Minimal","Quoted","+15 min"],["Moderate","Quoted","+25 min"],["Advanced","Quoted","+40 min"]]},
    {slug:"foreign-fill", name:"Foreign fill", price:"+$5", time:"",
     desc:"For a fill on a set done by another nail artist."},
    {slug:"foreign-removal", name:"Foreign removal", price:"+$5", time:"",
     desc:"For a soak off or gel polish removal of product done by another nail artist."},
    {slug:"arm-massage", name:"Arm massage", price:"$7.50", time:"10 min",
     desc:"A relaxing add-on to finish your appointment."}
  ]},
  {cat:"Brows", items:[
    {slug:"brow-wax-and-tint", name:"Brow wax and tint", price:"$35", time:"35 min",
     desc:"A complete brow refresh combining precise waxing with a custom brow tint to enhance shape and depth."},
    {slug:"brow-wax", name:"Brow wax", price:"$25", time:"25 min",
     desc:"A professional brow wax focused on shaping and refining your natural brows to suit your face and bone structure."}
  ]},
  {cat:"Waxing", items:[
    {slug:"brazilian-wax", name:"Brazilian wax", price:"$50", time:"45 min",
     desc:"Removes hair from the front, back, and everything in between, leaving the area smooth." + EXFOLIATE},
    {slug:"bikini-wax", name:"Bikini wax", price:"$30", time:"30 min", desc:"A clean, smooth bikini line." + EXFOLIATE},
    {slug:"half-leg-wax", name:"½ leg wax", price:"$40", time:"45 min", desc:"Smooth legs from the knee down." + EXFOLIATE},
    {slug:"arm-wax", name:"Arm wax", price:"$35", time:"35 min", desc:"Smooth, hair-free arms." + EXFOLIATE},
    {slug:"underarm-wax", name:"Underarm wax", price:"$30", time:"25 min", desc:"Smooth underarms that stay that way longer than shaving." + EXFOLIATE},
    {slug:"upper-lip-wax", name:"Upper lip wax", price:"$10", time:"10 min", desc:"Quick, gentle hair removal for the upper lip." + EXFOLIATE}
  ]},
  {cat:"Spray tan", items:[
    {slug:"custom-spray-tan", name:"Custom spray tan", price:"$55", time:"35 min",
     desc:"A personalized spray tan tailored to your skin tone and desired level of bronze for a natural, even glow."}
  ]}
];

const groups = document.getElementById('groups');
const tabs = document.getElementById('tabs');
const esc = s => s.replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const isAddon = cat => cat === "Add-ons";

groups.innerHTML = MENU.map(g => `
  <div class="group" data-cat="${g.cat}">
    <h3>${g.cat}<small>${g.items.length} ${isAddon(g.cat) ? 'extras' : g.items.length>1?'services':'service'}</small></h3>
    ${g.items.map(s => `
      <div class="svc">
        <div class="svc-name">${esc(s.name)}</div>
        <div class="svc-side">
          <div class="svc-price">${esc(s.price)}${s.time ? ` <span>· ${esc(s.time)}</span>` : ''}</div>
          ${isAddon(g.cat) ? '<span class="svc-addon">Add when booking</span>'
            : `<a class="btn btn-rose" data-book="${s.slug}" href="#" aria-label="Book ${esc(s.name)}">Book</a>`}
        </div>
        <p class="svc-desc">${esc(s.desc)}</p>
        ${s.lengths ? `<dl class="svc-lengths">${s.lengths.map(([l,p,t]) =>
          `<div><dt>${esc(l)}</dt><dd>${esc(p)} <span>· ${esc(t)}</span></dd></div>`).join('')}</dl>` : ''}
        ${(s.hints || []).map(h => `<p class="svc-hint">${esc(h)}</p>`).join('')}
      </div>`).join('')}
  </div>`).join('');

["All", ...MENU.map(g => g.cat)].forEach((c,i) => {
  const b = document.createElement('button');
  b.type = 'button'; b.className = 'tab'; b.id = 'tab-' + i; b.textContent = c;
  b.setAttribute('aria-pressed', i === 0 ? 'true' : 'false');
  b.onclick = () => {
    tabs.querySelectorAll('.tab').forEach(t => t.setAttribute('aria-pressed', t === b ? 'true' : 'false'));
    groups.querySelectorAll('.group').forEach(g => g.hidden = !(c === 'All' || g.dataset.cat === c));
  };
  tabs.appendChild(b);
});

// Same tab on purpose: Instagram and TikTok in-app browsers (and some
// phones) silently block links that open a new tab.
document.querySelectorAll('[data-book]').forEach(a => { a.href = link(a.dataset.book); });
document.querySelectorAll('.book-any').forEach(a => { a.href = link(); });

document.querySelectorAll('.copy').forEach(b => b.onclick = async () => {
  const el = document.getElementById(b.dataset.copy);
  try { await navigator.clipboard.writeText(el.textContent); b.textContent = 'Copied'; }
  catch { const r = document.createRange(); r.selectNodeContents(el); const s = getSelection(); s.removeAllRanges(); s.addRange(r); b.textContent = 'Selected'; }
  setTimeout(() => b.textContent = 'Copy', 1500);
});

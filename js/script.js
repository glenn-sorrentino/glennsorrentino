const lines = [
    [
        { type: 'text', text: "👋 Hi, I'm Glenn, a product designer, non-profit leader, Board member, and digital activist working for a more equitable internet." },
    ],
    [
        { type: 'text', text: "In 2023, I left a Big Tech job to found a " },
        {
            type: 'hl',
            text: "501(c)(3) non-profit",
            card: {
                title: "IRS Determination Letter",
                url: "https://github.com/scidsg/business-resources/blob/main/Business%20Resources/501(c)(3)%20Determination%20Letter.pdf",
                img: "./img/letter.png",
                alt: "501(c)(3) non-profit determination letter"
            }
        },
        { type: 'text', text: " product development organization called " },
        {
            type: 'hl',
            text: "Science & Design, Inc.",
            card: {
                title: "Science & Design, Inc.",
                url: "https://scidsg.org",
                text: "A 501(c)(3) non-profit dedicated to building tools for privacy, security, and digital rights.",
                img: "./img/scidsg.png",
                alt: "Science & Design, Inc. homepage screenshot"
            }
        },
        { type: 'text', text: " We build open-source software focused on free speech online and free access to information." },
    ],
    [
        { type: 'text', text: "Later that year, I successfully raised funds to launch the first non-profit software-as-a-service whistleblower platform called " },
        {
            type: 'hl',
            text: "Hush Line",
            card: {
                title: "Hush Line",
                url: "https://hushline.app",
                text: "End-to-end encrypted tip lines for organizations and individuals.",
                img: "./img/hushline.png",
                alt: "Hush Line interface screenshot"
            }
        },
        { type: 'text', text: ". Our platform offers end-to-end encrypted, anonymous tip lines for lawyers, journalists, educators, and more. We're trusted by professionals at organizations such as Whistleblower Partners, LLP, Whistleblowers of America, NPR, LA Times, Bloomberg, HuffPost, ABC News, and BBC." },
        { type: 'text', text: "Users with elevated threat models can use the Hush Line Personal Server, a self-hosted, plug-and-play hardware device for when you need to own and control the end-to-end infrastructure for your tip line." }
    ],
    [
        { type: 'text', text: "Before venturing into social entrepreneurship, I spent over 10 years at Salesforce in San Francisco, CA." },
        { type: 'text', text: "I led the product design for our core platform, focusing on " },
        {
            type: 'hl',
            text: "search",
            card: {
                title: "Einstein Search",
                url: "https://www.zdnet.com/article/salesforce-improves-crm-searches-with-einstein-search/",
                text: "Salesforce's more actionable and capable search experience.",
                img: "./img/search.png",
                alt: "Einstein Search interface screenshot"
            }
        },
        { type: 'text', text: ", voice, identity, authentication, and more. " },
        { type: 'text', text: "During my tenure on our platform search team, I, along with my colleagues, earned multiple " },
        {
            type: 'hl',
            text: "US patents",
            card: {
                title: "US Patents",
                url: "https://patents.google.com/?inventor=glenn+sorrentino&oq=glenn+sorrentino",
                text: "A patent for the new search interaction model.",
                img: "./img/patent.png",
                alt: "Patent awarded to Glenn Sorrentino"
            }
        },
        { type: 'text', text: " for our work. Notably, we created a new interaction model where the end-user can find and act on any data, all from the search interface using natural language." },
    ],
    [
        { type: 'text', text: "Before LLMs, I had the opportunity to work on a voice assistant called " },
        {
            type: 'hl',
            text: "Einstein Voice",
            card: {
                title: "Einstein Voice",
                url: "https://www.salesforce.com/products/einstein/voice/",
                text: "Salesforce's voice assistant for CRM.",
                img: "./img/voice.png",
                alt: "Einstein Voice interface screenshots."
            }
        },
        { type: 'text', text: ". It was the first-ever turn-taking voice assistant that enabled enterprise users to perform essential tasks without ever doing manual data entry." },
        { type: 'text', text: "Working with the Salesforce AI Research team, we trained proprietary models to understand how outbound salespeople speak, allowing them to interact with Salesforce without learning new syntax using an app or custom hardware." },
        { type: 'text', text: "In 2019, " },
        {
            type: 'hl',
            text: "our work took center stage at Dreamforce",
            card: {
                title: "Einstein Search and Voice highlighted in the main Keynote",
                text: "Dreamforce is Salesforce's annual conference.",
                img: "./img/dreamforce.png",
                alt: "Dreamforce keynote 2019 highlighting two projects I led."
            }
        },
        { type: 'text', text: ", where we showcased the early possibilities of applied AI for the workplace, highlighting two products that I led in our main Keynote." }

    ],
    [
        { type: 'text', text: "Wayyy back in 2012 I arrived in San Francisco after agency and freelance work, and joined a startup called " },
        {
            type: 'hl',
            text: "Zinio",
            card: {
                title: "Zinio",
                url: "https://www.zinio.com/",
                text: "Zinio is a digital magazine subscription service.",
                img: "./img/zinio.png",
                alt: "Zinio interface screenshots."
            }
        },
        { type: 'text', text: " as a mobile designer, working on phones and tablets for iOS, Android, Windows, Blackberry RIM, and unreleased experimental devices." },
        { type: 'text', text: "And approximately one million years ago, I was an active-duty US Marine." },
        { type: 'text', text: "My job was working with battalion and company commanders to get Marines to mission-critical locations and back." },
    ],
    [
        { type: 'text', text: "Do you want to get in touch? Send an email to glenn@scidsg.org, or a Signal message to @glenn.01." },
    ]
];

const WORD_DELAY = 100;
const SENTENCE_PAUSE = 600;
const LINE_PAUSE = 900;

const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const D_WORD = reduceMotion ? 0 : WORD_DELAY;
const D_SENT = reduceMotion ? 0 : SENTENCE_PAUSE;
const D_LINE = reduceMotion ? 0 : LINE_PAUSE;

const textRoot = document.getElementById('text');

function createPartNode(part) {
    if (part.type === 'text') return document.createTextNode('');

    if (part.type === 'hl') {
        const wrap = document.createElement('span');
        wrap.className = 'highlight';
        wrap.setAttribute('tabindex', '0');

        const textNode = document.createTextNode('');

        const card = document.createElement('div');
        card.className = 'highlight-card';

        // Support both string and object forms
        if (typeof part.card === 'string') {
            const p = document.createElement('p');
            p.className = 'card-text';
            p.textContent = part.card;
            card.appendChild(p);
        } else if (part.card && typeof part.card === 'object') {
            if (part.card.img) {
                const media = document.createElement('div');
                media.className = 'card-media';
                const img = document.createElement('img');
                img.loading = 'lazy';
                img.decoding = 'async';
                img.src = part.card.img;
                img.alt = part.card.alt || '';
                media.appendChild(img);
                card.appendChild(media);
            }
            if (part.card.title) {
                if (part.card.url) {
                    const link = document.createElement('a');
                    link.href = part.card.url;
                    link.target = '_blank';
                    link.rel = 'noopener noreferrer';
                    link.className = 'card-title';
                    link.textContent = part.card.title;
                    card.appendChild(link);
                } else {
                    const h = document.createElement('div');
                    h.className = 'card-title';
                    h.textContent = part.card.title;
                    card.appendChild(h);
                }
            }
            if (part.card.text) {
                const p = document.createElement('p');
                p.className = 'card-text';
                p.textContent = part.card.text;
                card.appendChild(p);
            }
        }

        wrap.appendChild(textNode);
        wrap.appendChild(card);

        wrap.__targetText = part.text;
        wrap.__textNode = textNode;
        return wrap;
    }

    return document.createTextNode('');
}

function createLineContainer() {
    const line = document.createElement('span');
    line.className = 'line';
    return line;
}

function startsWithAlnum(str) {
    const m = str.match(/\S/);
    return m ? (/^[\p{L}\p{N}]/u).test(m[0]) : false;
}
function endsSentence(token) {
    return /^[.!?…]+$/.test(token) || /[.!?…]["’”)\]]?$/.test(token);
}
function tokenizeWords(s) {
    return s.split(/(\s+|&)/).filter(t => t.trim() !== '');
}
function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function revealAll() {
    await sleep(1000);

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const lineEl = createLineContainer();
        textRoot.appendChild(lineEl);

        const nodes = line.map(createPartNode);
        nodes.forEach((n, idx) => {
            if (idx > 0 && startsWithAlnum(line[idx].text)) {
                lineEl.appendChild(document.createTextNode(' '));
            }
            lineEl.appendChild(n);
        });

        const cursor = document.createElement('span');
        cursor.className = 'cursor';
        lineEl.appendChild(cursor);

        for (let idx = 0; idx < line.length; idx++) {
            const part = line[idx];
            const node = nodes[idx];
            if (part.type === 'text') {
                await revealWords(node, part.text);
            } else if (part.type === 'hl') {
                await revealWords(node.__textNode, node.__targetText);
            }
        }

        cursor.remove();
        await sleep(D_LINE);
    }
}

async function revealWords(textNode, full) {
    const tokens = tokenizeWords(full);
    for (let i = 0; i < tokens.length; i++) {
        const tok = tokens[i];
        const isWordyStart = /^[\p{L}\p{N}@#]/u.test(tok);
        const needsSpace = textNode.data && (isWordyStart || tok === '&');
        textNode.data += (needsSpace ? ' ' : '') + tok;
        await sleep(endsSentence(tok) ? D_SENT : D_WORD);
    }
}

revealAll();

(function () {
  const PADDING = 12;

  function positionCardDesktop(highlight, card) {
    // Place above by default
    const hRect = highlight.getBoundingClientRect();
    card.style.left = "0";
    card.style.right = "auto";
    card.style.bottom = "120%";
    card.style.top = "auto";
    card.style.transform = ""; // let CSS handle the small translate

    // Temporarily show to measure
    card.style.opacity = "0";
    card.style.visibility = "hidden";
    card.classList.add("open");
    const cRect = card.getBoundingClientRect();

    // Horizontal clamp
    let left = hRect.left;
    left = Math.max(PADDING, Math.min(window.innerWidth - cRect.width - PADDING, left));
    card.style.left = left - hRect.left + "px"; // relative to highlight

    // Flip below if not enough room above
    const above = hRect.top - cRect.height - PADDING;
    if (above < 0) {
      card.style.bottom = "auto";
      card.style.top = "calc(100% + 8px)";
    }

    // Restore visibility
    card.style.opacity = "";
    card.style.visibility = "";
  }

  function closeOpenCard() {
    const open = document.querySelector(".highlight-card.open");
    if (open) {
      open.classList.remove("open");
      document.body.classList.remove("card-open");
    }
  }

  // Toggle on tap/click
  document.addEventListener("click", (e) => {
    const hl = e.target.closest(".highlight");
    const open = document.querySelector(".highlight-card.open");

    if (hl) {
      const card = hl.querySelector(".highlight-card");
      if (open && open !== card) open.classList.remove("open");

      // Toggle
      const willOpen = !card.classList.contains("open");
      card.classList.toggle("open");

      // Mobile: add backdrop flag
      if (window.matchMedia("(max-width: 640px)").matches) {
        document.body.classList.toggle("card-open", willOpen);
      } else if (willOpen) {
        // Desktop: keep inside viewport
        positionCardDesktop(hl, card);
      }

      e.preventDefault();
      e.stopPropagation();
      return;
    }

    // Clicked outside
    if (open) {
      closeOpenCard();
    }
  });

  // Close on Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeOpenCard();
  });

  // Re-clamp on resize/orientation change
  window.addEventListener("resize", () => {
    const open = document.querySelector(".highlight-card.open");
    if (!open) return;
    const hl = open.closest(".highlight");
    if (hl && !window.matchMedia("(max-width: 640px)").matches) {
      positionCardDesktop(hl, open);
    }
  });
})();

(function () {
  "use strict";
  var CONFIG = window.CONFIG, SQUISHES = window.SQUISHES, QUESTIONS = window.QUESTIONS;
  var byId = {};
  SQUISHES.forEach(function (s) { byId[s.id] = s; });
  var app = document.getElementById("app");

  /* ---------------- storage (never throws) ---------------- */
  function load(k, d) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } }
  function save(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }

  /* ---------------- squish art (original SVG, zero downloads) ---------------- */
  function squishSVG(s, mood, cls) {
    mood = mood || "open";
    var b = s.body, a = s.accent, ink = s.ink || "#3a2e45", eye = s.eye || "#2b2235";
    var back = "", front = "", face = 0, ex = 26, ey = 110, showMouth = true, eyeR = 1;
    var t = s.type;
    if (t === "cat" || t === "fox") {
      var h = t === "fox" ? 22 : 30;
      back += '<polygon points="38,82 50,' + h + ' 88,50" fill="' + b + '"/><polygon points="162,82 150,' + h + ' 112,50" fill="' + b + '"/>';
      back += t === "fox"
        ? '<polygon points="46,48 50,' + h + ' 60,42" fill="' + a + '"/><polygon points="154,48 150,' + h + ' 140,42" fill="' + a + '"/>'
        : '<polygon points="50,64 54,42 74,52" fill="' + a + '"/><polygon points="150,64 146,42 126,52" fill="' + a + '"/>';
    }
    if (t === "frog") {
      back += '<circle cx="66" cy="56" r="24" fill="' + b + '"/><circle cx="134" cy="56" r="24" fill="' + b + '"/>';
      front += '<circle cx="66" cy="56" r="14" fill="#fff"/><circle cx="134" cy="56" r="14" fill="#fff"/>';
      ey = 57; ex = 34; face = 20;
    }
    if (t === "axolotl") {
      [[34,72,-35],[24,94,-10],[30,116,20]].forEach(function (g) {
        back += '<ellipse cx="' + g[0] + '" cy="' + g[1] + '" rx="20" ry="7" transform="rotate(' + g[2] + ' ' + g[0] + ' ' + g[1] + ')" fill="' + a + '"/>';
        back += '<ellipse cx="' + (200 - g[0]) + '" cy="' + g[1] + '" rx="20" ry="7" transform="rotate(' + (-g[2]) + ' ' + (200 - g[0]) + ' ' + g[1] + ')" fill="' + a + '"/>';
      });
    }
    if (t === "cow") {
      back += '<polygon points="62,48 56,22 74,42" fill="#f3e2b8"/><polygon points="138,48 144,22 126,42" fill="#f3e2b8"/>';
      back += '<ellipse cx="30" cy="78" rx="20" ry="10" fill="' + b + '" stroke="#e6e0ea" stroke-width="2"/><ellipse cx="170" cy="78" rx="20" ry="10" fill="' + b + '" stroke="#e6e0ea" stroke-width="2"/>';
      front += '<ellipse cx="46" cy="148" rx="16" ry="13" fill="' + a + '"/><ellipse cx="152" cy="68" rx="20" ry="14" fill="' + a + '"/><ellipse cx="160" cy="150" rx="11" ry="9" fill="' + a + '"/>';
      front += '<ellipse cx="100" cy="140" rx="30" ry="17" fill="#ffc6d6"/><ellipse cx="90" cy="140" rx="4" ry="5" fill="#d9879f"/><ellipse cx="110" cy="140" rx="4" ry="5" fill="#d9879f"/>';
      showMouth = false;
    }
    if (t === "hedgehog") {
      var pts = [];
      for (var i = 0; i <= 18; i++) {
        var ang = Math.PI * (1.05 + 0.9 * i / 18), r = i % 2 ? 98 : 80;
        pts.push((100 + Math.cos(ang) * r).toFixed(1) + "," + (118 + Math.sin(ang) * r * 0.9).toFixed(1));
      }
      back += '<polygon points="' + pts.join(" ") + '" fill="' + a + '"/>';
    }
    if (t === "owl") {
      back += '<polygon points="40,66 44,22 76,48" fill="' + b + '"/><polygon points="160,66 156,22 124,48" fill="' + b + '"/>';
      front += '<circle cx="74" cy="104" r="19" fill="#fff"/><circle cx="126" cy="104" r="19" fill="#fff"/>';
      front += '<polygon points="92,118 108,118 100,132" fill="' + a + '"/>';
      ey = 104; eyeR = 1.25; showMouth = false;
    }
    if (t === "pineapple") {
      back += '<polygon points="100,52 84,6 96,30 100,0 104,30 116,6" fill="' + a + '"/><polygon points="100,52 64,18 92,40" fill="#3d9a41"/><polygon points="100,52 136,18 108,40" fill="#3d9a41"/>';
      var dots = [[48,78],[152,78],[40,140],[160,140],[70,160],[130,160],[100,60]];
      dots.forEach(function (d) { front += '<path d="M' + (d[0]-6) + ' ' + (d[1]-6) + 'l12 12M' + (d[0]+6) + ' ' + (d[1]-6) + 'l-12 12" stroke="#e5b52e" stroke-width="3" stroke-linecap="round"/>'; });
    }
    if (t === "unicorn") {
      back += '<polygon points="46,70 54,38 80,52" fill="' + b + '" stroke="#f0e4f6" stroke-width="2"/><polygon points="154,70 146,38 120,52" fill="' + b + '" stroke="#f0e4f6" stroke-width="2"/>';
      front += '<circle cx="62" cy="52" r="14" fill="#ffb3d9"/><circle cx="44" cy="70" r="12" fill="' + a + '"/><circle cx="34" cy="92" r="10" fill="#9fd9ff"/>';
      front += '<polygon points="90,46 100,4 110,46" fill="#ffd166"/><path d="M93 34 l14 -4 M95 22 l10 -3" stroke="#e0a800" stroke-width="2.5"/>';
    }
    if (t === "shark") {
      back += '<polygon points="80,46 112,6 132,50" fill="' + b + '"/>';
      back += '<polygon points="22,120 0,150 34,140" fill="' + b + '"/><polygon points="178,120 200,150 166,140" fill="' + b + '"/>';
    }
    if (t === "mushroom") {
      face = 18;
      front += '<path d="M12 104 C10 40 58 12 100 12 C142 12 190 40 188 104 C150 90 50 90 12 104Z" fill="' + a + '"/>';
      front += '<circle cx="62" cy="50" r="11" fill="#fff"/><circle cx="104" cy="34" r="9" fill="#fff"/><circle cx="144" cy="58" r="13" fill="#fff"/><circle cx="92" cy="72" r="7" fill="#fff"/><circle cx="34" cy="84" r="6" fill="#fff"/><circle cx="168" cy="88" r="5" fill="#fff"/>';
    }

    var body = '<path d="M100 40C152 40 182 70 182 116C182 162 150 180 100 180C50 180 18 162 18 116C18 70 48 40 100 40Z" fill="' + b + '"/>';
    var belly = s.belly ? '<ellipse cx="100" cy="146" rx="' + (t === "hedgehog" ? 62 : 50) + '" ry="' + (t === "hedgehog" ? 44 : 30) + '" fill="' + s.belly + '"/>' : "";
    if (t === "hedgehog") belly = '<ellipse cx="100" cy="128" rx="60" ry="46" fill="' + s.belly + '"/>';

    var fy = ey + (t === "frog" ? 0 : face);
    function eyeOpen(x) {
      return '<ellipse cx="' + x + '" cy="' + fy + '" rx="' + 6.5 * eyeR + '" ry="' + 8.5 * eyeR + '" fill="' + eye + '"/>' +
        (s.eye ? '<ellipse cx="' + x + '" cy="' + fy + '" rx="2.2" ry="6" fill="#1d1d24"/>' : "") +
        '<circle cx="' + (x - 2) + '" cy="' + (fy - 3.5) + '" r="2.4" fill="#fff"/>';
    }
    function eyeHappy(x) { return '<path d="M' + (x - 7) + ' ' + (fy + 2) + ' q7 -10 14 0" stroke="' + (s.eye || ink) + '" stroke-width="3.5" fill="none" stroke-linecap="round"/>'; }
    var lx = 100 - ex, rx = 100 + ex;
    var eyes = mood === "happy" ? eyeHappy(lx) + eyeHappy(rx) : mood === "wink" ? eyeOpen(lx) + eyeHappy(rx) : eyeOpen(lx) + eyeOpen(rx);
    var cy = 126 + face, my = 124 + face;
    var cheeks = '<ellipse cx="' + (lx - 14) + '" cy="' + cy + '" rx="10" ry="5.5" fill="#ff8fb0" opacity=".6"/><ellipse cx="' + (rx + 14) + '" cy="' + cy + '" rx="10" ry="5.5" fill="#ff8fb0" opacity=".6"/>';
    var mouth = showMouth ? '<path d="M93 ' + my + ' q3.5 5 7 0 q3.5 5 7 0" stroke="' + ink + '" stroke-width="2.6" fill="none" stroke-linecap="round"/>' : "";
    if (mood === "happy" && showMouth) mouth = '<path d="M92 ' + my + ' q8 11 16 0Z" fill="#ff6b8f" stroke="' + ink + '" stroke-width="2" stroke-linejoin="round"/>';

    return '<svg class="squish ' + (cls || "") + '" viewBox="0 0 200 200" role="img" aria-label="' + s.name + ' illustration">' +
      '<ellipse cx="100" cy="186" rx="64" ry="8" fill="rgba(74,59,92,.13)"/>' +
      back + body + belly + front + cheeks + eyes + mouth + "</svg>";
  }

  /* ---------------- links ---------------- */
  function buyUrl(s) {
    var q = encodeURIComponent("Squishmallows " + s.name);
    return "https://www.amazon.com/s?k=" + q + (CONFIG.amazonTag ? "&tag=" + encodeURIComponent(CONFIG.amazonTag) : "");
  }
  document.getElementById("disclosure").textContent = CONFIG.amazonTag
    ? "As an Amazon Associate we earn from qualifying purchases. Buying through our links supports this site at no extra cost to you."
    : "Shopping links may earn us a small commission at no extra cost to you.";

  /* ---------------- quiz state ---------------- */
  var step = 0, answers = [];
  function scores() {
    var sc = {};
    SQUISHES.forEach(function (s) { sc[s.id] = 0; });
    answers.forEach(function (ai, qi) { QUESTIONS[qi].a[ai].p.forEach(function (id) { sc[id]++; }); });
    return sc;
  }
  function ranked() {
    var sc = scores(), tie = {};
    SQUISHES.forEach(function (s) { tie[s.id] = Math.random(); }); // fair random tie-break
    return SQUISHES.slice().sort(function (x, y) { return sc[y.id] - sc[x.id] || tie[y.id] - tie[x.id]; }).map(function (s) { return { s: s, score: sc[s.id] }; });
  }

  function render(html) {
    app.innerHTML = '<section class="screen">' + html + "</section>";
    window.scrollTo(0, 0);
  }

  /* ---------------- screens ---------------- */
  function home() {
    step = 0; answers = [];
    render('<div class="center">' +
      '<div class="hero-row">' + squishSVG(byId.archie, "happy") + squishSVG(byId.cam, "open") + squishSVG(byId.wendy, "wink") + "</div>" +
      '<h1>Find your <span class="hl">favorite squish!</span></h1>' +
      '<p class="sub">6 quick questions. 12 squishy friends. 1 perfect match.</p>' +
      '<div class="row"><button class="btn" data-go="start">Start the quiz ✨</button>' +
      '<button class="btn alt" data-go="all">Browse all squishes</button></div></div>');
  }

  function question() {
    var Q = QUESTIONS[step], pct = (step / QUESTIONS.length) * 100;
    render('<div class="progress" role="progressbar" aria-valuenow="' + step + '" aria-valuemax="6"><i style="width:' + pct + '%"></i></div>' +
      '<div class="qhead">' + squishSVG(byId[Q.mascot], step % 2 ? "happy" : "open") +
      '<div class="center"><div class="qnum">Question ' + (step + 1) + " of " + QUESTIONS.length + "</div><h2>" + Q.q + "</h2></div></div>" +
      '<div class="answers">' + Q.a.map(function (a, i) {
        return '<button class="ans" style="animation-delay:' + i * 0.05 + 's" data-ans="' + i + '"><span class="em">' + a.e + "</span>" + a.t + "</button>";
      }).join("") + "</div>" +
      '<div class="center"><button class="back" data-go="back">← ' + (step ? "Back" : "Start over") + "</button></div>");
    requestAnimationFrame(function () { var i = app.querySelector(".progress i"); if (i) i.style.width = ((step + 1) / QUESTIONS.length) * 100 + "%"; });
  }

  function results() {
    var r = ranked(), top = r.slice(0, 3), rest = r.slice(3);
    var maxPossible = QUESTIONS.length;
    confetti();
    render('<div class="center"><h2>Your top squish matches! 🎉</h2><p class="sub">Tap the one that is <b>your</b> favorite.</p></div>' +
      '<div class="cards">' + top.map(function (x, i) {
        return '<div class="card' + (i === 0 ? " top1" : "") + '" style="animation-delay:' + i * 0.1 + 's">' +
          (i === 0 ? '<span class="badge">Best match</span>' : "") + squishSVG(x.s, i === 0 ? "happy" : "open") +
          "<b>" + x.s.name + '</b><span class="match">' + Math.max(10, Math.round((x.score / maxPossible) * 100)) + "% match</span>" +
          '<button class="btn pick" data-fav="' + x.s.id + '">This one! 💗</button></div>';
      }).join("") + "</div>" +
      '<div class="center" style="margin-top:22px"><h2 style="font-size:1.3rem">Or pick another favorite</h2></div>' +
      grid(rest.map(function (x) { return x.s; })) +
      '<div class="row"><button class="btn alt" data-go="start">Retake quiz</button></div>');
  }

  function grid(list) {
    return '<div class="cards small-grid">' + list.map(function (s, i) {
      return '<button class="card" style="animation-delay:' + i * 0.03 + 's" data-fav="' + s.id + '">' + squishSVG(s, "open") + "<b>" + s.name + "</b></button>";
    }).join("") + "</div>";
  }

  function all() {
    render('<div class="center"><h2>All the squishes</h2><p class="sub">Tap your favorite to vote!</p></div>' + grid(SQUISHES) +
      '<div class="row"><button class="btn" data-go="start">Take the quiz instead ✨</button></div>');
  }

  function detail(id) {
    var s = byId[id];
    if (!s) return home();
    vote(id);
    confetti();
    var extra = (CONFIG.extraStores || []).map(function (st) {
      return '<a class="btn alt" target="_blank" rel="sponsored noopener" href="' + st.url.replace("{q}", encodeURIComponent("Squishmallows " + s.name)) + '">Buy at ' + st.name + "</a>";
    }).join("");
    render('<div class="detail">' +
      '<div class="center main-art">' + squishSVG(s, "happy", "jump") +
      '<div class="poses"><figure>' + squishSVG(s, "open") + "<figcaption>Hello!</figcaption></figure>" +
      "<figure>" + squishSVG(s, "wink") + "<figcaption>Wink!</figcaption></figure>" +
      "<figure>" + squishSVG(s, "happy") + "<figcaption>Hug me!</figcaption></figure></div></div>" +
      '<div><span class="badge">Your favorite 💗</span><h2>' + s.name + '</h2><p class="bio">' + s.bio + "</p>" +
      '<ul class="facts"><li>🏷️ <b>Squad:</b> ' + s.squad + "</li><li>💖 <b>Loves:</b> " + s.fav + "</li></ul>" +
      '<div class="row" style="justify-content:flex-start"><a class="btn buy" target="_blank" rel="sponsored noopener" href="' + buyUrl(s) + '">🛒 Buy ' + s.name.split(" ")[0] + "</a>" + extra + "</div>" +
      '<p class="note">Your vote was counted! Prices and availability vary by store.</p></div></div>' +
      '<div class="row"><button class="btn alt" data-go="poll">📊 See the poll</button><button class="btn alt" data-go="start">Retake quiz</button></div>');
  }

  /* ---------------- voting / poll ---------------- */
  function vote(id) {
    if (load("lm_myfav", null) === id) return; // already voted for this one
    var prev = load("lm_myfav", null), v = load("lm_votes", {});
    if (prev && v[prev]) v[prev]--; // one vote per device; changing fav moves it
    v[id] = (v[id] || 0) + 1;
    save("lm_votes", v); save("lm_myfav", id);
    if (CONFIG.voteEndpoint) {
      try {
        fetch(CONFIG.voteEndpoint, { method: "POST", mode: "no-cors", headers: { "Content-Type": "text/plain" },
          body: JSON.stringify({ id: id, prev: prev }) }).catch(function () {});
      } catch (e) {}
    }
  }

  function poll() {
    render('<div class="center"><h2>📊 Favorite Squish Poll</h2><p class="sub" id="pollsrc">Loading votes…</p></div><div class="poll" id="pollBox"></div>' +
      '<div class="row"><button class="btn" data-go="start">Take the quiz ✨</button></div>');
    var local = load("lm_votes", {});
    drawPoll(local, CONFIG.voteEndpoint ? "Showing this device's votes (loading everyone's…)" : "Votes from this device");
    if (CONFIG.voteEndpoint) {
      fetch(CONFIG.voteEndpoint).then(function (r) { return r.json(); }).then(function (data) {
        if (document.getElementById("pollBox")) drawPoll(data, "Votes from everyone 🌍");
      }).catch(function () {
        var el = document.getElementById("pollsrc"); if (el) el.textContent = "Couldn't reach the shared poll, showing this device's votes";
      });
    }
  }

  function drawPoll(counts, label) {
    var box = document.getElementById("pollBox"), src = document.getElementById("pollsrc");
    if (!box) return;
    src.textContent = label;
    var mine = load("lm_myfav", null);
    var list = SQUISHES.map(function (s) { return { s: s, n: Math.max(0, +counts[s.id] || 0) }; }).sort(function (a, b) { return b.n - a.n; });
    var max = Math.max(1, list[0].n);
    box.innerHTML = list.map(function (x) {
      return '<div class="bar' + (x.s.id === mine ? " mine" : "") + '">' + squishSVG(x.s, "open") +
        '<div class="track"><div class="fill" style="width:0"></div><span class="lbl">' + x.s.name + (x.s.id === mine ? " 💗" : "") + "</span></div>" +
        '<span class="ct">' + x.n + "</span></div>";
    }).join("");
    requestAnimationFrame(function () {
      box.querySelectorAll(".fill").forEach(function (f, i) { f.style.width = (list[i].n / max) * 100 + "%"; });
    });
  }

  /* ---------------- confetti (few DOM nodes, auto-removed) ---------------- */
  function confetti() {
    if (window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    var colors = ["#ff7fae", "#a37bff", "#7fd8c0", "#ffd166", "#9fd9ff"];
    for (var i = 0; i < 28; i++) {
      var c = document.createElement("i");
      c.className = "confetti";
      c.style.left = Math.random() * 100 + "vw";
      c.style.background = colors[i % colors.length];
      c.style.animationDelay = Math.random() * 0.4 + "s";
      document.body.appendChild(c);
      setTimeout(function (el) { el.remove(); }.bind(null, c), 2400);
    }
  }

  /* ---------------- happy music (WebAudio, no files) ---------------- */
  var Music = (function () {
    var ctx, master, timer, on = false, nextT = 0, idx = 0;
    var BPM = 128, EIGHTH = 60 / BPM / 2;
    // melody in C major; 0 = rest. 32 eighth notes per loop
    var N = { C4: 261.6, D4: 293.7, E4: 329.6, F4: 349.2, G4: 392, A4: 440, B4: 493.9, C5: 523.3, D5: 587.3, E5: 659.3, F5: 698.5, G5: 784, A5: 880, C6: 1046.5 };
    var mel = ["C5","E5","G5","E5","F5","A5","G5",0, "E5","G5","C6","G5","A5","F5","E5",0,
               "D5","F5","A5","F5","E5","G5","C5",0, "D5","E5","F5","D5","C5",0,"G4",0];
    var bass = ["C4","G4","F4","C4","D4","G4","C4","G4"]; // one per 4 eighths
    function tone(f, t, dur, type, vol) {
      var o = ctx.createOscillator(), g = ctx.createGain();
      o.type = type; o.frequency.value = f;
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(vol, t + 0.015);
      g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      o.connect(g); g.connect(master); o.start(t); o.stop(t + dur + 0.02);
    }
    function schedule() {
      while (nextT < ctx.currentTime + 0.15) {
        var m = mel[idx % mel.length];
        if (m) tone(N[m], nextT, EIGHTH * 0.9, "triangle", 0.22);
        if (idx % 4 === 0) tone(N[bass[(idx / 4) % bass.length]] / 2, nextT, EIGHTH * 3.5, "sine", 0.28);
        if (idx % 2 === 1) tone(2400, nextT, 0.03, "square", 0.02); // tiny hi-hat tick
        nextT += EIGHTH; idx++;
      }
    }
    function start() {
      var AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return false;
      if (!ctx) { ctx = new AC(); master = ctx.createGain(); master.gain.value = 0.18; master.connect(ctx.destination); }
      if (ctx.state === "suspended") ctx.resume();
      nextT = ctx.currentTime + 0.05; on = true;
      clearInterval(timer); timer = setInterval(schedule, 40); schedule();
      return true;
    }
    function stop() { on = false; clearInterval(timer); if (ctx) ctx.suspend(); }
    return { start: start, stop: stop, isOn: function () { return on; } };
  })();

  var musicBtn = document.getElementById("musicBtn");
  function setMusic(want) {
    var ok = want ? Music.start() : (Music.stop(), false);
    musicBtn.textContent = ok ? "🎵 Music" : "🔇 Music";
    musicBtn.setAttribute("aria-pressed", ok ? "true" : "false");
    save("lm_music", !!want);
  }
  musicBtn.addEventListener("click", function () { setMusic(!Music.isOn()); });
  document.addEventListener("visibilitychange", function () {
    if (document.hidden && Music.isOn()) { Music.stop(); musicBtn.dataset.resume = "1"; }
    else if (!document.hidden && musicBtn.dataset.resume) { delete musicBtn.dataset.resume; Music.start(); }
  });

  /* ---------------- events (one delegated listener) ---------------- */
  app.addEventListener("click", function (e) {
    var t = e.target.closest("button");
    if (!t) return;
    // browsers only allow audio after a tap: start music on first quiz start unless muted
    if (t.dataset.go === "start" && !Music.isOn() && load("lm_music", true)) setMusic(true);
    if (t.dataset.ans != null) {
      if (app.dataset.busy) return;
      app.dataset.busy = "1";
      t.classList.add("picked");
      answers[step] = +t.dataset.ans;
      setTimeout(function () {
        delete app.dataset.busy;
        step++;
        step >= QUESTIONS.length ? results() : question();
      }, 220);
      return;
    }
    if (t.dataset.fav) return detail(t.dataset.fav);
    switch (t.dataset.go) {
      case "start": step = 0; answers = []; question(); break;
      case "back": if (step === 0) home(); else { step--; answers.length = step; question(); } break;
      case "all": all(); break;
      case "poll": poll(); break;
    }
  });
  document.getElementById("homeBtn").addEventListener("click", home);
  document.getElementById("pollBtn").addEventListener("click", poll);

  // expose for tests
  window.__squish = { scores: scores, ranked: ranked, squishSVG: squishSVG, buyUrl: buyUrl, setAnswers: function (a) { answers = a.slice(); } };

  home();
})();

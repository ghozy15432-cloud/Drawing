/* ---------- Data ---------- */
const SKILLS=[
["Bentuk dasar & konstruksi kepala","Lingkaran + garis tengah + garis mata. Semua wajah anime mulai dari sini.","loomis method anime head"],
["Proporsi wajah anime","Mata di tengah kepala, dagu lancip, hidung & mulut kecil.","how to draw anime face front view beginner"],
["Mata, hidung, mulut disederhanakan","Mata = bentuk besar + 1 highlight. Hidung = 1 garis kecil.","how to draw anime eyes easy"],
["Rambut sebagai gumpalan besar","Gambar 3–4 gumpalan dulu, bukan helai satu per satu.","how to draw anime hair for beginners"],
["Garis yakin (line confidence)","Tarik garis dari bahu, bukan pergelangan. Satu goresan, jangan dikerik.","drawabox lesson 1 lines confidence"],
["Warna flat + 1 lapis bayangan","Cukup warna rata, lalu satu bayangan di sisi gelap.","anime flat color and cel shading tutorial"]];
const DAYS=[
["Minggu 1 — Fokus kepala saja",[
["Lingkaran & elips: 20 lingkaran + garis tengah dan garis mata (kepala tampak depan). Cukup pensil & kertas.","loomis method head beginner"],
["Rahang & dagu: ubah lingkaran jadi kepala utuh. 15 kepala tampak depan.","loomis head front view jawline"],
["Letak mata, hidung, mulut dengan rumus 1/2 dan 1/4. 10 kepala dengan fitur sederhana.","face proportions drawing beginner"],
["Kepala menoleh (3/4): garis tengah ikut melengkung. 10 kepala.","loomis method three quarter view head"],
["Kepala dari bawah dan atas (Foto 2 diambil dari bawah!). 10 kepala.","how to draw head from below and above"],
["Tengkorak belakang, telinga, dan garis rambut: kepala jadi punya volume. 10 kepala.","how to draw head side view cranium"],
["Review + uji: konstruksi kepala dari Foto 1 dan Foto 2 (garis bantu saja, belum detail). Bandingkan dengan hari 1.",""]]],
["Minggu 2 — Wajah anime",[
["Mata anime: 20 mata kiri-kanan di kertas, fokus bentuk besar dulu.","how to draw anime eyes step by step"],
["Alis, hidung, mulut anime (versi super sederhana).","how to draw anime nose and mouth"],
["Gabungkan: 5 wajah anime utuh dari konstruksi.","how to draw anime face mark crilley"],
["Telinga & leher, lalu bahu sederhana.","how to draw anime neck and shoulders"],
["Ekspresi: netral, senyum, kaget (sesuai Foto 2).","how to draw anime expressions"],
["Gambar wajah anime dari ingatan, tanpa contekan.",""],
["Review mingguan + istirahat. Simpan gambar hari 1 untuk dibandingkan.",""]]],
["Minggu 3 — Rambut & kemiripan",[
["Rambut pendek acak (Foto 1): 3 gumpalan besar + 5 helai penanda.","how to draw anime messy short hair"],
["Peci, topi, dan aksesori (Foto 2): bentuk geometris dulu.","how to draw anime boy with cap"],
["Jenggot tipis & kumis: arsir garis pendek, jangan per helai.","how to draw anime facial hair stubble"],
["Pakaian: kaos putih + tali tas (Foto 1), kerah baju batik (Foto 2).","how to draw anime clothes folds"],
["Teknik kemiripan: ukur jarak mata, lebar hidung, tinggi dahi di foto.","how to capture likeness drawing portrait"],
["Sketsa kasar Foto 1 (lineart pensil, belum bersih).",""],
["Sketsa kasar Foto 2 (2 orang: dekat & belakang).",""]]],
["Minggu 4 — Finishing di kertas",[
["Rapikan sketsa Foto 1 dengan fineliner/pulpen (garis bersih, hapus pensil setelah kering).","how to ink drawing with fineliner beginner"],
["Warna flat Foto 1 dengan pensil warna atau spidol (kulit, rambut, baju).","anime coloring with colored pencils beginner"],
["Bayangan 1 lapis dengan warna lebih gelap + kilau mata pakai gel pen putih.","anime shading colored pencil easy"],
["Rapikan sketsa Foto 2 dengan fineliner (wajah utama dulu).",""],
["Warna flat Foto 2 (pola batik: sederhanakan jadi titik & kotak).","how to simplify patterns anime clothes"],
["Bayangan + kilau Foto 2.",""],
["Hari bebas: selesaikan bagian yang belum rapi dari Foto 1 atau Foto 2.",""]]],
["Hari 29–30 — Penutup & jembatan ke digital",[
["Letakkan gambar hari 1 dan hari 29 berdampingan. Catat 3 kemajuan dan 3 hal yang masih lemah.",""],
["Instal Ibis Paint X (gratis). Foto gambar kertasmu, buka di aplikasi, coba layer dan brush 15 menit.","ibis paint x tutorial bahasa indonesia"]]]];
const YT=q=>"https://www.youtube.com/results?search_query="+encodeURIComponent(q);

/* ---------- Face illustrations ---------- */
const NAMES=["Hari 1–3|Bentuk kepala","Hari 4–7|Sudut & fitur","Hari 8–15|Lineart","Hari 16–25|Warna flat","Hari 26–30|Bayangan & kilau"];
function face(v,s){
 const A=v==="A",sk="#f1c9a2",hair=A?"#2b2b34":"#15151a",ink=s>=2?"#1f2433":"#8fa3c7";
 const f=(c)=>s>=3?c:"none";let o="";
 o+=`<path d="M20 240Q30 205 100 205Q170 205 180 240Z" fill="${f(A?"#f4f4f4":"#9fd0ee")}" stroke="${ink}" stroke-width="2"/>`;
 if(s>=3&&!A)o+=`<g fill="#274c8a"><rect x="40" y="224" width="8" height="8"/><rect x="95" y="226" width="8" height="8"/><rect x="150" y="222" width="8" height="8"/></g>`;
 o+=`<path d="M35 100C35 40 165 40 165 100C165 150 130 200 100 205C70 200 35 150 35 100Z" fill="${f(sk)}" stroke="${ink}" stroke-width="2"/>`;
 if(s<=1)o+=`<circle cx="100" cy="100" r="66" fill="none" stroke="${ink}" stroke-dasharray="4 4"/><path d="M100 25V215M30 105H170" stroke="${ink}" stroke-dasharray="4 4"/>`;
 if(s>=1)o+=`<path d="M70 150H130M100 105V150" stroke="${ink}" stroke-width="1.5" stroke-dasharray="3 3" opacity=".7"/>`;
 if(s>=2){
  o+=`<path d="${A?"M30 100C20 30 90 10 120 20C170 25 180 60 168 100C160 70 130 55 100 55C70 55 45 70 30 100Z":"M32 72L40 22Q100 8 160 22L168 72Q100 56 32 72Z"}" fill="${f(hair)}" stroke="${ink}" stroke-width="2"/>`;
  [70,130].forEach(x=>{o+=`<ellipse cx="${x}" cy="110" rx="14" ry="${A?9:11}" fill="${f("#fff")}" stroke="${ink}" stroke-width="2"/>`;
   if(s>=3)o+=`<circle cx="${x}" cy="111" r="7" fill="#3b2a20"/>`;if(s>=4)o+=`<circle cx="${x+3}" cy="108" r="2.5" fill="#fff"/>`;
   o+=`<path d="M${x-16} 92Q${x} 85 ${x+16} 92" stroke="${ink}" stroke-width="3" fill="none"/>`;});
  o+=`<path d="M97 128Q100 134 104 130" stroke="${ink}" stroke-width="2" fill="none"/><path d="${A?"M86 158H114":"M84 155Q100 170 116 155"}" stroke="${ink}" stroke-width="2.5" fill="none"/>`;
  if(A)o+=`<path d="M80 178Q100 198 120 178Q100 186 80 178Z" fill="${f(hair)}" stroke="${ink}" stroke-width="2"/>`;
 }
 if(s>=4)o+=`<path d="M165 100C165 150 130 200 100 205C132 188 150 150 150 100Z" fill="#000" opacity=".12"/>`;
 return `<svg viewBox="0 0 200 240" role="img" aria-label="Tahap ${s+1}">${o}</svg>`;
}
const stagesEl=document.getElementById("stages");
function drawStages(v){stagesEl.innerHTML=NAMES.map((n,i)=>{const[a,b]=n.split("|");return `<div class="stage">${face(v,i)}<b>${a}</b>${b}</div>`}).join("")}
drawStages("A");
document.querySelectorAll("#tabs button").forEach(b=>b.onclick=()=>{document.querySelectorAll("#tabs button").forEach(x=>x.classList.remove("on"));b.classList.add("on");drawStages(b.dataset.v)});

/* ---------- Reference photo (local only) ---------- */
document.getElementById("ref").onchange=e=>{const f=e.target.files[0];if(!f)return;const i=document.getElementById("refimg");i.src=URL.createObjectURL(f);i.hidden=false};

/* ---------- Skills ---------- */
document.getElementById("skills").innerHTML=SKILLS.map(s=>`<div class="skill"><h3>${s[0]}</h3><p>${s[1]}</p><a class="yt" href="${YT(s[2])}" target="_blank" rel="noopener">Cari di YouTube: "${s[2]}"</a></div>`).join("");

/* ---------- Checklist ---------- */
const KEY="anime-roadmap-v1";let state={};
try{state=JSON.parse(localStorage.getItem(KEY)||"{}")}catch(e){}
const save=()=>{try{localStorage.setItem(KEY,JSON.stringify(state))}catch(e){}};
let n=0,html="";
DAYS.forEach(([title,items])=>{html+=`<div class="week">${title}</div>`;items.forEach(([task,q])=>{n++;
 html+=`<label class="day${state[n]?" done":""}" data-n="${n}"><input type="checkbox" ${state[n]?"checked":""}><span class="d">Hari ${n}</span><span class="t">${task}${q?`<small><a class="yt" href="${YT(q)}" target="_blank" rel="noopener">YouTube: "${q}"</a></small>`:""}</span></label>`})});
const daysEl=document.getElementById("days");daysEl.innerHTML=html;
function upd(){const c=Object.values(state).filter(Boolean).length;document.getElementById("fill").style.width=c/30*100+"%";document.getElementById("pct").textContent=`${c} dari 30 hari selesai (${Math.round(c/30*100)}%)`}
daysEl.addEventListener("change",e=>{const l=e.target.closest(".day");state[l.dataset.n]=e.target.checked;l.classList.toggle("done",e.target.checked);save();upd()});
document.getElementById("reset").onclick=()=>{if(confirm("Hapus semua centang?")){state={};save();daysEl.querySelectorAll(".day").forEach(l=>{l.classList.remove("done");l.querySelector("input").checked=false});upd()}};
upd();

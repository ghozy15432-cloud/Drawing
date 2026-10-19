/* ---------- Data ---------- */
const SKILLS=[
["Salin gambar referensi (master copy)","Cara belajar tercepat: salin Ref 3 berkali-kali sampai tangan hafal bentuknya. Hanya untuk latihan, jangan diunggah sebagai karya sendiri.","how to learn anime art by copying references"],
["Kepala chibi & posisi mata","Kepala besar, mata rendah di bawah garis tengah, hidung titik, mulut kecil.","how to draw chibi head front view"],
["Mata anime besar","Kelopak atas tebal, iris besar, 1–2 kilau putih. Ini yang membuat gambar langsung terlihat anime.","how to draw anime eyes step by step"],
["Rambut sebagai gumpalan","3–4 gumpalan besar + beberapa helai penanda, bukan helai satu per satu.","how to draw anime hair bangs side part"],
["Lineart yakin","Garis tebal-tipis, satu goresan lancar dari bahu.","how to ink anime lineart beginner"],
["Warna flat + 1 bayangan + kilau","Itu saja sudah menghasilkan tampilan seperti Ref 3.","anime flat coloring and cel shading beginner"]];
const DAYS=[
["Minggu 1 — Kepala anime & chibi (langsung gaya anime)",[
["Kepala chibi: lingkaran besar, garis tengah, garis mata DI BAWAH tengah. 30 kepala, 1 menit per kepala.","how to draw chibi head front view"],
["Mata anime: salin mata Ref 3 sebanyak 30 kali (kelopak tebal, iris besar, 1 kilau).","how to draw anime eyes step by step"],
["Hidung titik, mulut kecil, alis. 5 ekspresi: cemberut (Ref 3), senyum, melet (Ref 2), kaget (Ref 1).","how to draw anime expressions chibi"],
["Gabungkan semuanya: 15 wajah chibi utuh dari konstruksi.",""],
["Rambut belah samping + poni (Ref 3): 3 gumpalan besar lalu helai penanda.","how to draw anime hair bangs side part"],
["Rambut panjang bergelombang di sisi wajah (Ref 1 dan Ref 3).","how to draw long wavy anime hair"],
["Review: salin kepala Ref 3 utuh (wajah + rambut). Simpan sebagai patokan hari 1.",""]]],
["Minggu 2 — Badan, baju, tangan",[
["Badan chibi: kepala besar, badan hanya 1–1,5 kali tinggi kepala.","how to draw chibi body proportions"],
["Seragam: kerah, kancing, bahu (baju biru Ref 3).","how to draw anime uniform collar buttons"],
["Lengan dan lipatan kain sederhana (3 lipatan saja).","how to draw anime clothes folds simple"],
["Tangan: kotak telapak + jari sederhana (tangan mencubit pipi di Ref 3).","how to draw anime hands simple"],
["Pose: tangan memegang garpu (Ref 1) dan menyentuh pipi (Ref 3).",""],
["Salin Ref 3 seluruh badan dengan pensil (sketsa kasar).",""],
["Review: ulangi salinan Ref 3 tanpa melihat tutorial. Tandai bagian yang masih salah.",""]]],
["Minggu 3 — Lineart & warna (kertas, atau Ibis Paint X bila sudah siap)",[
["Lineart bersih salinan Ref 3: garis tebal di luar, tipis di dalam.","how to ink anime lineart beginner"],
["Pilih palet 5 warna (kulit, rambut, mata, baju, aksen). Warna flat seluruh gambar.","anime flat coloring tutorial"],
["Rambut: warna dasar + 1 warna lebih terang di ujung (gradasi sederhana).","how to color anime hair easy"],
["Kulit + blush pipi + alis dan bulu mata dengan warna coklat, bukan hitam.","how to color anime skin blush"],
["Bayangan 1 lapis: di bawah poni, bawah dagu, dan lipatan baju.","anime cel shading beginner"],
["Kilau mata, kilau rambut, dan efek kecil (tanda marah, hati).","how to draw anime eye highlights"],
["Selesaikan salinan Ref 3 dan bandingkan dengan aslinya. Catat 3 selisih terbesar.",""]]],
["Minggu 4 — Karya sendiri dari fotomu",[
["Foto 1 jadi karakter anime: ambil 3 ciri khas (rambut acak, jenggot tipis, tali tas).","how to turn a photo into anime character drawing"],
["Sketsa chibi Foto 1 (kepala, badan, pose).",""],
["Lineart + warna flat Foto 1.",""],
["Bayangan + kilau Foto 1.",""],
["Sketsa Foto 2: peci, baju batik, ekspresi melet.","how to draw anime boy with cap"],
["Lineart + warna flat Foto 2 (batik disederhanakan jadi titik dan kotak).","how to simplify patterns anime clothes"],
["Bayangan + kilau Foto 2.",""],
["Mulai Ref 1 versi sederhana: tokoh chibi + 1 properti (cangkir/kue), tanpa latar rumit.",""],
["Finishing + bandingkan hari 1 dengan hari 30. Siapkan pindah ke Ibis Paint X untuk bulan depan.","ibis paint x tutorial bahasa indonesia"]]]];
const YT=q=>"https://www.youtube.com/results?search_query="+encodeURIComponent(q);

/* ---------- Anime face illustrations ---------- */
const NAMES=["Hari 1–3|Kepala & garis bantu","Hari 4–7|Letak fitur chibi","Hari 8–14|Lineart","Hari 15–21|Warna flat","Hari 22–26|Bayangan","Hari 27–30|Kilau & finishing"];
function face(t,s){
 const g=t==="girl",ink=s>=2?"#3a2630":"#9aaccc",hair=g?"#8f5f48":"#2b2b34",hd=g?"#6b4132":"#15151c",eye=g?"#7a4a30":"#3b2a20";
 const f=c=>s>=3?c:s===2?"#fff":"none",L=`stroke="${ink}" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round"`;
 let o="";
 if(s>=2&&g)o+=`<path d="M26 95C16 150 26 200 46 216L72 150H128L154 216C174 200 184 150 174 95Z" fill="${f(hair)}" ${L}/>`;
 o+=`<rect x="88" y="160" width="24" height="24" fill="${f("#fde8d8")}" ${L}/>`;
 o+=`<path d="M40 220Q46 172 100 168Q154 172 160 220Z" fill="${f(g?"#6b78b8":"#f4f4f4")}" ${L}/>`;
 if(s>=2)o+=`<path d="M86 172L100 190L114 172" fill="${f(g?"#8f9ad0":"#e6e6e6")}" ${L}/>`;
 if(s>=3&&g)o+=`<circle cx="100" cy="200" r="3.5" fill="#e2b84a"/>`;
 o+=`<path d="M32 105C32 55 168 55 168 105C168 150 135 172 100 172C65 172 32 150 32 105Z" fill="${f("#fde8d8")}" ${L}/>`;
 if(s<=1)o+=`<circle cx="100" cy="100" r="70" fill="none" stroke="${ink}" stroke-dasharray="4 4"/><path d="M100 30V176M30 118H170" stroke="${ink}" stroke-dasharray="4 4"/>`;
 if(s===1)o+=`<g stroke="${ink}" stroke-width="2"><path d="M60 118h18M122 118h18M97 138h6M90 152h20"/></g>`;
 if(s>=2){
  o+=`<ellipse cx="32" cy="120" rx="6" ry="9" fill="${f("#fde8d8")}" ${L}/><ellipse cx="168" cy="120" rx="6" ry="9" fill="${f("#fde8d8")}" ${L}/>`;
  [69,131].forEach(x=>{
   o+=`<ellipse cx="${x}" cy="120" rx="14" ry="${g?16:13}" fill="${f(eye)}" ${L}/>`;
   if(s>=4)o+=`<ellipse cx="${x}" cy="128" rx="9" ry="6" fill="#c98a5c" opacity=".7"/>`;
   o+=`<path d="M${x-16} 112Q${x} 100 ${x+16} 112" stroke="${ink}" stroke-width="4.5" fill="none" stroke-linecap="round"/>`;
   if(s>=3)o+=`<circle cx="${x-4}" cy="114" r="4.5" fill="#fff"/>`;
   if(s>=5)o+=`<circle cx="${x+5}" cy="126" r="2.2" fill="#fff"/>`;
   o+=`<path d="M${x-12} 98Q${x} ${g?94:90} ${x+12} ${g?98:94}" stroke="${ink}" stroke-width="2.5" fill="none" stroke-linecap="round"/>`;});
  o+=`<circle cx="100" cy="140" r="1.8" fill="${ink}"/><path d="${g?"M90 152Q95 148 100 152Q105 148 110 152":"M90 152Q100 160 110 152"}" stroke="${ink}" stroke-width="2.2" fill="none" stroke-linecap="round"/>`;
  if(s>=4)o+=`<ellipse cx="52" cy="140" rx="11" ry="6" fill="#f59ca0" opacity=".5"/><ellipse cx="148" cy="140" rx="11" ry="6" fill="#f59ca0" opacity=".5"/>`;
  o+=`<path d="${g?"M30 100C26 40 100 26 142 38C172 48 172 80 170 104C162 82 142 68 122 64C114 86 90 98 60 102C48 102 38 106 30 100Z":"M30 100C26 40 80 22 120 26C168 34 174 70 170 100C162 78 140 64 100 66C70 66 44 78 30 100Z"}" fill="${f(hair)}" ${L}/>`;
  if(s>=3)o+=`<path d="M62 52Q70 80 66 98M92 40Q96 62 90 84M138 48Q148 66 150 88" stroke="${hd}" stroke-width="1.8" fill="none" stroke-linecap="round"/>`;
  if(s>=4)o+=`<path d="M42 98C72 92 106 80 120 68L128 76C110 90 72 100 48 104Z" fill="${hd}" opacity=".45"/><path d="M60 172Q100 186 140 172Q135 178 100 180Q65 178 60 172Z" fill="#000" opacity=".1"/>`;
  if(s>=5)o+=`<path d="M62 46Q100 32 134 44" stroke="#fff" stroke-width="5" opacity=".55" fill="none" stroke-linecap="round"/><path d="M172 24L175 34L185 37L175 40L172 50L169 40L159 37L169 34Z" fill="#fff" stroke="#8fc0ff" stroke-width="1.5"/>`;
 }
 return `<svg viewBox="0 0 200 224" role="img" aria-label="Tahap ${s+1}">${o}</svg>`;
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

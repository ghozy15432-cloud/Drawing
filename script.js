/* ---------- Data ---------- */
const SKILLS=[
["Salin referensi (master copy)","Cara belajar tercepat. Salin Target A dan B berulang-ulang. Hanya untuk latihan, jangan diunggah sebagai karya sendiri.","how to learn anime art by copying references"],
["Kepala & mata anime","Mata di tengah kepala, dagu lancip. Latih mata terbuka, setengah terbuka, dan tertutup senyum.","how to draw anime face front view"],
["Rambut sebagai gumpalan & aliran","Poni, rambut panjang, dan gelombang digambar sebagai gumpalan S-curve, bukan helai satu-satu.","how to draw long flowing anime hair"],
["Baju & tangan yang disederhanakan","Renda = bentuk besar + beberapa lipatan. Tangan = kotak telapak + jari.","how to draw anime hands simple"],
["Value & arah cahaya","Pilih 1 sumber cahaya, gelap/terang dulu (3 tingkat), baru warna. Inilah yang membuat gambar terlihat 'jadi'.","how to do value study anime lighting"],
["Warna flat + layer bayangan (multiply)","Warna dasar, lapis bayangan hangat/dingin, lalu kilau. Butuh Ibis Paint X atau Krita.","anime color shading multiply layer tutorial"]];
const DAYS=[
["Minggu 1 — Kepala anime (proporsi normal)",[
["Kepala anime tampak depan: lingkaran + rahang lancip + garis mata di tengah. 20 kepala.","how to draw anime face front view"],
["Mata: terbuka, setengah terbuka, tertutup tersenyum (Target A). 30 mata.","how to draw anime eyes step by step"],
["Hidung, mulut (senyum tipis, mulut terbuka), alis. 15 ekspresi.","how to draw anime mouth expressions"],
["Kepala miring dan 3/4 (Target B). 15 kepala.","how to draw anime head 3/4 view"],
["Poni lurus berbelah (Target B) dan poni miring (Target A). 3 gumpalan + helai.","how to draw anime bangs"],
["Rambut panjang: 10 latihan aliran S-curve.","how to draw long flowing anime hair"],
["Review: salin kepala Target B (wajah + poni) dengan pensil.",""]]],
["Minggu 2 — Badan, baju, tangan",[
["Leher, bahu, dada: kerangka setengah badan.","how to draw anime upper body"],
["Kerah renda, pita, bros (Target A & B).","how to draw ruffles collar anime"],
["Lengan mengembung dan lipatan kain (3 lipatan saja).","how to draw puffy sleeves anime"],
["Tangan: kotak telapak + jari. 20 tangan.","how to draw anime hands simple"],
["Tangan menopang pipi (A) dan tangan bertumpuk (B).",""],
["Topi + pita (A), selendang rajut (B).","how to draw anime hat ribbon"],
["Review: salin pose setengah badan Target A dengan pensil.",""]]],
["Minggu 3 — Cahaya, value, warna (mulai Ibis Paint X hari ini)",[
["Value study: lihat Target A di mode Value (3–4 tingkat) di web ini, lalu tiru dalam grayscale.","how to do value study drawing"],
["Sumber cahaya: bayangan di wajah dan rambut jika cahaya dari kiri atas.","how to shade anime face light source"],
["Warna flat Target A (palet hangat: oranye, kuning, coklat).","anime color palette tutorial"],
["Layer bayangan (multiply) + kilau rambut.","how to color anime hair shine"],
["Latar: rak buku jadi balok gelap + blur, meja, kertas.","how to draw simple anime background bookshelf"],
["Bunga biru + daun + bokeh sederhana (Target B).","how to draw bokeh anime background"],
["Review: bandingkan hasil latihanmu dengan Target A, catat 3 selisih terbesar.",""]]],
["Minggu 4 — Dua proyek target (versi sederhana)",[
["Target A: thumbnail komposisi + sketsa kasar (pose, kepala, tangan).","how to plan composition thumbnail sketch"],
["Target A: sketsa detail (rambut, baju, topi, meja).",""],
["Target A: lineart bersih.","how to ink anime lineart digital"],
["Target A: value + warna flat.",""],
["Target A: bayangan, kilau, latar.",""],
["Target B: sketsa kasar (pose, wajah 3/4, rambut bergelombang).",""],
["Target B: bentuk pakaian, selendang, bunga, lineart.",""],
["Target B: warna + pencahayaan (cahaya kuat dari atas kiri, rim light).","anime rim light tutorial"],
["Target B: finishing, lalu bandingkan hari 1 dengan hari 30.",""]]]];
const YT=q=>"https://www.youtube.com/results?search_query="+encodeURIComponent(q);
const PROJECTS=[
["Target A: gadis menopang pipi di meja buku",[
["Thumbnail 3 kotak kecil: tokoh, meja, rak buku.","how to plan composition thumbnail sketch"],
["Pose kepala miring bersandar di tangan.","how to draw anime head tilt hand on cheek"],
["Wajah mata tertutup + mulut terbuka senang.","how to draw anime closed eyes smile"],
["Rambut panjang tertiup: gumpalan besar + aliran miring.","how to draw long flowing anime hair"],
["Topi + pita hitam, baju berenda + bros.","how to draw ruffles collar anime"],
["Tangan menopang pipi: kotak + jari.","how to draw hand supporting chin"],
["Meja, kertas, tinta: 3 bentuk datar saja.","how to draw table perspective simple"],
["Value 3 tingkat, cahaya dari kiri atas.","how to do value study anime lighting"],
["Warna flat, multiply bayangan hangat, kilau. Latar rak buku gelap dan blur.","anime warm lighting coloring tutorial"]]],
["Target B: gadis berbunga biru",[
["Thumbnail + pose: kepala 3/4, bahu miring, tangan di lutut.","how to plan composition thumbnail sketch"],
["Wajah senyum tipis, mata biru setengah terbuka.","how to draw anime face subtle smile"],
["Rambut bergelombang panjang: gelombang S besar dulu.","how to draw wavy anime hair"],
["Poni lurus + bayangan poni di dahi.","how to draw anime bangs shadow on face"],
["Kerah renda, pita hijau, bros, kancing.","how to draw ruffles collar anime"],
["Selendang rajut pink + lengan mengembung.",""],
["Tangan bertumpuk: sederhanakan jadi bentuk besar.","how to draw anime hands simple"],
["Bunga biru (kelopak = lingkaran), daun, bokeh gelap.","how to draw flowers simple anime"],
["Pencahayaan kuat dari atas kiri + rim light.","anime rim light tutorial"]]]];
document.getElementById("projects").innerHTML=PROJECTS.map(([t,st])=>`<h3>${t}</h3><ol>${st.map(([a,q])=>`<li>${a}${q?` <a class="yt" href="${YT(q)}" target="_blank" rel="noopener">YouTube: "${q}"</a>`:""}</li>`).join("")}</ol>`).join("");

/* ---------- Step viewer: referensimu diproses di browser, tidak diunggah ---------- */
const cv=document.getElementById("cv"),ctx=cv.getContext("2d",{willReadFrequently:true});
const TIPS={asli:"Gambar asli. Lihat dulu keseluruhannya: di mana pusat perhatiannya?",grid:"Grid: bagi gambar jadi kotak. Gambar kertasmu dengan grid yang sama, lalu salin kotak demi kotak (cara paling akurat untuk pemula).",blob:"Bentuk besar: detail hilang. Inilah yang digambar PERTAMA (siluet dan gumpalan warna).",value:"Value: 4 tingkat terang-gelap. Warna belum penting; cahayalah yang membuat gambar terlihat bagus.",line:"Garis: kerangka lineart otomatis. Lihat garis mana yang penting, mana yang boleh dilewatkan."};
let img=null,mode="asli";
function render(){
 if(!img)return;
 const W=Math.min(720,img.naturalWidth),H=Math.round(img.naturalHeight*W/img.naturalWidth);
 cv.width=W;cv.height=H;
 ctx.filter=mode==="blob"?`blur(${W/40}px)`:mode==="value"?`blur(${W/220}px)`:"none";
 ctx.drawImage(img,0,0,W,H);ctx.filter="none";
 if(mode==="value"||mode==="line"){
  const d=ctx.getImageData(0,0,W,H),p=d.data,g=new Float32Array(W*H);
  for(let i=0;i<W*H;i++)g[i]=.299*p[i*4]+.587*p[i*4+1]+.114*p[i*4+2];
  for(let y=0;y<H;y++)for(let x=0;x<W;x++){const i=y*W+x,o=i*4;let v;
   if(mode==="value")v=Math.min(3,Math.floor(g[i]/64))*85;
   else{if(x<1||y<1||x>=W-1||y>=H-1){v=255}else{v=Math.hypot(g[i+1]-g[i-1],g[i+W]-g[i-W])>38?0:255}}
   p[o]=p[o+1]=p[o+2]=v;p[o+3]=255}
  ctx.putImageData(d,0,0);
 }
 if(mode==="grid"){for(const[c,w]of[["#000",3],["#fff",1]]){ctx.strokeStyle=c;ctx.lineWidth=w;ctx.beginPath();
  for(let i=1;i<6;i++){ctx.moveTo(i*W/6,0);ctx.lineTo(i*W/6,H);ctx.moveTo(0,i*H/6);ctx.lineTo(W,i*H/6)}ctx.stroke()}}
 document.getElementById("tip").textContent=TIPS[mode];
}
document.getElementById("ref").onchange=e=>{const f=e.target.files[0];if(!f)return;const i=new Image();i.onload=()=>{img=i;cv.hidden=false;render()};i.src=URL.createObjectURL(f)};
document.querySelectorAll("#modes button").forEach(b=>b.onclick=()=>{document.querySelectorAll("#modes button").forEach(x=>x.classList.remove("on"));b.classList.add("on");mode=b.dataset.m;render()});

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

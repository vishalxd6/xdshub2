const TG="https://t.me/VISHAL_8_5";
const products=[
{"name":"Savastan0.Tools","category":"Tools","description":"Full featured tool set","link":TG},
{"name":"Netflix Cookie Config","category":"Configs","description":"Netflix config for cookies","link":TG},
{"name":"Spotify Premium Method","category":"Methods","description":"Easy method to get Spotify premium","link":TG},
{"name":"Hotmail Inbox Searcher","category":"Tools","description":"Search inboxes easily","link":TG},
{"name":"LCE Config Making Course","category":"Courses","description":"Learn LCE config making from basic to advance","link":TG},
{"name":"Combo Making Easy Method","category":"Methods","description":"Dump combos easily","link":TG},
{"name":"Crunchyroll Checker Tool","category":"Tools","description":"Check Crunchyroll accounts fast","link":TG},
{"name":"Private ULPS","category":"ULPS","description":"Exclusive ULPS logs","link":TG}
];

function renderHome(){
const fg=document.getElementById('featured-grid');
if(!fg) return;
fg.innerHTML='';
products.forEach(p=>{
const d=document.createElement('div');
d.className='product-card card';
d.innerHTML=`<h3>${p.name}</h3><p>${p.description}</p><p><a class='buy-btn' href='${p.link}' target='_blank'>Buy Now</a></p>`;
fg.appendChild(d);
});
}

function doSearchHome(){
const q=document.getElementById('globalSearch').value.toLowerCase();
const fg=document.getElementById('featured-grid');
fg.innerHTML='';
products.filter(p=>(p.name+p.category+p.description).toLowerCase().includes(q)).forEach(p=>{
const d=document.createElement('div');
d.className='product-card card';
d.innerHTML=`<h3>${p.name}</h3><p>${p.description}</p><p><a class='buy-btn' href='${p.link}' target='_blank'>Buy Now</a></p>`;
fg.appendChild(d);
});
}

window.onload=function(){if(document.getElementById('featured-grid')) renderHome();}

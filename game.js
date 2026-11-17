const paths = {
  guerreiro: {
    name: 'Guerreiro', title: 'Trilha do guerreiro', icon: '⚔', tone: 'LÂMINA E BRAVURA',
    skills: [
      {id:'war_root',name:'Golpe firme',icon:'⚔',x:380,y:72,cost:1,desc:'Um ataque preciso que ensina os fundamentos da espada. Seus golpes causam mais impacto e abrem espaço para técnicas avançadas.',stats:['+8% dano físico','Fundamento'],effect:'+8% de dano com armas',root:true},
      {id:'war_guard',name:'Guarda de ferro',icon:'◈',x:235,y:205,cost:1,req:'war_root',desc:'Erga a guarda e receba golpes com o escudo ou a lâmina. A disciplina também é uma arma.',stats:['+10% defesa','Postura'],effect:'+10% de defesa'},
      {id:'war_fury',name:'Fúria crescente',icon:'♨',x:525,y:205,cost:1,req:'war_root',desc:'Transforme a pressão do combate em força. Quanto maior o desafio, mais firme fica sua determinação.',stats:['+12% força','Ímpeto'],effect:'+12% de força'},
      {id:'war_riposte',name:'Contra-ataque',icon:'➶',x:160,y:345,cost:1,req:'war_guard',desc:'Aproveite uma abertura após aparar um ataque para responder com velocidade e precisão.',stats:['+15% contra-ataque','Técnica'],effect:'Contra-ataques causam +15% dano'},
      {id:'war_vital',name:'Vigor ancestral',icon:'✚',x:380,y:345,cost:1,req:'war_guard',desc:'O treinamento endurece corpo e espírito. Você aguenta a jornada mais longa sem recuar.',stats:['+20 vida máxima','Resistência'],effect:'+20 de vida máxima'},
      {id:'war_cleave',name:'Corte devastador',icon:'✹',x:600,y:345,cost:1,req:'war_fury',desc:'Um arco amplo de aço que rompe a linha inimiga. Uma técnica digna de uma lenda.',stats:['+20% dano em área','Especial'],effect:'Ataques em área causam +20% dano'},
      {id:'war_legend',name:'Coração de aço',icon:'♜',x:380,y:475,cost:2,req:'war_vital',desc:'A vontade de um verdadeiro campeão não se dobra. Una vigor e coragem numa defesa impenetrável.',stats:['+25% resistência','Lendária'],effect:'+25% resistência a dano'}
    ]
  },
  arcanista: {
    name: 'Arcanista', title: 'Trilha do arcanista', icon: '✧', tone: 'MISTÉRIO E MAGIA',
    skills: [
      {id:'arc_root',name:'Faísca arcana',icon:'✧',x:380,y:72,cost:1,desc:'Conjure uma centelha de energia pura e sinta a magia responder ao seu chamado.',stats:['+10% poder mágico','Fundamento'],effect:'+10% de poder mágico',root:true},
      {id:'arc_focus',name:'Mente serena',icon:'◉',x:235,y:205,cost:1,req:'arc_root',desc:'Silencie o ruído do mundo e concentre sua energia para conjurar com clareza.',stats:['+15% foco','Concentração'],effect:'+15% de foco mágico'},
      {id:'arc_flame',name:'Chama astral',icon:'♨',x:525,y:205,cost:1,req:'arc_root',desc:'Desperte um fogo sobrenatural que aquece o ar e ilumina até os caminhos mais escuros.',stats:['+12% magia de fogo','Elemental'],effect:'Magias de fogo causam +12% dano'},
      {id:'arc_blink',name:'Passo etéreo',icon:'⌁',x:160,y:345,cost:1,req:'arc_focus',desc:'Dobre o espaço por um instante e desapareça de onde seus inimigos esperam encontrá-lo.',stats:['+10% evasão','Mobilidade'],effect:'+10% de chance de evasão'},
      {id:'arc_mana',name:'Fonte de mana',icon:'◌',x:380,y:345,cost:1,req:'arc_focus',desc:'Encontre uma fonte interior de energia para manter suas conjurações por mais tempo.',stats:['+20 mana','Essência'],effect:'+20 de mana máxima'},
      {id:'arc_storm',name:'Tempestade celeste',icon:'ϟ',x:600,y:345,cost:1,req:'arc_flame',desc:'Chame os céus para uma dança de relâmpagos. Um poder raro, belo e imprevisível.',stats:['+20% dano elétrico','Especial'],effect:'Magias elétricas causam +20% dano'},
      {id:'arc_veil',name:'Véu do infinito',icon:'☼',x:380,y:475,cost:2,req:'arc_mana',desc:'Toque o limiar entre os mundos e deixe a magia fluir sem limites através de você.',stats:['+25% poder arcano','Lendária'],effect:'+25% de poder arcano'}
    ]
  },
  explorador: {
    name: 'Explorador', title: 'Trilha do explorador', icon: '➶', tone: 'INSTINTO E PRECISÃO',
    skills: [
      {id:'exp_root',name:'Mira certeira',icon:'◎',x:380,y:72,cost:1,desc:'Respire, encontre seu alvo e solte a flecha no momento perfeito.',stats:['+8% precisão','Fundamento'],effect:'+8% de precisão com ataques à distância',root:true},
      {id:'exp_step',name:'Passo silencioso',icon:'⌁',x:235,y:205,cost:1,req:'exp_root',desc:'Pise leve e deixe a floresta esconder seus movimentos de olhos curiosos.',stats:['+12% furtividade','Instinto'],effect:'+12% de furtividade'},
      {id:'exp_hawk',name:'Olho de falcão',icon:'◉',x:525,y:205,cost:1,req:'exp_root',desc:'Enxergue detalhes distantes e encontre o caminho mesmo quando a névoa desce.',stats:['+15% alcance','Percepção'],effect:'+15% de alcance'},
      {id:'exp_trap',name:'Armadilheiro',icon:'⌖',x:160,y:345,cost:1,req:'exp_step',desc:'Prepare o terreno a seu favor. Uma trilha bem escolhida vale mais que uma batalha.',stats:['+15% armadilhas','Tática'],effect:'Armadilhas causam +15% dano'},
      {id:'exp_comp',name:'Companheiro fiel',icon:'♧',x:380,y:345,cost:1,req:'exp_step',desc:'Ganhe a confiança das criaturas selvagens. Lealdade é uma força que não se compra.',stats:['+10% vínculo','Companhia'],effect:'+10% força do companheiro'},
      {id:'exp_volley',name:'Chuva de flechas',icon:'✹',x:600,y:345,cost:1,req:'exp_hawk',desc:'Uma salva veloz cobre o campo e mantém seus aliados fora de perigo.',stats:['+20% dano à distância','Especial'],effect:'Ataques à distância causam +20% dano'},
      {id:'exp_spirit',name:'Espírito da mata',icon:'❋',x:380,y:475,cost:2,req:'exp_comp',desc:'Torne-se parte da floresta. O vento guia seus passos e a mata responde ao seu chamado.',stats:['+20% agilidade','Lendária'],effect:'+20% de agilidade'}
    ]
  }
};
const quests = [
  {id:'ruins',icon:'⌂',name:'Ecos nas ruínas',desc:'Explore as ruínas do norte',reward:50,points:1},
  {id:'herbs',icon:'❋',name:'Ervas para a curandeira',desc:'Reúna plantas da floresta',reward:80,points:1},
  {id:'beacon',icon:'♨',name:'Acenda o antigo farol',desc:'Ajude a vila de Brumafria',reward:120,points:2}
];
const initialState = {xp:0,points:2,research:0,unlocked:[],equipped:[],completed:[],studied:[],customSkills:[],path:'guerreiro'};
let state;
try { state = {...initialState,...JSON.parse(localStorage.getItem('arvandor-save')||'{}')}; } catch { state = {...initialState}; }
state.unlocked = Array.isArray(state.unlocked)?state.unlocked:[];
state.equipped = Array.isArray(state.equipped)?state.equipped:[];
state.completed = Array.isArray(state.completed)?state.completed:[];
state.studied = Array.isArray(state.studied)?state.studied:[];
state.customSkills = Array.isArray(state.customSkills)?state.customSkills:[];
state.research = Math.max(0,Number(state.research)||0);
state.points = Math.max(0,Number(state.points)||0);
let selectedSkill = null;
let zoom = 1;
let toastTimer;
const $ = id => document.getElementById(id);
function save(){localStorage.setItem('arvandor-save',JSON.stringify(state));}
function levelData(){let xp=state.xp, level=1, threshold=100;while(xp>=threshold){xp-=threshold;level++;threshold=100+(level-1)*50;}return {level,xp,threshold};}
function renderHeader(){const d=levelData();$('levelBadge').textContent=`NV. ${d.level}`;$('xpText').textContent=`${d.xp} / ${d.threshold} XP`;$('xpBar').style.width=`${Math.min(100,d.xp/d.threshold*100)}%`;$('nextLevel').textContent=`${d.threshold-d.xp} XP`;$('pointsCount').textContent=state.points;}
function renderPaths(){ $('pathList').innerHTML=Object.entries(paths).map(([id,path])=>{const earned=path.skills.filter(s=>state.unlocked.includes(s.id)).length;return `<button class="path-card ${state.path===id?'active':''}" data-path="${id}"><span class="path-icon">${path.icon}</span><span class="path-copy"><b>${path.name}</b><small>${path.tone}</small></span><span class="path-count">${earned}/7</span></button>`;}).join('');document.querySelectorAll('.path-card').forEach(button=>button.addEventListener('click',()=>{state.path=button.dataset.path;selectedSkill=null;save();render();}));}
function renderTree(){const path=paths[state.path];$('treeTitle').textContent=path.title;const skills=path.skills;const byId=Object.fromEntries(skills.map(s=>[s.id,s]));$('connections').innerHTML=skills.filter(s=>s.req).map(s=>{const p=byId[s.req],active=state.unlocked.includes(s.id)&&state.unlocked.includes(s.req);return `<path class="link ${active?'active':''}" d="M ${p.x} ${p.y+22} C ${p.x} ${p.y+75}, ${s.x} ${s.y-75}, ${s.x} ${s.y-23}"/>`;}).join('');$('nodesLayer').innerHTML=skills.map(s=>{const unlocked=state.unlocked.includes(s.id),available=!unlocked&&(!s.req||state.unlocked.includes(s.req)),selected=selectedSkill===s.id,cls=unlocked?'unlocked':available?'available':'locked';return `<button class="skill-node ${cls} ${selected?'selected':''}" style="left:${s.x}px;top:${s.y}px" data-skill="${s.id}" aria-label="${s.name}${unlocked?', desbloqueada':available?', disponível':', bloqueada'}"><span class="node-orbit"><span class="node-icon">${s.icon}</span>${!available&&!unlocked?'<span class="node-lock">⌑</span>':''}</span><span class="node-name">${s.name}</span><span class="node-cost">${unlocked?'DESBLOQUEADA':`${s.cost} ${s.cost===1?'PONTO':'PONTOS'}`}</span></button>`;}).join('');document.querySelectorAll('.skill-node').forEach(button=>button.addEventListener('click',()=>{selectedSkill=button.dataset.skill;renderTree();renderDetail();}));}
function renderDetail(){const skill=paths[state.path].skills.find(s=>s.id===selectedSkill);if(!skill){$('detailEmpty').classList.remove('hidden');$('skillDetail').classList.add('hidden');return;}$('detailEmpty').classList.add('hidden');$('skillDetail').classList.remove('hidden');const unlocked=state.unlocked.includes(skill.id),available=!skill.req||state.unlocked.includes(skill.req),equipped=state.equipped.includes(skill.id),reqSkill=paths[state.path].skills.find(s=>s.id===skill.req);let button='';if(!unlocked)button=`<button class="primary-button" id="unlockSkill" ${(!available||state.points<skill.cost)?'disabled':''}>${!available?`Requer: ${reqSkill?.name||'habilidade anterior'}`:state.points<skill.cost?'Pontos insuficientes':`✧ Desbloquear · ${skill.cost} ${skill.cost===1?'ponto':'pontos'}`}</button>`;else button=`<button class="primary-button ${equipped?'equip-button':''}" id="equipSkill">${equipped?'✓ Equipado — remover do arsenal':'＋ Equipar habilidade'}</button>`;$('skillDetail').innerHTML=`<div class="detail-top"><div class="detail-icon">${skill.icon}</div><div class="detail-title"><h3>${skill.name}</h3><span>${paths[state.path].name} · ${skill.root?'Fundamento':skill.cost===2?'Lendária':'Técnica'}</span></div></div><p class="detail-desc">${skill.desc}</p><div class="detail-stats">${skill.stats.map(s=>`<span class="stat-pill">${s}</span>`).join('')}</div>${!available?`<p class="requirement">✧ Desbloqueie <b>${reqSkill?.name}</b> primeiro.</p>`:''}${button}`;const unlock=$('unlockSkill');if(unlock)unlock.addEventListener('click',()=>{if(!available||state.points<skill.cost)return;state.points-=skill.cost;state.unlocked.push(skill.id);selectedSkill=skill.id;save();render();showToast(`${skill.name} desbloqueada!`);});const equip=$('equipSkill');if(equip)equip.addEventListener('click',()=>{if(equipped)state.equipped=state.equipped.filter(id=>id!==skill.id);else if(state.equipped.length<3)state.equipped.push(skill.id);else{showToast('Seu arsenal está cheio. Remova uma habilidade antes.');return;}save();render();});}
function renderLoadout(){const allSkills=[...Object.values(paths).flatMap(p=>p.skills),...state.customSkills];const slots=Array.from({length:3},(_,i)=>{const id=state.equipped[i],skill=id?allSkills.find(s=>s.id===id):null;return `<div class="loadout-slot ${skill?'filled':''}">${skill?`<span class="slot-icon">${skill.icon}</span><span>${skill.name}</span><button class="remove-skill" data-remove="${skill.id}" aria-label="Remover ${skill.name}">×</button>`:`<span class="slot-icon slot-empty">＋</span><span>Espaço disponível</span>`}</div>`;}).join('');$('loadout').innerHTML=slots;$('loadoutCount').textContent=`${state.equipped.length} / 3`;document.querySelectorAll('[data-remove]').forEach(b=>b.addEventListener('click',()=>{state.equipped=state.equipped.filter(id=>id!==b.dataset.remove);save();render();}));}
function renderQuests(){$('questGrid').innerHTML=quests.map(q=>{const done=state.completed.includes(q.id);return `<article class="quest-card ${done?'completed':''}"><div class="quest-icon">${done?'✓':q.icon}</div><div class="quest-copy"><b>${q.name}</b><small>${done?'Missão concluída':q.desc}</small><div class="quest-reward">✧ ${q.reward} XP &nbsp;·&nbsp; +${q.points} ${q.points===1?'ponto':'pontos'} &nbsp;·&nbsp; +1 pesquisa</div></div><button class="quest-button ${done?'done':''}" data-quest="${q.id}" ${done?'disabled':''}>${done?'Concluída':'Completar'}</button></article>`;}).join('');document.querySelectorAll('[data-quest]').forEach(b=>b.addEventListener('click',()=>{const q=quests.find(q=>q.id===b.dataset.quest);if(!q||state.completed.includes(q.id))return;const old=levelData().level;state.completed.push(q.id);state.xp+=q.reward;state.points+=q.points;state.research+=1;save();render();const gained=levelData().level-old;showToast(`Missão concluída! +${q.reward} XP, +${q.points} ${q.points===1?'ponto':'pontos'} e +1 pesquisa${gained?` · nível ${levelData().level}!`:''}`);}));}
const studies = [
  {id:'runes',name:'Símbolos ancestrais',desc:'Decifre inscrições e registre um novo método de pesquisa.',missions:1},
  {id:'elements',name:'Afinidade dos elementos',desc:'Compare tradições mágicas e descubra pontos de convergência.',missions:2},
  {id:'essence',name:'Essência viva',desc:'Estude a ligação entre instinto, vigor e energia arcana.',missions:3}
];
function availableSkills(){return [...Object.values(paths).flatMap(path=>path.skills.filter(skill=>state.unlocked.includes(skill.id))),...state.customSkills];}
function escapeHTML(value){return String(value).replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));}
function renderWorkshop(){
  $('researchCount').textContent=state.research;
  const completedMissions=state.completed.length;
  $('studyGrid').innerHTML=studies.map(study=>{
    const done=state.studied.includes(study.id),available=completedMissions>=study.missions;
    return `<article class="study-card ${done?'studied':''} ${!available&&!done?'unavailable':''}"><div class="study-icon">${done?'✓':'⌕'}</div><div class="study-copy"><b>${study.name}</b><small>${done?'Pesquisa concluída':study.desc}</small><span>${available?'Recompensa: +1 pesquisa':`Requer ${study.missions} ${study.missions===1?'missão concluída':'missões concluídas'}`}</span></div><button class="study-button" data-study="${study.id}" ${done||!available?'disabled':''}>${done?'Estudado':'Estudar'}</button></article>`;
  }).join('');
  document.querySelectorAll('[data-study]').forEach(button=>button.addEventListener('click',()=>{
    const study=studies.find(item=>item.id===button.dataset.study);
    if(!study||state.studied.includes(study.id)||state.completed.length<study.missions)return;
    state.studied.push(study.id);state.research+=1;save();render();showToast(`Estudo concluído: ${study.name} · +1 pesquisa`);
  }));
  const skills=availableSkills();
  if(skills.length<2){
    $('craftControls').innerHTML='<p class="craft-empty">Desbloqueie ao menos duas habilidades para começar uma combinação.</p>';
  }else{
    const options=skills.map(skill=>`<option value="${escapeHTML(skill.id)}">${escapeHTML(skill.name)}</option>`).join('');
    $('craftControls').innerHTML=`<label>Primeira habilidade<select id="craftFirst">${options}</select></label><span class="craft-plus">＋</span><label>Segunda habilidade<select id="craftSecond">${options}</select></label><button class="primary-button craft-button" id="craftSkill" ${state.research<2?'disabled':''}>✧ Criar · 2 pesquisas</button>`;
    $('craftSecond').selectedIndex=1;
    $('craftSkill').addEventListener('click',()=>{
      const first=skills.find(skill=>skill.id===$('craftFirst').value),second=skills.find(skill=>skill.id===$('craftSecond').value);
      if(!first||!second||first.id===second.id){showToast('Escolha duas habilidades diferentes.');return;}
      const ingredients=[first.id,second.id].sort(),recipeKey=ingredients.join('|');
      if(state.customSkills.some(skill=>skill.recipeKey===recipeKey)){showToast('Essa combinação já foi pesquisada.');return;}
      if(state.research<2){showToast('Você precisa de 2 pontos de pesquisa.');return;}
      const created={id:`craft_${Date.now().toString(36)}_${Math.random().toString(36).slice(2,7)}`,name:`Ressonância: ${first.name} + ${second.name}`,icon:'✧',desc:`Uma técnica original descoberta ao combinar ${first.name} e ${second.name}. Conhecimentos de vocações distintas se encontram em um novo estilo.`,stats:[first.stats[0],second.stats[0]],effect:`Combina os efeitos de ${first.name} e ${second.name}.`,recipeKey,ingredients};
      state.research-=2;state.customSkills.push(created);save();render();showToast('Nova habilidade criada e adicionada ao seu arsenal!');
    });
  }
  $('creationCount').textContent=state.customSkills.length;
  $('creationList').innerHTML=state.customSkills.length?state.customSkills.map(skill=>{
    const equipped=state.equipped.includes(skill.id);
    return `<article class="creation-card"><span class="creation-icon">${escapeHTML(skill.icon||'✧')}</span><div class="creation-copy"><b>${escapeHTML(skill.name)}</b><small>${escapeHTML(skill.desc)}</small><span>${(Array.isArray(skill.stats)?skill.stats:[]).map(escapeHTML).join(' · ')}</span></div><button class="creation-equip ${equipped?'equipped':''}" data-creation-equip="${escapeHTML(skill.id)}">${equipped?'✓ Equipada':'＋ Equipar'}</button></article>`;
  }).join(''):'<p class="creation-empty">Suas descobertas aparecerão aqui. Combine habilidades dominadas para criar algo inédito.</p>';
  document.querySelectorAll('[data-creation-equip]').forEach(button=>button.addEventListener('click',()=>{
    const id=button.dataset.creationEquip;
    if(state.equipped.includes(id))state.equipped=state.equipped.filter(item=>item!==id);
    else if(state.equipped.length<3)state.equipped.push(id);
    else{showToast('Seu arsenal está cheio. Remova uma habilidade antes de equipar outra.');return;}
    save();render();
  }));
}
function render(){renderHeader();renderPaths();renderTree();renderDetail();renderLoadout();renderQuests();renderWorkshop();}
function showToast(message){const t=$('toast');t.textContent=message;t.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.remove('show'),2600);}
$('zoomIn').addEventListener('click',()=>setZoom(Math.min(1.2,zoom+.1)));$('zoomOut').addEventListener('click',()=>setZoom(Math.max(.7,zoom-.1)));
function setZoom(value){zoom=value;$('zoomLabel').textContent=`${Math.round(zoom*100)}%`;const world=$('treeWorld');world.style.setProperty('--zoom',zoom);world.classList.toggle('zoomed',window.innerWidth<700);if(window.innerWidth>=700){world.style.transform=`scale(${zoom})`;world.style.transformOrigin='top left';world.style.marginLeft='auto';}$('treeViewport').style.height=`${Math.max(390,465*zoom)}px`;}
$('resetMissionsButton').addEventListener('click',()=>{if(!confirm('Resetar todas as missões concluídas? Os XP e pontos já recebidos serão mantidos.'))return;state.completed=[];save();render();showToast('Missões da jornada reiniciadas.');});
$('resetResearchButton').addEventListener('click',()=>{if(!confirm('Resetar pesquisa e estudos? Habilidades criadas e equipamentos serão mantidos.'))return;state.research=0;state.studied=[];save();render();showToast('Pesquisa e estudos reiniciados.');});
$('resetButton').addEventListener('click',()=>{if(!confirm('Recomeçar a jornada? Todo o progresso, habilidades e missões serão reiniciados.'))return;state={...initialState,unlocked:[],equipped:[],completed:[],studied:[],customSkills:[]};selectedSkill=null;save();render();showToast('Uma nova lenda começa agora.');});
const help=$('helpDialog');$('helpButton').addEventListener('click',()=>help.showModal());$('closeHelp').addEventListener('click',()=>help.close());$('gotIt').addEventListener('click',()=>help.close());$('profileButton').addEventListener('click',()=>showToast('Você é quem escreve esta lenda.'));
render();
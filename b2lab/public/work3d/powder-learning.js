import { enrichPowderGuide } from './powder-vocab.js';
// 專業名稱以可見構造與照片標示為準；一般製程知識不代表已辨識出現場機型。
export function applyPowderLearning(e){
 e.en='Powder Coating Line';e.zh='粉體塗裝產線';e.note='依 18 張照片建立示意模型。定位點可切換為「只顯示選取」或「隱藏」；右側清單仍可選設備。內部／外觀會隨選取切換。';
 const data=[
 ['Overhead conveyor','懸吊輸送機','運送懸掛工件，串接前處理、噴粉與爐體。照片可見輸送軌與吊鉤。','a system that carries hanging parts','conveyor speed / line speed','The conveyor carries the parts through the coating line.','輸送機把工件送過塗裝產線。','carry parts through…＝把工件送過……；conveyor 是輸送機，conveyor track 是軌道。'],
 ['Part hanger','工件吊具／吊鉤','懸掛工件。粉體靜電塗裝還需要可靠的工件接地；照片本身無法證明接地合格。','a hook or fixture that holds a part','hang a part / clean the hangers','We clean the hangers to maintain good electrical contact.','我們清理吊具，保持良好的電氣接觸。','hang a part on a hanger＝把工件掛到吊具上；ground the part＝讓工件接地。'],
 ['Overhead lifting frame','上方吊掛支架','黃色立柱與樑支撐裝卸吊掛裝置，屬搬運輔助設備。','a frame that supports lifting equipment','lifting frame / loading area','The lifting frame supports the hoist in the loading area.','吊掛支架支撐裝卸區的吊車。','support the hoist＝支撐吊車；load / unload parts＝裝載／卸下工件。'],
 ['Electric chain hoist','電動鏈條吊車','照片可見吊車、鏈條與紅色移動樑，用於裝卸搬運。','a powered device that lifts a load with a chain','lift a load / lower the load','Use the chain hoist to lift the fixture.','使用鏈條吊車吊起治具。','hoist 指吊升裝置；fixture 指定位或固定工件的治具。'],
 ['Coating room enclosure','塗裝房外殼','房體有門與觀察窗；照片未完整拍到噴粉位置，不能把整座房體等同單一噴粉室。','the walls around a coating area','coating room / powder coating booth','The powder coating booth contains overspray during spraying.','噴粉時，粉體噴房用來將溢散粉末限制在噴房內。','powder coating＝粉體塗裝；powder coating booth＝噴粉室。此例句是一般設備用途，噴房位置仍待確認。'],
 ['Powder collection unit','粉末收集設備（回收方式待確認）','照片可見集塵箱、錐斗與風管。是否為可回用粉末的回收系統、是否含旋風分離器，需設備資料確認。','equipment that collects airborne powder','collect overspray / cartridge filter','The recovery system collects overspray from the booth.','回收系統收集噴房內未附著到工件上的粉末。','overspray＝未附著的溢散粉末；collection 是收集，reclaim 是回收再利用，兩者不一定相同。'],
 ['Hanger storage rack','吊具存放架','集中存放空吊具，屬裝卸與整理輔助設備。','a rack used to store hangers','store hangers / empty hangers','Put the empty hangers back on the storage rack.','把空吊具放回存放架。','put…back on…＝把……放回……上。'],
 ['Interior overview','門內設備總覽','以移除外殼的方式查看內部示意。前處理、供氣、水處理及熱源等都是塗裝線常見的配套。','a view of the equipment inside','equipment layout / process flow','This view shows the equipment layout inside the coating line.','這個視圖顯示塗裝產線內部的設備配置。','layout＝空間配置；process flow＝製程順序，兩者不一定相同。'],
 ['Elevated process enclosure','高架製程箱體（爐體用途待確認）','可見高架金屬箱、端部遮簾與輸送軌。可能屬熱處理段，但無法單憑照片區分水切烘乾爐與粉體固化爐。','an enclosed section above the floor','dry-off oven / curing oven','Parts must be dry before powder is applied.','工件在上粉前必須乾燥。','dry-off oven 去除前處理後的水分；curing oven 讓粉末熔融並依配方固化。不能把兩者都叫 drying oven。'],
 ['Maintenance platform','維修平台','橘色網格平台、護欄與直梯，用於設備接近與維護。','a platform used to access equipment','access platform / guardrail','The platform provides access to the conveyor.','這座平台提供接近輸送機的位置。','provide access to…＝提供接近／進入……的途徑。'],
 ['Twin-tower air treatment unit','雙塔空氣處理設備（用途待確認）','外觀與吸附式壓縮空氣乾燥設備相似，這是依照片作的推測；須以銘牌確認。粉體供氣通常需要乾燥、潔淨的壓縮空氣。','a unit with two vessels for treating air','compressed air / air dryer','The powder gun needs clean, dry compressed air.','粉體噴槍需要乾淨、乾燥的壓縮空氣。','compressed air＝壓縮空氣；air dryer＝空氣乾燥機。不能因為有雙塔就當成水處理濾罐。'],
 ['Utility equipment cabinet','藍灰配套設備機櫃（機型待確認）','有散熱槽及金屬排氣管，無足夠銘牌資訊確認是何種熱源或配套設備。','a cabinet that houses utility equipment','ventilation openings / equipment nameplate','Check the nameplate to identify this unit.','查看銘牌，確認這台設備的種類。','nameplate＝銘牌；identify the unit＝辨識這台設備。'],
 ['Grated work area','格柵作業區','照片可見金屬格柵與槽體；格柵可能提供站立或排液空間，不能直接判定此處就是噴粉區。','a work area with a metal grate','floor grating / work platform','Keep loose items off the floor grating.','格柵地面上不要放散落物品。','grating＝格柵；drainage＝排液，須依現場結構確認。'],
 ['Water treatment system','水處理設備組','照片標示可辨識多介質過濾與軟化設備，另可見膜殼、控制架與管路。常見用途是供應前處理或洗淨用水；實際去向需追管確認。','equipment that filters or treats process water','multimedia filter / water softener','The water softener reduces hardness in the process water.','軟化器降低製程用水的硬度。','water softener 降低硬度；RO system（reverse osmosis）是逆滲透系統，功能不同。'],
 ['Process tank with a top-mounted motor','製程槽與上方馬達（槽別待確認）','槽體、上蓋、馬達與壓力表可辨識；可能是前處理配套，但無法確認槽液、槽別或馬達用途。','a tank with a motor mounted on top','process tank / circulation pump','This tank is part of the process equipment.','這個槽體是製程設備的一部分。','degreasing＝脫脂；rinsing＝水洗；pretreatment＝塗裝前處理。槽別不可只憑外觀指定。'],
 ['Burner-equipped heating unit','配有燃燒器的加熱設備','金屬箱體前方可見紅色燃燒器及管路；加熱哪一段、燃料種類與設定值須查設備資料。','a heating unit fitted with a burner','burner / heat source','The burner supplies heat to the heating system.','燃燒器提供熱量給加熱系統。','burner 是燃燒器；oven 是爐體。看到燃燒器不等於確認是固化爐。'],
 ['Electrical control cabinet','電氣控制櫃','灰色高櫃有散熱風扇、百葉與燈號，用來安裝電氣控制元件；具體控制範圍待現場確認。','a cabinet containing electrical controls','control panel / status light','Check the status lights on the control cabinet.','查看控制櫃上的狀態燈。','control cabinet＝控制櫃；control panel＝控制面板。']
 ];
 data.forEach((d,i)=>Object.assign(e.parts[i],{en:d[0],zh:d[1],desc:d[2],def:d[3],collocation:d[4],ex:d[5],exCn:d[6],usage:d[7],pos:'n.'}));
 e.processGuide=[
 {en:'Pretreatment',zh:'前處理',text:'脫脂、洗淨與適合基材的表面處理。常見設備有清洗槽／噴淋設備、循環泵與水處理組。現場水處理可見；槽別仍待確認。',part:14},
 {en:'Dry-off',zh:'水切烘乾',text:'上粉前去除工件水分，常用 dry-off oven。高架箱體是否屬此段，須確認製程圖。',part:8},
 {en:'Powder application',zh:'靜電上粉',text:'常見設備：electrostatic powder gun（靜電粉體噴槍）、powder feed center（供粉中心）、powder coating booth（噴粉室）。噴槍與供粉中心在現有照片中尚未清楚辨識，未在模型虛設位置。',part:4},
 {en:'Recovery and filtration',zh:'粉末回收與過濾',text:'回收溢散粉末，常見 cyclone separator（旋風分離器）及 cartridge filter（濾筒）。照片可見收集箱，但回用流程與分離方式待確認。',part:5},
 {en:'Curing and cooling',zh:'固化與冷卻',text:'curing oven（固化爐）使塗層依粉末配方完成固化，再冷卻。爐溫、工件金屬溫度與時間需依粉末規格及現場製程；照片無法確認固化爐位置。',part:8},
 {en:'Utilities and quality control',zh:'配套與品質檢查',text:'輸送與接地、乾燥潔淨的壓縮空氣、控制系統，以及 coating thickness gauge（膜厚計）等。膜厚與固化品質檢查重要，但量具尚未在照片中辨識。',part:10}
 ];
 enrichPowderGuide(e);
 e.sources=[{title:'Cambridge｜美式發音參考',url:'https://dictionary.cambridge.org/us/pronunciation/english/'},{title:'GFS｜固化爐與工業爐',url:'https://globalfinishing.com/products/cure/industrial-ovens/'},{title:'PPG｜供氣、接地與粉體塗裝問題排查',url:'https://powdercoatings.ppg.com/pages/powder-troubleshooting-guide'},{title:'Nordson｜粉體噴房、供粉與回收設備',url:'https://www.nordson.com/en/divisions/industrial-coating-solutions/application-solutions/powder-coating/powder-coating-booths'},{title:'Powder Coating Institute｜前處理、固化與供氣常見問題',url:'https://www.powdercoating.org/page/FAQ'}];
}
export function powderGuideHTML(e,onclick){
 if(!e.processGuide)return '';const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 return '<details class="wpbox w3d-learning"><summary class="wphead">粉體塗裝：常見設備與英文用法</summary><div class="wpbody"><p>以下是一般製程順序，並非這座工廠已確認的配置。點選可查看相關設備或待確認區域。每個術語附簡易英文說明及原創例句；複合詞音標依組成詞的美式讀音標示。</p>'+e.processGuide.map(s=>'<div class="wpitem"><button type="button" class="btn ghost sm w3d-button" data-w3d-part="'+s.part+'" '+(onclick?'onclick="'+onclick+'('+s.part+')"':'')+'>'+esc(s.en)+' · '+esc(s.zh)+'</button><p lang="en">美式 '+esc(s.ipa)+'<br>'+esc(s.def)+'</p><p lang="en">'+esc(s.ex)+'<br><span lang="zh-Hant">'+esc(s.exCn)+'</span></p><p>'+esc(s.text)+'</p>'+s.terms.map(t=>'<div class="w3d-term"><strong lang="en">'+esc(t.en)+'</strong> · '+esc(t.zh)+'<p lang="en">美式 '+esc(t.ipa)+' ('+esc(t.pos)+')<br>'+esc(t.def)+'</p><p lang="en">'+esc(t.ex)+'<br><span lang="zh-Hant">'+esc(t.exCn)+'</span></p></div>').join('')+'</div>').join('')+'<p>英文重點：powder coating 是粉體塗裝；spray painting 常指液體噴漆。dry-off 是除水烘乾，curing 是固化。</p><p>'+e.sources.map(s=>'<a href="'+esc(s.url)+'" target="_blank" rel="noopener">'+esc(s.title)+'</a>').join(' · ')+'</p></div></details>';
}
